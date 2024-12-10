using System;
using GraphQL;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;

namespace Libplanet.Explorer.Queries
{
    public class EvidenceQuery : ObjectGraphType
    {
        private const int MaxLimit = 100;

        public EvidenceQuery()
        {
            Name = "EvidenceQuery";
            Description = "Retrieve evidence information.";

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<EvidenceType>>>>(
                "committedEvidence",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "hash" },
                    new QueryArgument<IdGraphType> { Name = "index" }
                ),
                resolve: context =>
                {
                    string hash = context.GetArgument<string>("hash");
                    long? index = context.GetArgument<long?>("index", null);

                    if (!(hash is null ^ index is null))
                    {
                        throw new ExecutionError(
                            "The parameters hash and index are mutually exclusive; " +
                            "give only one at a time.");
                    }

                    if (hash is { } nonNullHash)
                    {
                        return ExplorerQuery.ListCommitEvidence(BlockHash.FromString(nonNullHash));
                    }

                    if (index is { } nonNullIndex)
                    {
                        return ExplorerQuery.ListCommitEvidence(nonNullIndex);
                    }

                    throw new ExecutionError("Unexpected block query");
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<EvidenceType>>>>(
                "pendingEvidence",
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
                        DefaultValue = MaxLimit,
                    }
                ),
                resolve: context =>
                {
                    bool desc = context.GetArgument<bool>("desc");
                    int offset = context.GetArgument<int>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);

                    return ExplorerQuery.ListPendingEvidence(desc, offset, limit);
                }
            );

            Field<EvidenceType>(
                "Evidence",
                arguments: new QueryArguments(
                    new QueryArgument<EvidenceIdType> { Name = "id" }
                ),
                resolve: context => ExplorerQuery.GetEvidence(
                    context.GetArgument<EvidenceId>("id"))
            );
        }
    }
}
