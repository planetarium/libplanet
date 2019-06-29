using Libplanet.Stun.Messages;
using Xunit;

namespace Libplanet.Stun.Tests.Messages
{
    public class BindingRequestTest
    {
        [Fact]
        public void EncodeToBytes()
        {
            var request = new BindingRequest()
            {
                TransactionId = new byte[]
                {
                    0xb9, 0x5e, 0x6c, 0xcd, 0xa3, 0x84, 0x74, 0xfb, 0x43, 0xe9,
                    0xae, 0xb1,
                },
            };
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x01, 0x00, 0x08, 0x21, 0x12, 0xa4, 0x42, 0xb9, 0x5e,
                    0x6c, 0xcd, 0xa3, 0x84, 0x74, 0xfb, 0x43, 0xe9, 0xae, 0xb1,
                    0x80, 0x28, 0x00, 0x04, 0xa7, 0xca, 0x62, 0xd4,
                },
                request.Encode(new TestStunContext()));
        }
    }
}
