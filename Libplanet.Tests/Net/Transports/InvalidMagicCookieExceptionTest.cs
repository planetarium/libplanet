using System;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using Libplanet.Net.Transports;
using Xunit;

namespace Libplanet.Tests.Net.Transports
{
    public class InvalidMagicCookieExceptionTest
    {
        [Fact]
        public void Serialization()
        {
            Random random = new Random();
            byte[] expected = new byte[20];
            byte[] actual = new byte[20];
            random.NextBytes(expected);
            random.NextBytes(actual);

            var e = new InvalidMagicCookieException("An error message", expected, actual);
            var f = new BinaryFormatter();
            InvalidMagicCookieException e2;

            using (var s = new MemoryStream())
            {
                f.Serialize(s, e);
                s.Seek(0, SeekOrigin.Begin);
                e2 = (InvalidMagicCookieException)f.Deserialize(s);
            }

            Assert.Equal(e.Message, e2.Message);
            Assert.True(e.Expected.SequenceEqual(e2.Expected));
            Assert.True(e.Actual.SequenceEqual(e2.Actual));
        }
    }
}
