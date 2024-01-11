using System;
using System.IO;
using System.Text;
using System.Text.Json;
using Bencodex;
using Bencodex.Types;
using GraphQL.Types;
using Libplanet.Common;

namespace Libplanet.Explorer.GraphTypes
{
    public class IValueType : ObjectGraphType<IValue>
    {
        private static Codec _codec = new Codec();

        public IValueType()
        {
            Name = "IValue";

            Field<NonNullGraphType<StringGraphType>>(
                name: "hex",
                description:
                    "A hexadecimal representation of the bencodex value encoded as byte array.",
                resolve: context => ByteUtil.Hex(_codec.Encode(context.Source))
            );

            Field<NonNullGraphType<StringGraphType>>(
                name: "base64",
                description:
                    "A base64 representation of the bencodex value encoded to byte array.",
                resolve: context => Convert.ToBase64String(_codec.Encode(context.Source))
            );

            Field<NonNullGraphType<StringGraphType>>(
                name: "inspection",
                description: "A human readable representation of the bencodex value.",
                resolve: context => context.Source.Inspect()
            );

            Field<NonNullGraphType<StringGraphType>>(
                name: "json",
                description: "A JSON representation of the bencodex value",
                resolve: context =>
                {
                    var converter = new Bencodex.Json.BencodexJsonConverter();
                    var buffer = new MemoryStream();
                    var writer = new Utf8JsonWriter(buffer);
                    converter.Write(writer, context.Source, new JsonSerializerOptions());
                    return Encoding.UTF8.GetString(buffer.ToArray());
                }
            );
        }
    }
}
