using System;
using GraphQL;
using GraphQL.Types;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Types.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public class TransactionType : ObjectGraphType<Transaction>
    {
        public TransactionType(IBlockChainContext context)
        {
            Name = "Transaction";

            Field<NonNullGraphType<IdGraphType>>(
                name: "Id",
                description: "A unique identifier derived from this transaction content.",
                resolve: ctx => ctx.Source.Id.ToString()
            );
            Field<NonNullGraphType<LongGraphType>>(
                name: "Nonce",
                description: "The number of previous transactions committed by the signer of " +
                    "this tx.",
                resolve: x => x.Source.Nonce
            );
            Field(
                type: typeof(NonNullGraphType<AddressType>),
                name: "Signer",
                description: "An address of the account who signed this transaction.",
                resolve: x => x.Source.Signer
            );
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<AddressType>>>>(
                name: "UpdatedAddresses",
                description: "Addresses whose states were affected by Actions.",
                resolve: x => x.Source.UpdatedAddresses
            );
            Field<NonNullGraphType<ByteStringType>>(
                name: "Signature",
                description: "A digital signature of the content of this transaction.",
                resolve: x => x.Source.Signature
            );
            Field<NonNullGraphType<DateTimeOffsetGraphType>>(
                name: "Timestamp",
                description: "The time this transaction was created and signed.",
                resolve: x => x.Source.Timestamp
            );
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<ActionType>>>>(
                name: "Actions",
                description: "A list of actions in this transaction."
            );
            Field<NonNullGraphType<StringGraphType>>(
                name: "SerializedPayload",
                description: "A serialized tx payload in base64 string.",
                resolve: x =>
                {
                    byte[] bytes = x.Source.Serialize();
                    return Convert.ToBase64String(bytes);
                });

            // The block including the transaction, only available when IBlockChainIndex is
            // provided.
            Field<NonNullGraphType<BlockType>>(
                name: "BlockRef",
                description: "The block including the transaction.",
                resolve: ctx =>
                {
                    if (context is { Index: { } index, BlockChain: { } chain })
                    {
                        return chain[index.GetContainedBlockHashByTxId(ctx.Source.Id)];
                    }

                    var exceptionMessage =
                        "To resolve the field 'BlockRef', an instance of"
                        + $" {nameof(IBlockChainIndex)} must be provided to the"
                        + $" {nameof(IBlockChainContext)}.";
                    ctx.Errors.Add(new ExecutionError(exceptionMessage));
                    return null;
                });
        }
    }
}
