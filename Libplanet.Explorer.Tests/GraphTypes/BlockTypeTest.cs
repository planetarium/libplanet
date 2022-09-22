using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Store;
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
            var preEval = new BlockContent<NullAction>(
                    new BlockMetadata(
                index: 1,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: privateKey.PublicKey,
                difficulty: 1,
                totalDifficulty: 1,
                previousHash: new BlockHash(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                txHash: null))
                .Mine();
            var stateRootHash =
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size));
            var signature = preEval.Header.MakeSignature(privateKey, stateRootHash);
            var hash = preEval.Header.DeriveBlockHash(stateRootHash, signature);
            var block = new Block<NullAction>(preEval, (stateRootHash, signature, hash));

            // FIXME We need to test for `previousBlock` field too.
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

            var store = new MemoryStore();
            var blockType = new BlockType<NullAction>(store);
            ExecutionResult result = await ExecuteQueryAsync(
                query,
                blockType,
                source: block
            );
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
