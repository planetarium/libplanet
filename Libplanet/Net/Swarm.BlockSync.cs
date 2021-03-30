using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Nito.AsyncEx;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        /// <summary>
        /// Information of <see cref="Swarm{T}"/>'s demand for new blocks.
        /// It is null when the <see cref="Swarm{T}"/> does not have any block to demand.
        /// <seealso cref="BlockDemand"/>
        /// </summary>
        public BlockDemand? BlockDemand { get; private set; }

        internal AsyncAutoResetEvent FillBlocksAsyncStarted { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent FillBlocksAsyncFailed { get; } = new AsyncAutoResetEvent();

        internal AsyncAutoResetEvent ProcessFillBlocksFinished { get; } = new AsyncAutoResetEvent();

        private async Task ProcessFillBlocks(
            TimeSpan timeout,
            CancellationToken cancellationToken
        )
        {
            TimeSpan aSecond = TimeSpan.FromSeconds(1);
            IComparer<BlockPerception> canonComparer = BlockChain.Policy.CanonicalChainComparer;
            while (!cancellationToken.IsCancellationRequested)
            {
                if (!(BlockDemand is { } blockDemand) ||
                    canonComparer.Compare(
                        BlockChain.PerceiveBlock(BlockDemand?.Header),
                        BlockChain.PerceiveBlock(BlockChain.Tip)
                    ) <= 0)
                {
                    await Task.Delay(1, cancellationToken);
                    continue;
                }

                NewDemand:
                BoundPeer peer = blockDemand.Peer;
                var hash = new HashDigest<SHA256>(blockDemand.Header.Hash.ToArray());
                const string startLogMsg =
                    "Got a new " + nameof(BlockDemand) + " from {Peer}; started to fetch " +
                    "the block #{BlockIndex} {BlockHash}...";
                _logger.Debug(startLogMsg, peer, blockDemand.Header.Index, hash);

                try
                {
                    TimeSpan demandCheckInterval = timeout.Divide(2);
                    Task task = SyncPreviousBlocksAsync(
                        BlockChain,
                        peer,
                        hash,
                        null,
                        demandCheckInterval,
                        0,
                        cancellationToken
                    );
                    while (!task.IsCompleted)
                    {
                        await Task.WhenAny(task, Task.Delay(demandCheckInterval));
                        if (!task.IsCompleted &&
                            BlockDemand is { } currentDemand &&
                            !blockDemand.Equals(currentDemand) &&
                            canonComparer.Compare(
                                BlockChain.PerceiveBlock(BlockDemand?.Header),
                                BlockChain.PerceiveBlock(BlockChain.Tip)
                            ) > 0)
                        {
                            const string cancelLogMsg =
                                "Cancelled to sync block(s) from {Peer}, " +
                                "because the demand has been updated.";
                            _logger.Debug(cancelLogMsg, peer);
#pragma warning disable S907
                            goto NewDemand;
#pragma warning restore S907
                        }

                        demandCheckInterval = demandCheckInterval.Divide(2);
                        demandCheckInterval = demandCheckInterval >= aSecond
                            ? demandCheckInterval
                            : aSecond;
                    }

                    _logger.Debug(
                        "Synced block(s) from {Peer}; broadcast them to neighbors...",
                        peer
                    );

                    // FIXME: Clean up events
                    BlockReceived.Set();
                    BlockAppended.Set();
                    BroadcastBlock(peer.Address, BlockChain.Tip);
                }
                catch (TimeoutException)
                {
                    const string msg =
                        "Timeout occurred during " + nameof(ProcessFillBlocks) + "() from {Peer}.";
                    _logger.Debug(msg, peer);
                }
                catch (InvalidBlockIndexException ibie)
                {
                    const string msg =
                        nameof(InvalidBlockIndexException) + " occurred during " +
                        nameof(ProcessFillBlocks) + "() from {Peer}: {Exception}";
                    _logger.Warning(ibie, msg, peer, ibie);
                }
                catch (Exception e)
                {
                    const string msg =
                        "Unexpected exception occurred during " + nameof(ProcessFillBlocks) +
                        "() from {Peer}: {Exception}";
                    _logger.Error(e, msg, peer, e);
                }
                finally
                {
                    using (await _blockSyncMutex.LockAsync(cancellationToken))
                    {
                        _logger.Debug($"{nameof(ProcessFillBlocks)}() finished.");
                        if (BlockDemand.Equals(blockDemand))
                        {
                            _logger.Debug($"Reset {nameof(BlockDemand)}...");
                            BlockDemand = null;
                        }

                        ProcessFillBlocksFinished.Set();
                    }
                }
            }
        }

        private async Task SyncPreviousBlocksAsync(
            BlockChain<T> blockChain,
            BoundPeer peer,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            TimeSpan dialTimeout,
            long totalBlockCount,
            CancellationToken cancellationToken
        )
        {
            long previousTipIndex = blockChain.Tip?.Index ?? -1;
            BlockChain<T> synced = null;

            try
            {
                long currentTipIndex = blockChain.Tip?.Index ?? -1;
                long receivedBlockCount = currentTipIndex - previousTipIndex;

                FillBlocksAsyncStarted.Set();
                synced = await FillBlocksAsync(
                    peer,
                    blockChain,
                    stop,
                    progress,
                    totalBlockCount,
                    receivedBlockCount,
                    true,
                    cancellationToken
                );
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
                    && (!(blockChain.Tip is { } tip && syncedB.Tip is { } syncedTip)
                        || canonComparer.Compare(
                            blockChain.PerceiveBlock(tip),
                            blockChain.PerceiveBlock(
                                syncedTip,
                                syncedB.PerceiveBlock(syncedTip).PerceivedTime
                            )
                        ) < 0
                    )
                )
                {
                    blockChain.Swap(
                        synced,
                        render: true,
                        stateCompleters: null
                    );
                }
            }
        }

        private async Task<BlockChain<T>> FillBlocksAsync(
            BoundPeer peer,
            BlockChain<T> blockChain,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            long totalBlockCount,
            long receivedBlockCount,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            const string fname = nameof(FillBlocksAsync);
            BlockChain<T> workspace = blockChain;
            var scope = new List<Guid>();
            bool renderActions = evaluateActions;
            bool renderBlocks = true;

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    Block<T> tip = workspace?.Tip;

                    _logger.Debug("Trying to find branchpoint...");
                    BlockLocator locator = workspace.GetBlockLocator();
                    _logger.Debug("Locator's count: {LocatorCount}", locator.Count());
                    IAsyncEnumerable<Tuple<long, HashDigest<SHA256>>> hashesAsync =
                        GetBlockHashes(peer, locator, stop, cancellationToken);
                    IEnumerable<Tuple<long, HashDigest<SHA256>>> hashes =
                        await hashesAsync.ToArrayAsync();

                    if (!hashes.Any())
                    {
                        _logger.Debug(
                            "Peer [{0}] didn't return any hashes; ignored.",
                            peer.Address.ToHex()
                        );
                        return workspace;
                    }

                    hashes.First().Deconstruct(
                        out long branchIndex,
                        out HashDigest<SHA256> branchPoint
                    );

                    _logger.Debug(
                        "Branch point is #{BranchIndex} {BranchHash}.",
                        branchIndex,
                        branchPoint
                    );

                    if (tip is null || branchPoint.Equals(tip.Hash))
                    {
                        _logger.Debug("It doesn't need to fork.");
                    }
                    else if (!workspace.ContainsBlock(branchPoint))
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
                            branchPoint,
                            workspace.Genesis.Hash,
                            msg);
                    }
                    else
                    {
                        _logger.Debug("Forking needed. Trying to fork...");
                        workspace = workspace.Fork(branchPoint);
                        Guid workChainId = workspace.Id;
                        scope.Add(workChainId);
                        renderActions = false;
                        renderBlocks = false;
                        _logger.Debug("Forking complete.");
                    }

                    if (!(workspace.Tip is null))
                    {
                        hashes = hashes.Skip(1);
                    }

                    _logger.Debug("Trying to fill up previous blocks...");

                    var hashesAsArray =
                        hashes as Tuple<long, HashDigest<SHA256>>[] ?? hashes.ToArray();
                    if (!hashesAsArray.Any())
                    {
                        break;
                    }

                    int hashCount = hashesAsArray.Count();
                    _logger.Debug(
                        $"Required hashes (count: {hashCount}). " +
                        $"(tip: {workspace.Tip?.Hash})"
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
                        _logger.Debug(
                            "Try to append a block #{BlockIndex} {BlockHash}...",
                            block.Index,
                            block.Hash
                        );

                        cancellationToken.ThrowIfCancellationRequested();

                        workspace.Append(
                            block,
                            DateTimeOffset.UtcNow,
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
                        _logger.Debug(
                            "Block #{BlockIndex} {BlockHash} was appended.",
                            block.Index,
                            block.Hash
                        );
                    }

                    receivedBlockCount += receivedBlockCountCurrentLoop;
                    var isEndedFirstTime = receivedBlockCount == receivedBlockCountCurrentLoop &&
                                           receivedBlockCount < FindNextHashesChunkSize - 1;

                    if (receivedBlockCountCurrentLoop < FindNextHashesChunkSize && isEndedFirstTime)
                    {
                        _logger.Debug(
                            "Got all blocks from Peer [{Peer}]. " +
                            "(Count: {Count}, TipIndex: #{Index}, TipHash: {Hash})",
                            peer.Address.ToHex(),
                            receivedBlockCountCurrentLoop,
                            workspace.Tip.Index,
                            workspace.Tip.Hash
                        );
                        break;
                    }
                }
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    $"Unexpected error occurred during {fname}(): {{Exception}}",
                    e);
                if (workspace?.Id is Guid workspaceId && scope.Contains(workspaceId))
                {
                    _store.DeleteChainId(workspaceId);
                }

                throw;
            }
            finally
            {
                _logger.Debug(
                    $"{fname}() completed (chain ID: {{ChainId}}, tip: #{{TipIndex}} {{TipHash}}).",
                    workspace?.Id,
                    workspace?.Tip?.Index,
                    workspace?.Tip?.Hash);
                foreach (var id in scope.Where(guid => guid != workspace?.Id))
                {
                    _store.DeleteChainId(id);
                }
            }

            return workspace;
        }
    }
}
