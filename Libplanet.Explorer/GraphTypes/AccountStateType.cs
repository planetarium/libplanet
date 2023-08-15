using GraphQL.Types;
using Libplanet.Action.State;

namespace Libplanet.Explorer.GraphTypes
{
    public class AccountStateType : ObjectGraphType<IAccountState>
    {
        public AccountStateType()
        {
            Name = "AccountState";

            Field<NonNullGraphType<IdGraphType>>(
                name: "StateRootHash",
                description: "The state root hash of the account state.",
                resolve: ctx => ctx.Source.StateRootHash
            );
            Field<NonNullGraphType<AddressType>>(
                name: "Address",
                description: "The address of the account state.",
                resolve: x => x.Source.Address
            );
        }
    }
}
