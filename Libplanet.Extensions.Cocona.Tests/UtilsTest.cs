using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using Xunit;

namespace Libplanet.Extensions.Cocona.Tests
{
    public class UtilsTest
    {

        [Fact]
        public void TestHumanReadable()
        {
            var byteArray = ImmutableArray.Create<byte>(
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc
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
