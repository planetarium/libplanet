using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

[Singleton<IConsensusSeedService>(Scope = "Seed")]
[Singleton<IHostedService>(Scope = "Seed")]
internal sealed class ConsensusSeedService(
    IOptionsMonitor<SeedOptions> seedOptionsMonitor,
    ILogger<ConsensusSeedService> logger)
    : SeedServiceBase(seedOptionsMonitor.Get(SeedOptions.ConsensusSeed), logger),
    IConsensusSeedService
{
}
