using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Xunit;

namespace Libplanet.Tests
{
    public class HashDigestTest
    {
        [Fact]
        public void DefaultConstructor()
        {
            HashDigest<SHA1> sha1Default = default;
            Assert.Equal(new HashDigest<SHA1>(new byte[20]), sha1Default);

            HashDigest<SHA256> sha256Default = default;
            Assert.Equal(new HashDigest<SHA256>(new byte[32]), sha256Default);
        }

        [Fact]
        public void DisallowNull()
        {
            Assert.Throws<ArgumentNullException>(
                () => new HashDigest<SHA1>(null)
            );
            Assert.Throws<ArgumentNullException>(
                () => new HashDigest<SHA256>(null)
            );
        }

        [Fact]
        public void ToHashDigestWorks()
        {
            var b =
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                };
            var expected = new HashDigest<SHA1>(b);
            HashDigest<SHA1> actual =
                "45a22187e2d8850bb357886958bc3e8560929ccc".ToHashDigest<SHA1>();

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void FromStringWorks()
        {
            var b =
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                };
            var expected = new HashDigest<SHA1>(b);
            HashDigest<SHA1> actual = HashDigest<SHA1>.FromString(
                "45a22187e2d8850bb357886958bc3e8560929ccc");

            Assert.Equal(expected, actual);

            Assert.Throws<ArgumentNullException>(
                () => HashDigest<SHA1>.FromString(null)
            );
        }

        [Fact]
        public void HashDigestDisallowsIncorrectSizedBytes()
        {
            for (int i = 0; i < 22; ++i)
            {
                if (i == 20)
                {
                    new HashDigest<SHA1>(new byte[i]);
                    HashDigest<SHA1>.FromString(new string('0', i * 2));
                    continue;
                }

                Assert.Throws<ArgumentOutOfRangeException>(
                    () => new HashDigest<SHA1>(new byte[i])
                );
                Assert.Throws<ArgumentOutOfRangeException>(
                    () => HashDigest<SHA1>.FromString(new string('0', i * 2))
                );
            }
        }

        [Fact]
        public void FromImmutableArrayConstructor()
        {
            var b =
                new byte[20]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                };
            var bAsArray = b.ToImmutableArray();

            var expected = new HashDigest<SHA1>(b);
            HashDigest<SHA1> actual = new HashDigest<SHA1>(bAsArray);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void FromImmutableArrayDisallowIncorrectSizeBytes()
        {
            var b =
                new byte[10]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                };
            var bAsArray = b.ToImmutableArray();

            Assert.Throws<ArgumentOutOfRangeException>(
                () => new HashDigest<SHA1>(bAsArray)
            );
        }
    }
}
