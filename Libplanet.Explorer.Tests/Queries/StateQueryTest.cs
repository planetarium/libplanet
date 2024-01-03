using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using GraphQL;
using GraphQL.Execution;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.Queries;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit;
using static Libplanet.Explorer.Tests.GraphQLTestUtils;

namespace Libplanet.Explorer.Tests.Queries;

public class StateQueryTest
{
    [Fact]
    public async Task WorldStates()
    {
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(), new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            worldState(
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            )
            {
                stateRootHash
                legacy
            }
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> states =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["worldState"]);
        Assert.NotNull(states["stateRootHash"]);
        Assert.True((bool)states["legacy"]);
    }

    [Fact]
    public async Task AccountStates()
    {
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(), new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            accountState(
                 accountAddress: ""0x40837BFebC1b192600023a431400557EA5FDE51a"",
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            )
            {
                stateRootHash
            }
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        IDictionary<string, object> states =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultDict["accountState"]);
        Assert.NotNull(states["stateRootHash"]);
    }

    [Fact]
    public async Task State()
    {
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(), new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            state(
                 address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 accountAddress: ""0x40837BFebC1b192600023a431400557EA5FDE51a""
                 offsetBlockHash:
                     ""01ba4719c80b6fe911b091a7c05124b64eeece964e09c058ef8f9805daca546b""
            )
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object state =
            Assert.IsAssignableFrom<object>(resultDict["state"]);
        Assert.Equal(new byte[] { 110, }, state);
    }

    [Fact]
    public async Task Balance()
    {
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(),
            new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            balance(
                 owner: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
        (IBlockChainStates, IBlockPolicy) source = (
           new MockChainStates(), new BlockPolicy());
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            totalSupply(
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
        (IBlockChainStates, IBlockPolicy) source = (
           new MockChainStates(),
           new BlockPolicy()
       );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            validators(
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(), new BlockPolicy()
        );
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
    public async Task StateBySrh()
    {
        var currency = Currency.Uncapped("ABC", 2, minters: null);
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(), new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            state(
                 address: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
                 offsetStateRootHash:
                     ""c33b27773104f75ac9df5b0533854108bd498fab31e5236b6f1e1f6404d5ef64""
            )
        }
        ", source: source);
        Assert.Null(result.Errors);
        ExecutionNode resultData = Assert.IsAssignableFrom<ExecutionNode>(result.Data);
        IDictionary<string, object> resultDict =
            Assert.IsAssignableFrom<IDictionary<string, object>>(resultData!.ToValue());
        object state =
            Assert.IsAssignableFrom<object>(resultDict["state"]);
        Assert.Equal(new byte[] { 110, }, state);
    }

    [Fact]
    public async Task BalanceBySrh()
    {
        (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(),
            new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            balance(
                 owner: ""0x5003712B63baAB98094aD678EA2B24BcE445D076"",
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
         (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(), new BlockPolicy());
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            totalSupply(
                 currency: { ticker: ""ABC"", decimalPlaces: 2, totalSupplyTrackable: true },
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
         (IBlockChainStates, IBlockPolicy) source = (
            new MockChainStates(),
            new BlockPolicy()
        );
        ExecutionResult result = await ExecuteQueryAsync<StateQuery>(@"
        {
            validators(
                 accountAddress: ""0x1000000000000000000000000000000000000000"",
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
        public IWorldState GetWorldState(HashDigest<SHA256>? hash)
            => new MockWorld();

        public IWorldState GetWorldState(BlockHash? offset)
            => new MockWorld();

        public IAccountState GetAccountState(HashDigest<SHA256>? hash)
            => new MockAccount();

        public IAccountState GetAccountState(BlockHash? blockHash, Address address)
            => new MockAccount();

        public IValue GetState(HashDigest<SHA256>? hash, Address address)
            => new MockAccount().GetState(address);

        public IValue GetState(BlockHash? offset, Address accountAddress, Address address)
            => new MockAccount().GetState(address);

        public FungibleAssetValue GetBalance(
            HashDigest<SHA256>? hash, Address address, Currency currency) =>
            new MockAccount().GetBalance(address, currency);

        public FungibleAssetValue GetBalance(
            BlockHash? offset, Address accountAddress, Address address, Currency currency) =>
            new MockAccount().GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(HashDigest<SHA256>? hash, Currency currency) =>
            new MockAccount().GetTotalSupply(currency);

        public FungibleAssetValue GetTotalSupply(BlockHash? offset, Address accountAddress, Currency currency) =>
            new MockAccount().GetTotalSupply(currency);
        public ValidatorSet GetValidatorSet(HashDigest<SHA256>? hash) =>
            new MockAccount().GetValidatorSet();

        public ValidatorSet GetValidatorSet(BlockHash? offset, Address accountAddress) =>
            new MockAccount().GetValidatorSet();
    }

    private class MockWorld : IWorld
    {
        public MockWorld()
        {
            Trie = new TrieStateStore(new MemoryKeyValueStore()).GetStateRoot(null);
        }
        public ITrie Trie { get; }

        public bool Legacy => true;

        public IWorldDelta Delta => throw new System.NotImplementedException();

        public IAccount GetAccount(Address address)
            => new MockAccount();

        public IWorld SetAccount(Address address, IAccount account)
        {
            throw new System.NotImplementedException();
        }
    }

    private class MockAccount : IAccount
    {
        public MockAccount()
        {
            Trie = new TrieStateStore(new MemoryKeyValueStore()).GetStateRoot(null);
        }

        public ITrie Trie { get; }

        public IImmutableSet<(Address, Currency)> TotalUpdatedFungibleAssets => throw new System.NotImplementedException();

        public IValue GetState(Address address) => GetStates(new[] { address }).First();

        public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
            addresses.Select(address => address.ToString() switch
            {
                "0x5003712B63baAB98094aD678EA2B24BcE445D076" => (IValue)Null.Value,
                _ => null,
            }).ToImmutableList();

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            currency * 123;

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            currency * 10000;

        public ValidatorSet GetValidatorSet() =>
            new ValidatorSet(new List<Validator>
            {
                new(
                    PublicKey.FromHex(
                        "032038e153d344773986c039ba5dbff12ae70cfdf6ea8beb7c5ea9b361a72a9233"),
                    new BigInteger(1)),
            });

        public IAccount SetState(Address address, IValue state)
        {
            throw new System.NotImplementedException();
        }

        public IAccount MintAsset(IActionContext context, Address recipient, FungibleAssetValue value)
        {
            throw new System.NotImplementedException();
        }

        public IAccount TransferAsset(IActionContext context, Address sender, Address recipient, FungibleAssetValue value, bool allowNegativeBalance = false)
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
    }
}
