using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Consensus;

namespace Libplanet.State
{
    internal static class AccountDeltaExtensions
    {
        /// <summary>
        /// Aggregates a list of <see cref="IAccountDelta"/>s in order.
        /// </summary>
        /// <param name="deltas">The list of <see cref="IAccountStateDelta"/>s to aggregate.</param>
        /// <returns>The aggregate of <paramref name="deltas"/> as an
        /// <see cref="IAccountStateDelta"/>.
        /// </returns>
        /// <remarks>
        /// As aggregation is done by partially overwriting previous values,
        /// the order in which <paramref name="deltas"/> is important.
        /// </remarks>
        internal static IAccountDelta OrderedSum(this IReadOnlyList<IAccountDelta> deltas)
        {
            IImmutableDictionary<Address, IValue> states = deltas.Aggregate(
                ImmutableDictionary<Address, IValue>.Empty,
                (prev, next) => prev.SetItems(next.States));
            IImmutableDictionary<(Address, Currency), BigInteger> fungibles = deltas.Aggregate(
                ImmutableDictionary<(Address, Currency), BigInteger>.Empty,
                (prev, next) => prev.SetItems(next.Fungibles));
            IImmutableDictionary<Currency, BigInteger> totalSupplies = deltas.Aggregate(
                ImmutableDictionary<Currency, BigInteger>.Empty,
                (prev, next) => prev.SetItems(next.TotalSupplies));
            ValidatorSet? validatorSet = deltas.Aggregate(
                (ValidatorSet?)null,
                (prev, next) => next.ValidatorSet is { } set ? set : prev);
            return new AccountDelta(
                states, fungibles, totalSupplies, validatorSet);
        }
    }
}
