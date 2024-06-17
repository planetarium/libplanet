using Libplanet.Stun.Attributes;
using Xunit;

namespace Libplanet.Stun.Tests.Attributes
{
    public class RealmTest
    {
        [Fact]
        public void EncodeToBytes()
        {
            var attr = new Realm("twilio.com");
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x14, 0x00, 0x0a, 0x74, 0x77, 0x69, 0x6c, 0x69, 0x6f,
                    0x2e, 0x63, 0x6f, 0x6d, 0x00, 0x00,
                },
                attr.ToByteArray());
        }

        [Fact]
        public void ParseFromBytes()
        {
            Realm attr = Realm.Parse(
                new byte[]
                {
                    0x74, 0x77, 0x69, 0x6c, 0x69, 0x6f, 0x2e, 0x63, 0x6f, 0x6d,
                });
            Assert.Equal("twilio.com", attr.Value);
        }
    }
}
