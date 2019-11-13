using System;
using System.IO;
using Libplanet.Store;

namespace Libplanet.Tests.Store
{
    public class DefaultStoreFixture : StoreFixture, IDisposable
    {
        public DefaultStoreFixture(bool memory = false)
        {
            string postfix = Guid.NewGuid().ToString();
            Path = memory
                ? null
                : System.IO.Path.Combine(System.IO.Path.GetTempPath(), $"litedb_{postfix}");
            Store = new DefaultStore(Path);
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
