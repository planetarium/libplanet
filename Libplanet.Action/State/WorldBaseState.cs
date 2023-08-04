using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IWorldState"/> interface.
    /// </summary>
    public class WorldBaseState : IWorldState
    {
        private readonly IBlockChainStates _blockChainStates;
        private readonly ITrie _stateRoot;

        public WorldBaseState(HashDigest<SHA256>? stateRootHash, IBlockChainStates blockChainStates)
        {
            _blockChainStates = blockChainStates;
            _stateRoot = _blockChainStates.GetStateRoot(stateRootHash);
            Legacy = _stateRoot
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
        /// Gets the world states of the given <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es referring
        /// the <see cref="IAccountState"/>s to get its states.</param>
        /// <returns>The list of <see cref="IAccountState"/>s of the given
        /// <paramref name="addresses"/>.
        public IReadOnlyList<IAccount> GetAccounts(IReadOnlyList<Address> addresses) =>
            GetAccountStateRoot(addresses)
                .Zip(addresses, (trie, address) => CreateAccount(address, trie))
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
                return _stateRoot
                    .Get(addresses.Select(ToStateKey).ToList())
                    .Select(GetTrieFromBencodex)
                    .ToList();
            }
        }

        private ITrie GetLegacyTrieOnly(Address address) =>
            address == ReservedAddresses.LegacyAccount
                ? _stateRoot
                : _blockChainStates.GetStateRoot(null);

        private ITrie GetTrieFromBencodex(IValue? value) =>
            value is Binary stateRoot
                ? _blockChainStates.GetStateRoot(new HashDigest<SHA256>(stateRoot))
                : _blockChainStates.GetStateRoot(null);

        private IAccount CreateAccount(Address address, ITrie trie) =>
            Account.Create(new AccountBaseState(address, trie));
    }
}
