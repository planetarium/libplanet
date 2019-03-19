using System.Net;
using Libplanet.Stun.Attributes;
using Xunit;

namespace Libplanet.Tests.Stun.Attributes
{
    public class StunAddressExtensionTest
    {
        [Fact]
        public void EncodeToBytes()
        {
            var transactionId = new byte[]
            {
                0x24, 0xb9, 0xce, 0x0f, 0x6f, 0x49, 0xcb, 0x29, 0x64, 0x11,
                0x0f, 0x3e,
            };

            var endpoint = new IPEndPoint(
                IPAddress.Parse("211.176.129.90"),
                35206);
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x01, 0xa8, 0x94, 0xf2, 0xa2, 0x25, 0x18,
                },
                endpoint.EncodeStunAddress(transactionId));
        }

        [Fact]
        public void DecodeFromBytes()
        {
            var transactionId = new byte[]
            {
                0x24, 0xb9, 0xce, 0x0f, 0x6f, 0x49, 0xcb, 0x29, 0x64, 0x11,
                0x0f, 0x3e,
            };

            var encoded = new byte[]
            {
                0x00, 0x01, 0xa8, 0x94, 0xf2, 0xa2, 0x25, 0x18,
            };

            Assert.Equal(
                new IPEndPoint(
                    IPAddress.Parse("211.176.129.90"),
                    35206),
                encoded.DecodeStunAddress(transactionId));
        }
    }
}
