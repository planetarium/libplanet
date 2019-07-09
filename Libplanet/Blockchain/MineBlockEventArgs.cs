using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    public class MineBlockEventArgs<TTxAction, TBlockAction>
        where TTxAction : IAction, new()
        where TBlockAction : IAction, new()
    {
        public MineBlockEventArgs(Block<TTxAction, TBlockAction> block)
        {
            Block = block;
        }

        public Block<TTxAction, TBlockAction> Block { get; }
    }
}
