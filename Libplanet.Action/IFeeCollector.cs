using Libplanet.Action.State;

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
    public interface IFeeCollector
    {
        /// <summary>
        /// Mortgage the fee from the sender of the transaction.
        /// </summary>
        /// <param name="world"> The state of the account.</param>
        /// <returns> The state of the account after the fee is mortgaged.</returns>
        IWorld Mortgage(IWorld world);

        /// <summary>
        /// Refund the fee to the sender of the transaction.
        /// </summary>
        /// <param name="world">
        /// The state of the account after the action is executed.
        /// </param>
        /// <returns>
        /// The state of the account after the fee is refunded.
        /// </returns>
        IWorld Refund(IWorld world);

        /// <summary>
        /// Reward the proposer of the block.
        /// </summary>
        /// <param name="world">
        /// The state of the account after the fee is refunded.
        /// </param>
        /// <returns>
        /// The state of the account after the proposer is rewarded.
        /// </returns>
        IWorld Reward(IWorld world);

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
