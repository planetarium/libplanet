#nullable disable
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    public class MineBlockEventArgs<T>
        where T : IAction, new()
    {
        public MineBlockEventArgs(Block<T> block)
        {
            Block = block;
        }

        public Block<T> Block { get; }
    }
}
