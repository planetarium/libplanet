namespace Libplanet.Action
{
    /// <summary>
    /// An interface to provide a transition of the gas usage.
    /// </summary>
    public interface IGasMeter
    {
        /// <summary>
        /// The available gas of the action.
        /// </summary>
        long GasAvailable { get; }

        /// <summary>
        /// The gas limit of the action.
        /// </summary>
        long GasLimit { get; }

        /// <summary>
        /// The gas used by the action.
        /// </summary>
        long GasUsed { get; }

        /// <summary>
        /// Use gas of the account.
        /// </summary>
        /// <param name="gas">
        /// The gas usage of the action.
        /// </param>
        void UseGas(long gas);
    }
}
