using System.Collections.Immutable;
using Libplanet.KeyStore.Ciphers;
using Xunit;
using Random = System.Random;

namespace Libplanet.Tests.KeyStore.Ciphers
{
    public abstract class CipherTest<T>
        where T : ICipher
    {
        public abstract T Cipher { get; }

        [Fact]
        public void EncryptDecrypt()
        {
            var random = new Random();
            var buffer = new byte[4096];
            random.NextBytes(buffer);
            ImmutableArray<byte> key = ImmutableArray.Create(buffer, 0, 16);
            random.NextBytes(buffer);
            ImmutableArray<byte> value = buffer.ToImmutableArray();
            T c = Cipher;
            ImmutableArray<byte> encrypted = c.Encrypt(key, value);
            ImmutableArray<byte> decrypted = c.Decrypt(key, encrypted);
            TestUtils.AssertBytesEqual(value, decrypted);
        }
    }
}
