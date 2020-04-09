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

        [InlineData(16, "foo")]
        [InlineData(32, "foo")]
        [InlineData(32, "unicode-暗號")]
        [Theory]
        public void Derive(int size, string passphrase)
        {
            var randomBytes = new byte[size];
            using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomBytes);
            }

            T kdf = MakeInstance(randomBytes);
            ImmutableArray<byte> dFoo = kdf.Derive(passphrase);
            Assert.Equal(size, dFoo.Length);
            ImmutableArray<byte> dBar = kdf.Derive($"diffrent-{passphrase}");
            Assert.NotEqual(dFoo, dBar);
            TestUtils.AssertBytesEqual(dFoo, kdf.Derive(passphrase));
        }
    }
}
