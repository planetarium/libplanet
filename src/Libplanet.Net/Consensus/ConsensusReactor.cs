using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A manager class for starting network and joining into consensus.
    /// <seealso cref="ConsensusContext"/>
    /// </summary>
    public class ConsensusReactor : IReactor
    {
        private readonly Gossip _gossip;
        private readonly ConsensusContext _consensusContext;
        private readonly BlockChain _blockChain;
        private readonly ILogger _logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusReactor"/> class.
        /// </summary>
        /// <param name="consensusTransport">An <see cref="ITransport"/> for sending the
        /// <see cref="ConsensusMsg"/>s to validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for using in signing a block,
        /// message.
        /// </param>
        /// <param name="validatorPeers">A list of validator's <see cref="BoundPeer"/>, including
        /// itself.
        /// </param>
        /// <param name="seedPeers">A list of seed's <see cref="BoundPeer"/>.</param>
        /// <param name="newHeightDelay">A time delay in starting the consensus for the next height
        /// block.
        /// </param>
        /// <param name="contextOption">A <see cref="ContextOption"/> for
        /// configuring a timeout for each <see cref="ConsensusStep"/>.</param>
        public ConsensusReactor(
            ITransport consensusTransport,
            BlockChain blockChain,
            PrivateKey privateKey,
            ImmutableList<BoundPeer> validatorPeers,
            ImmutableList<BoundPeer> seedPeers,
            TimeSpan newHeightDelay,
            ContextOption contextOption)
        {
            validatorPeers ??= ImmutableList<BoundPeer>.Empty;
            seedPeers ??= ImmutableList<BoundPeer>.Empty;

            GossipConsensusMessageCommunicator consensusMessageHandler =
                new GossipConsensusMessageCommunicator(
                    consensusTransport,
                    validatorPeers.ToImmutableArray(),
                    seedPeers.ToImmutableArray(),
                    ProcessMessage);
            _gossip = consensusMessageHandler.Gossip;
            _blockChain = blockChain;

            _consensusContext = new ConsensusContext(
                consensusMessageHandler,
                blockChain,
                privateKey,
                newHeightDelay,
                contextOption);

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Reactor")
                .ForContext<ConsensusReactor>()
                .ForContext("Source", nameof(ConsensusReactor));
        }

        /// <summary>
        /// Whether this <see cref="ConsensusReactor"/> is running.
        /// </summary>
        public bool Running => _gossip.Running;

        /// <summary>
        /// The index of block that <see cref="ConsensusContext"/> is watching. The value can be
        /// changed by starting a consensus or appending a block.
        /// </summary>
        public long Height => _consensusContext.Height;

        /// <summary>
        /// An <see cref="IEnumerable{BoundPeer}"/> of the validators.
        /// </summary>
        public IReadOnlyList<BoundPeer> Validators => _gossip.Peers.ToList().AsReadOnly();

        // FIXME: This should be exposed in a better way.
        internal ConsensusContext ConsensusContext => _consensusContext;

        /// <summary>
        /// <inheritdoc cref="IDisposable.Dispose()"/>
        /// </summary>
        public void Dispose()
        {
            _gossip.Dispose();
            _consensusContext.Dispose();
        }

        /// <summary>
        /// Starts the instance and joins into consensus.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>Returns the <see cref="ITransport.StartAsync"/>.</returns>
        public async Task StartAsync(CancellationToken cancellationToken)
        {
            Task task = _gossip.StartAsync(cancellationToken);
            await _gossip.WaitForRunningAsync();
            _consensusContext.Start();
            await task;
        }

        /// <summary>
        /// Stops the instance and consensus.
        /// </summary>
        /// <param name="cancellationToken">A cancellation Token.</param>
        /// <returns>Returns the <see cref="ITransport.StopAsync"/>.</returns>
        public async Task StopAsync(CancellationToken cancellationToken)
        {
            _consensusContext.Dispose();
            await _gossip.StopAsync(TimeSpan.FromMilliseconds(10), cancellationToken);
        }

        /// <summary>
        /// Returns a summary of current consensus status in JSON-formatted string.
        /// </summary>
        /// <returns>Returns a summary in JSON-formatted string.
        /// </returns>
        public override string ToString()
        {
            var dict =
                JsonSerializer.Deserialize<Dictionary<string, object>>(
                    _consensusContext.ToString()) ?? new Dictionary<string, object>();
            dict["peer"] = _gossip.AsPeer.ToString();

            return JsonSerializer.Serialize(dict);
        }

        /// <summary>
        /// A handler for received <see cref="Message"/>s.
        /// </summary>
        /// <param name="content">A message to process.</param>
        private void ProcessMessage(MessageContent content)
        {
            switch (content)
            {
                case ConsensusVoteSetBitsMsg voteSetBits:
                    // Note: ConsensusVoteSetBitsMsg will not be stored to context's message log.
                    var messages = _consensusContext.HandleVoteSetBits(voteSetBits.VoteSetBits);
                    try
                    {
                        var sender = _gossip.Peers.First(
                            peer => peer.PublicKey.Equals(voteSetBits.ValidatorPublicKey));
                        foreach (var msg in messages)
                        {
                            _gossip.PublishMessage(msg, new[] { sender });
                        }
                    }
                    catch (InvalidOperationException)
                    {
                        _logger.Debug(
                            "Cannot respond received ConsensusVoteSetBitsMsg message" +
                            " {Message} since there is no corresponding peer in the table",
                            voteSetBits);
                    }

                    break;

                case ConsensusMaj23Msg maj23Msg:
                    try
                    {
                        VoteSetBits? voteSetBits = _consensusContext.HandleMaj23(maj23Msg.Maj23);
                        if (voteSetBits is null)
                        {
                            break;
                        }

                        var sender = _gossip.Peers.First(
                            peer => peer.PublicKey.Equals(maj23Msg.ValidatorPublicKey));
                        _gossip.PublishMessage(
                            new ConsensusVoteSetBitsMsg(voteSetBits),
                            new[] { sender });
                    }
                    catch (InvalidOperationException)
                    {
                        _logger.Debug(
                            "Cannot respond received ConsensusMaj23Msg message " +
                            "{Message} since there is no corresponding peer in the table",
                            maj23Msg);
                    }

                    break;

                case ConsensusProposalClaimMsg proposalClaimMsg:
                    try
                    {
                        Proposal? proposal = _consensusContext.HandleProposalClaim(
                            proposalClaimMsg.ProposalClaim);
                        if (proposal is { } proposalNotNull)
                        {
                            var reply = new ConsensusProposalMsg(proposalNotNull);
                            var sender = _gossip.Peers.First(
                                peer => peer.PublicKey.Equals(proposalClaimMsg.ValidatorPublicKey));

                            _gossip.PublishMessage(reply, new[] { sender });
                        }
                    }
                    catch (InvalidOperationException)
                    {
                        _logger.Debug(
                            "Cannot respond received ConsensusProposalClaimMsg message " +
                            "{Message} since there is no corresponding peer in the table",
                            proposalClaimMsg);
                    }

                    break;

                case ConsensusMsg consensusMsg:
                    _consensusContext.HandleMessage(consensusMsg);
                    break;
            }
        }
    }
}
