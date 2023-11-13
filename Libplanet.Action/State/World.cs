using System;
using System.Collections.Generic;
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

        public World(IWorldState baseState, IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
            Legacy = baseState.Legacy;
        }

        /// <inheritdoc/>
        [Pure]
        public IWorldDelta Delta { get; private set; }

        /// <inheritdoc/>
        [Pure]
        public ITrie Trie => _baseState.Trie;

        /// <inheritdoc/>
        [Pure]
        public bool Legacy { get; private set; }

        /// <summary>
        /// Creates a null worlds from given <see cref="IWorld"/>.
        /// </summary>
        /// <param name="world">The previous <see cref="IWorld"/> to use.</param>
        /// <returns>A null world that is of the same type as <paramref name="world"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="world"/>
        /// is not <see cref="World"/>.
        /// </exception>
        public static IWorld Flush(IWorld world)
        {
            foreach (KeyValuePair<Address, IAccount> kv in world.Delta.Accounts)
            {
                world = world.SetAccount(kv.Key, Account.Flush(kv.Value));
            }

            return world is World impl
                ? new World(impl) { Legacy = impl.Legacy }
                : throw new ArgumentException(
                    $"Unknown type for {nameof(world)}: {world.GetType()}");
        }

        /// <inheritdoc/>
        [Pure]
        public IAccount GetAccount(Address address)
        {
            return Delta.Accounts.TryGetValue(address, out IAccount? account)
                ? account
                : _baseState.GetAccount(address);
        }

        /// <inheritdoc/>
        [Pure]
        public IWorld SetAccount(Address address, IAccount account)
        {
            if (!address.Equals(ReservedAddresses.DefaultAccount)
                && account.Delta.UpdatedFungibleAssets.Count > 0)
            {
                return this;
            }

            return new World(this, new WorldDelta(Delta.Accounts.SetItem(address, account)))
            { Legacy = Legacy && address.Equals(ReservedAddresses.DefaultAccount) };
        }
    }
}
