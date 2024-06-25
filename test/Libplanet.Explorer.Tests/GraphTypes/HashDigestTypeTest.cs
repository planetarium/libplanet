using System;
using System.Security.Cryptography;
using GraphQL.Language.AST;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Xunit;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class HashDigestTypeTest : ScalarGraphTypeTestBase<HashDigestType<SHA256>>
    {
        [Fact]
        public void ParseLiteral()
        {
            Assert.Null(_type.ParseLiteral(new NullValue()));

            var bytes = TestUtils.GetRandomBytes(HashDigest<SHA256>.Size);
            var hashDigestSHA256 = new HashDigest<SHA256>(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(
                hashDigestSHA256,
                Assert.IsType<HashDigest<SHA256>>(_type.ParseLiteral(new StringValue(hex))));

            bytes = TestUtils.GetRandomBytes(HashDigest<SHA1>.Size);
            hex = ByteUtil.Hex(bytes);
            Assert.Throws<ArgumentOutOfRangeException>(
                () => _type.ParseLiteral(new StringValue(hex)));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseLiteral(new LongValue(1234)));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new StringValue("hashDigest")));
        }

        [Fact]
        public void ParseValue()
        {
            Assert.Null(_type.ParseValue(null));

            var bytes = TestUtils.GetRandomBytes(HashDigest<SHA256>.Size);
            var hashDigest = new HashDigest<SHA256>(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(hashDigest, _type.ParseValue(hex));

            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(0));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new HashDigest<SHA256>()));
            Assert.Throws<InvalidOperationException>(
                () => _type.ParseValue(new object()));
        }

        [Fact]
        public void Serialize()
        {
            var bytes = TestUtils.GetRandomBytes(HashDigest<SHA256>.Size);
            var hashDigest = new HashDigest<SHA256>(bytes);
            var hex = ByteUtil.Hex(bytes);
            Assert.Equal(hex, _type.Serialize(hashDigest));

            Assert.Throws<InvalidOperationException>(() => _type.Serialize(0));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(""));
            Assert.Throws<InvalidOperationException>(() => _type.Serialize(new object()));
        }
    }
}
