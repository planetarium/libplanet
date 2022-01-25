using System;
using System.Collections.Generic;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Predefined built-in state completers that satisfy <see cref="StateCompleter{T}"/> delegate.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public static class StateCompleters<T>
        where T : IAction, new()
    {
        /// <summary>
        /// See <see cref="StateCompleterSet{T}.Recalculate"/>.
        /// </summary>
        public static readonly StateCompleter<T> Recalculate =
            (blockChain, blockHash, addresses) =>
            {
                blockChain.RecalculateBlockStates(blockHash);
                return blockChain.GetStates(addresses, blockHash);
            };

        /// <summary>
        /// See <see cref="StateCompleterSet{T}.ComplementAll"/>.
        /// </summary>
        public static readonly StateCompleter<T> ComplementAll =
            (blockChain, blockHash, addresses) =>
            {
                blockChain.ComplementAllBlockStates(blockHash);
                return blockChain.GetStates(addresses, blockHash);
            };

        /// <summary>
        /// See <see cref="StateCompleterSet{T}.ComplementLatest"/>.
        /// </summary>
        public static readonly StateCompleter<T> ComplementLatest =
            (blockChain, blockHash, addresses) =>
            {
                blockChain.ComplementLatestBlockStates(blockHash);
                return blockChain.GetStates(addresses, blockHash);
            };

        /// <summary>
        /// Rejects to complement incomplete states and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly StateCompleter<T> Reject = (chain, blockHash, addresses) =>
            throw new IncompleteBlockStatesException(blockHash);

        internal static Func<BlockChain<T>, BlockHash, IReadOnlyList<IValue?>> ToRawStateCompleter(
            StateCompleter<T> stateCompleter,
            IReadOnlyList<Address> addresses
        ) =>
            (blockChain, hash) => stateCompleter(blockChain, hash, addresses);
    }
}
