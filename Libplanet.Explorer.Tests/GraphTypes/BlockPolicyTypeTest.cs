using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain.Policies;
using Libplanet.Explorer.GraphTypes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.GraphTypes;

public class BlockPolicyTypeTest
{
    [Fact]
    public async Task Query()
    {
        var addrA = new Address("D6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9");
        var addrB = new Address("5003712B63baAB98094aD678EA2B24BcE445D076");
        var foo = Currency.Uncapped("FOO", 2, minters: null);
        var bar = Currency.Uncapped("BAR", 0, ImmutableHashSet.Create(addrA, addrB));
        var policy = new BlockPolicy<NullAction>(nativeTokens: ImmutableHashSet.Create(foo, bar));
        ExecutionResult result = await ExecuteQueryAsync<BlockPolicyType<NullAction>>(
            @"{
                nativeTokens {
                    ticker
                    decimalPlaces
                    minters
                    hash
                }
            }",
            source: policy
        );
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] nativeTokens = Assert.IsAssignableFrom<object[]>(resultDict["nativeTokens"]);
        Assert.Equal(2, nativeTokens.Length);
        Assert.All(nativeTokens, t => Assert.IsAssignableFrom<IDictionary<string, object>>(t));
        IDictionary<string, object>[] tokenDicts =
            nativeTokens.Cast<IDictionary<string, object>>().ToArray();
        Assert.Equal("BAR", tokenDicts[0]["ticker"]);
        Assert.Equal(0U, tokenDicts[0]["decimalPlaces"]);
        object[] minters = Assert.IsAssignableFrom<object[]>(tokenDicts[0]["minters"]);
        Assert.All(minters, m => Assert.IsType<string>(m));
        Assert.Equal(minters.Cast<string>().ToArray(), new[]
        {
            "0x5003712B63baAB98094aD678EA2B24BcE445D076",
            "0xD6D639DA5a58A78A564C2cD3DB55FA7CeBE244A9",
        });
        Assert.Equal("FOO", tokenDicts[1]["ticker"]);
        Assert.Equal(2U, tokenDicts[1]["decimalPlaces"]);
        Assert.Null(tokenDicts[1]["minters"]);
    }
}
