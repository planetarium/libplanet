using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
using Libplanet.Explorer.Queries;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Xunit;
using Fixture = Libplanet.Explorer.Tests.Fixtures.BlockChainStatesFixture;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task States(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            states(
                addresses: [
                   ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
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
        Assert.Equal(new[] { _codec.Encode(Fixture.Value), null }, states);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task Balance(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            balance(
                owner: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: false }}
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
        Assert.Equal(Fixture.Currency.Ticker, currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(Fixture.Currency.Hash.ByteArray), currencyDict["hash"]);
        Assert.Equal(Fixture.Amount.Sign, Assert.IsAssignableFrom<int>(balanceDict["sign"]));
        Assert.Equal(
            Fixture.Amount.MajorUnit,
            Assert.IsAssignableFrom<BigInteger>(balanceDict["majorUnit"]));
        Assert.Equal(
            Fixture.Amount.MinorUnit,
            Assert.IsAssignableFrom<BigInteger>(balanceDict["minorUnit"]));
        Assert.Equal(Fixture.Amount.GetQuantityString(), balanceDict["quantity"]);
        Assert.Equal(Fixture.Amount.ToString(), balanceDict["string"]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task TotalSupply(int version)
    {
#pragma warning disable CS0618  // Legacy, which is obsolete, is the only way to test this:
         var legacyToken = Currency.Legacy("LEG", 0, null);
#pragma warning restore CS0618
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: false }}
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
        Assert.Equal(ByteUtil.Hex(Fixture.Currency.Hash.ByteArray), currencyDict["hash"]);
        FungibleAssetValue expectedTotalSupply
            = version >= BlockMetadata.CurrencyAccountProtocolVersion
            ? (Fixture.Amount + Fixture.AdditionalSupply)
            : (Fixture.Currency * 0);
        Assert.Equal(
            expectedTotalSupply.Sign,
            Assert.IsAssignableFrom<int>(totalSupplyDict["sign"]));
        Assert.Equal(
            expectedTotalSupply.MajorUnit,
            Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["majorUnit"]));
        Assert.Equal(
            expectedTotalSupply.MinorUnit,
            Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["minorUnit"]));
        Assert.Equal(
            expectedTotalSupply.GetQuantityString(),
            totalSupplyDict["quantity"]);
        Assert.Equal(
            expectedTotalSupply.ToString(),
            totalSupplyDict["string"]);

        result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""LEG"", decimalPlaces: 0, totalSupplyTrackable: false }}
                offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                quantity
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        totalSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["totalSupply"]);
        Assert.Equal(
            (legacyToken * 0).GetQuantityString(),
            totalSupplyDict["quantity"]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task Validators(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
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
        Assert.Equal(Fixture.Validator.PublicKey.ToHex(true), validatorDict["publicKey"]);
        Assert.Equal(Fixture.Validator.Power, validatorDict["power"]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task ThrowExecutionErrorIfViolateMutualExclusive(int version)
    {
        (var source, var blockHash, var stateRootHash)
            = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            states(
                addresses: [
                    ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                    ""0x0000000000000000000000000000000000000000""
                ]
                offsetBlockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}""
                offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"")
        }}
        ", source: source);
        Assert.IsType<ExecutionErrors>(result.Errors);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task StatesBySrh(int version)
    {
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            states(
                addresses: [
                    ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
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
        Assert.Equal(new[] { _codec.Encode(Fixture.Value), null }, states);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task BalanceBySrh(int version)
    {
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            balance(
                owner: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: false }}
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
        Assert.Equal(Fixture.Currency.Ticker, currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(Fixture.Currency.Hash.ByteArray), currencyDict["hash"]);
        Assert.Equal(Fixture.Amount.Sign, Assert.IsAssignableFrom<int>(balanceDict["sign"]));
        Assert.Equal(
            Fixture.Amount.MajorUnit,
            Assert.IsAssignableFrom<BigInteger>(balanceDict["majorUnit"]));
        Assert.Equal(
            Fixture.Amount.MinorUnit,
            Assert.IsAssignableFrom<BigInteger>(balanceDict["minorUnit"]));
        Assert.Equal(Fixture.Amount.GetQuantityString(), balanceDict["quantity"]);
        Assert.Equal(Fixture.Amount.ToString(), balanceDict["string"]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task TotalSupplyBySrh(int version)
    {
#pragma warning disable CS0618  // Legacy, which is obsolete, is the only way to test this:
         var legacyToken = Currency.Legacy("LEG", 0, null);
#pragma warning restore CS0618
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: false }}
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
        Assert.Equal(Fixture.Currency.Ticker, currencyDict["ticker"]);
        Assert.Equal(ByteUtil.Hex(Fixture.Currency.Hash.ByteArray), currencyDict["hash"]);
        FungibleAssetValue expectedTotalSupply
            = version >= BlockMetadata.CurrencyAccountProtocolVersion
            ? (Fixture.Amount + Fixture.AdditionalSupply)
            : (Fixture.Currency * 0);
        Assert.Equal(
            expectedTotalSupply.Sign,
            Assert.IsAssignableFrom<int>(totalSupplyDict["sign"]));
        Assert.Equal(
            expectedTotalSupply.MajorUnit,
            Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["majorUnit"]));
        Assert.Equal(
            expectedTotalSupply.MinorUnit,
            Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["minorUnit"]));
        Assert.Equal(
            expectedTotalSupply.GetQuantityString(),
            totalSupplyDict["quantity"]);
        Assert.Equal(
            expectedTotalSupply.ToString(),
            totalSupplyDict["string"]);

        result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            totalSupply(
                currency: {{ ticker: ""LEG"", decimalPlaces: 0, totalSupplyTrackable: false }}
                offsetStateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                quantity
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        totalSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["totalSupply"]);
        Assert.Equal(
            (legacyToken * 0).GetQuantityString(),
            totalSupplyDict["quantity"]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task ValidatorsBySrh(int version)
    {
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(version);
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
        Assert.Equal(Fixture.Validator.PublicKey.ToHex(true), validatorDict["publicKey"]);
        Assert.Equal(Fixture.Validator.Power, validatorDict["power"]);
    }
}
