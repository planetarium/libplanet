using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Protocols
{
    /// <summary>
    /// An interface of protocol to discover peers from the distributed network.
    /// </summary>
    public interface IProtocol
    {
        /// <summary>
        /// Conducts peer discovery for given <paramref name="bootstrapPeers"/>.
        /// </summary>
        /// <param name="bootstrapPeers">A <see cref="IEnumerable{T}"/> of <see cref="BoundPeer"/>s
        /// to bootstrap.</param>
        /// <param name="dialTimeout">The timeout used when waiting a reply for either
        /// <see cref="PingMsg"/> or <see cref="FindNeighborsMsg"/>.
        /// If <see langword="null"/> is given, the task never halts by itself
        /// even no any response was given from the the target seed.</param>
        /// <param name="depth">Recursive operation depth to search peers from network.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task BootstrapAsync(
            IEnumerable<BoundPeer> bootstrapPeers,
            TimeSpan? dialTimeout,
            int depth,
            CancellationToken cancellationToken);

        /// <summary>
        /// Tries to add given <paramref name="peers"/> to routing table
        /// by sending <see cref="PingMsg"/>.
        /// </summary>
        /// <param name="peers">The peers to add.</param>
        /// <param name="timeout">A timeout of waiting for the reply of <see cref="PingMsg"/>
        /// message sent to <paramref name="peers"/>.
        /// If <see langword="null"/> is given, task never halts by itself
        /// even the target peer gives no any response.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task AddPeersAsync(
            IEnumerable<BoundPeer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken);

        /// <summary>
        /// Checks whether <see cref="BoundPeer"/>s in <see cref="RoutingTable"/> is online by
        /// sending <see cref="PingMsg"/>.
        /// </summary>
        /// <param name="maxAge">Maximum age of peer to validate.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task RefreshTableAsync(TimeSpan maxAge, CancellationToken cancellationToken);

        /// <summary>
        /// Reconstructs network connection between peers on network.
        /// </summary>
        /// <param name="depth">Recursive operation depth to search peers from network.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task RebuildConnectionAsync(int depth, CancellationToken cancellationToken);

        /// <summary>
        /// Checks the <see cref="KBucket"/> in the <see cref="RoutingTable"/> and if
        /// there is an empty <see cref="KBucket"/>, fill it with <see cref="BoundPeer"/>s
        /// in the <see cref="KBucket.ReplacementCache"/>.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task CheckReplacementCacheAsync(CancellationToken cancellationToken);
    }
}
