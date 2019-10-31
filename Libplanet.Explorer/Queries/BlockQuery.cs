using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Tx;

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
                    new QueryArgument<IdGraphType> { Name = "hash" }
                ),
                resolve: context =>
                {
                    HashDigest<SHA256> hash = HashDigest<SHA256>.FromString(
                        context.GetArgument<string>("hash"));
                    return Query<T>.GetBlock(hash);
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "transactions",
                arguments: new QueryArguments(
                    new QueryArgument<AddressType>
                    {
                        Name = "signer",
                        DefaultValue = null,
                    },
                    new QueryArgument<AddressType>
                    {
                        Name = "involvedAddress",
                        DefaultValue = null,
                    },
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
                    new QueryArgument<IntGraphType> { Name = "limit" }
                ),
                resolve: context =>
                {
                    var signer = context.GetArgument<Address>("signer");
                    var involved = context.GetArgument<Address>("involvedAddress");
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);

                    return Query<T>.ListTransactions(signer, involved, desc, offset, limit);
                }
            );

            Field<TransactionType<T>>(
                "transaction",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context =>
                {
                    var id = new TxId(
                        ByteUtil.ParseHex(context.GetArgument<string>("id"))
                    );
                    return Query<T>.GetTransaction(id);
                }
            );

            Name = "BlockQuery";
        }
    }
}
