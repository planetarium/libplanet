using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public abstract class AccountStateDeltaTest
    {
        protected readonly PrivateKey[] _keys;
        protected readonly Address[] _addr;
        protected readonly Currency[] _currencies;
        protected readonly IImmutableDictionary<Address, IValue> _states;
        protected readonly IImmutableDictionary<(Address, Currency), BigInteger> _assets;
        protected readonly IImmutableDictionary<Currency, (BigInteger, BigInteger)> _totalSupplies;
        protected readonly ValidatorSet _validatorSet;
        protected readonly IAccountStateDelta _init;

        protected AccountStateDeltaTest(ITestOutputHelper output)
        {
            _keys = new[]
            {
                new PrivateKey(),
                new PrivateKey(),
                new PrivateKey(),
            };

            _addr = _keys.Select(AddressExtensions.ToAddress).ToArray();

            _currencies = new[]
            {
#pragma warning disable CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
                Currency.Legacy("FOO", 0, _addr[0]),
                Currency.Legacy("BAR", 0, _addr.Take(2).ToImmutableHashSet()),
                Currency.Legacy("BAZ", 0, null),
#pragma warning restore CS0618  // must test obsoleted Currency.Legacy() for backwards compatibility
                Currency.Uncapped("QUX", 0, minter: _addr[0]),
                Currency.Capped("QUUX", 0, (100, 0), minter: _addr[0]),
            };

            _states = new Dictionary<Address, IValue>
            {
                [_addr[0]] = (Text)"a",
                [_addr[1]] = (Text)"b",
            }.ToImmutableDictionary();

            _assets = new Dictionary<(Address, Currency), BigInteger>
            {
                [(_addr[0], _currencies[0])] = 5,
                [(_addr[0], _currencies[1])] = -10,
                [(_addr[0], _currencies[3])] = 5,
                [(_addr[1], _currencies[1])] = 15,
                [(_addr[1], _currencies[2])] = 20,
            }.ToImmutableDictionary();

            _totalSupplies = new Dictionary<Currency, (BigInteger, BigInteger)>
            {
                [_currencies[3]] = (5, 0),
            }.ToImmutableDictionary();

            _validatorSet =
                new ValidatorSet(new[]
                {
                    new Validator(_keys[0].PublicKey, 1),
                    new Validator(_keys[1].PublicKey, 1),
                    new Validator(_keys[2].PublicKey, 1),
                }.ToList());

            output.WriteLine("Fixtures  {0,-42}  FOO  BAR  BAZ  QUX  State  Validators", "Address");
            int i = 0;
            foreach (Address a in _addr)
            {
                output.WriteLine(
                    "_addr[{0}]  {1}  {2,3}  {3,3}  {4,3}  {5,3} {6}  {7}",
                    i++,
                    a,
                    GetBalance(a, _currencies[0]),
                    GetBalance(a, _currencies[1]),
                    GetBalance(a, _currencies[2]),
                    GetBalance(a, _currencies[3]),
                    GetStates(new[] { a })[0],
                    GetValidatorSet()
                );
            }

            _init = CreateInstance(
                GetStates,
                GetBalance,
                GetTotalSupply,
                GetValidatorSet,
                _addr[0]);
        }

        public abstract int ProtocolVersion { get; }

        public abstract IAccountStateDelta CreateInstance(
            AccountStateGetter accountStateGetter,
            AccountBalanceGetter accountBalanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter,
            Address signer
        );

        [Fact]
        public virtual void NullDelta()
        {
            Assert.Empty(_init.UpdatedAddresses);
            Assert.Empty(_init.StateUpdatedAddresses);
            Assert.Empty(_init.UpdatedFungibleAssets);
            Assert.Equal("a", (Text)_init.GetState(_addr[0]));
            Assert.Equal("b", (Text)_init.GetState(_addr[1]));
            Assert.Null(_init.GetState(_addr[2]));
            Assert.Equal(Value(0, 5), _init.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(1, -10), _init.GetBalance(_addr[0], _currencies[1]));
            Assert.Equal(Zero(2), _init.GetBalance(_addr[0], _currencies[2]));
            Assert.Equal(Zero(0), _init.GetBalance(_addr[1], _currencies[0]));
            Assert.Equal(Value(1, 15), _init.GetBalance(_addr[1], _currencies[1]));
            Assert.Equal(Value(2, 20), _init.GetBalance(_addr[1], _currencies[2]));
            Assert.Equal(Zero(0), _init.GetBalance(_addr[2], _currencies[0]));
            Assert.Equal(Zero(1), _init.GetBalance(_addr[2], _currencies[1]));
            Assert.Equal(Zero(2), _init.GetBalance(_addr[2], _currencies[2]));
        }

        [Fact]
        public virtual void States()
        {
            IAccountStateDelta a = _init.SetState(_addr[0], (Text)"A");
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)_init.GetState(_addr[0]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Equal("b", (Text)_init.GetState(_addr[1]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Null(_init.GetState(_addr[2]));
            Assert.Equal(new[] { _addr[0] }.ToImmutableHashSet(), a.StateUpdatedAddresses);
            Assert.Equal(a.StateUpdatedAddresses, a.UpdatedAddresses);
            Assert.Empty(a.UpdatedFungibleAssets);
            Assert.Empty(a.TotalSupplyUpdatedCurrencies);
            Assert.Empty(_init.UpdatedAddresses);
            Assert.Empty(_init.StateUpdatedAddresses);
            Assert.Empty(_init.UpdatedFungibleAssets);
            Assert.Empty(_init.TotalSupplyUpdatedCurrencies);

            IAccountStateDelta b = a.SetState(_addr[0], (Text)"z");
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)_init.GetState(_addr[0]));
            Assert.Equal("b", (Text)b.GetState(_addr[1]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Null(b.GetState(_addr[2]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Equal(new[] { _addr[0] }.ToImmutableHashSet(), a.StateUpdatedAddresses);
            Assert.Equal(a.StateUpdatedAddresses, a.UpdatedAddresses);
            Assert.Empty(_init.UpdatedAddresses);
            Assert.Empty(_init.StateUpdatedAddresses);

            IAccountStateDelta c = b.SetState(_addr[0], (Text)"a");
            Assert.Equal("a", (Text)c.GetState(_addr[0]));
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
            Assert.Empty(_init.UpdatedAddresses);
            Assert.Empty(_init.StateUpdatedAddresses);
        }

        [Fact]
        public virtual void FungibleAssets()
        {
            IAccountStateDelta a = _init.TransferAsset(_addr[1], _addr[2], Value(2, 5));
            Assert.Equal(Value(2, 15), a.GetBalance(_addr[1], _currencies[2]));
            Assert.Equal(Value(2, 5), a.GetBalance(_addr[2], _currencies[2]));
            Assert.Equal(Value(0, 5), a.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(1, -10), a.GetBalance(_addr[0], _currencies[1]));
            Assert.Equal(Zero(2), a.GetBalance(_addr[0], _currencies[2]));
            Assert.Equal(Zero(0), a.GetBalance(_addr[1], _currencies[0]));
            Assert.Equal(Value(1, 15), a.GetBalance(_addr[1], _currencies[1]));
            Assert.Equal(Zero(0), a.GetBalance(_addr[2], _currencies[0]));
            Assert.Equal(Zero(1), a.GetBalance(_addr[2], _currencies[1]));
            Assert.Equal(
                new Dictionary<Address, IImmutableSet<Currency>>
                {
                    [_addr[1]] = ImmutableHashSet.Create(_currencies[2]),
                    [_addr[2]] = ImmutableHashSet.Create(_currencies[2]),
                }.ToImmutableDictionary(),
                a.UpdatedFungibleAssets
            );
            Assert.Equal(a.UpdatedFungibleAssets.Keys.ToImmutableHashSet(), a.UpdatedAddresses);
            Assert.Empty(a.StateUpdatedAddresses);
            Assert.Empty(_init.UpdatedAddresses);
            Assert.Empty(_init.StateUpdatedAddresses);
            Assert.Empty(_init.UpdatedFungibleAssets);
            Assert.Empty(_init.TotalSupplyUpdatedCurrencies);
        }

        [Fact]
        public virtual void TransferAsset()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.TransferAsset(_addr[0], _addr[1], Zero(0))
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.TransferAsset(_addr[0], _addr[1], Value(0, -1))
            );
            Assert.Throws<InsufficientBalanceException>(() =>
                _init.TransferAsset(_addr[0], _addr[1], Value(0, 6))
            );

            IAccountStateDelta a = _init.TransferAsset(
                _addr[0],
                _addr[1],
                Value(0, 6),
                allowNegativeBalance: true
            );
            Assert.Equal(Value(0, -1), a.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(0, 6), a.GetBalance(_addr[1], _currencies[0]));
        }

        [Fact]
        public virtual BlockChain<DumbAction> TransferAssetInBlock()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var privateKey = new PrivateKey();
            BlockChain<DumbAction> chain = TestUtils.MakeBlockChain(
                new NullBlockPolicy<DumbAction>(),
                store,
                stateStore,
                protocolVersion: ProtocolVersion,
                privateKey: privateKey
            );

            DumbAction action = new DumbAction(_addr[0], "a", _addr[1], _addr[0], 5);
            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                _keys[0],
                chain.Genesis.Hash,
                new[] { action }
            );
            var preEvalBlock = TestUtils.MineNext(
                chain.Tip,
                new[] { tx },
                miner: privateKey.PublicKey,
                protocolVersion: ProtocolVersion);
            var stateRootHash = preEvalBlock.DetermineStateRootHash(chain);
            var hash = preEvalBlock.Header.DeriveBlockHash(stateRootHash, null);
            chain.Append(
                ProtocolVersion < 2
                ? new Block<DumbAction>(preEvalBlock, (stateRootHash, null, hash))
                : preEvalBlock.Evaluate(privateKey, chain)
            );
            Assert.Equal(
                DumbAction.DumbCurrency * 5,
                chain.GetBalance(_addr[0], DumbAction.DumbCurrency)
            );
            Assert.Equal(
                DumbAction.DumbCurrency * -5,
                chain.GetBalance(_addr[1], DumbAction.DumbCurrency)
            );

            return chain;
        }

        [Fact]
        public virtual void MintAsset()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.MintAsset(_addr[0], Zero(0))
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.MintAsset(_addr[0], Value(0, -1))
            );

            IAccountStateDelta delta0 = _init;
            // currencies[0] (FOO) allows only _addr[0] to mint
            delta0 = delta0.MintAsset(_addr[0], Value(0, 10));
            Assert.Equal(Value(0, 15), delta0.GetBalance(_addr[0], _currencies[0]));

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to mint
            delta0 = delta0.MintAsset(_addr[1], Value(1, 10));
            Assert.Equal(Value(1, 25), delta0.GetBalance(_addr[1], _currencies[1]));

            // currencies[2] (BAZ) allows everyone to mint
            delta0 = delta0.MintAsset(_addr[2], Value(2, 10));
            Assert.Equal(Value(2, 10), delta0.GetBalance(_addr[2], _currencies[2]));

            IAccountStateDelta delta1 =
                CreateInstance(GetStates, GetBalance, GetTotalSupply, GetValidatorSet, _addr[1]);
            // currencies[0] (FOO) disallows _addr[1] to mint
            Assert.Throws<CurrencyPermissionException>(() =>
                delta1.MintAsset(_addr[1], Value(0, 10))
            );

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to mint
            delta1 = delta1.MintAsset(_addr[0], Value(1, 20));
            Assert.Equal(Value(1, 10), delta1.GetBalance(_addr[0], _currencies[1]));

            // currencies[2] (BAZ) allows everyone to mint
            delta1 = delta1.MintAsset(_addr[2], Value(2, 10));
            Assert.Equal(Value(2, 10), delta1.GetBalance(_addr[2], _currencies[2]));
        }

        [Fact]
        public virtual void BurnAsset()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.BurnAsset(_addr[0], Zero(0))
            );
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.BurnAsset(_addr[0], Value(0, -1))
            );
            Assert.Throws<InsufficientBalanceException>(() =>
                _init.BurnAsset(_addr[0], Value(0, 6))
            );

            IAccountStateDelta delta0 = _init;
            // currencies[0] (FOO) allows only _addr[0] to burn
            delta0 = delta0.BurnAsset(_addr[0], Value(0, 4));
            Assert.Equal(Value(0, 1), delta0.GetBalance(_addr[0], _currencies[0]));

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to burn
            delta0 = delta0.BurnAsset(_addr[1], Value(1, 10));
            Assert.Equal(Value(1, 5), delta0.GetBalance(_addr[1], _currencies[1]));

            // currencies[2] (BAZ) allows everyone to burn
            delta0 = delta0.BurnAsset(_addr[1], Value(2, 10));
            Assert.Equal(Value(2, 10), delta0.GetBalance(_addr[1], _currencies[2]));

            IAccountStateDelta delta1 =
                CreateInstance(GetStates, GetBalance, GetTotalSupply, GetValidatorSet, _addr[1]);
            // currencies[0] (FOO) disallows _addr[1] to burn
            Assert.Throws<CurrencyPermissionException>(() =>
                delta1.BurnAsset(_addr[0], Value(0, 5))
            );

            // currencies[1] (BAR) allows _addr[0] & _addr[1] to burn
            delta1 = delta1.BurnAsset(_addr[1], Value(1, 10));
            Assert.Equal(Value(1, 5), delta1.GetBalance(_addr[1], _currencies[1]));

            // currencies[2] (BAZ) allows everyone to burn
            delta1 = delta1.BurnAsset(_addr[1], Value(2, 10));
            Assert.Equal(Value(2, 10), delta1.GetBalance(_addr[1], _currencies[2]));
        }

        [Fact]
        public virtual void SetValidator()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _init.SetValidator(new Validator(new PrivateKey().PublicKey, -1))
            );

            var initCount = _keys.Length;
            var key3 = new PrivateKey().PublicKey;
            var key4 = new PrivateKey().PublicKey;

            IAccountStateDelta delta = _init;
            // delta already has 3 validators
            Assert.Equal(initCount, delta.GetValidatorSet().TotalCount);

            // nothing happens trying to delete non existing validator
            delta = delta.SetValidator(new Validator(key3, 0));
            Assert.Equal(initCount, delta.GetValidatorSet().TotalCount);

            // add key 3 to the validator set
            delta = delta.SetValidator(new Validator(key3, 1));
            Assert.Equal(initCount + 1, delta.GetValidatorSet().TotalCount);
            Assert.True(delta.GetValidatorSet().Contains(new Validator(key3, 1)));
            Assert.False(delta.GetValidatorSet().Contains(new Validator(key4, 1)));

            // add key 4 to the validator set
            delta = delta.SetValidator(new Validator(key4, 1));
            Assert.Equal(initCount + 2, delta.GetValidatorSet().TotalCount);
            Assert.True(delta.GetValidatorSet().Contains(new Validator(key3, 1)));
            Assert.True(delta.GetValidatorSet().Contains(new Validator(key4, 1)));

            // remove key 3 from the validator set
            delta = delta.SetValidator(new Validator(key3, 0));
            Assert.Equal(initCount + 1, delta.GetValidatorSet().TotalCount);
            Assert.False(delta.GetValidatorSet().Contains(new Validator(key3, 1)));
            Assert.True(delta.GetValidatorSet().Contains(new Validator(key4, 1)));

            // re-add key 3 to the validator set
            delta = delta.SetValidator(new Validator(key3, 1));
            Assert.Equal(initCount + 2, delta.GetValidatorSet().TotalCount);
            Assert.True(delta.GetValidatorSet().Contains(new Validator(key3, 1)));
            Assert.True(delta.GetValidatorSet().Contains(new Validator(key4, 1)));

            // remove all keys from the validator set
            delta = _keys.Aggregate(
                delta,
                (current, key) => current.SetValidator(new Validator(key.PublicKey, 0)));
            delta = delta.SetValidator(new Validator(key3, 0));
            delta = delta.SetValidator(new Validator(key4, 0));
            Assert.Equal(0, delta.GetValidatorSet().TotalCount);
        }

        protected FungibleAssetValue Value(int currencyIndex, BigInteger quantity) =>
            new FungibleAssetValue(_currencies[currencyIndex], quantity, 0);

        protected FungibleAssetValue Zero(int currencyIndex) => Value(currencyIndex, 0);

        protected IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) => addresses
            .Select(address => _states.TryGetValue(address, out IValue v) ? v : null)
            .ToArray();

        protected FungibleAssetValue GetBalance(Address address, Currency currency) =>
            new FungibleAssetValue(
                currency,
                _assets.TryGetValue((address, currency), out BigInteger balance) ? balance : 0,
                0
            );

        protected FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
            }

            return _totalSupplies.TryGetValue(currency, out var totalSupply)
                ? new FungibleAssetValue(currency, totalSupply.Item1, totalSupply.Item2)
                : currency * 0;
        }

        protected ValidatorSet GetValidatorSet()
        {
            return _validatorSet ?? new ValidatorSet();
        }
    }
}
