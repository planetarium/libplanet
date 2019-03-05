using System.Collections.Immutable;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to provide read-only view of account states.
    /// </summary>
    public interface IAccountStateView
    {
        /// <summary>
        /// Gets an account state of the given <paramref name="address"/>.
        /// <para>If the given <paramref name="address"/> has never been set
        /// its account status, returns <c>null</c> instead of throwing
        /// any exception.</para>
        /// </summary>
        /// <param name="address">An address of the account to read
        /// its state.</param>
        /// <returns>The account state if exists.  Otherwise <c>null</c>.
        /// </returns>
        object GetAccountState(Address address);
    }
}
