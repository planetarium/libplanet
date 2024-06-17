using System;
using GraphQL.Language.AST;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Xunit;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class PublicKeyTypeTest : ScalarGraphTypeTestBase<PublicKeyType>
    {
        [Fact]
        public void ParseLiteral()
        {
            Assert.Null(_type.ParseLiteral(new NullValue()));

            var publicKey = new PrivateKey().PublicKey;
            var compressed = publicKey.ToHex(true);
            var uncompressed = publicKey.ToHex(false);
            Assert.Equal(
                publicKey,
                Assert.IsType<PublicKey>(_type.ParseLiteral(new StringValue(compressed))));
            Assert.Equal(
                publicKey,
                Assert.IsType<PublicKey>(_type.ParseLiteral(new StringValue(uncompressed))));

            Assert.Throws<InvalidOperationException>(
                () => _type.ParseLiteral(new LongValue(1234)));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new StringValue("publicKey")));
        }

        [Fact]
        public void ParseValue()
        {
            Assert.Null(_type.ParseValue(null));

            var publicKey = new PrivateKey().PublicKey;
            var compressed = publicKey.ToHex(true);
            var uncompressed = publicKey.ToHex(false);
            Assert.Equal(publicKey, _type.ParseValue(compressed));
            Assert.Equal(publicKey, _type.ParseValue(uncompressed));

            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(0));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new PrivateKey().PublicKey));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new object()));
        }

        [Fact]
        public void Serialize()
        {
            Assert.Null(_type.Serialize(null));

            var publicKey = new PrivateKey().PublicKey;
            var compressed = publicKey.ToHex(true);
            var uncompressed = publicKey.ToHex(false);
            Assert.Equal(compressed, _type.Serialize(publicKey));
            Assert.NotEqual(uncompressed, _type.Serialize(publicKey));

            Assert.Throws<InvalidOperationException>(() => _type.Serialize(0));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(""));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(new object()));
        }
    }
}
