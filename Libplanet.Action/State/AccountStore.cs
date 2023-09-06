using System;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Action.State
{
    public class AccountStore : IAccountStore
    {
        private readonly IStateStore _stateStore;

        public AccountStore(IStateStore stateStore)
        {
            _stateStore = stateStore;
        }

        /// <inheritdoc />
        public IAccountState GetAccountState(HashDigest<SHA256>? rootHash) =>
            new Account(GetTrie(rootHash));

        /// <inheritdoc />
        public ITrie Commit(IAccount account) =>
            _stateStore.Commit(account.Trie);

        private ITrie GetTrie(HashDigest<SHA256>? rootHash)
        {
            if (!(rootHash is { } hash))
            {
                return _stateStore.GetStateRoot(null);
            }

            if (_stateStore.ContainsStateRoot(hash))
            {
                return _stateStore.GetStateRoot(hash);
            }

            throw new ArgumentException(
                $"Could not find state root {hash} in {nameof(IStateStore)}.");
        }
    }
}