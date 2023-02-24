#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        // FIXME it's very dangerous because replacing Id means
        // ALL blocks (referenced by MineBlock(), etc.) will be changed.
        internal System.Action Swap(
            BlockChain<T> other,
            bool render,
            StateCompleterSet<T>? stateCompleters = null)
        {
            if (!IsCanonical)
            {
                throw new InvalidOperationException(
                    $"Cannot perform {nameof(Swap)} on a non canonical chain.");
            }
            else if (other is null)
            {
                throw new ArgumentNullException(nameof(other));
            }

            // As render/unrender processing requires every step's states from the branchpoint
            // to the new/stale tip, incomplete states need to be complemented anyway...
            StateCompleterSet<T> completers = stateCompleters ?? StateCompleterSet<T>.Recalculate;

            if (Tip.Equals(other.Tip))
            {
                // If it's swapped for a chain with the same tip, it means there is no state change.
                // Hence render is unnecessary.
                render = false;
            }
            else
            {
                _logger.Debug(
                    "The blockchain was reorged from " +
                    "{OldChainId} (#{OldTipIndex} {OldTipHash}) " +
                    "to {NewChainId} (#{NewTipIndex} {NewTipHash})",
                    Id,
                    Tip.Index,
                    Tip.Hash,
                    other.Id,
                    other.Tip.Index,
                    other.Tip.Hash);
            }

            System.Action renderSwap = () => { };

            _rwlock.EnterUpgradeableReadLock();
            try
            {
                // Finds the branch point.
                Block<T> branchpoint = FindTopCommon(this, other);

                if (branchpoint is null)
                {
                    const string msg =
                        "A chain cannot be reorged into a heterogeneous chain with a " +
                        "different genesis.";
                    throw new InvalidGenesisBlockException(msg, Genesis.Hash, other.Genesis.Hash);
                }

                _logger.Debug(
                    "The branchpoint is #{BranchpointIndex} {BranchpointHash}",
                    branchpoint.Index,
                    branchpoint
                );

                Block<T> oldTip = Tip, newTip = other.Tip;

                IReadOnlyList<BlockHash> rewindPath =
                    GetRewindPath(this, branchpoint.Hash);
                IReadOnlyList<BlockHash> fastForwardPath =
                    GetFastForwardPath(other, branchpoint.Hash);

                // If there is no rewind, it is not considered as a reorg.
                bool reorg = rewindPath.Count > 0;

                _rwlock.EnterWriteLock();
                try
                {
                    HashSet<TxId> GetTxIdsWithRange(
                        BlockChain<T> chain, IReadOnlyList<BlockHash> hashes) =>
                            new HashSet<TxId>(hashes.SelectMany(
                                hash => chain[hash].Transactions.Select(tx => tx.Id)));

                    // It assumes reorg is small size.  If it is big, this may be heavy task.
                    HashSet<TxId> txIdsToStage = GetTxIdsWithRange(this, rewindPath);
                    HashSet<TxId> txIdsToUnstage = GetTxIdsWithRange(other, fastForwardPath);
                    foreach (TxId txId in txIdsToStage)
                    {
                        StagePolicy.Stage(this, Store.GetTransaction<T>(txId));
                    }

                    Store.SetCanonicalChainId(other.Id);
                    Guid obsoleteId = Id;
                    Id = other.Id;

                    _blocks = new BlockSet<T>(Store);
                    foreach (TxId txId in txIdsToUnstage)
                    {
                        StagePolicy.Unstage(this, txId);
                    }

                    TipChanged?.Invoke(this, (oldTip, newTip));

                    Store.DeleteChainId(obsoleteId);
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }

                renderSwap = () => RenderSwap(
                    render: render,
                    oldTip: oldTip,
                    newTip: newTip,
                    branchpoint: branchpoint,
                    rewindPath: rewindPath,
                    fastForwardPath: fastForwardPath,
                    stateCompleters: completers);
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }

            return renderSwap;
        }

        internal void RenderSwap(
            bool render,
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint,
            IReadOnlyList<BlockHash> rewindPath,
            IReadOnlyList<BlockHash> fastForwardPath,
            StateCompleterSet<T> stateCompleters)
        {
            // If there is no rewind, it is not considered as a reorg.
            bool reorg = rewindPath.Count > 0;

            if (render && reorg)
            {
                foreach (IRenderer<T> renderer in Renderers)
                {
                    renderer.RenderReorg(
                        oldTip: oldTip,
                        newTip: newTip,
                        branchpoint: branchpoint);
                }
            }

            RenderRewind(
                render: render,
                oldTip: oldTip,
                newTip: newTip,
                branchpoint: branchpoint,
                rewindPath: rewindPath,
                stateCompleters: stateCompleters);

            if (render)
            {
                foreach (IRenderer<T> renderer in Renderers)
                {
                    renderer.RenderBlock(
                        oldTip: oldTip,
                        newTip: newTip);
                }
            }

            RenderFastForward(
                render: render,
                oldTip: oldTip,
                newTip: newTip,
                branchpoint: branchpoint,
                fastForwardPath: fastForwardPath,
                stateCompleters: stateCompleters);

            if (render && reorg)
            {
                foreach (IRenderer<T> renderer in Renderers)
                {
                    renderer.RenderReorgEnd(
                        oldTip: oldTip,
                        newTip: newTip,
                        branchpoint: branchpoint);
                }
            }
        }

        internal void RenderRewind(
            bool render,
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint,
            IReadOnlyList<BlockHash> rewindPath,
            StateCompleterSet<T> stateCompleters)
        {
            if (render && ActionRenderers.Any())
            {
                // Unrender stale actions.
                _logger.Debug("Unrendering abandoned actions...");

                long count = 0;

                foreach (BlockHash hash in rewindPath)
                {
                    Block<T> block = Store.GetBlock<T>(hash);
                    ImmutableList<ActionEvaluation> evaluations =
                        ActionEvaluator.Evaluate(block, stateCompleters)
                            .ToImmutableList().Reverse();

                    count += UnrenderActions(
                        evaluations: evaluations,
                        block: block,
                        stateCompleters: stateCompleters);
                }

                _logger.Debug(
                    "{MethodName}() completed unrendering {Actions} actions",
                    nameof(Swap),
                    count);
            }
        }

        internal void RenderFastForward(
            bool render,
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint,
            IReadOnlyList<BlockHash> fastForwardPath,
            StateCompleterSet<T> stateCompleters)
        {
            if (render && ActionRenderers.Any())
            {
                _logger.Debug("Rendering actions in new chain");

                long count = 0;
                foreach (BlockHash hash in fastForwardPath)
                {
                    Block<T> block = Store.GetBlock<T>(hash);
                    ImmutableList<ActionEvaluation> evaluations =
                        ActionEvaluator.Evaluate(block, stateCompleters).ToImmutableList();

                    count += RenderActions(
                        evaluations: evaluations,
                        block: block,
                        stateCompleters: stateCompleters);
                }

                _logger.Debug(
                    "{MethodName}() completed rendering {Count} actions",
                    nameof(Swap),
                    count);

                foreach (IActionRenderer<T> renderer in ActionRenderers)
                {
                    renderer.RenderBlockEnd(oldTip, newTip);
                }
            }
        }

        /// <summary>
        /// Render actions of the given <paramref name="block"/>.
        /// </summary>
        /// <param name="evaluations"><see cref="ActionEvaluation"/>s of the block.  If it is
        /// <see langword="null"/>, evaluate actions of the <paramref name="block"/> again.</param>
        /// <param name="block"><see cref="Block{T}"/> to render actions.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete block states.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.</param>
        /// <returns>The number of actions rendered.</returns>
        internal long RenderActions(
            IReadOnlyList<ActionEvaluation> evaluations,
            Block<T> block,
            StateCompleterSet<T> stateCompleters)
        {
            DateTimeOffset startTime = DateTimeOffset.UtcNow;
            _logger.Debug(
                "Rendering actions in block #{BlockIndex} {BlockHash}...",
                block.Index,
                block.Hash);

            if (evaluations is null)
            {
                evaluations = ActionEvaluator.Evaluate(block, stateCompleters);
            }

            long count = 0;
            foreach (var evaluation in evaluations)
            {
                foreach (IActionRenderer<T> renderer in ActionRenderers)
                {
                    if (evaluation.Exception is null)
                    {
                        renderer.RenderAction(
                            evaluation.Action,
                            evaluation.InputContext.GetUnconsumedContext(),
                            evaluation.OutputStates);
                    }
                    else
                    {
                        renderer.RenderActionError(
                            evaluation.Action,
                            evaluation.InputContext.GetUnconsumedContext(),
                            evaluation.Exception);
                    }

                    count++;
                }
            }

            TimeSpan renderDuration = DateTimeOffset.Now - startTime;
            _logger
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "BlockRenderDuration")
                .Debug(
                    "Finished rendering {RenderCount} renders for actions in " +
                    "block #{BlockIndex} {BlockHash} in {DurationMs:F0}ms",
                    count,
                    block.Index,
                    block.Hash,
                    renderDuration.TotalMilliseconds);
            return count;
        }

        internal long UnrenderActions(
            IReadOnlyList<ActionEvaluation> evaluations,
            Block<T> block,
            StateCompleterSet<T> stateCompleters)
        {
            _logger.Debug(
                "Unrender actions in block #{BlockIndex} {BlockHash}", block?.Index, block?.Hash);

            if (evaluations is null)
            {
                evaluations =
                    ActionEvaluator.Evaluate(block, stateCompleters)
                        .Reverse().ToImmutableList();
            }

            long count = 0;
            foreach (ActionEvaluation evaluation in evaluations)
            {
                foreach (IActionRenderer<T> renderer in ActionRenderers)
                {
                    if (evaluation.Exception is null)
                    {
                        renderer.UnrenderAction(
                            evaluation.Action,
                            evaluation.InputContext.GetUnconsumedContext(),
                            evaluation.OutputStates);
                    }
                    else
                    {
                        renderer.UnrenderActionError(
                            evaluation.Action,
                            evaluation.InputContext.GetUnconsumedContext(),
                            evaluation.Exception);
                    }
                }

                count++;
            }

            return count;
        }

        /// <summary>
        /// Generates a list of <see cref="BlockHash"/>es to traverse starting from
        /// the tip of <paramref name="chain"/> to reach <paramref name="targetHash"/>.
        /// </summary>
        /// <param name="chain">The <see cref="BlockChain{T}"/> to traverse.</param>
        /// <param name="targetHash">The target <see cref="BlockHash"/> to reach.</param>
        /// <returns>
        /// An <see cref="IReadOnlyList{T}"/> of <see cref="BlockHash"/>es to traverse from
        /// the tip of <paramref name="chain"/> to reach <paramref name="targetHash"/> excluding
        /// <paramref name="targetHash"/>.
        /// </returns>
        /// <remarks>
        /// <para>
        /// This is a reverse of <see cref="GetFastForwardPath"/>.
        /// </para>
        /// <para>
        /// As the genesis is always fixed, returned results never include the genesis.
        /// </para>
        /// </remarks>
        private static IReadOnlyList<BlockHash> GetRewindPath(
            BlockChain<T> chain,
            BlockHash targetHash)
        {
            if (!chain.ContainsBlock(targetHash))
            {
                throw new KeyNotFoundException(
                    $"Given chain {chain.Id} must contain target hash {targetHash}");
            }

            long target = chain[targetHash].Index;
            List<BlockHash> path = new List<BlockHash>();
            for (long idx = chain.Tip.Index; idx > target; idx--)
            {
                path.Add(chain.Store.IndexBlockHash(chain.Id, idx) ??
                    throw new NullReferenceException(
                        $"Chain {chain.Id} is missing block #{idx}"));
            }

            return path;
        }

        /// <summary>
        /// Generates a list of <see cref="BlockHash"/>es to traverse starting from
        /// <paramref name="originHash"/> to reach the tip of <paramref name="chain"/>.
        /// </summary>
        /// <param name="chain">The <see cref="BlockChain{T}"/> to traverse.</param>
        /// <param name="originHash">The <see cref="BlockHash"/> to start from.</param>
        /// <returns>
        /// An <see cref="IReadOnlyList{T}"/> of <see cref="BlockHash"/>es to traverse
        /// to reach the tip of <paramref name="chain"/> from <paramref name="originHash"/>
        /// excluding <paramref name="originHash"/>.
        /// </returns>
        /// <remarks>
        /// This is a reverse of <see cref="GetRewindPath"/>.
        /// </remarks>
        private static IReadOnlyList<BlockHash> GetFastForwardPath(
            BlockChain<T> chain,
            BlockHash originHash)
        {
            if (!chain.ContainsBlock(originHash))
            {
                throw new KeyNotFoundException(
                    $"Given chain {chain.Id} must contain origin hash {originHash}");
            }

            return GetRewindPath(chain, originHash).Reverse().ToList();
        }

        /// <summary>
        /// Finds the top most common <see cref="Block{T}"/> between chains <paramref name="c1"/>
        /// and <paramref name="c2"/>.
        /// </summary>
        /// <param name="c1">The first <see cref="BlockChain{T}"/> to compare.</param>
        /// <param name="c2">The second <see cref="BlockChain{T}"/> to compare.</param>
        /// <returns>
        /// The top most common <see cref="Block{T}"/> between chains <paramref name="c1"/>
        /// and <paramref name="c2"/>. If there is no such <see cref="Block{T}"/>,
        /// returns <see langword="null"/> instead.
        /// </returns>
        private static Block<T> FindTopCommon(BlockChain<T> c1, BlockChain<T> c2)
        {
            long shorterHeight = Math.Min(c1.Count, c2.Count) - 1;
            Block<T> b1 = c1[shorterHeight], b2 = c2[shorterHeight];

            while (true)
            {
                if (b1.Equals(b2))
                {
                    return b1;
                }

                if (b1.PreviousHash is { } b1ph && b2.PreviousHash is { } b2ph)
                {
                    b1 = c1[b1ph];
                    b2 = c2[b2ph];
                }
                else
                {
                    break;
                }
            }

            return null;
        }
    }
}
