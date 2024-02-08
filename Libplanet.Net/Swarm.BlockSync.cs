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
        /// <param name="chunkSize">The chunk size of <see cref="Block"/>s to be
        /// added on the <see cref="BlockCandidateTable"/>.</param>
        /// <param name="progress">
        /// An instance that receives progress updates for block downloads.
        /// </param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        internal async Task PullBlocksAsync(
            TimeSpan? timeout,
            int maximumPollPeers,
            int chunkSize,
            IProgress<BlockSyncState>? progress,
            CancellationToken cancellationToken)
        {
            if (maximumPollPeers <= 0)
            {
                return;
            }

            List<(BoundPeer, IBlockExcerpt)> peersWithBlockExcerpt =
                await GetPeersWithExcerpts(
                    timeout, maximumPollPeers, cancellationToken);
            peersWithBlockExcerpt = peersWithBlockExcerpt
                .Where(pair => IsBlockNeeded(pair.Item2)).ToList();
            await PullBlocksAsync(peersWithBlockExcerpt, chunkSize, progress, cancellationToken);
        }

        private async Task PullBlocksAsync(
            List<(BoundPeer, IBlockExcerpt)> peersWithBlockExcerpt,
            int chunkSize,
            IProgress<BlockSyncState>? progress,
            CancellationToken cancellationToken)
        {
            if (!peersWithBlockExcerpt.Any())
            {
                _logger.Verbose("No any excerpts to process");
                return;
            }

            long totalBlocksToDownload = 0L;
            long receivedBlockCount = 0L;
            Block tempTip = BlockChain.Tip;
            var blocks = new List<(Block, BlockCommit?)>();

            try
            {
                var blockCompletion = new BlockCompletion<BoundPeer>(
                    completionPredicate: BlockChain.ContainsBlock,
                    window: InitialBlockDownloadWindow
                );
                var demandBlockHashes = GetDemandBlockHashes(
                    BlockChain,
                    peersWithBlockExcerpt,
                    chunkSize,
                    progress,
                    cancellationToken
                ).WithCancellation(cancellationToken);
                await foreach ((long index, BlockHash hash) in demandBlockHashes)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    if (index == 0 && !hash.Equals(BlockChain.Genesis.Hash))
                    {
                        // FIXME: This behavior can unexpectedly terminate the swarm
                        // (and the game app) if it encounters a peer having a different
                        // blockchain, and therefore can be exploited to remotely shut
                        // down other nodes as well.
                        // Since the intention of this behavior is to prevent mistakes
                        // to try to connect incorrect seeds (by a user),
                        // this behavior should be limited for only seed peers.
                        // FIXME: ChainStatus message became to contain hash value of
                        // the genesis block, so this exception will not be happened.
                        var msg =
                            $"Since the genesis block is fixed to {BlockChain.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";
                        var e = new InvalidGenesisBlockException(
                            msg,
                            hash,
                            BlockChain.Genesis.Hash);
                        throw new AggregateException(msg, e);
                    }

                    _logger.Verbose(
                        "Enqueue #{BlockIndex} {BlockHash} to demands queue...",
                        index,
                        hash
                    );
                    if (blockCompletion.Demand(hash))
                    {
                        totalBlocksToDownload++;
                    }
                }

                if (totalBlocksToDownload == 0)
                {
                    _logger.Debug("No any blocks to fetch");
                    return;
                }

                IAsyncEnumerable<Tuple<Block, BlockCommit?, BoundPeer>> completedBlocks =
                    blockCompletion.Complete(
                        peers: peersWithBlockExcerpt.Select(pair => pair.Item1).ToList(),
                        blockFetcher: GetBlocksAsync,
                        cancellationToken: cancellationToken
                    );

                await foreach (
                    (Block block, BlockCommit? commit, BoundPeer sourcePeer)
                    in completedBlocks.WithCancellation(cancellationToken))
                {
                    _logger.Verbose(
                        "Got #{BlockIndex} {BlockHash} from {Peer}",
                        block.Index,
                        block.Hash,
                        sourcePeer
                    );
                    cancellationToken.ThrowIfCancellationRequested();

                    if (block.Index == 0 && !block.Hash.Equals(BlockChain.Genesis.Hash))
                    {
                        // FIXME: This behavior can unexpectedly terminate the swarm
                        // (and the game app) if it encounters a peer having a different
                        // blockchain, and therefore can be exploited to remotely shut
                        // down other nodes as well.
                        // Since the intention of this behavior is to prevent mistakes
                        // to try to connect incorrect seeds (by a user),
                        // this behavior should be limited for only seed peers.
                        var msg =
                            $"Since the genesis block is fixed to {BlockChain.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";

                        // Although it's actually not aggregated, but to be consistent with
                        // above code throwing InvalidGenesisBlockException, makes this
                        // to wrap an exception with AggregateException... Not sure if
                        // it show be wrapped from the very beginning.
                        throw new AggregateException(
                            msg,
                            new InvalidGenesisBlockException(
                                msg,
                                block.Hash,
                                BlockChain.Genesis.Hash
                            )
                        );
                    }

                    block.ValidateTimestamp();
                    blocks.Add((block, commit));
                    if (tempTip is null || block.Index > tempTip.Index)
                    {
                        tempTip = block;
                    }

                    progress?.Report(new BlockDownloadState
                    {
                        TotalBlockCount = Math.Max(
                            totalBlocksToDownload,
                            ++receivedBlockCount),
                        ReceivedBlockCount = receivedBlockCount,
                        ReceivedBlockHash = block.Hash,
                        SourcePeer = sourcePeer,
                    });
                }

                BlockHash? previousHash = blocks.First().Item1.PreviousHash;
                Block? branchpoint;
                BlockCommit? branchpointCommit;
                if (previousHash != null)
                {
                    branchpoint = BlockChain.Store.GetBlock(
                        (BlockHash)previousHash);
                    branchpointCommit = BlockChain.GetBlockCommit(branchpoint!.Hash);
                }
                else
                {
                    branchpoint = BlockChain.Genesis;
                    branchpointCommit = null;
                }

                blocks.Insert(0, (branchpoint, branchpointCommit));
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
                        timeout, int.MaxValue, maximumPollPeers, null, cancellationToken);
                }

                await Task.Delay(1000, cancellationToken);
            }
        }

        private void OnBlockChainTipChanged(object? sender, (Block OldTip, Block NewTip) e)
        {
            if (Running)
            {
                BroadcastBlock(e.NewTip);
            }
        }
    }
}
