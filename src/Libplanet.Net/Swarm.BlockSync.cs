#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;
using Nito.AsyncEx;

namespace Libplanet.Net
{
    public partial class Swarm
    {
        /// <summary>
        /// Information of <see cref="Swarm"/>'s demand for new blocks.
        /// It is empty when the <see cref="Swarm"/> does not have any block to demand.
        /// <seealso cref="BlockDemandTable"/>
        /// </summary>
        public BlockDemandTable BlockDemandTable { get; private set; }

        /// <summary>
        /// This is a table of waiting <see cref="Block"/>s
        /// to enter the <see cref="BlockChain"/>.
        /// <seealso cref="BlockCandidateTable"/>
        /// </summary>
        public BlockCandidateTable BlockCandidateTable { get; private set; }

        internal AsyncAutoResetEvent FillBlocksAsyncStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncFailed { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent ProcessFillBlocksFinished { get; } = new AsyncAutoResetEvent();

        /// <summary>
        /// Fill blocks from the <see cref="BoundPeer"/>s in the
        /// <see cref="Swarm.RoutingTable"/>.
        /// </summary>
        /// <param name="timeout">
        /// The timeout value for the request to get the tip of the block.
        /// </param>
        /// <param name="maximumPollPeers">The maximum targets to send request to.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task PullBlocksAsync(
            TimeSpan? timeout,
            int maximumPollPeers,
            CancellationToken cancellationToken)
        {
            if (maximumPollPeers <= 0)
            {
                return;
            }

            List<(BoundPeer, IBlockExcerpt)> peersWithBlockExcerpt =
                await GetPeersWithExcerpts(
                    timeout, maximumPollPeers, cancellationToken);
            await PullBlocksAsync(peersWithBlockExcerpt, cancellationToken);
        }

        private async Task PullBlocksAsync(
            List<(BoundPeer, IBlockExcerpt)> peersWithBlockExcerpt,
            CancellationToken cancellationToken)
        {
            if (!peersWithBlockExcerpt.Any())
            {
                _logger.Verbose("No any excerpts to process");
                return;
            }

            long totalBlocksToDownload = 0L;
            Block tempTip = BlockChain.Tip;
            var blocks = new List<(Block, BlockCommit)>();

            try
            {
                // NOTE: demandBlockHashes is always non-empty.
                (var peer, var demandBlockHashes) = await GetDemandBlockHashes(
                    BlockChain,
                    peersWithBlockExcerpt,
                    cancellationToken);
                totalBlocksToDownload = demandBlockHashes.Count;

                _logger.Verbose(
                    "Enqueue {BlockHashes} to demands queue...",
                    demandBlockHashes);

                var downloadedBlocks = GetBlocksAsync(
                    peer,
                    demandBlockHashes,
                    cancellationToken);

                await foreach (
                    (Block block, BlockCommit commit) in
                        downloadedBlocks.WithCancellation(cancellationToken))
                {
                    _logger.Verbose(
                        "Got block #{BlockIndex} {BlockHash} from {Peer}",
                        block.Index,
                        block.Hash,
                        peer);
                    cancellationToken.ThrowIfCancellationRequested();
                    blocks.Add((block, commit));
                }
            }
            catch (Exception e)
            {
                var msg =
                    $"Unexpected exception occurred during {nameof(PullBlocksAsync)}()";
                _logger.Error(e, msg);
                FillBlocksAsyncFailed.Set();
            }
            finally
            {
                if (totalBlocksToDownload > 0)
                {
                    try
                    {
                        var branch = new Branch(blocks);
                        BlockCandidateTable.Add(BlockChain.Tip.Header, branch);
                        BlockReceived.Set();
                    }
                    catch (ArgumentException ae)
                    {
                        _logger.Error(
                            ae,
                            "An Unexpected exception occurred during {FName}",
                            nameof(PullBlocksAsync));
                    }
                }

                ProcessFillBlocksFinished.Set();
                _logger.Debug("{MethodName}() has finished", nameof(PullBlocksAsync));
            }
        }

        private async Task FillBlocksAsync(
            CancellationToken cancellationToken
        )
        {
            var checkInterval = TimeSpan.FromMilliseconds(100);
            while (!cancellationToken.IsCancellationRequested)
            {
                if (BlockDemandTable.Any())
                {
                    _logger.Debug(
                        "{MethodName}() blockDemand count: {BlockDemandCount}",
                        nameof(FillBlocksAsync),
                        BlockDemandTable.Demands.Count);
                    foreach (var blockDemand in BlockDemandTable.Demands.Values)
                    {
                        BlockDemandTable.Remove(blockDemand.Peer);
                        _ = ProcessBlockDemandAsync(
                            blockDemand,
                            cancellationToken);
                    }
                }
                else
                {
                    await Task.Delay(checkInterval, cancellationToken);
                    continue;
                }

                BlockDemandTable.Cleanup(BlockChain, IsBlockNeeded);
            }

            _logger.Debug("{MethodName}() has finished", nameof(FillBlocksAsync));
        }

        private async Task PollBlocksAsync(
            TimeSpan timeout,
            TimeSpan tipLifespan,
            int maximumPollPeers,
            CancellationToken cancellationToken
        )
        {
            IBlockExcerpt lastTip = BlockChain.Tip;
            DateTimeOffset lastUpdated = DateTimeOffset.UtcNow;
            while (!cancellationToken.IsCancellationRequested)
            {
                if (!lastTip.Hash.Equals(BlockChain.Tip.Hash))
                {
                    lastUpdated = DateTimeOffset.UtcNow;
                    lastTip = BlockChain.Tip;
                }
                else if (lastUpdated + tipLifespan < DateTimeOffset.UtcNow)
                {
                    _logger.Debug(
                        "Tip #{TipIndex} {TipHash} has expired (last updated: {LastUpdated}); " +
                        "pulling blocks from neighbor peers...",
                        lastTip.Index,
                        lastTip.Hash,
                        lastUpdated
                    );
                    await PullBlocksAsync(
                        timeout, maximumPollPeers, cancellationToken);
                }

                await Task.Delay(1000, cancellationToken);
            }
        }

        private void OnBlockChainTipChanged(object sender, (Block OldTip, Block NewTip) e)
        {
            if (Running)
            {
                BroadcastBlock(e.NewTip);
            }
        }
    }
}
