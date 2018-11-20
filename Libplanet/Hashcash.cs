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

    public struct HashDigest
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
                var digest = HashAlgorithm(stamp(nonce));
                if (digest.HasLeadingZeroBits(difficulty))
                {
                    return nonce;
                }
                counter++;
            }
        }

        public static HashDigest HashAlgorithm(byte[] bytes)
        {
            using (SHA256 hashAlgo = SHA256.Create())
            {
                return new HashDigest(hashAlgo.ComputeHash(bytes));
            }
        }

    }
}
