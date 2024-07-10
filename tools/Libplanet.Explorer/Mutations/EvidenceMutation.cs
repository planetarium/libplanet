using System;
using GraphQL;
using GraphQL.Types;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Interfaces;

namespace Libplanet.Explorer.Mutations
{
    public class EvidenceMutation : ObjectGraphType
    {
        private readonly IBlockChainContext _context;

        public EvidenceMutation(IBlockChainContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));

            Field<NonNullGraphType<EvidenceType>>(
                name: "add",
                description: "Add Evidence to current chain",
                arguments: new QueryArguments(
                    new QueryArgument<LongGraphType>
                    {
                        Name = "height",
                        Description =
                            "Indicates the block height that infraction has occurred",
                    },
                    new QueryArgument<NonNullGraphType<AddressType>>
                    {
                        Name = "address",
                        Description =
                            "Indicates the address of the target that caused the infraction",
                    }
                ),
                resolve: context =>
                {
                    var blockChain = _context.BlockChain;
                    var height = context.GetArgument<long?>("height") ?? blockChain.Tip.Index;
                    var address = context.GetArgument<Address>("address");
                    var timestamp = DateTimeOffset.UtcNow;
                    var evidence = new TestEvidence(height, address, timestamp);
                    try
                    {
                        blockChain.AddEvidence(evidence);
                    }
                    catch (Exception e)
                    {
                        throw new ExecutionError(
                            message: "Failed to add given evidence.",
                            exception: e);
                    }

                    return evidence;
                }
            );
        }
    }
}
