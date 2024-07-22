using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store
{
    public class MemoryStoreFixture : StoreFixture
    {
        public MemoryStoreFixture(
            ImmutableArray<IAction>? beginBlockActions = null,
            ImmutableArray<IAction>? endBlockActions = null,
            ImmutableArray<IAction>? beginTxActions = null,
            ImmutableArray<IAction>? endTxActions = null)
            : base(beginBlockActions, endBlockActions, beginTxActions, endTxActions)
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
