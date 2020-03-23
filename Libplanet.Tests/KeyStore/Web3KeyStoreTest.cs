using System;
using System.IO;
using System.Runtime.InteropServices;
using Libplanet.Crypto;
using Libplanet.KeyStore;
using Xunit;

namespace Libplanet.Tests.KeyStore
{
    public class Web3KeyStoreTest : KeyStoreTest<Web3KeyStore>, IDisposable
    {
        public Web3KeyStoreTest()
        {
            var tempDir = Path.Combine(Path.GetTempPath(), Path.GetRandomFileName());
            KeyStore = new Web3KeyStore(tempDir);
        }

        public override Web3KeyStore KeyStore { get; }

        [Fact]
        public void Constructor()
        {
            // Constructor creates a directory if needed.
            Assert.True(Directory.Exists(KeyStore.Path));
        }

        [Fact]
        public void DefaultKeyStore()
        {
            string path = Web3KeyStore.DefaultKeyStore.Path;
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux) ||
                RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
            {
                Assert.Equal(
                    Path.Combine(
                        Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
                        ".config",
                        "planetarium",
                        "keystore"
                    ),
                    path
                );
            }
            else if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
            {
                Assert.Equal(
                    Path.Combine(
                        Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData),
                        "planetarium",
                        "keystore"
                    ),
                    path
                );
            }
        }

        [Fact]
        public void Load()
        {
            string idStr = "c8b0c0b1-82a0-41cd-9528-a22a0f208dee";
            Guid id = Guid.Parse(idStr);
            var path = Path.Combine(KeyStore.Path, $"UTC--2020-03-23T00-00-00Z--{idStr}");
            var key = new PrivateKey();
            ProtectedPrivateKey ppk = ProtectedPrivateKey.Protect(key, "pass");
            using (var f = new FileStream(path, FileMode.Create))
            {
                ppk.WriteJson(f, id);
            }

            Assert.Equal(new[] { id }, KeyStore.ListIds());
            Assert.Equal(ppk.Address, KeyStore.Get(id).Address);
        }

        public void Dispose()
        {
            Directory.Delete(KeyStore.Path, true);
        }
    }
}
