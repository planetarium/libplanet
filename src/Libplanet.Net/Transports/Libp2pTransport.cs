using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Dasync.Collections;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Microsoft.Extensions.DependencyInjection;
using Multiformats.Address;
using Nethermind.Libp2p.Core;
using Serilog;

namespace Libplanet.Net.Transports
{
#pragma warning disable S101 // Rename class.
    public class Libp2pTransport : ITransport
#pragma warning restore S101
    {
        private readonly PrivateKey _privateKey;
        private readonly ILogger _logger;
        private readonly HostOptions _hostOptions;
        private readonly AppProtocolVersionOptions _appProtocolVersionOptions;
        private readonly MessageValidator _messageValidator;

        // NOTE: These are assigend during Initialize()
        private ILocalPeer? _localPeer = null;
        private IListener? _listener = null;
        private Multiaddress? _listenerAddress = null;

        private CancellationTokenSource _runtimeCancellationTokenSource;
        private bool _disposed = false;

        public Libp2pTransport(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            HostOptions hostOptions,
            TimeSpan? messageTimestampBuffer = null)
        {
            if (hostOptions.Host is null)
            {
                throw new NotSupportedException(
                    $"{nameof(Libp2pTransport)} does not support {nameof(IceServer)}.");
            }

            _privateKey = privateKey;
            _logger = Log
                .ForContext<Libp2pTransport>()
                .ForContext("Source", nameof(Libp2pTransport));
            _hostOptions = hostOptions;
            _appProtocolVersionOptions = appProtocolVersionOptions;
            _messageValidator = new MessageValidator(
                _appProtocolVersionOptions, messageTimestampBuffer);
            _runtimeCancellationTokenSource = new CancellationTokenSource();

            ProcessMessageHandler = new AsyncDelegate();
        }

        public event EventHandler<(
            Multiaddress RemoteAddress,
            Message Message,
            int ReplyCount,
            Channel<Message> LocalInboundReplyChannel)>? RequestMessageToSend;

        public AsyncDelegate ProcessMessageHandler { get; }

        public ILocalPeer LocalPeer => _localPeer ??
            throw new NullReferenceException($"{nameof(LocalPeer)} is not set.");

        public IListener Listener => _listener ??
            throw new NullReferenceException($"{nameof(Listener)} is not set.");

        public BoundPeer AsPeer => new BoundPeer(Listener.Address);

        public DateTimeOffset? LastMessageTimestamp { get; }

        public bool Running { get; }

        public AppProtocolVersion AppProtocolVersion { get; }

        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners =>
            _appProtocolVersionOptions.TrustedAppProtocolVersionSigners;

        public DifferentAppProtocolVersionEncountered DifferentAppProtocolVersionEncountered =>
            _appProtocolVersionOptions.DifferentAppProtocolVersionEncountered;

        public static async Task<Libp2pTransport> Create(
            IServiceProvider serviceProvider,
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            HostOptions hostOptions,
            TimeSpan? messageTimestampBuffer = null)
        {
            var transport = new Libp2pTransport(
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                messageTimestampBuffer);
            await transport.Initialize(serviceProvider);
            return transport;
        }

        public Task StartAsync(CancellationToken cancellationToken = default)
        {
            // Does nothing.
            return Task.CompletedTask;
        }

        public Task StopAsync(TimeSpan waitFor, CancellationToken cancellationToken = default)
        {
            // Does nothing.
            _runtimeCancellationTokenSource.Cancel();
            return Task.CompletedTask;
        }

        public Task WaitForRunningAsync()
        {
            // Does nothing.
            return Task.CompletedTask;
        }

        public async Task<Message> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            // FIXME: Throwning an exception may not be preferrable here
            // if there was no reply.
            IEnumerable<Message> replies = await SendMessageAsync(
                    peer,
                    content,
                    timeout,
                    1,
                    false,
                    cancellationToken).ConfigureAwait(false);
            return replies.First();
        }

