using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Protocols
{
    internal interface IProtocol
    {
        int Count { get; }

        ImmutableList<BoundPeer> Peers { get; }

        ImmutableList<BoundPeer> PeersToBroadcast { get; }

        Task BootstrapAsync(
            ImmutableList<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findPeerTimeout,
            CancellationToken cancellationToken);

        Task RefreshTableAsync(TimeSpan grace, CancellationToken cancellationToken);

        Task RebuildConnectionAsync(CancellationToken cancellationToken);

        void ReceiveMessage(object sender, Message message);

        string Trace();
    }
}
