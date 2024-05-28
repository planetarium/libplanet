using System;
using GraphQL;
using GraphQL.Types;
using Libplanet.Common;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidences;

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
                "evidences",
                arguments: new QueryArguments(
                    new QueryArgument<BlockHashType>
                    {
                        Name = "blockHash",
                        DefaultValue = null,
                    },
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
                    var blockHash = context.GetArgument<BlockHash?>("blockHash");
                    bool desc = context.GetArgument<bool>("desc");
                    int offset = context.GetArgument<int>("offset");
                    int? limit = context.GetArgument<int?>("limit");

                    return ExplorerQuery.ListCommitEvidences(blockHash, desc, offset, limit);
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<EvidenceType>>>>(
                "pendingEvidences",
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

                    return ExplorerQuery.ListPendingEvidences(desc, offset, limit);
                }
            );

            Field<EvidenceType>(
                "Evidence",
                arguments: new QueryArguments(
                    new QueryArgument<EvidenceIdType> { Name = "id" }
                ),
                resolve: context => ExplorerQuery.GetEvidence(
                    new EvidenceId(ByteUtil.ParseHex(context.GetArgument<string>("id")
                        ?? throw new ExecutionError("Given id cannot be null."))))
            );
        }
    }
}
