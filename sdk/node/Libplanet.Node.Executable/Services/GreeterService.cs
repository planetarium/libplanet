using System.Net;
using Grpc.Core;
using Libplanet.Node.API;
using Libplanet.Node.Services;

namespace Libplanet.Node.API.Services;

public class GreeterService(
    ILogger<GreeterService> logger,
    IReadChainService blockChain,
    IBlocksyncSeedService blocksyncSeedService,
    IConsensusSeedService consensusSeedService)
    : Greeter.GreeterBase
{
    private readonly ILogger<GreeterService> _logger = logger;
    private readonly IReadChainService _blockChain = blockChain;

    public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
    {
        _logger.LogDebug("Saying hello to {Name}", request.Name);
        return Task.FromResult(new HelloReply
        {
            Message = "Hello " + request.Name,
        });
    }

    public override Task<GetGenesisBlockReply> GetGenesisBlock(
        GetGenesisBlockRequest request,
        ServerCallContext context)
    {
        return Task.FromResult(new GetGenesisBlockReply
        {
            Hash = _blockChain.Tip.Hash.ToString(),
        });
    }

    public override Task<GetSeedReply> GetSeed(GetSeedRequest request, ServerCallContext context)
    {
        return Task.FromResult(new GetSeedReply
        {
            BlocksyncSeed = EndPointUtility.ToString(blocksyncSeedService.BoundPeer.EndPoint),
            ConsensusSeed = EndPointUtility.ToString(consensusSeedService.BoundPeer.EndPoint),
        });
    }
}
