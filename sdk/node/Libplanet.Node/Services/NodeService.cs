using Libplanet.Node.Options;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class NodeService(
    IBlockChainService blockChainService,
    IOptions<NodeOptions> options,
    ILogger<NodeService> logger)
    : IHostedService, INodeService, IAsyncDisposable
{
    private readonly IBlockChainService _blockChainService = blockChainService;
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

        var blockChain = _blockChainService.BlockChain;
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

        await _node.StopAsync(cancellationToken);
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
