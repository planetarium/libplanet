using Libplanet.Types.Blocks;

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
        public PolicyActionsGetterCollection(
            PolicyActionsGetter beginBlockActionsGetter,
            PolicyActionsGetter endBlockActionsGetter)
        {
            BeginBlockActionsGetter = beginBlockActionsGetter;
            EndBlockActionsGetter = endBlockActionsGetter;
        }

        public PolicyActionsGetter BeginBlockActionsGetter { get; }

        public PolicyActionsGetter EndBlockActionsGetter { get; }
    }
}
