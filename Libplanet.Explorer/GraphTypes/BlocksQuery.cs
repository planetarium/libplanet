using System.Linq;
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
                    new QueryArgument<IdGraphType> { Name = "index" }
                ),
                resolve: context =>
                {
                    ulong index = context.GetArgument<ulong>("index");
                    return _chain.FirstOrDefault(x => (ulong)x.Index == index);
                }
            );

            _chain = chain;
            Name = "BlockQuery";
        }
    }
}
