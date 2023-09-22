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
        private readonly ITrie _trie;
        private readonly IStateStore _stateStore;

        public WorldBaseState(ITrie trie, IStateStore stateStore)
        {
            _trie = trie;
            _stateStore = stateStore;
            Legacy = _trie
                .Get(new[]
                {
                    ToStateKey(ReservedAddresses.LegacyAccount),
                })
                .Any(v => v == null);
        }

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
            GetAccountStateRoot(addresses)
                .Zip(addresses, (trie, address) => CreateAccount(trie))
                .ToList();

        private IReadOnlyList<ITrie> GetAccountStateRoot(IReadOnlyList<Address> addresses)
        {
            if (Legacy)
            {
                return addresses
                    .Select(GetLegacyTrieOnly)
                    .ToList();
            }
            else
            {
                return _trie
                    .Get(addresses.Select(ToStateKey).ToList())
                    .Select(GetTrieFromBencodex)
                    .ToList();
            }
        }

        private ITrie GetLegacyTrieOnly(Address address) =>
            address == ReservedAddresses.LegacyAccount
                ? _trie
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
