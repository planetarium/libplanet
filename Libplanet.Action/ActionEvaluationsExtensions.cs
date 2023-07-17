using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action.State;

namespace Libplanet.Action
{
    public static class ActionEvaluationsExtensions
    {
        public static IImmutableDictionary<string, IValue> GetRawTotalDelta(
            this IReadOnlyList<IActionEvaluation> actionEvaluations)
        {
            return actionEvaluations
                .Select(eval => eval.OutputState.Delta)
                .ToList()
                .OrderedSum()
                .ToRawDelta();
        }
    }
}
