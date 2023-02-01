#nullable disable
using System.Collections.Generic;
using System.Linq;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Store;

namespace Libplanet.Explorer.Queries
{
    public class VoteQuery<T> : ObjectGraphType
        where T : IAction, new()
    {
        public VoteQuery(BlockChain<T> blockChain, IStore store)
        {
            Name = "VoteQuery";

            BlockChain = blockChain;
            Store = store;

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<VoteType>>>>(
                "votes",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "limit",
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    return ListVotes(desc, offset, limit);
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<VoteType>>>>(
                "votesWhere",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "limit",
                    },
                    new QueryArgument<PublicKeyType>
                    {
                        Name = "validatorPublicKey",
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    PublicKey validator = context.GetArgument<PublicKey>("validatorPublicKey");
                    return ListVotes(desc, offset, limit).Where(
                        vote => vote.ValidatorPublicKey.Equals(validator));
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<VoteCountType>>>>(
                "countVotes",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "limit",
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    return CountVotes(ListVotes(desc, offset, limit));
                }
            );

            Field<NonNullGraphType<VoteCountType>>(
                "countVotesWhere",
                arguments: new QueryArguments(
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "limit",
                    },
                    new QueryArgument<PublicKeyType>
                    {
                        Name = "validatorPublicKey",
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    PublicKey validator = context.GetArgument<PublicKey>("validatorPublicKey");
                    return CountVotes(ListVotes(desc, offset, limit).Where(
                        vote => vote.ValidatorPublicKey.Equals(validator))).First();
                }
            );
        }

        private static BlockChain<T> BlockChain { get; set; }

        private static IStore Store { get; set; }

        internal IEnumerable<Vote> ListVotes(
            bool desc,
            long offset,
            long? limit)
        {
            long tipIndex = BlockChain.Tip.Index;
            IStore store = Store;

            if (desc)
            {
                if (offset < 0)
                {
                    offset = tipIndex + offset + 1;
                }
                else
                {
                    offset = tipIndex - offset + 1 - (limit ?? 0);
                }
            }
            else
            {
                if (offset < 0)
                {
                    offset = tipIndex + offset + 1;
                }
            }

            var indexList = store.IterateIndexes(
                    BlockChain.Id,
                    (int)offset,
                    limit == null ? null : (int)limit)
                .Select((value, i) => new { i, value });

            if (desc)
            {
                indexList = indexList.Reverse();
            }

            var result = new List<Vote>();
            foreach (var index in indexList)
            {
                if (BlockChain.GetBlockCommit(index.value)?.Votes is { } votes)
                {
                    result.AddRange(votes);
                }
            }

            return result;
        }

        internal IEnumerable<VoteCount> CountVotes(
            IEnumerable<Vote> votes)
        {
            var voteGroups = votes.GroupBy(vote => vote.ValidatorPublicKey);
            var countList = new List<VoteCount>();
            foreach (var voteGroup in voteGroups)
            {
                var countPreCommits = voteGroup.Count(vote => vote.Flag.Equals(VoteFlag.PreCommit));
                var countVotes = voteGroup.Count();
                countList.Add(new VoteCount(
                    voteGroup.Key,
                    countVotes - countPreCommits,
                    countPreCommits,
                    countVotes));
            }

            return countList;
        }
    }
}
