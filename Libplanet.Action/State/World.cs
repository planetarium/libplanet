using System;
using System.Diagnostics.Contracts;
using Libplanet.Crypto;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An internal implementation of <see cref="IWorld"/>.
    /// </summary>
    [Pure]
    internal class World : IWorld
    {
        private readonly IWorldState _baseState;

        internal World(IWorldState baseState)
            : this(baseState, new WorldDelta())
        {
        }

        private World(IWorldState baseState, IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
            Legacy = false;
        }

        /// <inheritdoc/>
        [Pure]
        public IWorldDelta Delta { get; private set; }

        /// <inheritdoc/>
        [Pure]
        public bool Legacy { get; private set; }

        /// <inheritdoc/>
        [Pure]
        public IAccount GetAccount(Address address)
        {
            return Delta.Accounts.TryGetValue(address, out IAccount account)
                ? account
                : _baseState.GetAccount(address);
        }

        /// <inheritdoc/>
        [Pure]
        public IWorld SetAccount(Address address, IAccount account) =>
            new World(this, new WorldDelta(Delta.Accounts.SetItem(address, account)))
            { Legacy = Legacy && address.Equals(ReservedAddresses.LegacyAccount) };

        internal static IWorld Create(IWorldState previousWorld) =>
            new World(previousWorld)
            { Legacy = previousWorld.GetAccount(ReservedAddresses.LegacyAccount) is null };

        internal static IWorld Flush(IWorld world) =>
            world is World impl
                ? new World(impl) { Legacy = impl.Legacy }
                : throw new ArgumentException(
                    $"Unknown type for {nameof(world)}: {world.GetType()}");
    }
}
