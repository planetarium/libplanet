using GraphQL.Types;
using Libplanet.Blocks;

namespace Libplanet.Explorer.GraphTypes
{
    public class BlockCommitType : ObjectGraphType<BlockCommit>
    {
        public BlockCommitType()
        {
            Name = "BlockCommit";

            Field<NonNullGraphType<LongGraphType>>(
                name: "Height",
                description: "The height of the block commit.",
                resolve: x => x.Source.Height
            );
            Field<NonNullGraphType<IntGraphType>>(
                name: "Round",
                description: "The round of the block commit.",
                resolve: x => x.Source.Round
            );
            Field<NonNullGraphType<IdGraphType>>(
                name: "BlockHash",
                description: "The hash of the block which contains block commit.",
                resolve: ctx => ctx.Source.BlockHash.ToString()
            );
            Field<NonNullGraphType<ListGraphType<NonNullGraphType<VoteType>>>>(
                name: "Votes",
                description: "Total votes of the block commit.",
                resolve: x => x.Source.Votes
            );
        }
    }
}
