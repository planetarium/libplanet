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
        /// <param name="bootstrapPeers">A <see cref="IEnumerable{T}"/> of <see cref="Peer"/>s
        /// to bootstrap.</param>
        /// <param name="pingSeedTimeout">A timeout of waiting for the reply of <see cref="Ping"/>
        /// message sent to seed <see cref="Peer"/>.
        /// If <c>null</c> is given, the task never halts by itself
        /// even no any response was given from the the target seed.</param>
        /// <param name="findNeighborsTimeout">A timeout of waiting for the reply of
        /// <see cref="FindNeighbors"/> message sent to seed <see cref="Peer"/>.
        /// If <c>null</c> is given, task never halts by itself
        /// even the target seed gives no any response.</param>
        /// <param name="depth">Recursive operation depth to search peers from network.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task BootstrapAsync(
            IEnumerable<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findNeighborsTimeout,
            int depth,
            CancellationToken cancellationToken);

        /// <summary>
        /// Tries to add given <paramref name="peers"/> to routing table
        /// by sending <see cref="Ping"/>.
        /// </summary>
        /// <param name="peers">The peers to add.</param>
        /// <param name="timeout">A timeout of waiting for the reply of <see cref="Ping"/>
        /// message sent to <paramref name="peers"/>.
        /// If <c>null</c> is given, task never halts by itself
        /// even the target peer gives no any response.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task AddPeersAsync(
            IEnumerable<Peer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken);

        /// <summary>
        /// Checks whether <see cref="Peer"/>s in <see cref="RoutingTable"/> is online by
        /// sending <see cref="Ping"/>.
        /// </summary>
        /// <param name="maxAge">Maximum age of peer to validate.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task RefreshTableAsync(TimeSpan maxAge, CancellationToken cancellationToken);

        /// <summary>
        /// Reconstructs network connection between peers on network.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task RebuildConnectionAsync(CancellationToken cancellationToken);

        /// <summary>
        /// Checks the <see cref="KBucket"/> in the <see cref="RoutingTable"/> and if
        /// there is an empty <see cref="KBucket"/>, fill it with <see cref="Peer"/>s
        /// in the <see cref="KBucket.ReplacementCache"/>.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        Task CheckReplacementCacheAsync(CancellationToken cancellationToken);
    }
}
