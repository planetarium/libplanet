using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
    public class BlockCommitTypeTest
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
            var blockCommit = new BlockCommit(1, 0, blockHash, ImmutableArray.Create(vote));

            var query =
                @"{
                    height
                    round
                    blockHash
                    votes {
                        height
                        round
                        blockHash
                        timestamp
                        validatorPublicKey
                        flag
                        signature
                    }
                }";

            var blockCommitType = new BlockCommitType();
            ExecutionResult result = await ExecuteQueryAsync(
                query,
                blockCommitType,
                source: blockCommit
            );
            Dictionary<string, object> resultData =
                (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            Assert.Null(result.Errors);
            Assert.Equal(blockCommit.Height, resultData["height"]);
            Assert.Equal(blockCommit.Round, resultData["round"]);
            Assert.Equal(blockCommit.BlockHash.ToString(), resultData["blockHash"]);
            var expectedVotes = new object[] {
                new Dictionary<string, object>()
                {
                    { "height", vote.Height },
                    { "round", vote.Round },
                    { "blockHash", vote.BlockHash.ToString() },
                    { "timestamp", new DateTimeOffsetGraphType().Serialize(vote.Timestamp) },
                    { "validatorPublicKey", vote.ValidatorPublicKey.ToString() },
                    { "flag", vote.Flag.ToString() },
                    { "signature", ByteUtil.Hex(vote.Signature) },
                }
            };
            Assert.Equal(expectedVotes, resultData["votes"]);
        }
    }
}
