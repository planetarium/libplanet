using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.Types.Assets;

namespace Libplanet.Action.Tests
{
    public static class ActionEvaluationExtensions
    {
        public static IImmutableDictionary<Address, IValue> GetDirtyStates(
            this IEnumerable<IActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<Address, IValue>.Empty,
                (dirty, ev) => dirty.SetItems(
                    ev.OutputState.GetAccount(
                        ReservedAddresses.LegacyAccount).GetUpdatedStates())
            );

        public static IImmutableDictionary<(Address, Currency), FungibleAssetValue>
        GetDirtyBalances(
            this IEnumerable<IActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<(Address, Currency), FungibleAssetValue>.Empty,
                (dirty, ev) => dirty.SetItems(
                    ev.OutputState.GetAccount(
                        ReservedAddresses.LegacyAccount).GetUpdatedBalances())
            );

        public static IImmutableDictionary<Currency, FungibleAssetValue>
        GetDirtyTotalSupplies(this IEnumerable<IActionEvaluation> evaluations) =>
            evaluations.Aggregate(
                ImmutableDictionary<Currency, FungibleAssetValue>.Empty,
                (dirty, ev) => dirty.SetItems(
                    ev.OutputState.GetAccount(
                        ReservedAddresses.LegacyAccount).GetUpdatedTotalSupplies())
            );
    }
}
