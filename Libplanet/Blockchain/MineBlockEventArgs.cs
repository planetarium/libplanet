#nullable disable
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    public class MineBlockEventArgs
    {
        public MineBlockEventArgs(Block block)
        {
            Block = block;
        }

        public Block Block { get; }
    }
}
