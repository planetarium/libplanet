using System;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Xunit;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class PublicKeyTypeTest : ScalarGraphTypeTestBase<PublicKeyType>
    {
        [Fact]
        public void Serialize()
        {
            var randomPublicKey = new PrivateKey().PublicKey;
            object serialized = _type.Serialize(randomPublicKey);
            Assert.Equal(randomPublicKey.ToString(), serialized);
        }

        [Theory]
        [InlineData(null)]
        [InlineData(0)]
        [InlineData("")]
        public void Serialize_ReturnsItselfIfNotPublicKeyType(object value)
        {
            Assert.Equal(value, _type.Serialize(value));
        }

        [Fact]
        public void ParseValue()
        {
            var expected = new PrivateKey().PublicKey;
            Assert.Equal(expected, _type.ParseValue(expected.ToString()));
        }

        [Fact]
        public void ParseValue_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _type.ParseValue(0));
            Assert.Throws<ArgumentException>(() => _type.ParseValue(new PrivateKey().PublicKey));
            Assert.Throws<ArgumentException>(() => _type.ParseValue(new object()));
        }
    }
}
