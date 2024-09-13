using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Types.Consensus;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A set of useful extension methods for making an initial state to commit to
    /// an <see cref="IStateStore"/>.
    /// </summary>
    public static class InitialStateExtensions
    {
        public static ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
            AddOrUpdateLegacyState(
                this ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
                    initialState,
                ImmutableDictionary<Address, IValue> legacyStates) =>
                initialState.ContainsKey(ReservedAddresses.LegacyAccount)
                    ? initialState
                        .Remove(ReservedAddresses.LegacyAccount)
                        .Add(ReservedAddresses.LegacyAccount, legacyStates)
                    : initialState.Add(ReservedAddresses.LegacyAccount, legacyStates);

        public static ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
            AddOrUpdateValidatorSet(
                this ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
                    initialState,
                ValidatorSet validatorSet) =>
                initialState.ContainsKey(ReservedAddresses.ValidatorSetAccount)
                    ? initialState
                        .Remove(ReservedAddresses.ValidatorSetAccount)
                        .Add(
                            ReservedAddresses.ValidatorSetAccount,
                            ImmutableDictionary<Address, IValue>.Empty
                                .Add(
                                    ValidatorSetAccount.ValidatorSetAddress,
                                    validatorSet.Bencoded))
                    : initialState
                        .Add(
                            ReservedAddresses.ValidatorSetAccount,
                            ImmutableDictionary<Address, IValue>.Empty
                                .Add(
                                    ValidatorSetAccount.ValidatorSetAddress,
                                    validatorSet.Bencoded));
    }
}
