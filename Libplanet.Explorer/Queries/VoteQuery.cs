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
using Libplanet.Explorer.Interfaces;
using Libplanet.Store;

namespace Libplanet.Explorer.Queries
{
    public class VoteQuery<T> : ObjectGraphType
        where T : IAction, new()
    {
        public VoteQuery(IBlockChainContext<T> chainContext)
        {
            Name = "VoteQuery";

            ChainContext = chainContext;

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
                "validatorVotes",
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
                        Name = "validator",
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    PublicKey validator = context.GetArgument<PublicKey>("validator");
                    return ListValidatorVotes(desc, offset, limit, validator);
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
                    return CountVotes(desc, offset, limit);
                }
            );

            Field<NonNullGraphType<VoteCountType>>(
                "countValidatorVotes",
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
                        Name = "validator",
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);
                    PublicKey validator = context.GetArgument<PublicKey>("validator");
                    return CountValidatorVotes(desc, offset, limit, validator);
                }
            );
        }

        private static IBlockChainContext<T> ChainContext { get; set; }

        private static BlockChain<T> Chain => ChainContext.BlockChain;

        internal IEnumerable<Vote> ListVotes(
            bool desc,
            long offset,
            long? limit)
        {
            long tipIndex = Chain.Tip.Index;
            IStore store = ChainContext.Store;

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
                    Chain.Id,
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
                var votes = store.GetBlockCommit(index.value)?.Votes;
                if (votes is { })
                {
                    result = result.Concat(store.GetBlockCommit(index.value).Votes).ToList();
                }
            }

            return result;
        }

        internal IEnumerable<Vote> ListValidatorVotes(
            bool desc,
            long offset,
            long? limit,
            PublicKey publicKey)
        {
            return ListVotes(desc, offset, limit).Where(vote => vote.Validator.Equals(publicKey));
        }

        internal IEnumerable<VoteCount> CountVotes(
            bool desc,
            long offset,
            long? limit)
        {
            var voteGroups = ListVotes(desc, offset, limit).GroupBy(vote => vote.Validator);
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

        internal VoteCount CountValidatorVotes(
            bool desc,
            long offset,
            long? limit,
            PublicKey publicKey)
        {
            var voteList = ListValidatorVotes(desc, offset, limit, publicKey);
            var countPreCommits = voteList.Count(vote => vote.Flag.Equals(VoteFlag.PreCommit));
            var countVotes = voteList.Count();

            return new VoteCount(
                publicKey,
                countVotes - countPreCommits,
                countPreCommits,
                countVotes);
        }
    }
}
