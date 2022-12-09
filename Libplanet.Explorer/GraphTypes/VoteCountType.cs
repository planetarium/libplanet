using System.Linq;
using GraphQL.Types;
using Libplanet.Consensus;

namespace Libplanet.Explorer.GraphTypes
{
    public class VoteCountType : ObjectGraphType<VoteCount>
    {
        public VoteCountType()
        {
            Name = "VoteCount";

            Field<NonNullGraphType<PublicKeyType>>(
                "Validator",
                description: "Public key of the validator which is subject of the votes.",
                resolve: ctx => ctx.Source.Validator);
            Field<NonNullGraphType<IntGraphType>>(
                "CountNull",
                description: "Count of the null votes.",
                resolve: ctx => ctx.Source.CountNull);
            Field<NonNullGraphType<IntGraphType>>(
                "CountPreCommit",
                description: "Count of the precommit votes.",
                resolve: ctx => ctx.Source.CountPreCommit);
            Field<NonNullGraphType<IntGraphType>>(
                "CountTotal",
                description: "count of the total votes.",
                resolve: ctx => ctx.Source.CountTotal);
        }
    }
}
