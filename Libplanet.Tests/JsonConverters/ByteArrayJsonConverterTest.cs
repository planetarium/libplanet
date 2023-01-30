using System.Collections.Generic;
using System.Collections.Immutable;
using System.Text;
using System.Text.Json;
using Libplanet.JsonConverters;
using Xunit;

namespace Libplanet.Tests.JsonConverters
{
    public class ByteArrayJsonConverterTest
    {
        [Fact]
        public void Write()
        {
            var converter = new ByteArrayJsonConverter();
            var stream = new System.IO.MemoryStream();
            using (var writer = new Utf8JsonWriter(stream))
            {
                writer.WriteStartArray();
                converter.Write(writer, new byte[] { 0xc4, 0x92, 0xa0 }, null);
                converter.Write(writer, ImmutableArray.Create<byte>(0xfa, 0x7e, 0xf0), null);
                converter.Write(
                    writer,
                    (ImmutableArray<byte>?)ImmutableArray.Create<byte>(0x3c, 0xce, 0x82),
                    null
                );
                converter.Write(writer, (ImmutableArray<byte>?)null, null);
                writer.WriteEndArray();
            }

            stream.Seek(0, System.IO.SeekOrigin.Begin);
            string actual = Encoding.ASCII.GetString(stream.GetBuffer(), 0, (int)stream.Length);
            Assert.Equal("[\"c492a0\",\"fa7ef0\",\"3cce82\",null]", actual);
        }

        [Fact]
        public void Read()
        {
            byte[] jsonBytes = Encoding.ASCII.GetBytes("\"c492a0\"");
            var reader = new Utf8JsonReader(jsonBytes);
            reader.Read();
            var converter = new ByteArrayJsonConverter();
            IReadOnlyList<byte> actual = converter.Read(ref reader, typeof(byte[]), null);
            Assert.IsType<byte[]>(actual);
            Assert.Equal(new byte[] { 0xc4, 0x92, 0xa0 }, actual);

            reader = new Utf8JsonReader(jsonBytes);
            reader.Read();
            actual = converter.Read(ref reader, typeof(ImmutableArray<byte>), null);
            Assert.IsType<ImmutableArray<byte>>(actual);
            Assert.Equal(ImmutableArray.Create<byte>(0xc4, 0x92, 0xa0), actual);

            jsonBytes = Encoding.ASCII.GetBytes("null");
            reader = new Utf8JsonReader(jsonBytes);
            reader.Read();
            actual = converter.Read(ref reader, typeof(ImmutableArray<byte>?), null);
            Assert.Null(actual);
        }
    }
}
