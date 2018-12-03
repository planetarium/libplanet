using System;

namespace Libplanet.Tests
{
    internal class TestUtils
    {
        internal static byte[] GetRandomBytes(int size)
        {
            var random = new Random();
            var bytes = new byte[size];
            random.NextBytes(bytes);

            return bytes;
        }
    }
}
