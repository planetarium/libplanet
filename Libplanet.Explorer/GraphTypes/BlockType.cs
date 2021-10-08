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
            Field(x => x.Hash, type: typeof(NonNullGraphType<IdGraphType>));
            Field(x => x.Index);
            Field(x => x.Difficulty);
            Field(x => x.TotalDifficulty);
            Field<NonNullGraphType<ByteStringType>>(
                "Nonce",
                resolve: ctx => ctx.Source.Nonce.ToByteArray()
            );
            Field(x => x.Miner, type: typeof(NonNullGraphType<AddressType>));
            Field(x => x.PublicKey, type: typeof(PublicKeyType));
            Field<BlockType<T>>(
                "PreviousBlock",
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
                "StateRootHash",
                resolve: ctx => ctx.Source.StateRootHash.ToByteArray());
            Field<ByteStringType>(
                "Signature",
                resolve: ctx => ctx.Source.Signature?.ToBuilder()?.ToArray());
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "transactions"
            );

            Name = "Block";
        }
    }
}
