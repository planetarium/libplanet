using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store
{
    public class MemoryStoreFixture : StoreFixture
    {
        public MemoryStoreFixture(
            PolicyActionsRegistry policyActionsRegistry = null)
            : base(policyActionsRegistry)
        {
            Store = new MemoryStore();
            StateStore = new TrieStateStore(new MemoryKeyValueStore());
        }

        public override void Dispose()
        {
            Store?.Dispose();
            StateStore?.Dispose();
        }
    }
}
