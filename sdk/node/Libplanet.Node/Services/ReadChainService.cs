using Libplanet.Node.DependencyInjection;
using Libplanet.Types.Blocks;

namespace Libplanet.Node.Services;

[Singleton<IReadChainService>]
internal sealed class ReadChainService(BlockChainService blockChainService) : IReadChainService
{
    public Block Tip => blockChainService.BlockChain.Tip;

    public Block GetBlock(BlockHash hash) => blockChainService.BlockChain[hash];

    public Block GetBlock(long height) => blockChainService.BlockChain[height];
}
