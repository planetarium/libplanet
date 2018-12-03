using System;
using System.Diagnostics.Contracts;

namespace Libplanet
{
    public struct HashDigest : IEquatable<HashDigest>
    {
        private readonly byte[] _hashDigest;

        public HashDigest(byte[] hashDigest)
        {
            if (hashDigest == null)
            {
                throw new NullReferenceException("HashDigest must not be null");
            }

            _hashDigest = hashDigest;
        }

        public static bool operator ==(HashDigest o1, HashDigest o2)
        {
            return o1.Equals(o2);
        }

        public static bool operator !=(HashDigest o1, HashDigest o2)
        {
            return !o1.Equals(o2);
        }

        public static HashDigest FromString(string s)
        {
            return new HashDigest(ByteUtil.ParseHex(s));
        }

        public bool HasLeadingZeroBits(int bits)
        {
            var leadingBytes = bits / 8;
            var trailingBits = bits % 8;

            if (_hashDigest.Length < (bits / 8) + 1)
            {
                return false;
            }

            for (int i = 0; i < leadingBytes; i++)
            {
                if (_hashDigest[i] != 0)
                {
                    return false;
                }
            }

            if (trailingBits != 0)
            {
                var mask = 0xff << (8 - trailingBits) & 0xff;
                return (_hashDigest[leadingBytes] & mask) == 0;
            }

            return true;
        }

        [Pure]
        public byte[] ToByteArray()
        {
            return (byte[])_hashDigest.Clone();
        }

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
            {
                return false;
            }

            return Equals((HashDigest)obj);
        }

        public bool Equals(HashDigest obj)
        {
            var objBytes = obj.ToByteArray();
            if (objBytes.Length != _hashDigest.Length)
            {
                return false;
            }

            for (int i = 0; i < objBytes.Length; i++)
            {
                if (objBytes[i] != _hashDigest[i])
                {
                    return false;
                }
            }

            return true;
        }

        public override int GetHashCode()
        {
            return ByteUtil.CalculateHashCode(_hashDigest);
        }

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
