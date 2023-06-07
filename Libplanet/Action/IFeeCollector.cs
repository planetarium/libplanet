using Libplanet.State;

namespace Libplanet.Action
{
    /// <summary>
    /// Represents a fee collector.
    /// A fee collector is a class that collects fees from the sender of the transaction.
    /// The fee collector is called three times in a single block.
    /// The first call is to collect the fee from the sender of the transaction.
    /// The second call is to refund the fee to the sender of the transaction.
    /// The third call is to reward the proposer of the block.
    /// The fee collector is called only when the transaction is collectible.
    /// </summary>
    internal interface IFeeCollector
    {
        /// <summary>
        /// Mortgage the fee from the sender of the transaction.
        /// </summary>
        /// <param name="state"> The state of the account.</param>
        /// <returns> The state of the account after the fee is mortgaged.</returns>
        IAccountStateDelta Mortgage(IAccountStateDelta state);

        /// <summary>
        /// Refund the fee to the sender of the transaction.
        /// </summary>
        /// <param name="state">
        /// The state of the account after the action is executed.
        /// </param>
        /// <returns>
        /// The state of the account after the fee is refunded.
        /// </returns>
        IAccountStateDelta Refund(IAccountStateDelta state);

        /// <summary>
        /// Reward the proposer of the block.
        /// </summary>
        /// <param name="state">
        /// The state of the account after the fee is refunded.
        /// </param>
        /// <returns>
        /// The state of the account after the proposer is rewarded.
        /// </returns>
        IAccountStateDelta Reward(IAccountStateDelta state);

        /// <summary>
        /// Change the action context and return the next fee collector.
        /// </summary>
        /// <param name="context">
        /// The context of the action.
        /// </param>
        /// <returns>
        /// The next fee collector.
        /// </returns>
        IFeeCollector Next(IActionContext context);
    }
}
