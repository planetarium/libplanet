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
            List<(BoundPeer, IBlockExcerpt)> peersWithBlockExcerpt =
                await GetPeersWithExcerpts(
                    BlockChain.Tip, timeout, maximumPollPeers, cancellationToken);
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

            try
            {
                _logger.Verbose(
                    $"The chain before {nameof(PullBlocksAsync)} : " +
                    "{Id} #{Index} {Hash}",
                    BlockChain.Id,
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                System.Action renderSwap = await CompleteBlocksAsync(
                    peersWithBlockExcerpt,
                    BlockChain,
                    null,
                    false,
                    true,
                    cancellationToken);
                BroadcastBlock(BlockChain.Tip);
                renderSwap();

                // FIXME: Should add new event handler that indicates rendering has finished,
                // and move these events before BroadcastBlock()
                BlockReceived.Set();
                BlockAppended.Set();
            }
            catch (Exception e)
            {
                var msg =
                    $"Unexpected exception occured during {nameof(PullBlocksAsync)}. {{e}}";
                _logger.Error(e, msg, e);
                FillBlocksAsyncFailed.Set();
            }
            finally
            {
                BlockDemandTable.Cleanup(BlockChain, IsBlockNeeded);
                ProcessFillBlocksFinished.Set();
            }
        }

        private async Task FillBlocksAsync(
            TimeSpan timeout,
            TimeSpan pollInterval,
            int maximumPollPeers,
            CancellationToken cancellationToken
        )
        {
            var timeTaken = TimeSpan.Zero;
            var checkInterval = TimeSpan.FromMilliseconds(100);
            while (!cancellationToken.IsCancellationRequested)
            {
                if (BlockDemandTable.Any())
                {
                    List<(BoundPeer, IBlockExcerpt)> peersWithExcerpt = BlockDemandTable.Demands
                        .Select(pair => (pair.Key, (IBlockExcerpt)pair.Value)).ToList();
                    await PullBlocksAsync(
                        peersWithExcerpt,
                        cancellationToken);
                }
                else if (timeTaken > pollInterval)
                {
                    await PullBlocksAsync(timeout, maximumPollPeers, cancellationToken);
                }
                else
                {
                    await Task.Delay(checkInterval, cancellationToken);
                    timeTaken += checkInterval;
                    continue;
                }

                timeTaken = TimeSpan.Zero;
            }

            _logger.Debug($"{nameof(FillBlocksAsync)} has finished.");
        }

