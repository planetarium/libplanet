using System;
using Libplanet.Action;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store
{
    public class MemoryStoreFixture : StoreFixture
    {
        public MemoryStoreFixture(IAction? blockAction = null)
            : base(blockAction)
        {
            Store = new MemoryStore();
            StateStore = new TrieStateStore(new MemoryKeyValueStore());
        }

        public override IStore Store { get; }

        public override IStateStore StateStore { get; }

        public override IKeyValueStore StateKeyValueStore =>
            throw new InvalidOperationException();

        public override IKeyValueStore StateHashKeyValueStore =>
            throw new InvalidOperationException();

        public override void Dispose()
        {
            Store?.Dispose();
            StateStore?.Dispose();
        }
    }
}
