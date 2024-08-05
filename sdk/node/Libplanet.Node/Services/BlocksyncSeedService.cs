using Libplanet.Node.Options;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Libplanet.Node.Services;

internal sealed class BlocksyncSeedService(
    IOptionsMonitor<SeedOptions> seedOptionsMonitor,
    ILogger<BlocksyncSeedService> logger)
    : SeedServiceBase(seedOptionsMonitor.Get(SeedOptions.BlocksyncSeed), logger),
    IBlocksyncSeedService
{
}
