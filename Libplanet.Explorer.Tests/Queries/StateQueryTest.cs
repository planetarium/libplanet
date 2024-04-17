using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.Queries;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public partial class StateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Fact]
    public async Task World()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world(blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                stateRootHash
                legacy
                version
            }
        }
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
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                account (address: ""0x1000000000000000000000000000000000000000"") {
                    state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                        hex
                    }
                    states (addresses: [
                        ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                        ""0x0000000000000000000000000000000000000000""
                    ]) {
                        hex
                    }
                }
            }
        }
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
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }

    [Fact]
    public async Task WorldByBlockHashThenAccountThenBalanceAndBalances()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                account (address: ""0x1000000000000000000000000000000000000000"") {
                    balance (
                        address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076""
                        currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40""
                    ) {
                        hex
                    }
                    balances (
                        addresses: [
                            ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                            ""0x0000000000000000000000000000000000000000""
                        ]
                        currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40""
                    ) {
                        hex
                    }
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    resultDict["world"])["account"]);

        IDictionary<string, object> balance =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["balance"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new Integer(123))),
            Assert.IsAssignableFrom<string>(balance["hex"]));

        object[] balances =
            Assert.IsAssignableFrom<object[]>(account["balances"]);
        Assert.Equal(2, balances.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new Integer(123))),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(balances[0])["hex"]));
        Assert.Null(balances[1]);
    }

    [Fact]
    public async Task WorldByBlockHashThenAccountThenTotalSupply()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                account (address: ""0x1000000000000000000000000000000000000000"") {
                    totalSupply (currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40"") {
                        hex
                    }
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> totalSupply =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    Assert.IsAssignableFrom<IDictionary<string, object>>(
                        resultDict["world"])["account"])["totalSupply"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new Integer(10000))),
            Assert.IsAssignableFrom<string>(totalSupply["hex"]));
    }

    [Fact]
    public async Task WorldByBlockHashThenAccountThenValidatorSet()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                account (address: ""0x1000000000000000000000000000000000000000"") {
                    validatorSet {
                        hex
                    }
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> validatorSet =
            Assert.IsAssignableFrom<IDictionary<string, object>>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(
                    Assert.IsAssignableFrom<IDictionary<string, object>>(
                        resultDict["world"])["account"])["validatorSet"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new ValidatorSet(new List<Validator>
                {
                    new(
                        PublicKey.FromHex(
                            "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                        new BigInteger(1)),
                }).Bencoded)),
            Assert.IsAssignableFrom<string>(validatorSet["hex"]));
    }

    [Fact]
    public async Task WorldByStateRootHashThenAccountThenStateAndStates()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world (stateRootHash: ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64"") {
                account (address: ""0x1000000000000000000000000000000000000000"") {
                    state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                        hex
                    }
                    states (addresses: [
                        ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                        ""0x0000000000000000000000000000000000000000""
                    ]) {
                        hex
                    }
                }
            }
        }
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
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }

    // FIXME: We need proper mocks to test more complex scenarios.
    [Fact]
    public async Task WorldByBlockHashThenAccountsThenStateAndStates()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            world (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                accounts (addresses: [""0x1000000000000000000000000000000000000000""]) {
                    state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                        hex
                    }
                    states (addresses: [
                        ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                        ""0x0000000000000000000000000000000000000000""
                    ]) {
                        hex
                    }
                }
            }
        }
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
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(state["hex"]));

        object[] states =
            Assert.IsAssignableFrom<object[]>(account["states"]);
        Assert.Equal(2, states.Length);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(Null.Value)),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(states[0])["hex"]));
        Assert.Null(states[1]);
    }
}
