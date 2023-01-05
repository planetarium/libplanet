using System;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// Predefined built-in state completers that satisfy the
    /// <see cref="ValidatorSetStateCompleter{T}"/> delegate.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type. It should match the
    /// <see cref="BlockChain{T}"/>'s type parameter.</typeparam>
    public static class ValidatorSetStateCompleters<T>
        where T : IAction, new()
    {
        /// <summary>
        /// See <see cref="StateCompleterSet{T}.Recalculate"/>.
        /// </summary>
        public static readonly ValidatorSetStateCompleter<T> Recalculate =
            (blockChain, blockHash) =>
            {
                blockChain.RecalculateBlockStates(blockHash);
                return blockChain.GetValidatorSet(blockHash);
            };

        /// <summary>
        /// See <see cref="StateCompleterSet{T}.ComplementAll"/>.
        /// </summary>
        public static readonly ValidatorSetStateCompleter<T> ComplementAll =
            (blockChain, blockHash) =>
        {
                blockChain.ComplementAllBlockStates(blockHash);
                return blockChain.GetValidatorSet(blockHash);
        };

        /// <summary>
        /// See <see cref="StateCompleterSet{T}.ComplementLatest"/>.
        /// </summary>
        public static readonly ValidatorSetStateCompleter<T> ComplementLatest =
            (blockChain, blockHash) =>
        {
                blockChain.ComplementLatestBlockStates(blockHash);
                return blockChain.GetValidatorSet(blockHash);
        };

        /// <summary>
        /// Rejects to complement incomplete state and throws
        /// an <see cref="IncompleteBlockStatesException"/>.
        /// </summary>
        public static readonly ValidatorSetStateCompleter<T> Reject =
            (chain, blockHash) =>
                throw new IncompleteBlockStatesException(blockHash);

        internal static Func<BlockChain<T>, BlockHash, IValue> ToRawStateCompleter(
            ValidatorSetStateCompleter<T> stateCompleter
        ) =>
            (blockChain, hash) =>
                stateCompleter(blockChain, hash) is { } validatorSet
                    ? (IValue)validatorSet.Encoded
                    : Bencodex.Types.Null.Value;
    }
}
