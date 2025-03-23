using System;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Libplanet.Common.JsonConverters;

// NOTE: As JsonConverterAttribute does not take a generic type, we need to make
// a JsonConverter<System.Object> instead.
[SuppressMessage(
    "StyleCop.CSharp.MaintainabilityRules",
    "SA1402:FileMayOnlyContainASingleClass",
    Justification = "It's okay to have non-public classes together in a single file."
)]
internal class HashDigestJsonConverter : JsonConverter<object>
{
    private Type? _queriedType;

    public override bool CanConvert(Type typeToConvert)
    {
        if (typeToConvert.IsConstructedGenericType &&
            typeToConvert.GetGenericTypeDefinition() == typeof(HashDigest<>))
        {
            _queriedType = typeToConvert;
            return true;
        }

        _queriedType = null;
        return false;
    }

    public override object Read(
        ref Utf8JsonReader reader,
        Type typeToConvert,
        JsonSerializerOptions options
    )
    {
        if (typeToConvert == typeof(object) && _queriedType is { } t)
        {
            typeToConvert = t;
        }

        MethodInfo fromString = typeToConvert.GetMethod(
            "Parse",
            BindingFlags.Public | BindingFlags.Static
        )!;
        string? hex = reader.GetString();
        try
        {
            return fromString.Invoke(null, [hex])!;
        }
        catch (ArgumentException e)
        {
            throw new JsonException(e.Message);
        }
    }

    public override void Write(
        Utf8JsonWriter writer,
        object value,
        JsonSerializerOptions options
    ) =>
        writer.WriteStringValue(value.ToString());
}
