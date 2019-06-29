using Libplanet.Stun.Attributes;
using Xunit;

namespace Libplanet.Stun.Tests.Attributes
{
    public class LifetimeTest
    {
        [Fact]
        public void EncodeToBytes()
        {
            var attr = new Lifetime(777);
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x0d, 0x00, 0x04, 0x00, 0x00, 0x03, 0x09,
                },
                attr.ToByteArray());
        }
    }
}
