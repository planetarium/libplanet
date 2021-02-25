using System;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Blocks;
using Xunit;

namespace Libplanet.Tests.Blocks
{
    public class BlockHashTest
    {
        [Fact]
        public void DefaultConstructor()
        {
            BlockHash def = default;
            Assert.Equal(default, def);
            Assert.Equal(new BlockHash(new byte[0]), def);
            Assert.Equal(new BlockHash(default(ImmutableArray<byte>)), def);
            Assert.Equal(new BlockHash(ImmutableArray<byte>.Empty), def);
        }

        [Fact]
        public void DisallowNull()
        {
            Assert.Throws<ArgumentNullException>(() => new BlockHash(null));
        }

        [Fact]
        public void FromString()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            var expected = new BlockHash(b);
            BlockHash actual = BlockHash.FromString("45a22187e2d8850bb357886958bc3e8560929ccc");
            Assert.Equal(expected, actual);

            Assert.Throws<ArgumentNullException>(() => BlockHash.FromString(null));
            Assert.Throws<ArgumentOutOfRangeException>(() => BlockHash.FromString("abc"));
            Assert.Throws<FormatException>(() => BlockHash.FromString("asdf"));
        }

        [Fact]
        public void FromImmutableArrayConstructor()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            var bAsArray = b.ToImmutableArray();

            var expected = new BlockHash(b);
            var actual = new BlockHash(bAsArray);
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void Satisfies()
        {
            Func<string, BlockHash> hash = BlockHash.FromString;
            var def = default(BlockHash);
            var emp = new BlockHash(new byte[0]);
            var dl1 = hash("8ec2f5285c8fc2f5285c8fc2f5285c8fc2f5285c8fc2f5285c8fc2f5285c8f00");
            var dl2 = hash("e94a399c4fd6d508f022bbee8781a9c44754408bb92ca5b509fa824b00000000");
            var dl4 = hash("a85f4662e531e44d161346dcaa256af7923c87291b5408b109fa820000000000");

            Assert.True(def.Satisfies(0));
            Assert.True(emp.Satisfies(0));
            Assert.True(dl1.Satisfies(0));
            Assert.True(dl2.Satisfies(0));
            Assert.True(dl4.Satisfies(0));

            Assert.False(def.Satisfies(1));
            Assert.False(emp.Satisfies(1));
            Assert.True(dl1.Satisfies(1));
            Assert.True(dl2.Satisfies(1));
            Assert.True(dl4.Satisfies(1));

            Assert.False(def.Satisfies(457));
            Assert.False(emp.Satisfies(457));
            Assert.True(dl1.Satisfies(457));
            Assert.True(dl2.Satisfies(457));
            Assert.True(dl4.Satisfies(457));

            Assert.False(def.Satisfies(458));
            Assert.False(emp.Satisfies(458));
            Assert.False(dl1.Satisfies(458));
            Assert.True(dl2.Satisfies(458));
            Assert.True(dl4.Satisfies(458));

            Assert.False(def.Satisfies(14560825400));
            Assert.False(emp.Satisfies(14560825400));
            Assert.False(dl1.Satisfies(14560825400));
            Assert.True(dl2.Satisfies(14560825400));
            Assert.True(dl4.Satisfies(14560825400));

            Assert.False(def.Satisfies(14560825401));
            Assert.False(emp.Satisfies(14560825401));
            Assert.False(dl1.Satisfies(14560825401));
            Assert.False(dl2.Satisfies(14560825401));
            Assert.True(dl4.Satisfies(14560825401));
        }

        [Fact]
        public void SerializeAndDeserialize()
        {
            byte[] b =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69,
            };

            var expected = new BlockHash(b);
            BlockHash deserialized;
            BinaryFormatter formatter = new BinaryFormatter();
            using (var memoryStream = new MemoryStream())
            {
                formatter.Serialize(memoryStream, expected);
                memoryStream.Seek(0, SeekOrigin.Begin);
                deserialized = (BlockHash)formatter.Deserialize(memoryStream);
            }

            Assert.Equal(deserialized, expected);
        }
    }
}
