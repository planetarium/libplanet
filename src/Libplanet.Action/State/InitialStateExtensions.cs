using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    public static class InitialStateExtensions
    {
        public static ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
            AddLegacyStates(
                this ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
                    initialState,
                ImmutableDictionary<Address, IValue> legacyStates) =>
                initialState.Add(
                    ReservedAddresses.LegacyAccount,
                    legacyStates);

        public static ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
            AddValidatorSet(
                this ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
                    initialState,
                ValidatorSet validatorSet) =>
                initialState.Add(
                    ReservedAddresses.ValidatorSetAccount,
                    ImmutableDictionary<Address, IValue>.Empty
                        .Add(ValidatorSetAccount.ValidatorSetAddress, validatorSet.Bencoded));
    }
}
