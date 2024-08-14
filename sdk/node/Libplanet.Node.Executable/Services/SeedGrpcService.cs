using Grpc.Core;
using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Services;

namespace Libplanet.Node.API.Services;

[Grpc(Scope = "Seed")]
public class SeedGrpcService(
    IServiceProvider serviceProvider)
    : Seed.SeedBase
{
    public override Task<GetSeedReply> GetSeed(GetSeedRequest request, ServerCallContext context)
    {
        var blocksyncSeedService = serviceProvider.GetService<IBlocksyncSeedService>();
        var consensusSeedService = serviceProvider.GetService<IConsensusSeedService>();
        if (blocksyncSeedService is null || consensusSeedService is null)
        {
            throw new RpcException(
                new Status(StatusCode.Unavailable, "Seed services are not available."));
        }

        return Task.FromResult(new GetSeedReply
        {
            BlocksyncSeed = EndPointUtility.ToString(blocksyncSeedService.BoundPeer.EndPoint),
            ConsensusSeed = EndPointUtility.ToString(consensusSeedService.BoundPeer.EndPoint),
        });
    }
}
