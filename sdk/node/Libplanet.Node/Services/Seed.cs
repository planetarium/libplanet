using System.Net;
using Dasync.Collections;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Node.Options;
using Serilog;

namespace Libplanet.Node.Services;

internal class Seed(SeedOptions seedOptions) : IAsyncDisposable
{
    private readonly ILogger _logger = Log.ForContext<Seed>();

    private ITransport? _transport;
    private CancellationTokenSource? _cancellationTokenSource;
    private Task _task = Task.CompletedTask;
    private Task _refreshTask = Task.CompletedTask;

    public event EventHandler<SeedMessageEventArgs>? MessageReceived;

    public ILogger Logger => _logger;

    public bool IsRunning { get; private set; }

    public PeerCollection Peers { get; } = new(seedOptions);

    public BoundPeer BoundPeer => new(
        PrivateKey.FromString(seedOptions.PrivateKey).PublicKey,
        (DnsEndPoint)EndPointUtility.Parse(seedOptions.EndPoint));

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        if (IsRunning)
        {
            throw new InvalidOperationException("Seed node is already running.");
        }

        _cancellationTokenSource
            = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
        _transport = await CreateTransport();
        _transport.ProcessMessageHandler.Register(ReceiveMessageAsync);
        _task = _transport.StartAsync(_cancellationTokenSource.Token);
        await _transport.WaitForRunningAsync();
        _refreshTask = RefreshContinuouslyAsync(_cancellationTokenSource.Token);
        IsRunning = true;
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        if (!IsRunning)
        {
            throw new InvalidOperationException("Seed node is not running.");
        }

        if (_cancellationTokenSource is not null)
        {
            await _cancellationTokenSource.CancelAsync();
            _cancellationTokenSource.Dispose();
            _cancellationTokenSource = null;
        }

        if (_transport is not null)
        {
            await _transport.StopAsync(TimeSpan.FromSeconds(0), cancellationToken);
            _transport.Dispose();
            _transport = null;
        }

        await _refreshTask;
        await _task;
        _refreshTask = Task.CompletedTask;
        _task = Task.CompletedTask;
        IsRunning = false;
    }

    public async ValueTask DisposeAsync()
    {
        if (_cancellationTokenSource is not null)
        {
            await _cancellationTokenSource.CancelAsync();
            _cancellationTokenSource.Dispose();
            _cancellationTokenSource = null;
        }

        if (_transport is not null)
        {
            _transport.Dispose();
            _transport = null;
        }

        await _refreshTask;
        await _task;
        _refreshTask = Task.CompletedTask;
        _task = Task.CompletedTask;
    }

    private async Task<NetMQTransport> CreateTransport()
    {
        var privateKey = PrivateKey.FromString(seedOptions.PrivateKey);
        var appProtocolVersion = AppProtocolVersion.FromToken(seedOptions.AppProtocolVersion);
        var appProtocolVersionOptions = new AppProtocolVersionOptions
        {
            AppProtocolVersion = appProtocolVersion,
            TrustedAppProtocolVersionSigners = [],
        };
        var endPoint = (DnsEndPoint)EndPointUtility.Parse(seedOptions.EndPoint);
        var host = endPoint.Host;
        var port = endPoint.Port;
        var hostOptions = new HostOptions(host, [], port);
        return await NetMQTransport.Create(privateKey, appProtocolVersionOptions, hostOptions);
    }

    private async Task RefreshContinuouslyAsync(CancellationToken cancellationToken)
    {
        var interval = TimeSpan.FromSeconds(seedOptions.RefreshInterval);
        var peers = Peers;
        while (!cancellationToken.IsCancellationRequested)
        {
            try
            {
                await Task.Delay(interval, cancellationToken);
                await peers.RefreshAsync(cancellationToken);
            }
            catch (TaskCanceledException)
            {
                break;
            }
        }
    }

    private async Task ReceiveMessageAsync(Message message)
    {
        if (_transport is null || _cancellationTokenSource is null)
        {
            throw new InvalidOperationException("Seed node is not running.");
        }

        var messageIdentity = message.Identity;
        var cancellationToken = _cancellationTokenSource.Token;
        var transport = _transport;
        var peers = Peers;

        switch (message.Content)
        {
            case FindNeighborsMsg:
                var alivePeers = peers.Where(item => item.IsAlive)
                                      .Select(item => item.BoundPeer)
                                      .ToArray();
                var neighborsMsg = new NeighborsMsg(alivePeers);
                await transport.ReplyMessageAsync(
                    neighborsMsg,
                    messageIdentity,
                    cancellationToken: cancellationToken);
                break;

            default:
                var pongMsg = new PongMsg();
                await transport.ReplyMessageAsync(
                    content: pongMsg,
                    identity: messageIdentity,
                    cancellationToken: cancellationToken);
                break;
        }

        if (message.Remote is BoundPeer boundPeer)
        {
            peers.AddOrUpdate(boundPeer, transport);
        }

        MessageReceived?.Invoke(this, new SeedMessageEventArgs(message));
    }
}
