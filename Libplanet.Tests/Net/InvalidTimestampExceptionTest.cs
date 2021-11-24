using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Net;
using Xunit;

namespace Libplanet.Tests.Net
{
    public class InvalidTimestampExceptionTest
    {
        public static IEnumerable<object[]> TestData => new List<object[]>()
        {
            new object[] { null },
            new object[] { TimeSpan.FromSeconds(1) },
        };

        [Theory]
        [MemberData(nameof(TestData))]
        public void Serialization(TimeSpan? lifespan)
        {
            var e = new InvalidTimestampException(
                "An error message",
                DateTimeOffset.UtcNow,
                lifespan,
                DateTimeOffset.UtcNow + TimeSpan.FromSeconds(1));
            var f = new BinaryFormatter();
            InvalidTimestampException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidTimestampException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.Equal(e.CreatedOffset, e2.CreatedOffset);
            Assert.Equal(e.Lifespan, e2.Lifespan);
            Assert.Equal(e.CurrentOffset, e2.CurrentOffset);
        }
    }
}
