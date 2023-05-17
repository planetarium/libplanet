using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.State
{
    internal class AccountDeltaImpl : IAccountDelta
    {
        private readonly ITrie _trie;

        public AccountDeltaImpl(IAccount account, ITrie trie)
        {
            Account = account;
            _trie = trie;
        }

        public HashDigest<SHA256> StateRootHash => _trie.Hash;

        public IAccount Account { get; }

        public IValue? GetState(Address key) =>
            _trie.Get(new[] { ToStateKey(key) })[0];

        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> keys) =>
            _trie.Get(keys.Select(ToStateKey).ToArray());

        public IAccountDelta SetState(Address key, IValue value) =>
            new AccountDeltaImpl(Account, _trie.Set(ToStateKey(key), value));

        public IAccountDelta SetAccountMemo(string memo) =>
            new AccountDeltaImpl(new Account(Account.Id, memo, Account.StateRootHash), _trie);

        ITrie IAccountDelta.Commit() => _trie.Commit();

        private KeyBytes ToStateKey(Address address) =>
            new KeyBytes(ByteUtil.Hex(address.ByteArray), Encoding.UTF8);
    }
}
