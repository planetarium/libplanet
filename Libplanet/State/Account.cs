using System.Security.Cryptography;
using Bencodex.Types;

namespace Libplanet.State
{
    /// <summary>
    /// An implementation of <see cref="IAccount"/> interface.
    /// </summary>
    public class Account : IAccount
    {
        public Account(
            Address id,
            string? memo,
            HashDigest<SHA256> stateRootHash)
        {
            Id = id;
            Memo = memo;
            StateRootHash = stateRootHash;
        }

        public Account(Bencodex.Types.List serialized)
        {
            Nonce = (Integer)serialized[0];
            Id = new Address(serialized[1]);
            StateRootHash = new HashDigest<SHA256>((Binary)serialized[2]);
            Memo = serialized.Count > 3 ? (Text?)serialized[3] : null;
        }

        public long Nonce { get; }

        public Address Id { get; }

        public string? Memo { get; }

        public HashDigest<SHA256> StateRootHash { get; }

        public IValue Serialize()
        {
             var list = Bencodex.Types.List.Empty
                .Add(Id.Bencoded)
                .Add(StateRootHash.ByteArray);
             if (Memo is { } memo)
             {
                 list.Add(memo);
             }

             return list;
        }
    }
}
