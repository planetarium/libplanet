using System.Collections.Generic;
using System.Diagnostics.Contracts;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// An internal implementation of <see cref="IAccount"/>.
    /// </summary>
    [Pure]
    public class Account : IAccount
    {
        private readonly IAccountState _state;

        public Account(IAccountState state)
        {
            _state = state;
        }

        /// <inheritdoc/>
        public ITrie Trie => _state.Trie;

        /// <inheritdoc/>
        [Pure]
        public IValue? GetState(Address address) => _state.GetState(address);

        /// <inheritdoc cref="IAccountState.GetStates(IReadOnlyList{Address})"/>
        [Pure]
        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses) =>
            _state.GetStates(addresses);

        /// <inheritdoc/>
        [Pure]
        public IAccount SetState(Address address, IValue state) => UpdateState(address, state);

        /// <inheritdoc/>
        [Pure]
        public IAccount RemoveState(Address address) => UpdateState(address, null);

        [Pure]
        private Account UpdateState(
            Address address,
            IValue? value) => value is { } v
                ? new Account(new AccountState(Trie.Set(ToStateKey(address), v)))
                : new Account(new AccountState(Trie.Remove(ToStateKey(address))));
    }
}
