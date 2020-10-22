using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Explorer.Interfaces;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlockType<T> : ObjectGraphType<Block<T>>
        where T : IAction, new()
    {
        public BlockType()
        {
            Field(x => x.Hash, type: typeof(NonNullGraphType<IdGraphType>));
            Field(x => x.Index);
            Field(x => x.Difficulty);
            Field<NonNullGraphType<ByteStringType>>(
                "Nonce",
                resolve: ctx => ctx.Source.Nonce.ToByteArray()
            );
            Field(x => x.Miner, type: typeof(NonNullGraphType<AddressType>));
            Field<BlockType<T>>(
                "PreviousBlock",
                resolve: ctx => ctx.Source.PreviousHash is HashDigest<SHA256> h
                    ? ((IBlockChainContext<T>)ctx.UserContext).BlockChain[h]
                    : null
            );
            Field(x => x.Timestamp);
            Field<ByteStringType>(
                "StateRootHash",
                resolve: ctx => ctx.Source.StateRootHash?.ToByteArray());
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "transactions"
            );

            Name = "Block";
        }
    }
}
