using System;

namespace Libplanet.Net
{
    /// <summary>
    /// Represents a <see cref="BoundPeer"/>'s state in the routing table.
    /// </summary>
    public class PeerState
    {
        internal PeerState(BoundPeer peer, DateTimeOffset lastUpdated)
        {
            Peer = peer;
            LastUpdated = lastUpdated;
            LastChecked = null;
            Latency = null;
        }

        /// <summary>
        /// <see cref="BoundPeer"/> of the state.
        /// </summary>
        public BoundPeer Peer { get; set; }

        /// <summary>
        /// Last time messages were exchanged.
        /// </summary>
        public DateTimeOffset LastUpdated { get; internal set; }

        /// <summary>
        /// Last time the peer was verified.
        /// </summary>
        public DateTimeOffset? LastChecked { get; internal set; }

        /// <summary>
        /// Delay of verification in milliseconds.
        /// </summary>
        public TimeSpan? Latency { get; internal set; }
    }
}
