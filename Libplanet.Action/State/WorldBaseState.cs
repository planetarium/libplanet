using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
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
            Legacy = Trie
                .Get(new[]
                {
                    ToStateKey(ReservedAddresses.LegacyAccount),
                })
                .Any(v => v == null);
        }

        /// <inheritdoc cref="IWorldState.Trie"/>
        public ITrie Trie { get; }

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy { get; }

        /// <inheritdoc cref="IWorldState.GetAccount"/>
        public IAccount GetAccount(Address address) => GetAccounts(new[] { address }).First();

        /// <summary>
        /// Gets the <see cref="IAccount"/>s of the given <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es referring
        /// the <see cref="IAccount"/>s to get its states.</param>
        /// <returns>The list of <see cref="IAccountState"/>s of the given
        /// <paramref name="addresses"/>.</returns>
        public IReadOnlyList<IAccount> GetAccounts(IReadOnlyList<Address> addresses) =>
            GetAccountStateRoots(addresses).Select(CreateAccount).ToList();

        private IReadOnlyList<ITrie> GetAccountStateRoots(IReadOnlyList<Address> addresses)
        {
            if (Legacy)
            {
                return addresses
                    .Select(GetLegacyTrieOnly)
                    .ToList();
            }
            else
            {
                return Trie
                    .Get(addresses.Select(ToStateKey).ToList())
                    .Select(GetTrieFromBencodex)
                    .ToList();
            }
        }

        private ITrie GetLegacyTrieOnly(Address address) =>
            address == ReservedAddresses.LegacyAccount
                ? Trie
                : _stateStore.GetStateRoot(null);

        private ITrie GetTrieFromBencodex(IValue? value) =>
            value is Binary stateRootHash
                ? _stateStore.GetStateRoot(
                    new HashDigest<SHA256>(stateRootHash.ToArray()))
                : _stateStore.GetStateRoot(null);

        private IAccount CreateAccount(ITrie trie) =>
            new Account(new AccountBaseState(trie));
    }
}
