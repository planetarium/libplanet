using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Xunit;

namespace Libplanet.Net.Transports.Tests
{
    public class InvalidMessageTimestampExceptionTest
    {
        public static IEnumerable<object?[]> TestData => new List<object?[]>()
        {
            new object?[] { null },
            new object?[] { TimeSpan.FromSeconds(1) },
        };

        [Theory]
        [MemberData(nameof(TestData))]
        public void Serialization(TimeSpan? buffer)
        {
            var e1 = new InvalidMessageTimestampException(
                "An error message",
                DateTimeOffset.UtcNow,
                buffer,
                DateTimeOffset.UtcNow + TimeSpan.FromSeconds(1));
            var f = new BinaryFormatter();
            InvalidMessageTimestampException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e1);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidMessageTimestampException)f.Deserialize(s);
            }

            Assert.Equal(e1.Message, e2.Message);
            Assert.Equal(e1.CreatedOffset, e2.CreatedOffset);
            Assert.Equal(e1.Buffer, e2.Buffer);
            Assert.Equal(e1.CurrentOffset, e2.CurrentOffset);
        }
    }
}
