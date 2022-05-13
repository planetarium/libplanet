using System;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Store
{
    public class MemoryStoreTest : StoreTest, IDisposable
    {
        public MemoryStoreTest(ITestOutputHelper testOutputHelper)
        {
            TestOutputHelper = testOutputHelper;
            Fx = new MemoryStoreFixture();
            FxConstructor = () => new MemoryStoreFixture();
        }

        protected override ITestOutputHelper TestOutputHelper { get; }

        protected override StoreFixture Fx { get; }

        protected override Func<StoreFixture> FxConstructor { get; }

        [Theory]
        [InlineData("memory:", false)]
        [InlineData("memory://", false)]
        [InlineData("memory://?secure=0", false)]
        [InlineData("memory://?secure=1", true)]
        [InlineData("memory://?secure=n", false)]
        [InlineData("memory://?secure=y", true)]
        [InlineData("memory://?secure=no", false)]
        [InlineData("memory://?secure=yes", true)]
        [InlineData("memory://?secure=f", false)]
        [InlineData("memory://?secure=t", true)]
        [InlineData("memory://?secure=false", false)]
        [InlineData("memory://?secure=true", true)]
        public void Loader(string uri, bool secure)
        {
            (IStore Store, IStateStore StateStore)? pair =
                StoreLoaderAttribute.LoadStore(new Uri(uri));
            Assert.NotNull(pair);
            IStore store = pair.Value.Store;
            Assert.IsAssignableFrom<MemoryStore>(store);
            var stateStore = (TrieStateStore)pair.Value.StateStore;
            Assert.Equal(secure, stateStore.Secure);
            Assert.IsAssignableFrom<MemoryKeyValueStore>(stateStore.StateKeyValueStore);
        }

        public void Dispose()
        {
            Fx?.Dispose();
        }
    }
}
