using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class BlockTypeTest
    {
        [Fact]
        public async void Query()
        {
            var privateKey = new PrivateKey();
            var preEval = new BlockContent<NullAction>
            {
                Index = 1,
                Difficulty = 1,
                TotalDifficulty = 1,
                PublicKey = privateKey.PublicKey,
                PreviousHash = new BlockHash(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                Timestamp = DateTimeOffset.UtcNow,
            }.Mine(HashAlgorithmType.Of<SHA256>());
            var stateRootHash =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            var block = new Block<NullAction>(
                preEval,
                stateRootHash,
                preEval.MakeSignature(privateKey, stateRootHash)
            );
            var query =
                @"{
                    index
                    hash
                    nonce
                    difficulty
                    totalDifficulty
                    miner
                    publicKey
                    timestamp
                    stateRootHash
                    signature
                }";

            ExecutionResult result =
                await ExecuteQueryAsync<BlockType<NullAction>>(query, source: block);
            Dictionary<string, object> resultData =
                (Dictionary<string, object>)((ExecutionNode) result.Data!)?.ToValue()!;
            Assert.Null(result.Errors);
            Assert.Equal(block.Index, resultData["index"]);
            Assert.Equal(
                ByteUtil.Hex(block.Hash.ToByteArray()),
                resultData["hash"]);
            Assert.Equal(block.Difficulty, resultData["difficulty"]);
            Assert.Equal(
                block.TotalDifficulty,
                resultData["totalDifficulty"]);
            Assert.Equal(
                block.Miner.ToString(),
                resultData["miner"]);
            Assert.Equal(
                ByteUtil.Hex(block.Nonce.ToByteArray()),
                resultData["nonce"]);
            Assert.Equal(
                new DateTimeOffsetGraphType().Serialize(block.Timestamp),
                resultData["timestamp"]);
            Assert.Equal(
                ByteUtil.Hex(block.StateRootHash.ToByteArray()),
                resultData["stateRootHash"]);
        }
    }
}
