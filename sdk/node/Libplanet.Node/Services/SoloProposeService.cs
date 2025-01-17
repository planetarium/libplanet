using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Node.Options;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class SoloProposeService : BackgroundService
{
    private readonly BlockChain _blockChain;
    private readonly PrivateKey _privateKey;
    private readonly TimeSpan _blockInterval;
    private readonly ILogger<SoloProposeService> _logger;

    public SoloProposeService(
        IBlockChainService blockChainService,
        ILogger<SoloProposeService> logger,
        IOptions<SoloOptions> soloProposeOption)
    {
        _blockChain = blockChainService.BlockChain;
        var options = soloProposeOption.Value;
        _privateKey = options.PrivateKey is null
            ? new PrivateKey()
            : PrivateKey.FromString(options.PrivateKey);
        _blockInterval = TimeSpan.FromMilliseconds(options.BlockInterval);
        _logger = logger;
        _logger.LogInformation(
            "SoloProposeService initialized. Interval: {BlockInterval}",
            _blockInterval);
    }

    protected async override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        try
        {
            await ProposeBlockAsync(stoppingToken);
        }
        catch (OperationCanceledException e)
        {
            _logger.LogInformation(e, "Timed Hosted Service is stopping.");
        }
    }

    private async Task ProposeBlockAsync(CancellationToken cancellationToken)
    {
        while (!cancellationToken.IsCancellationRequested)
        {
            ProposeBlock();
            await Task.Delay(_blockInterval, cancellationToken);
        }
    }

    private void ProposeBlock()
    {
        var tip = _blockChain.Tip;
        var block = _blockChain.ProposeBlock(
            _privateKey,
            _blockChain.GetBlockCommit(tip.Hash));
        _blockChain.Append(
            block,
            _blockChain.GetBlockCommit(tip.Hash),
            validate: false);

        _logger.LogInformation(
            "Proposed block: {Height}: {Hash}",
            block.Index,
            block.Hash);
    }
}
