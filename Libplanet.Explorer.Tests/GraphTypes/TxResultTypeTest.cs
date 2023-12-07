using System.Collections.Generic;
using System.Security.Cryptography;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
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
                    inputState
                    outputState
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
                        HashDigest<SHA256>.FromString(
                            "7146ddfb3594089795f6992a668a3ce7fde089aacdda68075e1bc37b14ebb06f"),
                        HashDigest<SHA256>.FromString(
                            "72bb2e17da644cbca9045f5e689fae0323b6af56a0acab9fd828d2243b50df1c"),
                        new List<string>() { "" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "SUCCESS",
                        ["blockIndex"] = 0L,
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["inputState"] =
                            "7146ddfb3594089795f6992a668a3ce7fde089aacdda68075e1bc37b14ebb06f",
                        ["outputState"] =
                            "72bb2e17da644cbca9045f5e689fae0323b6af56a0acab9fd828d2243b50df1c",
                        ["exceptionNames"] = new string[] { "" },
                    }
                },
                new object[] {
                    new TxResult(
                        TxStatus.FAILURE,
                        0,
                        "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        HashDigest<SHA256>.FromString(
                            "7146ddfb3594089795f6992a668a3ce7fde089aacdda68075e1bc37b14ebb06f"),
                        HashDigest<SHA256>.FromString(
                            "7146ddfb3594089795f6992a668a3ce7fde089aacdda68075e1bc37b14ebb06f"),
                        new List<string>() { "SomeException" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "FAILURE",
                        ["blockIndex"] = 0L,
                        ["inputState"] =
                            "7146ddfb3594089795f6992a668a3ce7fde089aacdda68075e1bc37b14ebb06f",
                        ["outputState"] =
                            "7146ddfb3594089795f6992a668a3ce7fde089aacdda68075e1bc37b14ebb06f",
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["exceptionNames"] = new string[] { "SomeException" },
                    }
                },
                new object[] {
                    new TxResult(
                        TxStatus.INCLUDED,
                        0,
                        "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        null,
                        null,
                        new List<string>() { "" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "INCLUDED",
                        ["blockIndex"] = 0L,
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["inputState"] = null,
                        ["outputState"] = null,
                        ["exceptionNames"] = new string[] { "" },
                    }
                },
                new object[] {
                    new TxResult(
                        TxStatus.INVALID,
                        null,
                        null,
                        null,
                        null,
                        new List<string>() { "" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "INVALID",
                        ["blockIndex"] = null,
                        ["blockHash"] = null,
                        ["inputState"] = null,
                        ["outputState"] = null,
                        ["exceptionNames"] = new string[] { "" },
                    }
                },
                new object[] {
                    new TxResult(
                        TxStatus.STAGING,
                        null,
                        null,
                        null,
                        null,
                        new List<string>() { "" }
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "STAGING",
                        ["blockIndex"] = null,
                        ["blockHash"] = null,
                        ["inputState"] = null,
                        ["outputState"] = null,
                        ["exceptionNames"] = new string[] { "" },
                    }
                }
            };
        }
    }
}
