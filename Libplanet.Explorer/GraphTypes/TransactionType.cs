using System;
using System.Collections.Generic;
using System.Linq;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Explorer.Interfaces;
using Libplanet.Explorer.Store;
using Libplanet.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public class TransactionType<T> : ObjectGraphType<Transaction<T>>
        where T : IAction, new()
    {
        public TransactionType()
        {
            Field<NonNullGraphType<IdGraphType>>("Id")
                .Description("A unique identifier derived from this transaction content.")
                .Resolve(ctx => ctx.Source.Id.ToString());
            Field<NonNullGraphType<LongGraphType>>("Nonce")
                .Description("The number of previous transactions committed by the signer of " +
                    "this tx.")
                .Resolve(ctx => ctx.Source.Nonce);
            Field<NonNullGraphType<AddressType>>("Signer")
                .Description("An address of the account who signed this transaction.")
                .Resolve(ctx => ctx.Source.Signer);
            Field<NonNullGraphType<ByteStringType>>("PublicKey")
                .Description("A PublicKey of the account who signed this transaction.")
                .Resolve(ctx => ctx.Source.PublicKey.Format(true));
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>(
                "UpdatedAddresses")
                .Description("Addresses whose states were affected by Actions.")
                .Resolve(ctx => ctx.Source.UpdatedAddresses);
            Field<NonNullGraphType<ByteStringType>>("Signature")
                .Description("A digital signature of the content of this transaction.")
                .Resolve(ctx => ctx.Source.Signature);
            Field<NonNullGraphType<DateTimeOffsetGraphType>>("Timestamp")
                .Description("The time this transaction was created and signed.")
                .Resolve(ctx => ctx.Source.Timestamp);
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<ActionType<T>>>>>("Actions")
                .Description("A list of actions in this transaction.")
                .Resolve(ctx => (IEnumerable<T>?)ctx.Source.CustomActions ?? Enumerable.Empty<T>());
            Field<NonNullGraphType<StringGraphType>>("SerializedPayload")
                .Description("A serialized tx payload in base64 string.")
                .Resolve(ctx =>
                {
                    byte[] bytes = ctx.Source.Serialize(true);
                    return Convert.ToBase64String(bytes);
                });

            // The block including the transaction. - Only RichStore supports.
            Field<ListGraphType<NonNullGraphType<BlockType<T>>>>("BlockRef")
                .Description("The block including the transaction.")
                .Resolve(ctx =>
                {
                    // FIXME: use context with DI.
                    const string storeKey = nameof(IBlockChainContext<T>.Store);
                    const string blockChainKey = nameof(IBlockChainContext<T>.BlockChain);
                    if (ctx.UserContext[storeKey] is IRichStore richStore &&
                        ctx.UserContext[blockChainKey] is BlockChain<T>)
                    {
                        return richStore
                            .IterateTxReferences(ctx.Source.Id)
                            .Select(r => richStore.GetBlock<T>(r.Item2));
                    }

                    var exceptionMessage =
                        $"This feature 'BlockRef' needs {nameof(IRichStore)} implementation";
                    ctx.Errors.Add(new ExecutionError(exceptionMessage));
                    return null;
                });

            Name = "Transaction";
        }
    }
}
