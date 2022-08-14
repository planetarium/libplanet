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
    /// <remarks>It guarantees that every instance of this type has a valid proof-of-work
    /// <see cref="Nonce"/> which satisfies its <see cref="PreEvaluationBlockHeader.Difficulty"/>.
    /// </remarks>
    public sealed class PreEvaluationBlock<T> : PreEvaluationBlockHeader, IPreEvaluationBlock<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data and a valid proof-of-work <paramref name="nonce"/>
        /// which satisfies the required <see cref="PreEvaluationBlockHeader.Difficulty"/>.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="content"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        ///  is negative.</exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="content"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given block
        /// <paramref name="content"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <see cref="IBlockContent{T}.Transactions"/>.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.
        /// </exception>
        /// <remarks><see cref="PreEvaluationBlockHeader.PreEvaluationHash"/> is automatically
        /// derived from the given arguments.</remarks>
        public PreEvaluationBlock(
            IBlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        )
            : base(
                new BlockContent<T>(content),
                hashAlgorithm,
                nonce
            )
        {
        }

        /// <summary>
        /// Creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, a valid proof-of-work <paramref name="nonce"/>
        /// which satisfies the required <see cref="PreEvaluationBlockHeader.Difficulty"/>,
        /// and a <paramref name="preEvaluationHash"/> digest derived from them.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="nonce">A valid proof-of-work nonce which satisfies the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.</param>
        /// <param name="preEvaluationHash">The hash digest of the <paramref name="hashAlgorithm"/>
        /// derived from the given arguments.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="content"/>'s <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        ///  is negative.</exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="content"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given block
        /// <paramref name="content"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <see cref="IBlockContent{T}.Transactions"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="preEvaluationHash"/> is invalid.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given proof-of-work
        /// <paramref name="nonce"/> does not satisfy the required
        /// <see cref="PreEvaluationBlockHeader.Difficulty"/>.</exception>
        public PreEvaluationBlock(
            IBlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            Nonce nonce,
            ImmutableArray<byte> preEvaluationHash
        )
            : base(new BlockContent<T>(content), hashAlgorithm, nonce, preEvaluationHash)
        {
        }

        /// <summary>
        /// Unsafely creates a <see cref="PreEvaluationBlock{T}"/> instance with its
        /// <paramref name="content"/> data, and a <paramref name="proof"/> which is probably
        /// considered as to be valid.
        /// </summary>
        /// <param name="content">Block's content data.</param>
        /// <param name="hashAlgorithm">The hash algorithm used for calculating
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="proof">A pair of the valid proof-of-work nonce which is probably considered
        /// as to satisfy the required <see cref="PreEvaluationBlockHeader.Difficulty"/>,
        /// and the hash digest which is probably considered as to be derived from
        /// the block <paramref name="content"/> and the nonce.</param>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given proof's
        /// hash is invalid.</exception>
        /// <remarks>This does not verify if if a proof's hash is derived from the block
        /// <paramref name="content"/> and the proof nonce.  Therefore, this unsafe constructor
        /// shouldn't be used except for <see
        /// cref="BlockContent{T}.Mine(HashAlgorithmType, CancellationToken)"/> method.</remarks>
        internal PreEvaluationBlock(
            BlockContent<T> content,
            HashAlgorithmType hashAlgorithm,
            in (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) proof
        )
            : base(content, hashAlgorithm, proof)
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
            Predicate<Currency> nativeTokenPredicate,
            IStateStore stateStore
        ) =>
            Sign(privateKey, DetermineStateRootHash(blockAction, nativeTokenPredicate, stateStore));

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
            Predicate<Currency> nativeTokenPredicate,
            IStateStore stateStore
        )
            => DetermineStateRootHash(blockAction, nativeTokenPredicate, stateStore, out _);

        /// <summary>
        /// Evaluates all actions in the <see cref="Transactions"/> and
        /// a <paramref name="blockAction"/> (if any), and determines
        /// the <see cref="Block{T}.StateRootHash"/> from ground zero (i.e., empty state root).
        /// </summary>
        /// <param name="blockAction">An optional
        /// <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/>.</param>
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
                blockChainStates: NullChainStates<T>.Instance,
                trieGetter: null,
                genesisHash: null,
                nativeTokenPredicate: nativeTokenPredicate
            );
            IReadOnlyList<ActionEvaluation> actionEvaluations =
                actionEvaluator.Evaluate(this, StateCompleterSet<T>.Reject);
            statesDelta = actionEvaluations.GetTotalDelta(ToStateKey, ToFungibleAssetKey);
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
                statesDelta = actionEvaluations.GetTotalDelta(ToStateKey, ToFungibleAssetKey);
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
