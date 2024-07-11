using System.Diagnostics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IWorldState"/> interface.
    /// It acts as root state of <see cref="World"/> recursion.
    /// </summary>
    public class WorldBaseState : IWorldState
    {
        private readonly IStateStore _stateStore;
        private readonly ActivitySource _activitySource;

        public WorldBaseState(ITrie trie, IStateStore stateStore)
        {
            Trie = trie;
            _stateStore = stateStore;
            Version = trie.GetMetadata() is { } value
                ? value.Version
                : 0;
            _activitySource = new ActivitySource("Libplanet.Action.WorldBaseState");
        }

        /// <inheritdoc cref="IWorldState.Trie"/>
        public ITrie Trie { get; }

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy => Version < BlockMetadata.WorldStateProtocolVersion;

        /// <inheritdoc cref="IWorldState.Version"/>
        public int Version { get; }

        /// <inheritdoc cref="IWorldState.GetAccountState"/>
        public IAccountState GetAccountState(Address address)
        {
            using Activity? a = _activitySource
                .StartActivity(ActivityKind.Internal)?
                .AddTag("Address", address.ToString());
            if (Legacy)
            {
                return address.Equals(ReservedAddresses.LegacyAccount)
                    ? new AccountState(Trie)
                    : new AccountState(_stateStore.GetStateRoot(null));
            }
            else
            {
                return Trie.Get(ToStateKey(address)) is Binary accountStateRootHash
                    ? new AccountState(_stateStore.GetStateRoot(
                        new HashDigest<SHA256>(accountStateRootHash.ByteArray)))
                    : new AccountState(_stateStore.GetStateRoot(null));
            }
        }
    }
}
