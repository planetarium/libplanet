using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;
using Libplanet.State;

namespace Libplanet.Tests.Mocks
{
    /// <summary>
    /// A simple class for mocking an <see cref="IAccountState"/> with given various getters.
    /// </summary>
    public class MockAccountState : IAccountState
    {
        private AccountStateGetter _stateGetter;
        private AccountBalanceGetter _balanceGetter;
        private TotalSupplyGetter _totalSupplyGetter;
        private ValidatorSetGetter _validatorSetGetter;

        public MockAccountState(
            AccountStateGetter stateGetter,
            AccountBalanceGetter balanceGetter,
            TotalSupplyGetter totalSupplyGetter,
            ValidatorSetGetter validatorSetGetter)
        {
            _stateGetter = stateGetter;
            _balanceGetter = balanceGetter;
            _totalSupplyGetter = totalSupplyGetter;
            _validatorSetGetter = validatorSetGetter;
        }

        /// <summary>
        /// An empty default state that returns <see langword="null"/> for any state,
        /// 0 for any balance, 0 for any total supply if trackable, and
        /// an empty <see cref="ValidatorSet"/>.
        /// </summary>
        public static MockAccountState Empty =>
            new MockAccountState(
                _ => null,
                (_, c) => c * 0,
                c => c.TotalSupplyTrackable
                    ? c * 0
                    : throw new TotalSupplyNotTrackableException(
                        $"Currency {c}'s total supply cannot be tracked", c),
                () => new ValidatorSet());

        public IValue GetState(Address address) =>
            GetStates(new[] { address }).First();

        public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
            _stateGetter(addresses);

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            _balanceGetter(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            _totalSupplyGetter(currency);

        public ValidatorSet GetValidatorSet() =>
            _validatorSetGetter();
    }
}
