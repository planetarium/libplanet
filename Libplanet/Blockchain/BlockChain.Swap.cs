#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Common.Types.Blocks;
using Libplanet.Common.Types.Tx;
using Libplanet.Store;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        // FIXME it's very dangerous because replacing Id means
        // ALL blocks (referenced by MineBlock(), etc.) will be changed.
        internal System.Action Swap(
            BlockChain other,
            bool render)
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
                Block branchpoint = FindTopCommon(this, other);

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

                Block oldTip = Tip, newTip = other.Tip;

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
                        BlockChain chain, IReadOnlyList<BlockHash> hashes) =>
                            new HashSet<TxId>(hashes.SelectMany(
                                hash => chain[hash].Transactions.Select(tx => tx.Id)));

                    // It assumes reorg is small size.  If it is big, this may be heavy task.
                    HashSet<TxId> txIdsToStage = GetTxIdsWithRange(this, rewindPath);
                    HashSet<TxId> txIdsToUnstage = GetTxIdsWithRange(other, fastForwardPath);
                    foreach (TxId txId in txIdsToStage)
                    {
                        StagePolicy.Stage(this, Store.GetTransaction(txId));
                    }

                    Store.SetCanonicalChainId(other.Id);
                    Guid obsoleteId = Id;
                    Id = other.Id;

                    _blocks = new BlockSet(Store);
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
                    fastForwardPath: fastForwardPath);
            }
            finally
            {
                _rwlock.ExitUpgradeableReadLock();
            }

            return renderSwap;
        }

        internal void RenderSwap(
            bool render,
            Block oldTip,
            Block newTip,
            Block branchpoint,
            IReadOnlyList<BlockHash> rewindPath,
            IReadOnlyList<BlockHash> fastForwardPath)
        {
            if (render)
            {
                foreach (IRenderer renderer in Renderers)
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
                fastForwardPath: fastForwardPath);
        }

        internal void RenderFastForward(
            bool render,
            Block oldTip,
            Block newTip,
            Block branchpoint,
            IReadOnlyList<BlockHash> fastForwardPath)
        {
            if (render && ActionRenderers.Any())
            {
                _logger.Debug("Rendering actions in new chain");

                long count = 0;
                foreach (BlockHash hash in fastForwardPath)
                {
                    Block block = Store.GetBlock(hash);
                    ImmutableList<IActionEvaluation> evaluations =
                        ActionEvaluator.Evaluate(block).ToImmutableList();

                    count += RenderActions(
                        evaluations: evaluations,
                        block: block
                    );
                }

                _logger.Debug(
                    "{MethodName}() completed rendering {Count} actions",
                    nameof(Swap),
                    count);

                foreach (IActionRenderer renderer in ActionRenderers)
                {
                    renderer.RenderBlockEnd(oldTip, newTip);
                }
            }
        }

        /// <summary>
        /// Render actions of the given <paramref name="block"/>.
        /// </summary>
        /// <param name="evaluations"><see cref="IActionEvaluation"/>s of the block.  If it is
        /// <see langword="null"/>, evaluate actions of the <paramref name="block"/> again.</param>
        /// <param name="block"><see cref="Block"/> to render actions.</param>
        /// <returns>The number of actions rendered.</returns>
        internal long RenderActions(
            IReadOnlyList<IActionEvaluation> evaluations,
            Block block)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            _logger.Debug(
                "Rendering actions in block #{BlockIndex} {BlockHash}...",
                block.Index,
                block.Hash);

            if (evaluations is null)
            {
                evaluations = ActionEvaluator.Evaluate(block);
            }

            long count = 0;
            foreach (var evaluation in evaluations)
            {
                if (evaluation.InputContext.BlockAction && Policy.BlockAction is null)
                {
                    continue;
                }

                foreach (IActionRenderer renderer in ActionRenderers)
                {
                    if (evaluation.Exception is null)
                    {
                        renderer.RenderAction(
                            evaluation.Action,
                            evaluation.InputContext.GetUnconsumedContext(),
                            evaluation.OutputState);
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

            _logger
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "BlockRenderDuration")
                .Debug(
                    "Finished rendering {RenderCount} renders for actions in " +
                    "block #{BlockIndex} {BlockHash} in {DurationMs} ms",
                    count,
                    block.Index,
                    block.Hash,
                    stopwatch.ElapsedMilliseconds);
            return count;
        }

        /// <summary>
        /// Generates a list of <see cref="BlockHash"/>es to traverse starting from
        /// the tip of <paramref name="chain"/> to reach <paramref name="targetHash"/>.
        /// </summary>
        /// <param name="chain">The <see cref="BlockChain"/> to traverse.</param>
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
            BlockChain chain,
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
        /// <param name="chain">The <see cref="BlockChain"/> to traverse.</param>
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
            BlockChain chain,
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
        /// Finds the top most common <see cref="Block"/> between chains <paramref name="c1"/>
        /// and <paramref name="c2"/>.
        /// </summary>
        /// <param name="c1">The first <see cref="BlockChain"/> to compare.</param>
        /// <param name="c2">The second <see cref="BlockChain"/> to compare.</param>
        /// <returns>
        /// The top most common <see cref="Block"/> between chains <paramref name="c1"/>
        /// and <paramref name="c2"/>. If there is no such <see cref="Block"/>,
        /// returns <see langword="null"/> instead.
        /// </returns>
        private static Block FindTopCommon(BlockChain c1, BlockChain c2)
        {
            long shorterHeight = Math.Min(c1.Count, c2.Count) - 1;
            Block b1 = c1[shorterHeight], b2 = c2[shorterHeight];

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
