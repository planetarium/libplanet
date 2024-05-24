using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
using Libplanet.Explorer.Queries;
using Libplanet.Types.Assets;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    [Fact]
    public async Task States()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            states(
                addresses: [
                   ""{ByteUtil.Hex(_address.ByteArray)}""
                   ""0x0000000000000000000000000000000000000000""
                ]
                offsetBlockHash:
                    ""{ByteUtil.Hex(blockHash.ByteArray)}""
            )
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] states =
            Assert.IsAssignableFrom<object[]>(resultDict["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(new[] { new byte[] { 110, }, null }, states);
    }

    [Fact]
    public async Task Balance()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            balance(
                owner: ""{ByteUtil.Hex(_address.ByteArray)}""
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true }}
                offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                currency {{ ticker, hash }}
                sign
                majorUnit
                minorUnit
                quantity
                string
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> balanceDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["balance"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(balanceDict["currency"]);
        Assert.Equal(_currency.Ticker, currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(_currency.Hash.ByteArray), currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(balanceDict["sign"]));
        Assert.Equal(1, Assert.IsAssignableFrom<BigInteger>(balanceDict["majorUnit"]));
        Assert.Equal(23, Assert.IsAssignableFrom<BigInteger>(balanceDict["minorUnit"]));
        Assert.Equal("1.23", balanceDict["quantity"]);
        Assert.Equal("1.23 ABC", balanceDict["string"]);
    }

    [Fact]
    public async Task TotalSupply()
    {
         var currency = Currency.Uncapped("ABC", 2, minters: null);
#pragma warning disable CS0618  // Legacy, which is obsolete, is the only way to test this:
         var legacyToken = Currency.Legacy("LEG", 0, null);
#pragma warning restore CS0618
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true }}
                offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                currency {{ ticker, hash }}
                sign
                majorUnit
                minorUnit
                quantity
                string
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> totalSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["totalSupply"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(totalSupplyDict["currency"]);
        Assert.Equal("ABC", currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(_currency.Hash.ByteArray), currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(totalSupplyDict["sign"]));
        Assert.Equal(101, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["majorUnit"]));
        Assert.Equal(23, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["minorUnit"]));
        Assert.Equal("101.23", totalSupplyDict["quantity"]);
        Assert.Equal("101.23 ABC", totalSupplyDict["string"]);

        result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                 currency: {{ ticker: ""LEG"", decimalPlaces: 0, totalSupplyTrackable: false }}
                 offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                quantity
            }}
        }}
        ", source: source);
        Assert.Single(result.Errors);
        Assert.Contains("not trackable", result.Errors[0].Message);
    }

    [Fact]
    public async Task Validators()
    {
        (var source, var blockHash, _) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            validators(offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                publicKey
                power
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] validators = Assert.IsAssignableFrom<object[]>(resultDict["validators"]);
        IDictionary<string, object> validatorDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(validators[0]);
        Assert.Equal("032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233", validatorDict["publicKey"]);
        Assert.Equal(new BigInteger(1), validatorDict["power"]);
    }

    [Fact]
    public async Task ThrowExecutionErrorIfViolateMutualExclusive()
    {
        (var source, var blockHash, var stateRootHash) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            states(
                addresses: [
                    ""{ByteUtil.Hex(_address.ByteArray)}""
                    ""0x0000000000000000000000000000000000000000""
                ]
                offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}""
                offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"")
        }}
        ", source: source);
        Assert.IsType<ExecutionErrors>(result.Errors);
    }

    [Fact]
    public async Task StatesBySrh()
    {
        var currency = Currency.Uncapped("ABC", 2, minters: null);
        (var source, _, var stateRootHash) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            states(
                addresses: [
                    ""{ByteUtil.Hex(_address.ByteArray)}""
                    ""0x0000000000000000000000000000000000000000""
                ]
                offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}""
            )
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] states =
            Assert.IsAssignableFrom<object[]>(resultDict["states"]);
        Assert.Equal(new[] { _codec.Encode(_value), null }, states);
    }

    [Fact]
    public async Task BalanceBySrh()
    {
        (var source, _, var stateRootHash) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            balance(
                owner: ""{ByteUtil.Hex(_address.ByteArray)}""
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true }}
                offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}""
            ) {{
                currency {{ ticker, hash }}
                sign
                majorUnit
                minorUnit
                quantity
                string
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> balanceDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["balance"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(balanceDict["currency"]);
        Assert.Equal(_currency.Ticker, currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(_currency.Hash.ByteArray), currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(balanceDict["sign"]));
        Assert.Equal(1, Assert.IsAssignableFrom<BigInteger>(balanceDict["majorUnit"]));
        Assert.Equal(23, Assert.IsAssignableFrom<BigInteger>(balanceDict["minorUnit"]));
        Assert.Equal("1.23", balanceDict["quantity"]);
        Assert.Equal("1.23 ABC", balanceDict["string"]);
    }

    [Fact]
    public async Task TotalSupplyBySrh()
    {
         var currency = Currency.Uncapped("ABC", 2, minters: null);
#pragma warning disable CS0618  // Legacy, which is obsolete, is the only way to test this:
         var legacyToken = Currency.Legacy("LEG", 0, null);
#pragma warning restore CS0618
        (var source, _, var stateRootHash) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true }}
                offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}""
            ) {{
                currency {{ ticker, hash }}
                sign
                majorUnit
                minorUnit
                quantity
                string
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> totalSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["totalSupply"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(totalSupplyDict["currency"]);
        Assert.Equal(_currency.Ticker, currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(_currency.Hash.ByteArray), currencyDict["hash"]);
        Assert.Equal(101, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["majorUnit"]));
        Assert.Equal(1, Assert.IsAssignableFrom<int>(totalSupplyDict["sign"]));
        Assert.Equal(23, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["minorUnit"]));
        Assert.Equal("101.23", totalSupplyDict["quantity"]);
        Assert.Equal("101.23 ABC", totalSupplyDict["string"]);

        result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""LEG"", decimalPlaces: 0, totalSupplyTrackable: false }}
                offsetBlockHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                quantity
            }}
        }}
        ", source: source);
        Assert.Single(result.Errors);
        Assert.Contains("not trackable", result.Errors[0].Message);
    }

    [Fact]
    public async Task ValidatorsBySrh()
    {
        (var source, _, var stateRootHash) = CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            validators(offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                publicKey
                power
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] validators = Assert.IsAssignableFrom<object[]>(resultDict["validators"]);
        IDictionary<string, object> validatorDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(validators[0]);
        Assert.Equal(_validator.PublicKey.ToHex(true), validatorDict["publicKey"]);
        Assert.Equal(new BigInteger(1), validatorDict["power"]);
    }
}
