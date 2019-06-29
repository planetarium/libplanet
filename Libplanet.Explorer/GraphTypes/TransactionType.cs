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
            Field<StringGraphType>(
                "Nonce",
                resolve: ctx => ctx.Source.Nonce.ToString()
            );
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
            Field<StringGraphType>(
                "Signature",
                resolve: ctx => ByteUtil.Hex(ctx.Source.Signature)
            );
            Field(x => x.Timestamp);
            Field<ListGraphType<ActionType<T>>>("Actions");
        }
    }
}
