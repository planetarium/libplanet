#nullable disable
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <summary>
        /// Render actions of the given <paramref name="block"/>.
        /// </summary>
        /// <param name="evaluations"><see cref="IActionEvaluation"/>s of the block.  If it is
        /// <see langword="null"/>, evaluate actions of the <paramref name="block"/> again.</param>
        /// <param name="block"><see cref="Block"/> to render actions.</param>
        internal void RenderActions(
            IReadOnlyList<ICommittedActionEvaluation> evaluations,
            Block block)
        {
            if (evaluations is null)
            {
                throw new NullReferenceException(nameof(evaluations));
            }

            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            _logger.Debug(
                "Rendering actions in block #{BlockIndex} {BlockHash}...",
                block.Index,
                block.Hash);

            long count = 0;
            foreach (var evaluation in evaluations)
            {
                foreach (IActionRenderer renderer in ActionRenderers)
                {
                    if (evaluation.Exception is null)
                    {
                        renderer.RenderAction(
                            evaluation.Action,
                            evaluation.InputContext,
                            evaluation.OutputState);
                    }
                    else
                    {
                        renderer.RenderActionError(
                            evaluation.Action,
                            evaluation.InputContext,
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
