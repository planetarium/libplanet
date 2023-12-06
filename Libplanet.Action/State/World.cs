using System.Collections.Immutable;
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
            : this(baseState, ImmutableDictionary<Address, IAccount>.Empty)
        {
        }

        public World(
            IWorldState baseState,
            IImmutableDictionary<Address, IAccount> uncommittedDelta)
            : this(
                  baseState,
                  uncommittedDelta,
                  ImmutableDictionary<Address, IAccount>.Empty)
        {
        }

        public World(
            IWorldState baseState,
            IImmutableDictionary<Address, IAccount> uncommittedDelta,
            IImmutableDictionary<Address, IAccount> blockDelta)
        {
            _baseState = baseState;
            UncommittedDelta = uncommittedDelta;
            BlockDelta = blockDelta;
            Legacy = baseState.Legacy;
        }

        public IImmutableDictionary<Address, IAccount> BlockDelta { get; }

        public IImmutableDictionary<Address, IAccount> UncommittedDelta { get; }

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
            return BlockDelta.TryGetValue(address, out IAccount? account)
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
                UncommittedDelta.SetItem(address, account),
                BlockDelta.SetItem(address, account));
        }
    }
}
