using System;
using GraphQL.Language.AST;
using Libplanet.Common;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Evidence;
using Xunit;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class EvidenceIdTypeTest : ScalarGraphTypeTestBase<EvidenceIdType>
    {
        [Fact]
        public void ParseLiteral()
        {
            Assert.Null(_type.ParseLiteral(new NullValue()));

            var bytes = TestUtils.GetRandomBytes(EvidenceId.Size);
            var evidenceId = new EvidenceId(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(
                evidenceId,
                Assert.IsType<EvidenceId>(_type.ParseLiteral(new StringValue(hex))));

            Assert.Throws<InvalidOperationException>(
                () => _type.ParseLiteral(new LongValue(1234)));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new StringValue("evidenceId")));
        }

        [Fact]
        public void ParseValue()
        {
            Assert.Null(_type.ParseValue(null));

            var bytes = TestUtils.GetRandomBytes(EvidenceId.Size);
            var evidenceId = new EvidenceId(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(evidenceId, _type.ParseValue(hex));

            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(0));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new EvidenceId()));
            Assert.Throws<InvalidOperationException>(() => _type.ParseValue(new object()));
        }

        [Fact]
        public void Serialize()
        {
            var bytes = TestUtils.GetRandomBytes(EvidenceId.Size);
            var evidenceId = new EvidenceId(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(hex, _type.Serialize(evidenceId));

            Assert.Throws<InvalidOperationException>(() => _type.Serialize(0));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(""));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(new object()));
        }
    }
}
