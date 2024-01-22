using System;
using System.IO;
using System.Text;
using System.Text.Json;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Types;
using Libplanet.Common;

namespace Libplanet.Explorer.GraphTypes
{
    public class ActionType : ObjectGraphType<IValue>
    {
        public ActionType()
        {
            Name = "Action";

            Field<NonNullGraphType<StringGraphType>>(
                name: "Raw",
                description: "Raw Action data ('hex' or 'base64' encoding available.)",
                arguments: new QueryArguments(
                    new QueryArgument<StringGraphType>
                    {
                        DefaultValue = "hex",
                        Name = "encode",
                    }),
                resolve: ctx =>
                {
                    var codec = new Codec();
                    var encoded = codec.Encode(ctx.Source);

                    var encode = ctx.GetArgument<string>("encode");
                    switch (encode)
                    {
                        case "hex":
                            return ByteUtil.Hex(encoded);

                        case "base64":
                            return Convert.ToBase64String(encoded);

                        default:
                            var msg =
                                "Unsupported 'encode' method came. " +
                                "It supports only 'hex' or 'base64'.";
                            throw new ExecutionError(msg);
                    }
                }
            );

            Field<NonNullGraphType<StringGraphType>>(
                name: "Inspection",
                description: "A readable representation for debugging.",
                resolve: ctx => ctx.Source.Inspect()
            );

            Field<NonNullGraphType<StringGraphType>>(
                name: "json",
                description: "A JSON representation of action data",
                resolve: ctx =>
                {
                    var converter = new Bencodex.Json.BencodexJsonConverter();
                    var buffer = new MemoryStream();
                    var writer = new Utf8JsonWriter(buffer);
                    converter.Write(writer, ctx.Source, new JsonSerializerOptions());
                    return Encoding.UTF8.GetString(buffer.ToArray());
                }
            );
        }
    }
}
