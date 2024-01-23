using Libplanet.Types.Blocks;

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
