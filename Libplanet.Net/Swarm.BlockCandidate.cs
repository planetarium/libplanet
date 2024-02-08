using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Net
{
    public partial class Swarm
    {
        private readonly ConcurrentDictionary<BoundPeer, int> _processBlockDemandSessions;

        private async Task ConsumeBlockCandidates(
            TimeSpan? checkInterval = null,
            bool render = true,
            IProgress<BlockSyncState>? progress = null,
            CancellationToken cancellationToken = default)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                if (BlockCandidateTable.Count > 0)
                {
                    BlockHeader tipHeader = BlockChain.Tip.Header;
                    if (BlockCandidateTable.GetCurrentRoundCandidate(tipHeader) is { } branch)
                    {
                        var root = branch.Blocks.First();
                        var tip = branch.Blocks.Last();
                        _logger.Information(
                            "Consuming branch with root #{RootIndex} {RootHash} " +
                            "and tip #{TipIndex} {TipHash}",
                            root.Item1.Index,
                            root.Item1.Hash,
                            tip.Item1.Index,
                            tip.Item1.Hash);
                        _ = BlockCandidateProcess(
                            branch,
                            render,
                            progress,
                            cancellationToken);
                        BlockAppended.Set();
                    }
                }
                else if (checkInterval is { } interval)
                {
                    await Task.Delay(interval, cancellationToken);
                    continue;
                }
                else
                {
                    break;
                }

                BlockCandidateTable.Cleanup(IsBlockNeeded);
            }
        }

        private bool BlockCandidateProcess(
            Branch candidate,
            bool render,
            IProgress<BlockSyncState>? progress,
            CancellationToken cancellationToken)
        {
            BlockChain? synced = null;
            System.Action renderSwap = () => { };
            try
            {
                FillBlocksAsyncStarted.Set();
                _logger.Debug(
                    "{MethodName}() starts to append; current tip is #{Index} {Hash}",
                    nameof(BlockCandidateProcess),
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                synced = AppendPreviousBlocks(
                    blockChain: BlockChain,
                    candidate: candidate,
                    render: render,
                    progress: progress);
                ProcessFillBlocksFinished.Set();
                _logger.Debug(
                    "{MethodName}() finished appending blocks; synced tip is #{Index} {Hash}",
                    nameof(BlockCandidateProcess),
                    synced.Tip.Index,
                    synced.Tip.Hash);
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "{MethodName}() has failed to append blocks",
                    nameof(BlockCandidateProcess));
                FillBlocksAsyncFailed.Set();
                return false;
            }

            if (synced is { } syncedB
                && !syncedB.Id.Equals(BlockChain.Id)
                && BlockChain.Tip.Index < syncedB.Tip.Index)
            {
                _logger.Debug(
                    "Swapping chain {ChainIdA} with chain {ChainIdB}...",
                    BlockChain.Id,
                    synced.Id
                );
                renderSwap = BlockChain.Swap(
                    synced,
                    render: render);
                _logger.Debug(
                    "Swapped chain {ChainIdA} with chain {ChainIdB}",
                    BlockChain.Id,
                    synced.Id
                );
            }

            renderSwap();
            BroadcastBlock(BlockChain.Tip);
            return true;
        }

        private BlockChain AppendPreviousBlocks(
            BlockChain blockChain,
            Branch candidate,
            bool render,
            IProgress<BlockSyncState>? progress)
        {
            BlockChain workspace = blockChain;
            List<Guid> scope = new List<Guid>();
            bool forked = false;

            Block oldTip = workspace.Tip;
            Block newTip = candidate.Blocks.Last().Item1;
            List<(Block, BlockCommit?)> blocks = candidate.Blocks.ToList();
            Block branchpoint = FindBranchpoint(
                 oldTip,
                 newTip,
                 blocks.Select(pair => pair.Item1).ToList());

            if (oldTip is null || branchpoint.Equals(oldTip))
            {
                _logger.Debug(
                    "No need to fork. at {MethodName}()",
                    nameof(AppendPreviousBlocks));
            }
            else if (!workspace.ContainsBlock(branchpoint.Hash))
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
                    msg,
                    branchpoint.Hash,
                    workspace.Genesis.Hash);
            }
            else
            {
                _logger.Debug(
                    "Trying to fork... at {MethodName}()",
                    nameof(AppendPreviousBlocks)
                );
                workspace = workspace.Fork(branchpoint.Hash);
                forked = true;
                scope.Add(workspace.Id);
                _logger.Debug(
                    "Fork finished. at {MethodName}()",
                    nameof(AppendPreviousBlocks)
                );
            }

            if (!(workspace.Tip is null) &&
                !workspace.Tip.Hash.Equals(blocks.First().Item1.PreviousHash))
            {
                blocks = blocks.Skip(1).ToList();
            }

            try
            {
                var actionExecutionState = new ActionExecutionState()
                {
                    TotalBlockCount = blocks.Count,
                    ExecutedBlockCount = 0,
                };
                long txsCount = 0, actionsCount = 0;
                long verifiedBlockCount = 0;

                foreach (var (block, commit) in blocks)
                {
                    workspace.Append(block, commit, render: render && !forked);
                    actionExecutionState.ExecutedBlockCount += 1;
                    actionExecutionState.ExecutedBlockHash = block.Hash;
                    IEnumerable<Transaction>
                        transactions = block.Transactions.ToImmutableArray();
                    txsCount += transactions.Count();
                    actionsCount += transactions.Sum(
                        tx => tx.Actions is { } actions ? actions.Count : 1L);
                    progress?.Report(actionExecutionState);
                    progress?.Report(
                        new BlockVerificationState
                        {
                            TotalBlockCount = blocks.Count,
                            VerifiedBlockCount = ++verifiedBlockCount,
                            VerifiedBlockHash = block.Hash,
                        });
                }
            }
            catch (Exception e)
            {
                const string dbgMsg =
                    "An exception occurred while appending a block " +
                    "to a workspace chain; deleting workspace chain {ChainId}";
                _logger.Debug(e, dbgMsg, workspace.Id);

                if (workspace?.Id is Guid workspaceId && scope.Contains(workspaceId))
                {
                    _store.DeleteChainId(workspaceId);
                }

                throw;
            }
            finally
            {
                foreach (var id in scope.Where(guid => guid != workspace?.Id))
                {
                    _store.DeleteChainId(id);
                }

                _logger.Debug(
                    "Completed (chain ID: {ChainId}, tip: #{TipIndex} {TipHash}). " +
                    "at {MethodName}()",
                    workspace?.Id,
                    workspace?.Tip?.Index,
                    workspace?.Tip?.Hash,
                    nameof(AppendPreviousBlocks)
                );
            }

            return workspace;
        }

        private Block FindBranchpoint(Block oldTip, Block newTip, List<Block> newBlocks)
        {
            while (oldTip is Block && oldTip.Index > newTip.Index &&
                   oldTip.PreviousHash is { } aPrev)
            {
                oldTip = BlockChain[aPrev];
            }

            while (newTip is Block && newTip.Index > oldTip.Index &&
                   newTip.PreviousHash is { } bPrev)
            {
                try
                {
                    newTip = newBlocks.Single(x => x.Hash.Equals(bPrev));
                }
                catch (ArgumentNullException)
                {
                    newTip = BlockChain[bPrev];
                }
                catch (InvalidOperationException)
                {
                    newTip = BlockChain[bPrev];
                }
            }

            if (oldTip is null || newTip is null || oldTip.Index != newTip.Index)
            {
                throw new ArgumentException(
                    "Some previous blocks of two blocks are orphan.",
                    nameof(oldTip)
                );
            }

            while (oldTip.Index >= 0)
            {
                if (oldTip.Equals(newTip))
                {
                    return oldTip;
                }

                if (oldTip.PreviousHash is { } aPrev &&
                    newTip.PreviousHash is { } bPrev)
                {
                    oldTip = BlockChain[aPrev];
                    try
                    {
                        newTip = newBlocks.Single(x => x.Hash.Equals(bPrev));
                    }
                    catch (ArgumentNullException)
                    {
                        newTip = BlockChain[bPrev];
                    }

                    continue;
                }

                break;
            }

            throw new ArgumentException(
                "Two blocks do not have any ancestors in common.",
                nameof(oldTip)
            );
        }

        private async Task<bool> ProcessBlockDemandAsync(
            BlockDemand demand,
            CancellationToken cancellationToken)
        {
            BoundPeer peer = demand.Peer;

            if (_processBlockDemandSessions.ContainsKey(peer))
            {
                // Another task has spawned for the peer.
                return false;
            }

            var sessionRandom = new Random();

            int sessionId = sessionRandom.Next();

            if (demand.Index <= BlockChain.Tip.Index)
            {
                return false;
            }

            _logger.Debug(
                "{SessionId}: Downloading blocks from {Peer}; started " +
                "to fetch the block #{BlockIndex} {BlockHash} at {MethodName}()",
                sessionId,
                peer,
                demand.Header.Index,
                demand.Header.Hash,
                nameof(ProcessBlockDemandAsync));

            try
            {
                _processBlockDemandSessions.TryAdd(peer, sessionId);
                var result = await BlockCandidateDownload(
                    peer: peer,
                    blockChain: BlockChain,
                    stop: demand.Header,
                    logSessionId: sessionId,
                    cancellationToken: cancellationToken);

                BlockReceived.Set();
                return result;
            }
            catch (TimeoutException)
            {
                _logger.Debug(
                    "{SessionId}: Timeout occurred during {MethodName}() from {Peer}",
                    sessionId,
                    nameof(ProcessBlockDemandAsync),
                    peer);
                return false;
            }
            catch (InvalidBlockIndexException)
            {
                const string msg =
                    "{SessionId}: {Peer} sent an invalid block index";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (InvalidBlockHashException)
            {
                const string msg =
                    "{SessionId}: {Peer} sent an invalid block hash";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (InvalidBlockException)
            {
                const string msg =
                    "{SessionId}: {Peer} sent an invalid block";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (Exception e)
            {
                const string msg =
                    "{SessionId}: Unexpected exception occurred during " +
                    nameof(ProcessBlockDemandAsync) + "() from {Peer}";
                _logger.Error(e, msg, sessionId, peer);
                return false;
            }
            finally
            {
                // Maybe demand table can be cleaned up here, but it will be eventually
                // cleaned up in FillBlocksAsync()
                _processBlockDemandSessions.TryRemove(peer, out _);
            }
        }

        private async Task<bool> BlockCandidateDownload(
            BoundPeer peer,
            BlockChain blockChain,
            BlockHeader stop,
            int logSessionId,
            CancellationToken cancellationToken)
        {
            var sessionRandom = new Random();
            int subSessionId = sessionRandom.Next();
            BlockLocator locator = blockChain.GetBlockLocator(Options.BranchpointThreshold);
            Block tip = blockChain.Tip;

            IAsyncEnumerable<Tuple<long, BlockHash>> hashesAsync = GetBlockHashes(
                peer: peer,
                locator: locator,
                stop: stop.Hash,
                timeout: null,
                logSessionIds: (logSessionId, subSessionId),
                cancellationToken: cancellationToken);
            IEnumerable<Tuple<long, BlockHash>> hashes = await hashesAsync.ToArrayAsync();

            if (!hashes.Any())
            {
                FillBlocksAsyncFailed.Set();
                return false;
            }

            IAsyncEnumerable<(Block, BlockCommit?)> blocksAsync = GetBlocksAsync(
                peer,
                hashes.Select(pair => pair.Item2),
                cancellationToken);
            try
            {
                var branch = new Branch(await blocksAsync.ToArrayAsync(cancellationToken));
                BlockCandidateTable.Add(tip.Header, branch);
                return true;
            }
            catch (ArgumentException ae)
            {
                _logger.Error(
                    ae,
                    "An unexpected exception occurred during {FName}",
                    nameof(BlockCandidateDownload));
                return false;
            }
        }
    }
}
