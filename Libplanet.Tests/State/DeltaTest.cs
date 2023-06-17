using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.State;
using Xunit;

namespace Libplanet.Tests.State
{
    public class DeltaTest
    {
        private List<PrivateKey> _keys;
        private List<Address> _addresses;
        private List<Currency> _currencies;
        private IImmutableDictionary<Address, IValue> _states1;
        private IImmutableDictionary<Address, IValue> _states2;
        private IImmutableDictionary<(Address, Currency), BigInteger> _fungibles1;
        private IImmutableDictionary<(Address, Currency), BigInteger> _fungibles2;
        private IImmutableDictionary<Currency, BigInteger> _totalSupplies1;
        private IImmutableDictionary<Currency, BigInteger> _totalSupplies2;
        private ValidatorSet _validatorSet1;
        private ValidatorSet _validatorSet2;
        private IDelta _delta0;
        private IDelta _delta1;
        private IDelta _delta2;

        public DeltaTest()
        {
            _keys = Enumerable.Range(0, 3).Select(_ => new PrivateKey()).ToList();
            _addresses = _keys.Select(key => key.ToAddress()).ToList();
            _currencies = new List<Currency>()
            {
                Currency.Capped("USD", 0, (100, 0), null),
                Currency.Capped("KRW", 0, (1000, 0), null),
            };
            _states1 = new Dictionary<Address, IValue>()
            {
                [_addresses[0]] = (Text)"FOO",
                [_addresses[1]] = (Text)"BAR",
            }.ToImmutableDictionary();
            _states2 = new Dictionary<Address, IValue>()
            {
                [_addresses[1]] = (Text)"BAZ",  // Overwrites previous value
                [_addresses[2]] = (Text)"QUX",
            }.ToImmutableDictionary();
            _fungibles1 = new Dictionary<(Address, Currency), BigInteger>()
            {
                [(_addresses[1], _currencies[0])] = 5,
                [(_addresses[2], _currencies[1])] = 10,
            }.ToImmutableDictionary();
            _fungibles2 = new Dictionary<(Address, Currency), BigInteger>()
            {
                [(_addresses[0], _currencies[0])] = 15,
                [(_addresses[1], _currencies[0])] = 20,  // Overwrite previous value
                [(_addresses[1], _currencies[1])] = 25,
            }.ToImmutableDictionary();
            _totalSupplies1 = new Dictionary<Currency, BigInteger>()
            {
                [_currencies[0]] = 5,
                [_currencies[1]] = 10,
            }.ToImmutableDictionary();
            _totalSupplies2 = new Dictionary<Currency, BigInteger>()
            {
                [_currencies[0]] = 35,
                [_currencies[1]] = 25,
            }.ToImmutableDictionary();
            _validatorSet1 = new ValidatorSet(
                _keys.Select(key => new Validator(key.PublicKey, 1)).ToList());
            _validatorSet2 = null;
            _delta0 = new Delta();
            _delta1 = new Delta(
                _states1, _fungibles1, _totalSupplies1, _validatorSet1);
            _delta2 = new Delta(
                _states2, _fungibles2, _totalSupplies2, _validatorSet2);
        }

        [Fact]
        public void UpdatedEarmarks()
        {
            Assert.Equal(
                _states1.Keys.ToImmutableHashSet(),
                _delta1.StateUpdatedAddresses);
            Assert.Equal(
                _fungibles1.Keys.Select(pair => pair.Item1).ToImmutableHashSet(),
                _delta1.FungibleUpdatedAddresses);
            Assert.Equal(
                _fungibles1.Keys.ToImmutableHashSet(),
                _delta1.UpdatedFungibleAssets);
            Assert.Equal(
                _states1.Keys
                    .Union(_fungibles1.Keys.Select(pair => pair.Item1).ToImmutableHashSet())
                    .ToImmutableHashSet(),
                _delta1.UpdatedAddresses);
            Assert.Equal(
                _totalSupplies1.Keys.ToImmutableHashSet(),
                _delta1.UpdatedTotalSupplyCurrencies);
        }

        [Fact]
        public void TotalDelta()
        {
            List<IDelta> deltas = new List<IDelta>() { _delta1, _delta2 };
            IDelta totalDelta = deltas.GetTotalDelta();

            Assert.Equal(
                (Text)"FOO", totalDelta.States[_addresses[0]]); // In _delta1, not in _delta2
            Assert.Equal(
                (Text)"BAZ", totalDelta.States[_addresses[1]]); // Overwritten by _delta2
            Assert.Equal(
                (Text)"QUX", totalDelta.States[_addresses[2]]);
            Assert.Equal(
                15, totalDelta.Fungibles[(_addresses[0], _currencies[0])]);
            Assert.Equal(
                20, totalDelta.Fungibles[(_addresses[1], _currencies[0])]); // Overwritten
            Assert.Equal(
                10, totalDelta.Fungibles[(_addresses[2], _currencies[1])]); // Not in _delta2
            Assert.NotNull(
                totalDelta.ValidatorSet);

            // Adding empty delta does nothing
            deltas = new List<IDelta>() { _delta0, _delta1 };
            totalDelta = deltas.GetTotalDelta();
            Assert.Equal(_delta1.States, totalDelta.States);
            Assert.Equal(_delta1.Fungibles, totalDelta.Fungibles);
            Assert.Equal(_delta1.TotalSupplies, totalDelta.TotalSupplies);
            Assert.Equal(_delta1.ValidatorSet, totalDelta.ValidatorSet);

            // Empty delta can be added before or after to no effect
            deltas = new List<IDelta>() { _delta1, _delta0 };
            totalDelta = deltas.GetTotalDelta();
            Assert.Equal(_delta1.States, totalDelta.States);
            Assert.Equal(_delta1.Fungibles, totalDelta.Fungibles);
            Assert.Equal(_delta1.TotalSupplies, totalDelta.TotalSupplies);
            Assert.Equal(_delta1.ValidatorSet, totalDelta.ValidatorSet);
        }
    }
}
