using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Explorer.Queries;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public class StateQueryTest
{
    [Fact]
    public async Task Balance()
    {
        var currency = Currency.Uncapped("ABC", 2, minters: null);
        (IBlockChainStates<NullAction>, IBlockPolicy<NullAction>) source = (
            new MockChainStates<NullAction>(),
            new BlockPolicy<NullAction>(nativeTokens: ImmutableHashSet.Create(currency))
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery<NullAction>>(@"
        {
            balance(
                 owner: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40"",
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            ) {
                currency { ticker, hash }
                sign
                majorUnit
                minorUnit
                quantity
                string
            }
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> balanceDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["balance"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(balanceDict["currency"]);
        Assert.Equal("ABC", currencyDict["ticker"]);
        Assert.Equal("84ba810ca5ac342c122eb7ef455939a8a05d1d40", currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(balanceDict["sign"]));
        Assert.Equal(123, Assert.IsAssignableFrom<BigInteger>(balanceDict["majorUnit"]));
        Assert.Equal(0, Assert.IsAssignableFrom<BigInteger>(balanceDict["minorUnit"]));
        Assert.Equal("123", balanceDict["quantity"]);
        Assert.Equal("123 ABC", balanceDict["string"]);

        result = await ExecuteQueryAsync<StateQuery<NullAction>>(@"
        {
            balance(
                 owner: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 currencyHash: ""0000000000000000000000000000000000000000"",
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            ) {
                quantity
            }
        }
        ", source: source);
        Assert.Single(result.Errors);
        Assert.Contains("native token", result.Errors[0].Message);
    }

    private class MockChainStates<T> : IBlockChainStates<T>
        where T : IAction, new()
    {
        public IReadOnlyList<IValue> GetStates(
            IReadOnlyList<Address> addresses,
            BlockHash offset,
            StateCompleter<T> stateCompleter
        ) =>
            new IValue[addresses.Count];

        public FungibleAssetValue GetBalance(
            Address address,
            Currency currency,
            BlockHash offset,
            FungibleAssetStateCompleter<T> stateCompleter
        ) =>
            currency * 123;

        public FungibleAssetValue? GetTotalSupply(
            Currency currency,
            BlockHash offset,
            TotalSupplyStateCompleter<T> stateCompleter
        ) =>
            currency * 10000;
    }
}
