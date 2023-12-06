using System;
using System.Numerics;
using Bencodex.Types;

namespace Libplanet.Action.State
{
    public class TrieMetadata
    {
        public TrieMetadata(int version, TrieType type)
        {
            Version = version;
            Type = type;
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
            Type = (TrieType)(int)((Integer)list[1]).Value;
        }

        public BigInteger Version { get; }

        public TrieType Type { get; }

        public IValue Bencoded => new List((Integer)Version, (Integer)(int)Type);
    }
}
