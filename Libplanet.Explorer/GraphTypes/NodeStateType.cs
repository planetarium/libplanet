#nullable disable
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Explorer.Interfaces;

namespace Libplanet.Explorer.GraphTypes
{
    public class NodeStateType<T> : ObjectGraphType<IBlockChainContext<T>>
        where T : IAction, new()
    {
        public NodeStateType()
        {
            Field<NonNullGraphType<BooleanGraphType>>("preloaded")
                .Resolve(context => context.Source.Preloaded);

            Name = "NodeState";
        }
    }
}
