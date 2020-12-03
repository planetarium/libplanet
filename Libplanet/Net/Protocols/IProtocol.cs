using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Protocols
{
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

        Task RefreshTableAsync(TimeSpan maxAge, CancellationToken cancellationToken);

        Task RebuildConnectionAsync(CancellationToken cancellationToken);

        Task CheckReplacementCacheAsync(CancellationToken cancellationToken);
    }
}
