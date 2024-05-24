using System.Collections.Generic;
using System.Threading.Tasks;
using Bencodex;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Common;
using Libplanet.Explorer.Queries;
using Xunit;
using Fixture = Libplanet.Explorer.Tests.Fixtures.BlockChainStatesFixture;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Fact]
    public async Task World()
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(0);
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
        Assert.True((bool)states["legacy"]);
        Assert.Equal(0, states["version"]);
    }

    [Fact]
    public async Task WorldByBlockHashThenAccountThenStateAndStates()
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(0);
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

    [Fact]
    public async Task WorldByBlockHashThenBalance()
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                balance (
                    address: ""{ByteUtil.Hex(Fixture.Address.ByteArray)}""
                    currency: {{
                        ticker: ""ABC""
                        decimalPlaces: 2
                        minters: null
                        totalSupplyTrackable: true }}) {{
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

    [Fact]
    public async Task WorldByBlockHashThenTotalSupply()
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(0);
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>($@"
        {{
            world (blockHash: ""{ByteUtil.Hex(blockHash.ByteArray)}"") {{
                totalSupply (currency: {{
                    ticker: ""ABC""
                    decimalPlaces: 2
                    minters: null
                    totalSupplyTrackable: true }}) {{
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
        Assert.Equal(
            (Fixture.Amount + Fixture.AdditionalSupply).ToString(),
            Assert.IsAssignableFrom<string>(totalSupply["string"]));
    }

    [Fact]
    public async Task WorldByBlockHashThenValidatorSet()
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(0);
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

    [Fact]
    public async Task WorldByStateRootHashThenAccountThenStateAndStates()
    {
        (var source, _, var stateRootHash) = Fixture.CreateMockBlockChainStates(0);
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

    // FIXME: We need proper mocks to test more complex scenarios.
    [Fact]
    public async Task WorldByBlockHashThenAccountsThenStateAndStates()
    {
        (var source, var blockHash, _) = Fixture.CreateMockBlockChainStates(0);
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
