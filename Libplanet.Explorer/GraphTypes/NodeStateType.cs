#nullable disable
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Queries;

namespace Libplanet.Explorer.GraphTypes
{
    public class NodeStateType<T> : ObjectGraphType<IBlockChainContext<T>>
        where T : IAction, new()
    {
        public NodeStateType()
        {
            Field<NonNullGraphType<BooleanGraphType>>(
                "preloaded",
                resolve: context => context.Source.Preloaded
            );
            Name = "NodeState";
        }
    }
}
