using System;
using System.Collections.Immutable;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An <see cref="IConsensusMessageCommunicator"/> implementation using <see cref="Gossip"/>.
    /// </summary>
    public class GossipConsensusMessageCommunicator : IConsensusMessageCommunicator
    {
        private long _height;
        private int _round;

        /// <summary>
        /// Initializes a new instance of the <see cref="GossipConsensusMessageCommunicator"/>
        /// class.
        /// </summary>
        /// <param name="consensusTransport">An <see cref="ITransport"/> for sending the
        /// <see cref="ConsensusMsg"/>s to validators.</param>
        /// <param name="validatorPeers">A list of validator's <see cref="BoundPeer"/>,
        /// including itself.
        /// </param>
        /// <param name="seedPeers">A list of seed's <see cref="BoundPeer"/>.</param>
        /// <param name="processMessage">Action to be called when receiving a new
        /// <see cref="ConsensusMsg"/>.</param>
        public GossipConsensusMessageCommunicator(
            ITransport consensusTransport,
            ImmutableArray<BoundPeer> validatorPeers,
            ImmutableArray<BoundPeer> seedPeers,
            Action<MessageContent> processMessage)
        {
            Gossip = new Gossip(
                consensusTransport, validatorPeers, seedPeers, _ => { }, processMessage);
            _height = 0;
            _round = 0;
        }

        /// <summary>
        /// <see cref="Gossip"/> of <see cref="GossipConsensusMessageCommunicator"/>.
        /// </summary>
        internal Gossip Gossip { get; }

        /// <inheritdoc/>
        public void PublishMessage(ConsensusMsg message)
            => Gossip.PublishMessage(message);

        public void OnStartHeight(long height)
        {
            _height = height;
            Gossip.ClearDenySet();
        }

        public void OnStartRound(int round)
        {
            _round = round;
            Gossip.ClearCache();
        }
    }
}
