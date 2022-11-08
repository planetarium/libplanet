using System.Collections.Generic;
using System.Collections.Immutable;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Assets;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Store;
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
                    exceptionName
                    exceptionMetadata
                    updatedStates {
                        address
                        state
                    }
                    updatedFungibleAssets {
                        address
                        fungibleAssetValues {
                            currency {
                                ticker
                                decimalPlaces
                            }
                            quantity
                        }
                    }
                    fungibleAssetsDelta {
                        address
                        fungibleAssetValues {
                            currency {
                                ticker
                                decimalPlaces
                            }
                            quantity
                        }
                    }
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
            Currency KRW = Currency.Uncapped("KRW", 18, null);
            Address address = new Address("76ca86fa821c8241f9422c22b1386021047faf0d");
            return new object[][] {
                new object[] {
                    new TxResult(
                        TxStatus.SUCCESS,
                        0,
                        "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        null,
                        null,
                        ImmutableDictionary<Address, Bencodex.Types.IValue>.Empty,
                        ImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>.Empty,
                        ImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>.Empty,
                        null
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "SUCCESS",
                        ["blockIndex"] = 0L,
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["exceptionName"] = null,
                        ["exceptionMetadata"] = null,
                        ["updatedStates"] = new object[0],
                        ["updatedFungibleAssets"] = new object[0],
                        ["fungibleAssetsDelta"] = new object[0],
                    }
                },
                new object[] {
                    new TxResult(
                        TxStatus.SUCCESS,
                        0,
                        "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        null,
                        null,
                        ImmutableDictionary<Address, Bencodex.Types.IValue>.Empty
                            .Add(address, Bencodex.Types.Null.Value),
                        ImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>.Empty
                            .Add(
                                address,
                                ImmutableDictionary<Currency, FungibleAssetValue>.Empty
                                    .Add(KRW, KRW * 10000)
                            ),
                        ImmutableDictionary<Address, IImmutableDictionary<Currency, FungibleAssetValue>>.Empty
                            .Add(
                                address,
                                ImmutableDictionary<Currency, FungibleAssetValue>.Empty
                                    .Add(KRW, KRW * 20000)
                            ),
                        null
                    ),
                    new Dictionary<string, object> {
                        ["txStatus"] = "SUCCESS",
                        ["blockIndex"] = 0L,
                        ["blockHash"] = "45bcaa4c0b00f4f31eb61577e595ea58fb69c7df3ee612aa6eea945bbb0ce39d",
                        ["exceptionName"] = null,
                        ["exceptionMetadata"] = null,
                        ["updatedStates"] = new object[] {
                            new Dictionary<string, object> {
                                ["address"] = address.ToString(),
                                ["state"] = new byte[] { 110, },
                            },
                        },
                        ["updatedFungibleAssets"] = new object[] {
                            new Dictionary<string, object> {
                                ["address"] = address.ToString(),
                                ["fungibleAssetValues"] = new object[] {
                                    new Dictionary<string, object> {
                                        ["currency"] = new Dictionary<string, object> {
                                            ["ticker"] = KRW.Ticker,
                                            ["decimalPlaces"] = (uint)KRW.DecimalPlaces,
                                        },
                                        ["quantity"] = "20000",
                                    },
                                },
                            },
                        },
                        ["fungibleAssetsDelta"] = new object[] {
                            new Dictionary<string, object> {
                                ["address"] = address.ToString(),
                                ["fungibleAssetValues"] = new object[] {
                                    new Dictionary<string, object> {
                                        ["currency"] = new Dictionary<string, object> {
                                            ["ticker"] = KRW.Ticker,
                                            ["decimalPlaces"] = (uint)KRW.DecimalPlaces,
                                        },
                                        ["quantity"] = "10000",
                                    },
                                },
                            },
                        },
                    }
                }
            };
        }
    }
}
