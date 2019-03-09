using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Threading;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

[assembly: InternalsVisibleTo("Libplanet.Explorer")]
[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Blockchain
{
    public class BlockChain<T> : IEnumerable<Block<T>>
        where T : IAction
    {
        private readonly ReaderWriterLockSlim _rwlock;

        public BlockChain(IBlockPolicy<T> policy, IStore store)
            : this(policy, store, Guid.NewGuid())
        {
        }

        public BlockChain(IBlockPolicy<T> policy, IStore store, Guid id)
        {
            Id = id;
            Policy = policy;
            Store = store;
            Blocks = new BlockSet<T>(store, Id.ToString());
            Transactions = new TransactionSet<T>(store, Id.ToString());
            Addresses = new AddressTransactionSet<T>(store, Id.ToString());

            _rwlock = new ReaderWriterLockSlim(
                LockRecursionPolicy.SupportsRecursion);
        }

        ~BlockChain()
        {
            _rwlock?.Dispose();
        }

        public IBlockPolicy<T> Policy { get; }

        public Block<T> Tip
        {
            get
            {
                try
                {
                    return this[-1];
                }
                catch (IndexOutOfRangeException)
                {
                    return null;
                }
            }
        }

        public Guid Id { get; private set; }

        internal IDictionary<HashDigest<SHA256>, Block<T>> Blocks
        {
            get; private set;
        }

        internal IDictionary<TxId, Transaction<T>> Transactions
        {
            get; private set;
        }

        internal IDictionary<Address, IEnumerable<Transaction<T>>> Addresses
        {
            get; private set;
        }

        internal IStore Store { get; }

        public Block<T> this[long index]
        {
            get
            {
                try
                {
                    _rwlock.EnterReadLock();

                    HashDigest<SHA256>? blockHash = Store.IndexBlockHash(
                        Id.ToString(), index
                    );
                    if (blockHash == null)
                    {
                        throw new IndexOutOfRangeException();
                    }

                    return Blocks[blockHash.Value];
                }
                finally
                {
                    _rwlock.ExitReadLock();
                }
            }
        }

        public void Validate(
            IEnumerable<Block<T>> blocks, DateTimeOffset currentTime)
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
            try
            {
                _rwlock.EnterReadLock();

                IEnumerable<HashDigest<SHA256>> indexes = Store.IterateIndex(
                    Id.ToString()
                );
                foreach (HashDigest<SHA256> hash in indexes)
                {
                    yield return Blocks[hash];
                }
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public AddressStateMap GetStates(
            IEnumerable<Address> addresses, HashDigest<SHA256>? offset = null)
        {
            try
            {
                _rwlock.EnterReadLock();
                if (offset == null)
                {
                    offset = Store.IndexBlockHash(Id.ToString(), -1);
                }

                var states = new AddressStateMap();
                while (offset != null)
                {
                    states = (AddressStateMap)states.SetItems(
                        Store.GetBlockStates(Id.ToString(), offset.Value)
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
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        public void Append(Block<T> block, DateTimeOffset currentTime)
        {
            try
            {
                _rwlock.EnterWriteLock();

                Validate(Enumerable.Append(this, block), currentTime);
                Blocks[block.Hash] = block;
                EvaluateActions(block);

                Store.AppendIndex(Id.ToString(), block.Hash);
                ISet<TxId> txIds = block.Transactions
                    .Select(t => t.Id)
                    .ToImmutableHashSet();

                Store.UnstageTransactionIds(Id.ToString(), txIds);
                foreach (Transaction<T> tx in block.Transactions)
                {
                    foreach (Address address in tx.UpdatedAddresses)
                    {
                        Store.AppendAddressTransactionId(
                            Id.ToString(),
                            address,
                            tx.Id
                        );
                    }
                }
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        public void Append(Block<T> block) => Append(
            block, DateTimeOffset.UtcNow);

        public void StageTransactions(ISet<Transaction<T>> txs)
        {
            try
            {
                _rwlock.EnterWriteLock();

                foreach (Transaction<T> tx in txs)
                {
                    Transactions[tx.Id] = tx;
                }

                Store.StageTransactionIds(
                    Id.ToString(),
                    txs.Select(tx => tx.Id).ToImmutableHashSet()
                );
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        public Block<T> MineBlock(
            Address rewardBeneficiary,
            DateTimeOffset currentTime
        )
        {
            try
            {
                _rwlock.EnterWriteLock();

                string @namespace = Id.ToString();
                long index = Store.CountIndex(@namespace);
                int difficulty = Policy.GetNextBlockDifficulty(this);
                HashDigest<SHA256>? prevHash = Store.IndexBlockHash(
                    @namespace,
                    index - 1
                );
                List<Transaction<T>> transactions = Store
                    .IterateStagedTransactionIds(@namespace)
                    .Select(txId => Store.GetTransaction<T>(@namespace, txId))
                    .OfType<Transaction<T>>()
                    .ToList();

                Block<T> block = Block<T>.Mine(
                    index: index,
                    difficulty: difficulty,
                    rewardBeneficiary: rewardBeneficiary,
                    previousHash: prevHash,
                    timestamp: currentTime,
                    transactions: transactions
                );
                Append(block, currentTime);

                return block;
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        public Block<T> MineBlock(Address rewardBeneficiary) =>
            MineBlock(rewardBeneficiary, DateTimeOffset.UtcNow);

        internal HashDigest<SHA256> FindBranchPoint(BlockLocator locator)
        {
            try
            {
                _rwlock.EnterReadLock();

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
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal IEnumerable<HashDigest<SHA256>> FindNextHashes(
            BlockLocator locator,
            HashDigest<SHA256>? stop = null,
            int count = 500)
        {
            try
            {
                _rwlock.EnterReadLock();

                HashDigest<SHA256>? Next(HashDigest<SHA256> hash)
                {
                    long nextIndex = Blocks[hash].Index + 1;
                    return Store.IndexBlockHash(Id.ToString(), nextIndex);
                }

                HashDigest<SHA256>? tip = Store.IndexBlockHash(
                    Id.ToString(), -1);
                HashDigest<SHA256>? currentHash = FindBranchPoint(locator);

                while (currentHash != null && count > 0)
                {
                    yield return currentHash.Value;

                    if (currentHash == stop || currentHash == tip)
                    {
                        break;
                    }

                    currentHash = Next(currentHash.Value);
                    count--;
                }
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal BlockChain<T> Fork(HashDigest<SHA256> point)
        {
            var forked = new BlockChain<T>(Policy, Store, Guid.NewGuid());
            try
            {
                _rwlock.EnterReadLock();
                foreach (var index in Store.IterateIndex(Id.ToString()))
                {
                    forked.Append(Blocks[index]);

                    if (index == point)
                    {
                        break;
                    }
                }

                return forked;
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        internal BlockLocator GetBlockLocator(int threshold = 10)
        {
            try
            {
                _rwlock.EnterReadLock();

                HashDigest<SHA256>? current = Store.IndexBlockHash(
                    Id.ToString(), -1);
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
                    current = Store.IndexBlockHash(Id.ToString(), nextIndex);

                    if (hashes.Count > threshold)
                    {
                        step *= 2;
                    }
                }

                return new BlockLocator(hashes);
            }
            finally
            {
                _rwlock.ExitReadLock();
            }
        }

        // FIXME it's very dangerous because replacing Id means
        // ALL blocks (referenced by MineBlock(), etc.) will be changed.
        // we need to add a synchronization mechanism to handle this correctly.
        internal void Swap(BlockChain<T> other)
        {
            try
            {
                _rwlock.EnterWriteLock();

                Id = other.Id;
                Blocks = new BlockSet<T>(Store, Id.ToString());
                Transactions = new TransactionSet<T>(Store, Id.ToString());
                Addresses = new AddressTransactionSet<T>(Store, Id.ToString());
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        private void EvaluateActions(Block<T> block)
        {
            HashDigest<SHA256>? prevHash = block.PreviousHash;
            var dirty = ImmutableDictionary<Address, object>.Empty;

            int seed = BitConverter.ToInt32(block.Hash.ToByteArray(), 0);
            foreach (Transaction<T> tx in block.Transactions)
            {
                int txSeed = seed ^ BitConverter.ToInt32(tx.Signature, 0);
                foreach (T action in tx.Actions)
                {
                    var prevState = new AccountStateDeltaImpl(address =>
                    {
                        if (!ReferenceEquals(dirty, null) &&
                            dirty.ContainsKey(address))
                        {
                            return dirty[address];
                        }

                        IImmutableDictionary<Address, object> result =
                            GetStates(new[] { address }, prevHash);
                        try
                        {
                            return result[address];
                        }
                        catch (KeyNotFoundException)
                        {
                            return null;
                        }
                    });
                    var context = new ActionContext(
                        signer: tx.Signer,
                        blockIndex: block.Index,
                        previousStates: prevState,
                        randomSeed: unchecked(txSeed++)
                    );
                    IAccountStateDelta delta = action.Execute(context);
                    dirty = dirty.SetItems(delta.GetUpdatedStates());
                }
            }

            Store.SetBlockStates(
                Id.ToString(),
                block.Hash,
                new AddressStateMap(dirty)
            );
        }
    }
}
