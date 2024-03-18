using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Types.Assets;
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

        public WorldBaseState(ITrie trie, IStateStore stateStore)
        {
            Trie = trie;
            _stateStore = stateStore;
            Legacy = trie.GetMetadata() is null;
        }

        /// <inheritdoc cref="IWorldState.Trie"/>
        public ITrie Trie { get; }

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy { get; private set; }

        public IAccountState GetAccountState(Address address)
        {
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

        public FungibleAssetValue GetBalance(Address address, Currency currency) =>
            GetAccountState(ReservedAddresses.LegacyAccount).GetBalance(address, currency);

        public FungibleAssetValue GetTotalSupply(Currency currency) =>
            GetAccountState(ReservedAddresses.LegacyAccount).GetTotalSupply(currency);
    }
}
