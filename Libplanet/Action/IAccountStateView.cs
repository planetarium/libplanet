using System.Collections.Immutable;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to provide read-only view of account states.
    /// </summary>
    public interface IAccountStateView
    {
        /// <summary>
        /// Gets an account state of the given <see cref="Address"/>.
        /// </summary>
        /// <param name="address">An address of the account to read
        /// its state.</param>
        /// <returns>The account state.</returns>
        object GetAccountState(Address address);
    }
}
