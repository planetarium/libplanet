using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.KeyStore.Kdfs;
using Xunit;

namespace Libplanet.Tests.KeyStore.Kdfs
{
    public abstract class KdfTest<T>
        where T : IKdf
    {
        public abstract T MakeInstance(byte[] randomBytes);

        [InlineData(16)]
        [InlineData(32)]
        [Theory]
        public void Derive(int size)
        {
            var randomBytes = new byte[size];
            RandomNumberGenerator rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomBytes);
            T kdf = MakeInstance(randomBytes);
            ImmutableArray<byte> dFoo = kdf.Derive("foo");
            Assert.Equal(size, dFoo.Length);
            ImmutableArray<byte> dBar = kdf.Derive("bar");
            Assert.NotEqual(dFoo, dBar);
            TestUtils.AssertBytesEqual(dFoo, kdf.Derive("foo"));
        }
    }
}
