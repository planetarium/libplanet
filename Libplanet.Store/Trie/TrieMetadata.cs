using System;
using System.Numerics;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Store.Trie
{
    public class TrieMetadata : IBencodable
    {
        public TrieMetadata(int version)
        {
            Version = version;
        }

        public TrieMetadata(IValue bencoded)
            : this(bencoded is List list
                ? list
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Binary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private TrieMetadata(List list)
        {
            Version = ((Integer)list[0]).Value;
        }

        public BigInteger Version { get; }

        public IValue Bencoded => new List((Integer)Version);
    }
}
