#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blocks;

namespace Libplanet.Net
{
    public partial class Swarm<T>
    {
        private readonly ConcurrentDictionary<BoundPeer, int> _processBlockDemandSessions;

        private async Task ConsumeBlockCandidates(
            CancellationToken cancellationToken)
        {
            var checkInterval = TimeSpan.FromMilliseconds(10);
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
                            root.Index,
                            root.Hash,
                            tip.Index,
                            tip.Hash);
                        _ = BlockCandidateProcess(
                            branch,
                            cancellationToken);
                        BlockAppended.Set();
                    }
                }
                else
                {
                    await Task.Delay(checkInterval, cancellationToken);
                    continue;
                }

                BlockCandidateTable.Cleanup(IsBlockNeeded);
            }
        }

        private bool BlockCandidateProcess(
            Branch<T> candidate,
            CancellationToken cancellationToken)
        {
            BlockChain<T> synced = null;
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
                    evaluateActions: true);
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

            var canonComparer = BlockChain.Policy.CanonicalChainComparer;

            if (synced is { } syncedB
                && !syncedB.Id.Equals(BlockChain?.Id)
                && (canonComparer.Compare(BlockChain.Tip, syncedB.Tip) < 0)
            )
            {
                _logger.Debug(
                    "Swapping chain {ChainIdA} with chain {ChainIdB}...",
                    BlockChain.Id,
                    synced.Id
                );
                renderSwap = BlockChain.Swap(
                    synced,
                    render: true,
                    stateCompleters: null);
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

        private BlockChain<T> AppendPreviousBlocks(
            BlockChain<T> blockChain,
            Branch<T> candidate,
            bool evaluateActions)
        {
             BlockChain<T> workspace = blockChain;
             List<Guid> scope = new List<Guid>();
             bool renderActions = evaluateActions;
             bool renderBlocks = true;

             Block<T> oldTip = workspace.Tip;
             Block<T> newTip = candidate.Blocks.Last();
             List<Block<T>> blocks = candidate.Blocks.ToList();
             Block<T> branchpoint = FindBranchpoint(oldTip, newTip, blocks);

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
                 renderActions = false;
                 renderBlocks = false;
                 scope.Add(workspace.Id);
                 _logger.Debug(
                     "Fork finished. at {MethodName}()",
                     nameof(AppendPreviousBlocks)
                 );
             }

             if (!(workspace.Tip is null) &&
                 !workspace.Tip.Hash.Equals(blocks.First().PreviousHash))
             {
                 blocks = blocks.Skip(1).ToList();
             }

             try
             {
                 foreach (var block in blocks)
                 {
                     workspace.Append(
                         block,
                         evaluateActions: evaluateActions,
                         renderBlocks: renderBlocks,
                         renderActions: renderActions);
                 }
             }
             catch (Exception)
             {
                 _logger.Debug(
                     "Delete Chain Id: {ChainId}",
                     workspace.Id
                 );

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

        private Block<T> FindBranchpoint(Block<T> oldTip, Block<T> newTip, List<Block<T>> newBlocks)
        {
            while (oldTip is Block<T> && oldTip.Index > newTip.Index &&
                   oldTip.PreviousHash is { } aPrev)
            {
                oldTip = BlockChain[aPrev];
            }

            while (newTip is Block<T> && newTip.Index > oldTip.Index &&
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
            IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;

            int sessionId = sessionRandom.Next();

            if (canonComparer.Compare(demand, BlockChain.Tip) <= 0)
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
            BlockChain<T> blockChain,
            BlockHeader stop,
            int logSessionId,
            CancellationToken cancellationToken)
        {
            var sessionRandom = new Random();
            int subSessionId = sessionRandom.Next();
            BlockLocator locator = blockChain.GetBlockLocator(Options.BranchpointThreshold);
            Block<T> tip = blockChain.Tip;

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

            IAsyncEnumerable<Block<T>> blocksAsync = GetBlocksAsync(
                peer,
                hashes.Select(pair => pair.Item2),
                cancellationToken);
            try
            {
                var branch = new Branch<T>(await blocksAsync.ToArrayAsync(cancellationToken));
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
