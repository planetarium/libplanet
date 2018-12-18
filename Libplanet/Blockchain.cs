using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet
{
    public class Blockchain<T> : IEnumerable<Block<T>>
        where T : IAction
    {
        private static readonly TimeSpan BlockInterval = new TimeSpan(
            hours: 0,
            minutes: 0,
            seconds: 5
        );

        public Blockchain(IStore store)
        {
            Store = store;
            Blocks = new BlockSet<T>(store);
            Transactions = new TransactionSet<T>(store);
            Addresses = new AddressTransactionSet<T>(store);
        }

        public IDictionary<HashDigest<SHA256>, Block<T>> Blocks { get; }

        public IDictionary<TxId, Transaction<T>> Transactions { get; }

        public IDictionary<Address, IEnumerable<Transaction<T>>> Addresses { get; }

        public IStore Store { get; }

        public Block<T> this[long index]
        {
            get
            {
                HashDigest<SHA256>? blockHash = Store.IndexBlockHash(index);
                if (blockHash == null)
                {
                    throw new IndexOutOfRangeException();
                }

                return Blocks[blockHash.Value];
            }
        }

        public static void Validate(IEnumerable<Block<T>> blocks)
        {
            HashDigest<SHA256>? prevHash = null;
            DateTime? prevTimestamp = null;
            DateTime now = DateTime.UtcNow;
            IEnumerable<(ulong i, DifficultyExpectation)> indexedDifficulties =
                ExpectDifficulties(blocks)
                .Select((exp, i) => { return ((ulong)i, exp); });

            foreach (var(i, exp) in indexedDifficulties)
            {
                Trace.Assert(exp.Block != null);
                Block<T> block = exp.Block;

                if (i != block.Index)
                {
                    throw new InvalidBlockIndexException(
                        $"the expected block index is {i}, but its index is" +
                        $" {block.Index}'"
                    );
                }

                if (block.Difficulty < exp.Difficulty)
                {
                    throw new InvalidBlockDifficultyException(
                        $"the expected difficulty of the block #{i} " +
                        $"is {exp.Difficulty}, but its difficulty is " +
                        $"{block.Difficulty}'"
                    );
                }

                if (block.PreviousHash != prevHash)
                {
                    if (prevHash == null)
                    {
                        throw new InvalidBlockPreviousHashException(
                            "the genesis block must have not previous block"
                        );
                    }

                    throw new InvalidBlockPreviousHashException(
                        $"the block #{i} is not continuous from the block #{i - 1};" +
                        $"while previous block's hash is {prevHash}, " +
                        $"the block #{i}'s pointer to the previous hash refers to " +
                        $"{block.PreviousHash?.ToString() ?? "nothing"}"
                    );
                }

                if (now < block.Timestamp)
                {
                    throw new InvalidBlockTimestampException(
                        $"the block #{i}'s timestamp ({block.Timestamp}) is " +
                        $"later than now ({now})"
                    );
                }

                if (block.Timestamp <= prevTimestamp)
                {
                    throw new InvalidBlockTimestampException(
                        $"the block #{i}'s timestamp ({block.Timestamp}) is earlier than " +
                        $"the block #{i - 1}'s ({prevTimestamp})"
                    );
                }

                block.Validate();
                prevHash = block.Hash;
                prevTimestamp = block.Timestamp;
            }
        }

        public IEnumerator<Block<T>> GetEnumerator()
        {
            foreach (HashDigest<SHA256> hash in Store.IterateIndex())
            {
                yield return Blocks[hash];
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public AddressStateMap GetStates(
            IEnumerable<Address> addresses, HashDigest<SHA256>? offset = null)
        {
            if (offset == null)
            {
                offset = Store.IndexBlockHash(-1);
            }

            var states = new AddressStateMap();
            while (offset != null)
            {
                states = (AddressStateMap)states.AddRange(
                    Store.GetBlockStates(offset.Value)
                    .Where(
                        kv => addresses.Contains(kv.Key) &&
                        !states.ContainsKey(kv.Key))
                );
                if (states.Keys.SequenceEqual(addresses))
                {
                    break;
                }

                offset = Blocks[offset.Value].PreviousHash;
            }

            return states;
        }

        public void Append(Block<T> block)
        {
            Validate(Enumerable.Append(this, block));
            Blocks[block.Hash] = block;
            EvaluateActions(block);

            long index = Store.AppendIndex(block.Hash);
            ISet<TxId> txIds = block.Transactions
                .Select(t => t.Id)
                .ToImmutableHashSet();

            Store.UnstageTransactionIds(txIds);
            foreach (Transaction<T> tx in block.Transactions)
            {
                Store.AppendAddressTransactionId(tx.Recipient, tx.Id);
            }
        }

        public void StageTransactions(ISet<Transaction<T>> txs)
        {
            foreach (Transaction<T> tx in txs)
            {
                Transactions[tx.Id] = tx;
            }

            Store.StageTransactionIds(
                txs.Select(tx => tx.Id).ToImmutableHashSet());
        }

        public Block<T> MineBlock(Address rewardBeneficiary)
        {
            ulong index = Store.CountIndex();
            uint difficulty = ExpectDifficulties(this, yieldNext: true)
                .Where(t => t.Block == null)
                .First()
                .Difficulty;

            Block<T> block = Block<T>.Mine(
                index: index,
                difficulty: difficulty,
                rewardBeneficiary: rewardBeneficiary,
                previousHash: Store.IndexBlockHash((long)index - 1),
                timestamp: DateTime.UtcNow,
                transactions: Store.IterateStagedTransactionIds()
                .Select(txId => Store.GetTransaction<T>(txId))
                .OfType<Transaction<T>>()
                .ToList()
            );
            Append(block);

            return block;
        }

        private static IEnumerable<DifficultyExpectation> ExpectDifficulties(
            IEnumerable<Block<T>> blocks, bool yieldNext = false)
        {
            DateTime? prevTimestamp = null;
            DateTime? prevPrevTimestamp = null;
            IEnumerable<Block<T>> blocks_ = blocks.Cast<Block<T>>();

            if (yieldNext)
            {
                blocks_ = blocks_.Append(null);
            }

            // genesis block's difficulty is 0
            yield return new DifficultyExpectation
            {
                Difficulty = 0,
                Block = blocks_.First()
            };

            uint difficulty = 1;
            prevTimestamp = blocks_.FirstOrDefault()?.Timestamp;

            foreach (Block<T> block in blocks_.Skip(1))
            {
                bool needMore =
                    prevPrevTimestamp != null &&
                    (
                    prevPrevTimestamp == null ||
                    prevTimestamp - prevPrevTimestamp < BlockInterval
                    );
                difficulty = Math.Max(needMore ? difficulty + 1 : difficulty - 1, 1);
                yield return new DifficultyExpectation
                {
                    Difficulty = difficulty,
                    Block = block
                };

                if (block != null)
                {
                    prevPrevTimestamp = prevTimestamp;
                    prevTimestamp = block.Timestamp;
                }
            }
        }

        private void EvaluateActions(Block<T> block)
        {
            HashDigest<SHA256>? prevHash = block.PreviousHash;
            var states = new AddressStateMap();

            foreach (Transaction<T> tx in block.Transactions)
            {
                foreach (T action in tx.Actions)
                {
                    ISet<Address> request = action
                        .RequestStates(tx.Sender, tx.Recipient);
                    states = (AddressStateMap)states
                        .AddRange(GetStates(request.Except(states.Keys)));
                    var requestedStates = new AddressStateMap(
                        request.ToImmutableDictionary(
                            addr => addr,
                            a => states.GetValueOrDefault(a, null)));
                    AddressStateMap stateChanges = action
                        .Execute(tx.Sender, tx.Recipient, requestedStates);
                    states = (AddressStateMap)states.AddRange(stateChanges);
                }
            }

            Store.SetBlockStates(block.Hash, states);
        }

        private struct DifficultyExpectation
        {
            internal Block<T> Block;

            internal uint Difficulty;
        }
    }
}
