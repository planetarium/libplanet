using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Bencodex.Types;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Explorer.UnitTests.GraphQLTestUtils;

namespace Libplanet.Explorer.UnitTests.GraphTypes
{
    public class BlockTypeTest
    {
        [Fact]
        public async void Query()
        {
            var preEval = new BlockContent<NullAction>
            {
                Index = 1,
                Difficulty = 1,
                TotalDifficulty = 1,
                Miner = new Address(TestUtils.GetRandomBytes(Address.Size)),
                PreviousHash = new BlockHash(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                Timestamp = DateTimeOffset.UtcNow,
            }.Mine(HashAlgorithmType.Of<SHA256>());
            var block = new Block<NullAction>(
                preEval,
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)));
            var query =
                @"{
                    index
                    hash
                    nonce
                    difficulty
                    totalDifficulty
                    miner
                    timestamp
                    stateRootHash
                }";

            ExecutionResult result =
                await ExecuteQueryAsync<BlockType<NullAction>>(query, source: block);
            Dictionary<string, object> resultData = (Dictionary<string, object>)result.Data;
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
