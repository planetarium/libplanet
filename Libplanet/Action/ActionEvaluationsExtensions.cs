#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.State;

namespace Libplanet.Action
{
    internal static class ActionEvaluationsExtensions
    {
        public static ImmutableDictionary<string, IValue> GetRawTotalDelta(
            this IReadOnlyList<IActionEvaluation> actionEvaluations,
            Func<Address, string> toStateKey,
            Func<(Address, Currency), string> toFungibleAssetKey,
            Func<Currency, string> toTotalSupplyKey,
            string validatorSetKey)
        {
            IDelta totalDelta = actionEvaluations
                .Select(eval => eval.OutputStates.Delta)
                .ToList()
                .GetTotalDelta();
            IEnumerable<KeyValuePair<string, IValue>> aggregatedStates =
                totalDelta.States.Select(kv => new KeyValuePair<string, IValue>(
                    toStateKey(kv.Key), kv.Value));
            IEnumerable<KeyValuePair<string, IValue>> aggregatedFungibles =
                totalDelta.Fungibles.Select(kv => new KeyValuePair<string, IValue>(
                    toFungibleAssetKey(kv.Key), new Integer(kv.Value)));
            IEnumerable<KeyValuePair<string, IValue>> aggregatedTotalSupplies =
                totalDelta.TotalSupplies.Select(kv => new KeyValuePair<string, IValue>(
                    toTotalSupplyKey(kv.Key), new Integer(kv.Value)));
            IEnumerable<KeyValuePair<string, IValue>> aggregatedValidatorSet =
                totalDelta.ValidatorSet is { } validatorSet
                    ? new[]
                        {
                            new KeyValuePair<string, IValue>(
                                validatorSetKey,
                                validatorSet.Bencoded),
                        }
                    : new KeyValuePair<string, IValue>[0];
            return aggregatedStates
                .Concat(aggregatedFungibles)
                .Concat(aggregatedTotalSupplies)
                .Concat(aggregatedValidatorSet)
                .ToImmutableDictionary();
        }
    }
}
