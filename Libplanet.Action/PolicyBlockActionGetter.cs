using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    public delegate IAction? PolicyBlockActionGetter(IPreEvaluationBlockHeader blockHeader);
}
