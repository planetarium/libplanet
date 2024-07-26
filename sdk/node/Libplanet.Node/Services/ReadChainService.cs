using Libplanet.Types.Blocks;

namespace Libplanet.Node.Services;

public class ReadChainService : IReadChainService
{
    private readonly BlockChainService _blockChainService;

    public ReadChainService(BlockChainService blockChainService)
    {
        _blockChainService = blockChainService;
    }

    public Block Tip => _blockChainService.GetBlockChain().Tip;

    public Block GetBlock(BlockHash hash) =>
        _blockChainService.GetBlockChain()[hash];

    public Block GetBlock(long height) =>
        _blockChainService.GetBlockChain()[height];
}
