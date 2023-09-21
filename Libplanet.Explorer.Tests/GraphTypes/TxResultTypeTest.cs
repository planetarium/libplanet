using System.Collections.Generic;
using System.Collections.Immutable;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes
{
    public class TxResultTypeTest
    {
        [Theory]
        [MemberData(nameof(TestCases))]
        public async void Query(TxResult txResult, IDictionary<string, object> expected)
        {
            var query =
                @"{
                    txStatus
                    blockIndex
                    blockHash
                    exceptionNames
                }";

            var txResultType = new TxResultType();
            ExecutionResult result = await ExecuteQueryAsync(
                query,
                txResultType,
                source: txResult
            );
            Assert.Null(result.Errors);
            ExecutionNode executionNode = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
            IDictionary<string, object> dictionary = Assert.IsAssignableFrom<IDictionary<string, object>>(executionNode.ToValue());

            Assert.Equal(expected, dictionary);
        }

        public static IEnumerable<object[]> TestCases() {
            return new object[][] {
                new object[] {
                    new TxResult(
                        TxStatus.SUCCESS,
                        0,
                        "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        new List<string>() { "" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "SUCCESS",
                        ["blockIndex"] = 0L,
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["exceptionNames"] = new string[] { "" },
                    }
                },
                new object[] {
                    new TxResult(
                        TxStatus.SUCCESS,
                        0,
                        "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        new List<string>() { "" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "SUCCESS",
                        ["blockIndex"] = 0L,
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["exceptionNames"] = new string[] { "" },
                    }
                }
            };
        }
    }
}
