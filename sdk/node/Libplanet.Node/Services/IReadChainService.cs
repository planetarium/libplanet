using Libplanet.Types.Blocks;

namespace Libplanet.Node.Services;

public interface IReadChainService
{
    public Block Tip { get; }

    public Block GetBlock(BlockHash hash);

    public Block GetBlock(long height);
}
