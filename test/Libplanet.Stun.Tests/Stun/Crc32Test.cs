using System;
using System.Text;
using Xunit;

namespace Libplanet.Stun.Tests
{
    public class Crc32Test
    {
        [Fact]
        public void Calculate()
        {
            byte[] bytes = Encoding.ASCII.GetBytes(
                "The quick brown fox jumps over the lazy dog");
            uint expected = BitConverter.ToUInt32(
                new byte[]
                {
                    0x39, 0xa3, 0x4f, 0x41,
                }, 0);
            Assert.Equal(expected, Crc32.Calculate(bytes));
        }
    }
}
