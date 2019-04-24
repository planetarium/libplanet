using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Threading;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

[assembly: InternalsVisibleTo("Libplanet.Tests")]
namespace Libplanet.Blockchain
{
    public class BlockChain<T> : IReadOnlyList<Block<T>>
        where T : IAction, new()
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
            Blocks = new BlockSet<T>(store);
            Transactions = new TransactionSet<T>(store);

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
                catch (ArgumentOutOfRangeException)
                {
                    return null;
                }
            }
        }

        public Guid Id { get; private set; }

        /// <summary>
        /// All <see cref="Block{T}"/>s in the <see cref="BlockChain{T}"/>
        /// storage, including orphan <see cref="Block{T}"/>s.
        /// Keys are <see cref="Block{T}.Hash"/>es and values are
        /// their corresponding <see cref="Block{T}"/>s.
        /// </summary>
        public IDictionary<HashDigest<SHA256>, Block<T>> Blocks
        {
            get; private set;
        }

        /// <summary>
        /// All <see cref="Transaction{T}"/>s in the <see cref="BlockChain{T}"/>
        /// storage, including orphan <see cref="Transaction{T}"/>s.
        /// Keys are <see cref="Transaction{T}.Id"/>s and values are
        /// their corresponding <see cref="Transaction{T}"/>s.
        /// </summary>
        public IDictionary<TxId, Transaction<T>> Transactions
        {
            get; private set;
        }

        /// <inheritdoc/>
        int IReadOnlyCollection<Block<T>>.Count =>
            checked((int)Store.CountIndex(Id.ToString()));

        internal IStore Store { get; }

        /// <inheritdoc/>
        public Block<T> this[int index] => this[(long)index];

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
                        throw new ArgumentOutOfRangeException();
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
            IReadOnlyList<Block<T>> blocks,
            DateTimeOffset currentTime
        )
        {
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
            _rwlock.EnterReadLock();
            try
            {
                if (offset == null)
                {
                    offset = Store.IndexBlockHash(Id.ToString(), -1);
                }
            }
            finally
            {
                _rwlock.ExitReadLock();
            }

            ImmutableDictionary<Address, BitArray> requestedAddresses =
                addresses.Select(addr =>
                    new KeyValuePair<Address, BitArray>(
                        addr,
                        new BitArray(addr.ToByteArray())
                    )
                ).ToImmutableDictionary();
            ImmutableHashSet<Address> requestedAddressSet =
                requestedAddresses.Keys.ToImmutableHashSet();

            bool IsPossiblyIn(BitArray addr, BitArray maskPattern)
            {
                var match = (BitArray)maskPattern.Clone();
                match.And(addr);
                return match.OfType<bool>().Any(bit => bit);
            }

            var coveredAddresses = new HashSet<Address>();
            var states = new AddressStateMap();

            while (offset != null)
            {
                states = (AddressStateMap)states.SetItems(
                    Store.GetBlockStates(offset.Value)
                    .Where(
                        kv => requestedAddresses.ContainsKey(kv.Key) &&
                        !states.ContainsKey(kv.Key))
                    );

                // If there is no mask for the offset (the store made in
                // the older versions of Libplanet may lack mask files),
                // make the mask to match to all possible addresses.
                var mask = new BitArray(
                    offset is HashDigest<SHA256> hash &&
                        Store.GetAddressesMask(hash) is Address a
                        ? a.ToByteArray()
                        : BlockSet<T>.WildcardMask
                );

                // Addresses that are definitely not existent.
                coveredAddresses.UnionWith(
                    requestedAddresses.Where(
                        pair => !IsPossiblyIn(pair.Value, mask)
                    ).Select(pair => pair.Key)
                );

                // Already gathered addresses.
                coveredAddresses.UnionWith(states.Keys);

                if (requestedAddressSet.SetEquals(coveredAddresses))
                {
                    break;
                }

                offset = Blocks[offset.Value].PreviousHash;
            }

            return states;
        }

        /// <summary>
        /// Adds a <paramref name="block"/> to the end of this chain.
        /// <para>Note that <see cref="IAction.Render"/> methods of
        /// all <see cref="IAction"/> objects that belong
        /// to the <paramref name="block"/> are called right after
        /// the <paramref name="block"/> is confirmed (and thus all states
        /// reflect changes in the <paramref name="block"/>).</para>
        /// </summary>
        /// <param name="block">A next <see cref="Block{T}"/>, which is mined,
        /// to add.</param>
        /// <exception cref="InvalidBlockException">Thrown when the given
        /// <paramref name="block"/> is invalid, in itself or according to
        /// the <see cref="Policy"/>.</exception>
        public void Append(Block<T> block) =>
            Append(block, DateTimeOffset.UtcNow);

        /// <summary>
        /// Adds a <paramref name="block"/> to the end of this chain.
        /// <para>Note that <see cref="IAction.Render"/> methods of
        /// all <see cref="IAction"/> objects that belong
        /// to the <paramref name="block"/> are called right after
        /// the <paramref name="block"/> is confirmed (and thus all states
        /// reflect changes in the <paramref name="block"/>).</para>
        /// </summary>
        /// <param name="block">A next <see cref="Block{T}"/>, which is mined,
        /// to add.</param>
        /// <param name="currentTime">The current time.</param>
        /// <exception cref="InvalidBlockException">Thrown when the given
        /// <paramref name="block"/> is invalid, in itself or according to
        /// the <see cref="Policy"/>.</exception>
        public void Append(Block<T> block, DateTimeOffset currentTime) =>
            Append(block, currentTime, render: true);

        public void StageTransactions(ISet<Transaction<T>> txs)
        {
            foreach (Transaction<T> tx in txs)
            {
                Transactions[tx.Id] = tx;
            }

            Store.StageTransactionIds(
                txs.Select(tx => tx.Id).ToImmutableHashSet()
            );
        }

        public Block<T> MineBlock(
            Address miner,
            DateTimeOffset currentTime
        )
        {
            string @namespace = Id.ToString();
            long index = Store.CountIndex(@namespace);
            long difficulty = Policy.GetNextBlockDifficulty(this);
            HashDigest<SHA256>? prevHash = Store.IndexBlockHash(
                @namespace,
                index - 1
            );
            List<Transaction<T>> transactions = Store
                .IterateStagedTransactionIds()
                .Select(Store.GetTransaction<T>)
                .OfType<Transaction<T>>()
                .ToList();

            Block<T> block = Block<T>.Mine(
                index: index,
                difficulty: difficulty,
                miner: miner,
                previousHash: prevHash,
                timestamp: currentTime,
                transactions: transactions
            );
            Append(block, currentTime);

            return block;
        }

        public Block<T> MineBlock(Address miner) =>
            MineBlock(miner, DateTimeOffset.UtcNow);

        internal void Append(
            Block<T> block,
            DateTimeOffset currentTime,
            bool render
        )
        {
            _rwlock.EnterUpgradeableReadLock();
            ActionEvaluation<T>[] evaluations;
            try
            {
                HashDigest<SHA256>? tip =
                    Store.IndexBlockHash(Id.ToString(), -1);

                block.Validate(
                    currentTime,
                    a => GetStates(new[] { a }, tip).GetValueOrDefault(a));
                InvalidBlockException e =
                    Policy.ValidateNextBlock(this, block);

                if (!(e is null))
                {
                    throw e;
                }

                evaluations = EvaluateActions(block);
                _rwlock.EnterWriteLock();
                try
                {
                    Blocks[block.Hash] = block;
                    SetStates(block.Hash, evaluations);

                    Store.AppendIndex(Id.ToString(), block.Hash);
                    ISet<TxId> txIds = block.Transactions
                        .Select(t => t.Id)
                        .ToImmutableHashSet();

                    Store.UnstageTransactionIds(txIds);
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }

            if (render)
            {
                foreach (var evaluation in evaluations)
                {
                    evaluation.Action.Render(
                        evaluation.InputContext,
                        evaluation.OutputStates
                    );
                }
            }
        }

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

                    if (currentHash.Equals(stop) || currentHash.Equals(tip))
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
            return Fork(point, DateTimeOffset.UtcNow);
        }

        internal BlockChain<T> Fork(
            HashDigest<SHA256> point,
            DateTimeOffset currentTime)
        {
            var forked = new BlockChain<T>(Policy, Store, Guid.NewGuid());
            try
            {
                _rwlock.EnterReadLock();
                foreach (var index in Store.IterateIndex(Id.ToString()))
                {
                    Store.AppendIndex(forked.Id.ToString(), index);
                    if (index.Equals(point))
                    {
                        break;
                    }
                }
            }
            finally
            {
                _rwlock.ExitReadLock();
            }

            return forked;
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
            // Finds the branch point.
            Block<T> topmostCommon = null;
            long shorterHeight =
                Math.Min(this.LongCount(), other.LongCount()) - 1;
            for (
                Block<T> t = this[shorterHeight], o = other[shorterHeight];
                t.PreviousHash is HashDigest<SHA256> tp &&
                    o.PreviousHash is HashDigest<SHA256> op;
                t = Blocks[tp], o = other.Blocks[op]
            )
            {
                if (t.Equals(o))
                {
                    topmostCommon = t;
                    break;
                }
            }

            // Unrender stale actions.
            for (
                Block<T> b = Tip;
                !(b is null) && b.Index > (topmostCommon?.Index ?? -1) &&
                    b.PreviousHash is HashDigest<SHA256> ph;
                b = Blocks[ph]
            )
            {
                var actions = b.EvaluateActionsPerTx(a =>
                    GetStates(new[] { a }, b.PreviousHash).GetValueOrDefault(a)
                ).Reverse();
                foreach (var (_, evaluation) in actions)
                {
                    evaluation.Action.Unrender(
                        evaluation.InputContext,
                        evaluation.OutputStates
                    );
                }
            }

            try
            {
                _rwlock.EnterWriteLock();

                Id = other.Id;
                Blocks = new BlockSet<T>(Store);
                Transactions = new TransactionSet<T>(Store);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }

            // Render actions that had been behind.
            IEnumerable<Block<T>> blocksToRender =
                topmostCommon is Block<T> branchPoint
                    ? this.SkipWhile(b => b.Index <= branchPoint.Index)
                    : this;
            foreach (Block<T> b in blocksToRender)
            {
                var actions = b.EvaluateActionsPerTx(a =>
                    GetStates(new[] { a }, b.PreviousHash).GetValueOrDefault(a)
                );
                foreach (var (_, evaluation) in actions)
                {
                    evaluation.Action.Render(
                        evaluation.InputContext,
                        evaluation.OutputStates
                    );
                }
            }
        }

        private ActionEvaluation<T>[] EvaluateActions(Block<T> block)
        {
            HashDigest<SHA256>? prevHash = block.PreviousHash;
            return block.EvaluateActionsPerTx(address =>
            {
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
            }).Select(t => t.Item2).ToArray();
        }

        private void SetStates(
            HashDigest<SHA256> blockHash,
            IReadOnlyList<ActionEvaluation<T>> actionEvaluations)
        {
            IAccountStateDelta lastStates = actionEvaluations.Count > 0
                ? actionEvaluations[actionEvaluations.Count - 1].OutputStates
                : null;
            ImmutableHashSet<Address> updatedAddresses =
                actionEvaluations.Select(
                    a => a.OutputStates.UpdatedAddresses
                ).Aggregate(
                    ImmutableHashSet<Address>.Empty,
                    (a, b) => a.Union(b)
                );
            ImmutableDictionary<Address, object> totalDelta =
                updatedAddresses.Select(
                    a => new KeyValuePair<Address, object>(
                        a,
                        lastStates?.GetState(a)
                    )
                ).ToImmutableDictionary();

            Store.SetBlockStates(
                blockHash,
                new AddressStateMap(totalDelta)
            );
        }
    }
}
