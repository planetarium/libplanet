using System.Collections.Generic;
using System.Net;
using Libplanet.Stun.Attributes;
using Xunit;

namespace Libplanet.Stun.Tests.Attributes
{
    public class StunAddressExtensionsTest
    {
        public static IEnumerable<object[]> Testcases => new List<object[]>
        {
            new object[]
            {
                new IPEndPoint(IPAddress.Parse("2002:d3b0:815a:0:0:0:0:0"), 35206),
                new byte[]
                {
                    0x00, 0x02, 0xa8, 0x94, 0x01, 0x10, 0x77, 0xf2, 0xa5, 0xe3,
                    0xce, 0x0f, 0x6f, 0x49, 0xcb, 0x29, 0x64, 0x11, 0x0f, 0x3e,
                },
            },
            new object[]
            {
                new IPEndPoint(IPAddress.Parse("211.176.129.90"), 35206),
                new byte[]
                {
                    0x00, 0x01, 0xa8, 0x94, 0xf2, 0xa2, 0x25, 0x18,
                },
            },
        };

        [Theory]
        [MemberData(nameof(Testcases))]
        public void EncodeToBytes(IPEndPoint endpoint, byte[] expected)
        {
            var transactionId = new byte[]
            {
                0x24, 0xb9, 0xce, 0x0f, 0x6f, 0x49, 0xcb, 0x29, 0x64, 0x11,
                0x0f, 0x3e,
            };

            Assert.Equal(
                expected,
                endpoint.EncodeStunAddress(transactionId));
        }

        [Theory]
        [MemberData(nameof(Testcases))]
        public void DecodeFromBytes(IPEndPoint endpoint, byte[] encoded)
        {
            var transactionId = new byte[]
            {
                0x24, 0xb9, 0xce, 0x0f, 0x6f, 0x49, 0xcb, 0x29, 0x64, 0x11,
                0x0f, 0x3e,
            };

            Assert.Equal(
                endpoint,
                encoded.DecodeStunAddress(transactionId));
        }
    }
}
