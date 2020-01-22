using System;

namespace Libplanet.Net
{
    public class PeerState
    {
        public PeerState(BoundPeer peer, DateTimeOffset lastUpdated)
        {
            Peer = peer;
            LastUpdated = lastUpdated;
            LastChecked = null;
            Latency = null;
        }

        public Address Address => Peer.Address;

        public DateTimeOffset LastUpdated { get; internal set; }

        public DateTimeOffset? LastChecked { get; internal set; }

        public TimeSpan? Latency { get; internal set; }

        internal BoundPeer Peer { get; set; }
    }
}
