using System;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Net.Messages;
using Xunit;

namespace Libplanet.Net.Tests.Messages
{
    public class MessageIdTest
    {
        [Fact]
        public void MessageIdMustBe32Bytes()
        {
            for (int size = 0; size < 36; size++)
            {
                if (size == 32)
                {
                    continue;
                }

                byte[] bytes = GetRandomBytes(size);
                Assert.Throws<ArgumentOutOfRangeException>(
                    "messageId",
                    () => new MessageId(bytes)
                );
            }
        }

        [Fact]
        public void FromHex()
        {
            MessageId actual = MessageId.FromHex(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc");
            var expected = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            Assert.Equal(expected, actual);

            Assert.Throws<FormatException>(() => MessageId.FromHex("0g"));
            Assert.Throws<ArgumentOutOfRangeException>("hex", () => MessageId.FromHex("1"));
            Assert.Throws<ArgumentOutOfRangeException>(
                "hex",
                () => MessageId.FromHex(
                    "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9c")
            );
            Assert.Throws<ArgumentOutOfRangeException>(
                "hex",
                () =>
                    MessageId.FromHex(
                        "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc0")
            );
            Assert.Throws<ArgumentOutOfRangeException>(
                "hex",
                () =>
                    MessageId.FromHex(
                        "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc00")
            );
        }

        [Fact]
        public void ToByteArray()
        {
            var bytes = GetRandomBytes(MessageId.Size);
            var messageId = new MessageId(bytes);

            Assert.Equal(bytes, messageId.ToByteArray());
        }

        [Fact]
        public void ToByteArrayShouldNotExposeContents()
        {
            var id = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            id.ToByteArray()[0] = 0x00;
            Assert.Equal(0x45, id.ToByteArray()[0]);
        }

        [Fact]
        public void ToHex()
        {
            var id = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            Assert.Equal(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc",
                id.ToHex()
            );
        }

        [Fact]
        public void ToString_()
        {
            var id = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            Assert.Equal(
                "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc",
                id.ToString()
            );
        }

        [Fact]
        public void Equals_()
        {
            var sameId1 = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            var sameId2 = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            var differentId = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0x00,
                    0x9c, 0x00,
                }
            );

            Assert.Equal(sameId1, sameId2);
            Assert.NotEqual(sameId2, differentId);

            Assert.True(sameId1 == sameId2);
            Assert.False(sameId2 == differentId);

            Assert.False(sameId1 != sameId2);
            Assert.True(sameId2 != differentId);
        }

        [Fact]
        public void CanSerializeAndDeserialize()
        {
            // Serialize and deserialize to and from memory
            var expectedId = new MessageId(
                new byte[]
                {
                    0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                    0x9c, 0xcc,
                }
            );
            MessageId deserializedId;
            BinaryFormatter formatter = new BinaryFormatter();
            using (var memoryStream = new MemoryStream())
            {
                formatter.Serialize(memoryStream, expectedId);
                memoryStream.Seek(0, SeekOrigin.Begin);
                deserializedId = (MessageId)formatter.Deserialize(memoryStream);
            }

            Assert.Equal(deserializedId, expectedId);
        }

        [Fact]
        public void Compare()
        {
            var random = new Random();
            var buffer = new byte[32];
            MessageId[] ids = Enumerable.Repeat(0, 50).Select(_ =>
            {
                random.NextBytes(buffer);
                return new MessageId(buffer);
            }).ToArray();
            for (int i = 1; i < ids.Length; i++)
            {
                MessageId left = ids[i - 1], right = ids[i];
                string leftString = left.ToHex().ToLower(),
                    rightString = right.ToHex().ToLower();
                Assert.Equal(
                    Math.Min(Math.Max(left.CompareTo(right), 1), -1),
                    Math.Min(Math.Max(leftString.CompareTo(rightString), 1), -1)
                );
                Assert.Equal(
                    left.CompareTo(right),
                    (left as IComparable).CompareTo(right)
                );
            }

            Assert.Throws<ArgumentNullException>(() =>
                ids[0].CompareTo(null)
            );
            Assert.Throws<ArgumentException>(() =>
                ids[0].CompareTo("invalid")
            );
        }

        private byte[] GetRandomBytes(int size)
        {
            var random = new Random();
            var bytes = new byte[size];
            random.NextBytes(bytes);
            return bytes;
        }
    }
}
