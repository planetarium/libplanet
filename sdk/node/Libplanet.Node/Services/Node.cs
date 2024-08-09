using System.Net;
using Libplanet.Blockchain;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Consensus;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Node.Options;
using Microsoft.Extensions.Logging;

namespace Libplanet.Node.Services;

internal sealed class Node : IAsyncDisposable
{
    private readonly string _storePath = string.Empty;

    private readonly NodeOptions _nodeOptions;
    private readonly ILogger _logger;
    private readonly PrivateKey _seedNodePrivateKey = new();
    private Seed? _blocksyncSeed;
    private Seed? _consensusSeed;
    private DnsEndPoint? _blocksyncEndPoint;
    private DnsEndPoint? _consensusEndPoint;
    private Swarm? _swarm;
    private Task _startTask = Task.CompletedTask;
    private bool _isDisposed;

    public Node(
        BlockChain blockChain,
        NodeOptions nodeOptions,
        ILogger logger)
    {
        BlockChain = blockChain;
        _nodeOptions = nodeOptions.Verify();
        PrivateKey = PrivateKey.FromString(_nodeOptions.PrivateKey);
        PublicKey = PrivateKey.PublicKey;
        _logger = logger;
    }

    public DnsEndPoint SwarmEndPoint
    {
        get => _blocksyncEndPoint ?? throw new InvalidOperationException();
        set => _blocksyncEndPoint = value;
    }

    public DnsEndPoint ConsensusEndPoint
    {
        get => _consensusEndPoint ?? throw new InvalidOperationException();
        set => _consensusEndPoint = value;
    }

    public string StorePath => _storePath;

    public bool IsRunning { get; private set; }

    public bool IsDisposed => _isDisposed;

    public PrivateKey PrivateKey { get; }

    public PublicKey PublicKey { get; }

    public Address Address => PublicKey.Address;

    public BlockChain BlockChain { get; }

    public Swarm Swarm => _swarm ?? throw new InvalidOperationException();

    public BoundPeer[] Peers
    {
        get
        {
            if (_swarm is not null)
            {
                return [.. _swarm.Peers.Select(item => item)];
            }

            throw new InvalidOperationException();
        }
    }

    public BoundPeer BlocksyncSeedPeer
        => _blocksyncSeed?.BoundPeer ?? BoundPeerUtility.Parse(NodeOptions.BlocksyncSeedPeer);

    public BoundPeer ConsensusSeedPeer
        => _consensusSeed?.BoundPeer ?? BoundPeerUtility.Parse(NodeOptions.ConsensusSeedPeer);

    public NodeOptions NodeOptions => _nodeOptions;

    public override string ToString() => $"{Address:S}";

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        ObjectDisposedException.ThrowIf(_isDisposed, this);
        if (IsRunning)
        {
            throw new InvalidOperationException("Node is already running.");
        }

        var seedPublicKey = _seedNodePrivateKey.PublicKey;
        var privateKey = PrivateKey.FromString(_nodeOptions.PrivateKey);
        var nodeOptions = NodeOptions;
        var storePath = _storePath;
        var blocksyncEndPoint = _blocksyncEndPoint ?? EndPointUtility.Next();
        var consensusEndPoint = _consensusEndPoint ?? EndPointUtility.Next();
        var blocksyncSeedPeer = BoundPeerUtility.ParseOrFallback(
            nodeOptions.BlocksyncSeedPeer,
            () => new BoundPeer(seedPublicKey, EndPointUtility.Next()));
        var consensusSeedPeer = BoundPeerUtility.ParseOrFallback(
            nodeOptions.ConsensusSeedPeer,
            () => new BoundPeer(seedPublicKey, EndPointUtility.Next()));
        var swarmTransport = await CreateTransport(
            privateKey: privateKey,
            endPoint: blocksyncEndPoint);
        var swarmOptions = new SwarmOptions
        {
            StaticPeers = [blocksyncSeedPeer],
            BootstrapOptions = new()
            {
                SeedPeers = [blocksyncSeedPeer],
            },
        };
        var consensusTransport = await CreateTransport(
            privateKey: privateKey,
            endPoint: consensusEndPoint);
        var consensusReactorOption = new ConsensusReactorOption
        {
            SeedPeers = [consensusSeedPeer],
            ConsensusPort = consensusEndPoint.Port,
            ConsensusPrivateKey = privateKey,
            TargetBlockInterval = TimeSpan.FromSeconds(2),
            ContextTimeoutOptions = new(),
        };
        var blockChain = BlockChain;

