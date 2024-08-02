using Grpc.Core;
using Libplanet.Node.API;
using Libplanet.Node.Services;

namespace Libplanet.Node.API.Services;

public class GreeterService : Greeter.GreeterBase
{
    private readonly ILogger<GreeterService> _logger;
    private readonly IReadChainService _blockChain;

    public GreeterService(ILogger<GreeterService> logger, IReadChainService blockChain)
    {
        _logger = logger;
        _blockChain = blockChain;
    }

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
}
