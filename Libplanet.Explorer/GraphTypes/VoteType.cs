using System.Linq;
using GraphQL.Types;
using Libplanet.Consensus;

namespace Libplanet.Explorer.GraphTypes
{
    public class VoteType : ObjectGraphType<Vote>
    {
        public VoteType()
        {
            Name = "Vote";

            Field<NonNullGraphType<LongGraphType>>(
                "Height",
                description: "Height of the consensus voted.",
                resolve: ctx => ctx.Source.Height);
            Field<NonNullGraphType<IntGraphType>>(
                "Round",
                description: "Round of the consensus voted.",
                resolve: ctx => ctx.Source.Round);
            Field<NonNullGraphType<StringGraphType>>(
                "BlockHash",
                description: "Hash of the block voted.",
                resolve: ctx => ctx.Source.BlockHash.ToString());
            Field<NonNullGraphType<DateTimeOffsetGraphType>>(
                name: "timestamp",
                description: "The time this vote was created and signed.",
                resolve: ctx => ctx.Source.Timestamp);
            Field<NonNullGraphType<PublicKeyType>>(
                "Validator",
                description: "Public key of the validator which is subject of the vote.",
                resolve: ctx => ctx.Source.Validator);
            Field<NonNullGraphType<VoteFlagType>>(
                "Flag",
                description: "Flag of the vote",
                resolve: ctx => ctx.Source.Flag);
            Field<NonNullGraphType<ByteStringType>>(
                name: "Signature",
                description: "A digital signature of the content of this vote.",
                resolve: ctx => ctx.Source.Signature.ToArray());
        }
    }
}
