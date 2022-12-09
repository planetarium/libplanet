using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Explorer.Interfaces;

namespace Libplanet.Explorer.GraphTypes;

public class BlockType<T> : ObjectGraphType<Block<T>>
    where T : IAction, new()
{
    public BlockType(IBlockChainContext<T> context)
    {
        // We need multiple row of description for clearer, not confusing explanation of field.
        Field<NonNullGraphType<IdGraphType>>(
            "Hash",
            description: "A block's hash.",
            resolve: ctx => ctx.Source.Hash.ToString()
        );
        Field<NonNullGraphType<LongGraphType>>(
            name: "Index",
            description: "The height of the block.",
            resolve: x => x.Source.Index
        );
        Field<NonNullGraphType<AddressType>>(
            name: "Miner",
            description: "The address of the miner.",
            resolve: x => x.Source.Miner
        );
        Field<PublicKeyType>(
            name: "PublicKey",
            description: "The public key of the Miner.",
            resolve: x => x.Source.PublicKey
        );
        Field<BlockType<T>>(
            name: "PreviousBlock",
            description: "The previous block.  If it's a genesis block (i.e., its index is " +
                         "0) this must be null.",
            resolve: ctx =>
            {
                if (ctx.Source.PreviousHash is not { } h)
                {
                    return null;
                }

                return context.Store.GetBlock<T>(h);
            }
        );
        Field(x => x.Timestamp);
        Field<NonNullGraphType<ByteStringType>>(
            name: "StateRootHash",
            description: "The hash of the resulting states after evaluating transactions " +
                         "and a block action (if exists)",
            resolve: ctx => ctx.Source.StateRootHash.ToByteArray());
        Field<ByteStringType>(
            name: "Signature",
            description: "The digital signature of the whole block content (except for hash, " +
                         "which is derived from the signature and other contents)",
            resolve: ctx => ctx.Source.Signature?.ToBuilder().ToArray());
        Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
            name: "transactions",
            description: "Transactions belonging to the block."
        );
        Field<BlockCommitType>(
            name: "LastCommit",
            description: "The LastCommit of the block.",
            resolve: ctx => ctx.Source.LastCommit);

        Name = "Block";
    }
}
