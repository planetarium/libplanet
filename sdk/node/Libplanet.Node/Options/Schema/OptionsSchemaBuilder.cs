using System.ComponentModel;
using System.Reflection;
using NJsonSchema;
using NJsonSchema.Generation;

namespace Libplanet.Node.Options.Schema;

public sealed class OptionsSchemaBuilder
{
#pragma warning disable S1075 // URIs should not be hardcoded
    public const string BaseSchemaUrl = "https://json.schemastore.org/appsettings.json";
#pragma warning restore S1075 // URIs should not be hardcoded

    private readonly Dictionary<string, Type> _typeByName = [];

    public static async Task<string> GetSchemaAsync(CancellationToken cancellationToken)
    {
        var schemaBuilder = new OptionsSchemaBuilder();
        var optionsTypes = ServiceUtility.GetTypes(typeof(OptionsAttribute), inherit: true);
        foreach (var optionsType in optionsTypes)
        {
            var optionsAttributes = GetAttributes(optionsType, scope: string.Empty);
            foreach (var optionsAttribute in optionsAttributes)
            {
                schemaBuilder.Add(optionsAttribute.Name, optionsType);
            }

            cancellationToken.ThrowIfCancellationRequested();
        }

        return await schemaBuilder.BuildAsync(cancellationToken);

        static IEnumerable<OptionsAttribute> GetAttributes(Type type, string scope)
            => Attribute.GetCustomAttributes(type, typeof(OptionsAttribute))
                .OfType<OptionsAttribute>();
    }

    public void Add(string name, Type type)
    {
        _typeByName.Add(name, type);
    }

    public async Task<string> BuildAsync(CancellationToken cancellationToken)
    {
        var schema = new JsonSchema();
        var originSchema = await JsonSchema.FromUrlAsync(BaseSchemaUrl, cancellationToken);
        var optionsSchema = new JsonSchema
        {
            Type = JsonObjectType.Object,
        };

        schema.Definitions["appsettings"] = originSchema;
        schema.AllOf.Add(new JsonSchema
        {
            Reference = originSchema,
        });
        schema.AllOf.Add(optionsSchema);
        foreach (var (name, type) in _typeByName)
        {
            var optionsType = typeof(OptionsBase<>).MakeGenericType(type);
            var settings = new SystemTextJsonSchemaGeneratorSettings
            {
                ExcludedTypeNames = [optionsType.FullName!],
                FlattenInheritanceHierarchy = true,
            };
            var schemaGenerator = new OptionsSchemaGenerator(settings);
            var typeSchema = schemaGenerator.Generate(type);
            schema.Definitions[name] = typeSchema;
            optionsSchema.Properties.Add(name, new JsonSchemaProperty()
            {
                Description = GetDescription(type),
                Reference = typeSchema,
            });
        }

        return schema.ToJson();
    }

    private static string GetDescription(Type type)
    {
        if (type.GetCustomAttribute<DescriptionAttribute>() is { } descriptionAttribute)
        {
            return descriptionAttribute.Description;
        }

        return $"Type '{type.Name}' does not have a description.";
    }
}
