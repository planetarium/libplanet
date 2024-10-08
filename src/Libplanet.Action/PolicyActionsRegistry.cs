using System.Collections.Immutable;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Action
{
    public class PolicyActionsRegistry : IPolicyActionsRegistry
    {
        /// <summary>
        /// A class containing policy actions to evaluate at each situation.
        /// </summary>
        /// <param name="beginBlockActions">A list of block actions to
        /// evaluate at the beginning for each <see cref="IPreEvaluationBlock"/> that gets
        /// evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        /// <param name="endBlockActions">A list of block actions to
        /// evaluate at the end for each <see cref="IPreEvaluationBlock"/> that gets evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        /// <param name="beginTxActions">A list of block actions to
        /// evaluate at the beginning for each <see cref="Transaction"/> that gets evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        /// <param name="endTxActions">A list of block actions to
        /// evaluate at the end for each <see cref="Transaction"/> that gets evaluated.
        /// Note the order of the returned list determines the execution order.
        /// </param>
        public PolicyActionsRegistry(
            ImmutableArray<IAction>? beginBlockActions = null,
            ImmutableArray<IAction>? endBlockActions = null,
            ImmutableArray<IAction>? beginTxActions = null,
            ImmutableArray<IAction>? endTxActions = null)
        {
            BeginBlockActions = beginBlockActions ?? ImmutableArray<IAction>.Empty;
            EndBlockActions = endBlockActions ?? ImmutableArray<IAction>.Empty;
            BeginTxActions = beginTxActions ?? ImmutableArray<IAction>.Empty;
            EndTxActions = endTxActions ?? ImmutableArray<IAction>.Empty;
        }

        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the beginning
        /// for every block, if any.</summary>
        public ImmutableArray<IAction> BeginBlockActions { get; }

        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the end
        /// for every block, if any.</summary>
        public ImmutableArray<IAction> EndBlockActions { get; }

        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the beginning
        /// for every transaction, if any.</summary>
        public ImmutableArray<IAction> BeginTxActions { get; }

        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the end
        /// for every transaction, if any.</summary>
        public ImmutableArray<IAction> EndTxActions { get; }
    }
}
