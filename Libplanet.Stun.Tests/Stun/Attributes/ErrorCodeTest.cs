using Libplanet.Stun.Attributes;
using Xunit;

namespace Libplanet.Stun.Tests.Attributes
{
    public class ErrorCodeTest
    {
        [Fact]
        public void EncodeToBytes()
        {
            var attr = new ErrorCode(401, "Unauthorized");
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x09, 0x00, 0x10, 0x00, 0x00, 0x04, 0x01, 0x55, 0x6e,
                    0x61, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x7a, 0x65, 0x64,
                },
                attr.ToByteArray());
        }

        [Fact]
        public void ParseFromBytes()
        {
            ErrorCode attr = ErrorCode.Parse(
                new byte[]
                {
                    0x00, 0x00, 0x04, 0x01, 0x55, 0x6e, 0x61, 0x75, 0x74, 0x68,
                    0x6f, 0x72, 0x69, 0x7a, 0x65, 0x64,
                });
            Assert.Equal(401, attr.Code);
            Assert.Equal("Unauthorized", attr.Reason);
        }
    }
}
