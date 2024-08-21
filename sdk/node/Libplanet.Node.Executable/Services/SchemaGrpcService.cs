using Grpc.Core;
using Libplanet.Node.DependencyInjection;
using Libplanet.Node.Options.Schema;

namespace Libplanet.Node.API.Services;

[Grpc]
public class SchemaGrpcService : Schema.SchemaBase
{
    private string[]? _list;
    private string? _schema;

    public override async Task<GetListReply> GetList(
        GetListRequest request, ServerCallContext context)
    {
        _list ??= await Task.Run(GetOptionsList);

        return new GetListReply
        {
            List = { _list },
        };
    }

    public override async Task<GetSchemaReply> GetSchema(
        GetSchemaRequest request, ServerCallContext context)
    {
        _schema ??= await GetOptionsSchemaAsync(context.CancellationToken);

        return new GetSchemaReply
        {
            Schema = _schema,
        };
    }

    private static string[] GetOptionsList()
    {
        var optionsTypes = ServiceUtility.GetTypes(typeof(OptionsAttribute), inherit: true);
        var optionList = new List<string>();
        foreach (var optionsType in optionsTypes)
        {
            var optionsAttributes = GetAttributes(optionsType, scope: string.Empty);
            foreach (var optionsAttribute in optionsAttributes)
            {
                optionList.Add(optionsAttribute.Name);
            }
        }

        return [.. optionList];
    }

    private static async Task<string> GetOptionsSchemaAsync(CancellationToken cancellationToken)
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
    }

    private static IEnumerable<OptionsAttribute> GetAttributes(Type type, string scope)
        => Attribute.GetCustomAttributes(type, typeof(OptionsAttribute))
            .OfType<OptionsAttribute>();
}
