using System;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public abstract class AccountTest
    {
        protected readonly PrivateKey[] _keys;
        protected readonly Address[] _addr;
        protected readonly Currency[] _currencies;
        protected readonly IAccount _initAccount;
        protected readonly IActionContext _initContext;
        protected readonly Address _accountAddress = ReservedAddresses.LegacyAccount;

        protected AccountTest(ITestOutputHelper output)
        {
            _keys = new[]
            {
                new PrivateKey(),
                new PrivateKey(),
                new PrivateKey(),
            };

            _addr = _keys.Select(key => key.Address).ToArray();

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

            _initAccount = new Account(new MockAccountState()
                .SetState(_addr[0], (Text)"a")
                .SetState(_addr[1], (Text)"b")
                .SetBalance(_addr[0], _currencies[0], 5)
                .SetBalance(_addr[0], _currencies[1], 10)
                .SetBalance(_addr[0], _currencies[3], 5)
                .SetBalance(_addr[1], _currencies[1], 15)
                .SetBalance(_addr[1], _currencies[2], 20)
                .SetValidator(new Validator(_keys[0].PublicKey, 1))
                .SetValidator(new Validator(_keys[1].PublicKey, 1))
                .SetValidator(new Validator(_keys[2].PublicKey, 1)));

            output.WriteLine("Fixtures  {0,-42}  FOO  BAR  BAZ  QUX  State  Validators", "Address");
            int i = 0;
            foreach (Address a in _addr)
            {
                output.WriteLine(
                    "_addr[{0}]  {1}  {2,3}  {3,3}  {4,3}  {5,3} {6}  {7}",
                    i++,
                    a,
                    _initAccount.GetBalance(a, _currencies[0]),
                    _initAccount.GetBalance(a, _currencies[1]),
                    _initAccount.GetBalance(a, _currencies[2]),
                    _initAccount.GetBalance(a, _currencies[3]),
                    _initAccount.GetStates(new[] { a })[0],
                    _initAccount.GetValidatorSet()
                );
            }

            _initContext = CreateContext(_initAccount, _addr[0]);
        }

        public abstract int ProtocolVersion { get; }

        public abstract IActionContext CreateContext(
            IAccount delta,
            Address signer);

        [Fact]
        public virtual void NullDelta()
        {
            Assert.Equal("a", (Text)_initAccount.GetState(_addr[0]));
            Assert.Equal("b", (Text)_initAccount.GetState(_addr[1]));
            Assert.Null(_initAccount.GetState(_addr[2]));
            Assert.Equal(Value(0, 5), _initAccount.GetBalance(_addr[0], _currencies[0]));
            Assert.Equal(Value(1, 10), _initAccount.GetBalance(_addr[0], _currencies[1]));
            Assert.Equal(Zero(2), _initAccount.GetBalance(_addr[0], _currencies[2]));
            Assert.Equal(Zero(0), _initAccount.GetBalance(_addr[1], _currencies[0]));
            Assert.Equal(Value(1, 15), _initAccount.GetBalance(_addr[1], _currencies[1]));
            Assert.Equal(Value(2, 20), _initAccount.GetBalance(_addr[1], _currencies[2]));
            Assert.Equal(Zero(0), _initAccount.GetBalance(_addr[2], _currencies[0]));
            Assert.Equal(Zero(1), _initAccount.GetBalance(_addr[2], _currencies[1]));
            Assert.Equal(Zero(2), _initAccount.GetBalance(_addr[2], _currencies[2]));
        }

        [Fact]
        public virtual void States()
        {
            IAccount a = _initAccount.SetState(_addr[0], (Text)"A");
            AccountDiff diffa = AccountDiff.Create(_initAccount.Trie, a.Trie);
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)_initAccount.GetState(_addr[0]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Equal("b", (Text)_initAccount.GetState(_addr[1]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Null(_initAccount.GetState(_addr[2]));
            Assert.Equal(
                _addr[0],
                Assert.Single(diffa.StateDiffs).Key);
            Assert.Empty(diffa.FungibleAssetValueDiffs);
            Assert.Empty(diffa.TotalSupplyDiffs);

            IAccount b = a.SetState(_addr[0], (Text)"z");
            AccountDiff diffb = AccountDiff.Create(a.Trie, b.Trie);
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
            Assert.Equal("A", (Text)a.GetState(_addr[0]));
            Assert.Equal("a", (Text)_initAccount.GetState(_addr[0]));
            Assert.Equal("b", (Text)b.GetState(_addr[1]));
            Assert.Equal("b", (Text)a.GetState(_addr[1]));
            Assert.Null(b.GetState(_addr[2]));
            Assert.Null(a.GetState(_addr[2]));
            Assert.Equal(
                _addr[0],
                Assert.Single(diffb.StateDiffs).Key);
            Assert.Empty(diffb.FungibleAssetValueDiffs);
            Assert.Empty(diffb.TotalSupplyDiffs);

            IAccount c = b.SetState(_addr[0], (Text)"a");
            Assert.Equal("a", (Text)c.GetState(_addr[0]));
            Assert.Equal("z", (Text)b.GetState(_addr[0]));
        }

        [Fact]
        public void RemoveState()
        {
            IAccount a = _initAccount.SetState(_addr[0], (Text)"A");
            a = a.SetState(_addr[1], (Text)"B");
            Assert.Equal((Text)"A", a.GetState(_addr[0]));
            Assert.Equal((Text)"B", a.GetState(_addr[1]));

            a = a.RemoveState(_addr[0]);
            Assert.Null(a.GetState(_addr[0]));
            Assert.Equal((Text)"B", a.GetState(_addr[1]));

            a = a.RemoveState(_addr[1]);
            Assert.Null(a.GetState(_addr[0]));
            Assert.Null(a.GetState(_addr[1]));
        }

        [Fact]
        public virtual void SetValidator()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() =>
                _initAccount.SetValidator(new Validator(new PrivateKey().PublicKey, -1))
            );

            var initCount = _keys.Length;
            var key3 = new PrivateKey().PublicKey;
            var key4 = new PrivateKey().PublicKey;

            IAccount delta = _initAccount;
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
    }
}
