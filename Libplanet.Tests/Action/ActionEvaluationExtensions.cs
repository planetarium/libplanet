using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
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

        public static IImmutableDictionary<(Address, Currency), BigInteger> GetDirtyBalances(
            this IEnumerable<ActionEvaluation> evaluations
        ) =>
            evaluations.Aggregate(
                ImmutableDictionary<(Address, Currency), BigInteger>.Empty,
                (dirty, ev) => dirty.SetItems(ev.OutputStates.GetUpdatedBalances())
            );
    }
}
