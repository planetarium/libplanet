using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Tests;
using Xunit;

namespace Libplanet.Extensions.Cocona.Tests
{
    public class UtilsTest
    {
        [Fact]
        public void TestHumanReadable()
        {
            var byteArray = ImmutableArray.Create<byte>(
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57
            );
            var dateTimeOffset = DateTimeOffset.ParseExact(
                DateTimeOffset.UtcNow.ToString(
                    Utils.DateTimeOffsetFormat,
                    CultureInfo.InvariantCulture
                ), Utils.DateTimeOffsetFormat,
                CultureInfo.InvariantCulture);
            var dummyClass = new DummyClass(byteArray, dateTimeOffset);

            var serialized = Utils.SerializeHumanReadable(dummyClass);
            var dummyClass2 = Utils.DeserializeHumanReadable<DummyClass>(serialized);
            Assert.True(dummyClass.SampleByteArray.SequenceEqual(dummyClass2.SampleByteArray));
            Assert.Equal(dummyClass.SampleDateTimeOffset, dummyClass2.SampleDateTimeOffset);
        }

        [Fact]
        public void TestHumanReadableHashAlgorithmField()
        {
            Block<Utils.DummyAction> genesisBlock = TestUtils.MineGenesisBlock<Utils.DummyAction>(
                index => HashAlgorithmType.Of<SHA256>(), TestUtils.GenesisMiner);

            // FIXME: More tests should be added once variable hash gets implemented.
            Assert.Matches(
                "\"HashAlgorithm\":[\\s]+\"SHA256\",", Utils.SerializeHumanReadable(genesisBlock));
        }

        private class DummyClass
        {
            public DummyClass()
            {
            }

            public DummyClass(
                ImmutableArray<byte> sampleByteArray,
                DateTimeOffset sampleDateTimeOffset)
            {
                SampleByteArray = sampleByteArray;
                SampleDateTimeOffset = sampleDateTimeOffset;
            }

            public ImmutableArray<byte> SampleByteArray { get; set; }

            public DateTimeOffset SampleDateTimeOffset { get; set; }
        }
    }
}
