using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests
{
    public class AddressExtensionsTest
    {
        [Fact]
        public void ToAddress()
        {
            var privateKey = new PrivateKey(
                new byte[]
                {
                    0xbe, 0xe6, 0xf9, 0xcc, 0x62, 0x41, 0x27, 0x60, 0xb3, 0x69, 0x6e,
                    0x05, 0xf6, 0xfb, 0x4a, 0xbe, 0xb9, 0xe8, 0x3c, 0x4f, 0x94, 0x4f,
                    0x83, 0xfd, 0x62, 0x08, 0x1b, 0x74, 0x54, 0xcb, 0xc0, 0x38,
                }
            );
            var expected = new Address("f45A22dD63f6428e85eE0a6E13a763278f57626d");
            Assert.Equal(expected, privateKey.ToAddress());
            Assert.Equal(expected, privateKey.PublicKey.ToAddress());
        }
    }
}
