#nullable disable
using System.Linq;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
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
            Field<NonNullGraphType<IdGraphType>>(
                "Id",
                resolve: ctx => ctx.Source.Id.ToString());
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
                    // FIXME: use context with DI.
                    const string storeKey = nameof(IBlockChainContext<T>.Store);
                    const string blockChainKey = nameof(IBlockChainContext<T>.BlockChain);
                    if (ctx.UserContext[storeKey] is IRichStore richStore &&
                        ctx.UserContext[blockChainKey] is BlockChain<T> chain)
                    {
                        HashAlgorithmGetter hashAlgorithmGetter = chain.Policy.GetHashAlgorithm;
                        return richStore
                            .IterateTxReferences(ctx.Source.Id)
                            .Select(r => richStore.GetBlock<T>(hashAlgorithmGetter, r.Item2));
                    }
                    else
                    {
                        var exceptionMessage =
                            $"This feature 'BlockRef' needs{nameof(IRichStore)} implementation";
                        ctx.Errors.Add(new ExecutionError(exceptionMessage));
                        return null;
                    }
                });

            Name = "Transaction";
        }
    }
}
