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
                resolve: context => chain
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
        }
    }
}