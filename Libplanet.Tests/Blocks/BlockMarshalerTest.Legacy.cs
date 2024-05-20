using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
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
            // Taken from 0.10.3
            // Modified with state root hash from current fixture
            Dictionary v0 = Dictionary.Empty
                .Add(
                    HeaderKey,
                    Dictionary.Empty
                        .Add(TotalDifficultyKey, new Integer(1))
                        .Add(PreEvaluationHashKey, new Binary(ByteUtil.ParseHex("1cd4451624ef9c79e2c2fb5a8e791e4fa56a7d8c610c14a8a34ae175b5205cf7")))
                        .Add(DifficultyKey, new Integer(1))
                        .Add(HashKey, new Binary(ByteUtil.ParseHex("4cc24bbbabb96b9d825fabdcc106753e2e01c3601f7925959656010eb6206974")))
                        .Add(IndexKey, new Integer(1))
                        .Add(MinerKey, new Binary(ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")))
                        .Add(NonceKey, new Binary(ByteUtil.ParseHex("02000000")))
                        .Add(PreviousHashKey, new Binary(ByteUtil.ParseHex("d4f35834e27d5ab459a4d401e9a08268e3fe321b8c685075aec5bd5d18d642aa")))
                        .Add(StateRootHashKey, new Binary(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")))
                        .Add(TimestampKey, new Text("2018-11-29T00:00:15.000000Z")));

            // Taken from 0.17.0
            // Modified with state root hash from current fixture
            // Adds ProtocolVersion
            Dictionary v1 = Dictionary.Empty
                .Add(
                    HeaderKey,
                    Dictionary.Empty
                        .Add(ProtocolVersionKey, new Integer(1))
                        .Add(TotalDifficultyKey, new Integer(1))
                        .Add(PreEvaluationHashKey, new Binary(ByteUtil.ParseHex("1bba9fcf4c8152c899ed1674ecbf4a6571c271922c0884ae809f91f037bed8fc")))
                        .Add(DifficultyKey, new Integer(1))
                        .Add(HashKey, new Binary(ByteUtil.ParseHex("41ac71ef0451ddd54078a1b3336b747e8b2f970b441c2e3cb5cad8290f7bc0d0")))
                        .Add(IndexKey, new Integer(1))
                        .Add(MinerKey, new Binary(ByteUtil.ParseHex("21744f4f08db23e044178dafb8273aeb5ebe6644")))
                        .Add(NonceKey, new Binary(ByteUtil.ParseHex("02000000")))
                        .Add(PreviousHashKey, new Binary(ByteUtil.ParseHex("d693da3866a34d659e014f97c8feb08afe2e97c99e3f3389da025fd0665c621c")))
                        .Add(StateRootHashKey, new Binary(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")))
                        .Add(TimestampKey, new Text("2018-11-29T00:00:15.000000Z")));

            // Taken from 0.27.7
            // Adds miner public key and signature while removing miner address
            Dictionary v2 = Dictionary.Empty
                .Add(
                    HeaderKey,
                    Dictionary.Empty
                        .Add(ProtocolVersionKey, new Integer(2))
                        .Add(PublicKeyKey, new Binary(ByteUtil.ParseHex("037456f9cb6ec23d5cdc39ead2f783f4ca4e744d646458428e4f813d6267890b7c")))
                        .Add(SignatureKey, new Binary(ByteUtil.ParseHex("304402202d2cd14d4b909d9fa9422e321dba6b893bb891bda408e43e062e790cfb0100590220201e1e925edfbf6e2f484c3e4a56d13d21c13defadcb7322a8b23b60f6b17d15")))
                        .Add(TotalDifficultyKey, new Integer(1))
                        .Add(PreEvaluationHashKey, new Binary(ByteUtil.ParseHex("e520162fef3516f4c0ccd6f79cc0c50f6e3bf7c53b1bf425b5e1931089e3fd8a")))
                        .Add(DifficultyKey, new Integer(1))
                        .Add(HashKey, new Binary(ByteUtil.ParseHex("d7e10ac5f4fe56db093458f998d25350db738b7af9c1988f19f905c9c8e55f62")))
                        .Add(IndexKey, new Integer(1))
                        .Add(NonceKey, new Binary(ByteUtil.ParseHex("02000000")))
                        .Add(PreviousHashKey, new Binary(ByteUtil.ParseHex("8ca7dd38c558e79f7981c720369766d326a9994883b38667ccd27d29d2945682")))
                        .Add(StateRootHashKey, new Binary(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")))
                        .Add(TimestampKey, new Text("2018-11-29T00:00:15.000000Z")));

            // Taken from 0.49.3
            // No changes other than protocol version
            Dictionary v3 = Dictionary.Empty
                .Add(
                    HeaderKey,
                    Dictionary.Empty
                        .Add(ProtocolVersionKey, new Integer(3))
                        .Add(PublicKeyKey, new Binary(ByteUtil.ParseHex("037456f9cb6ec23d5cdc39ead2f783f4ca4e744d646458428e4f813d6267890b7c")))
                        .Add(SignatureKey, new Binary(ByteUtil.ParseHex("3045022100cffa465a22aeb7c07f7a5663fc6a07ee1b4f1c70e6fb13ac501165574a3711df02207da2166c05d7915f9a166b4d0b79d81035ae640a7f2e7f338ae23418f210f445")))
                        .Add(TotalDifficultyKey, new Integer(1))
                        .Add(PreEvaluationHashKey, new Binary(ByteUtil.ParseHex("af519fa381741e58781ea58a43233d155c212351d9840ef69e0a3555f210ad50")))
                        .Add(DifficultyKey, new Integer(1))
                        .Add(HashKey, new Binary(ByteUtil.ParseHex("93294a9117d1d2b01d6479298864fccf29cd658c7cae60065349a07f9300bbd8")))
                        .Add(IndexKey, new Integer(1))
                        .Add(NonceKey, new Binary(ByteUtil.ParseHex("02000000")))
                        .Add(PreviousHashKey, new Binary(ByteUtil.ParseHex("9e0b8085c105cff4da7db38ae37f61afeaa435db0377d2a1c6ad17d28d7e229d")))
                        .Add(StateRootHashKey, new Binary(ByteUtil.ParseHex("6a648da9e91c21aa22bdae4e35c338406392aad0db4a0f998c01a7d7973cb8aa")))
                        .Add(TimestampKey, new Text("2018-11-29T00:00:15.000000Z")));

            var block = BlockMarshaler.UnmarshalBlock(v0);
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

            block = BlockMarshaler.UnmarshalBlock(v1);
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

            block = BlockMarshaler.UnmarshalBlock(v2);
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

            block = BlockMarshaler.UnmarshalBlock(v3);
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
