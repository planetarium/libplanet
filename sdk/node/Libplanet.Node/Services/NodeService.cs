using Libplanet.Node.Options;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class NodeService(
    IServiceProvider serviceProvider,
    IOptions<NodeOptions> options,
    ILogger<NodeService> logger)
    : IHostedService, INodeService, IAsyncDisposable
{
    private readonly IServiceProvider _serviceProvider = serviceProvider;
    private readonly NodeOptions _options = options.Value;
    private readonly ILogger<NodeService> _logger = logger;

    private Node? _node;

    public event EventHandler? Started;

    public event EventHandler? Stopped;

    public bool IsRunning => _node is not null;

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        if (_node is not null)
        {
            throw new InvalidOperationException("Node is already running.");
        }

        var blockChainService = _serviceProvider.GetRequiredService<BlockChainService>();
        var blockChain = blockChainService.BlockChain;

        _node = new(blockChain, _options, _logger);
        await _node.StartAsync(cancellationToken);
        Started?.Invoke(this, EventArgs.Empty);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        if (_node is null)
        {
            throw new InvalidOperationException("Node is not running.");
        }

        await _node.StartAsync(cancellationToken);
        _node = null;
        Stopped?.Invoke(this, EventArgs.Empty);
    }

    public async ValueTask DisposeAsync()
    {
        if (_node is not null)
        {
            await _node.DisposeAsync();
            _node = null;
        }
    }
}
