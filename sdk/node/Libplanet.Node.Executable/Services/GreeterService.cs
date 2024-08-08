using Grpc.Core;
using Libplanet.Common;
using Libplanet.Node.Services;
using Libplanet.Types.Blocks;

namespace Libplanet.Node.API.Services;

public class GreeterService(
    IServiceProvider serviceProvider,
    ILogger<GreeterService> logger,
    IReadChainService blockChain)
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

    public override Task<GetTipReply> GetTip(Empty request, ServerCallContext context)
    {
        return Task.FromResult(new GetTipReply
        {
            Hash = _blockChain.Tip.Hash.ToString(),
            Height = _blockChain.Tip.Index,
        });
    }

    public override Task<GetBlockReply> GetBlock(GetBlockRequest request, ServerCallContext context)
    {
        return Task.Run(GetResult);

        Block GetBlock() => request.BlockIdentifierCase switch
        {
            GetBlockRequest.BlockIdentifierOneofCase.Hash
                => _blockChain.GetBlock(BlockHash.FromString(request.Hash)),
            GetBlockRequest.BlockIdentifierOneofCase.Height
                => _blockChain.GetBlock(request.Height),
            _ => throw new InvalidOperationException("Invalid block identifier."),
        };

        GetBlockReply GetResult()
        {
            var block = GetBlock();
            return new GetBlockReply
            {
                Hash = block.Hash.ToString(),
                Height = block.Index,
                Miner = block.Miner.ToString(),
                PublicKey = $"{block.PublicKey}",
                PreviousHash = $"{block.PreviousHash}",
                StateRootHash = $"{block.StateRootHash}",
                Signature = $"{ByteUtil.Hex(block.Signature ?? [])}",
                ProtocolVersion = block.ProtocolVersion,
            };
        }
    }
}
