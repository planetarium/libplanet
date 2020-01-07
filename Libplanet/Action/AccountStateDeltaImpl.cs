using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Action
{
    /// <summary>
    /// An internal implementation of <see cref="IAccountStateDelta"/>.
    /// </summary>
    internal class AccountStateDeltaImpl : IAccountStateDelta
    {
        private readonly AccountStateGetter _accountStateGetter;
        private Dictionary _updatedStates;

        /// <summary>
        /// Creates a null delta from the given
        /// <paramref name="accountStateGetter"/>.
        /// </summary>
        /// <param name="accountStateGetter">A view to the &#x201c;epoch&#x201d;
        /// states.</param>
        internal AccountStateDeltaImpl(AccountStateGetter accountStateGetter)
        {
            _accountStateGetter = accountStateGetter;
            _updatedStates = default(Dictionary);
        }

        /// <inheritdoc/>
        IImmutableSet<Address> IAccountStateDelta.UpdatedAddresses =>
            _updatedStates.Keys.Select(key => new Address(key.ToString())).ToImmutableHashSet();

        /// <inheritdoc/>
        IValue IAccountStateDelta.GetState(Address address)
        {
            try
            {
                return _updatedStates[address.ToHex()];
            }
            catch (KeyNotFoundException)
            {
                return _accountStateGetter(address);
            }
        }

        /// <inheritdoc/>
        IAccountStateDelta IAccountStateDelta.SetState(
            Address address,
            IValue state
        )
        {
            return new AccountStateDeltaImpl(_accountStateGetter)
            {
                _updatedStates = _updatedStates.SetItem(
                    address.ToHex(), state),
            };
        }
    }
}
