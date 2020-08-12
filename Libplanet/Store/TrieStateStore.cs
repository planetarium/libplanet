using System;
using System.Collections.Immutable;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;

namespace Libplanet.Store
{
    public class TrieStateStore : IStateStore
    {
        private readonly IKeyValueStore _stateKeyValueStore;
        private readonly IKeyValueStore _stateHashKeyValueStore;

        public TrieStateStore(string path)
        {
            if (!(path is null))
            {
                path = Path.GetFullPath(path);
            }

            _stateKeyValueStore =
                new DefaultKeyValueStore(path is null ? null : Path.Combine(path, "states"));
            _stateHashKeyValueStore =
                new DefaultKeyValueStore(path is null ? null : Path.Combine(path, "state_hash"));
        }

        internal TrieStateStore(
            IKeyValueStore stateKeyValueStore, IKeyValueStore stateHashKeyValueStore)
        {
            _stateKeyValueStore = stateKeyValueStore;
            _stateHashKeyValueStore = stateHashKeyValueStore;
        }

        public void SetStates<T>(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<string, IValue> states,
            Func<HashDigest<SHA256>, Block<T>> blockGetter)
            where T : IAction, new()
        {
            var block = blockGetter(blockHash);
            var previousBlockStateHashBytes = block.PreviousHash is null
                ? null
                : _stateHashKeyValueStore.Get(block.PreviousHash.Value.ToByteArray());
            var trieRoot = previousBlockStateHashBytes is null
                ? null
                : new HashNode(new HashDigest<SHA256>(previousBlockStateHashBytes));

            var prevStatesTrie = new Trie.Trie(_stateKeyValueStore, trieRoot);

            foreach (var pair in states)
            {
                prevStatesTrie.Set(Encoding.UTF8.GetBytes(pair.Key), pair.Value);
            }

            var newStateTrie = prevStatesTrie.Commit();
            _stateHashKeyValueStore.Set(
                blockHash.ToByteArray(), newStateTrie.Root.Hash().ToByteArray());
        }

        public IValue GetState(
            string stateKey,
            HashDigest<SHA256>? blockHash = null,
            Guid? chainId = null)
        {
            var stateHash = _stateHashKeyValueStore.Get(blockHash?.ToByteArray());
            var stateTrie = new Trie.Trie(
                _stateKeyValueStore, new HashNode(new HashDigest<SHA256>(stateHash)));
            var key = Encoding.UTF8.GetBytes(stateKey);
            return stateTrie.TryGet(key, out IValue value) ? value : null;
        }

        public bool ExistsBlockState(HashDigest<SHA256> blockHash)
        {
            return _stateHashKeyValueStore.Exists(blockHash.ToByteArray());
        }

        public void ForkStates<T>(Guid sourceChainId, Guid destinationChainId, Block<T> branchPoint)
            where T : IAction, new()
        {
            // Do nothing.
        }

        public HashDigest<SHA256>? GetRootHash(HashDigest<SHA256> blockHash)
            => _stateHashKeyValueStore.Get(blockHash.ToByteArray()) is byte[] bytes
                ? new HashDigest<SHA256>(bytes)
                : (HashDigest<SHA256>?)null;
    }
}
