using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Tests.Fixtures;
using Libplanet.Types.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public partial class BlockMarshalerTest
    {
        [Fact]
        public void UnmarshalLegacyBlock()
        {
#pragma warning disable MEN002  // Line must be no longer than 100 characters
            var block = BlockMarshaler.UnmarshalBlock(LegacyBlocks.BencodedV0Block);
            Assert.Equal(0, block.ProtocolVersion);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("1cd4451624ef9c79e2c2fb5a8e791e4fa56a7d8c610c14a8a34ae175b5205cf7")),
                block.PreEvaluationHash);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")),
                block.StateRootHash);
            Assert.Equal(
                new BlockHash(ByteUtil.ParseHex("4cc24bbbabb96b9d825fabdcc106753e2e01c3601f7925959656010eb6206974")),
                block.Hash);

            block = BlockMarshaler.UnmarshalBlock(LegacyBlocks.BencodedV1Block);
            Assert.Equal(1, block.ProtocolVersion);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("1bba9fcf4c8152c899ed1674ecbf4a6571c271922c0884ae809f91f037bed8fc")),
                block.PreEvaluationHash);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")),
                block.StateRootHash);
            Assert.Equal(
                new BlockHash(ByteUtil.ParseHex("41ac71ef0451ddd54078a1b3336b747e8b2f970b441c2e3cb5cad8290f7bc0d0")),
                block.Hash);

            block = BlockMarshaler.UnmarshalBlock(LegacyBlocks.BencodedV2Block);
            Assert.Equal(2, block.ProtocolVersion);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("e520162fef3516f4c0ccd6f79cc0c50f6e3bf7c53b1bf425b5e1931089e3fd8a")),
                block.PreEvaluationHash);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")),
                block.StateRootHash);
            Assert.Equal(
                new BlockHash(ByteUtil.ParseHex("d7e10ac5f4fe56db093458f998d25350db738b7af9c1988f19f905c9c8e55f62")),
                block.Hash);

            block = BlockMarshaler.UnmarshalBlock(LegacyBlocks.BencodedV3Block);
            Assert.Equal(3, block.ProtocolVersion);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("af519fa381741e58781ea58a43233d155c212351d9840ef69e0a3555f210ad50")),
                block.PreEvaluationHash);
            Assert.Equal(
                new HashDigest<SHA256>(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")),
                block.StateRootHash);
            Assert.Equal(
                new BlockHash(ByteUtil.ParseHex("93294a9117d1d2b01d6479298864fccf29cd658c7cae60065349a07f9300bbd8")),
                block.Hash);
#pragma warning restore MEN002
        }
    }
}
