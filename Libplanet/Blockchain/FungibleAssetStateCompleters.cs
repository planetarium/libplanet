using System;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Predefined built-in state completers that satisfy
    /// <see cref="FungibleAssetStateCompleter{T}"/> delegate.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public static class FungibleAssetStateCompleters<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Recalculates and complements a block's incomplete states on the fly.
        /// Incomplete states are filled with the recalculated states and the states are
        /// permanently remained in the store.
        /// </summary>
        public static readonly FungibleAssetStateCompleter<T> Recalculate =
            (blockChain, blockHash, address, currency, enterWriteMode) =>
                blockChain.ComplementBlockStates(blockHash, enterWriteMode).TryGetValue(
                    BlockChain<T>.ToFungibleAssetKey(address, currency),
                    out IValue v
                ) ? (BigInteger)(Bencodex.Types.Integer)v : 0;

        /// <summary>
        /// Rejects to complement incomplete state and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly FungibleAssetStateCompleter<T> Reject =
            (chain, blockHash, address, currency, enterWriteMode) =>
                throw new IncompleteBlockStatesException(blockHash);

        internal static Func<BlockChain<T>, HashDigest<SHA256>, Func<IDisposable>, IValue>
        ToRawStateCompleter(
            FungibleAssetStateCompleter<T> stateCompleter,
            Address address,
            Currency currency
        ) =>
            (blockChain, hash, enterWriteMode) =>
                (Bencodex.Types.Integer)stateCompleter(
                    blockChain,
                    hash,
                    address,
                    currency,
                    enterWriteMode
                );
    }
}
