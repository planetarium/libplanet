using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Action
{
    /// <summary>
    /// An internal implementation of <see cref="IAccountStateDelta"/>.
    /// </summary>
    internal class AccountStateDeltaImpl : IAccountStateDelta
    {
        private readonly IAccountStateView _accountStateView;
        private IImmutableDictionary<Address, object> _updatedStates;

        /// <summary>
        /// Creates a null delta from the given
        /// <paramref name="accountStateView"/>.
        /// </summary>
        /// <param name="accountStateView">A view to the &#x201c;epoch&#x201d;
        /// states.</param>
        internal AccountStateDeltaImpl(IAccountStateView accountStateView)
        {
            _accountStateView = accountStateView;
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
                return _accountStateView.GetAccountState(address);
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
                object epochState = _accountStateView.GetAccountState(addr);
                if (ReferenceEquals(epochState, state) ||
                    Equals(epochState, state))
                {
                    newState = newState.Remove(addr);
                }
            }

            return new AccountStateDeltaImpl(_accountStateView)
            {
                _updatedStates = newState,
            };
        }
    }
}
