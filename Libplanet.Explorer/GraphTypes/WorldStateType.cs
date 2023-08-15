using GraphQL.Types;
using Libplanet.Action.State;

namespace Libplanet.Explorer.GraphTypes
{
    public class WorldStateType : ObjectGraphType<IWorldState>
    {
        public WorldStateType()
        {
            Name = "WorldState";

            Field<IdGraphType>(
                name: "BlockHash",
                description: "The block hash of the world state.",
                resolve: ctx => ctx.Source.BlockHash.ToString()
            );
            Field<NonNullGraphType<BooleanGraphType>>(
                name: "Legacy",
                description: "The legacy flag of the world state.",
                resolve: ctx => ctx.Source.Legacy
            );
        }
    }
}
