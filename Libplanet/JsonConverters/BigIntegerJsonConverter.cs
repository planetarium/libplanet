using System;
using System.Buffers;
using System.Globalization;
using System.Numerics;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Libplanet.JsonConverters
{
    internal sealed class BigIntegerJsonConverter : JsonConverter<BigInteger>
    {
        public override BigInteger Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.Number)
            {
                throw new JsonException($"Expected a number, not a {reader.TokenType}");
            }

#if NETSTANDARD2_0
            byte[] bytes;
            if (reader.HasValueSequence)
            {
                bytes = reader.ValueSequence.ToArray();
            }
            else
            {
                // Don't know why, but the compiler errors out with the following message:
                //   PC001: ReadOnlySpan<T>.ToArray() isn't supported on Linux, macOS, and Windows
                // if I try to use ReadOnlySpan<T>.ToArray().  Here's a workaround:
                ReadOnlySpan<byte> span = reader.ValueSpan;
                bytes = new byte[span.Length];
                for (int i = 0; i < span.Length; i++)
                {
                    bytes[i] = span[i];
                }
            }
#else
            ReadOnlySpan<byte> bytes = reader.HasValueSequence
                ? reader.ValueSequence.ToArray()
                : reader.ValueSpan;
#endif

            string digits = Encoding.ASCII.GetString(bytes);
            return BigInteger.Parse(digits, NumberFormatInfo.InvariantInfo);
        }

        public override void Write(
            Utf8JsonWriter writer,
            BigInteger value,
            JsonSerializerOptions options
        ) =>
            writer.WriteRawValue(value.ToString(NumberFormatInfo.InvariantInfo), false);
    }
}
