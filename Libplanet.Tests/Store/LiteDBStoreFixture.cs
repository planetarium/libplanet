using System;
using System.IO;
using Libplanet.Store;
using LiteDB;

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

        public LiteDBStore Store { get; }

        public void Dispose()
        {
            Store?.Dispose();
            File.Delete(Path);
        }
    }
}
