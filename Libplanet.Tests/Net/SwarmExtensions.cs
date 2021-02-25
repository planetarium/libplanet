using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Net;

namespace Libplanet.Tests.Net
{
    internal static class SwarmExtensions
    {
        public static void AddPeer<T>(this Swarm<T> swarm, Peer peer)
            where T : IAction, new()
        {
            if (swarm.RoutingTable is null)
            {
                throw new NullReferenceException(nameof(swarm.RoutingTable));
            }

            swarm.RoutingTable.AddPeer(peer as BoundPeer);
        }

        public static void AddPeers<T>(this Swarm<T> swarm, IEnumerable<Peer> peers)
            where T : IAction, new()
        {
            foreach (var peer in peers.Where(p => p is BoundPeer _).Select(p => p as BoundPeer))
            {
                swarm.AddPeer(peer);
            }
        }
    }
}
