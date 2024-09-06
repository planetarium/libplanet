#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;

namespace Libplanet.Net
{
    public partial class Swarm
    {
        private readonly ConcurrentDictionary<BoundPeer, int> _processBlockDemandSessions;

        private async Task ConsumeBlockCandidates(
            TimeSpan? checkInterval = null,
            bool render = true,
            IProgress<BlockSyncState> progress = null,
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
            IProgress<BlockSyncState> progress,
            CancellationToken cancellationToken)
        {
            try
            {
                FillBlocksAsyncStarted.Set();
                _logger.Debug(
                    "{MethodName}() starts to append; current tip is #{Index} {Hash}",
                    nameof(BlockCandidateProcess),
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                AppendBranch(
                    blockChain: BlockChain,
                    candidate: candidate,
                    render: render,
                    progress: progress,
                    cancellationToken: cancellationToken);
                ProcessFillBlocksFinished.Set();
                _logger.Debug(
                    "{MethodName}() finished appending blocks; current tip is #{Index} {Hash}",
                    nameof(BlockCandidateProcess),
                    BlockChain.Tip.Index,
                    BlockChain.Tip.Hash);
                return true;
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
        }

        private void AppendBranch(
            BlockChain blockChain,
            Branch candidate,
            bool render,
            IProgress<BlockSyncState> progress,
            CancellationToken cancellationToken = default)
        {
            Block oldTip = blockChain.Tip;
            Block branchpoint = oldTip;
            List<(Block, BlockCommit)> blocks = ExtractBlocksToAppend(branchpoint, candidate);

            if (!blocks.Any())
            {
                _logger.Debug(
                    "There are no blocks to append to block {BlockHash}",
                    branchpoint.Hash);
            }

            try
            {
                long verifiedBlockCount = 0;

                foreach (var (block, commit) in blocks)
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    if (block.ProtocolVersion < BlockMetadata.SlothProtocolVersion)
                    {
                        blockChain.AppendStateRootHashPreceded(block, commit, render: render);
                    }
                    else
                    {
                        blockChain.Append(block, commit, render: render);
                    }

                    verifiedBlockCount++;
                    progress?.Report(
                        new ActionExecutionState()
                        {
                            TotalBlockCount = blocks.Count,
                            ExecutedBlockCount = (int)verifiedBlockCount,
                            ExecutedBlockHash = block.Hash,
                        });
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
                const string dbgMsg = "An exception occurred while appending a block";
                _logger.Error(e, dbgMsg);
                throw;
            }
        }

        private List<(Block, BlockCommit)> ExtractBlocksToAppend(Block branchpoint, Branch branch)
        {
            var trimmed = new List<(Block, BlockCommit)>();
            bool matchFound = false;
            foreach (var pair in branch.Blocks)
            {
                if (matchFound)
                {
                    trimmed.Add(pair);
                }
                else
                {
                    matchFound = branchpoint.Hash.Equals(pair.Item1.Hash);
                }
            }

            return trimmed;
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
                demand.Index,
                demand.Hash,
                nameof(ProcessBlockDemandAsync));

            try
            {
                _processBlockDemandSessions.TryAdd(peer, sessionId);
                var result = await BlockCandidateDownload(
                    peer: peer,
                    blockChain: BlockChain,
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
            int logSessionId,
            CancellationToken cancellationToken)
        {
            BlockLocator locator = blockChain.GetBlockLocator();
            Block tip = blockChain.Tip;

            List<BlockHash> hashes = await GetBlockHashes(
                peer: peer,
                locator: locator,
                cancellationToken: cancellationToken);

            if (!hashes.Any())
            {
                FillBlocksAsyncFailed.Set();
                return false;
            }

            IAsyncEnumerable<(Block, BlockCommit)> blocksAsync = GetBlocksAsync(
                peer,
                hashes,
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
