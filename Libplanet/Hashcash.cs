using System;
using System.Security.Cryptography;

namespace Libplanet
{
    public struct Nonce
    {
        private readonly byte[] _nonce;

        public Nonce(byte[] nonce)
        {
            if (nonce == null)
            {
                throw new NullReferenceException("nonce must not be null");
            }
            _nonce = nonce;
        }

        public byte[] ToByteArray()
        {
            return _nonce;
        }

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }

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

        public bool HasLeadingZeroBits(int bits)
        {
            var leadingBytes = bits / 8;
            var trailingBits = bits % 8;

            if (_hashDigest.Length < (bits / 8) + 1) return false;

            for (int i = 0; i < leadingBytes; i++)
            {
                if (_hashDigest[i] != 0) return false;
            }

            if (trailingBits != 0)
            {
                var mask = 0xff << (8 - trailingBits) & 0xff;
                return (_hashDigest[leadingBytes] & mask) == 0;
            }
            return true;
        }

        public byte[] ToByteArray()
        {
            return _hashDigest;
        }

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
            {
                return false;
            }
            return base.Equals (obj);
        }

        public bool Equals(HashDigest obj)
        {
            var objBytes = obj.ToByteArray();
            if (objBytes.Length != _hashDigest.Length) return false;
            for (int i = 0; i < objBytes.Length; i++)
            {
                if (objBytes[i] != _hashDigest[i]) return false;
            }
            return true;
        }

        public static bool operator==(HashDigest o1, HashDigest o2)
        {
            return o1.Equals(o2);
        }

        public static bool operator!=(HashDigest o1, HashDigest o2)
        {
            return !o1.Equals(o2);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return ByteUtil.Hex(ToByteArray());
        }
    }

    public static class Hashcash
    {
        public delegate byte[] Stamp(Nonce nonce);
        public static Nonce Answer(Stamp stamp, int difficulty)
        {
            int counter = 1;
            while (true)
            {
                var nonce = new Nonce(System.BitConverter.GetBytes(counter));
                var digest = Hash(stamp(nonce));
                if (digest.HasLeadingZeroBits(difficulty))
                {
                    return nonce;
                }
                counter++;
            }
        }

        public static HashDigest Hash(byte[] bytes)
        {
            using (SHA256 hashAlgo = SHA256.Create())
            {
                return new HashDigest(hashAlgo.ComputeHash(bytes));
            }
        }
    }
}
