using System.Collections.Immutable;

namespace Libplanet.Action
{
    public interface IPolicyActionsRegistry
    {
        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the beginning
        /// for every block, if any.</summary>
        ImmutableArray<IAction> BeginBlockActions
        {
            get;
        }
        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the end
        /// for every block, if any.</summary>
        ImmutableArray<IAction> EndBlockActions
        {
            get;
        }
        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the beginning
        /// for every transaction, if any.</summary>
        ImmutableArray<IAction> BeginTxActions
        {
            get;
        }
        /// <summary>
        /// An array of <see cref="IAction"/> to execute and be rendered at the end
        /// for every transaction, if any.</summary>
        ImmutableArray<IAction> EndTxActions
        {
            get;
        }
    }
}
