#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using Nito.AsyncEx;
using BlockChainSlice = System.Collections.Generic.LinkedList<Libplanet.Blocks.BlockHash>;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        /// <summary>
        /// Information of <see cref="Swarm{T}"/>'s demand for new blocks.
        /// It is empty when the <see cref="Swarm{T}"/> does not have any block to demand.
        /// <seealso cref="BlockDemandTable{T}"/>
        /// </summary>
        public BlockDemandTable<T> BlockDemandTable { get; private set; }

        /// <summary>
        /// This is a table of waiting <see cref="Block{T}"/>s
        /// to enter the <see cref="BlockChain"/>.
        /// <seealso cref="BlockCandidateTable{T}"/>
        /// </summary>
        public BlockCandidateTable<T> BlockCandidateTable { get; private set; }

        internal AsyncAutoResetEvent FillBlocksAsyncStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncFailed { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent ProcessFillBlocksFinished { get; } = new AsyncAutoResetEvent();

        /// <summary>
        /// Fill blocks from the <see cref="BoundPeer"/>s in the
        /// <see cref="Swarm{T}.RoutingTable"/>.
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
            TimeSpan timeout,
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
            peersWithBlockExcerpt = peersWithBlockExcerpt
                .Where(pair => IsBlockNeeded(pair.Item2)).ToList();
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

            var totalBlocksToDownload = 0L;
            Block<T> tempTip = BlockChain.Tip;
            var blocks = new List<Block<T>>();

            try
            {
                var blockCompletion = new BlockCompletion<BoundPeer, T>(
                    completionPredicate: BlockChain.Store.ContainsBlock,
                    window: InitialBlockDownloadWindow
                );
                var demandBlockHashes = GetDemandBlockHashes(
                    BlockChain,
                    peersWithBlockExcerpt,
                    null,
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

                IAsyncEnumerable<Tuple<Block<T>, BoundPeer>> completedBlocks =
                    blockCompletion.Complete(
                        peers: peersWithBlockExcerpt.Select(pair => pair.Item1).ToList(),
                        blockFetcher: GetBlocksAsync,
                        cancellationToken: cancellationToken
                    );

                await foreach (
                    (Block<T> block, BoundPeer sourcePeer)
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
                    blocks.Add(block);
                    if (tempTip is null ||
                        BlockChain.Policy.CanonicalChainComparer.Compare(block, tempTip) > 0)
                    {
                        tempTip = block;
                    }
                }

                BlockHash? previousHash = blocks.First().PreviousHash;
                Block<T> branchpoint;
                if (previousHash != null)
                {
                    branchpoint = BlockChain.Store.GetBlock<T>(
                        (BlockHash)previousHash);
                }
                else
                {
                    branchpoint = BlockChain.Genesis;
                }

                blocks.Insert(0, branchpoint);
            }
            catch (Exception e)
            {
                var msg =
                    $"Unexpected exception occured during {nameof(PullBlocksAsync)}()";
                _logger.Error(e, msg);
                FillBlocksAsyncFailed.Set();
            }
            finally
            {
                try
                {
                    var branch = new Branch<T>(blocks);
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

                ProcessFillBlocksFinished.Set();
                _logger.Debug("{MethodName}() has finished successfully", nameof(PullBlocksAsync));
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
                    await PullBlocksAsync(timeout, maximumPollPeers, cancellationToken);
                }

                await Task.Delay(1000, cancellationToken);
            }
        }

#pragma warning disable MEN003
        private async Task<System.Action> CompleteBlocksAsync(
            IList<(BoundPeer, IBlockExcerpt)> peersWithExcerpt,
            BlockChain<T> workspace,
            IProgress<PreloadState> progress,
            bool render,
            CancellationToken cancellationToken)
        {
            // As preloading takes long, the blockchain data can corrupt if a program suddenly
            // terminates during preloading is going on.  In order to make preloading done
            // all or nothing (i.e., atomic), we first fork the chain and stack up preloaded data
            // upon that forked workspace, and then if preloading ends replace the existing
            // blockchain with it.
            // Note that it does not pass any renderers here so that they render nothing
            // (because the workspace chain is for underlying).
            System.Action renderSwap = () => { };
            var chainIds = new HashSet<Guid>
            {
                workspace.Id,
            };
            bool renderActions = render;
            bool renderBlocks = true;

            var complete = false;

            try
            {
                _logger.Debug("Start to {MethodName}()", nameof(CompleteBlocksAsync));
                FillBlocksAsyncStarted.Set();

                var blockCompletion = new BlockCompletion<BoundPeer, T>(
                    completionPredicate: workspace.Store.ContainsBlock,
                    window: InitialBlockDownloadWindow
                );

                Block<T> initialTip = BlockChain.Tip;
                long totalBlocksToDownload = 0L;
                long receivedBlockCount = 0L;
                Block<T> tipCandidate = initialTip;
                Block<T> tempTip = tipCandidate;
                Block<T> branchpoint;

                var demandBlockHashes = GetDemandBlockHashes(
                    workspace,
                    peersWithExcerpt,
                    progress,
                    cancellationToken
                ).WithCancellation(cancellationToken);

                await foreach ((long index, BlockHash hash) in demandBlockHashes)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    if (index == 0 && !hash.Equals(workspace.Genesis.Hash))
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
                            $"Since the genesis block is fixed to {workspace.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";
                        var e = new InvalidGenesisBlockException(
                            msg,
                            hash,
                            workspace.Genesis.Hash);
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
                    return renderSwap;
                }

                IAsyncEnumerable<Tuple<Block<T>, BoundPeer>> completedBlocks =
                    blockCompletion.Complete(
                        peers: peersWithExcerpt.Select(pair => pair.Item1).ToList(),
                        blockFetcher: GetBlocksAsync,
                        cancellationToken: cancellationToken
                    );

                BlockDownloadStarted.Set();

                await foreach (
                    (Block<T> block, BoundPeer sourcePeer)
                        in completedBlocks.WithCancellation(cancellationToken))
                {
                    _logger.Verbose(
                        "Got #{BlockIndex} {BlockHash} from {Peer}",
                        block.Index,
                        block.Hash,
                        sourcePeer
                    );
                    cancellationToken.ThrowIfCancellationRequested();

                    if (block.Index == 0 && !block.Hash.Equals(workspace.Genesis.Hash))
                    {
                        // FIXME: This behavior can unexpectedly terminate the swarm
                        // (and the game app) if it encounters a peer having a different
                        // blockchain, and therefore can be exploited to remotely shut
                        // down other nodes as well.
                        // Since the intention of this behavior is to prevent mistakes
                        // to try to connect incorrect seeds (by a user),
                        // this behavior should be limited for only seed peers.
                        var msg =
                            $"Since the genesis block is fixed to {workspace.Genesis} " +
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
                                workspace.Genesis.Hash
                            )
                        );
                    }

                    _logger.Verbose(
                        "Add a block #{BlockIndex} {BlockHash}...",
                        block.Index,
                        block.Hash
                    );
                    block.ValidateTimestamp();
                    workspace.Store.PutBlock(block);
                    if (BlockChain.Policy.CanonicalChainComparer.Compare(block, tempTip) > 0)
                    {
                        tempTip = block;
                    }

                    receivedBlockCount++;
                    progress?.Report(new BlockDownloadState
                    {
                        TotalBlockCount = Math.Max(
                            totalBlocksToDownload,
                            receivedBlockCount),
                        ReceivedBlockCount = receivedBlockCount,
                        ReceivedBlockHash = block.Hash,
                        SourcePeer = sourcePeer,
                    });
                    _logger.Debug(
                        "Appended block #{BlockIndex} {BlockHash} " +
                        "to the workspace chain",
                        block.Index,
                        block.Hash
                    );
                }

                tipCandidate = tempTip;
                _logger.Debug(
                    "TipCandidate: #{Index} {Hash}",
                    tipCandidate?.Index,
                    tipCandidate?.Hash);

                if (tipCandidate is { Index: 0 } tc)
                {
                    // FIXME: This is here to keep logical equivalence through refactoring.
                    // This part of the code is likely unreachable and the exception message
                    // is also likely to be incoherent.
                    BlockHash g = workspace.Store.IndexBlockHash(workspace.Id, 0L).Value;
                    throw new SwarmException(
                        $"Downloaded tip candidate #{tc.Index} {tc.Hash} " +
                        $"is unusable for the the existing chain #0 {g}.");
                }

                if (!(tipCandidate is { }))
                {
                    throw new SwarmException(
                        $"Tip candidate is null.");
                }

                // NOTE: All blocks in deltaBlocks will have non-null previousHash.
                var blockChainSlice = new BlockChainSlice(new[] { tipCandidate.Hash });
                while (true)
                {
                    BlockHash bh = blockChainSlice.First();
                    BlockDigest? b = workspace.Store.GetBlockDigest(bh);
                    if (b?.PreviousHash is { } p && !workspace.ContainsBlock(p))
                    {
                        blockChainSlice.AddFirst(p);
                    }
                    else
                    {
                        break;
                    }

                    _logger.Debug(
                        "The starting tip is {TipCandidate} and we are currently passing " +
                        "tip {CurrentTip}; the target tip is {WorkspaceTip}",
                        tipCandidate.Index,
                        b?.Index,
                        workspace.Tip.Index);

                    cancellationToken.ThrowIfCancellationRequested();
                }

                BlockDigest? firstBlock = workspace.Store.GetBlockDigest(blockChainSlice.First());

                if (!(firstBlock?.PreviousHash is { } previousHash))
                {
                    throw new SwarmException(
                        "A genesis block cannot be a preload target block.");
                }

                branchpoint = workspace[previousHash];
                _logger.Debug(
                    "Branchpoint block is #{Index} {Hash}",
                    branchpoint.Index,
                    branchpoint.Hash);
                workspace = workspace.Fork(branchpoint.Hash, inheritRenderers: true);
                chainIds.Add(workspace.Id);
                renderBlocks = false;
                renderActions = false;

                try
                {
                    long verifiedBlockCount = 0;
                    foreach (BlockHash deltaBlockHash in blockChainSlice)
                    {
                        cancellationToken.ThrowIfCancellationRequested();

                        Block<T> deltaBlock = workspace.Store.GetBlock<T>(deltaBlockHash);
                        _logger.Debug(
                            "Appending block #{Index} {Hash}",
                            deltaBlock.Index,
                            deltaBlock.Hash);
                        workspace.Append(
                            deltaBlock,
                            evaluateActions: false,
                            renderBlocks: renderBlocks,
                            renderActions: renderActions
                        );
                        progress?.Report(
                            new BlockVerificationState
                            {
                                TotalBlockCount = blockChainSlice.Count,
                                VerifiedBlockCount = ++verifiedBlockCount,
                                VerifiedBlockHash = deltaBlock.Hash,
                            });
                    }
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An exception occurred during appending blocks");
                    throw;
                }

                cancellationToken.ThrowIfCancellationRequested();

                ExecuteActions(
                    workspace,
                    branchpoint,
                    progress,
                    cancellationToken);
                complete = true;
            }
            finally
            {
                if (cancellationToken.IsCancellationRequested)
                {
                    _logger.Information("{MethodName}() is canceled", nameof(CompleteBlocksAsync));
                }

                IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;

                if (!complete
                    || workspace.Tip == BlockChain.Tip
                    || cancellationToken.IsCancellationRequested)
                {
                    _logger.Debug(
                        "{MethodName}() is aborted. Complete? {Complete}; " +
                        "delete the temporary working chain ({TId}: #{TIndex} {THash}), " +
                        "and make the existing chain ({EId}: #{EIndex} {EHash}) remains",
                        nameof(CompleteBlocksAsync),
                        complete,
                        workspace.Id,
                        workspace.Tip.Index,
                        workspace.Tip.Hash,
                        BlockChain.Id,
                        BlockChain.Tip.Index,
                        BlockChain.Tip.Hash
                    );
                }
                else if (canonComparer.Compare(workspace.Tip, BlockChain.Tip) < 0)
                {
                    _logger.Debug(
                        "{MethodName}() is aborted since existing chain " +
                        "({EId}: #{EIndex} {EHash}) already has proper tip than " +
                        "temporary working chain ({TId}: #{TIndex} {THash})",
                        nameof(CompleteBlocksAsync),
                        BlockChain.Id,
                        BlockChain.Tip.Index,
                        BlockChain.Tip.Hash,
                        workspace.Id,
                        workspace.Tip.Index,
                        workspace.Tip.Hash
                    );
                }
                else
                {
                    _logger.Debug(
                        "{MethodName}() finished; " +
                        "replace the existing chain ({0}: {1}) with " +
                        "the working chain ({2}: {3})",
                        nameof(CompleteBlocksAsync),
                        BlockChain.Id,
                        BlockChain.Tip,
                        workspace.Id,
                        workspace.Tip
                    );

                    renderSwap = BlockChain.Swap(workspace, render: render);
                }

                foreach (Guid chainId in chainIds)
                {
                    if (!chainId.Equals(BlockChain.Id))
                    {
                        _logger.Verbose("Delete an unused chain: {ChainId}", chainId);
                        workspace.Store.DeleteChainId(chainId);
                    }
                }

                _logger.Verbose("Remaining chains: {@ChainIds}", workspace.Store.ListChainIds());
            }

            return renderSwap;
        }
