using Xunit;

namespace Libplanet.Tests
{
    public class EnumerableExtensionsTest
    {
        [Fact]
        public void LongSkipZero()
        {
            var enumerable = new[] { 2, 3, 5, 7, 11 };
            Assert.Equal(enumerable, enumerable.LongSkip(0));
        }

        [Fact]
        public void LongSkipInt()
        {
            var enumerable = new[] { 2, 3, 5, 7, 11 };
            Assert.Equal(new[] { 5, 7, 11 }, enumerable.LongSkip(2));
        }
    }
}
