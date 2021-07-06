using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class HashAlgorithmTableTest
    {
        [Fact]
        public void ToHashAlgorithmGetter()
        {
            Dictionary<long, HashAlgorithmType> table = new Dictionary<long, HashAlgorithmType>
            {
                [0] = HashAlgorithmType.Of<SHA1>(),
                [10] = HashAlgorithmType.Of<SHA256>(),
                [100] = HashAlgorithmType.Of<SHA512>(),
            };
            HashAlgorithmGetter hashAlgorithmGetter = table.ToHashAlgorithmGetter();

            Assert.Equal(HashAlgorithmType.Of<SHA1>(), hashAlgorithmGetter(0));
            Assert.Equal(HashAlgorithmType.Of<SHA1>(), hashAlgorithmGetter(1));
            Assert.Equal(HashAlgorithmType.Of<SHA1>(), hashAlgorithmGetter(9));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), hashAlgorithmGetter(10));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), hashAlgorithmGetter(11));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), hashAlgorithmGetter(50));
            Assert.Equal(HashAlgorithmType.Of<SHA256>(), hashAlgorithmGetter(99));
            Assert.Equal(HashAlgorithmType.Of<SHA512>(), hashAlgorithmGetter(100));
            Assert.Equal(HashAlgorithmType.Of<SHA512>(), hashAlgorithmGetter(101));
            Assert.Equal(HashAlgorithmType.Of<SHA512>(), hashAlgorithmGetter(200));
            Assert.Equal(HashAlgorithmType.Of<SHA512>(), hashAlgorithmGetter(500));
            Assert.Equal(HashAlgorithmType.Of<SHA512>(), hashAlgorithmGetter(long.MaxValue));

            Assert.Throws<ArgumentException>(
                () => new KeyValuePair<long, HashAlgorithmType>[0].ToHashAlgorithmGetter()
            );
            Assert.Throws<ArgumentException>(() =>
                table.Append(
                    new KeyValuePair<long, HashAlgorithmType>(10, HashAlgorithmType.Of<MD5>())
                ).ToHashAlgorithmGetter()
            );
        }
    }
}
