using GraphQL.Types;
using Libplanet.Action.State;

namespace Libplanet.Explorer.GraphTypes
{
    public class AccountStateType : ObjectGraphType<IAccountState>
    {
        public AccountStateType()
        {
            Name = "AccountState";

            Field<NonNullGraphType<AddressType>>(
                name: "Address",
                description: "The address of the account state.",
                resolve: x => x.Source.Address
            );
            Field<IdGraphType>(
                name: "StateRootHash",
                description: "The state root hash of the account state.",
                resolve: ctx => ctx.Source.StateRootHash
            );
            Field<IdGraphType>(
                name: "BlockHash",
                description: "The block hash of the account state.",
                resolve: ctx => ctx.Source.BlockHash.ToString()
            );
        }
    }
}
