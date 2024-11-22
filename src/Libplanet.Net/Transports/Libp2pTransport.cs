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
using Nethermind.Libp2p.Stack;
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

        public Multiaddress ListenerAddress => _listenerAddress ??
            throw new NullReferenceException($"{nameof(ListenerAddress)} is not set.");

        public BoundPeer AsPeer => new BoundPeer(ListenerAddress);

        public DateTimeOffset? LastMessageTimestamp { get; }

        public bool Running { get; }

        public AppProtocolVersion AppProtocolVersion { get; }

        public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners =>
            _appProtocolVersionOptions.TrustedAppProtocolVersionSigners;

        public DifferentAppProtocolVersionEncountered DifferentAppProtocolVersionEncountered =>
            _appProtocolVersionOptions.DifferentAppProtocolVersionEncountered;

        public static async Task<Libp2pTransport> Create(
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
            var serviceProvider = new ServiceCollection()
                .AddLibp2p(builder => builder
                    .AddAppLayerProtocol<ReqRepProtocol>(new ReqRepProtocol(transport)))
                .BuildServiceProvider();
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
            _logger.Information(
                "Trying to dial {Remote} As {LocalPeer}",
                peer.Multiaddress,
                LocalPeer.Address);
            IRemotePeer remote = await LocalPeer.DialAsync(peer.Multiaddress, default);
            _logger.Information("Dialing to {Remote} successful", peer.Multiaddress);

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

            // FIXME: Add logging.
            _ = remote.DialAsync<ReqRepProtocol>(linkedCts.Token);

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
            _logger.Information("Invoking sending message");
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
                    try
                    {
                        _messageValidator.ValidateTimestamp(replyMessage);
                        _messageValidator.ValidateAppProtocolVersion(replyMessage);
                    }
                    catch (InvalidMessageTimestampException imte)
                    {
                        const string imteMsge =
                            "Ignoring a reply {Reply} from {Peer} to request {Request} as " +
                            "it has an invalid timestamp";
                        _logger.Warning(
                            imte,
                            imteMsge,
                            replyMessage.Content.Type,
                            replyMessage.Remote,
                            content.Type);
                        continue;
                    }
                    catch (DifferentAppProtocolVersionException dapve)
                    {
                        const string dapveMsg =
                            "Ignoring a reply {Reply} from {Peer} to request {Request} as " +
                            "it has an invalid APV";
                        _logger.Warning(
                            dapve,
                            dapveMsg,
                            replyMessage.Content.Type,
                            replyMessage.Remote,
                            content.Type);
                        continue;
                    }

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

        private async Task Initialize(
            IServiceProvider serviceProvider,
            CancellationToken cancellationToken = default)
        {
            // FIXME: Host being null should be dealt with.
            _logger.Information("Initialization started");
            string localPeerAddressTemplate = $"/ip4/{_hostOptions.Host}/tcp/0";
            string listenerAddressTemplate = $"/ip4/{_hostOptions.Host}/tcp/{_hostOptions.Port}";
            IPeerFactory peerFactory = serviceProvider.GetService<IPeerFactory>()!;
            _logger.Information("Peer factory obtained");
            ILocalPeer localPeer = peerFactory.Create(
                CryptoKeyConverter.ToLibp2pIdentity(_privateKey),
                localPeerAddressTemplate);
            _logger.Information("Local peer created at {LocalPeerAddress}", localPeer.Address);
            IListener listener = await localPeer.ListenAsync(
                listenerAddressTemplate, cancellationToken);
            _logger.Information("Listener started at {ListenerAddress}", listener.Address);

            _localPeer = localPeer;
            _listener = listener;
            _listenerAddress = listener.Address;
        }
    }
}
