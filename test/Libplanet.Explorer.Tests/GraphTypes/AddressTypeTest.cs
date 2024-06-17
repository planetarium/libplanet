using System;
using GraphQL.Language.AST;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Xunit;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class AddressTypeTest : ScalarGraphTypeTestBase<AddressType>
    {
        [Fact]
        public void ParseLiteral()
        {
            Assert.Null(_type.ParseLiteral(new NullValue()));

            var bytes = TestUtils.GetRandomBytes(Address.Size);
            var address = new Address(bytes);
            var hex = ByteUtil.Hex(bytes);
            var prefixedHex = address.ToString();
            Assert.Equal(
                address,
                Assert.IsType<Address>(_type.ParseLiteral(new StringValue(prefixedHex))));
            Assert.Equal(
                address,
                Assert.IsType<Address>(_type.ParseLiteral(new StringValue(hex))));

            Assert.Throws<InvalidOperationException>(
                () => _type.ParseLiteral(new LongValue(1234)));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new StringValue("address")));
        }

        [Fact]
        public void ParseValue()
        {
            Assert.Null(_type.ParseValue(null));

            var bytes = TestUtils.GetRandomBytes(Address.Size);
            var address = new Address(bytes);
            var hex = ByteUtil.Hex(bytes);
            var prefixedHex = address.ToString();
            Assert.Equal(address, _type.ParseValue(prefixedHex));
            Assert.Equal(address, _type.ParseValue(hex));

            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(0));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new Address()));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new object()));
        }

        [Fact]
        public void Serialize()
        {
            Assert.Null(_type.Serialize(null));

            var bytes = TestUtils.GetRandomBytes(Address.Size);
            var address = new Address(bytes);
            var hex = ByteUtil.Hex(bytes);
            var prefixedHex = address.ToString();
            Assert.Equal(prefixedHex, _type.Serialize(address));
            Assert.NotEqual(hex, _type.Serialize(address));

            Assert.Throws<InvalidOperationException>(() => _type.Serialize(0));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(""));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(new object()));
        }
    }
}
