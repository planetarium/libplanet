using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Reflection;
using System.Runtime.Serialization;
using Libplanet.Node.DataAnnotations;
using Namotion.Reflection;
using NJsonSchema;
using NJsonSchema.Generation;

namespace Libplanet.Node.Options.Schema;

internal sealed class OptionsSchemaGenerator : JsonSchemaGenerator
{
    public OptionsSchemaGenerator(JsonSchemaGeneratorSettings settings)
        : base(settings)
    {
    }

    public override void ApplyDataAnnotations(
        JsonSchema schema, JsonTypeDescription typeDescription)
    {
        base.ApplyDataAnnotations(schema, typeDescription);

        var contextualType = typeDescription.ContextualType;
        if (typeDescription.ContextualType.OriginalType.IsArray && schema.Item is not null)
        {
            var arrayAttribute = contextualType.GetContextAttributes(true)
                .OfType<ArrayAttribute>()
                .FirstOrDefault();
            if (arrayAttribute != null)
            {
                var validationAttribute = arrayAttribute.CreateAttribute();
                if (validationAttribute is RegularExpressionAttribute regexAttribute)
                {
                    schema.Item.Pattern = regexAttribute.Pattern;
                }
            }
        }
    }

    protected override void GenerateEnum(JsonSchema schema, JsonTypeDescription typeDescription)
    {
        var contextualType = typeDescription.ContextualType;

        schema.Type = JsonObjectType.String;
        schema.Enumeration.Clear();
        schema.EnumerationNames.Clear();
        schema.IsFlagEnumerable = contextualType.IsAttributeDefined<FlagsAttribute>(true);

        foreach (var enumName in Enum.GetNames(contextualType.Type))
        {
            schema.Enumeration.Add(enumName);
        }

        if (Settings.GenerateEnumMappingDescription)
        {
            schema.Description = (schema.Description + "\n\n" +
                string.Join("\n", schema.EnumerationNames)).Trim();
        }
    }
}