#pragma warning disable MEN003
        private async Task<System.Action> CompleteBlocksAsync(
            IList<(BoundPeer, IBlockExcerpt)> peersWithExcerpt,
            BlockChain<T> workspace,
            IProgress<PreloadState> progress,
            bool preload,
            bool render,
            CancellationToken cancellationToken
        )
        {
            // As preloading takes long, the blockchain data can corrupt if a program suddenly
            // terminates during preloading is going on.  In order to make preloading done
            // all or nothing (i.e., atomic), we first fork the chain and stack up preloaded data
            // upon that forked workspace, and then if preloading ends replace the existing
            // blockchain with it.
            // Note that it does not pass any renderers here so that they render nothing
            // (because the workspace chain is for underlying).
            System.Action renderSwap = () => { };
            Guid wId = workspace.Id;
            IStore wStore = workspace.Store;
            var chainIds = new HashSet<Guid>
            {
                workspace.Id,
            };
            bool renderActions = render;
            bool renderBlocks = render && renderActions;

            var complete = false;

            try
            {
                _logger.Debug($"Start to {nameof(CompleteBlocksAsync)}().");
                FillBlocksAsyncStarted.Set();

                var blockCompletion = new BlockCompletion<BoundPeer, T>(
                    completionPredicate: wStore.ContainsBlock,
                    window: InitialBlockDownloadWindow
                );

                Block<T> initialTip = BlockChain.Tip;
                long totalBlocksToDownload = 0L;
                long receivedBlockCount = 0L;
                Block<T> tipCandidate = initialTip;

                Block<T> tempTip = tipCandidate;
                Block<T> branchpoint = null;

                var demandBlockHashes = GetDemandBlockHashes(
                    workspace,
                    peersWithExcerpt,
                    progress,
                    cancellationToken
                ).WithCancellation(cancellationToken);

                await foreach (var pair in demandBlockHashes)
                {
                    (long index, BlockHash hash) = pair;
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
                            hash,
                            workspace.Genesis.Hash,
                            msg);
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
                    _logger.Debug("No any blocks to fetch.");
                    return renderSwap;
                }

                IAsyncEnumerable<Tuple<Block<T>, BoundPeer>> completedBlocks =
                    blockCompletion.Complete(
                        peers: peersWithExcerpt.Select(pair => pair.Item1).ToList(),
                        blockFetcher: GetBlocksAsync,
                        cancellationToken: cancellationToken
                    );

                BlockDownloadStarted.Set();

                using var timeoutCts = new CancellationTokenSource(Options.BlockDownloadTimeout);
                using var blockDownloadCts = CancellationTokenSource.CreateLinkedTokenSource(
                    timeoutCts.Token,
                    cancellationToken
                );

                await foreach (
                    var pair in completedBlocks.WithCancellation(blockDownloadCts.Token))
                {
                    (Block<T> block, BoundPeer sourcePeer) = pair;
                    _logger.Verbose(
                        "Got #{BlockIndex} {BlockHash} from {Peer}.",
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
                                block.Hash,
                                workspace.Genesis.Hash,
                                msg
                            )
                        );
                    }

                    _logger.Verbose(
                        "Add a block #{BlockIndex} {BlockHash}...",
                        block.Index,
                        block.Hash
                    );
                    HashAlgorithmType hashAlgorithm =
                        workspace.Policy.GetHashAlgorithm(block.Index);
                    block.Validate(hashAlgorithm, DateTimeOffset.UtcNow);
                    wStore.PutBlock(block);
                    if (tempTip is null ||
                        BlockChain.Policy.CanonicalChainComparer.Compare(
                            BlockChain.PerceiveBlock(block),
                            BlockChain.PerceiveBlock(tempTip)) > 0)
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
                        "Appended a block #{BlockIndex} {BlockHash} " +
                        "to the workspace chain.",
                        block.Index,
                        block.Hash
                    );
                }

                tipCandidate = tempTip;
                _logger.Debug(
                    "TipCandidate: #{Index} {Block}",
                    tipCandidate?.Index,
                    tipCandidate?.Hash);

                if (tipCandidate is null)
                {
                    // If there is no blocks in the network (or no consensus at least)
                    // it doesn't need to receive states from other peers at all.
                    return renderSwap;
                }

                var deltaBlocks = new LinkedList<Block<T>>();
                while (true)
                {
                    Block<T> blockToAdd;
                    if (deltaBlocks.First is LinkedListNode<Block<T>> node)
                    {
                        Block<T> b = node.Value;
                        if (b.PreviousHash is { } p && !workspace.ContainsBlock(p))
                        {
                            blockToAdd = wStore.GetBlock<T>(p);
                        }
                        else
                        {
                            break;
                        }
                    }
                    else if (BlockChain.Policy.CanonicalChainComparer.Compare(
                                 BlockChain.PerceiveBlock(tipCandidate),
                                 BlockChain.PerceiveBlock(tempTip)) <= 0)
                    {
                        blockToAdd = tipCandidate;
                    }
                    else
                    {
                        // Received chain's topmost block is not canonical.
                        _logger.Debug("Received block is not canonical.");
                        break;
                    }

                    deltaBlocks.AddFirst(blockToAdd);
                }

                cancellationToken.ThrowIfCancellationRequested();

                if (deltaBlocks.First is { } deltaBottom)
                {
                    Block<T> bottomBlock = deltaBottom.Value;
                    if (bottomBlock.PreviousHash is { } bp)
                    {
                        branchpoint = workspace[bp];
                        if (preload || workspace[-1] != branchpoint)
                        {
                            _logger.Debug(
                                "Branchpoint block is #{Index} {Hash}.",
                                branchpoint.Index,
                                branchpoint.Hash);
                            workspace = workspace.Fork(bp, inheritRenderers: true);
                            chainIds.Add(workspace.Id);
                            renderBlocks = false;
                            renderActions = false;
                        }

                        try
                        {
                            long verifiedBlockCount = 0;
                            foreach (Block<T> deltaBlock in deltaBlocks)
                            {
                                cancellationToken.ThrowIfCancellationRequested();

                                _logger.Debug(
                                    "Appending block #{Index} {Hash}",
                                    deltaBlock.Index,
                                    deltaBlock.Hash);
                                workspace.Append(
                                    deltaBlock,
                                    DateTimeOffset.UtcNow,
                                    evaluateActions: !preload,
                                    renderBlocks: renderBlocks,
                                    renderActions: renderActions
                                );
                                progress?.Report(
                                    new BlockVerificationState
                                    {
                                        TotalBlockCount = deltaBlocks.Count,
                                        VerifiedBlockCount = ++verifiedBlockCount,
                                        VerifiedBlockHash = deltaBlock.Hash,
                                    });
                            }
                        }
                        catch (Exception e)
                        {
                            _logger.Error(
                                e,
                                "An exception occurred during appending blocks: {Exception}",
                                e
                            );
                            throw;
                        }

                        cancellationToken.ThrowIfCancellationRequested();
                    }
                    else
                    {
                        Block<T> first = deltaBlocks.First.Value, last = deltaBlocks.Last.Value;
                        BlockHash g = wStore.IndexBlockHash(wId, 0L).Value;
                        throw new SwarmException(
                            $"Downloaded blocks (#{first.Index} {first.Hash}\u2013" +
                            $"#{last.Index} {last.Hash}) are incompatible with the existing " +
                            $"chain (#0 {g}\u2013#{initialTip.Index} {initialTip.Hash})."
                        );
                    }
                }

                if (preload)
                {
                    ExecuteActions(
                        workspace,
                        branchpoint,
                        progress,
                        cancellationToken);
                }

                complete = true;
            }
            finally
            {
                if (cancellationToken.IsCancellationRequested)
                {
                    _logger.Information($"{nameof(CompleteBlocksAsync)}() is canceled.");
                }

                if (!complete
                    || workspace.Tip == BlockChain.Tip
                    || cancellationToken.IsCancellationRequested)
                {
                    _logger.Debug(
                        $"{nameof(CompleteBlocksAsync)}() is aborted. Complete? {complete}; " +
                        "delete the temporary working chain ({TId}: #{TIndex} {THash}), " +
                        "and make the existing chain ({EId}: #{EIndex} {EHash}) remains.",
                        wId,
                        workspace.Tip.Index,
                        workspace.Tip.Hash,
                        BlockChain.Id,
                        BlockChain.Tip.Index,
                        BlockChain.Tip.Hash
                    );
                }
                else
                {
                    _logger.Debug(
                        $"{nameof(CompleteBlocksAsync)} finished; " +
                        "replace the existing chain ({0}: {1}) with " +
                        "the working chain ({2}: {3}).",
                        BlockChain.Id,
                        BlockChain.Tip,
                        wId,
                        workspace.Tip
                    );

                    renderSwap = BlockChain.Swap(workspace, render: render);
                }

                foreach (Guid chainId in chainIds)
                {
                    if (!chainId.Equals(BlockChain.Id))
                    {
                        _logger.Verbose("Delete an unused chain: {ChainId}", chainId);
                        wStore.DeleteChainId(chainId);
                    }
                }

                _logger.Verbose("Remaining chains: {@ChainIds}", wStore.ListChainIds());
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
            _logger.Debug("Starts to execute actions of {0} blocks.", totalCount);
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
                    transactions.Sum(tx => tx.Actions.Count);

                _logger.Debug("Executed actions in the block {0}.", block.Hash);
                progress?.Report(new ActionExecutionState()
                {
                    TotalBlockCount = totalCount,
                    ExecutedBlockCount = ++count,
                    ExecutedBlockHash = block.Hash,
                });
            }

            _logger.Debug("Finished to execute actions.");

            TimeSpan spent = DateTimeOffset.Now - executionStarted;
            _logger.Verbose(
                "Executed totally {0} blocks, {1} txs, {2} actions during {3}",
                totalCount,
                actionsCount,
                txsCount,
                spent);
        }
    }
}
