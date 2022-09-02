using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Assets;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes;

public class FungibleAssetValueTypeTest
{
    [Fact]
    public async Task Query()
    {
        var currency = Currency.Uncapped("ABC", 2, minters: null);
        var fav = new FungibleAssetValue(currency, -1, 123, 45);
        ExecutionResult result = await ExecuteQueryAsync<FungibleAssetValueType>(
            @"{
                currency {
                    ticker
                    hash
                }
                sign
                majorUnit
                minorUnit
                quantity
                string
            }",
            source: fav
        );
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["currency"]);
        Assert.Equal("ABC", currencyDict["ticker"]);
        Assert.Equal("84ba810ca5ac342c122eb7ef455939a8a05d1d40", currencyDict["hash"]);
        Assert.Equal(-1, Assert.IsAssignableFrom<int>(resultDict["sign"]));
        Assert.Equal(123, Assert.IsAssignableFrom<BigInteger>(resultDict["majorUnit"]));
        Assert.Equal(45, Assert.IsAssignableFrom<BigInteger>(resultDict["minorUnit"]));
        Assert.Equal("-123.45", resultDict["quantity"]);
        Assert.Equal("-123.45 ABC", resultDict["string"]);
    }
}
