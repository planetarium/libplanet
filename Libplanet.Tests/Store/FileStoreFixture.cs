using System;
using System.IO;
using Libplanet.Store;

namespace Libplanet.Tests.Store
{
    public class FileStoreFixture : StoreFixture, IDisposable
    {
        public FileStoreFixture()
        {
            string postfix = Guid.NewGuid().ToString();
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(), $"filestore_test_{postfix}");
            Store = new FileStore(Path);
        }

        public string Path { get; }

        public void Dispose()
        {
            if (Directory.Exists(Path))
            {
                Directory.Delete(Path, true);
            }
        }
    }
}
