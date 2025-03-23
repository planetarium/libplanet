using System.Collections.Generic;
using System.Threading.Tasks;
using Bencodex;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
using Libplanet.Explorer.Queries;
using Libplanet.Types.Blocks;
using Libplanet.Types.Assets;
using Xunit;
using Fixture = Libplanet.Explorer.Tests.Fixtures.BlockChainStatesFixture;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task World(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world(blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                stateRootHash
                legacy
                version
            }}
        }}
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> states =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["world"]);
        Assert.NotNull(states["stateRootHash"]);

        if (version >= BlockMetadata.WorldStateProtocolVersion)
        {
            Assert.False((bool)states["legacy"]);
        }
        else
        {
            Assert.True((bool)states["legacy"]);
        }

        Assert.Equal(version, states["version"]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task WorldByBlockHashThenAccountThenStateAndStates(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                account (address: ""0x1000000000000000000000000000000000000000"") {{
                    state (address: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}"") {{
                        hex
                    }}
                    states (addresses: [
                        ""{ByteUtil.Hex(Fixture.Address.ByteArray)}"",
                        ""0x0000000000000000000000000000000000000000""
                    ]) {{
                        hex
                    }}
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["account"]);

        IDictionary<string, object> state =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["state"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task WorldByBlockHashThenBalance(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                balance (
                    address: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                    currency: {{
                        ticker: ""ABC""
                        decimalPlaces: 2
                        minters: null
                        totalSupplyTrackable: false }}) {{
                    string
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> world =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["world"]);
        IDictionary<string, object> balance =
            Assert.IsAssignableFrom<IDictionary<string, object>>(world["balance"]);
        Assert.Equal(
            Fixture.Amount.ToString(),
            Assert.IsAssignableFrom<string>(balance["string"]));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task WorldByBlockHashThenTotalSupply(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                totalSupply (currency: {{
                    ticker: ""ABC""
                    decimalPlaces: 2
                    minters: null
                    totalSupplyTrackable: false }}) {{
                    string
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> totalSupply =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["totalSupply"]);
        FungibleAssetValue expectedTotalSupply
            = version >= BlockMetadata.CurrencyAccountProtocolVersion
            ? (Fixture.Amount + Fixture.AdditionalSupply)
            : (Fixture.Currency * 0);
        Assert.Equal(
            expectedTotalSupply.ToString(),
            Assert.IsAssignableFrom<string>(totalSupply["string"]));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task WorldByBlockHashThenValidatorSet(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                validatorSet {{
                    hex
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> validatorSet =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["validatorSet"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.ValidatorSet.Bencoded)),
            Assert.IsAssignableFrom<string>(validatorSet["hex"]));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task WorldByStateRootHashThenAccountThenStateAndStates(int version)
    {
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (stateRootHash: ""{ByteUtil.Hex(stateRootHash.ByteArray)}"") {{
                account (address: ""0x1000000000000000000000000000000000000000"") {{
                    state (address: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}"") {{
                        hex
                    }}
                    states (addresses: [
                        ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                        ""0x0000000000000000000000000000000000000000""
                    ]) {{
                        hex
                    }}
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["account"]);

        IDictionary<string, object> state =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["state"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }

    [Theory]
    [InlineData(0)]
    [InlineData(BlockMetadata.CurrentProtocolVersion)]
    public async Task WorldByBlockHashThenAccountsThenStateAndStates(int version)
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(version);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                accounts (addresses: [""0x1000000000000000000000000000000000000000""]) {{
                    state (address: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}"") {{
                        hex
                    }}
                    states (addresses: [
                        ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                        ""0x0000000000000000000000000000000000000000""]) {{
                        hex
                    }}
                }}
            }}
        }}
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] accounts =
            Assert.IsAssignableFrom<object[]>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["accounts"]);

        IDictionary<string,object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(Assert.Single(accounts));
        IDictionary<string, object> state =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["state"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Fixture.Value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }
}
