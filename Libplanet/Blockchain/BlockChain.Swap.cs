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
            StateCompleterSet<T>? stateCompleters = null
        )
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
                bool reorged = !Tip.Equals(topCommon);
                if (render && reorged)
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
                    int cnt = 0;

                    for (
                        Block<T> b = Tip;
                        !(b is null) && b.Index > (topCommon?.Index ?? -1) &&
                        b.PreviousHash is { } ph;
                        b = this[ph]
                    )
                    {
                        List<ActionEvaluation> evaluations =
                            ActionEvaluator.Evaluate(b, completers).ToList();
                        evaluations.Reverse();

                        foreach (var evaluation in evaluations)
                        {
                            _logger.Debug("Unrender an action: {Action}.", evaluation.Action);
                            if (evaluation.Exception is null)
                            {
                                foreach (IActionRenderer<T> renderer in ActionRenderers)
                                {
                                    renderer.UnrenderAction(
                                        evaluation.Action,
                                        evaluation.InputContext.GetUnconsumedContext(),
                                        evaluation.OutputStates
                                    );
                                }
                            }
                            else
                            {
                                foreach (IActionRenderer<T> renderer in ActionRenderers)
                                {
                                    renderer.UnrenderActionError(
                                        evaluation.Action,
                                        evaluation.InputContext.GetUnconsumedContext(),
                                        evaluation.Exception
                                    );
                                }
                            }

                            cnt++;
                        }
                    }

                    _logger.Debug(
                        $"{nameof(Swap)}() completed unrendering {{Actions}} actions.",
                        cnt);
                }

                Block<T> oldTip = Tip ?? Genesis, newTip = other.Tip ?? other.Genesis;

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

                    // Render actions that had been behind.
                    long startToRenderIndex = topCommon is Block<T> branchpoint
                        ? branchpoint.Index + 1
                        : 0;

                    foreach (IActionRenderer<T> renderer in ActionRenderers)
                    {
                        int cnt = RenderActionsInBlocks(startToRenderIndex, renderer, completers);
                        _logger.Debug(
                            $"{nameof(Swap)}() completed rendering {{Count}} actions.",
                            cnt);

                        renderer.RenderBlockEnd(oldTip, newTip);
                    }
                }

                if (render && reorged)
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
