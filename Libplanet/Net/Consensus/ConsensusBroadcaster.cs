using System;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    public class ConsensusBroadcaster : IConsensusBroadcaster
    {
        private readonly ILogger _logger;

        private ITransport _transport;

        public ConsensusBroadcaster(ITransport transport)
        {
            _transport = transport;
            _logger = Log
                .ForContext<ConsensusBroadcaster>()
                .ForContext("Source", $"[{nameof(ConsensusBroadcaster)}] ");
        }

        public void BroadcastMessage(ConsensusMessage message)
        {
            switch (message)
            {
                case ConsensusPropose propose:
                    BroadcastPropose(propose);
                    break;
                case ConsensusVote vote:
                    BroadcastVote(vote);
                    break;
                case ConsensusVote23 vote23:
                    BroadcastVote23(vote23);
                    break;
                default:
                    throw new Exception($"Failed to handle message: {message}");
            }
        }

        public void BroadcastPropose(ConsensusPropose propose)
        {
            _logger.Debug("Trying to broadcast propose...");
            BroadcastMessage(null, propose);
        }

        public void BroadcastVote(ConsensusVote vote)
        {
            _logger.Debug("Broadcast voting... {NodeId}, {Round}", vote.NodeId, vote.Round);
            BroadcastMessage(null, vote);
        }

        public void BroadcastVote23(ConsensusVote23 vote23)
        {
            _logger.Debug("Broadcast 2/3 voting... {NodeId}, {Round}", vote23.NodeId, vote23.Round);
            BroadcastMessage(null, vote23);
        }

        private void BroadcastMessage(Address? address, ConsensusMessage message)
        {
            _transport.BroadcastMessage(address, message);
        }
    }
}
