using System.Collections.Generic;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;
using Libplanet.Explorer.Queries;
using Libplanet.Types.Assets;
using Xunit;

namespace Libplanet.Explorer.Tests.Queries;

public class HelperQueryTest
{
    [Fact]
    public async Task CurrencyHash()
    {
        Currency currency = Currency.Uncapped("ABC", 2, minters: null);

        ExecutionResult result = await ExecuteQueryAsync<HelperQuery>(@"
        {
            currencyHash (
                currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true }
            )
        }
        ");

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        string hash =
            Assert.IsAssignableFrom<string>(resultDict["currencyHash"]);
        Assert.Equal(ByteUtil.Hex(currency.Hash.ByteArray), hash);
    }

    [Fact]
    public async Task BencodexValue()
    {
        ExecutionResult result = await ExecuteQueryAsync<HelperQuery>(@"
        {
            bencodexValue (hex: ""7531323a68656c6c6f20776f726c6421"") {
                hex
                json
                inspection
            }
        }
        ");

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> bencodexValue =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["bencodexValue"]);
        string hex = Assert.IsAssignableFrom<string>(bencodexValue["hex"]);
        string json = Assert.IsAssignableFrom<string>(bencodexValue["json"]);
        string inspection = Assert.IsAssignableFrom<string>(bencodexValue["inspection"]);
        Assert.Equal("7531323a68656c6c6f20776f726c6421", hex);
        Assert.Equal("\"\\uFEFFhello world!\"", json);
        Assert.Equal("\"hello world!\"", inspection);
    }

    [Fact]
    public async Task KeyHex()
    {
        ExecutionResult result = await ExecuteQueryAsync<HelperQuery>(@"
        {
            keyHex (value: """")
        }
        ");

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        string hex = Assert.IsAssignableFrom<string>(resultDict["keyHex"]);
        Assert.Equal(string.Empty, hex);

        result = await ExecuteQueryAsync<HelperQuery>(@"
        {
            keyHex (value: ""___"")
        }
        ");

        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        hex = Assert.IsAssignableFrom<string>(resultDict["keyHex"]);
        Assert.Equal("5f5f5f", hex);

        result = await ExecuteQueryAsync<HelperQuery>(@"
        {
            keyHex (value: ""bc6c73abbe7652f5f73bd48b951437bde868ba65"")
        }
        ");

        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        hex = Assert.IsAssignableFrom<string>(resultDict["keyHex"]);
        Assert.Equal(
            "62633663373361626265373635326635663733626434386239353134333762646538363862613635",
            hex);
    }
}
