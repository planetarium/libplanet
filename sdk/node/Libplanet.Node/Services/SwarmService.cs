using System.Net;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Consensus;
using Libplanet.Net.Transports;
using Libplanet.Node.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class SwarmService(
    IServiceProvider serviceProvider,
    IOptions<SwarmOptions> options,
    ILogger<SwarmService> logger)
    : IHostedService, ISwarmService, IAsyncDisposable
{
    private readonly IServiceProvider _serviceProvider = serviceProvider;
    private readonly SwarmOptions _options = options.Value;
    private readonly ILogger<SwarmService> _logger = logger;

    private Swarm? _swarm;
    private Task _startTask = Task.CompletedTask;
    private Seed? _blocksyncSeed;
    private Seed? _consensusSeed;

    public event EventHandler? Started;

    public event EventHandler? Stopped;

    public bool IsRunning => _swarm is not null;

    public Swarm Swarm => _swarm ?? throw new InvalidOperationException("Node is not running.");

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        if (_swarm is not null)
        {
            throw new InvalidOperationException("Node is already running.");
        }

        var seedPrivateKey = new PrivateKey();
        var blockChainService = _serviceProvider.GetRequiredService<IBlockChainService>();
        var validatorOptions = GetValidatorOptions(_serviceProvider);
        var blockChain = blockChainService.BlockChain;

        if (_options.BlocksyncSeedPeer == string.Empty)
        {
            _blocksyncSeed = new Seed(new()
            {
                PrivateKey = ByteUtil.Hex(seedPrivateKey.ByteArray),
                EndPoint = EndPointUtility.ToString(EndPointUtility.Next()),
            });
            _options.BlocksyncSeedPeer = _blocksyncSeed.BoundPeer.PeerString;
            await _blocksyncSeed.StartAsync(cancellationToken);
        }

        if (validatorOptions is not null && validatorOptions.ConsensusSeedPeer == string.Empty)
        {
            _consensusSeed = new Seed(new()
            {
                PrivateKey = ByteUtil.Hex(seedPrivateKey.ByteArray),
                EndPoint = EndPointUtility.ToString(EndPointUtility.Next()),
            });
            validatorOptions.ConsensusSeedPeer = _consensusSeed.BoundPeer.PeerString;
            await _consensusSeed.StartAsync(cancellationToken);
        }

        var nodeOptions = _options;
        var privateKey = PrivateKey.FromString(nodeOptions.PrivateKey);
        var swarmEndPoint = (DnsEndPoint)EndPointUtility.Parse(nodeOptions.EndPoint);
        var swarmTransport = await CreateTransport(
            privateKey: privateKey,
            endPoint: swarmEndPoint);
        var blocksyncSeedPeer = BoundPeer.ParsePeer(nodeOptions.BlocksyncSeedPeer);
        var swarmOptions = new Net.Options.SwarmOptions
        {
            StaticPeers = [blocksyncSeedPeer],
            BootstrapOptions = new()
            {
                SeedPeers = [blocksyncSeedPeer],
            },
        };

        var consensusTransport = validatorOptions is not null
            ? await CreateConsensusTransportAsync(privateKey, validatorOptions, cancellationToken)
            : null;
        var consensusReactorOption = validatorOptions is not null
            ? CreateConsensusReactorOption(privateKey, validatorOptions)
            : (ConsensusReactorOption?)null;

        _swarm = new Swarm(
            blockChain: blockChain,
            privateKey: privateKey,
            transport: swarmTransport,
            options: swarmOptions,
            consensusTransport: consensusTransport,
            consensusOption: consensusReactorOption);
        _startTask = _swarm.StartAsync(cancellationToken: default);
        _logger.LogDebug("Node.Swarm is starting: {Address}", _swarm.Address);
        await _swarm.BootstrapAsync(cancellationToken: default);
        _logger.LogDebug("Node.Swarm is bootstrapped: {Address}", _swarm.Address);
        Started?.Invoke(this, EventArgs.Empty);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        if (_swarm is null)
        {
            throw new InvalidOperationException("Node is not running.");
        }

        await _swarm.StopAsync(cancellationToken: cancellationToken);
        await _startTask;
        _logger.LogDebug("Node.Swarm is stopping: {Address}", _swarm.Address);
        _swarm.Dispose();
        _logger.LogDebug("Node.Swarm is stopped: {Address}", _swarm.Address);

        _swarm = null;
        _startTask = Task.CompletedTask;

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

        Stopped?.Invoke(this, EventArgs.Empty);
    }

    public async ValueTask DisposeAsync()
    {
        if (_swarm is not null)
        {
            await _swarm.StopAsync(cancellationToken: default);
            _swarm.Dispose();
        }

        await (_startTask ?? Task.CompletedTask);
        _startTask = Task.CompletedTask;

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
    }

    private static ValidatorOptions? GetValidatorOptions(IServiceProvider serviceProvider)
    {
        var validatorService = serviceProvider.GetService<IValidatorService>();
        if (validatorService is not null)
        {
            return serviceProvider.GetRequiredService<IOptions<ValidatorOptions>>().Value;
        }

        return null;
    }

    private static async Task<NetMQTransport> CreateTransport(
        PrivateKey privateKey, DnsEndPoint endPoint)
    {
        var appProtocolVersionOptions = new Net.Options.AppProtocolVersionOptions
        {
            AppProtocolVersion = GenesisOptions.AppProtocolVersion,
        };
        var hostOptions = new Net.Options.HostOptions(endPoint.Host, [], endPoint.Port);
        return await NetMQTransport.Create(privateKey, appProtocolVersionOptions, hostOptions);
    }

    private static ConsensusReactorOption CreateConsensusReactorOption(
        PrivateKey privateKey, ValidatorOptions options)
    {
        var consensusSeedPeer = BoundPeer.ParsePeer(options.ConsensusSeedPeer);
        var consensusEndPoint = (DnsEndPoint)EndPointUtility.Parse(options.EndPoint);
        return new ConsensusReactorOption
        {
            SeedPeers = [consensusSeedPeer],
            ConsensusPort = consensusEndPoint.Port,
            ConsensusPrivateKey = privateKey,
            TargetBlockInterval = TimeSpan.FromSeconds(2),
            ContextTimeoutOptions = new(),
        };
    }

    private static async Task<NetMQTransport> CreateConsensusTransportAsync(
        PrivateKey privateKey, ValidatorOptions options, CancellationToken cancellationToken)
    {
        var consensusEndPoint = (DnsEndPoint)EndPointUtility.Parse(options.EndPoint);
        await Task.Delay(1, cancellationToken);
        return await CreateTransport(
            privateKey: privateKey,
            endPoint: consensusEndPoint);
    }
}
