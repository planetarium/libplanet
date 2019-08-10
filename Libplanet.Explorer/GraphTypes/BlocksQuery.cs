using System.Linq;
using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlocksQuery<T> : ObjectGraphType where T : IAction, new()
    {
        private BlockChain<T> _chain;
        public BlocksQuery(BlockChain<T> chain)
        {
            Field<ListGraphType<BlockType<T>>>(
                "blocks",
                arguments: new QueryArguments(
                    new QueryArgument<IntGraphType> { Name = "offset", DefaultValue = 0 },
                    new QueryArgument<IntGraphType> { Name = "limit", DefaultValue = chain.Count() }
                ),
                resolve: context =>
                {
                    int offset = context.GetArgument<int>("offset");
                    int limit = context.GetArgument<int>("limit");
                    return chain.Skip(offset).Take(limit);
                }
            );

            Field<BlockType<T>>(
                "block",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "hash" }
                ),
                resolve: context =>
                {
                    HashDigest<SHA256> hash = HashDigest<SHA256>.FromString(context.GetArgument<string>("hash"));
                    return _chain.FirstOrDefault(x => x.Hash.Equals(hash));
                }
            );

            _chain = chain;
            Name = "BlockQuery";
        }
    }
}
