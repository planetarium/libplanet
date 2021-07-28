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
        // we need to add a synchronization mechanism to handle this correctly.
        internal void Swap(
            BlockChain<T> other,
            bool render,
            StateCompleterSet<T>? stateCompleters = null)
        {
            if (other is null)
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
                    "to {NewChainId} (#{NewTipIndex} {NewTipHash}).",
                    Id,
                    Tip.Index,
                    Tip.Hash,
                    other.Id,
                    other.Tip.Index,
                    other.Tip.Hash);
            }

            // Finds the branch point.
            Block<T> topCommon = FindTopCommon(this, other);

            if (topCommon is null)
            {
                const string msg =
                    "A chain cannot be reorged into a heterogeneous chain with a " +
                    "different genesis.";
                throw new InvalidGenesisBlockException(Genesis.Hash, other.Genesis.Hash, msg);
            }

            _logger.Debug(
                "The branchpoint is #{BranchpointIndex} {BranchpointHash}.",
                topCommon.Index,
                topCommon
            );

            _rwlock.EnterUpgradeableReadLock();
            try
            {
                Block<T> oldTip = Tip ?? Genesis, newTip = other.Tip ?? other.Genesis;

                ImmutableList<Block<T>> rewindPath =
                    GetRewindPath(this, topCommon.Hash);
                ImmutableList<Block<T>> fastForwardPath =
                    GetFastForwardPath(other, topCommon.Hash);

                // Fast forwarding is not considered a reorg.
                bool fastForward = rewindPath.Count == 0;

                if (render && !fastForward)
                {
                    foreach (IRenderer<T> renderer in Renderers)
                    {
                        renderer.RenderReorg(Tip, other.Tip, branchpoint: topCommon);
                    }
                }

                if (render && ActionRenderers.Any())
                {
                    // Unrender stale actions.
                    _logger.Debug("Unrendering abandoned actions...");

                    long count = 0;

                    foreach (Block<T> block in rewindPath)
                    {
                        ImmutableList<ActionEvaluation> evaluations =
                            ActionEvaluator.Evaluate(block, completers)
                                .ToImmutableList().Reverse();

                        count += UnrenderActions(
                            evaluations: evaluations,
                            block: block);
                    }

                    _logger.Debug(
                        $"{nameof(Swap)}() completed unrendering {{Actions}} actions.",
                        count);
                }

                _rwlock.EnterWriteLock();
                try
                {
                    IEnumerable<Transaction<T>>
                        GetTxsWithRange(BlockChain<T> chain, Block<T> start, Block<T> end)
                        => Enumerable
                            .Range((int)start.Index + 1, (int)(end.Index - start.Index))
                            .SelectMany(x => chain[x].Transactions);

                    // It assumes reorg is small size. If it was big, this may be heavy task.
                    ImmutableHashSet<Transaction<T>> unstagedTxs =
                        GetTxsWithRange(this, topCommon, Tip).ToImmutableHashSet();
                    ImmutableHashSet<Transaction<T>> stageTxs =
                        GetTxsWithRange(other, topCommon, other.Tip).ToImmutableHashSet();
                    ImmutableHashSet<Transaction<T>> restageTxs = unstagedTxs.Except(stageTxs);
                    foreach (Transaction<T> restageTx in restageTxs)
                    {
                        StagePolicy.Stage(this, restageTx);
                    }

                    Guid obsoleteId = Id;
                    Id = other.Id;
                    Store.SetCanonicalChainId(Id);
                    _blocks = new BlockSet<T>(Policy.GetHashAlgorithm, Store);
                    TipChanged?.Invoke(this, (oldTip, newTip));

                    if (render)
                    {
                        foreach (IRenderer<T> renderer in Renderers)
                        {
                            renderer.RenderBlock(oldTip: oldTip, newTip: newTip);
                        }
                    }

                    Store.DeleteChainId(obsoleteId);
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }

                if (render && ActionRenderers.Any())
                {
                    _logger.Debug("Rendering actions in new chain.");

                    long count = 0;
                    foreach (Block<T> block in fastForwardPath)
                    {
                        ImmutableList<ActionEvaluation> evaluations =
                            ActionEvaluator.Evaluate(block, completers).ToImmutableList();

                        count += RenderActions(
                            evaluations: evaluations,
                            block: block);
                    }

                    _logger.Debug(
                        $"{nameof(Swap)}() completed rendering {{Count}} actions.",
                        count);

                    foreach (IActionRenderer<T> renderer in ActionRenderers)
                    {
                        renderer.RenderBlockEnd(oldTip, newTip);
                    }
                }

                if (render && !fastForward)
                {
                    foreach (IRenderer<T> renderer in Renderers)
                    {
                        renderer.RenderReorgEnd(oldTip, newTip, topCommon);
                    }
                }
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }
        }

        internal void RenderSwap(
            bool render,
            Block<T> oldTip,
            Block<T> newTip,
            Block<T> branchpoint,
            IReadOnlyList<Block<T>> rewindPath,
            IReadOnlyList<Block<T>> fastForwardPath,
            StateCompleterSet<T>? stateCompleters = null)
        {
            // As render/unrender processing requires every step's states from the branchpoint
            // to the new/stale tip, incomplete states need to be complemented anyway...
            StateCompleterSet<T> completers = stateCompleters ?? StateCompleterSet<T>.Recalculate;

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

            if (render && ActionRenderers.Any())
            {
                // Unrender stale actions.
                _logger.Debug("Unrendering abandoned actions...");

                long count = 0;

                foreach (Block<T> block in rewindPath)
                {
                    ImmutableList<ActionEvaluation> evaluations =
                        ActionEvaluator.Evaluate(block, completers)
                            .ToImmutableList().Reverse();

                    count += UnrenderActions(
                        evaluations: evaluations,
                        block: block);
                }

                _logger.Debug(
                    $"{nameof(Swap)}() completed unrendering {{Actions}} actions.",
                    count);
            }

            if (render && ActionRenderers.Any())
            {
                _logger.Debug("Rendering actions in new chain.");

                long count = 0;
                foreach (Block<T> block in fastForwardPath)
                {
                    ImmutableList<ActionEvaluation> evaluations =
                        ActionEvaluator.Evaluate(block, completers).ToImmutableList();

                    count += RenderActions(
                        evaluations: evaluations,
                        block: block);
                }

                _logger.Debug(
                    $"{nameof(Swap)}() completed rendering {{Count}} actions.",
                    count);

                foreach (IActionRenderer<T> renderer in ActionRenderers)
                {
                    renderer.RenderBlockEnd(oldTip, newTip);
                }
            }

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

        /// <summary>
        /// Render actions of the given <paramref name="block"/>.
        /// </summary>
        /// <param name="evaluations"><see cref="ActionEvaluation"/>s of the block.  If it is
        /// <c>null</c>, evaluate actions of the <paramref name="block"/> again.</param>
        /// <param name="block"><see cref="Block{T}"/> to render actions.</param>
        /// <param name="stateCompleters">The strategy to complement incomplete block states.
        /// <see cref="StateCompleterSet{T}.Recalculate"/> by default.</param>
        /// <returns>The number of actions rendered.</returns>
        internal long RenderActions(
            IReadOnlyList<ActionEvaluation> evaluations,
            Block<T> block,
            StateCompleterSet<T>? stateCompleters = null)
        {
            _logger.Debug("Render actions in block {blockIndex}: {block}", block?.Index, block);

            // Since rendering process requires every step's states, if required block states
            // are incomplete they are complemented anyway:
            stateCompleters ??= StateCompleterSet<T>.Recalculate;

            if (evaluations is null)
            {
                evaluations = ActionEvaluator.Evaluate(block, stateCompleters.Value);
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

            return count;
        }

        internal long UnrenderActions(
            IReadOnlyList<ActionEvaluation> evaluations,
            Block<T> block,
            StateCompleterSet<T>? stateCompleters = null)
        {
            _logger.Debug("Unender actions in block {blockIndex}: {block}", block?.Index, block);

            // Since rendering process requires every step's states, if required block states
            // are incomplete they are complemented anyway:
            stateCompleters ??= StateCompleterSet<T>.Recalculate;

            if (evaluations is null)
            {
                evaluations =
                    ActionEvaluator.Evaluate(block, stateCompleters.Value)
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
        /// Generates a list of <see cref="Block{T}"/>s to traverse starting from
        /// the tip of <paramref name="chain"/> to reach <paramref name="targetHash"/>.
        /// </summary>
        /// <param name="chain">The <see cref="BlockChain{T}"/> to traverse.</param>
        /// <param name="targetHash">The target <see cref="BlockHash"/> to reach.</param>
        /// <returns>
        /// An <see cref="ImmutableList"/> of <see cref="Block{T}"/>s to traverse from
        /// the tip of <paramref name="chain"/> to reach <paramref name="targetHash"/> excluding
        /// the <see cref="Block{T}"/> with <paramref name="targetHash"/> as its hash.
        /// </returns>
        /// <remarks>
        /// <para>
        /// This is a reverse of <see cref="GetFastForwardPath"/>.
        /// </para>
        /// <para>
        /// As the genesis is always fixed, returned results never include the genesis.
        /// </para>
        /// </remarks>
        private static ImmutableList<Block<T>> GetRewindPath(
            BlockChain<T> chain,
            BlockHash targetHash)
        {
            if (!chain.ContainsBlock(targetHash))
            {
                throw new KeyNotFoundException(
                    $"Given chain {chain.Id} must contain target hash {targetHash}");
            }

            Block<T> target = chain[targetHash];
            List<Block<T>> path = new List<Block<T>>();

            for (
                Block<T> current = chain.Tip;
                current.Index > target.Index && current.PreviousHash is { } ph;
                current = chain[ph])
            {
                path.Add(current);
            }

            return path.ToImmutableList();
        }

        /// <summary>
        /// Generates a list of <see cref="Block{T}"/>s to traverse starting from
        /// <paramref name="originHash"/> to reach the tip of <paramref name="chain"/>.
        /// </summary>
        /// <param name="chain">The <see cref="BlockChain{T}"/> to traverse.</param>
        /// <param name="originHash">The <see cref="BlockHash"/> to start from.</param>
        /// <returns>
        /// An <see cref="ImmutableList"/> of <see cref="Block{T}"/>s to traverse
        /// to reach the tip of <paramref name="chain"/> from <paramref name="originHash"/>
        /// excluding the <see cref="Block{T}"/> with <paramref name="originHash"/> as its hash.
        /// </returns>
        /// <remarks>
        /// This is a reverse of <see cref="GetRewindPath"/>.
        /// </remarks>
        private static ImmutableList<Block<T>> GetFastForwardPath(
            BlockChain<T> chain,
            BlockHash originHash)
        {
            if (!chain.ContainsBlock(originHash))
            {
                throw new KeyNotFoundException(
                    $"Given chain {chain.Id} must contain origin hash {originHash}");
            }

            return GetRewindPath(chain, originHash).Reverse();
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
        /// returns <c>null</c> instead.
        /// </returns>
        private static Block<T> FindTopCommon(BlockChain<T> c1, BlockChain<T> c2)
        {
            if (!(c1.Tip is null))
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
            }

            return null;
        }
    }
}
