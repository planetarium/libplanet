using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using GraphQL.Types;
using Libplanet.Types.Assets;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes;

public class CurrencyInputTypeTest
{
    [Theory]
    [MemberData(nameof(InputTestCases))]
    public async Task Input(string query, Dictionary<string, object> expected)
    {
        var result = await ExecuteQueryAsync<TestQuery>(query);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal(expected, resultDict);
    }

    [Fact]
    public async Task OnlyHalfOmitted()
    {
        var result = await ExecuteQueryAsync<TestQuery>(
            @"query
            {
                currency(currency: {
                    ticker: ""ABC""
                    decimalPlaces: 5
                    totalSupplyTrackable: false
                    minters: null
                    maximumSupplyMajorUnit: 1
                })
                {
                    ticker
                    decimalPlaces
                    totalSupplyTrackable
                    minters
                }
            }");
        var error = Assert.Single(result.Errors);
        Assert.Contains(
            "Both \"maximumSupplyMajorUnit\" and \"maximumSupplyMinorUnit\" must " + 
            "be present or omitted",
            error.Message);
    }

    public static IEnumerable<object[]> InputTestCases()
    {
        return new object[][] {
            new object[] {
                @"query
                {
                    currency(
                        currency:
                            {
                                ticker: ""ABC"",
                                decimalPlaces: 5,
                                totalSupplyTrackable:
                                false,
                                minters: null
                            }
                    )
                    {
                        ticker
                        decimalPlaces
                        totalSupplyTrackable
                        minters
                    }
                }",
                new Dictionary<string, object>
                {
                    ["currency"] = new Dictionary<string, object>
                    {
                        ["ticker"] = "ABC",
                        ["decimalPlaces"] = (byte)5,
                        ["totalSupplyTrackable"] = false,
                        ["minters"] = null,
                    },
                }
            },
            new object[] {
                @"query
                {
                    currency(currency: { ticker: ""ABC"", decimalPlaces: 5, minters: null })
                    {
                        ticker
                        decimalPlaces
                        totalSupplyTrackable
                        minters
                    }
                }",
                new Dictionary<string, object>
                {
                    ["currency"] = new Dictionary<string, object>
                    {
                        ["ticker"] = "ABC",
                        ["decimalPlaces"] = (byte)5,
                        ["totalSupplyTrackable"] = false,
                        ["minters"] = null,
                    },
                }
            },
        };
    }
}

class TestQuery : ObjectGraphType
{
    public TestQuery()
    {
        Field<CurrencyType>("currency", arguments: new QueryArguments(
            new QueryArgument<CurrencyInputType>
            {
                Name = "currency",
            }
        ), resolve: context => context.GetArgument<Currency>("currency"));
    }
}
