using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Libplanet.Common;
using Libplanet.Types.Blocks;

namespace Libplanet.Types.Converters;

internal sealed class BlockHashJsonConverter : JsonConverter<BlockHash>
{
    public override BlockHash Read(
        ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options)
    {
        if (reader.GetString() is not { } hex)
        {
            throw new JsonException("Expected a string.");
        }

        try
        {
            return BlockHash.Parse(hex);
        }
        catch (ArgumentException e)
        {
            throw new JsonException(e.Message);
        }
    }

    public override void Write(
        Utf8JsonWriter writer,
        BlockHash value,
        JsonSerializerOptions options)
        => writer.WriteStringValue(ByteUtil.Hex(value.ByteArray));
}
