using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes;

public class CurrencyTypeTest
{
    [Fact]
    public async Task Query()
    {
        var addrA = new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
        var addrB = new Address("5003712B63baAB98094aD678EA2B24BcE445D076");
        var currency = Currency.Capped("ABC", 2, (10000, 0), ImmutableHashSet.Create(addrA, addrB));
        ExecutionResult result = await ExecuteQueryAsync<CurrencyType>(@"
        {
            ticker
            decimalPlaces
            minters
            totalSupplyTrackable
            hash
        }", source: currency);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal("ABC", resultDict["ticker"]);
        Assert.Equal(2U, resultDict["decimalPlaces"]);
        Assert.True((bool)resultDict["totalSupplyTrackable"]);
        object[] minters = Assert.IsAssignableFrom<object[]>(resultDict["minters"]);
        Assert.All(minters, m => Assert.IsType<string>(m));
        Assert.Equal(minters.Cast<string>().ToArray(), new[]
        {
            "0x5003712B63baAB98094aD678EA2B24BcE445D076",
            "0xD6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9",
        });

        currency = Currency.Uncapped("NOMINTER", 2, minters: null);
        result = await ExecuteQueryAsync<CurrencyType>(
            @"{
                minters
                totalSupplyTrackable
            }",
            source: currency
        );
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict = Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Null(resultDict["minters"]);
        Assert.True((bool)resultDict["totalSupplyTrackable"]);

#pragma warning disable CS0612
        currency = Currency.LegacyUntracked("LEGACY", 2, minters: null);
#pragma warning restore CS0612
        result = await ExecuteQueryAsync<CurrencyType>(
            @"{
                totalSupplyTrackable
            }",
            source: currency
        );
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict = Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.False((bool)resultDict["totalSupplyTrackable"]);
    }
}
