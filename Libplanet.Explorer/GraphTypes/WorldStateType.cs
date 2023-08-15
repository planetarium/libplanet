using GraphQL.Types;
using Libplanet.Action.State;

namespace Libplanet.Explorer.GraphTypes
{
    public class WorldStateType : ObjectGraphType<IWorldState>
    {
        public WorldStateType()
        {
            Name = "WorldState";

            Field<NonNullGraphType<IdGraphType>>(
                name: "StateRootHash",
                description: "The state root hash of the world state.",
                resolve: ctx => ctx.Source.StateRootHash.ToString()
            );
            Field<NonNullGraphType<BooleanGraphType>>(
                name: "Legacy",
                description: "The legacy flag of the world state.",
                resolve: ctx => ctx.Source.Legacy
            );
        }
    }
}
