using System;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;
using Libplanet.Store.Trie;

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

        private World(IWorldState baseState, IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
        }

        /// <inheritdoc cref="IWorld.Delta"/>
        public IWorldDelta Delta { get; }

        /// <inheritdoc cref="IWorldState.Trie"/>
        [Pure]
        public ITrie Trie => _baseState.Trie;

        /// <inheritdoc cref="IWorldState.Legacy"/>
        [Pure]
        public bool Legacy => _baseState.Legacy;

        /// <inheritdoc cref="IWorldState.Version"/>
        [Pure]
        public int Version => _baseState.Version;

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

        /// <inheritdoc cref="IWorld.SetAccount"/>
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
    }
}
