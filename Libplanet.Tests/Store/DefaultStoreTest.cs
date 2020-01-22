using System;
using System.IO;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Store
{
    public class DefaultStoreTest : StoreTest, IDisposable
    {
        private readonly DefaultStoreFixture _fx;

        public DefaultStoreTest(ITestOutputHelper testOutputHelper)
        {
            TestOutputHelper = testOutputHelper;
            Fx = _fx = new DefaultStoreFixture();
        }

        public void Dispose()
        {
            _fx?.Dispose();
        }

        [Fact]
        public void ConstructorAcceptsRelativePath()
        {
            string tmpDir = System.IO.Path.GetTempPath();
            string dirName = $"defaultstore_{Guid.NewGuid()}";
            string cwd = Directory.GetCurrentDirectory();
            IStore store;
            try
            {
                Directory.SetCurrentDirectory(tmpDir);
                store = new DefaultStore(dirName);
                store.PutTransaction(Fx.Transaction1);
            }
            finally
            {
                Directory.SetCurrentDirectory(cwd);
            }

            // If CWD is changed after DefaultStore instance was created
            // the instance should work as it had been.
            store.PutTransaction(Fx.Transaction2);

            // The following `identicalStore' instance should be identical to
            // the `store' instance above, i.e., views the same data.
            var identicalStore = new DefaultStore(Path.Combine(tmpDir, dirName));
            Assert.Equal(
                Fx.Transaction1,
                identicalStore.GetTransaction<DumbAction>(Fx.Transaction1.Id)
            );
            Assert.Equal(
                Fx.Transaction2,
                identicalStore.GetTransaction<DumbAction>(Fx.Transaction2.Id)
            );
        }

        [Fact]
        public void StateRefDocBlockHash()
        {
            var address = new PrivateKey().PublicKey.ToAddress();
            var random = new Random();
            var bytes = new byte[32];
            random.NextBytes(bytes);
            var hashDigest = new HashDigest<SHA256>(bytes);
            var stateRef = new DefaultStore.StateRefDoc
            {
                StateKey = address.ToHex().ToLowerInvariant(),
                BlockIndex = 123,
                BlockHash = hashDigest,
            };
            var stateRef2 = new DefaultStore.StateRefDoc
            {
                StateKey = stateRef.StateKey,
                BlockIndex = 123,
                BlockHashString = stateRef.BlockHashString,
            };
            Assert.Equal(stateRef.BlockHash, stateRef2.BlockHash);
        }
    }
}
