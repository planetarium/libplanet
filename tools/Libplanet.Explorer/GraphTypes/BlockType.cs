using Bencodex;
using GraphQL.Types;
using Libplanet.Explorer.Interfaces;
using Libplanet.Types.Blocks;

namespace Libplanet.Explorer.GraphTypes;

public class BlockType : ObjectGraphType<Block>
{
    private static readonly Codec _codec = new();

    public BlockType(IBlockChainContext context)
    {
        Name = "Block";

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
        Field<BlockType>(
            name: "PreviousBlock",
            description: "The previous block.  If it's a genesis block (i.e., its index is " +
                         "0) this must be null.",
            resolve: ctx => context.Store.GetBlock(ctx.Source.PreviousHash));
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
        Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType>>>>(
            name: "transactions",
            description: "Transactions belonging to the block."
        );
        Field<NonNullGraphType<ListGraphType<NonNullGraphType<EvidenceType>>>>(
            name: "evidence",
            description: "Evidence belonging to the block."
        );
        Field<BlockCommitType>(
            name: "LastCommit",
            description: "The LastCommit of the block.",
            resolve: ctx => ctx.Source.LastCommit);
        Field<NonNullGraphType<LongGraphType>>(
            name: "Difficulty",
            description: "The mining difficulty that the block's nonce has to satisfy.",
            deprecationReason: "Block does not have Difficulty field in PBFT.",
            resolve: _ => 0);
        Field<NonNullGraphType<BigIntGraphType>>(
            name: "TotalDifficulty",
            description: "The total mining difficulty since the genesis including " +
                         "the block's difficulty.",
            deprecationReason: "Block does not have TotalDifficulty field in PBFT.",
            resolve: _ => 0);
        Field<NonNullGraphType<ByteStringType>>(
            name: "Nonce",
            description: "The proof-of-work nonce which satisfies the required difficulty.",
            deprecationReason: "Block does not have Nonce field in PBFT.",
            resolve: _ => new byte[] { }
        );
        Field<NonNullGraphType<ByteStringType>>(
            name: "PreEvaluationHash",
            description: "The hash of PreEvaluationBlock.",
            resolve: ctx => ctx.Source.PreEvaluationHash.ToByteArray());
        Field<NonNullGraphType<IntGraphType>>(
            name: "ProtocolVersion",
            description: "The protocol version number of the block.",
            resolve: ctx => ctx.Source.ProtocolVersion);
        Field<NonNullGraphType<ByteStringType>>(
            name: "Raw",
            description: "The bencodex serialization of the block",
            resolve: ctx => _codec.Encode(ctx.Source.MarshalBlock()));
    }
}
