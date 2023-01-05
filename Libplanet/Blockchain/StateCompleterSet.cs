#nullable disable
using Libplanet.Action;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Groups three kinds of state completers, <see cref="StateCompleters{T}"/>,
    /// <see cref="FungibleAssetStateCompleters{T}"/>, and
    /// <see cref="TotalSupplyStateCompleters{T}"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public struct StateCompleterSet<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Recalculates <i>all</i> block states and complements missing states including and upto
        /// a given hash starting from the genesis block.
        /// </summary>
        /// <remarks>
        /// Complemented states are permanently stored.
        /// </remarks>
        public static readonly StateCompleterSet<T> Recalculate = new StateCompleterSet<T>
        {
            StateCompleter = StateCompleters<T>.Recalculate,
            FungibleAssetStateCompleter = FungibleAssetStateCompleters<T>.Recalculate,
            TotalSupplyStateCompleter = TotalSupplyStateCompleters<T>.Recalculate,
        };

        /// <summary>
        /// Recalculates and complements all <i>missing</i> block states including and upto
        /// a given hash starting from the genesis block.
        /// </summary>
        /// <remarks>
        /// Complemented states are permanently stored.
        /// </remarks>
        public static readonly StateCompleterSet<T> ComplementAll = new StateCompleterSet<T>
        {
            StateCompleter = StateCompleters<T>.ComplementAll,
            FungibleAssetStateCompleter = FungibleAssetStateCompleters<T>.ComplementAll,
            TotalSupplyStateCompleter = TotalSupplyStateCompleters<T>.ComplementAll,
        };

        /// <summary>
        /// Recalculates and complements all <i>missing</i> block states including and upto
        /// a given hash starting from the last known states in state storage before
        /// the given hash if the states are missing for the given hash.
        /// </summary>
        /// <remarks>
        /// Complemented states are permanently stored.
        /// </remarks>
        public static readonly StateCompleterSet<T> ComplementLatest = new StateCompleterSet<T>
        {
            StateCompleter = StateCompleters<T>.ComplementLatest,
            FungibleAssetStateCompleter = FungibleAssetStateCompleters<T>.ComplementLatest,
            TotalSupplyStateCompleter = TotalSupplyStateCompleters<T>.ComplementLatest,
        };

        /// <summary>
        /// Rejects to complement incomplete state and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly StateCompleterSet<T> Reject = new StateCompleterSet<T>
        {
            StateCompleter = StateCompleters<T>.Reject,
            FungibleAssetStateCompleter = FungibleAssetStateCompleters<T>.Reject,
            TotalSupplyStateCompleter = TotalSupplyStateCompleters<T>.Reject,
        };

        /// <summary>
        /// Holds a <see cref="StateCompleter{T}"/>.
        /// </summary>
        public StateCompleter<T> StateCompleter { get; set; }

        /// <summary>
        /// Holds a <see cref="FungibleAssetStateCompleter{T}"/>.
        /// </summary>
        public FungibleAssetStateCompleter<T> FungibleAssetStateCompleter { get; set; }

        /// <summary>
        /// Holds a <see cref="TotalSupplyStateCompleter{T}"/>.
        /// </summary>
        public TotalSupplyStateCompleter<T> TotalSupplyStateCompleter { get; set; }

        /// <summary>
        /// Holds a <see cref="ValidatorSetStateCompleter{T}"/>.
        /// </summary>
        public ValidatorSetStateCompleter<T> ValidatorSetStateCompleter { get; set; }
    }
}
