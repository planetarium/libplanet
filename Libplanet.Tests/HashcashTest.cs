using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Libplanet.Tests
{
    public class HashcashTest
    {
        [Theory]
        [ClassData(typeof(HashcashTestData))]
        public void AnswerHasLeadingZeroBits(byte[] challenge, int bits)
        {
            Hashcash.Stamp stamp =
                nonce => challenge.Concat(nonce.ToByteArray()).ToArray();
            var answer = Hashcash.Answer(stamp, bits);
            var digest = Hashcash.Hash(stamp(answer));
            Assert.True(digest.HasLeadingZeroBits(bits));
        }

        [Fact]
        public void TestBytesWithLeadingZeroBits()
        {
            Assert.True(HasLeadingZeros(new byte[1] {0x80}, 0));
            Assert.False(HasLeadingZeros(new byte[1] {0x80}, 1));
            for (int bits = 0; bits < 9; bits++)
            {
                Assert.True(HasLeadingZeros(new byte[2] {0x00, 0x80}, bits));
            }
            Assert.False(HasLeadingZeros(new byte[2] {0x00, 0x80}, 9));
            Assert.True(HasLeadingZeros(new byte[2] {0x00, 0x7f}, 9));
            Assert.False(HasLeadingZeros(new byte[2] {0x00, 0x7f}, 10));
            Assert.True(HasLeadingZeros(new byte[2] {0x00, 0x20}, 10));
            Assert.False(HasLeadingZeros(new byte[1] {0x00}, 9));
        }

        bool HasLeadingZeros(byte[] bytes, int bits)
        {
            return new HashDigest(bytes).HasLeadingZeroBits(bits);
        }
    }

    public class HashcashTestData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            for (int bits = 1; bits < 20; bits += 2)
            {
                for (int i = 0; i < 2; i++)
                {
                    var challenge = TestUtils.GetRandomBytes(40);
                    yield return new object[] { challenge, bits };
                }
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return this.GetEnumerator();
        }
    }
}
