using System;
using System.IO;
using Libplanet.Store;

namespace Libplanet.Tests.Store
{
    public class DefaultStoreFixture : StoreFixture, IDisposable
    {
        public DefaultStoreFixture(bool memory = false)
        {
            if (memory)
            {
                Path = null;
            }
            else
            {
                Path = System.IO.Path.Combine(
                    System.IO.Path.GetTempPath(),
                    $"defaultstore_test_{Guid.NewGuid()}"
                );
            }

            Store = new DefaultStore(Path, blockCacheSize: 2, txCacheSize: 2);
        }

        public string Path { get; }

        public override void Dispose()
        {
            (Store as DefaultStore)?.Dispose();

            if (!(Path is null))
            {
                Directory.Delete(Path, true);
            }
        }
    }
}
