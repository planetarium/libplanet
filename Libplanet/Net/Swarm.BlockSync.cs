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
            if (maximumPollPeers <= 0)
            {
                return;
            }

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
                _logger.Debug(
                    $"The chain before {nameof(PullBlocksAsync)}() : " +
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
                    $"Unexpected exception occured during {nameof(PullBlocksAsync)}(). {{e}}";
                _logger.Error(e, msg, e);
                FillBlocksAsyncFailed.Set();
            }
            finally
            {
                ProcessFillBlocksFinished.Set();
                _logger.Debug($"{nameof(PullBlocksAsync)}() has finished successfully.");
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
                    BlockDemand largest =
                        BlockDemandTable.Demands.Values.Aggregate(
                            (acc, next) =>
                                next.TotalDifficulty > acc.TotalDifficulty ? next : acc);

                    await ProcessBlockDemand(
                        largest,
                        timeout,
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

                BlockDemandTable.Cleanup(BlockChain, IsBlockNeeded);
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

        private async Task ProcessBlockDemand(
            BlockDemand demand,
            TimeSpan timeout,
            CancellationToken cancellationToken
        )
        {
            var sessionRandom = new Random();
            IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;

            int sessionId = sessionRandom.Next();

            BoundPeer peer = demand.Peer;

            try
            {
                if (canonComparer.Compare(
                    BlockChain.PerceiveBlock(demand),
                    BlockChain.PerceiveBlock(BlockChain.Tip)
                ) <= 0)
                {
                    return;
                }

                BlockHash hash = demand.Header.Hash;
                const string startLogMsg =
                    "{SessionId}: Got a new " + nameof(BlockDemand) + " from {Peer}; started " +
                    "to fetch the block #{BlockIndex} {BlockHash}...";
                _logger.Debug(startLogMsg, sessionId, peer, demand.Header.Index, hash);
                System.Action renderSwap = await SyncPreviousBlocksAsync(
                    blockChain: BlockChain,
                    peer: peer,
                    stop: hash,
                    progress: null,
                    timeout: timeout,
                    totalBlockCount: 0,
                    logSessionId: sessionId,
                    cancellationToken: cancellationToken
                );
                _logger.Debug(
                    "{SessionId}: Synced block(s) from {Peer}; broadcast them to neighbors...",
                    sessionId,
                    peer
                );

                BroadcastBlock(peer.Address, BlockChain.Tip);
                renderSwap();

                // FIXME: Clean up events
                BlockReceived.Set();
                BlockAppended.Set();

                ProcessFillBlocksFinished.Set();
            }
            catch (TimeoutException)
            {
                const string msg =
                    "{SessionId}: Timeout occurred during " + nameof(ProcessBlockDemand) +
                    "() from {Peer}.";
                _logger.Debug(msg, sessionId, peer);
            }
            catch (InvalidBlockIndexException ibie)
            {
                const string msg =
                    "{SessionId}: " + nameof(InvalidBlockIndexException) + " occurred during " +
                    nameof(ProcessBlockDemand) + "() from {Peer}: {Exception}";
                _logger.Warning(ibie, msg, sessionId, peer, ibie);
            }
            catch (Exception e)
            {
                const string msg =
                    "{SessionId}: Unexpected exception occurred during " +
                    nameof(ProcessBlockDemand) + "() from {Peer}: {Exception}";
                _logger.Error(e, msg, sessionId, peer, e);
            }
        }

        private async Task<System.Action> SyncPreviousBlocksAsync(
            BlockChain<T> blockChain,
            BoundPeer peer,
            BlockHash? stop,
            IProgress<BlockDownloadState> progress,
            TimeSpan timeout,
            long totalBlockCount,
            int logSessionId,
            CancellationToken cancellationToken
        )
        {
            long previousTipIndex = blockChain.Tip?.Index ?? -1;
            BlockChain<T> synced = null;
            System.Action renderSwap = () => { };

            try
            {
                long currentTipIndex = blockChain.Tip?.Index ?? -1;
                long receivedBlockCount = currentTipIndex - previousTipIndex;

                const string startMsg =
                    "{SessionId}: Starts " + nameof(SyncPreviousBlocksAsync) + "()...";
                _logger.Debug(startMsg, logSessionId);
                FillBlocksAsyncStarted.Set();
                synced = await SyncBlocksAsync(
                    peer,
                    blockChain,
                    stop,
                    progress,
                    totalBlockCount,
                    receivedBlockCount,
                    true,
                    timeout,
                    logSessionId,
                    cancellationToken
                );
                const string finishMsg =
                    "{SessionId}: Finished " + nameof(SyncPreviousBlocksAsync) + "().";
                _logger.Debug(finishMsg, logSessionId);
            }
            catch (Exception)
            {
                FillBlocksAsyncFailed.Set();
                throw;
            }
            finally
            {
                var canonComparer = BlockChain.Policy.CanonicalChainComparer;
                if (synced is { } syncedB
                    && !syncedB.Id.Equals(blockChain?.Id)
                    && (canonComparer.Compare(
                        blockChain.PerceiveBlock(blockChain.Tip),
                        blockChain.PerceiveBlock(syncedB.Tip)) < 0
                    )
                )
                {
                    _logger.Debug(
                        "{SessionId}: Swap the chain {ChainIdA} for the chain {ChainIdB}...",
                        logSessionId,
                        blockChain.Id,
                        synced.Id
                    );
                    renderSwap = blockChain.Swap(
                        synced,
                        render: true,
                        stateCompleters: null);
                    _logger.Debug(
                        "{SessionId}: The chain {ChainIdB} replaced {ChainIdA}",
                        logSessionId,
                        synced.Id,
                        blockChain.Id
                    );
                }
            }

            return renderSwap;
        }

#pragma warning disable MEN003
        private async Task<BlockChain<T>> SyncBlocksAsync(
            BoundPeer peer,
            BlockChain<T> blockChain,
            BlockHash? stop,
            IProgress<BlockDownloadState> progress,
            long totalBlockCount,
            long receivedBlockCount,
            bool evaluateActions,
            TimeSpan timeout,
            int logSessionId,
            CancellationToken cancellationToken
        )
        {
            var sessionRandom = new Random();
            const string fname = nameof(SyncBlocksAsync);
            BlockChain<T> workspace = blockChain;
            var scope = new List<Guid>();
            bool renderActions = evaluateActions;
            bool renderBlocks = true;

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    int subSessionId = sessionRandom.Next();
                    Block<T> tip = workspace?.Tip;

                    _logger.Debug(
                        "{SessionId}/{SubSessionId}: Trying to find branchpoint...",
                        logSessionId,
                        subSessionId
                    );
                    BlockLocator locator = workspace.GetBlockLocator(Options.BranchpointThreshold);
                    _logger.Debug(
                        "{SessionId}/{SubSessionId}: Locator's length: {LocatorLength}",
                        logSessionId,
                        subSessionId,
                        locator.Count()
                    );
                    IAsyncEnumerable<Tuple<long, BlockHash>> hashesAsync = GetBlockHashes(
                        peer: peer,
                        locator: locator,
                        stop: stop,
                        timeout: timeout,
                        logSessionIds: (logSessionId, subSessionId),
                        cancellationToken: cancellationToken
                    );
                    IEnumerable<Tuple<long, BlockHash>> hashes = await hashesAsync.ToArrayAsync();

                    if (!hashes.Any())
                    {
                        _logger.Debug(
                            "{SessionId}/{SubSessionId}: Peer {0} returned no hashes; ignored.",
                            logSessionId,
                            subSessionId,
                            peer.Address.ToHex()
                        );
                        return workspace;
                    }

                    hashes.First().Deconstruct(
                        out long branchIndex,
                        out BlockHash branchpoint
                    );

                    _logger.Debug(
                        "{SessionId}/{SubSessionId}: Branchpoint is #{BranchIndex} {BranchHash}.",
                        logSessionId,
                        subSessionId,
                        branchIndex,
                        branchpoint
                    );

                    if (tip is null || branchpoint.Equals(tip.Hash))
                    {
                        _logger.Debug(
                            "{SessionId}/{SubSessionId}: It doesn't need to fork.",
                            logSessionId,
                            subSessionId
                        );
                    }
                    else if (!workspace.ContainsBlock(branchpoint))
                    {
                        // FIXME: This behavior can unexpectedly terminate the swarm (and the game
                        // app) if it encounters a peer having a different blockchain, and therefore
                        // can be exploited to remotely shut down other nodes as well.
                        // Since the intention of this behavior is to prevent mistakes to try to
                        // connect incorrect seeds (by a user), this behavior should be limited for
                        // only seed peers.
                        var msg =
                            $"Since the genesis block is fixed to {BlockChain.Genesis} " +
                            "protocol-wise, the blockchain which does not share " +
                            "any mutual block is not acceptable.";
                        throw new InvalidGenesisBlockException(
                            branchpoint,
                            workspace.Genesis.Hash,
                            msg);
                    }
                    else
                    {
                        _logger.Debug(
                            "{SessionId}/{SubSessionId}: Needs to fork; trying to fork...",
                            logSessionId,
                            subSessionId
                        );
                        workspace = workspace.Fork(branchpoint);
                        Guid workChainId = workspace.Id;
                        scope.Add(workChainId);
                        renderActions = false;
                        renderBlocks = false;
                        _logger.Debug(
                            "{SessionId}/{SubSessionId}: Fork finished.",
                            logSessionId,
                            subSessionId
                        );
                    }

                    if (!(workspace.Tip is null))
                    {
                        hashes = hashes.Skip(1);
                    }

                    _logger.Debug(
                        "{SessionId}/{SubSessionId}: Trying to fill up previous blocks...",
                        logSessionId,
                        subSessionId
                    );

                    var hashesAsArray = hashes as Tuple<long, BlockHash>[] ?? hashes.ToArray();
                    if (!hashesAsArray.Any())
                    {
                        break;
                    }

                    int hashCount = hashesAsArray.Count();
                    _logger.Debug(
                        "{SessionId}/{SubSessionId}: Required {Hashes} hashes " +
                        "(tip: #{TipIndex} {TipHash}).",
                        logSessionId,
                        subSessionId,
                        hashCount,
                        workspace.Tip?.Index,
                        workspace.Tip?.Hash
                    );

                    totalBlockCount = Math.Max(totalBlockCount, receivedBlockCount + hashCount);

                    IAsyncEnumerable<Block<T>> blocks = GetBlocksAsync(
                        peer,
                        hashesAsArray.Select(pair => pair.Item2),
                        cancellationToken
                    );

                    var receivedBlockCountCurrentLoop = 0;
                    await foreach (Block<T> block in blocks)
                    {
                        const string startMsg =
                            "{SessionId}/{SubSessionId}: Try to append a block " +
                            "#{BlockIndex} {BlockHash}...";
                        _logger.Debug(
                            startMsg,
                            logSessionId,
                            subSessionId,
                            block.Index,
                            block.Hash
                        );

                        cancellationToken.ThrowIfCancellationRequested();

                        workspace.Append(
                            block,
                            evaluateActions: evaluateActions,
                            renderBlocks: renderBlocks,
                            renderActions: renderActions
                        );
                        receivedBlockCountCurrentLoop++;
                        progress?.Report(new BlockDownloadState
                        {
                            TotalBlockCount = totalBlockCount,
                            ReceivedBlockCount = receivedBlockCount + receivedBlockCountCurrentLoop,
                            ReceivedBlockHash = block.Hash,
                            SourcePeer = peer,
                        });
                        const string endMsg =
                            "{SessionId}/{SubSessionId}: Block #{BlockIndex} {BlockHash} " +
                            "was appended.";
                        _logger.Debug(endMsg, logSessionId, subSessionId, block.Index, block.Hash);
                    }

                    receivedBlockCount += receivedBlockCountCurrentLoop;
                    var isEndedFirstTime = receivedBlockCount == receivedBlockCountCurrentLoop &&
                                           receivedBlockCount < FindNextHashesChunkSize - 1;

                    if (receivedBlockCountCurrentLoop < FindNextHashesChunkSize && isEndedFirstTime)
                    {
                        _logger.Debug(
                            "{SessionId}/{SubSessionId}: Got {Blocks} blocks from Peer {Peer} " +
                            "(tip: #{TipIndex} {TipHash})",
                            logSessionId,
                            subSessionId,
                            receivedBlockCountCurrentLoop,
                            peer.Address.ToHex(),
                            workspace.Tip?.Index,
                            workspace.Tip?.Hash
                        );
                        break;
                    }
                }
            }
            catch (Exception e)
            {
                const string msg =
                    "{SessionId}: Unexpected error occurred during " + fname + "(): {Exception}";
                _logger.Error(e, msg, logSessionId, e);
                if (workspace?.Id is Guid workspaceId && scope.Contains(workspaceId))
                {
                    _store.DeleteChainId(workspaceId);
                }

                throw;
            }
            finally
            {
                const string msg =
                    "{SessionId}: " + fname +
                    "() completed (chain ID: {ChainId}, tip: #{TipIndex} {TipHash}).";
                _logger.Debug(
                    msg,
                    logSessionId,
                    workspace?.Id,
                    workspace?.Tip?.Index,
                    workspace?.Tip?.Hash
                );
                foreach (var id in scope.Where(guid => guid != workspace?.Id))
                {
                    _store.DeleteChainId(id);
                }
            }

            return workspace;
        }
#pragma warning restore MEN003
    }
}
