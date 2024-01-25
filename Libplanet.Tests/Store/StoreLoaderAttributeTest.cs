using System;
using System.Collections.Specialized;
#if !NETFRAMEWORK
using static System.Web.HttpUtility;
#endif
using Libplanet.Store;
using Libplanet.Store.Trie;
#if NETFRAMEWORK
using static Mono.Web.HttpUtility;
#endif
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
        public void ListStoreLoaders()
        {
            Assert.Contains(
                StoreLoaderAttribute.ListStoreLoaders(),
                pair => pair.UriScheme == "test" &&
                    pair.DeclaringType == typeof(StoreLoaderAttributeTest)
            );
            Assert.DoesNotContain(
                StoreLoaderAttribute.ListStoreLoaders(),
                pair => pair.UriScheme == "non-existent"
            );
        }

        [Fact]
        public void LoadStore()
        {
            Assert.Null(StoreLoaderAttribute.LoadStore(new Uri("non-existent+test://")));
            (IStore Store, IStateStore StateStore)? pair =
                StoreLoaderAttribute.LoadStore(new Uri("test:///"));
            Assert.NotNull(pair);
            Assert.IsAssignableFrom<MemoryStore>(pair!.Value.Store);
            Assert.IsAssignableFrom<TrieStateStore>(pair.Value.StateStore);
        }

        [StoreLoader("test")]
        private static (IStore Store, IStateStore StateStore) TestLoader(Uri storeUri)
        {
            NameValueCollection query = ParseQueryString(storeUri.Query);
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            return (store, stateStore);
        }
    }
}
