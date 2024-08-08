using Libplanet.Types.Blocks;

namespace Libplanet.Node.Services;

public sealed class BlockEventArgs(Block block) : EventArgs
{
    public Block Block { get; } = block;
}
