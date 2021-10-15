using Xunit;

namespace Libplanet.Tests
{
    public class EnumerableExtensionsTest
    {
        [Fact]
        public void LongSkipNegative()
        {
            var enumerable = new[] { 2, 3, 5, 7, 11 };
            Assert.Equal(enumerable, enumerable.LongSkip(long.MinValue));
        }

        [Fact]
        public void LongSkipPositiveInt()
        {
            var enumerable = new[] { 2, 3, 5, 7, 11 };
            Assert.Equal(new[] { 5, 7, 11 }, enumerable.LongSkip(2));
        }
    }
}
