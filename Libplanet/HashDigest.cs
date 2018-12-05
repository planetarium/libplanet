using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;

namespace Libplanet
{
    #pragma warning disable CS0282
    [Uno.GeneratedEquality]
    public partial struct HashDigest
    #pragma warning restore CS0282
    {
        [Uno.EqualityKey]
        public readonly ImmutableArray<byte> ByteArray;

        public HashDigest(byte[] hashDigest)
        {
            if (hashDigest == null)
            {
                throw new NullReferenceException("HashDigest must not be null");
            }

            ByteArray = hashDigest.ToImmutableArray();

            #pragma warning disable CS0103
            /* Suppress CS0171.
            See also https://github.com/nventive/Uno.CodeGen/pull/91
            */
            _computedHashCode = null;
            _computedKeyHashCode = null;
            #pragma warning restore CS0103
        }

        public static HashDigest FromString(string s)
        {
            return new HashDigest(ByteUtil.ParseHex(s));
        }

        [Pure]
        public bool HasLeadingZeroBits(int bits)
        {
            var leadingBytes = bits / 8;
            var trailingBits = bits % 8;

            if (ByteArray.Length < (bits / 8) + 1)
            {
                return false;
            }

            for (int i = 0; i < leadingBytes; i++)
            {
                if (ByteArray[i] != 0)
                {
                    return false;
                }
            }

            if (trailingBits != 0)
            {
                var mask = 0xff << (8 - trailingBits) & 0xff;
                return (ByteArray[leadingBytes] & mask) == 0;
            }

            return true;
        }

        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }

    public static class HashDigestExtension
    {
        public static HashDigest ToHashDigest(this string str)
        {
            return HashDigest.FromString(str);
        }
    }
}
