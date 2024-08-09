using Libplanet.Net;
using Libplanet.Node.Options;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Libplanet.Node.Services;

internal class SeedServiceBase(SeedOptions seedOptions, ILogger logger)
    : IHostedService
{
    private readonly Seed _seed = new(seedOptions.Verify());

    public BoundPeer BoundPeer => _seed.BoundPeer;

    public virtual string Name => GetType().Name;

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        var boundPeer = _seed.BoundPeer;
        await _seed.StartAsync(cancellationToken);
        logger.LogInformation("{Name} started: {Port}", Name, boundPeer.EndPoint.Port);
    }

    public async Task StopAsync(CancellationToken cancellationToken)
    {
        await _seed.StopAsync(cancellationToken);
        logger.LogInformation("{Name} stopped.", Name);
    }
}
