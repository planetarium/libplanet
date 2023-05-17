using System.Collections.Generic;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.State
{
    public interface IAccountDelta
    {
        public HashDigest<SHA256> StateRootHash { get; }

        public IAccount Account { get; }

        public IValue? GetState(Address key);

        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> keys);

        public IAccountDelta SetState(Address key, IValue value);

        public IAccountDelta SetAccountMemo(string memo);

        internal ITrie Commit();
    }
}
