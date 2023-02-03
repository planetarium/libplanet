#nullable disable
using System;
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
        private async Task ConsumeBlockCandidates(
            CancellationToken cancellationToken)
        {
            var checkInterval = TimeSpan.FromMilliseconds(10);
            while (!cancellationToken.IsCancellationRequested)
            {
                if (BlockCandidateTable.Any())
                {
                    BlockHeader tipHeader = BlockChain.Tip.Header;
                    SortedList<long, Block<T>> blocks =
                        BlockCandidateTable.GetCurrentRoundCandidate(tipHeader);
                    if (!(blocks is null) && blocks.Count > 0)
                    {
                        var latest = blocks.Last();
                        _logger.Debug(
                            "{MethodName} has started. Excerpt: #{BlockIndex} {BlockHash} " +
                            "Count of {BlockCandidateTable}: {Count}",
                            nameof(ConsumeBlockCandidates),
                            latest.Value.Index,
                            latest.Value.Hash,
                            nameof(BlockCandidateTable),
                            BlockCandidateTable.Count);
                        _ = BlockCandidateProcess(
                            blocks,
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
            SortedList<long, Block<T>> candidate,
            CancellationToken cancellationToken)
        {
            BlockChain<T> synced = null;
            System.Action renderSwap = () => { };
            const string methodName =
                nameof(Swarm<T>) + "<T>." + nameof(BlockCandidateProcess) + "()";
            try
            {
                FillBlocksAsyncStarted.Set();
                _logger.Debug(
                    methodName + " starts to append. Current tip: #{BlockIndex}.",
                    BlockChain.Tip.Index
                );
                synced = AppendPreviousBlocks(
                    blockChain: BlockChain,
                    candidate: candidate,
                    evaluateActions: true);
                ProcessFillBlocksFinished.Set();
                _logger.Debug(
                    methodName + " finished appending blocks. Synced tip: #{BlockIndex}.",
                    synced.Tip.Index
                );
            }
            catch (Exception e)
            {
                _logger.Error(e, methodName + " failed to append blocks.");
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
                    "Swapped chain {ChainIdA} with chain {ChainIdB}.",
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
            SortedList<long, Block<T>> candidate,
            bool evaluateActions)
        {
             BlockChain<T> workspace = blockChain;
             List<Guid> scope = new List<Guid>();
             bool renderActions = evaluateActions;
             bool renderBlocks = true;

             Block<T> oldTip = workspace.Tip;
             Block<T> newTip = candidate.Last().Value;
             List<Block<T>> blocks = candidate.Values.ToList();
             Block<T> branchpoint = FindBranchpoint(oldTip, newTip, blocks);

             if (oldTip is null || branchpoint.Equals(oldTip))
             {
                 _logger.Debug(
                     "No need to fork. at {MethodName}",
                     nameof(AppendPreviousBlocks)
                 );
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
                     "Trying to fork... at {MethodName}",
                     nameof(AppendPreviousBlocks)
                 );
                 workspace = workspace.Fork(branchpoint.Hash);
                 renderActions = false;
                 renderBlocks = false;
                 scope.Add(workspace.Id);
                 _logger.Debug(
                     "Fork finished. at {MethodName}",
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
                     "Completed (chain ID: {ChainId}, tip: #{TipIndex} {TipHash}). at {MethodName}",
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
            var sessionRandom = new Random();
            IComparer<IBlockExcerpt> canonComparer = BlockChain.Policy.CanonicalChainComparer;

            int sessionId = sessionRandom.Next();

            BoundPeer peer = demand.Peer;

            if (canonComparer.Compare(demand, BlockChain.Tip) <= 0)
            {
                return false;
            }

            const string downloadStartLogMsg =
                "{SessionId}: Downloading blocks from {Peer}; started " +
                "to fetch the block #{BlockIndex} {BlockHash} at {MethodName}.";
            _logger.Debug(
                downloadStartLogMsg,
                sessionId,
                peer,
                demand.Header.Index,
                demand.Header.Hash,
                nameof(ProcessBlockDemandAsync));

            try
            {
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
                const string msg =
                    "{SessionId}: Timeout occurred during " + nameof(ProcessBlockDemandAsync) +
                    "() from {Peer}.";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (InvalidBlockIndexException)
            {
                const string msg =
                    "{SessionId}: {Peer} sent an invalid block index.";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (InvalidBlockHashException)
            {
                const string msg =
                    "{SessionId}: {Peer} sent an invalid block hash.";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (InvalidBlockException)
            {
                const string msg =
                    "{SessionId}: {Peer} sent an invalid block.";
                _logger.Debug(msg, sessionId, peer);
                return false;
            }
            catch (Exception e)
            {
                const string msg =
                    "{SessionId}: Unexpected exception occurred during " +
                    nameof(ProcessBlockDemandAsync) + "() from {Peer}: {Exception}";
                _logger.Error(e, msg, sessionId, peer, e);
                return false;
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
            var blocks = await blocksAsync.ToArrayAsync(cancellationToken);
            BlockCandidateTable.Add(tip.Header, blocks);
            return true;
        }
    }
}
