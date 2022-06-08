using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusReactor<T> : IReactor
        where T : IAction, new()
    {
        private ITransport _consensusTransport;
        private ConsensusContext<T> _context;
        private ILogger _logger;
        private IImmutableSet<BoundPeer>? _validatorPeers;

        public ConsensusReactor(
            ITransport consensusTransport,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            long nodeId,
            List<PublicKey>? validators,
            IImmutableSet<BoundPeer>? validatorPeers)
        {
            _consensusTransport = consensusTransport;
            _validatorPeers = validatorPeers?
                .Where(peer => !peer.PublicKey.Equals(privateKey.PublicKey)).ToImmutableHashSet();
            _consensusTransport.ProcessMessageHandler.Register(ProcessMessageHandler);

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Reactor")
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
            _context = new ConsensusContext<T>(
                nodeId,
                privateKey,
                validators ?? blockChain.Policy.GetValidators().ToList(),
                blockChain);
        }

        public void Dispose()
        {
            // Block Transport will be disposed in Swarm
            _consensusTransport.Dispose();
        }

        public VoteSet? VoteSetOf(long height)
        {
            long round = _context.CommitedRound(height);
            if (round == -1)
            {
                return null;
            }

            var voteSets = _context.RoundContextOf(height, round).VoteSet;
            return voteSets;
        }

        public async Task<Task> StartAsync(CancellationToken cancellationToken)
        {
            var tasks = new List<Task>();
            tasks.Add(_consensusTransport.StartAsync(cancellationToken));

            return await Task.WhenAny(tasks);
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await _consensusTransport.StopAsync(TimeSpan.FromMilliseconds(10), cancellationToken);
        }

        public async Task ReceivedMessage(ConsensusMessage message)
        {
             HandleMessage(message);
             await Task.Yield();
        }

        public void HandleMessage(ConsensusMessage message)
        {
            _logger.Debug(
                "NodeID: {Id}, Height: {Height}, Round: {Round}, " +
                "State: {State}, HandleMessage: {Message},",
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
            Block<T>? block = _context.GetBlockFromStore(blockHash);

            if (!(block is { }))
            {
                return;
            }

            if (_context.CurrentRoundContext.LeaderElection() != _context.NodeId)
            {
                return;
            }

            _logger.Debug(
                "Propose Block: {Hash}, Proposer: {NodeId}, Height: {Height}, Round: {Round}",
                blockHash,
                _context.NodeId,
                _context.Height,
                _context.Round);
            _context.CurrentRoundContext.BlockHash = blockHash;

            var codec = new Codec();
            var payload = codec.Encode(block.MarshalBlock());

            var propose = new ConsensusPropose(
                _context.NodeId,
                block.Index,
                _context.Round,
                blockHash,
                payload)
            {
                Remote = _consensusTransport.AsPeer,
            };

            BroadcastMessage(propose);
        }

        public bool IsOwnProposeTurn()
        {
            var roundContext = _context.CurrentRoundContext;
            _logger.Debug($"{nameof(IsOwnProposeTurn)} " +
                          $"Height: {roundContext.Height} " +
                          $"Round: {roundContext.Round}");
            return roundContext.LeaderElection() == _context.NodeId;
        }

        public override string ToString()
        {
            return _context.ToString();
        }

        private void BroadcastMessage(ConsensusMessage message)
        {
            _consensusTransport.BroadcastMessage(_validatorPeers, message);
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

        private async Task ReplyMessagePongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _consensusTransport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
