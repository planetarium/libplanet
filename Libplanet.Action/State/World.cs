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

        public World(
            IWorldState baseState,
            IWorldDelta delta)
        {
            _baseState = baseState;
            Delta = delta;
            Legacy = baseState.Legacy;
        }

        /// <inheritdoc/>
        public IWorldDelta Delta { get; }

        /// <inheritdoc/>
        [Pure]
        public ITrie Trie => _baseState.Trie;

        /// <inheritdoc/>
        [Pure]
        public bool Legacy { get; private set; }

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
            if (!address.Equals(ReservedAddresses.LegacyAccount)
                && account.TotalUpdatedFungibleAssets.Count > 0)
            {
                return this;
            }

            return new World(
                this,
                Delta.SetAccount(address, account));
        }
    }
}