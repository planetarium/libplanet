using Xunit;

namespace Libplanet.Tests.Net.Stun.Attributes
{
    public class NonceTest
    {
        [Fact]
        public void ConvertToBytesProperly()
        {
            var attr = new Libplanet.Net.Stun.Attributes.Nonce(
                new byte[]
                {
                    0x37, 0x35, 0x64, 0x34, 0x35, 0x34, 0x31, 0x39, 0x63, 0x33,
                    0x39, 0x33, 0x34, 0x33, 0x66, 0x65,
                });
            Assert.Equal(
                new byte[]
                {
                    0x00, 0x15, 0x00, 0x10, 0x37, 0x35, 0x64, 0x34, 0x35, 0x34,
                    0x31, 0x39, 0x63, 0x33, 0x39, 0x33, 0x34, 0x33, 0x66, 0x65,
                },
                attr.ToByteArray());
        }

        [Fact]
        public void ParseFromBytes()
        {
            Libplanet.Net.Stun.Attributes.Nonce attr =
                Libplanet.Net.Stun.Attributes.Nonce.Parse(
                    new byte[]
                    {
                        0x37, 0x35, 0x64, 0x34, 0x35, 0x34,
                        0x31, 0x39, 0x63, 0x33, 0x39, 0x33,
                        0x34, 0x33, 0x66, 0x65,
                    });
            Assert.Equal(
                new byte[]
                {
                    0x37, 0x35, 0x64, 0x34, 0x35, 0x34,
                    0x31, 0x39, 0x63, 0x33, 0x39, 0x33,
                    0x34, 0x33, 0x66, 0x65,
                },
                attr.Value);
        }
    }
}
