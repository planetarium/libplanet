using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.GraphTypes;

namespace Libplanet.Explorer.Queries
{
    public class BlockQuery<T> : ObjectGraphType
        where T : IAction, new()
    {
        public BlockQuery()
        {
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<BlockType<T>>>>>(
                "blocks",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType> { Name = "limit" },
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "excludeEmptyTxs",
                        DefaultValue = false,
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    bool excludeEmptyTxs = context.GetArgument<bool>("excludeEmptyTxs");
                    return Query<T>.ListBlocks(desc, offset, limit, excludeEmptyTxs);
                }
            );

            Field<BlockType<T>>(
                "block",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "hash" },
                    new QueryArgument<IdGraphType> { Name = "index" }
                ),
                resolve: context =>
                {
                    string? hash = context.GetArgument<string?>("hash", null);
                    long? index = context.GetArgument<long?>("index", null);

                    if ((hash is string && index is long) || (hash is null && index is null)) {
                        throw new System.Exception("Unexpected block query");    
                    }

                    if (hash is string hashNotNull) {
                        return Query<T>.GetBlockByHash(HashDigest<SHA256>.FromString(hashNotNull));
                    }


                    if (index is long indexNotNull) {
                        return Query<T>.GetBlockByIndex(indexNotNull);
                    }

                    throw new System.Exception("Unexpected block query");
                }
            );

            Name = "BlockQuery";
        }
    }
}
