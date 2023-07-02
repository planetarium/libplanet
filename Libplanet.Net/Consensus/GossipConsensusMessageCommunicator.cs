using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An <see cref="IConsensusMessageCommunicator"/> implementation using <see cref="Gossip"/>.
    /// </summary>
    public class GossipConsensusMessageCommunicator : IConsensusMessageCommunicator
    {
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
                consensusTransport, validatorPeers, seedPeers, ValidateMessage, processMessage);
        }

        /// <summary>
        /// <see cref="Gossip"/> of <see cref="GossipConsensusMessageCommunicator"/>.
        /// </summary>
        internal Gossip Gossip { get; }

        /// <inheritdoc/>
        public void PublishMessage(ConsensusMsg message)
            => Gossip.PublishMessage(message);

        /// <inheritdoc/>
        public void DenyPublicKey(PublicKey publicKey)
        {
            IEnumerable<BoundPeer> peers = Gossip.Peers.Where(p => p.PublicKey == publicKey);
            foreach (BoundPeer peer in peers)
            {
                Gossip.DenyPeer(peer);
            }
        }

        /// <inheritdoc/>
        public void AllowPublicKey(PublicKey publicKey)
        {
            IEnumerable<BoundPeer> peers = Gossip.Peers.Where(p => p.PublicKey == publicKey);
            foreach (BoundPeer peer in peers)
            {
                Gossip.AllowPeer(peer);
            }
        }

        /// <inheritdoc/>
        public void ClearCache() => Gossip.ClearCache();

        /// <inheritdoc/>
        public void ClearDenySet() => Gossip.ClearDenySet();

        private void ValidateMessage(Message message)
        {
            if (message.Content is ConsensusMsg consensusMsg
                && message.Remote.PublicKey.Equals(consensusMsg.ValidatorPublicKey))
            {
                throw new InvalidConsensusMessageException(
                    $"Public key of ConsensusMessage is different from" +
                    $"Peer's public key that has been sent : {message.Remote.PublicKey}",
                    consensusMsg);
            }
        }
    }
}
