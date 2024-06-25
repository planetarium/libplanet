using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public interface IWorldDelta
    {
        /// <summary>
        /// A dictionary representing changed account states for each <see cref="Address"/>.
        /// This lasts till new empty delta instance has been made.
        /// </summary>
        [Pure]
        IImmutableDictionary<Address, IAccount> Accounts { get; }

        /// <summary>
        /// Set account on both of <see cref="Accounts"/> and <see cref="Uncommitted"/>
        /// dictionaries. If <see cref="IAccount"/> already exists on
        /// <paramref name="address"/>, update with new <paramref name="account"/>.
        /// </summary>
        /// <param name="address"><see cref="Address"/> to set on.</param>
        /// <param name="account"><see cref="IAccount"/> to set.</param>
        /// <returns>New <see cref="IWorldDelta"/> that account is properly set.</returns>
        [Pure]
        IWorldDelta SetAccount(Address address, IAccount account);
    }
}
