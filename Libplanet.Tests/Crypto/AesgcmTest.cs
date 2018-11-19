using System.Text;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Crypto
{
    public class AESGCMTest
    {
        [Fact]
        public void DecryptTest()
        {
            var key = ByteUtil.ParseHex(
                "349c469e0ea9eb8822658aaf0817a221d7fd4be78b243f455d72b60f9b1a3a4e");
            var ciphertext = ByteUtil.ParseHex(
                "1881342a2930cdc2734ae15e143a09fe5b0a5f113b0e2fcfc8d56f23c508a2890d7139c592cf4e4c76758a9b2317cb94");
            var expected = Encoding.ASCII.GetBytes("a secret message");
            var aes = new Aesgcm(key);
            var actual = aes.Decrypt(ciphertext);

            Assert.Equal(expected, actual);
        }
    }
}
