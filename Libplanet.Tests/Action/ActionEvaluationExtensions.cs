using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Assets;

namespace Libplanet.Tests.Action
{
    public static class ActionEvaluationExtensions
    {
        public static IImmutableDictionary<Address, IValue> GetDirtyStates(
            this IEnumerable<IActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<Address, IValue>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputState.GetUpdatedStates())
            );

        public static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
        GetDirtyBalances(
            this IEnumerable<IActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<(Address, Currency), FungibleAssetValue>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputState.GetUpdatedBalances())
            );

        public static IImmutableDictionary<Currency, FungibleAssetValue>
        GetDirtyTotalSupplies(this IEnumerable<IActionEvaluation> evaluations) =>
            evaluations.Aggregate(
                ImmutableDictionary<Currency, FungibleAssetValue>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputState.GetUpdatedTotalSupplies())
            );
    }
}
