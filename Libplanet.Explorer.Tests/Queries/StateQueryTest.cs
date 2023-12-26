using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Explorer.Queries;
using Libplanet.Store.Trie;
using Libplanet.Store.Trie.Nodes;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;
using Libplanet.Common;
using System.Security.Cryptography;
using System;

namespace Libplanet.Explorer.Tests.Queries;

public class StateQueryTest
{
    private static readonly Codec _codec = new Codec();

    [Fact]
    public async Task AccountByBlockHashThenStateAndStates()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            account (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                    hex
                }
                states (addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""]) {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["account"]);

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
    public async Task AccountByBlockHashThenBalanceAndBalances()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            account (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                balance (
                    address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076""
                    currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40""
                ) {
                    hex
                }
                balances (
                    addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""]
                    currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40""
                ) {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["account"]);

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

        // FIXME: Due to dumb mocking. We need to overhaul mocking.
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new Integer(123))),
            Assert.IsAssignableFrom<string>(
                Assert.IsAssignableFrom<IDictionary<string, object>>(balances[1])["hex"]));
    }

    [Fact]
    public async Task AccountByBlockHashThenTotalSupply()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            account (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                totalSupply (
                    currencyHash: ""84ba810ca5ac342c122eb7ef455939a8a05d1d40""
                ) {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["account"]);

        IDictionary<string, object> totalSupply =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["totalSupply"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new Integer(10000))),
            Assert.IsAssignableFrom<string>(totalSupply["hex"]));
    }

    [Fact]
    public async Task AccountByBlockHashThenValidatorSet()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            account (blockHash: ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"") {
                validatorSet {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["account"]);

        IDictionary<string, object> totalSupply =
            Assert.IsAssignableFrom<IDictionary<string, object>>(account["validatorSet"]);
        Assert.Equal(
            ByteUtil.Hex(_codec.Encode(new ValidatorSet(new List<Validator>
                {
                    new(
                        PublicKey.FromHex(
                            "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                        new BigInteger(1)),
                }).Bencoded)),
            Assert.IsAssignableFrom<string>(totalSupply["hex"]));
    }

    [Fact]
    public async Task AccountByStateRootHashThenStateAndStates()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            account (stateRootHash: ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64"") {
                state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                    hex
                }
                states (addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""]) {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> account =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["account"]);

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
    public async Task AccountsByBlockHashesThenStateAndStates()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            accounts (blockHashes: [""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""]) {
                state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                    hex
                }
                states (addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""]) {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] accounts =
            Assert.IsAssignableFrom<object[]>(resultDict["accounts"]);

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

    // FIXME: We need proper mocks to test more complex scenarios.
    [Fact]
    public async Task AccountsByStateRootHashesThenStateAndStates()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            accounts (stateRootHashes: [""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""]) {
                state (address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"") {
                    hex
                }
                states (addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""]) {
                    hex
                }
            }
        }
        ", source: source);

        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] accounts =
            Assert.IsAssignableFrom<object[]>(resultDict["accounts"]);

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

    [Fact]
    public async Task States()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            states(
                 addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""],
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            )
        }
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
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            balance(
                 owner: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
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
    }

    [Fact]
    public async Task TotalSupply()
    {
         var currency = Currency.Uncapped("ABC", 2, minters: null);
#pragma warning disable CS0618  // Legacy, which is obsolete, is the only way to test this:
         var legacyToken = Currency.Legacy("LEG", 0, null);
#pragma warning restore CS0618
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            totalSupply(
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
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
        IDictionary<string, object> totalSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["totalSupply"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(totalSupplyDict["currency"]);
        Assert.Equal("ABC", currencyDict["ticker"]);
        Assert.Equal("84ba810ca5ac342c122eb7ef455939a8a05d1d40", currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(totalSupplyDict["sign"]));
        Assert.Equal(10000, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["majorUnit"]));
        Assert.Equal(0, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["minorUnit"]));
        Assert.Equal("10000", totalSupplyDict["quantity"]);
        Assert.Equal("10000 ABC", totalSupplyDict["string"]);

        result = await ExecuteQueryAsync<StateQuery>(@"
        {
            totalSupply(
                 currency: { ticker: ""LEG"", decimalPlaces: 0, totalSupplyTrackable: false },
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            ) {
                quantity
            }
        }
        ", source: source);
        Assert.Single(result.Errors);
        Assert.Contains("not trackable", result.Errors[0].Message);
    }

    [Fact]
    public async Task Validators()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            validators(
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            ) {
                publicKey
                power
            }
        }
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
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            states(
                 addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""],
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b"",
                 offsetStateRootHash:
                     ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""
            )
        }
        ", source: source);
        Assert.IsType<ExecutionErrors>(result.Errors);
    }

    [Fact]
    public async Task StatesBySrh()
    {
        var currency = Currency.Uncapped("ABC", 2, minters: null);
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            states(
                 addresses: [""0x5003712B63baAB98094aD678EA2B24BcE445D076"", ""0x0000000000000000000000000000000000000000""],
                 offsetStateRootHash:
                     ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""
            )
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object[] states =
            Assert.IsAssignableFrom<object[]>(resultDict["states"]);
        Assert.Equal(new[] { new byte[] { 110, }, null }, states);
    }

    [Fact]
    public async Task BalanceBySrh()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            balance(
                 owner: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
                 offsetStateRootHash:
                     ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""
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
    }

    [Fact]
    public async Task TotalSupplyBySrh()
    {
         var currency = Currency.Uncapped("ABC", 2, minters: null);
#pragma warning disable CS0618  // Legacy, which is obsolete, is the only way to test this:
         var legacyToken = Currency.Legacy("LEG", 0, null);
#pragma warning restore CS0618
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            totalSupply(
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
                 offsetStateRootHash:
                     ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""
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
        IDictionary<string, object> totalSupplyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["totalSupply"]);
        IDictionary<string, object> currencyDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(totalSupplyDict["currency"]);
        Assert.Equal("ABC", currencyDict["ticker"]);
        Assert.Equal("84ba810ca5ac342c122eb7ef455939a8a05d1d40", currencyDict["hash"]);
        Assert.Equal(1, Assert.IsAssignableFrom<int>(totalSupplyDict["sign"]));
        Assert.Equal(10000, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["majorUnit"]));
        Assert.Equal(0, Assert.IsAssignableFrom<BigInteger>(totalSupplyDict["minorUnit"]));
        Assert.Equal("10000", totalSupplyDict["quantity"]);
        Assert.Equal("10000 ABC", totalSupplyDict["string"]);

        result = await ExecuteQueryAsync<StateQuery>(@"
        {
            totalSupply(
                 currency: { ticker: ""LEG"", decimalPlaces: 0, totalSupplyTrackable: false },
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            ) {
                quantity
            }
        }
        ", source: source);
        Assert.Single(result.Errors);
        Assert.Contains("not trackable", result.Errors[0].Message);
    }

    [Fact]
    public async Task ValidatorsBySrh()
    {
        IBlockChainStates source = new MockChainStates();
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            validators(
                 offsetStateRootHash:
                     ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""
            ) {
                publicKey
                power
            }
        }
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


    private class MockChainStates : IBlockChainStates
    {
        public IValue GetState(Address address, BlockHash? offset) =>
            GetAccountState(offset).GetState(address);

        public IReadOnlyList<IValue> GetStates(
            IReadOnlyList<Address> addresses, BlockHash? offset) =>
            GetAccountState(offset).GetStates(addresses);

        public FungibleAssetValue GetBalance(
            Address address, Currency currency, BlockHash? offset) =>
            GetAccountState(offset).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash? offset) =>
            GetAccountState(offset).GetTotalSupply(currency);

        public ValidatorSet GetValidatorSet(BlockHash? offset) =>
            GetAccountState(offset).GetValidatorSet();

        public IAccountState GetAccountState(BlockHash? offset) =>
            new MockAccount(offset, null);

        public IAccountState GetAccountState(HashDigest<SHA256>? hash) =>
            new MockAccount(null, hash);
    }

    private class MockAccount : IAccount
    {
        public MockAccount(BlockHash? blockHash, HashDigest<SHA256>? stateRootHash)
        {
            BlockHash = blockHash ?? default;
            StateRootHash = stateRootHash ?? default;
        }

        public ITrie Trie => new MockTrie(StateRootHash);

        public BlockHash BlockHash { get; }

        public HashDigest<SHA256> StateRootHash { get; }

        public IImmutableSet<(Address, Currency)> TotalUpdatedFungibleAssets { get; }
        public IAccount SetState(Address address, IValue state)
        {
            throw new System.NotImplementedException();
        }

        public IAccount RemoveState(Address address)
        {
            throw new System.NotImplementedException();
        }

        public IAccount MintAsset(IActionContext context, Address recipient, FungibleAssetValue value)
        {
            throw new System.NotImplementedException();
        }

        public IAccount TransferAsset(IActionContext context, Address sender, Address recipient,
            FungibleAssetValue value, bool allowNegativeBalance = false)
        {
            throw new System.NotImplementedException();
        }

        public IAccount BurnAsset(IActionContext context, Address owner, FungibleAssetValue value)
        {
            throw new System.NotImplementedException();
        }

        public IAccount SetValidator(Validator validator)
        {
            throw new System.NotImplementedException();
        }


        public IValue GetState(Address address) => GetStates(new[] { address }).First();

        public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
            addresses.Select(address => address.ToString() switch
            {
                "0x5003712B63baAB98094aD678EA2B24BcE445D076" => (IValue)Null.Value,
                _ => null,
            }).ToImmutableList();

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            BlockHash is { } && StateRootHash is { }
                ? currency * 123
                : currency * 0;

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            BlockHash is { } && StateRootHash is { }
                ? currency * 10000
                : currency * 0;

        public ValidatorSet GetValidatorSet() =>
            BlockHash is { } && StateRootHash is { }
                ? new ValidatorSet(new List<Validator>
                {
                    new(
                        PublicKey.FromHex(
                            "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                        new BigInteger(1)),
                })
                : new ValidatorSet();
    }

    private class MockTrie : ITrie
    {
        private readonly HashDigest<SHA256>? _stateRootHash;

        public MockTrie(HashDigest<SHA256>? stateRootHash)
        {
            _stateRootHash = stateRootHash;
        }

        public INode Root => throw new NotSupportedException();

        public HashDigest<SHA256> Hash => throw new NotSupportedException();

        public bool Recorded => throw new NotSupportedException();

        public ITrie Set(in KeyBytes key, IValue value) => throw new NotSupportedException();

        public IValue Get(KeyBytes key)
        {
            if (_stateRootHash is { })
            {
                if (key.Length == 3) // Length for validator set key
                {
                    return new ValidatorSet(new List<Validator>
                    {
                        new(
                            PublicKey.FromHex(
                                "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                            new BigInteger(1)),
                    }).Bencoded;
                }

                if (key.Length == (HashDigest<SHA1>.Size * 2 + 2)) // Length for total supply key
                {
                    return new Integer(10000);
                }

                return new Integer(123); // Assume we are looking for balance.
            }
            else
            {
                return null;
            }
        }

        public IReadOnlyList<IValue> Get(IReadOnlyList<KeyBytes> keys) =>
            throw new NotSupportedException();

        public INode GetNode(Nibbles nibbles) => throw new NotSupportedException();

        public IEnumerable<(KeyBytes Path, IValue Value)> IterateValues() =>
            throw new NotSupportedException();

        public IEnumerable<(Nibbles Path, INode Node)> IterateNodes() =>
            throw new NotSupportedException();

        public IEnumerable<(KeyBytes Path, IValue TargetValue, IValue SourceValue)> Diff(ITrie other) =>
            throw new NotSupportedException();
    }
}
