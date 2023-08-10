using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    public interface IWorldDelta
    {
        /// <summary>
        /// A dictionary representing changed account states for each <see cref="Address"/>.
        /// </summary>
        [Pure]
        IImmutableDictionary<Address, IAccount> Accounts { get; }

        /// <summary>
        /// <para>
        /// A set of <seealso cref="Address"/>es where each <see cref="Address"/> has
        /// its account changed.
        /// </para>
        /// </summary>
        [Pure]
        IImmutableSet<Address> UpdatedAddresses { get; }
    }
}
