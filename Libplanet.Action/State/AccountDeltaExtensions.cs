using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    public static class AccountDeltaExtensions
    {
        /// <summary>
        /// Gets a raw dictionary representation of <see cref="IAccountDelta"/> that gets
        /// actually written to an <see cref="IStateStore"/>.
        /// </summary>
        /// <param name="delta">The <see cref="IAccountDelta"/> to convert.</param>
        /// <returns>A raw dictionary representation of <see cref="IAccountDelta"/> to write
        /// to an <see cref="IStateStore"/>.</returns>
        public static IImmutableDictionary<KeyBytes, IValue> ToRawDelta(this IAccountDelta delta)
        {
            var rawStates = delta.States.Select(
                kv => new KeyValuePair<KeyBytes, IValue>(
                    ToStateKey(kv.Key), kv.Value));
            var rawFungibles = delta.Fungibles.Select(
                kv => new KeyValuePair<KeyBytes, IValue>(
                    ToFungibleAssetKey(kv.Key), new Integer(kv.Value)));
            var rawTotalSupplies = delta.TotalSupplies.Select(
                kv => new KeyValuePair<KeyBytes, IValue>(
                    ToTotalSupplyKey(kv.Key), new Integer(kv.Value)));

            var rawDelta = ImmutableDictionary<KeyBytes, IValue>.Empty;
            rawDelta = rawDelta.SetItems(rawStates.Concat(rawFungibles).Concat(rawTotalSupplies));
            return delta.ValidatorSet is { } validatorSet
                ? rawDelta.SetItem(ValidatorSetKey, validatorSet.Bencoded)
                : rawDelta;
        }
    }
}
