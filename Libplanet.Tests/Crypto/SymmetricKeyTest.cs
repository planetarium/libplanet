using System.Collections.Immutable;
using System.Linq;
using System.Text;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Crypto
{
    public class SymmetricKeyTest
    {
        private static readonly byte[] KeyBytes =
            {
                0x34, 0x9c, 0x46, 0x9e, 0x0e, 0xa9, 0xeb, 0x88, 0x22,
                0x65, 0x8a, 0xaf, 0x08, 0x17, 0xa2, 0x21, 0xd7, 0xfd,
                0x4b, 0xe7, 0x8b, 0x24, 0x3f, 0x45, 0x5d, 0x72, 0xb6,
                0x0f, 0x9b, 0x1a, 0x3a, 0x4e,
            };

        [Fact]
        public void DecryptTest()
        {
            var ciphertext = ByteUtil.ParseHex(
                "1881342a2930cdc2734ae15e143a09fe5b0a5f113b0e2fcfc8d56f23c508a2890d7139c592cf4e4c76758a9b2317cb94");
            var expected = Encoding.ASCII.GetBytes("a secret message");
            var aes = new SymmetricKey(KeyBytes);
            var actual = aes.Decrypt(ciphertext);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void ByteArray()
        {
            var aes = new SymmetricKey(KeyBytes);
            ImmutableArray<byte> expected = KeyBytes.ToImmutableArray();
            ImmutableArray<byte> actual = aes.ByteArray;
            Assert.Equal<byte>(expected, actual);
        }

        [Fact]
        public void ToByteArray()
        {
            var aes = new SymmetricKey(KeyBytes);
            Assert.Equal(KeyBytes, aes.ToByteArray());
        }
    }
}
