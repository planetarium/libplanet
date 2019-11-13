using System;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Libplanet.Store;
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
        public void StateRefDocBlockHash()
        {
            var address = new PrivateKey().PublicKey.ToAddress();
            var random = new Random();
            var bytes = new byte[32];
            random.NextBytes(bytes);
            var hashDigest = new HashDigest<SHA256>(bytes);
            var stateRef = new DefaultStore.StateRefDoc
            {
                Address = address,
                BlockIndex = 123,
                BlockHash = hashDigest,
            };
            var stateRef2 = new DefaultStore.StateRefDoc
            {
                AddressString = stateRef.AddressString,
                BlockIndex = 123,
                BlockHashString = stateRef.BlockHashString,
            };
            Assert.Equal(stateRef.Address, stateRef2.Address);
            Assert.Equal(stateRef.BlockHash, stateRef2.BlockHash);
        }
    }
}
