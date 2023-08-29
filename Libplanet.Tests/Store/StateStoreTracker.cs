using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store
{
    public sealed class StateStoreTracker : BaseTracker, IStateStore
    {
        private readonly IStateStore _stateStore;
        private bool _disposed = false;

        public StateStoreTracker(IStateStore stateStore)
        {
            _stateStore = stateStore;
        }

        public ITrie GetStateRoot(HashDigest<SHA256>? stateRootHash, bool readOnly = false)
        {
            Log(nameof(GetStateRoot), stateRootHash);
            return _stateStore.GetStateRoot(stateRootHash, readOnly);
        }

        public IRecordableTrie GetRecordableStateRoot(
            HashDigest<SHA256>? stateRootHash,
            bool readOnly = false)
        {
            Log(nameof(GetRecordableStateRoot), stateRootHash);
            return _stateStore.GetRecordableStateRoot(stateRootHash, readOnly);
        }

        public void PruneStates(IImmutableSet<HashDigest<SHA256>> survivingStateRootHashes)
        {
            Log(nameof(PruneStates), survivingStateRootHashes);
            _stateStore.PruneStates(survivingStateRootHashes);
        }

        public IRecordableTrie CastToRecordableTrie(ITrie trie)
        {
            Log(nameof(CastToRecordableTrie), trie.Hash);
            return _stateStore.CastToRecordableTrie(trie);
        }

        public ITrie Commit(ITrie trie)
        {
            Log(nameof(CastToRecordableTrie), trie.Hash);
            return _stateStore.Commit(trie);
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                _stateStore?.Dispose();
                _disposed = true;
            }
        }
    }
}
