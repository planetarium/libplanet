using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using static Libplanet.Action.State.KeyConverters;

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
        private readonly IStateStore _stateStore;

        public MockAccountState()
            : this(new TrieStateStore(new MemoryKeyValueStore()), null)
        {
        }

        public MockAccountState(
            IStateStore stateStore,
            HashDigest<SHA256>? stateRootHash = null)
        {
            _stateStore = stateStore;
            Trie = stateStore.GetStateRoot(stateRootHash);
        }

        public ITrie Trie { get; }

        public IValue GetState(Address address) =>
            Trie.Get(ToStateKey(address));

        public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
            addresses.Select(GetState).ToList();

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            Trie.Get(ToFungibleAssetKey(address, currency)) is Integer rawValue
                ? FungibleAssetValue.FromRawValue(currency, rawValue)
                : currency * 0;

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

            return Trie.Get(ToTotalSupplyKey(currency)) is Integer rawValue
                ? FungibleAssetValue.FromRawValue(currency, rawValue)
                : currency * 0;
        }

        public ValidatorSet GetValidatorSet() =>
             Trie.Get(ValidatorSetKey) is List list
                ? new ValidatorSet(list)
                : new ValidatorSet();

        public MockAccountState SetState(Address address, IValue state) =>
            new MockAccountState(
                _stateStore,
                _stateStore.Commit(Trie.Set(ToStateKey(address), state)).Hash);

        public MockAccountState SetBalance(
            Address address, FungibleAssetValue amount) =>
            SetBalance((address, amount.Currency), amount.RawValue);

        public MockAccountState SetBalance(
            Address address, Currency currency, BigInteger rawAmount) =>
            SetBalance((address, currency), rawAmount);

        public MockAccountState SetBalance(
            (Address Address, Currency Currency) pair, BigInteger rawAmount) =>
            new MockAccountState(
                _stateStore,
                _stateStore.Commit(
                    Trie.Set(
                        ToFungibleAssetKey(pair.Address, pair.Currency),
                        new Integer(rawAmount))).Hash);

        public MockAccountState AddBalance(Address address, FungibleAssetValue amount) =>
            AddBalance((address, amount.Currency), amount.RawValue);

        public MockAccountState AddBalance(
            Address address, Currency currency, BigInteger rawAmount) =>
            AddBalance((address, currency), rawAmount);

        public MockAccountState AddBalance(
            (Address Address, Currency Currency) pair, BigInteger rawAmount) =>
            SetBalance(
                pair,
                (Trie.Get(ToFungibleAssetKey(pair.Address, pair.Currency)) is
                    Integer amount ? amount : 0) + rawAmount);

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
                (Trie.Get(ToFungibleAssetKey(pair.Address, pair.Currency)) is
                    Integer amount ? amount : 0) - rawAmount);

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
                        _stateStore,
                        _stateStore.Commit(
                            Trie.Set(ToTotalSupplyKey(currency), new Integer(rawAmount))).Hash)
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
                (Trie.Get(ToTotalSupplyKey(currency)) is
                    Integer amount ? amount : 0) + rawAmount);

        public MockAccountState SubtractTotalSupply(FungibleAssetValue amount) =>
            SubtractTotalSupply(amount.Currency, amount.RawValue);

        public MockAccountState SubtractTotalSupply(Currency currency, BigInteger rawAmount) =>
            SetTotalSupply(
                currency,
                (Trie.Get(ToTotalSupplyKey(currency)) is
                    Integer amount ? amount : 0) - rawAmount);

        public MockAccountState SetValidator(Validator validator) =>
            new MockAccountState(
                _stateStore,
                _stateStore.Commit(
                    Trie.Set(ValidatorSetKey, GetValidatorSet().Update(validator).Bencoded)).Hash);
    }
}
