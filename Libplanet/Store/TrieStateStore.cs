#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Serilog;

namespace Libplanet.Store
{
    /// <summary>
    /// An <see cref="IStateStore"/> implementation. It stores states with <see cref="MerkleTrie"/>.
    /// </summary>
    public class TrieStateStore : IStateStore, IDisposable
    {
        private readonly IKeyValueStore _stateKeyValueStore;
        private readonly IKeyValueStore _stateHashKeyValueStore;
        private readonly bool _secure;

        /// <summary>
        /// Creates a new <see cref="TrieStateStore"/>.
        /// </summary>
        /// <param name="stateKeyValueStore">The storage to store states. It used by
        /// <see cref="MerkleTrie"/> in internal.</param>
        /// <param name="stateHashKeyValueStore">The storage to store state hash corresponding to
        /// block hash.</param>
        /// <param name="secure">Whether to use <see cref="MerkleTrie"/> in secure mode.
        /// <seealso cref="MerkleTrie(IKeyValueStore, INode?, bool)"/>.</param>
        public TrieStateStore(
            IKeyValueStore stateKeyValueStore,
            IKeyValueStore stateHashKeyValueStore,
            bool secure = false)
        {
            _stateKeyValueStore = stateKeyValueStore;
            _stateHashKeyValueStore = stateHashKeyValueStore;
            _secure = secure;
        }

        /// <inheritdoc/>
        public void SetStates<T>(
            Block<T> block,
            IImmutableDictionary<string, IValue> states)
            where T : IAction, new()
        {
            _stateHashKeyValueStore.Set(
                block.Hash.ToByteArray(), EvalState(block, states).ToByteArray());
        }

        /// <inheritdoc/>
        public IValue? GetState(
            string stateKey,
            HashDigest<SHA256>? blockHash = null,
            Guid? chainId = null)
        {
            if (blockHash is null)
            {
                throw new ArgumentNullException(nameof(blockHash));
            }

            var stateHash = _stateHashKeyValueStore.Get(blockHash?.ToByteArray()!);
            var stateTrie = new MerkleTrie(
                _stateKeyValueStore, new HashNode(new HashDigest<SHA256>(stateHash)), _secure);
            var key = Encoding.UTF8.GetBytes(stateKey);
            return stateTrie.TryGet(key, out IValue? value) ? value : null;
        }

        /// <inheritdoc/>
        public bool ContainsBlockStates(HashDigest<SHA256> blockHash)
        {
            return _stateHashKeyValueStore.Exists(blockHash.ToByteArray());
        }

        /// <inheritdoc/>
        public void ForkStates<T>(Guid sourceChainId, Guid destinationChainId, Block<T> branchpoint)
            where T : IAction, new()
        {
            // Do nothing.
        }

        public void PruneStates(ImmutableHashSet<HashDigest<SHA256>> excludeBlockHashes)
        {
            var stopwatch = new Stopwatch();
            Log.Verbose($"Started {nameof(PruneStates)}()");
            var excludeNodes = new HashSet<HashDigest<SHA256>>();
            foreach (var blockHash in excludeBlockHashes)
            {
                if (!_stateHashKeyValueStore.Exists(blockHash.ToByteArray()))
                {
                    continue;
                }

                byte[] stateRootHashBytes = _stateHashKeyValueStore.Get(blockHash.ToByteArray());
                var stateTrie = new MerkleTrie(
                    _stateKeyValueStore,
                    new HashNode(new HashDigest<SHA256>(stateRootHashBytes)),
                    _secure);
                Log.Debug("Started to iterate hash nodes.");
                stopwatch.Start();
                foreach (HashDigest<SHA256> nodeHash in stateTrie.IterateHashNodes())
                {
                    excludeNodes.Add(nodeHash);
                }

                Log.Debug(
                    "Finished to iterate hash nodes (elapsed: {ElapsedMilliseconds} ms).",
                    stopwatch.ElapsedMilliseconds);
                stopwatch.Stop();
            }

            Log.Debug("{Count} hash nodes are excluded.", excludeNodes.Count);

            // Clean up nodes.
            long deleteCount = 0;
            Log.Debug("Started to clean up states.");
            stopwatch.Restart();
            foreach (var stateKey in _stateKeyValueStore.ListKeys())
            {
                if (excludeNodes.Contains(new HashDigest<SHA256>(stateKey)))
                {
                    continue;
                }

                _stateKeyValueStore.Delete(stateKey);
                ++deleteCount;
            }

            Log.Debug(
                "Finished to clean up {DeleteCount} state hashes " +
                "(elapsed: {ElapsedMilliseconds} ms).",
                deleteCount,
                stopwatch.ElapsedMilliseconds);
            stopwatch.Stop();

            // Clean up state root hashes.
            deleteCount = 0;
            Log.Debug("Started to clean up state hashes.");
            stopwatch.Restart();
            foreach (var stateHashKey in _stateHashKeyValueStore.ListKeys())
            {
                if (excludeBlockHashes.Contains(new HashDigest<SHA256>(stateHashKey)))
                {
                    continue;
                }

                _stateHashKeyValueStore.Delete(stateHashKey);
                ++deleteCount;
            }

            Log.Debug(
                "Finished to clean up {DeleteCount} states (elapsed: {ElapsedMilliseconds} ms).",
                deleteCount,
                stopwatch.ElapsedMilliseconds);
            stopwatch.Stop();
        }

        public void Dispose()
        {
            (_stateKeyValueStore as IDisposable)?.Dispose();
            (_stateHashKeyValueStore as IDisposable)?.Dispose();
        }

        /// <summary>
        /// Gets the state hash corresponds to <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> to get state hash.</param>
        /// <returns>If there is a state hash corresponds to <paramref name="blockHash"/>,
        /// it will return the state hash. If not, it will return null.</returns>
        /// <exception cref="KeyNotFoundException">If there are no root hashes that correspond to
        /// <paramref name="blockHash"/>.</exception>
        public HashDigest<SHA256> GetRootHash(HashDigest<SHA256> blockHash)
            => new HashDigest<SHA256>(_stateHashKeyValueStore.Get(blockHash.ToByteArray()));

        internal HashDigest<SHA256> EvalState<T>(
            Block<T> block,
            IImmutableDictionary<string, IValue> states,
            bool rehearsal = false)
            where T : IAction, new()
        {
            ITrie prevStatesTrie;
            var previousBlockStateHashBytes = block.PreviousHash is null
                ? null
                : _stateHashKeyValueStore.Get(block.PreviousHash.Value.ToByteArray());
            var trieRoot = previousBlockStateHashBytes is null
                ? null
                : new HashNode(new HashDigest<SHA256>(previousBlockStateHashBytes));
            prevStatesTrie = new MerkleTrie(_stateKeyValueStore, trieRoot, _secure);

            foreach (var pair in states)
            {
                prevStatesTrie = prevStatesTrie.Set(Encoding.UTF8.GetBytes(pair.Key), pair.Value);
            }

            var newStateTrie = prevStatesTrie.Commit(rehearsal);
            return newStateTrie.Hash;
        }

        internal ITrie GetTrie(HashDigest<SHA256> blockHash)
            =>
                new MerkleTrie(
                    _stateKeyValueStore,
                    new HashNode(
                        new HashDigest<SHA256>(
                            _stateHashKeyValueStore.Get(blockHash.ToByteArray()))));

        internal void SetStates<T>(
            Block<T> block,
            HashDigest<SHA256> stateRootHash)
            where T : IAction, new()
        {
            _stateHashKeyValueStore.Set(
                block.Hash.ToByteArray(), stateRootHash.ToByteArray());
        }
    }
}
