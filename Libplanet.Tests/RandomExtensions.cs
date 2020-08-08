using System;
using System.Security.Cryptography;

namespace Libplanet.Tests
{
    public static class RandomExtensions
    {
        public static byte[] NextBytes(this Random random, int size)
        {
            var buffer = new byte[size];
            random.NextBytes(buffer);
            return buffer;
        }

        public static Address NextAddress(this Random random) =>
            new Address(random.NextBytes(Address.Size));

        public static HashDigest<T> NextHashDigest<T>(this Random random)
            where T : HashAlgorithm
        =>
            new HashDigest<T>(random.NextBytes(HashDigest<T>.Size));
    }
}
