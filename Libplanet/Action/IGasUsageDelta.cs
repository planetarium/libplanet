using System.Diagnostics.Contracts;

namespace Libplanet.Action
{
    /// <summary>
    /// An interface to provide a transition of the gas useage.
    /// </summary>
    internal interface IGasUsageDelta
    {
        /// <summary>
        /// Adds the gas usage of the action to the account.
        /// </summary>
        /// <param name="address">
        /// The address of the account to add the gas usage.
        /// </param>
        /// <param name="gas">
        /// The gas usage of the action.
        /// </param>
        /// <returns>
        /// A new <see cref="IAccountStateDelta"/> instance with
        /// <paramref name="gas"/> added.
        /// </returns>
        [Pure]
        IAccountStateDelta AddGas(Address address, decimal gas);

        /// <summary>
        /// Sets the gas limit of the account.
        /// </summary>
        /// <param name="address"> The address of the account to set the gas limit. </param>
        /// <param name="gasLimit"> The gas limit of the account. </param>
        /// <returns>
        /// A new <see cref="IAccountStateDelta"/> instance with
        /// <paramref name="gasLimit"/> set.
        /// </returns>
        [Pure]
        IAccountStateDelta SetGasLimit(Address address, decimal gasLimit);
    }
}
