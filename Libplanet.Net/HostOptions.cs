using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace Libplanet.Net
{
    /// <summary>
    /// Various options for determining <see cref="Swarm{T}"/>'s <see cref="BoundPeer"/> identity.
    /// </summary>
    public class HostOptions
    {
        public HostOptions(
            string? host,
            IEnumerable<IceServer> iceServers,
            int port = 0)
        {
            if (port < 0)
            {
                throw new ArgumentException($"Given {nameof(port)} cannot be negative: {port}");
            }
            else if (!(host is { } ^ iceServers.Any()))
            {
                throw new ArgumentException(
                    $"Either {nameof(host)} must be null or {nameof(iceServers)} must be empty.");
            }

            Host = host;
            IceServers = iceServers.ToImmutableList();
            Port = port;
        }

        /// <summary>
        /// The hostname to be a part of a public endpoint that peers may use when
        /// they connect to this node.  This is set to <see langword="null"/> when
        /// a non-empty <see cref="IceServers"/> is provided.
        /// </summary>
        public string? Host { get; }

        /// <summary>
        /// The set of
        /// <a href="https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment">ICE</a>
        /// servers to use for TURN/STUN to traverse NAT.  This is empty when <see cref="Host"/>
        /// is provided.
        /// </summary>
        public IReadOnlyList<IceServer> IceServers { get; }

        /// <summary>
        /// The port number to use for the host.  If set to zero, a free port will be assigned.
        /// </summary>
        public int Port { get; }
    }
}
