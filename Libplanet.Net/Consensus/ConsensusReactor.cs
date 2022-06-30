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
        private ITransport _consensusTransport;
        private ILogger _logger;
        private IImmutableList<BoundPeer> _validatorPeers;
        private ConsensusContext<T> _consensusContext;
        private BlockChain<T> _blockChain;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusReactor{T}"/> class.
        /// </summary>
        /// <param name="consensusTransport">An <see cref="ITransport"/> for sending the
        /// <see cref="ConsensusMessage"/>s to validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="privateKey">A <see cref="PrivateKey"/> for using in signing a block,
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
            ImmutableList<BoundPeer> validatorPeers,
            TimeSpan newHeightDelay)
        {
            _consensusTransport = consensusTransport;
            _validatorPeers = validatorPeers;
            _consensusTransport.ProcessMessageHandler.Register(ProcessMessageHandler);
            _blockChain = blockChain;

            _consensusContext = new ConsensusContext<T>(
                BroadcastMessage,
                blockChain,
                blockChain.Tip.Index,
                privateKey,
                validatorPeers.Select(x => x.PublicKey).ToList(),
                newHeightDelay);

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Reactor")
                .ForContext<ConsensusReactor<T>>()
                .ForContext("Source", nameof(ConsensusReactor<T>));
        }

        /// <summary>
        /// A delegate method for <see cref="ConsensusReactor{T}.CheckValidatorsLiveness"/>.
        /// </summary>
        private delegate Task<bool> PingPong(BoundPeer peer);

        /// <summary>
        /// Whether this <see cref="ConsensusReactor{T}"/> is running.
        /// </summary>
        public bool Running => _consensusTransport.Running;

        /// <summary>
        /// <inheritdoc cref="IDisposable.Dispose()"/>
        /// </summary>
        public void Dispose()
        {
            _consensusTransport.Dispose();
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
            Task task = _consensusTransport.StartAsync(cancellationToken);
            await _consensusTransport.WaitForRunningAsync();
            await CheckValidatorsLiveness(cancellationToken);
            _consensusContext.NewHeight(_blockChain.Tip.Index + 1);
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
            await _consensusTransport.StopAsync(TimeSpan.FromMilliseconds(10), cancellationToken);
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
            dict["peer"] = _consensusTransport.AsPeer.ToString();

            return JsonSerializer.Serialize(dict);
        }

        /// <summary>
        /// Broadcasts <see cref="ConsensusMessage"/> to validators.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMessage"/> to broadcast.</param>
        private void BroadcastMessage(ConsensusMessage message) =>
            _consensusTransport.BroadcastMessage(_validatorPeers, message);

        /// <summary>
        /// A handler for <see cref="ITransport.ProcessMessageHandler"/> to handles a received
        /// <see cref="Message"/>s.
        /// </summary>
        /// <param name="message">A message to process.</param>
        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                case ConsensusMessage consensusMessage:
                    await ReplyMessagePongAsync(message);
                    _consensusContext.HandleMessage(consensusMessage);
                    break;
                case Ping ping:
                    await ReplyMessagePongAsync(ping);
                    break;
            }
        }

        /// <summary>
        /// A task for checking how many validators are alive.
        /// </summary>
        /// <param name="ctx">A cancellation token.</param>
        private async Task CheckValidatorsLiveness(CancellationToken ctx)
        {
            while (!ctx.IsCancellationRequested)
            {
                PingPong sendMessage = async peer =>
                {
                    try
                    {
                        Message? pong = await _consensusTransport.SendMessageAsync(
                            peer,
                            new Ping(),
                            TimeSpan.FromSeconds(1),
                            ctx);
                        return pong is Pong;
                    }
                    catch (Exception e)
                    {
                        _logger.Debug(
                            "{FName}: Failed. Exception => {Exception}",
                            nameof(_consensusTransport.SendMessageAsync),
                            e.Message);
                        return false;
                    }
                };

                List<Task<bool>> tasks = _validatorPeers
                    .Select(peer => sendMessage(peer))
                    .ToList();
                int countOfPong = (await Task.WhenAll(tasks)).Count(x => x);

                var twoThird = _validatorPeers.Count * 2.0 / 3.0;
                _logger.Debug($"{nameof(CheckValidatorsLiveness)}:" +
                              $" count of pong => {countOfPong}, twoThird => {twoThird}");
                if (countOfPong > twoThird)
                {
                    break;
                }

                await Task.Delay(TimeSpan.FromMilliseconds(10), ctx);
            }
        }

        /// <summary>
        /// Replies a <see cref="Pong"/> of received <paramref name="message"/>.
        /// </summary>
        /// <param name="message">A message to replies.</param>
        private async Task ReplyMessagePongAsync(Message message)
        {
            var pong = new Pong { Identity = message.Identity };
            await _consensusTransport.ReplyMessageAsync(pong, CancellationToken.None);
        }
    }
}
