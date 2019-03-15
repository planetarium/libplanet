using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Action
{
    /// <summary>
    /// An internal implementation of <see cref="IAccountStateDelta"/>.
    /// </summary>
    internal class AccountStateDeltaImpl : IAccountStateDelta
    {
        private readonly AccountStateGetter _accountStateGetter;
        private IImmutableDictionary<Address, object> _updatedStates;

        /// <summary>
        /// Creates a null delta from the given
        /// <paramref name="accountStateGetter"/>.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d;
        /// states.</param>
        internal AccountStateDeltaImpl(AccountStateGetter accountStateGetter)
        {
            _accountStateGetter = accountStateGetter;
            _updatedStates = ImmutableDictionary<Address, object>.Empty;
        }

        /// <inheritdoc/>
        IImmutableSet<Address> IAccountStateDelta.UpdatedAddresses =>
            _updatedStates.Keys.ToImmutableHashSet();

        /// <inheritdoc/>
        object IAccountStateDelta.GetState(Address address)
        {
            try
            {
                return _updatedStates[address];
            }
            catch (KeyNotFoundException)
            {
                return _accountStateGetter(address);
            }
        }

        /// <inheritdoc/>
        IAccountStateDelta IAccountStateDelta.SetState(
            Address address,
            object state
        )
        {
            IImmutableDictionary<Address, object> newState =
                _updatedStates.SetItem(address, state);
            foreach (Address addr in newState.Keys)
            {
                object epochState = _accountStateGetter(addr);
                if (ReferenceEquals(epochState, state) ||
                    Equals(epochState, state))
                {
                    newState = newState.Remove(addr);
                }
            }

            return new AccountStateDeltaImpl(_accountStateGetter)
            {
                _updatedStates = newState,
            };
        }
    }
}
