using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

[Singleton<IBlocksyncSeedService>(Scope = "Seed")]
[Singleton<IHostedService>(Scope = "Seed")]
internal sealed class BlocksyncSeedService(
    IOptionsMonitor<SeedOptions> seedOptionsMonitor,
    ILogger<BlocksyncSeedService> logger)
    : SeedServiceBase(seedOptionsMonitor.Get(SeedOptions.BlocksyncSeed), logger),
    IBlocksyncSeedService
{
}
