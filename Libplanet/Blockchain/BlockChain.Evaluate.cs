#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <summary>
        /// Determines the state root hash of <paramref name="preEvaluationBlock"/>
        /// by evaluating on top of empty states.
        /// </summary>
        /// <param name="actionEvaluator">The <see cref="IActionEvaluator"/> to use to
        /// evaluate the proposed <see cref="Block"/>.</param>
        /// <param name="preEvaluationBlock">The <see cref="IPreEvaluationBlock"/> for which
        /// to determine the state root hash.</param>
        /// <param name="evaluations">The evaluation result from <see cref="EvaluateGenesis"/>
        /// for <paramref name="preEvaluationBlock"/>.</param>
        /// <returns>The state root hash calculated by committing <paramref name="evaluations"/> to
        /// an empty <see cref="IStateStore"/>.</returns>
        /// <remarks>
        /// This method computes the state root hash by committing <paramref name="evaluations"/>
        /// to an ephemeral empty <see cref="IStateStore"/>.
        /// </remarks>
        /// <seealso cref="EvaluateGenesis"/>
        [Pure]
        public static HashDigest<SHA256> DetermineGenesisStateRootHash(
            IActionEvaluator actionEvaluator,
            IPreEvaluationBlock preEvaluationBlock,
            out IReadOnlyList<IActionEvaluation> evaluations)
        {
            evaluations = EvaluateGenesis(actionEvaluator, preEvaluationBlock);
            IImmutableDictionary<KeyBytes, IValue> delta = evaluations.GetRawTotalDelta();
            IStateStore stateStore = new TrieStateStore(new DefaultKeyValueStore(null));
            ITrie trie = stateStore.Commit(
                stateStore.GetStateRoot((HashDigest<SHA256>?)null).Hash,
                delta);
            return trie.Hash;
        }

        /// <summary>
        /// Evaluates <paramref name="preEvaluationBlock"/> on top of empty states.
        /// </summary>
        /// <param name="actionEvaluator">The <see cref="IActionEvaluator"/> to use to
        /// evaluate the proposed <see cref="Block"/>.</param>
        /// <param name="preEvaluationBlock">The <see cref="IPreEvaluationBlock"/> to
        /// evaluate.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <see cref="IActionEvaluation"/>s
        /// resulting from evaluating <paramref name="preEvaluationBlock"/> using
        /// <paramref name="actionEvaluator"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if <paramref name="preEvaluationBlock"/>s
        /// <see cref="IBlockMetadata.Index"/> is not zero.</exception>
        [Pure]
        public static IReadOnlyList<IActionEvaluation> EvaluateGenesis(
            IActionEvaluator actionEvaluator,
            IPreEvaluationBlock preEvaluationBlock)
        {
            if (preEvaluationBlock.Index > 0)
            {
                throw new ArgumentException(
                    $"Given {preEvaluationBlock} must have index 0: {preEvaluationBlock.Index}",
                    nameof(preEvaluationBlock));
            }

            return actionEvaluator.Evaluate(preEvaluationBlock);
        }

        /// <summary>
        /// Determines the state root hash given <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to execute for
        /// state root hash.</param>
        /// <exception cref="InvalidActionException">Thrown when given <paramref name="block"/>
        /// contains an action that cannot be loaded with <see cref="IActionLoader"/>.</exception>
        /// <returns>The state root hash given <paramref name="block"/> and
        /// its state root hash.
        /// </returns>
        /// <remarks>
        /// Since the state root hash can only be calculated by making a commit
        /// to an <see cref="IStateStore"/>, this always has a side-effect to
        /// <see cref="StateStore"/> regardless of whether the state root hash
        /// obdatined through committing to <see cref="StateStore"/>
        /// matches the <paramref name="block"/>'s <see cref="Block.StateRootHash"/> or not.
        /// </remarks>
        /// <seealso cref="EvaluateBlock"/>
        /// <seealso cref="ValidateBlockStateRootHash"/>
        public HashDigest<SHA256> DetermineBlockStateRootHash(
            IPreEvaluationBlock block)
        {
            _rwlock.EnterWriteLock();
            try
            {
                Stopwatch stopwatch = new Stopwatch();
                stopwatch.Start();
                HashDigest<SHA256>? previousStateRootHash = Store
                    .GetStateRootHash(block.PreviousHash);
                return ActionEvaluator
                    .Evaluate(previousStateRootHash, block, out _);
            }
            finally
            {
                _rwlock.ExitWriteLock();
            }
        }

        /// <summary>
        /// Evaluates the <see cref="IAction"/>s in given <paramref name="block"/>.
        /// </summary>
        /// <param name="block">The <see cref="IPreEvaluationBlock"/> to execute.</param>
        /// <returns>An <see cref="IReadOnlyList{T}"/> of <ses cref="IActionEvaluation"/>s for
        /// given <paramref name="block"/>.</returns>
        /// <exception cref="InvalidActionException">Thrown when given <paramref name="block"/>
        /// contains an action that cannot be loaded with <see cref="IActionLoader"/>.</exception>
        /// <seealso cref="ValidateBlockStateRootHash"/>
        [Pure]
        public IReadOnlyList<IActionEvaluation> EvaluateBlock(IPreEvaluationBlock block) =>
            ActionEvaluator.Evaluate(block);

        /// <summary>
        /// Evaluates all actions in the <see cref="PreEvaluationBlock.Transactions"/> and
        /// an optional <see cref="Blockchain.Policies.IBlockPolicy.BlockAction"/>, and returns
        /// a <see cref="Block"/> instance combined with the <see cref="Block.StateRootHash"/>
        /// The returned <see cref="Block"/> is signed by the given <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="preEvaluationBlock">The <see cref="PreEvaluationBlock"/> to evaluate
        /// and sign.</param>
        /// <param name="privateKey">The private key to be used for signing the block.
        /// This must match to the block's <see cref="PreEvaluationBlockHeader.Miner"/> and
        /// <see cref="PreEvaluationBlockHeader.PublicKey"/>.</param>
        /// <returns>The block combined with the resulting <see cref="Block.StateRootHash"/>.
        /// It is signed by the given <paramref name="privateKey"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when the block's
        /// <see cref="PreEvaluationBlockHeader.ProtocolVersion"/> is less than 2.</exception>
        /// <exception cref="ArgumentException">Thrown when the given <paramref name="privateKey"/>
        /// does not match to the block miner's <see cref="PublicKey"/>.</exception>
        // FIXME: Remove this method.
        internal Block EvaluateAndSign(
            PreEvaluationBlock preEvaluationBlock, PrivateKey privateKey)
        =>
            preEvaluationBlock.ProtocolVersion >= 2
                ? preEvaluationBlock.Sign(
                    privateKey, DetermineBlockStateRootHash(preEvaluationBlock))
                : throw new ArgumentException(
                    $"Given {nameof(preEvaluationBlock)} must have protocol version " +
                    $"2 or greater: {preEvaluationBlock.ProtocolVersion}");
    }
}
