using System.Linq;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public class TransactionType<T> : ObjectGraphType<Transaction<T>> where T : IAction, new()
    {
        public TransactionType()
        {
            Field(x => x.Nonce);
            Field<StringGraphType>(
                "Signer",
                resolve: ctx => ctx.Source.Signer.ToString()
            );
            Field<StringGraphType>(
                "PublicKey",
                resolve: ctx => ByteUtil.Hex(ctx.Source.PublicKey.Format(true))
            );
            Field<ListGraphType<StringGraphType>>(
                "UpdatedAddress",
                resolve: ctx => from address in ctx.Source.UpdatedAddresses select address.ToString()
            );
            Field(x => x.Signature, nullable: false, typeof(IdGraphType));
            Field(x => x.Timestamp);
            Field<ListGraphType<ActionType<T>>>("Actions");

            Name = "Transaction";
        }
    }
}
