using System.Collections.Immutable;
using Libplanet.Types.Blocks;

namespace Libplanet.Action
{
    public delegate ImmutableArray<IAction> PolicyBlockActionsGetter(
        IPreEvaluationBlockHeader blockHeader
    );
}
