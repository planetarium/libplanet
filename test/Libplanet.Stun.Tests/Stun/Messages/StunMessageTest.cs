using System.Collections.Generic;
using System.Linq;
using Libplanet.Stun.Attributes;
using Libplanet.Stun.Messages;
using Xunit;

namespace Libplanet.Stun.Tests.Messages
{
    public class StunMessageTest
    {
        [Fact]
        public void ParseClass()
        {
            Assert.Equal(
                StunMessage.MessageClass.Request,
                StunMessage.ParseClass(0x00, 0x03)
            );
            Assert.Equal(
                StunMessage.MessageClass.Request,
                StunMessage.ParseClass(0x00, 0x04)
            );
            Assert.Equal(
                StunMessage.MessageClass.Request,
                StunMessage.ParseClass(0x00, 0x08)
            );

            Assert.Equal(
                StunMessage.MessageClass.ErrorResponse,
                StunMessage.ParseClass(0x01, 0x13)
            );
            Assert.Equal(
                StunMessage.MessageClass.SuccessResponse,
                StunMessage.ParseClass(0x01, 0x03)
            );

            Assert.Equal(
                StunMessage.MessageClass.Indication,
                StunMessage.ParseClass(0x00, 0x1c)
            );
        }

        [Fact]
        public void ParseMethod()
        {
            Assert.Equal(
                StunMessage.MessageMethod.Allocate,
                StunMessage.ParseMethod(0x00, 0x03)
            );

            Assert.Equal(
                StunMessage.MessageMethod.Refresh,
                StunMessage.ParseMethod(0x00, 0x04)
            );

            Assert.Equal(
                StunMessage.MessageMethod.CreatePermission,
                StunMessage.ParseMethod(0x00, 0x08)
            );

            Assert.Equal(
                StunMessage.MessageMethod.ConnectionBind,
                StunMessage.ParseMethod(0x00, 0x0b)
            );
        }

        [Fact]
        public void ParseAttributes()
        {
            var payload = new byte[]
            {
                0x00, 0x09, 0x00, 0x10, 0x00, 0x00, 0x04, 0x01, 0x55, 0x6e,
                0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x7a, 0x65, 0x64,
                0x00, 0x15, 0x00, 0x10, 0x37, 0x35, 0x64, 0x34, 0x35, 0x34,
                0x31, 0x39, 0x63, 0x33, 0x39, 0x33, 0x34, 0x33, 0x66, 0x65,
                0x00, 0x14, 0x00, 0x0a, 0x74, 0x77, 0x69, 0x6c, 0x69, 0x6f,
                0x2e, 0x63, 0x6f, 0x6d, 0x03, 0x6d, 0x80, 0x22, 0x00, 0x04,
                0x4e, 0x6f, 0x6e, 0x65, 0x80, 0x28, 0x00, 0x04, 0x6e, 0x1e,
                0x55, 0x49,
            };

            Assert.Equal(
                new Attribute[]
                {
                    new ErrorCode(401, "Unauthorized"),
                    new Libplanet.Stun.Attributes.Nonce(
                        new byte[]
                        {
                            0x37, 0x35, 0x64, 0x34, 0x35, 0x34,
                            0x31, 0x39, 0x63, 0x33, 0x39, 0x33,
                            0x34, 0x33, 0x66, 0x65,
                        }
                    ),
                    new Realm("twilio.com"),
                    new Software("None"),
                    new Fingerprint(1847481673),
                },
                StunMessage.ParseAttributes(payload),
                new AttributeComparer()
            );
        }

        private class AttributeComparer : IEqualityComparer<Attribute>
        {
            public bool Equals(Attribute x, Attribute y)
            {
                return x.ToByteArray().SequenceEqual(y.ToByteArray());
            }

            public int GetHashCode(Attribute obj)
            {
                return obj.ToByteArray().GetHashCode();
            }
        }
    }
}