        if (nodeOptions.BlocksyncSeedPeer == string.Empty)
        {
            _blocksyncSeed = new Seed(new()
            {
                PrivateKey = ByteUtil.Hex(_seedNodePrivateKey.ByteArray),
                EndPoint = EndPointUtility.ToString(blocksyncSeedPeer.EndPoint),
            });
            await _blocksyncSeed.StartAsync(cancellationToken);
            _logger.LogDebug("Node.BlocksyncSeed is started: {Address}", Address);
        }

        if (nodeOptions.ConsensusSeedPeer == string.Empty)
        {
            _consensusSeed = new Seed(new()
            {
                PrivateKey = ByteUtil.Hex(_seedNodePrivateKey.ByteArray),
                EndPoint = EndPointUtility.ToString(consensusSeedPeer.EndPoint),
            });
            await _consensusSeed.StartAsync(cancellationToken);
            _logger.LogDebug("Node.ConsensusSeed is started: {Address}", Address);
        }

        _blocksyncEndPoint = blocksyncEndPoint;
        _consensusEndPoint = consensusEndPoint;
        _swarm = new Swarm(
            blockChain: blockChain,
            privateKey: privateKey,
            transport: swarmTransport,
            options: swarmOptions,
            consensusTransport: consensusTransport,
            consensusOption: consensusReactorOption);
        _startTask = _swarm.StartAsync(cancellationToken: default);
        _logger.LogDebug("Node.Swarm is starting: {Address}", Address);
        await _swarm.BootstrapAsync(cancellationToken: default);
        _logger.LogDebug("Node.Swarm is bootstrapped: {Address}", Address);
        IsRunning = true;
        _logger.LogDebug("Node is started: {Address}", Address);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        ObjectDisposedException.ThrowIf(_isDisposed, this);
        if (!IsRunning)
        {
            throw new InvalidOperationException("Node is not running.");
        }

        if (_consensusSeed is not null)
        {
            await _consensusSeed.StopAsync(cancellationToken: default);
            _consensusSeed = null;
            _logger.LogDebug("Node.ConsensusSeed is stopped: {Address}", Address);
        }

        if (_blocksyncSeed is not null)
        {
            await _blocksyncSeed!.StopAsync(cancellationToken: default);
            _blocksyncSeed = null;
            _logger.LogDebug("Node.BlocksyncSeed is stopped: {Address}", Address);
        }

        if (_swarm is not null)
        {
            await _swarm.StopAsync(cancellationToken: cancellationToken);
            await _startTask;
            _logger.LogDebug("Node.Swarm is stopping: {Address}", Address);
            _swarm.Dispose();
            _logger.LogDebug("Node.Swarm is stopped: {Address}", Address);
        }

        _blocksyncEndPoint = null;
        _consensusEndPoint = null;
        _swarm = null;
        _startTask = Task.CompletedTask;
        IsRunning = false;
        _logger.LogDebug("Node is stopped: {Address}", Address);
    }

    public async ValueTask DisposeAsync()
    {
        ObjectDisposedException.ThrowIf(_isDisposed, this);

        _blocksyncEndPoint = null;
        _consensusEndPoint = null;

        if (_swarm is not null)
        {
            await _swarm.StopAsync(cancellationToken: default);
            _swarm.Dispose();
        }

        if (_consensusSeed is not null)
        {
            await _consensusSeed.StopAsync(cancellationToken: default);
            _consensusSeed = null;
        }

        if (_blocksyncSeed is not null)
        {
            await _blocksyncSeed.StopAsync(cancellationToken: default);
            _blocksyncSeed = null;
        }

        await (_startTask ?? Task.CompletedTask);
        _startTask = Task.CompletedTask;
        _isDisposed = true;
    }

    private static async Task<NetMQTransport> CreateTransport(
        PrivateKey privateKey, DnsEndPoint endPoint)
    {
        var appProtocolVersionOptions = new AppProtocolVersionOptions
        {
            AppProtocolVersion = GenesisOptions.AppProtocolVersion,
        };
        var hostOptions = new Net.Options.HostOptions(endPoint.Host, [], endPoint.Port);
        return await NetMQTransport.Create(privateKey, appProtocolVersionOptions, hostOptions);
    }
}
