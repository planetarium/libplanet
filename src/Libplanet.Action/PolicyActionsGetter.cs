using System.Collections.Immutable;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    public delegate ImmutableArray<IAction> PolicyActionsGetter(
        IPreEvaluationBlockHeader blockHeader
    );
}
