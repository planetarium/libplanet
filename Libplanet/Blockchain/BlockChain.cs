using System;
using System.Collections;
using System.Collections.Async;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Blockchain
{
    public class BlockChain<T> : IEnumerable<Block<T>>
        where T : IAction
    {
        public BlockChain(IBlockPolicy<T> policy, IStore store)
        {
            Policy = policy;
            Store = store;
            Blocks = new BlockSet<T>(store);
            Transactions = new TransactionSet<T>(store);
            Addresses = new AddressTransactionSet<T>(store);
        }

        public IBlockPolicy<T> Policy { get; }

        public IDictionary<HashDigest<SHA256>, Block<T>> Blocks { get; }

        public IDictionary<TxId, Transaction<T>> Transactions { get; }

        public IDictionary<Address, IEnumerable<Transaction<T>>> Addresses
        {
            get;
        }

        public IStore Store { get; }

        public Block<T> Tip => this[-1];

        public Block<T> this[long index]
        {
            get
            {
                HashDigest<SHA256>? blockHash =
                    Store.IndexBlockHash(index).Result;
                if (blockHash == null)
                {
                    throw new IndexOutOfRangeException();
                }

                return Blocks[blockHash.Value];
            }
        }

        public void Validate(IEnumerable<Block<T>> blocks, DateTime currentTime)
        {
            foreach (Block<T> block in blocks)
            {
                block.Validate(currentTime);
            }

            InvalidBlockException e =
                Policy.ValidateBlocks(blocks, currentTime);

            if (e != null)
            {
                throw e;
            }
        }

        public IEnumerator<Block<T>> GetEnumerator()
        {
            return Store.IterateIndex().Select(
                hash => Blocks[hash]
            ).ToListAsync().Result.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public async Task<AddressStateMap> GetStates(
            IEnumerable<Address> addresses, HashDigest<SHA256>? offset = null)
        {
            if (offset == null)
            {
                offset = await Store.IndexBlockHash(-1);
            }

            var states = new AddressStateMap();
            while (offset != null)
            {
                states = (AddressStateMap)states.SetItems(
                    (await Store.GetBlockStates(offset.Value))
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

        public async Task Append(Block<T> block, DateTime currentTime)
        {
            Validate(Enumerable.Append(this, block), currentTime);
            Blocks[block.Hash] = block;
            await EvaluateActions(block);

            ISet<TxId> txIds = block.Transactions
                .Select(t => t.Id)
                .ToImmutableHashSet();

            await Store.UnstageTransactionIds(txIds);
            foreach (Transaction<T> tx in block.Transactions)
            {
                await Store.AppendAddressTransactionId(tx.Recipient, tx.Id);
            }
        }

        public Task Append(Block<T> block) => Append(block, DateTime.UtcNow);

        public void StageTransactions(ISet<Transaction<T>> txs)
        {
            foreach (Transaction<T> tx in txs)
            {
                Transactions[tx.Id] = tx;
            }

            Store.StageTransactionIds(
                txs.Select(tx => tx.Id).ToImmutableHashSet());
        }

        public async Task<Block<T>> MineBlock(
            Address rewardBeneficiary,
            DateTime currentTime
        )
        {
            long index = await Store.CountIndex();
            int difficulty = Policy.GetNextBlockDifficulty(this);

            List<Transaction<T>> transactions =
                Store.IterateStagedTransactionIds()
                    .Select(txId => Store.GetTransaction<T>(txId))
                    .OfType<Transaction<T>>()
                    .ToListAsync()
                    .Result;
            Block<T> block = Block<T>.Mine(
                index: index,
                difficulty: difficulty,
                rewardBeneficiary: rewardBeneficiary,
                previousHash: await Store.IndexBlockHash(index - 1),
                timestamp: currentTime,
                transactions: transactions
            );
            await Append(block, currentTime);

            return block;
        }

        public Task<Block<T>> MineBlock(Address rewardBeneficiary) =>
            MineBlock(rewardBeneficiary, DateTime.UtcNow);

        internal HashDigest<SHA256> FindBranchPoint(BlockLocator locator)
        {
            // Assume locator is sorted descending by height.
            foreach (HashDigest<SHA256> hash in locator)
            {
                if (Blocks.ContainsKey(hash))
                {
                    return Blocks[hash].Hash;
                }
            }

            return this[0].Hash;
        }

        internal IAsyncEnumerable<HashDigest<SHA256>> FindNextHashes(
            BlockLocator locator,
            HashDigest<SHA256>? stop = null,
            int count = 500)
        {
            return new AsyncEnumerable<HashDigest<SHA256>>(async yield =>
            {
                Task<HashDigest<SHA256>?> Next(HashDigest<SHA256> hash)
                {
                    long nextIndex = Blocks[hash].Index + 1;
                    return Store.IndexBlockHash(nextIndex);
                }

                HashDigest<SHA256>? tip = await Store.IndexBlockHash(-1);
                HashDigest<SHA256>? currentHash = FindBranchPoint(locator);

                while (currentHash != null && count > 0)
                {
                    await yield.ReturnAsync(currentHash.Value);

                    if (currentHash == stop || currentHash == tip)
                    {
                        break;
                    }

                    currentHash = await Next(currentHash.Value);
                    count--;
                }
            });
        }

        internal async Task DeleteAfter(HashDigest<SHA256> point)
        {
            HashDigest<SHA256>? current = await Store.IndexBlockHash(-1);

            while (current is HashDigest<SHA256> hash && hash != point)
            {
                HashDigest<SHA256>? previous = Blocks[hash].PreviousHash;
                await Store.DeleteBlock(hash);
                await Store.DeleteIndex(hash);

                current = previous;
            }
        }

        internal async Task<BlockLocator> GetBlockLocator(int threshold = 10)
        {
            HashDigest<SHA256>? current = await Store.IndexBlockHash(-1);
            long step = 1;
            var hashes = new List<HashDigest<SHA256>>();

            while (current is HashDigest<SHA256> hash)
            {
                hashes.Add(hash);
                Block<T> currentBlock = Blocks[hash];

                if (currentBlock.Index == 0)
                {
                    break;
                }

                long nextIndex = Math.Max(currentBlock.Index - step, 0);
                current = await Store.IndexBlockHash(nextIndex);

                if (hashes.Count > threshold)
                {
                    step *= 2;
                }
            }

            return new BlockLocator(hashes);
        }

        private async Task EvaluateActions(Block<T> block)
        {
            HashDigest<SHA256>? prevHash = block.PreviousHash;
            var states = new AddressStateMap();

            int seed = BitConverter.ToInt32(block.Hash.ToByteArray(), 0);
            foreach (Transaction<T> tx in block.Transactions)
            {
                int txSeed = seed ^ BitConverter.ToInt32(tx.Signature, 0);
                foreach (T action in tx.Actions)
                {
                    IEnumerable<Address> requestedAddresses =
                        action.RequestStates(tx.Sender, tx.Recipient);
                    AddressStateMap requested = await GetStates(
                        requestedAddresses.Except(states.Keys),
                        prevHash);
                    states = (AddressStateMap)requested.SetItems(states);
                    var prevState = new AddressStateMap(
                        requestedAddresses
                        .Where(states.ContainsKey)
                        .ToImmutableDictionary(a => a, a => states[a]));
                    var context = new ActionContext(
                        @from: tx.Sender,
                        to: tx.Recipient,
                        previousStates: prevState,
                        randomSeed: unchecked(txSeed++)
                    );
                    AddressStateMap changes = action.Execute(context);
                    states = (AddressStateMap)states.SetItems(changes);
                }
            }

            await Store.SetBlockStates(block.Hash, states);
        }
    }
}
