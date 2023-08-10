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

        public static IImmutableDictionary<KeyBytes, IValue>
            GetLegacyRawTotalDelta(
                this IEnumerable<IActionEvaluation> actionEvaluations)
        {
            return actionEvaluations
                .SelectMany(eval => eval.OutputState.Delta.Accounts)
                .Where(kv => kv.Key.Equals(ReservedAddresses.LegacyAccount))
                .Select(kv => kv.Value.Delta)
                .ToList()
                .OrderedSum()
                .ToRawDelta();
        }
    }
}
