using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Blocks;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.UnitTests.Common.Action;
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
            var block = new Block<NoOpAction>(
                1,
                1,
                1,
                new Nonce(new byte[] {0x01, 0x23, 0x45, 0x56}),
                new Address(TestUtils.GetRandomBytes(Address.Size)),
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                DateTimeOffset.UtcNow,
                ImmutableHashSet<Transaction<NoOpAction>>.Empty,
                stateRootHash: new HashDigest<SHA256>(
                    TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)));
            var query =
                @"{
                    index
                    hash
                    nonce
                    difficulty
                    miner
                    timestamp
                    stateRootHash
                }";

            ExecutionResult result =
                await ExecuteQueryAsync<BlockType<NoOpAction>>(query, source: block);
            Assert.Null(result.Errors);
            Assert.Equal(
                block.Index,
                Convert.ToInt64(((Dictionary<string, object>) result.Data)["index"]));
            Assert.Equal(
                ByteUtil.Hex(block.Hash.ToByteArray()),
                ((Dictionary<string, object>) result.Data)["hash"]);
            Assert.Equal(
                block.Difficulty,
                Convert.ToInt64(((Dictionary<string, object>) result.Data)["difficulty"]));
            Assert.Equal(
                block.Miner?.ToString(),
                ((Dictionary<string, object>) result.Data)["miner"]);
            Assert.Equal(
                ByteUtil.Hex(block.Nonce.ToByteArray()),
                ((Dictionary<string, object>) result.Data)["nonce"]);
            Assert.Equal(
                new DateTimeOffsetGraphType().Serialize(block.Timestamp),
                ((Dictionary<string, object>) result.Data)["timestamp"]);
            Assert.Equal(
                ByteUtil.Hex(block.StateRootHash?.ToByteArray()),
                ((Dictionary<string, object>) result.Data)["stateRootHash"]);
        }
    }
}
