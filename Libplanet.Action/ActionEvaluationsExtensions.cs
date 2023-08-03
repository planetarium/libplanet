using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Store.Trie;

namespace Libplanet.Action
{
    public static class ActionEvaluationsExtensions
    {
        public static IImmutableDictionary<KeyBytes, IImmutableDictionary<KeyBytes, IValue>>
            GetRawTotalDelta(
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
