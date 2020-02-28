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
    }
}
