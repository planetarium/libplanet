using Libplanet.Action;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Groups two kinds of state completers.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public struct StateCompleterSet<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Recalculates and complements a block's incomplete states on the fly.
        /// Incomplete states are filled with the recalculated states and the states are
        /// permanently remained in the store.
        /// </summary>
        public static readonly StateCompleterSet<T> Recalculate = new StateCompleterSet<T>
        {
            RecalculateFlag = true,
            StateCompleter = StateCompleters<T>.Recalculate,
            FungibleAssetStateCompleter = FungibleAssetStateCompleters<T>.Recalculate,
        };

        /// <summary>
        /// Rejects to complement incomplete state and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly StateCompleterSet<T> Reject = new StateCompleterSet<T>
        {
            RecalculateFlag = false,
            StateCompleter = StateCompleters<T>.Reject,
            FungibleAssetStateCompleter = FungibleAssetStateCompleters<T>.Reject,
        };

        /// <summary>
        /// Holds a <see cref="StateCompleter{T}"/>.
        /// </summary>
        public StateCompleter<T> StateCompleter { get; set; }

        // FIXME: Temporary workaround to determine the StateCompleter "type".
        // Should be removed upon further refactoring when StateCompleter type parameters
        // are removed from public APIs.
        public bool RecalculateFlag { get; set; }

        /// <summary>
        /// Holds a <see cref="FungibleAssetStateCompleter{T}"/>.
        /// </summary>
        public FungibleAssetStateCompleter<T> FungibleAssetStateCompleter { get; set; }
    }
}
