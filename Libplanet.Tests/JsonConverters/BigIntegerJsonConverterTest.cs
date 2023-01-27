using System.Numerics;
using System.Text;
using System.Text.Json;
using Libplanet.JsonConverters;
using Xunit;

namespace Libplanet.Tests.JsonConverters
{
    public class BigIntegerJsonConverterTest
    {
        [Fact]
        public void Write()
        {
            var converter = new BigIntegerJsonConverter();
            var stream = new System.IO.MemoryStream();
            using (var writer = new Utf8JsonWriter(stream))
            {
                converter.Write(writer, new BigInteger(ulong.MaxValue) + 1, null);
            }

            stream.Seek(0, System.IO.SeekOrigin.Begin);
            string actual = Encoding.ASCII.GetString(stream.GetBuffer(), 0, (int)stream.Length);
            Assert.Equal("18446744073709551616", actual);
        }

        [Fact]
        public void Read()
        {
            byte[] jsonBytes = Encoding.ASCII.GetBytes("18446744073709551616");
            var reader = new Utf8JsonReader(jsonBytes);
            reader.Read();
            var converter = new BigIntegerJsonConverter();
            BigInteger actual = converter.Read(ref reader, typeof(BigInteger), null);
            Assert.Equal(new BigInteger(ulong.MaxValue) + 1, actual);
        }
    }
}
