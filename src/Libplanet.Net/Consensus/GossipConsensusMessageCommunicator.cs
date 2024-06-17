using System;
using System.Collections.Concurrent;
using System.Collections.Immutable;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An <see cref="IConsensusMessageCommunicator"/> implementation using <see cref="Gossip"/>.
    /// </summary>
    public class GossipConsensusMessageCommunicator : IConsensusMessageCommunicator
    {
        private readonly ILogger _logger;
        private long _height;
        private int _round;
        private ConcurrentDictionary<BoundPeer, ImmutableHashSet<int>> _peerCatchupRounds;

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
                consensusTransport,
                validatorPeers,
                seedPeers,
                ValidateMessageToReceive,
                ValidateMessageToSend,
                processMessage);
            _height = 0;
            _round = 0;
            _peerCatchupRounds
                = new ConcurrentDictionary<BoundPeer, ImmutableHashSet<int>>();

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "ConsensusMessageCommunicator")
                .ForContext<GossipConsensusMessageCommunicator>()
                .ForContext("Source", nameof(GossipConsensusMessageCommunicator));
        }

        /// <summary>
        /// <see cref="Gossip"/> of <see cref="GossipConsensusMessageCommunicator"/>.
        /// </summary>
        internal Gossip Gossip { get; }

        /// <inheritdoc/>
        public void PublishMessage(ConsensusMsg message)
            => Gossip.PublishMessage(message);

        /// <inheritdoc/>
        public void OnStartHeight(long height)
        {
            _height = height;
            _peerCatchupRounds.Clear();
            Gossip.ClearDenySet();
        }

        /// <inheritdoc/>
        public void OnStartRound(int round)
        {
            _round = round;
            Gossip.ClearCache();
        }

        /// <summary>
        /// Message validator to be called on <see cref="Gossip.HandleMessageAsync"/>.
        /// This will be set as parameter of <see cref="Gossip"/>, and will validate
        /// <see cref="Message"/>s before it's added to the <see cref="Gossip._cache"/>.
        /// </summary>
        /// <param name="message"><see cref="Message"/> to validate.</param>
        private void ValidateMessageToReceive(Message message)
        {
            if (message.Content is ConsensusVoteMsg voteMsg)
            {
                FilterDifferentHeightVote(voteMsg);
                FilterHigherRoundVoteSpam(voteMsg, message.Remote);
            }
        }

        /// <summary>
        /// Message content validator to be called on <see cref="Gossip.HandleWantAsync"/>.
        /// This will be set as parameter of <see cref="Gossip"/>, and will validate
        /// <see cref="Message"/>s before respond to peer's <see cref="WantMessage"/>.
        /// </summary>
        /// <param name="content"><see cref="MessageContent"/> to validate.</param>
        private void ValidateMessageToSend(MessageContent content)
        {
            if (content is ConsensusVoteMsg voteMsg)
            {
                if (voteMsg.Height != _height)
                {
                    throw new InvalidConsensusMessageException(
                        $"Cannot send vote of height different from context's", voteMsg);
                }

                if (voteMsg.Round > _round)
                {
                    throw new InvalidConsensusMessageException(
                        $"Cannot send vote of round higher than context's", voteMsg);
                }
            }
        }

        /// <summary>
        /// Filter logic for different height <see cref="ConsensusVoteMsg"/>s.
        /// </summary>
        /// <param name="voteMsg"><see cref="ConsensusVoteMsg"/> to filter.</param>
        private void FilterDifferentHeightVote(ConsensusVoteMsg voteMsg)
        {
            if (voteMsg.Height != _height)
            {
                throw new InvalidConsensusMessageException(
                    $"Filtered vote from different height: {voteMsg.Height}",
                    voteMsg);
            }
        }

        /// <summary>
        /// Spam filter logic for higher round <see cref="ConsensusVoteMsg"/>s.
        /// </summary>
        /// <param name="voteMsg"><see cref="ConsensusVoteMsg"/> to filter.</param>
        /// <param name="peer"><see cref="BoundPeer"/> who sent <paramref name="voteMsg"/>.
        /// </param>
        private void FilterHigherRoundVoteSpam(ConsensusVoteMsg voteMsg, BoundPeer peer)
        {
            if (voteMsg.Height == _height &&
                voteMsg.Round > _round)
            {
                _peerCatchupRounds.AddOrUpdate(
                    peer,
                    ImmutableHashSet.Create<int>(voteMsg.Round),
                    (peer, set) => set.Add(voteMsg.Round));

                if (_peerCatchupRounds.TryGetValue(peer, out var set) && set.Count > 2)
                {
                    Gossip.DenyPeer(peer);
                    throw new InvalidConsensusMessageException(
                        $"Add {peer} to deny set, since repetitively found higher rounds: " +
                        $"{string.Join(", ", _peerCatchupRounds[peer])}",
                        voteMsg);
                }
            }
        }
    }
}
