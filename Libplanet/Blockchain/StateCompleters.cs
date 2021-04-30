#nullable enable
using System;
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
        /// Recalculates and complements a block's incomplete states on the fly.
        /// Incomplete states are filled with the recalculated states and the states are
        /// permanently remained in the store.
        /// </summary>
        public static readonly StateCompleter<T> Recalculate = (blockChain, blockHash, address) =>
        {
            blockChain.ComplementBlockStates(blockHash);
            return blockChain.GetState(address, blockHash);
        };

        /// <summary>
        /// Rejects to complement incomplete state and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly StateCompleter<T> Reject = (chain, blockHash, address) =>
            throw new IncompleteBlockStatesException(blockHash);

        internal static Func<BlockChain<T>, BlockHash, IValue> ToRawStateCompleter(
            StateCompleter<T> stateCompleter,
            Address address
        ) =>
            (blockChain, hash) => stateCompleter(blockChain, hash, address);
    }
}
