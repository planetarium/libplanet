using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store
{
    public class MemoryStoreFixture : StoreFixture
    {
        public MemoryStoreFixture(IAction blockAction = null)
            : base(blockAction)
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
