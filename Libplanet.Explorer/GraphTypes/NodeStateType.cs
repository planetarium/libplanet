#nullable disable
using System.Collections.Generic;
using GraphQL.Types;
using Libplanet.Explorer.Interfaces;
using Libplanet.Net;

namespace Libplanet.Explorer.GraphTypes
{
    public class NodeStateType : ObjectGraphType<IBlockChainContext>
    {
        public NodeStateType()
        {
            Name = "NodeState";

            Field<NonNullGraphType<BooleanGraphType>>(
                "preloaded",
                resolve: context => context.Source.Preloaded
            );
            Field<ListGraphType<NonNullGraphType<BoundPeerType>>>(
                "peers",
                resolve: context => context.Source.Swarm?.Peers ?? new List<BoundPeer>()
            );
            Field<ListGraphType<NonNullGraphType<BoundPeerType>>>(
                "validators",
                resolve: context => context.Source.Swarm?.Validators ?? new List<BoundPeer>()
            );
        }
    }
}
