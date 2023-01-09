#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;

namespace Libplanet.Action
{
    internal static class ActionEvaluationsExtensions
    {
        public static ImmutableDictionary<string, IValue> GetTotalDelta(
            this IReadOnlyList<ActionEvaluation> actionEvaluations,
            Func<Address, string> toStateKey,
            Func<(Address, Currency), string> toFungibleAssetKey,
            Func<Currency, string> toTotalSupplyKey,
            string validatorSetKey)
        {
            IImmutableSet<Address> stateUpdatedAddresses = actionEvaluations
                .SelectMany(a => a.OutputStates.StateUpdatedAddresses)
                .ToImmutableHashSet();
            IImmutableSet<(Address, Currency)> updatedFungibleAssets = actionEvaluations
                .SelectMany(a => a.OutputStates.UpdatedFungibleAssets
                    .SelectMany(kv => kv.Value.Select(c => (kv.Key, c))))
                .ToImmutableHashSet();
            IImmutableSet<Currency> updatedTotalSupplies = actionEvaluations
                .SelectMany(a => a.OutputStates.TotalSupplyUpdatedCurrencies)
                .ToImmutableHashSet();

            IAccountStateDelta lastStates = actionEvaluations.Count > 0
                ? actionEvaluations[actionEvaluations.Count - 1].OutputStates
                : null;
            ImmutableDictionary<string, IValue> totalDelta =
                stateUpdatedAddresses.ToImmutableDictionary(
                    toStateKey,
                    a => lastStates?.GetState(a)
                ).SetItems(
                    updatedFungibleAssets.Select(pair =>
                        new KeyValuePair<string, IValue>(
                            toFungibleAssetKey(pair),
                            new Bencodex.Types.Integer(
                                lastStates?.GetBalance(pair.Item1, pair.Item2).RawValue ?? 0
                            )
                        )
                    )
                );

            foreach (var currency in updatedTotalSupplies)
            {
                if (lastStates?.GetTotalSupply(currency).RawValue is { } rawValue)
                {
                    totalDelta = totalDelta.SetItem(
                        toTotalSupplyKey(currency),
                        new Bencodex.Types.Integer(rawValue)
                    );
                }
            }

            if (lastStates?.GetValidatorSet() is { } validatorSet && validatorSet.Validators.Any())
            {
                totalDelta = totalDelta.SetItem(
                    validatorSetKey,
                    validatorSet.Encoded
                );
            }

            return totalDelta;
        }
    }
}
