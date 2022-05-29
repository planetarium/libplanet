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
        private readonly Codec _codec = new Codec();

        private RoutingTable _routingTable;
        private ITransport _transport;
        private ConsensusContext<T> _context;
        private PrivateKey _privateKey;
        private ILogger _logger;

        public ConsensusReactor(
            RoutingTable routingTable,
            ITransport transport,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            long nodeId,
            List<PublicKey>? validators)
        {
            _routingTable = routingTable;
            _transport = transport;
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

        public void Dispose()
        {
            _transport.Dispose();
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
            _transport.ProcessMessageHandler.Register(ProcessMessageHandler);
            tasks.Add(_transport.StartAsync(ctx));
            await _transport.WaitForRunningAsync();
            tasks.Add(RequestBlockInVoteHolding(_transport, _routingTable));

            return tasks;
        }

        public async Task StopAsync(CancellationToken ctx)
        {
            await _transport.StopAsync(TimeSpan.FromMilliseconds(10), ctx);
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

            res.Remote = _transport.AsPeer;
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
                Remote = _transport.AsPeer,
            };

            BroadcastMessage(propose);
        }

        public override string ToString()
        {
            return _context.ToString();
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            _transport.BroadcastMessage(_routingTable.Peers, message);
            HandleMessage(message);
        }

        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                case ConsensusMessage consensusMessage:
                    await ReplyPongAsync(consensusMessage);
                    await ReceivedMessage(consensusMessage);
                    break;
            }
        }

        private async Task RequestBlockInVoteHolding(
            ITransport transport,
            RoutingTable routingTable)
        {
            while (true)
            {
                await _context.VoteHolding.WaitAsync();

                var neighbors = routingTable.PeersToBroadcast(null);
                Message? blockMessage = null;

                foreach (var peer in neighbors)
                {
                    try
                    {
                        blockMessage = await transport.SendMessageAsync(
                            peer,
                            new GetBlocks(new List<BlockHash>()
                            {
                                _context.CurrentRoundContext.BlockHash,
                            }),
                            TimeSpan.FromSeconds(1),
                            CancellationToken.None);

                        if (blockMessage is Messages.Blocks)
                        {
                            break;
                        }
                    }
                    catch (CommunicationFailException)
                    {
                        blockMessage = null;
                        continue;
                    }
                }

                if (!(blockMessage is Messages.Blocks))
                {
                    continue;
                }

                var marshaled = blockMessage.DataFrames.Last();
                var block =
                    BlockMarshaler.UnmarshalBlock<T>(
                        _context.HashAlgorithm,
                        (Bencodex.Types.Dictionary)_codec.Decode(marshaled));

                _context.PutBlockToStore(block);

                HandleMessage(new ConsensusVote(
                    _context.SignVote(
                        _context.CurrentRoundContext.Voting(VoteFlag.Absent))));

                _context.VoteHolding.Reset();
            }
        }

        private async Task ReplyPongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _transport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
