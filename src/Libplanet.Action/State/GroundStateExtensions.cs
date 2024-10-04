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
    public static class GroundStateExtensions
    {
        public static ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
            AddOrUpdateLegacyState(
                this ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
                    groundState,
                ImmutableDictionary<Address, IValue> legacyStates) =>
                groundState.ContainsKey(ReservedAddresses.LegacyAccount)
                    ? groundState
                        .Remove(ReservedAddresses.LegacyAccount)
                        .Add(ReservedAddresses.LegacyAccount, legacyStates)
                    : groundState.Add(ReservedAddresses.LegacyAccount, legacyStates);

        public static ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
            AddOrUpdateValidatorSet(
                this ImmutableDictionary<Address, ImmutableDictionary<Address, IValue>>
                    groundState,
                ValidatorSet validatorSet) =>
                groundState.ContainsKey(ReservedAddresses.ValidatorSetAccount)
                    ? groundState
                        .Remove(ReservedAddresses.ValidatorSetAccount)
                        .Add(
                            ReservedAddresses.ValidatorSetAccount,
                            ImmutableDictionary<Address, IValue>.Empty
                                .Add(
                                    ValidatorSetAccount.ValidatorSetAddress,
                                    validatorSet.Bencoded))
                    : groundState
                        .Add(
                            ReservedAddresses.ValidatorSetAccount,
                            ImmutableDictionary<Address, IValue>.Empty
                                .Add(
                                    ValidatorSetAccount.ValidatorSetAddress,
                                    validatorSet.Bencoded));
    }
}
