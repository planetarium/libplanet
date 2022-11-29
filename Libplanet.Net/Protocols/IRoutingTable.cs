using System;
using System.Collections.Generic;

namespace Libplanet.Net.Protocols
{
    public interface IRoutingTable
    {
        /// <summary>
        /// The number of peers in the table.
        /// </summary>
        int Count { get; }

        /// <summary>
        /// An <see cref="IReadOnlyList{T}"/> of peers in the table.
        /// </summary>
        IReadOnlyList<BoundPeer> Peers { get; }

        /// <summary>
        /// Adds the <paramref name="peer"/> to the table.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to add.</param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="peer"/>'s
        /// <see cref="Address"/> is equal to the <see cref="Address"/> of self.</exception>
        void AddPeer(BoundPeer peer);

        /// <summary>
        /// Removes the <paramref name="peer"/> to the table.
        /// </summary>
        /// <param name="peer">The <see cref="BoundPeer"/> to remove.</param>
        /// <returns><see langword="true"/> if the <paramref name="peer"/> is successfully
        /// removed from <see cref="IRoutingTable"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="peer"/>'s
        /// <see cref="Address"/> is equal to the <see cref="Address"/> of self.</exception>
        bool RemovePeer(BoundPeer peer);

        /// <summary>
        /// Determines whether the <see cref="IRoutingTable"/> contains the specified key.
        /// </summary>
        /// <param name="peer">Key to locate in the <see cref="IRoutingTable"/>.</param>
        /// <returns><see langword="true"/> if the <see cref="IRoutingTable" /> contains
        /// an element with the specified key; otherwise, <see langword="false"/>.</returns>
        bool Contains(BoundPeer peer);
    }
}
