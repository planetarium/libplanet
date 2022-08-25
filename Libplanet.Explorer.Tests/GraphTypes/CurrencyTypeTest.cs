using System.Collections.Generic;
using System.Collections.Immutable;
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

public class CurrencyTypeTest
{
    [Fact]
    public async Task Query()
    {
        var addrA = new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
        var addrB = new Address("5003712B63baAB98094aD678EA2B24BcE445D076");
        var currency = Currency.Capped("ABC", 2, (12345, 67), ImmutableHashSet.Create(addrA, addrB));
        ExecutionResult result = await ExecuteQueryAsync<CurrencyType>(@"
        {
            ticker
            decimalPlaces
            minters
            maximumSupply {
                currency {
                    ticker
                    hash
                }
                sign
                majorUnit
                minorUnit
                quantity
                string
            }
            totalSupplyTrackable
            hash
        }", source: currency);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Equal("ABC", resultDict["ticker"]);
        Assert.Equal(2U, resultDict["decimalPlaces"]);
        IDictionary<string, object> maxSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["maximumSupply"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(maxSupplyDict["currency"]);
        Assert.Equal("ABC", currencyDict["ticker"]);
        Assert.Equal("4bc1a79e2f30892acbff9fc7e5c71e2aea112110", currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(maxSupplyDict["sign"]));
        Assert.Equal(12345, Assert.IsAssignableFrom<BigInteger>(maxSupplyDict["majorUnit"]));
        Assert.Equal(67, Assert.IsAssignableFrom<BigInteger>(maxSupplyDict["minorUnit"]));
        Assert.Equal("12345.67", maxSupplyDict["quantity"]);
        Assert.Equal("12345.67 ABC", maxSupplyDict["string"]);
        Assert.True((bool)resultDict["totalSupplyTrackable"]);
        object[] minters = Assert.IsAssignableFrom<object[]>(resultDict["minters"]);
        Assert.All(minters, m => Assert.IsType<string>(m));
        Assert.Equal(minters.Cast<string>().ToArray(), new[]
        {
            "0x5003712B63baAB98094aD678EA2B24BcE445D076",
            "0xD6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9",
        });
        Assert.Equal("4bc1a79e2f30892acbff9fc7e5c71e2aea112110", resultDict["hash"]);

        currency = Currency.Uncapped("NOMINTER", 2, minters: null);
        result = await ExecuteQueryAsync<CurrencyType>(
            @"{
                minters
                maximumSupply { quantity }
                totalSupplyTrackable
            }",
            source: currency
        );
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict = Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Null(resultDict["minters"]);
        Assert.Null(resultDict["maximumSupply"]);
        Assert.True((bool)resultDict["totalSupplyTrackable"]);

#pragma warning disable CS0618
        currency = Currency.Legacy("LEGACY", 2, minters: null);
#pragma warning restore CS0618
        result = await ExecuteQueryAsync<CurrencyType>(
            @"{
                maximumSupply { quantity }
                totalSupplyTrackable
            }",
            source: currency
        );
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict = Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        Assert.Null(resultDict["maximumSupply"]);
        Assert.False((bool)resultDict["totalSupplyTrackable"]);
    }
}
