using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.State
{
    /// <summary>
    /// An implementation of <see cref="IAccount"/> interface.
    /// </summary>
    public class Account : IAccount
    {
        public static readonly Account NullAccount =
            new Account(default, MerkleTrie.EmptyRootHash);

        public Account(
            Address id,
            HashDigest<SHA256> stateRootHash)
        {
            Id = id;
            StateRootHash = stateRootHash;
        }

        public Account(Bencodex.Types.List serialized)
        {
            Id = new Address(serialized[0]);
            StateRootHash = new HashDigest<SHA256>((Binary)serialized[1]);
        }

        public Address Id { get; }

        public HashDigest<SHA256> StateRootHash { get; }
    }
}