        public async Task<IEnumerable<Message>> SendMessageAsync(
            BoundPeer peer,
            MessageContent content,
            TimeSpan? timeout,
            int expectedResponses,
            bool returnWhenTimeout,
            CancellationToken cancellationToken)
        {
            IRemotePeer remote = await LocalPeer.DialAsync(peer.Multiaddress, default);

            // FIXME: There should be default maximum timeout.
            CancellationTokenSource timerCts = new CancellationTokenSource();
            if (timeout is { } timeoutNotNull)
            {
                timerCts.CancelAfter(timeoutNotNull);
            }

            CancellationTokenSource linkedCts =
                CancellationTokenSource.CreateLinkedTokenSource(
                    _runtimeCancellationTokenSource.Token,
                    cancellationToken,
                    timerCts.Token);

            _ = remote
                .DialAsync<ReqRepProtocol>(linkedCts.Token)
                .ContinueWith(t =>
                    _logger.Information(
                        "Request and reply complete to {RemoteAddress}",
                        peer.Multiaddress));

            Message message = new Message(
                content,
                _appProtocolVersionOptions.AppProtocolVersion,
                AsPeer,
                DateTimeOffset.UtcNow,
                null);

            // FIXME: The tasks may not be ready to consume the message.
            // There needs to be a way to know whether the connection is ready
            // to consume the message.
            await Task.Delay(100);
            Channel<Message> inboundReplyChannel = Channel.CreateUnbounded<Message>();
            RequestMessageToSend?.Invoke(
                this,
                (peer.Multiaddress, message, 1, inboundReplyChannel));

            List<Message> replyMessages = new List<Message>();

            try
            {
                for (int i = 0; i < expectedResponses; i++)
                {
                    Message replyMessage =
                        await inboundReplyChannel.Reader.ReadAsync(linkedCts.Token);
                    replyMessages.Add(replyMessage);
                }
            }
            catch (Exception)
            {
                // FIXME: Make this more robust by only catching timer failure.
                _logger.Debug(
                    "Expected to receive {ExpectedCount} messages " +
                    "but only got {ActualCount} messages",
                    expectedResponses,
                    replyMessages.Count);
            }

            return returnWhenTimeout
                ? replyMessages
                : new List<Message>();
        }

        public void BroadcastMessage(IEnumerable<BoundPeer> peers, MessageContent content)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(NetMQTransport));
            }

            CancellationToken ct = _runtimeCancellationTokenSource.Token;
            List<BoundPeer> boundPeers = peers.ToList();
            Task.Run(
                async () =>
                    await boundPeers.ParallelForEachAsync(
                        peer => SendMessageAsync(peer, content, TimeSpan.FromSeconds(1), ct),
                        ct),
                ct);

            _logger.Debug(
                "Broadcasting message {Message} as {AsPeer} to {PeerCount} peers",
                content,
                AsPeer,
                boundPeers.Count);
        }

        public Task ReplyMessageAsync(
            MessageContent content,
            byte[] identity,
            CancellationToken cancellationToken)
        {
            // Does nothing.
            return Task.CompletedTask;
        }

        public async Task ReceiveRequestMessage(
            Multiaddress multiaddress,
            Message requestMessage,
            Channel<MessageContent> localOutboundReplyChannel)
        {
            await ProcessMessageHandler.InvokeAsync(requestMessage, localOutboundReplyChannel);
        }

        /// <inheritdoc cref="IDisposable.Dispose"/>
        public void Dispose()
        {
            // FIXME: Maybe LocalPeer and Listener should be disconnected and disposed?
            _runtimeCancellationTokenSource.Cancel();
            _disposed = true;
        }

        public async Task Initialize(
            IServiceProvider serviceProvider,
            CancellationToken cancellationToken = default)
        {
            string addrTemplate = "/ip4/127.0.0.1/tcp/0";
            PrivateKey privateKey = new PrivateKey();
            Identity identity = new Identity(
                privateKey.ToByteArray(),
                Nethermind.Libp2p.Core.Dto.KeyType.Secp256K1);

            IPeerFactory peerFactory = serviceProvider.GetService<IPeerFactory>()!;
            ILocalPeer localPeer = peerFactory.Create(identity: identity, localAddr: addrTemplate);

            _logger.Information("Local peer created at {LocalPeerAddress}", localPeer.Address);
            IListener listener = await localPeer.ListenAsync(addrTemplate, cancellationToken);
            _logger.Information("Listener started at {ListenerAddress}", listener.Address);

            _localPeer = localPeer;
            _listener = listener;
            _listenerAddress = listener.Address;
        }
    }
}
