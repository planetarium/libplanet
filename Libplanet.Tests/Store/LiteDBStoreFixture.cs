using System;
using System.IO;
using Libplanet.Store;

namespace Libplanet.Tests.Store
{
    public class LiteDBStoreFixture : StoreFixture, IDisposable
    {
        public LiteDBStoreFixture()
        {
            string postfix = Guid.NewGuid().ToString();
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(), $"litedb_{postfix}.db");
            Store = new LiteDBStore(Path);
        }

        public string Path { get; }

        public override void Dispose()
        {
            (Store as LiteDBStore)?.Dispose();
            File.Delete(Path);
        }
    }
}
