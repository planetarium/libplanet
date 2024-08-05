using Libplanet.Node.Options;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class ConsensusSeedService(
    IOptionsMonitor<SeedOptions> seedOptionsMonitor,
    ILogger<ConsensusSeedService> logger)
    : SeedServiceBase(seedOptionsMonitor.Get(SeedOptions.ConsensusSeed), logger),
    IConsensusSeedService
{
}
