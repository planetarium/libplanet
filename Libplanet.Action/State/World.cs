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
        public IAccountState GetAccountState(Address address)
        {
            return Delta.Accounts.TryGetValue(address, out IAccount? account)
                ? account!
                : _baseState.GetAccountState(address);
        }

        /// <inheritdoc/>
        [Pure]
        public IWorld SetAccount(Address address, IAccount account) =>
            new World(this, new WorldDelta(Delta.Accounts.SetItem(address, account)))
            { Legacy = Legacy && address.Equals(ReservedAddresses.LegacyAccount) };

        /// <summary>
        /// Creates a new World from given <paramref name="previousWorld"/>.
        /// </summary>
        /// <param name="previousWorld">The previous <see cref="WorldState"/> to initialize
        /// new World.</param>
        /// <returns>A null world using <paramref name="previousWorld"/> as its base state.
        /// </returns>
        internal static IWorld Create(IWorldState previousWorld) =>
            new World(previousWorld)
            { Legacy = previousWorld.GetAccountState(ReservedAddresses.LegacyAccount) is null };

        /// <summary>
        /// Creates a null worlds from given <see cref="IWorld"/>.
        /// </summary>
        /// <param name="world">The previous <see cref="IWorld"/> to use.</param>
        /// <returns>A null world that is of the same type as <paramref name="world"/>.
        /// </returns>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="world"/>
        /// is not <see cref="World"/>.
        /// </exception>
        internal static IWorld Flush(IWorld world) =>
            world is World impl
                ? new World(impl) { Legacy = impl.Legacy }
                : throw new ArgumentException(
                    $"Unknown type for {nameof(world)}: {world.GetType()}");
    }
}
