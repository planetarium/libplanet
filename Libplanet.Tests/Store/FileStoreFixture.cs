using System;
using System.IO;
using System.Threading;
using Libplanet.Store;
using Serilog;

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
            while (Directory.Exists(Path))
            {
                try
                {
                    Directory.Delete(Path, true);
                }
                catch (IOException)
                {
                    Log.Debug("IOException occurred during dispose()");
                }

                Thread.Sleep(0);
            }
        }
    }
}
