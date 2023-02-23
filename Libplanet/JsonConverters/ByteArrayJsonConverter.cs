using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Libplanet.JsonConverters
{
    internal sealed class ByteArrayJsonConverter : JsonConverter<IReadOnlyList<byte>?>
    {
        public override bool HandleNull => true;

        public override bool CanConvert(Type typeToConvert) =>
            typeToConvert == typeof(byte[]) ||
            typeToConvert == typeof(ImmutableArray<byte>) ||
            typeToConvert == typeof(ImmutableArray<byte>?);

        public override IReadOnlyList<byte>? Read(
            ref Utf8JsonReader reader,
            Type typeToConvert,
            JsonSerializerOptions options)
        {
            var hex = reader.GetString();
            if (hex is null)
            {
                return null;
            }

            return typeToConvert == typeof(ImmutableArray<byte>)
                ? ByteUtil.ParseHexToImmutable(hex)
                : (IReadOnlyList<byte>?)ByteUtil.ParseHex(hex);
        }

        public override void Write(
            Utf8JsonWriter writer,
            IReadOnlyList<byte>? value,
            JsonSerializerOptions options)
        {
            if (value is null)
            {
                writer.WriteNullValue();
            }
            else
            {
                writer.WriteStringValue(ByteUtil.Hex(value is byte[] a ? a : value.ToArray()));
            }
        }
    }
}
