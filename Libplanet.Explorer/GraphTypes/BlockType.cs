using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlockType<T> : ObjectGraphType<Block<T>> where T : IAction, new()
    {
        public BlockType()
        {
            Field(x => x.Index);
            Field(x => x.Difficulty);
            Field<StringGraphType>(
                "Nonce",
                resolve: ctx => ctx.Source.Nonce.ToString()
            );
            Field<StringGraphType>(
                "Miner",
                resolve: ctx => ctx.Source.Miner.ToString()
            );
            Field<StringGraphType>(
                "PreviousHash",
                resolve: ctx => ctx.Source.PreviousHash.ToString()
            );
            Field(x => x.Timestamp);
            Field<ListGraphType<TransactionType<T>>>("transactions");

            Name = "Block";
        }
    }
}