using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
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
        private ILogger _logger;
        private IImmutableSet<BoundPeer> _validatorPeers;
        private List<PublicKey>? _validators;
        private ConsensusContext<T> _consensusContext;
        private BlockChain<T> _blockChain;
        private long _nodeId;

        public ConsensusReactor(
            ITransport consensusTransport,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            long nodeId,
            List<PublicKey>? validators,
            IImmutableSet<BoundPeer>? validatorPeers,
            TimeSpan newHeightDelay)
        {
            _consensusTransport = consensusTransport;
            _validators = validators;
            _validatorPeers = validatorPeers?
                .Where(peer => !peer.PublicKey.Equals(privateKey.PublicKey)).ToImmutableHashSet()
                              ?? ImmutableHashSet<BoundPeer>.Empty;
            _consensusTransport.ProcessMessageHandler.Register(ProcessMessageHandler);
            _blockChain = blockChain;
            _nodeId = nodeId;

            // TODO: Height and round should be serialized.
            if (validators != null)
            {
                _consensusContext = new ConsensusContext<T>(
                    BroadcastMessage,
                    blockChain,
                    nodeId,
                    blockChain.Tip.Index,
                    privateKey,
                    validators,
                    newHeightDelay);
            }
            else
            {
                throw new ArgumentNullException(nameof(validators));
            }

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Reactor")
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
        }

        public bool Running => _consensusTransport.Running;

        public void Dispose()
        {
            _consensusTransport.Dispose();
            _consensusContext.Dispose();
        }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            Task task = _consensusTransport.StartAsync(cancellationToken);
            await _consensusTransport.WaitForRunningAsync();
            _consensusContext.NewHeight(_blockChain.Tip.Index + 1);
            await task;
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            _consensusContext.Dispose();
            await _consensusTransport.StopAsync(TimeSpan.FromMilliseconds(10), cancellationToken);
        }

        public override string ToString()
        {
            var dict =
                JsonSerializer.Deserialize<Dictionary<string, object>>(
                    _consensusContext.ToString());
            dict["peer"] = _consensusTransport.AsPeer.ToString();

            return JsonSerializer.Serialize(dict);
        }

        internal void BroadcastMessage(ConsensusMessage message)
        {
            if (_consensusTransport.AsPeer is BoundPeer boundPeer)
            {
                _consensusTransport.BroadcastMessage(
                    _validatorPeers.Add(boundPeer), message);
            }
        }

        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                case ConsensusMessage consensusMessage:
                    await ReplyMessagePongAsync(message);
                    _consensusContext.HandleMessage(consensusMessage);
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
