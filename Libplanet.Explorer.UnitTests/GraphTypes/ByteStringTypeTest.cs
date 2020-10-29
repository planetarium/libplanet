using Libplanet.Explorer.GraphTypes;
using Xunit;

namespace Libplanet.Explorer.UnitTests.GraphTypes
{
    public class ByteStringTypeTest : ScalarGraphTypeTestBase<ByteStringType>
    {
        [Theory]
        [InlineData(new byte[0], "")]
        [InlineData(new byte[] { 0xbe, 0xef }, "beef")]
        public void Serialize(byte[] bytes, string expected)
        {
            Assert.Equal(expected, _type.Serialize(bytes));
        }

        [Theory]
        [InlineData(null, null)]
        [InlineData("beef", new byte[] { 0xbe, 0xef })]
        public void ParseValue(object value, object parsed)
        {
            Assert.Equal(parsed, _type.ParseValue(value));
        }
    }
}
