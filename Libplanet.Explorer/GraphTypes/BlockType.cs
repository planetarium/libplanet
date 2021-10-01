using System.Security.Cryptography;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
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
            Field(x => x.Hash, type: typeof(NonNullGraphType<IdGraphType>));
            Field(x => x.Index);
            Field(x => x.Difficulty);
            Field(x => x.TotalDifficulty);
            Field<NonNullGraphType<ByteStringType>>(
                "Nonce",
                resolve: ctx => ctx.Source.Nonce.ToByteArray()
            );
            Field(x => x.Miner, type: typeof(NonNullGraphType<AddressType>));
            Field(x => x.PublicKey, type: typeof(NonNullGraphType<PublicKeyType>));
            Field<BlockType<T>>(
                "PreviousBlock",
                resolve: ctx =>
                {
                    if (!(ctx.Source.PreviousHash is BlockHash h))
                    {
                        return null;
                    }

                    var store = (IStore)ctx.UserContext[nameof(IBlockChainContext<T>.Store)];
                    var chain =
                        (BlockChain<T>)ctx.UserContext[nameof(IBlockChainContext<T>.BlockChain)];
                    return store.GetBlock<T>(chain.Policy.GetHashAlgorithm, h);
                });
            Field(x => x.Timestamp);
            Field<ByteStringType>(
                "StateRootHash",
                resolve: ctx => ctx.Source.StateRootHash.ToByteArray());
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "transactions"
            );

            Name = "Block";
        }
    }
}
