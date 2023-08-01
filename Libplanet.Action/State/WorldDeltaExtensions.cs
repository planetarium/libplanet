using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    public static class WorldDeltaExtensions
    {
        /// <summary>
        /// Aggregates a list of <see cref="IWorldDelta"/>s in order.
        /// </summary>
        /// <param name="deltas">The list of <see cref="IWorld"/>s to aggregate.</param>
        /// <returns>The aggregate of <paramref name="deltas"/> as an
        /// <see cref="IWorld"/>.
        /// </returns>
        /// <remarks>
        /// As aggregation is done by partially overwriting previous values,
        /// the order in which <paramref name="deltas"/> is important.
        /// </remarks>
        public static IWorldDelta OrderedSum(this IReadOnlyList<IWorldDelta> deltas)
        {
            IImmutableDictionary<Address, IAccount> accounts = deltas.Aggregate(
                ImmutableDictionary<Address, IAccount>.Empty,
                (prev, next) => prev.SetItems(next.Accounts));
            return new WorldDelta(accounts);
        }

        /// <summary>
        /// Gets a raw dictionary representation of <see cref="IWorldDelta"/> that gets
        /// actually written to an <see cref="IStateStore"/>.
        /// </summary>
        /// <param name="delta">The <see cref="IWorldDelta"/> to convert.</param>
        /// <returns>A raw dictionary representation of <see cref="IAccountDelta"/> to write
        /// to an <see cref="IStateStore"/>.</returns>
        public static IImmutableDictionary<KeyBytes, IImmutableDictionary<KeyBytes, IValue>>
            ToRawDelta(this IWorldDelta delta)
        {
            // NOTE: Is this key correct?
            var rawStates = delta.Accounts.Select(
                kv => new KeyValuePair<KeyBytes, IImmutableDictionary<KeyBytes, IValue>>(
                    ToStateKey(kv.Key),
                    kv.Value.Delta.ToRawDelta()));
            return ImmutableDictionary<KeyBytes, IImmutableDictionary<KeyBytes, IValue>>.Empty
                .SetItems(rawStates)
                .ToImmutableDictionary();
        }
    }
}
