using System;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Types.Evidence;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blockchain.Evidence
{
    public class EvidenceIdTest
    {
        public static readonly object[][] RandomBytes = new[]
        {
            new object[] { GetRandomBytes(0) },
            new object[] { GetRandomBytes(31) },
            new object[] { GetRandomBytes(33) },
        };

        [Theory]
        [MemberData(nameof(RandomBytes))]
        public void Create_WithBytesLengthNot32_FailTest(byte[] evidenceId)
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                paramName: nameof(evidenceId),
                testCode: () => new EvidenceId(evidenceId));
        }

        [Theory]
        [MemberData(nameof(RandomBytes))]
        public void Create_WithImmutableBytesLengthNot32_FailTest(byte[] evidenceId)
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                paramName: nameof(evidenceId),
                testCode: () => new EvidenceId(evidenceId.ToImmutableArray()));
        }

        [Fact]
        public void FromHex_Test()
        {
            // Given
            var expectedEvidenceId = new EvidenceId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );

            // Then
            var actualEvidenceId = EvidenceId.Parse(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc");
            Assert.Equal(expectedEvidenceId, actualEvidenceId);
        }

        [Theory]
        [InlineData("0g")]
        public void FromHex_WithInvalidFormat_FailTest(string hex)
        {
            Assert.Throws<FormatException>(() => EvidenceId.Parse(hex));
        }

        [Theory]
        [InlineData("1")]
        [InlineData("45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9c")]
        [InlineData("45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc0")]
        [InlineData("45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc00")]
        public void FromHex_WithInvalidLength_FailTest(string hex)
        {
            Assert.Throws<ArgumentOutOfRangeException>(
                paramName: nameof(hex),
                testCode: () => EvidenceId.Parse(hex));
        }

        [Fact]
        public void ToByteArray_Test()
        {
            // Given
            var expectedBytes = GetRandomBytes(EvidenceId.Size);

            // When
            var evidenceId = new EvidenceId(expectedBytes);

            // Then
            var actualBytes = evidenceId.ToByteArray();

            Assert.Equal(expectedBytes, actualBytes);
        }

        [Fact]
        public void ToByteArray_ShouldNotExposeContents_Test()
        {
            // Given
            var bytes = new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc,
            };
            var evidenceId = new EvidenceId(bytes);
            var index = Random.Shared.Next(bytes.Length);
            var expectedByte = bytes[index];

            // When
            evidenceId.ToByteArray()[index] = 0x00;

            // Then
            var actualByte = evidenceId.ToByteArray()[index];
            Assert.Equal(expectedByte, actualByte);
        }

        [Fact]
        public void ToHex_Test()
        {
            // Given
            var evidenceId = new EvidenceId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );

            // Then
            var expectedHex = "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc";
            var actualHex = evidenceId.ToString();
            Assert.Equal(expectedHex, actualHex);
        }

        [Fact]
        public void ToString_Test()
        {
            // Given
            var evidenceId = new EvidenceId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );

            // Then
            var expectedString = "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc";
            var actualString = evidenceId.ToString();
            Assert.Equal(expectedString, actualString);
        }

        [Fact]
        public void Equals_Test()
        {
            // Given
            var sameEvidenceId1 = new EvidenceId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            var sameEvidenceId2 = new EvidenceId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            var differentEvidenceId = new EvidenceId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                    0x9c, 0x00,
                }
            );

            // Then
            Assert.Equal(sameEvidenceId1, sameEvidenceId2);
            Assert.NotEqual(sameEvidenceId2, differentEvidenceId);

            Assert.True(sameEvidenceId1 == sameEvidenceId2);
            Assert.False(sameEvidenceId2 == differentEvidenceId);

            Assert.False(sameEvidenceId1 != sameEvidenceId2);
            Assert.True(sameEvidenceId2 != differentEvidenceId);
        }

        [Fact]
        public void Compare_Test()
        {
            const int length = 50;
            var evidenceIds
                = Enumerable.Repeat(0, length)
                            .Select(_ => new EvidenceId(GetRandomBytes(EvidenceId.Size)))
                            .ToArray();

            for (int i = 1; i < evidenceIds.Length; i++)
            {
                var left = evidenceIds[i - 1];
                var right = evidenceIds[i];
                var leftString = left.ToString().ToLower();
                var rightString = right.ToString().ToLower();
                Assert.Equal(
                    Math.Min(Math.Max(left.CompareTo(right), 1), -1),
                    Math.Min(Math.Max(leftString.CompareTo(rightString), 1), -1)
                );
                Assert.Equal(
                    left.CompareTo(right),
                    (left as IComparable).CompareTo(right)
                );
            }
        }

        [Theory]
        [InlineData(null)]
        [InlineData("invalid")]
        public void Compare_WithInvalidValue_FailTest(object value)
        {
            // Given
            var evidenceId = new EvidenceId(GetRandomBytes(EvidenceId.Size));

            // Then
            Assert.Equal(1, evidenceId.CompareTo(value));
        }

        [Fact]
        public void Bencoded_Test()
        {
            var expectedEvidenceId = new EvidenceId(GetRandomBytes(EvidenceId.Size));
            var actualEvidenceId = new EvidenceId(expectedEvidenceId.Bencoded);
            Assert.Equal(expectedEvidenceId, actualEvidenceId);
        }

        [Fact]
        public void Bencoded_WithDefaultInstance_Test()
        {
            var expectedEvidenceId = default(EvidenceId);
            var actualEvidenceId = new EvidenceId(expectedEvidenceId.Bencoded);
            Assert.Equal(expectedEvidenceId, actualEvidenceId);
        }

        [SkippableFact]
        public void JsonSerialization()
        {
            EvidenceId evidenceId = EvidenceId.Parse(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc");
            AssertJsonSerializable(
                evidenceId,
                "\"45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc\""
            );
        }
    }
}
