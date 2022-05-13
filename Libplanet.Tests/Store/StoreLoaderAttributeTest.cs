using System;
using System.Collections.Specialized;
using System.Web;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class StoreLoaderAttributeTest
    {
        [Fact]
        public void Constructor()
        {
            var attr = new StoreLoaderAttribute("Test");
            Assert.Equal("test", attr.UriScheme);
        }

        [Fact]
        public void LoadStore()
        {
            Assert.Null(StoreLoaderAttribute.LoadStore(new Uri("non-existent+test://")));
            (IStore Store, IStateStore StateStore)? pair =
                StoreLoaderAttribute.LoadStore(new Uri("test:///"));
            Assert.NotNull(pair);
            Assert.IsAssignableFrom<MemoryStore>(pair.Value.Store);
            Assert.IsAssignableFrom<TrieStateStore>(pair.Value.StateStore);
            var stateStore = (TrieStateStore)pair.Value.StateStore;
            Assert.False(stateStore.Secure);

            pair = StoreLoaderAttribute.LoadStore(new Uri("Test:///?secure=true"));
            Assert.NotNull(pair);
            Assert.IsAssignableFrom<MemoryStore>(pair.Value.Store);
            Assert.IsAssignableFrom<TrieStateStore>(pair.Value.StateStore);
            stateStore = (TrieStateStore)pair.Value.StateStore;
            Assert.True(stateStore.Secure);
        }

        [StoreLoader("test")]
        private static (IStore Store, IStateStore StateStore) TestLoader(Uri storeUri)
        {
            NameValueCollection query = HttpUtility.ParseQueryString(storeUri.Query);
            string secure = query.Get("secure")?.ToLowerInvariant();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(
                new MemoryKeyValueStore(),
                secure: secure == "t" || secure == "true"
            );
            return (store, stateStore);
        }
    }
}
