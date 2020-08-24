#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store
{
    /// <summary>
    /// An <see cref="IStateStore"/> implementation. It stores states with <see cref="MerkleTrie"/>.
    /// </summary>
    public class TrieStateStore : IStateStore
    {
        private readonly IKeyValueStore _stateKeyValueStore;
        private readonly IKeyValueStore _stateHashKeyValueStore;

        /// <summary>
        /// Creates a new <see cref="TrieStateStore"/>.
        /// </summary>
        /// <param name="stateKeyValueStore">The storage to store states. It used by
        /// <see cref="MerkleTrie"/> in internal.</param>
        /// <param name="stateHashKeyValueStore">The storage to store state hash corresponding to
        /// block hash.</param>
        public TrieStateStore(
            IKeyValueStore stateKeyValueStore, IKeyValueStore stateHashKeyValueStore)
        {
            _stateKeyValueStore = stateKeyValueStore;
            _stateHashKeyValueStore = stateHashKeyValueStore;
        }

        /// <inheritdoc/>
        public void SetStates<T>(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states,
            Func<HashDigest<SHA256>, Block<T>> blockGetter)
            where T : IAction, new()
        {
            MerkleTrie prevStatesTrie;
            try
            {
                Block<T> block = blockGetter(blockHash);
                var previousBlockStateHashBytes = block?.PreviousHash is null
                    ? null
                    : _stateHashKeyValueStore.Get(block.PreviousHash.Value.ToByteArray());
                var trieRoot = previousBlockStateHashBytes is null
                    ? null
                    : new HashNode(new HashDigest<SHA256>(previousBlockStateHashBytes));
                prevStatesTrie = new MerkleTrie(_stateKeyValueStore, trieRoot);
            }
            catch (KeyNotFoundException)
            {
                prevStatesTrie = new MerkleTrie(_stateKeyValueStore);
            }

            foreach (var pair in states)
            {
                prevStatesTrie.Set(Encoding.UTF8.GetBytes(pair.Key), pair.Value);
            }

            var newStateTrie = prevStatesTrie.Commit();
            _stateHashKeyValueStore.Set(
                blockHash.ToByteArray(), newStateTrie.Root!.Hash().ToByteArray());
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
                _stateKeyValueStore, new HashNode(new HashDigest<SHA256>(stateHash)));
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
    }
}
