using System;
using GraphQL.Types;
using Libplanet.Explorer.Interfaces;

namespace Libplanet.Explorer.Mutations
{
    public class ExplorerMutation : ObjectGraphType
    {
        private readonly IBlockChainContext _context;

        public ExplorerMutation(IBlockChainContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));

            Field<EvidenceMutation>(
                name: "evidence",
                description: "Raise infraction to current chain",
                resolve: context => new { }
            );
        }
    }
}
