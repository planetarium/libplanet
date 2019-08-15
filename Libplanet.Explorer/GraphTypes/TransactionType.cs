using System.Linq;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public class TransactionType<T> : ObjectGraphType<Transaction<T>>
        where T : IAction, new()
    {
        public TransactionType()
        {
            Field(x => x.Id, type: typeof(NonNullGraphType<IdGraphType>));
            Field(x => x.Nonce);
            Field(x => x.Signer, type: typeof(NonNullGraphType<AddressType>));
            Field<NonNullGraphType<ByteStringType>>(
                "PublicKey",
                resolve: ctx => ctx.Source.PublicKey.Format(true)
            );
            Field(
                x => x.UpdatedAddresses,
                type: typeof(NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>)
            );
            Field(x => x.Signature, type: typeof(NonNullGraphType<ByteStringType>));
            Field(x => x.Timestamp);
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<ActionType<T>>>>>("Actions");

            Name = "Transaction";
        }
    }
}
