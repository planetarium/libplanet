using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusReactor<T> : IReactor
        where T : IAction, new()
    {
        private readonly int requestBlockTimeoutSeconds = 1;

        private readonly Codec _codec = new Codec();

        private RoutingTable _swarmRoutingTable;
        private RoutingTable _consensusRoutingTable;
        private ITransport _swarmTransport;
        private ITransport _consensusTransport;
        private ConsensusContext<T> _context;
        private PrivateKey _privateKey;
        private ILogger _logger;

        public ConsensusReactor(
            RoutingTable swarmRoutingTable,
            RoutingTable consensusRoutingTable,
            ITransport swarmTransport,
            ITransport consensusTransport,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            long nodeId,
            List<PublicKey>? validators)
        {
            _swarmTransport = swarmTransport;
            _consensusTransport = consensusTransport;

            _swarmRoutingTable = swarmRoutingTable;
            _consensusRoutingTable = consensusRoutingTable;

            _logger = Log
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
            _privateKey = privateKey;
            _context = new ConsensusContext<T>(
                nodeId,
                privateKey,
                validators ?? blockChain.Policy.GetValidators().ToList(),
                blockChain);
        }

        internal AsyncManualResetEvent GetVoteHoldingHandle => _context.VoteHolding;

        internal AsyncManualResetEvent GetRecommitFailedHandle => _context.CommitFailed;

        public void Dispose()
        {
            // Block Transport will be disposed in Swarm
            _consensusTransport.Dispose();
        }

        public VoteSet? VoteSetOf(long height)
        {
            Dictionary<long, VoteSet?> voteSets = _context.VoteSets;
            if (voteSets.ContainsKey(height))
            {
                return voteSets[height];
            }

            return null;
        }

        public async Task<List<Task>> StartAsync(CancellationToken ctx)
        {
            var tasks = new List<Task>();
            _consensusTransport.ProcessMessageHandler.Register(ProcessMessageHandler);
            tasks.Add(_consensusTransport.StartAsync(ctx));
            await _consensusTransport.WaitForRunningAsync();
            tasks.Add(RequestBlockInVoteHolding());
            tasks.Add(RecommittingFailedRound());

            return tasks;
        }

        public async Task StopAsync(CancellationToken ctx)
        {
            await _consensusTransport.StopAsync(TimeSpan.FromMilliseconds(10), ctx);
        }

        public async Task ReceivedMessage(ConsensusMessage message)
        {
             HandleMessage(message);
             await Task.Yield();
        }

        public void HandleMessage(ConsensusMessage message)
        {
            Log.Debug(
                "NodeID: {Id}, Height: {Height}, Round: {Round}, " +
                "State: {State}, HandleMessage: {@Message},",
                _context.NodeId,
                _context.Height,
                _context.Round,
                _context.CurrentRoundContext.State.GetType().ToString(),
                message);

            ConsensusMessage? res = _context.HandleMessage(message);

            if (res == null)
            {
                return;
            }

            res.Remote = _consensusTransport.AsPeer;
            BroadcastMessage(res);
        }

        public void Propose(BlockHash blockHash)
        {
            if (_context.CurrentRoundContext.LeaderElection() != _context.NodeId)
            {
                return;
            }

            Log.Debug(
                "Propose Block: {Hash}, Proposer: {NodeId}, Height: {Height}, Round: {Round}",
                blockHash,
                _context.NodeId,
                _context.Height,
                _context.Round);
            _context.CurrentRoundContext.BlockHash = blockHash;
            var propose = new ConsensusPropose(
                _context.NodeId,
                _context.Height,
                _context.Round,
                blockHash)
            {
                Remote = _consensusTransport.AsPeer,
            };

            BroadcastMessage(propose);
        }

        public override string ToString()
        {
            return _context.ToString();
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            _consensusTransport.BroadcastMessage(_consensusRoutingTable.Peers, message);
            HandleMessage(message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                case ConsensusMessage consensusMessage:
                    await ReplyMessagePongAsync(consensusMessage);
                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        /// <summary>
        /// Send a <see cref="Messages.GetBlocks"/> request for proposed <see cref="Block{T}"/> in
        /// <see cref="ConsensusContext{T}.CurrentRoundContext"/> to neighbors.
        /// </summary>
        /// <returns>returns null if neighbors also don't have block or any network failure (e.g.
        /// Timeout) or returns the unmarshalled <see cref="Block{T}"/>.</returns>
        private async Task<Block<T>?> RequestCurrentRoundBlock()
        {
            // This will not return the same neighbor with MessageRoutingTable
            var neighbors = _swarmRoutingTable.PeersToBroadcast(null);
            Message? blockMessage = null;
            var sendingMessage = new GetBlocks(new List<BlockHash>()
            {
                _context.CurrentRoundContext.BlockHash,
            })
            {
                Remote = _swarmTransport.AsPeer,
            };

            foreach (var peer in neighbors)
            {
                try
                {
                    blockMessage = await _swarmTransport.SendMessageAsync(
                        peer,
                        sendingMessage,
                        TimeSpan.FromSeconds(requestBlockTimeoutSeconds),
                        CancellationToken.None);

                    if (blockMessage is Messages.Blocks)
                    {
                        break;
                    }
                }
                catch (CommunicationFailException)
                {
                    blockMessage = null;
                }
            }

            if (!(blockMessage is Messages.Blocks))
            {
                return null;
            }

            var marshaled = blockMessage.DataFrames.Last();
            var block =
                BlockMarshaler.UnmarshalBlock<T>(
                    _context.HashAlgorithm,
                    (Bencodex.Types.Dictionary)_codec.Decode(marshaled));

            return block;
        }

        /// <summary>
        /// A <see cref="Task"/> for requesting block while the state of node is in
        /// <see cref="PreVoteState{T}"/>, however, node does not have the proposed
        /// <see cref="Block{T}"/> to validate and vote.
        /// </summary>
        /// <remarks>This <see cref="Task"/> will be triggered when the
        /// <see cref="ConsensusContext{T}.VoteHolding"/> is set.</remarks>
        private async Task RequestBlockInVoteHolding()
        {
            while (true)
            {
                await _context.VoteHolding.WaitAsync();

                await Task.Delay(50);

                _logger.Debug(
                    "{MethodName}: Waiting for Block for voting... Requesting" +
                    " Round #{Round}, Height #{Height} Block #{Block} from neighbors...",
                    nameof(RequestBlockInVoteHolding),
                    _context.CurrentRoundContext.Round,
                    _context.CurrentRoundContext.Height,
                    _context.CurrentRoundContext.BlockHash);

                var block = await RequestCurrentRoundBlock();

                if (block is null)
                {
                    continue;
                }

                _context.PutBlockToStore(block);

                HandleMessage(new ConsensusVote(
                    _context.SignVote(
                        _context.CurrentRoundContext.Voting(VoteFlag.Absent))));

                _context.VoteHolding.Reset();
            }
        }

        /// <summary>
        /// A <see cref="Task"/> for requesting failed commit block from neighbors and recommit.
        /// </summary>
        /// <remarks>This <see cref="Task"/> will be triggered when the
        /// <see cref="ConsensusContext{T}.CommitFailed"/> is set.</remarks>
        private async Task RecommittingFailedRound()
        {
            while (true)
            {
                await _context.CommitFailed.WaitAsync();

                await Task.Delay(50);

                _logger.Error(
                    "{MethodName}: Caught Commit failure. In Round #{Round}, " +
                    "Height #{Height}, with Block {BlockHash}. Attempt to getting block " +
                    "from neighbors...",
                    nameof(RecommittingFailedRound),
                    _context.CurrentRoundContext.Round,
                    _context.CurrentRoundContext.Height,
                    _context.CurrentRoundContext.BlockHash);

                Block<T>? block;
                var targetHash = _context.CurrentRoundContext.BlockHash;
                var targetHeight = _context.CurrentRoundContext.Height;

                // This order is intended to test recommitting in Unit Test.
                if (_context.ContainsBlock(targetHash))
                {
                    block = _context.GetBlockFromStore(targetHash);
                }
                else
                {
                    block = await RequestCurrentRoundBlock();
                }

                if (block is null)
                {
                    continue;
                }

                _context.PutBlockToStore(block);

                _context.CommitBlock(
                    targetHeight,
                    targetHash);

                _context.CommitFailed.Reset();
            }
        }

        private async Task ReplyMessagePongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _consensusTransport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
