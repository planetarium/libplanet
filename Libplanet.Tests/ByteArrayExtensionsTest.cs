using System;
using Xunit;

namespace Libplanet.Tests
{
    public class ByteArrayExtensionsTest
    {
        [Fact]
        public void StartsWith()
        {
            byte[] bytes = null;

            Assert.Throws<ArgumentNullException>(() => bytes.StartsWith(new byte[] { 0 }));
            bytes = new byte[]
            {
                0, 1,
            };

            Assert.Throws<ArgumentNullException>(() => bytes.StartsWith(null));

            Assert.False(bytes.StartsWith(new byte[] { 0, 1, 2 }));
            Assert.False(bytes.StartsWith(new byte[] { 0, 2 }));
            Assert.False(bytes.StartsWith(new byte[] { 1 }));

            Assert.True(bytes.StartsWith(new byte[] { 0 }));
            Assert.True(bytes.StartsWith(new byte[] { 0, 1 }));
        }

        [Fact]
        public void IndexOf()
        {
            Func<string, byte[]> b = ByteUtil.ParseHex;
            Assert.Equal(-1, new byte[0].IndexOf(b("0a0b0c")));
            Assert.Equal(-1, b("0a0b").IndexOf(b("0a0b0c")));
            Assert.Equal(0, b("0a0b0c0d").IndexOf(b("0a0b0c")));
            Assert.Equal(1, b("0a0b0c0d").IndexOf(b("0b0c0d")));
            Assert.Equal(2, b("08090a0b0c0d").IndexOf(b("0a0b0c")));
            Assert.Equal(-1, b("07080a0b0c0d").IndexOf(b("070809")));
        }
    }
}
