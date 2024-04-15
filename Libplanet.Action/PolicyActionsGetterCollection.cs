using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    public class PolicyActionsGetterCollection
    {
        /// <summary>
        /// A class containing delegators
        /// to get policy actions to evaluate at each situation.
        /// </summary>
        /// <param name="beginBlockActionsGetter">A delegator to get policy block actions to
        /// evaluate at the beginning for each <see cref="IPreEvaluationBlock"/> that gets
        /// evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        /// <param name="endBlockActionsGetter">A delegator to get policy block actions to
        /// evaluate at the end for each <see cref="IPreEvaluationBlock"/> that gets evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        /// <param name="beginTxActionsGetter">A delegator to get policy block actions to
        /// evaluate at the beginning for each <see cref="Transaction"/> that gets evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        /// <param name="endTxActionsGetter">A delegator to get policy block actions to
        /// evaluate at the end for each <see cref="Transaction"/> that gets evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        public PolicyActionsGetterCollection(
            PolicyActionsGetter beginBlockActionsGetter,
            PolicyActionsGetter endBlockActionsGetter,
            PolicyActionsGetter beginTxActionsGetter,
            PolicyActionsGetter endTxActionsGetter)
        {
            BeginBlockActionsGetter = beginBlockActionsGetter;
            EndBlockActionsGetter = endBlockActionsGetter;
            BeginTxActionsGetter = beginTxActionsGetter;
            EndTxActionsGetter = endTxActionsGetter;
        }

        public PolicyActionsGetter BeginBlockActionsGetter { get; }

        public PolicyActionsGetter EndBlockActionsGetter { get; }

        public PolicyActionsGetter BeginTxActionsGetter { get; }

        public PolicyActionsGetter EndTxActionsGetter { get; }
    }
}
