using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.Tests.Mocks
{
    /// <summary>
    /// A mock implementation of <see cref="IAccountState"/> with various overloaded methods for
    /// setting up a semi-valid <see cref="IAccountState"/> for testing.
    /// </summary>
    /// <remarks>
    /// All methods are pretty self-explanatory with no side-effects.  There are some caveats:
    /// <list type="bullet">
    ///     <item><description>
    ///         Every balance related operation can accept a negative amount.  Each behave
    ///         as expected.  That is, adding negative amount would decrease the balance.
    ///     </description></item>
    ///     <item><description>
    ///         Negative balance is allowed for all cases.  This includes total supply.
    ///     </description></item>
    ///     <item><description>
    ///         Total supply is not automatically tracked.  That is, changing the balance
    ///         associated with an <see cref="Address"/> does not change the total supply
    ///         in any way.  Total supply must be explicitly set if needed.
    ///     </description></item>
    ///     <item><description>
    ///         There are only few restrictions that apply for manipulating this object, mostly
    ///         pertaining to total supplies:
    ///         <list type="bullet">
    ///             <item><description>
    ///                 It is not possible to set a total supply amount for a currency that is
    ///                 not trackable.
    ///             </description></item>
    ///             <item><description>
    ///                 It is not possible to set a total supply amount that is over the currency's
    ///                 capped maximum total supply.
    ///             </description></item>
    ///         </list>
    ///     </description></item>
    /// </list>
    /// </remarks>
    public class MockAccountState : IAccountState
    {
        private static readonly MockAccountState _empty = new MockAccountState();
        private readonly IImmutableDictionary<Address, IValue> _states;
        private readonly IImmutableDictionary<(Address, Currency), BigInteger> _fungibles;
        private readonly IImmutableDictionary<Currency, BigInteger> _totalSupplies;
        private readonly ValidatorSet _validatorSet;

        public MockAccountState(
            IImmutableDictionary<Address, IValue> states,
            IImmutableDictionary<(Address Address, Currency Currency), BigInteger> fungibles,
            IImmutableDictionary<Currency, BigInteger> totalSupplies,
            ValidatorSet validatorSet)
        {
            _states = states;
            _fungibles = fungibles;
            _totalSupplies = totalSupplies;
            _validatorSet = validatorSet;
        }

        private MockAccountState()
            : this(
                ImmutableDictionary<Address, IValue>.Empty,
                ImmutableDictionary<(Address Address, Currency Currency), BigInteger>.Empty,
                ImmutableDictionary<Currency, BigInteger>.Empty,
                new ValidatorSet())
        {
        }

        public static MockAccountState Empty => _empty;

        public IImmutableDictionary<Address, IValue> States => _states;

        public IImmutableDictionary<(Address, Currency), BigInteger> Fungibles => _fungibles;

        public IImmutableDictionary<Currency, BigInteger> TotalSupplies => _totalSupplies;

        public ValidatorSet ValidatorSet => _validatorSet;

        public Address Address => default;

        public IValue GetState(Address address) => _states.TryGetValue(address, out IValue value)
            ? value
            : null;

        public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
            addresses.Select(GetState).ToArray();

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            _fungibles.TryGetValue((address, currency), out BigInteger rawValue)
                ? FungibleAssetValue.FromRawValue(currency, rawValue)
                : FungibleAssetValue.FromRawValue(currency, 0);

        public FungibleAssetValue GetTotalSupply(Currency currency)
        {
            if (!currency.TotalSupplyTrackable)
            {
                var msg =
                    $"The total supply value of the currency {currency} is not trackable " +
                    "because it is a legacy untracked currency which might have been" +
                    "established before the introduction of total supply tracking support.";
                throw new TotalSupplyNotTrackableException(msg, currency);
            }

            return _totalSupplies.TryGetValue(currency, out var rawValue)
                ? FungibleAssetValue.FromRawValue(currency, rawValue)
                : FungibleAssetValue.FromRawValue(currency, 0);
        }

        public ValidatorSet GetValidatorSet() => _validatorSet;

        public MockAccountState SetState(Address address, IValue state) =>
            new MockAccountState(
                _states.SetItem(address, state),
                _fungibles,
                _totalSupplies,
                _validatorSet);

        public MockAccountState SetBalance(
            Address address, FungibleAssetValue amount) =>
            SetBalance((address, amount.Currency), amount.RawValue);

        public MockAccountState SetBalance(
            Address address, Currency currency, BigInteger rawAmount) =>
            SetBalance((address, currency), rawAmount);

        public MockAccountState SetBalance(
            (Address Address, Currency Currency) pair, BigInteger rawAmount) =>
            new MockAccountState(
                _states,
                _fungibles.SetItem(pair, rawAmount),
                _totalSupplies,
                _validatorSet);

        public MockAccountState AddBalance(Address address, FungibleAssetValue amount) =>
            AddBalance((address, amount.Currency), amount.RawValue);

        public MockAccountState AddBalance(
            Address address, Currency currency, BigInteger rawAmount) =>
            AddBalance((address, currency), rawAmount);

        public MockAccountState AddBalance(
            (Address Address, Currency Currency) pair, BigInteger rawAmount) =>
            SetBalance(
                pair,
                (_fungibles.TryGetValue(pair, out BigInteger amount) ? amount : 0) + rawAmount);

        public MockAccountState SubtractBalance(
            Address address, FungibleAssetValue amount) =>
            SubtractBalance((address, amount.Currency), amount.RawValue);

        public MockAccountState SubtractBalance(
            Address address, Currency currency, BigInteger rawAmount) =>
            SubtractBalance((address, currency), rawAmount);

        public MockAccountState SubtractBalance(
            (Address Address, Currency Currency) pair, BigInteger rawAmount) =>
            SetBalance(
                pair,
                (_fungibles.TryGetValue(pair, out BigInteger amount) ? amount : 0) - rawAmount);

        public MockAccountState TransferBalance(
            Address sender, Address recipient, FungibleAssetValue amount) =>
            TransferBalance(sender, recipient, amount.Currency, amount.RawValue);

        public MockAccountState TransferBalance(
            Address sender, Address recipient, Currency currency, BigInteger rawAmount) =>
            SubtractBalance(sender, currency, rawAmount).AddBalance(recipient, currency, rawAmount);

        public MockAccountState SetTotalSupply(FungibleAssetValue amount) =>
            SetTotalSupply(amount.Currency, amount.RawValue);

        public MockAccountState SetTotalSupply(Currency currency, BigInteger rawAmount) =>
            currency.TotalSupplyTrackable
                ? !(currency.MaximumSupply is FungibleAssetValue maximumSupply) ||
                    rawAmount <= maximumSupply.RawValue
                    ? new MockAccountState(
                        _states,
                        _fungibles,
                        _totalSupplies.SetItem(currency, rawAmount),
                        _validatorSet)
                    : throw new ArgumentException(
                        $"Given {currency}'s total supply is capped at {maximumSupply.RawValue} " +
                        $"and cannot be set to {rawAmount}.")
                : throw new ArgumentException(
                    $"Given {currency} is not trackable.");

        public MockAccountState AddTotalSupply(FungibleAssetValue amount) =>
            AddTotalSupply(amount.Currency, amount.RawValue);

        public MockAccountState AddTotalSupply(Currency currency, BigInteger rawAmount) =>
            SetTotalSupply(
                currency,
                (_totalSupplies.TryGetValue(currency, out BigInteger amount) ? amount : 0) +
                    rawAmount);

        public MockAccountState SubtractTotalSupply(FungibleAssetValue amount) =>
            SubtractTotalSupply(amount.Currency, amount.RawValue);

        public MockAccountState SubtractTotalSupply(Currency currency, BigInteger rawAmount) =>
            SetTotalSupply(
                currency,
                (_totalSupplies.TryGetValue(currency, out BigInteger amount) ? amount : 0) -
                    rawAmount);

        public MockAccountState SetValidator(Validator validator) =>
            new MockAccountState(
                _states,
                _fungibles,
                _totalSupplies,
                _validatorSet.Update(validator));
    }
}
