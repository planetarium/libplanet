using System;
using Libplanet.Store.Trie;
using Xunit;

namespace Libplanet.Tests.Store.Trie
{
    public class VolatileKeyValueStoreTest : KeyValueStoreTest, IDisposable
    {
        private readonly VolatileKeyValueStore _volatileKeyValueStore;

        public VolatileKeyValueStoreTest()
        {
            // Memory mode.
            KeyValueStore = _volatileKeyValueStore =
                new VolatileKeyValueStore(new DefaultKeyValueStore(null));
            InitializePreStoredData();
        }

        [SkippableFact]
        public override void Delete()
        {
            Assert.Throws<NotSupportedException>(
                () => KeyValueStore.Delete(new KeyBytes(TestUtils.GetRandomBytes(8))));
        }

        [SkippableFact]
        public override void DeleteMany()
        {
            Assert.Throws<NotSupportedException>(
                () => KeyValueStore.Delete(new[] { new KeyBytes(TestUtils.GetRandomBytes(8)) }));
        }

        public void Dispose()
        {
            _volatileKeyValueStore.Dispose();
        }
    }
}
