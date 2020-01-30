using System;
using System.Linq;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.Store;
using Libplanet.Store;
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

            // The block including the transaction. - Only RichStore supports.
            Field<ListGraphType<NonNullGraphType<BlockType<T>>>>(
                name: "BlockRef",
                resolve: ctx =>
                {
                    var (chain, store) = (ValueTuple<BlockChain<T>, IStore>)ctx.UserContext;
                    if (store is RichStore richStore)
                    {
                        return richStore.IterateTxReferences(ctx.Source.Id)
                            .Select(blockHash => chain[blockHash]);
                    }
                    else
                    {
                        ctx.Errors.Add(
                            new ExecutionError(
                                $"This feature 'BlockRef' needs{nameof(RichStore)}"));
                        return null;
                    }
                });

            Name = "Transaction";
        }
    }
}
