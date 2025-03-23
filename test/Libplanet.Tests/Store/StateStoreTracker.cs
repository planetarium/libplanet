using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store;

public sealed class StateStoreTracker : BaseTracker, IStateStore
{
    private readonly IStateStore _stateStore;
    private bool _disposed = false;

    public StateStoreTracker(IStateStore stateStore)
    {
        _stateStore = stateStore;
    }

    public ITrie GetStateRoot(HashDigest<SHA256> stateRootHash)
    {
        Log(nameof(GetStateRoot), stateRootHash);
        return _stateStore.GetStateRoot(stateRootHash);
    }

    public ITrie Commit(ITrie trie)
    {
        Log(nameof(Commit), trie.Hash);
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
