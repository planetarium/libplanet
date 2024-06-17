using Libplanet.Stun.Attributes;
using Xunit;

namespace Libplanet.Stun.Tests.Attributes
{
    public class RequestedTransportTest
    {
        [Fact]
        public void EncodeToBytes()
        {
            var attr = new RequestedTransport(
                RequestedTransport.TransportType.TCP);
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x19, 0x00, 0x04, 0x06, 0x00, 0x00, 0x00,
                },
                attr.ToByteArray());
        }
    }
}
