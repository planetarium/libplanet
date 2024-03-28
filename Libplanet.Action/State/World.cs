using System;
using System.Diagnostics.Contracts;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
using Libplanet.Types.Consensus;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An internal implementation of <see cref="IWorld"/>.
    /// </summary>
    [Pure]
    public class World : IWorld
    {
        private readonly IWorldState _baseState;

        public World(IWorldState baseState)
            : this(baseState, new WorldDelta())
        {
        }

        public World(IWorldState baseState, IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
        }

        /// <inheritdoc cref="IWorld.Delta"/>
        public IWorldDelta Delta { get; }

        /// <inheritdoc cref="IWorldState.Trie"/>
        [Pure]
        public ITrie Trie => _baseState.Trie;

        /// <inheritdoc cref="IWorldState.Legacy/>
        [Pure]
        public bool Legacy => _baseState.Legacy;

        /// <inheritdoc cref="IWorld.GetAccount"/>
        [Pure]
        public IAccount GetAccount(Address address)
        {
            return Delta.Accounts.TryGetValue(address, out IAccount? account)
                ? account
                : new Account(_baseState.GetAccountState(address));
        }

        /// <inheritdoc cref="IWorldState.GetAccountState"/>
        [Pure]
        public IAccountState GetAccountState(Address address) => GetAccount(address);

        /// <inheritdoc cref="IWorld.SetAccount/>
        [Pure]
        public IWorld SetAccount(Address address, IAccount account)
        {
            if (Legacy && !address.Equals(ReservedAddresses.LegacyAccount))
            {
                throw new ArgumentException(
                    $"Cannot set a non-legacy account ({address}) to a legacy {nameof(IWorld)}.",
                    nameof(address));
            }

            return new World(_baseState, Delta.SetAccount(address, account));
        }

        /// <inheritdoc cref="IWorld.SetValidator"/>
        public IWorld SetValidator(Validator validator) =>
            UpdateValidatorSet(this.GetValidatorSet().Update(validator));

        private IWorld UpdateValidatorSet(ValidatorSet validatorSet)
        {
            IAccount account = GetAccount(ReservedAddresses.LegacyAccount);
            return SetAccount(
                ReservedAddresses.LegacyAccount,
                new Account(new AccountState(
                    account.Trie.Set(ValidatorSetKey, validatorSet.Bencoded))));
        }
    }
}
