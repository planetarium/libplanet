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
    public class VoteCountTypeTest
    {
        [Fact]
        public async void Query()
        {

            var privateKey = new PrivateKey();
            var voteCount = new VoteCount(privateKey.PublicKey, 1, 2, 3);

            var query =
                @"{
                    validatorPublicKey
                    countNull
                    countPreCommit
                    countTotal
                }";

            var voteCountType = new VoteCountType();
            ExecutionResult result = await ExecuteQueryAsync(
                query,
                voteCountType,
                source: voteCount
            );
            Dictionary<string, object> resultData =
                (Dictionary<string, object>)((ExecutionNode)result.Data!)?.ToValue()!;
            Assert.Null(result.Errors);
            Assert.Equal(voteCount.ValidatorPublicKey.ToString(), resultData["validatorPublicKey"]);
            Assert.Equal(voteCount.CountNull, resultData["countNull"]);
            Assert.Equal(voteCount.CountPreCommit, resultData["countPreCommit"]);
            Assert.Equal(voteCount.CountTotal, resultData["countTotal"]);
        }
    }
}
