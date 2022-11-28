using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlockType<T> : ObjectGraphType<Block<T>>
        where T : IAction, new()
    {
        public BlockType(IStore store)
        {
            // We need multiple row of description for clearer, not confusing explanation of field.
            Field<NonNullGraphType<IdGraphType>>("Hash")
                .Description("A block's hash.")
                .Resolve(ctx => ctx.Source.Hash.ToString());
            Field<NonNullGraphType<LongGraphType>>("Index")
                .Description("The height of the block.")
                .Resolve(ctx => ctx.Source.Index);
            Field<NonNullGraphType<LongGraphType>>("Difficulty")
                .Description("The mining difficulty that the block's nonce has to satisfy.")
                .Resolve(ctx => ctx.Source.Difficulty);
            Field<NonNullGraphType<BigIntGraphType>>("TotalDifficulty")
                .Description("The total mining difficulty since the genesis including " +
                    "the block's difficulty.")
                .Resolve(ctx => ctx.Source.TotalDifficulty);
            Field<NonNullGraphType<ByteStringType>>("Nonce")
                .Description("The proof-of-work nonce which satisfies the required difficulty.")
                .Resolve(ctx => ctx.Source.Nonce.ToByteArray());
            Field<NonNullGraphType<AddressType>>("Miner")
                .Description("The address of the miner.")
                .Resolve(ctx => ctx.Source.Miner);
            Field<PublicKeyType>("PublicKey")
                .Description("The public key of the Miner.")
                .Resolve(ctx => ctx.Source.PublicKey);
            Field<BlockType<T>>("PreviousBlock")
                .Description("The previous block.  If it's a genesis block (i.e., its index is " +
                    "0) this must be null.")
                .Resolve(ctx => ctx.Source.PreviousHash is { } h ? store.GetBlock<T>(h) : null);
            Field(ctx => ctx.Timestamp);
            Field<NonNullGraphType<ByteStringType>>("StateRootHash")
                .Description("The hash of the resulting states after evaluating transactions " +
                    "and a block action (if exists)")
                .Resolve(ctx => ctx.Source.StateRootHash.ToByteArray());
            Field<ByteStringType>("Signature")
                .Description("The digital signature of the whole block content (except for hash, " +
                    "which is derived from the signature and other contents)")
                .Resolve(ctx => ctx.Source.Signature?.ToBuilder().ToArray());
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "transactions")
                .Description("Transactions belonging to the block.")
                .Resolve(ctx => ctx.Source.Transactions);

            Name = "Block";
        }
    }
}
