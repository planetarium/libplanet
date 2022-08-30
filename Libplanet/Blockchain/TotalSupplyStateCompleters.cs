using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Predefined built-in state completers that satisfy the
    /// <see cref="TotalSupplyStateCompleter{T}"/> delegate.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type. It should match the
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public static class TotalSupplyStateCompleters<T>
        where T : IAction, new()
    {
        /// <summary>
        /// See <see cref="StateCompleterSet{T}.Recalculate"/>.
        /// </summary>
        public static readonly TotalSupplyStateCompleter<T> Recalculate =
            (blockChain, blockHash, currency) =>
            {
                blockChain.RecalculateBlockStates(blockHash);
                return blockChain.GetTotalSupply(currency, blockHash);
            };

        /// <summary>
        /// See <see cref="StateCompleterSet{T}.ComplementAll"/>.
        /// </summary>
        public static readonly TotalSupplyStateCompleter<T> ComplementAll =
            (blockChain, blockHash, currency) =>
        {
                blockChain.ComplementAllBlockStates(blockHash);
                return blockChain.GetTotalSupply(currency, blockHash);
        };

        /// <summary>
        /// See <see cref="StateCompleterSet{T}.ComplementLatest"/>.
        /// </summary>
        public static readonly TotalSupplyStateCompleter<T> ComplementLatest =
            (blockChain, blockHash, currency) =>
        {
                blockChain.ComplementLatestBlockStates(blockHash);
                return blockChain.GetTotalSupply(currency, blockHash);
        };

        /// <summary>
        /// Rejects to complement incomplete state and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly TotalSupplyStateCompleter<T> Reject =
            (chain, blockHash, currency) =>
                throw new IncompleteBlockStatesException(blockHash);

        internal static Func<BlockChain<T>, BlockHash, IValue> ToRawStateCompleter(
            TotalSupplyStateCompleter<T> stateCompleter,
            Currency currency
        ) =>
            (blockChain, hash) =>
                stateCompleter(blockChain, hash, currency) is { } totalSupply
                    ? (IValue)(Bencodex.Types.Integer)totalSupply.RawValue
                    : Bencodex.Types.Null.Value;
    }
}
