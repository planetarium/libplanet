using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Mocks
{
    public class MockBlockChainStates : IBlockChainStates
    {
        private IStateStore _stateStore;

        private Dictionary<BlockHash, HashDigest<SHA256>> _map;

        public MockBlockChainStates()
        {
            _stateStore = new TrieStateStore(new MemoryKeyValueStore());
            _map = new Dictionary<BlockHash, HashDigest<SHA256>>();
        }

        public IStateStore StateStore => _stateStore;

        public void AttachBlockHashToStateRootHash(
            BlockHash blockHash,
            HashDigest<SHA256> stateRootHash)
        {
            if (_map.ContainsKey(blockHash))
            {
                throw new ArgumentException(
                    $"Already contains block hash {blockHash} associated to " +
                    $"state root hash {_map[blockHash]}.",
                    nameof(blockHash));
            }
            else if (!_stateStore.GetStateRoot(stateRootHash).IsCommitted)
            {
                throw new ArgumentException(
                    $"No state root for given state root hash {stateRootHash} found.",
                    nameof(stateRootHash));
            }

            _map[blockHash] = stateRootHash;
        }

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(BlockHash?)"/>
        public IWorldState GetWorldState(BlockHash offset)
        {
            if (_map.ContainsKey(offset))
            {
                return GetWorldState(_map[offset]);
            }
            else
            {
                throw new ArgumentException(
                    $"No state root associated with given block hash {offset} found.",
                    nameof(offset));
            }
        }

        /// <inheritdoc cref="IBlockChainStates.GetWorldState(HashDigest{SHA256}?)"/>
        public IWorldState GetWorldState(HashDigest<SHA256> stateRootHash)
        {
            ITrie trie = _stateStore.GetStateRoot(stateRootHash);
            return trie.IsCommitted
                ? new WorldBaseState(trie, _stateStore)
                : throw new ArgumentException(
                    $"Could not find state root {stateRootHash} in {nameof(IStateStore)}.",
                    nameof(stateRootHash));
        }
    }
}
