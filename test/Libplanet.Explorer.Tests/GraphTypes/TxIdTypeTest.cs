using System;
using GraphQL.Language.AST;
using Libplanet.Common;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class TxIdTypeTest : ScalarGraphTypeTestBase<TxIdType>
    {
        [Fact]
        public void ParseLiteral()
        {
            Assert.Null(_type.ParseLiteral(new NullValue()));

            var bytes = TestUtils.GetRandomBytes(TxId.Size);
            var txId = new TxId(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(
                txId,
                Assert.IsType<TxId>(_type.ParseLiteral(new StringValue(hex))));

            Assert.Throws<InvalidOperationException>(
                () => _type.ParseLiteral(new LongValue(1234)));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new StringValue("txId")));
        }

        [Fact]
        public void ParseValue()
        {
            Assert.Null(_type.ParseValue(null));

            var bytes = TestUtils.GetRandomBytes(TxId.Size);
            var txId = new TxId(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(txId, _type.ParseValue(hex));

            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(0));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new TxId()));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new object()));
        }

        [Fact]
        public void Serialize()
        {
            var bytes = TestUtils.GetRandomBytes(TxId.Size);
            var txId = new TxId(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(hex, _type.Serialize(txId));

            Assert.Throws<InvalidOperationException>(() => _type.Serialize(0));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(""));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(new object()));
        }
    }
}
