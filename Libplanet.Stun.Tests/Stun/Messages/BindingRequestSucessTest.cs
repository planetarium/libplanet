using System.IO;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Stun.Messages;
using Xunit;

namespace Libplanet.Stun.Tests.Messages
{
    public class BindingRequestSucessTest
    {
        [Fact]
        public async Task ParseBytes()
        {
            var bytes = new byte[]
            {
                0x01, 0x01, 0x00, 0x0c, 0x21, 0x12, 0xa4, 0x42, 0xb9, 0x5e,
                0x6c, 0xcd, 0xa3, 0x84, 0x74, 0xfb, 0x43, 0xe9, 0xae, 0xb1,
                0x00, 0x20, 0x00, 0x08, 0x00, 0x01, 0xf2, 0x6f, 0xf2, 0xa2,
                0x25, 0x18,
            };

            using (var stream = new MemoryStream(bytes))
            {
                var response =
                    (BindingSuccessResponse)await StunMessage.ParseAsync(stream);
                Assert.Equal(
                    new IPEndPoint(IPAddress.Parse("211.176.129.90"), 54141),
                    response.MappedAddress);
            }
        }
    }
}
