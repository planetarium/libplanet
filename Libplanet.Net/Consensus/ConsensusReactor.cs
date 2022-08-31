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
    /// <summary>
    /// A manager class for starting network and joining into consensus.
    /// <seealso cref="ConsensusContext{T}"/>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type of <see cref="BlockChain{T}"/>.
    /// </typeparam>
    public class ConsensusReactor<T> : IReactor
        where T : IAction, new()
    {
        private readonly Gossip _gossip;
        private readonly ConsensusContext<T> _consensusContext;
        private readonly BlockChain<T> _blockChain;
        private readonly ILogger _logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusReactor{T}"/> class.
        /// </summary>
        /// <param name="consensusTransport">An <see cref="ITransport"/> for sending the
        /// <see cref="ConsensusMessage"/>s to validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for using in signing a block.
        /// </param>
        /// <param name="consensusPrivateKey">A <see cref="BlsPrivateKey"/> for using in signing a
        /// message.
        /// </param>
        /// <param name="validatorPeers">A list of validator's <see cref="PublicKey"/>, including
        /// itself.
        /// </param>
        /// <param name="newHeightDelay">A time delay in starting the consensus for the next height
        /// block. <seealso cref="ConsensusContext{T}.OnBlockChainTipChanged"/>
        /// </param>
        public ConsensusReactor(
            ITransport consensusTransport,
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            BlsPrivateKey consensusPrivateKey,
            ImmutableList<BoundPeer> validatorPeers,
            TimeSpan newHeightDelay)
        {
            _gossip = new Gossip(
                consensusTransport,
                validatorPeers.ToImmutableArray(),
                ProcessMessage,
                TimeSpan.FromMinutes(2));
            _blockChain = blockChain;

            _consensusContext = new ConsensusContext<T>(
                AddMessage,
                blockChain,
                blockChain.Tip.Index,
                privateKey,
                consensusPrivateKey,
                validatorPeers.Select(x => (BlsPublicKey)x.PublicKey).ToList(),
                newHeightDelay);

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Reactor")
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
        }

        /// <summary>
        /// Whether this <see cref="ConsensusReactor{T}"/> is running.
        /// </summary>
        public bool Running => _gossip.Running;

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
            _consensusContext.NewHeight(_blockChain.Tip.Index + 1);
            await _gossip.StartAsync(cancellationToken);
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
                    _consensusContext.ToString());
            dict["peer"] = _gossip.AsPeer.ToString();

            return JsonSerializer.Serialize(dict);
        }

        /// <summary>
        /// Adds <see cref="ConsensusMessage"/> to gossip.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> to add.</param>
        private void AddMessage(ConsensusMessage message) => _gossip.AddMessage(message);

        /// <summary>
        /// A handler for received <see cref="Message"/>s.
        /// </summary>
        /// <param name="message">A message to process.</param>
        private void ProcessMessage(Message message)
        {
            switch (message)
            {
                case ConsensusMessage consensusMessage:
                    _consensusContext.HandleMessage(consensusMessage);
                    break;
            }
        }
    }
}
