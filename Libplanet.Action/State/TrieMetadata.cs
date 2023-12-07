using System;
using System.Numerics;
using Bencodex.Types;

namespace Libplanet.Action.State
{
    public class TrieMetadata
    {
        public TrieMetadata(int version)
        {
            Version = version;
        }

        public TrieMetadata(IValue value)
        {
            if (!(value is List list))
            {
                throw new ArgumentException(
                    $"The given value is not a list: {value}",
                    nameof(value)
                );
            }

            Version = ((Integer)list[0]).Value;
        }

        public BigInteger Version { get; }

        public IValue Bencoded => new List((Integer)Version);
    }
}