#pragma warning restore MEN003

        private void ExecuteActions(
            BlockChain<T> workspace,
            Block<T> branchpoint,
            IProgress<PreloadState> progress,
            CancellationToken cancellationToken)
        {
            if (workspace.Renderers.Any())
            {
                throw new ArgumentException(
                    "The workspace chain must not have any renderers.",
                    nameof(workspace)
                );
            }

            long actionsCount = 0, txsCount = 0, initHeight = branchpoint?.Index + 1 ?? 0;
            int count = 0, totalCount = (int)(workspace.Count - initHeight);
            DateTimeOffset executionStarted = DateTimeOffset.Now;
            _logger.Debug("Starting to execute actions of {BlockCount} blocks", totalCount);
            var blockHashes = workspace.IterateBlockHashes((int)initHeight);
            foreach (BlockHash hash in blockHashes)
            {
                cancellationToken.ThrowIfCancellationRequested();

                Block<T> block = workspace[hash];
                if (block.Index < initHeight)
                {
                    continue;
                }

                workspace.ExecuteActions(block);
                IEnumerable<Transaction<T>>
                    transactions = block.Transactions.ToImmutableArray();
                txsCount += transactions.Count();
                actionsCount +=
                    transactions.Sum(tx => tx.CustomActions is { } ca ? ca.Count : 1L);

                _logger.Debug(
                    "Executed actions in block #{Index} {Hash}",
                    block.Index,
                    block.Hash);
                progress?.Report(new ActionExecutionState()
                {
                    TotalBlockCount = totalCount,
                    ExecutedBlockCount = ++count,
                    ExecutedBlockHash = block.Hash,
                });
            }

            _logger.Debug("Finished to execute actions");

            TimeSpan spent = DateTimeOffset.Now - executionStarted;
            _logger.Verbose(
                "Executed totally {0} blocks, {1} txs, {2} actions during {3}",
                totalCount,
                actionsCount,
                txsCount,
                spent);
        }

        private void OnBlockChainTipChanged(object sender, (Block<T> OldTip, Block<T> NewTip) e)
        {
            if (Running)
            {
                BroadcastBlock(e.NewTip);
            }
        }
    }
}
