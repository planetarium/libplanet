using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;

namespace Libplanet.Tests.Action
{
    public static class ActionEvaluationExtensions
    {
        public static IImmutableDictionary<Address, IValue> GetDirtyStates(
            this IEnumerable<ActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<Address, IValue>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputStates.GetUpdatedStates())
            );

        public static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
        GetDirtyBalances(
            this IEnumerable<ActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<(Address, Currency), FungibleAssetValue>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputStates.GetUpdatedBalances())
            );

        public static IImmutableDictionary<Currency, FungibleAssetValue>
        GetDirtyTotalSupplies(this IEnumerable<ActionEvaluation> evaluations) =>
            evaluations.Aggregate(
                ImmutableDictionary<Currency, FungibleAssetValue>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputStates.GetUpdatedTotalSupplies())
            );
    }
}
