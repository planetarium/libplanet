#nullable disable
using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Explorer.Interfaces;
using Libplanet.Store;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlockType<T> : ObjectGraphType<Block<T>>
        where T : IAction, new()
    {
        public BlockType()
        {
            #pragma warning disable SA1118
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
            Field<NonNullGraphType<LongGraphType>>(
            name: "Difficulty",
            description: "The mining difficulty that the block's Nonce has to satisfy.",
            resolve: x => x.Source.Difficulty);
            Field<NonNullGraphType<BigIntGraphType>>(
            name: "TotalDifficulty",
            description: @"The total mining difficulty since the genesis including
            the block's Difficulty.",
            resolve: x => x.Source.TotalDifficulty);
            Field<NonNullGraphType<ByteStringType>>(
            name: "Nonce",
            description: "The proof-of-work nonce which satisfies the required Difficulty.",
            resolve: ctx => ctx.Source.Nonce.ToByteArray()
            );
            Field(
            type: typeof(NonNullGraphType<AddressType>),
            name: "Miner",
            description: "The address of the miner.",
            resolve: x => x.Source.Miner
            );
            Field(
            type: typeof(PublicKeyType),
            name: "PublicKey",
            description: "The public key of the Miner.",
            resolve: x => x.Source.PublicKey
            );
            Field<BlockType<T>>(
            name: "PreviousBlock",
            description: @"The previous block, If it's a genesis block
            (i.e., its Index is 0) this should be null.",
            resolve: ctx =>
            {
                if (!(ctx.Source.PreviousHash is BlockHash h))
                {
                    return null;
                }

                // FIXME: (BlockChain<T>) casting does not work
                // REF COMMIT HASH: d50c90933c17a70381ad758719144e01bf9c21dc
                HashAlgorithmGetter hashAlgorithmGetter = _ => HashAlgorithmType.Of<SHA256>();
                var store = (IStore)ctx.UserContext[nameof(IBlockChainContext<T>.Store)];
                return store.GetBlock<T>(hashAlgorithmGetter, h);
            });
            Field(x => x.Timestamp);
            Field<NonNullGraphType<ByteStringType>>(
            name: "StateRootHash",
            description: @"The Hash of the resulting states after evaluating
            transactions and a BlockAction. (if exists)",
            resolve: ctx => ctx.Source.StateRootHash.ToByteArray());
            Field<ByteStringType>(
            name: "Signature",
            description: @"The digital signature of the whole block content
            (except for Hash, which is derived from the signature and other contents)",
            resolve: ctx => ctx.Source.Signature?.ToBuilder()?.ToArray());
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
            name: "transactions",
            description: "Transactions belonging to the block."
            );

            Name = "Block";
            #pragma warning restore SA1118
        }
    }
}
