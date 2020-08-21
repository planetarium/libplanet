using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountStateDeltaImplTest
    {
        private readonly Address[] _addr;
        private readonly Currency[] _currencies;
        private readonly IImmutableDictionary<Address, IValue> _states;
        private readonly IImmutableDictionary<(Address, Currency), BigInteger> _assets;
        private readonly IAccountStateDelta _init;

        public AccountStateDeltaImplTest(ITestOutputHelper output)
        {
            Address Addr() => new PrivateKey().ToAddress();

            _addr = new[]
            {
                Addr(),
                Addr(),
                Addr(),
            };

            _currencies = new[]
            {
                new Currency("FOO", 0, minter: _addr[0]),
                new Currency("BAR", 0, minters: _addr.Take(2).ToImmutableHashSet()),
                new Currency("BAZ", 0, minter: null),
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
                [(_addr[1], _currencies[1])] = 15,
                [(_addr[1], _currencies[2])] = 20,
            }.ToImmutableDictionary();

            output.WriteLine("Fixtures  {0,-42}  FOO  BAR  BAZ  State", "Address");
            int i = 0;
            foreach (Address a in _addr)
            {
                output.WriteLine(
                    "_addr[{0}]  {1}  {2,3}  {3,3}  {4,3}  {5}",
                    i++,
                    a,
                    GetBalance(a, _currencies[0]),
                    GetBalance(a, _currencies[1]),
                    GetBalance(a, _currencies[2]),
                    GetState(a)
                );
            }

            _init = new AccountStateDeltaImpl(GetState, GetBalance, _addr[0]);
        }

        [Fact]
        public void NullDelta()
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
        public void States()
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
            Assert.Empty(_init.UpdatedAddresses);
            Assert.Empty(_init.StateUpdatedAddresses);
            Assert.Empty(_init.UpdatedFungibleAssets);

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
        public void FungibleAssets()
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
        }

        [Fact]
        public void TransferAsset()
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
        public void MintAsset()
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

            IAccountStateDelta delta1 = new AccountStateDeltaImpl(GetState, GetBalance, _addr[1]);
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
        public void BurnAsset()
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

            IAccountStateDelta delta1 = new AccountStateDeltaImpl(GetState, GetBalance, _addr[1]);
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

        private FungibleAssetValue Value(int currencyIndex, BigInteger quantity) =>
            new FungibleAssetValue(_currencies[currencyIndex], quantity, 0);

        private FungibleAssetValue Zero(int currencyIndex) => Value(currencyIndex, 0);

        private IValue GetState(Address address) =>
            _states.TryGetValue(address, out IValue v) ? v : null;

        private FungibleAssetValue GetBalance(Address address, Currency currency) =>
            new FungibleAssetValue(
                currency,
                _assets.TryGetValue((address, currency), out BigInteger balance) ? balance : 0,
                0
            );
    }
}
