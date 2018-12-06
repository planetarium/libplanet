using System;
using System.Security.Cryptography;

namespace Libplanet
{
    public static class Hashcash
    {
        public delegate byte[] Stamp(Nonce nonce);

        public static Nonce Answer(Stamp stamp, uint difficulty)
        {
            int counter = 1;
            while (true)
            {
                var nonce = new Nonce(BitConverter.GetBytes(counter));
                var digest = Hash(stamp(nonce));
                if (digest.HasLeadingZeroBits(difficulty))
                {
                    return nonce;
                }

                counter++;
            }
        }

        public static HashDigest<SHA256> Hash(byte[] bytes)
        {
            using (SHA256 hashAlgo = SHA256.Create())
            {
                return new HashDigest<SHA256>(hashAlgo.ComputeHash(bytes));
            }
        }
    }
}
