using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Threading;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tx;
using Serilog;
using static Libplanet.Blockchain.KeyConverters;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block candidate without evaluating actions (in its <see cref="Transactions"/> and
    /// a possible <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>) and state root
    /// hash.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    public sealed class PreEvaluationBlock<T> : PreEvaluationBlockHeader, IPreEvaluationBlock<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Unsafely creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, and a <paramref name="preEvaluationHash"/>
        /// which is probably considered as to be valid.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="preEvaluationHash">A pre-evaluation hash nonce is probably considered
        /// to satisfy the required difficulty, and the hash digest which is probably considered
        /// to be derived from the block <paramref name="content"/> and the nonce.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given proof's
        /// hash is invalid.</exception>
        internal PreEvaluationBlock(
            BlockContent<T> content,
            in HashDigest<SHA256> preEvaluationHash
        )
            : base(content, preEvaluationHash)
        {
        }

        /// <inheritdoc cref="IBlockContent{T}.Transactions"/>
        public IReadOnlyList<Transaction<T>> Transactions => Content.Transactions;

        /// <summary>
        /// The internal block content.
        /// </summary>
        private BlockContent<T> Content => (BlockContent<T>)Metadata;

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and
        /// a <paramref name="blockAction"/> (if any), and returns a <see cref="Block{T}"/> instance
        /// combined with the <see cref="Block{T}.StateRootHash"/> determined from ground zero
        /// (i.e., empty state root).  The returned <see cref="Block{T}"/> is signed by the given
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key to be used for signing the block.
        /// This must match to the block's <see cref="PreEvaluationBlockHeader.Miner"/> and
        /// <see cref="PreEvaluationBlockHeader.PublicKey"/>.</param>
        /// <param name="blockAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="updateValidatorSetAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.UpdateValidatorSetAction"/>.</param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <param name="stateStore">The <see cref="BlockChain{T}.StateStore"/>.</param>
        /// <returns>The block combined with the resulting <see cref="Block{T}.StateRootHash"/>.
        /// It is signed by the given <paramref name="privateKey"/>.</returns>
        /// <remarks>This can be used with only genesis blocks.  For blocks with indices greater
        /// than zero, use <see cref="DetermineStateRootHash(BlockChain{T})"/> overloaded one
        /// instead.</remarks>
        /// <exception cref="InvalidOperationException">Thrown when its
        /// <see cref="IBlockMetadata.Index"/> is not zero, or the block's
        /// <see cref="PreEvaluationBlockHeader.ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see
        /// cref="PreEvaluationBlockHeader.ProtocolVersion"/> 2, it is not usable with blocks of
        /// the earlier <see cref="PreEvaluationBlockHeader.ProtocolVersion"/>s than 2.
        /// To create a <see cref="Block{T}"/> instance with <see cref="Block{T}.ProtocolVersion"/>
        /// less than 2, use <see cref="Block{T}"/>'s constructors with <c>null</c> signatures.
        /// </remarks>
        public Block<T> Evaluate(
            PrivateKey privateKey,
            IAction? blockAction,
            IAction? updateValidatorSetAction,
            Predicate<Currency> nativeTokenPredicate,
            IStateStore stateStore
        ) =>
            Sign(privateKey, DetermineStateRootHash(
                blockAction,
                updateValidatorSetAction,
                nativeTokenPredicate,
                stateStore));

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and an optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>, and returns
        /// a <see cref="Block{T}"/> instance combined with the <see cref="Block{T}.StateRootHash"/>
        /// determined from ground zero (i.e., empty state root). The returned
        /// <see cref="Block{T}"/> is signed by the given <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key to be used for signing the block.
        /// This must match to the block's <see cref="PreEvaluationBlockHeader.Miner"/> and
        /// <see cref="PreEvaluationBlockHeader.PublicKey"/>.</param>
        /// <param name="blockChain">The blockchain on which actions are evaluated based.</param>
        /// <returns>The block combined with the resulting <see cref="Block{T}.StateRootHash"/>.
        /// It is signed by the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the block's
        /// <see cref="PreEvaluationBlockHeader.ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see
        /// cref="PreEvaluationBlockHeader.ProtocolVersion"/> 2, it is not usable with blocks of
        /// the earlier <see cref="PreEvaluationBlockHeader.ProtocolVersion"/>s than 2.
        /// To create a <see cref="Block{T}"/> instance with <see cref="Block{T}.ProtocolVersion"/>
        /// less than 2, use <see cref="Block{T}"/>'s constructors with <c>null</c> signatures.
        /// </remarks>
        // FIXME: Take narrower input instead of a whole BlockChain<T>.
        public Block<T> Evaluate(PrivateKey privateKey, BlockChain<T> blockChain) =>
            EvaluateActions(privateKey, blockChain).Block;

        /// <summary>
        /// Signs the block content with the given <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="privateKey">The miner's private key to be used for signing the block.
        /// This must match to the block's <see cref="PreEvaluationBlockHeader.Miner"/> and
        /// <see cref="PreEvaluationBlockHeader.PublicKey"/>.</param>
        /// <param name="stateRootHash">The state root hash to include to the input message to
        /// sign.</param>
        /// <returns>The signed block with the <paramref name="stateRootHash"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when the block's
        /// <see cref="PreEvaluationBlockHeader.ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        /// <remarks>As blocks have their signatures since the <see
        /// cref="PreEvaluationBlockHeader.ProtocolVersion"/> 2, it is not usable with blocks of
        /// the earlier <see cref="PreEvaluationBlockHeader.ProtocolVersion"/>s than 2.
        /// To create a <see cref="Block{T}"/> instance with <see cref="Block{T}.ProtocolVersion"/>
        /// less than 2, use <see cref="Block{T}"/>'s constructors with <c>null</c> signatures.
        /// </remarks>
        public Block<T> Sign(PrivateKey privateKey, HashDigest<SHA256> stateRootHash)
        {
            ImmutableArray<byte> sig = MakeSignature(privateKey, stateRootHash);
            return new Block<T>(this, stateRootHash, sig);
        }

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and
        /// a <paramref name="blockAction"/> (if any), and determines
        /// the <see cref="Block{T}.StateRootHash"/> from ground zero (i.e., empty state root).
        /// </summary>
        /// <param name="blockAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="updateValidatorSetAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.UpdateValidatorSetAction"/>.</param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <param name="stateStore">The <see cref="BlockChain{T}.StateStore"/>.</param>
        /// <returns>The resulting <see cref="Block{T}.StateRootHash"/>.</returns>
        /// <remarks>This can be used with only genesis blocks.  For blocks with indices greater
        /// than zero, use <see cref="DetermineStateRootHash(BlockChain{T})"/> overloaded one
        /// instead.</remarks>
        /// <exception cref="InvalidOperationException">Thrown when its
        /// <see cref="IBlockMetadata.Index"/> is not zero.</exception>
        public HashDigest<SHA256> DetermineStateRootHash(
            IAction? blockAction,
            IAction? updateValidatorSetAction,
            Predicate<Currency> nativeTokenPredicate,
            IStateStore stateStore
        )
            => DetermineStateRootHash(
                blockAction,
                updateValidatorSetAction,
                nativeTokenPredicate,
                stateStore,
                out _);

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and
        /// a <paramref name="blockAction"/> (if any), and determines
        /// the <see cref="Block{T}.StateRootHash"/> from ground zero (i.e., empty state root).
        /// </summary>
        /// <param name="blockAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>.</param>
        /// <param name="updateValidatorSetAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.UpdateValidatorSetAction"/>.</param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.</param>
        /// <param name="stateStore">The <see cref="BlockChain{T}.StateStore"/>.</param>
        /// <param name="statesDelta">Returns made changes on states.</param>
        /// <returns>The resulting <see cref="Block{T}.StateRootHash"/>.</returns>
        /// <remarks>This can be used with only genesis blocks.  For blocks with indices greater
        /// than zero, use <see cref="DetermineStateRootHash(BlockChain{T})"/> overloaded one
        /// instead.</remarks>
        /// <exception cref="InvalidOperationException">Thrown when its
        /// <see cref="IBlockMetadata.Index"/> is not zero.</exception>
        public HashDigest<SHA256> DetermineStateRootHash(
            IAction? blockAction,
            IAction? updateValidatorSetAction,
            Predicate<Currency> nativeTokenPredicate,
            IStateStore stateStore,
            out IImmutableDictionary<string, IValue> statesDelta
        )
        {
            // FIXME: Extract the mutual logic with other overloaded methods into a smaller method.
            if (Index > 0)
            {
                throw new InvalidOperationException(
                    $"{nameof(DetermineStateRootHash)}({nameof(IAction)}?, {nameof(IStateStore)})" +
                    " method can be used with only genesis blocks; try other overloaded method" +
                    " instead."
                );
            }

            var actionEvaluator = new ActionEvaluator<T>(
                blockAction,
                updateValidatorSetAction,
                blockChainStates: NullChainStates<T>.Instance,
                trieGetter: null,
                genesisHash: null,
                nativeTokenPredicate: nativeTokenPredicate
            );
            IReadOnlyList<ActionEvaluation> actionEvaluations =
                actionEvaluator.Evaluate(this, StateCompleterSet<T>.Reject);
            statesDelta = actionEvaluations.GetTotalDelta(
                ToStateKey, ToFungibleAssetKey, ToTotalSupplyKey);
            ITrie trie = stateStore.Commit(stateStore.GetStateRoot(null).Hash, statesDelta);
            return trie.Hash;
        }

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and an optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>, and determines
        /// the <see cref="Block{T}.StateRootHash"/>.
        /// </summary>
        /// <param name="blockChain">The blockchain on which actions are evaluated based.</param>
        /// <returns>The resulting <see cref="Block{T}.StateRootHash"/>.</returns>
        public HashDigest<SHA256> DetermineStateRootHash(BlockChain<T> blockChain) =>
            DetermineStateRootHash(blockChain, StateCompleterSet<T>.Recalculate, out _);

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and an optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>, and determines
        /// the <see cref="Block{T}.StateRootHash"/>.
        /// </summary>
        /// <param name="blockChain">The blockchain on which actions are evaluated based.</param>
        /// <param name="stateCompleterSet">The <see cref="StateCompleterSet{T}"/> to use when
        /// it needs states unevaluated yet.</param>
        /// <param name="statesDelta">Returns made changes on states.</param>
        /// <returns>The resulting <see cref="Block{T}.StateRootHash"/>.</returns>
        public HashDigest<SHA256> DetermineStateRootHash(
            BlockChain<T> blockChain,
            StateCompleterSet<T> stateCompleterSet,
            out IImmutableDictionary<string, IValue> statesDelta
        ) =>
            CalculateStateRootHash(blockChain, stateCompleterSet, out statesDelta).StateRootHash;

        internal (Block<T> Block, IReadOnlyList<ActionEvaluation> ActionEvaluations)
        EvaluateActions(PrivateKey privateKey, BlockChain<T> blockChain)
        {
            // FIXME: Take narrower input instead of a whole BlockChain<T>.
            (HashDigest<SHA256> stateRootHash, IReadOnlyList<ActionEvaluation> evals) =
                CalculateStateRootHash(blockChain, StateCompleterSet<T>.Recalculate, out _);
            return (Sign(privateKey, stateRootHash), evals);
        }

        internal (
            HashDigest<SHA256> StateRootHash,
            IReadOnlyList<ActionEvaluation> ActionEvaluations
        ) CalculateStateRootHash(
            BlockChain<T> blockChain,
            StateCompleterSet<T> stateCompleterSet,
            out IImmutableDictionary<string, IValue> statesDelta
        )
        {
            // FIXME: Take narrower input instead of a whole BlockChain<T>.
            // FIXME: Add a dedicate unit test for this method.
            ILogger logger = Log.ForContext<PreEvaluationBlock<T>>();
            blockChain._rwlock.EnterUpgradeableReadLock();
            try
            {
                IReadOnlyList<ActionEvaluation> actionEvaluations =
                    blockChain.ActionEvaluator.Evaluate(this, stateCompleterSet);
                logger.Verbose(
                    "Start to calculate the total delta of states made in block #{BlockIndex}...",
                    Index
                );
                statesDelta = actionEvaluations.GetTotalDelta(
                    ToStateKey, ToFungibleAssetKey, ToTotalSupplyKey);
                logger.Verbose(
                    "Calculated the total delta of states made in block #{BlockIndex}.",
                    Index
                );
                blockChain._rwlock.EnterWriteLock();
                try
                {
                    logger.Verbose(
                        "Start to commit state changes made in block #{BlockIndex}...",
                        Index
                    );
                    ITrie trie = blockChain.StateStore.Commit(
                        blockChain.Store.GetStateRootHash(PreviousHash),
                        statesDelta
                    );
                    logger.Verbose(
                        "Committed the state changes made in block #{BlockIndex}: {StateRootHash}.",
                        Index,
                        trie.Hash
                    );
                    return (trie.Hash, actionEvaluations);
                }
                finally
                {
                    blockChain._rwlock.ExitWriteLock();
                }
            }
            finally
            {
                blockChain._rwlock.ExitUpgradeableReadLock();
            }
        }
    }
}
