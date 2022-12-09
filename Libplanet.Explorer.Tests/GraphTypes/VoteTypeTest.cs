using System;
using System.Collections.Generic;
using System.Linq;
using GraphQL;
using GraphQL.Types;
using GraphQL.Execution;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class VoteTypeTest
    {
        [Fact]
        public async void Query()
        {

            var privateKey = new PrivateKey();
            var blockHash = new BlockHash(new byte[32]);
            var vote = new VoteMetadata(
                1,
                0,
                blockHash,
                DateTimeOffset.Now,
                privateKey.PublicKey,
                VoteFlag.PreCommit).Sign(privateKey);

            var query =
                @"{
                    height
                    round
                    blockHash
                    timestamp
                    validator
                    flag
                    signature
                }";

            var voteType = new VoteType();
            ExecutionResult result = await ExecuteQueryAsync(
                query,
                voteType,
                source: vote
            );
            Dictionary<string, object> resultData =
                (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            Assert.Null(result.Errors);
            Assert.Equal(vote.Height, resultData["height"]);
            Assert.Equal(vote.Round, resultData["round"]);
            Assert.Equal(vote.BlockHash.ToString(), resultData["blockHash"]);
            Assert.Equal(new DateTimeOffsetGraphType().Serialize(vote.Timestamp), resultData["timestamp"]);
            Assert.Equal(vote.Validator.ToString(), resultData["validator"]);
            Assert.Equal(vote.Flag.ToString(), resultData["flag"]);
            Assert.Equal(ByteUtil.Hex(vote.Signature), resultData["signature"]);
        }
    }
}
