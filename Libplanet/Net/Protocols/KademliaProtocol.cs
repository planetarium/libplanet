using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KademliaProtocol<T> : IProtocol
        where T : IAction, new()
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;
        private const int FindConcurrency = 3;
        private const int MaxDepth = 3;

        // FIXME: This should be configurable?
        private static readonly TimeSpan RequestTimeout = TimeSpan.FromSeconds(5);
        private static readonly TimeSpan IdleRefreshInterval = TimeSpan.FromSeconds(5);
        private static readonly TimeSpan IdleRebuildInterval = TimeSpan.FromMinutes(30);

        private readonly Swarm<T> _swarm;
        private readonly Address _address;
        private readonly int _appProtocolVersion;
        private readonly System.Random _random;
        private readonly RoutingTable _routing;

        private readonly ILogger _logger;

        public KademliaProtocol(
            Swarm<T> swarm,
            Address address,
            int appProtocolVersion,
            ILogger logger)
        {
            _swarm = swarm;
            _appProtocolVersion = appProtocolVersion;
            _logger = logger;

            _address = address;
            _random = new System.Random();
            _routing = new RoutingTable(
                _address, TableSize, BucketSize, _random);
        }

        public int Count => _routing.Count;

        public ImmutableList<BoundPeer> Peers
        {
            get
            {
                var peers = new List<BoundPeer>();
                foreach (KBucket bucket in _routing.NonEmptyBuckets)
                {
                    peers.AddRange(bucket.Peers);
                }

                return peers.ToImmutableList();
            }
        }

        public ImmutableList<BoundPeer> PeersToBroadcast
        {
            get
            {
                return _routing.NonEmptyBuckets
                    .Select(bucket => bucket.GetRandomPeer())
                    .ToImmutableList();
            }
        }

        // FIXME: Currently bootstrap is done until it finds closest peer, but it should halt
        // when found neighbor's count is reached 2*k.
        public async Task BootstrapAsync(
            ImmutableList<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findPeerTimeout,
            CancellationToken cancellationToken)
        {
            if (bootstrapPeers is null)
            {
                throw new ArgumentNullException(nameof(bootstrapPeers));
            }

            var findPeerTasks = new List<Task>();

            foreach (BoundPeer peer in bootstrapPeers.Where(peer => !peer.Address.Equals(_address)))
            {
                // Guarantees at least one connection (seed peer)
                try
                {
                    await PingAsync(peer, pingSeedTimeout, cancellationToken);
                    findPeerTasks.Add(
                        FindPeerAsync(_address, peer, 0, findPeerTimeout, cancellationToken));
                }
                catch (DifferentAppProtocolVersionException)
                {
                    _logger.Error("Version is different from seed peer.");
                    continue;
                }
                catch (TimeoutException)
                {
                    _logger.Error("A timeout exception occurred connecting to seed peer.");
                    continue;
                }
                catch (Exception)
                {
                    _logger.Error("An unexpected exception occurred connecting to seed peer.");
                    continue;
                }
            }

            if (Peers.Count == 0)
            {
                // FIXME: Need more precise exception
                throw new SwarmException("No seed available.");
            }

            if (findPeerTasks.Count == 0)
            {
                throw new SwarmException("Bootstrap failed.");
            }

            try
            {
                await Task.WhenAll(findPeerTasks);
            }
            catch (TimeoutException)
            {
                if (findPeerTasks.All(findPeerTask => findPeerTask.IsFaulted))
                {
                    throw new TimeoutException(
                        "Timeout exception occurred during BootstrapAsync().");
                }
            }
            catch (Exception)
            {
                _logger.Error("An unexpected exception occurred during BootstrapAsync().");
                throw;
            }

            // TODO: Remove seed peers from table
            // This requires a seed peer that does not run any blockchain related tasks.
            /*foreach (BoundPeer peer in bootstrapPeers)
            {
                await RemovePeerAsync(peer);
            }*/
        }

        public async Task RefreshTableAsync(
            TimeSpan? period,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(period ?? IdleRefreshInterval, cancellationToken);

                    _logger.Debug("Refreshing table...");
                    List<Task> tasks = PeersToBroadcast.Select(
                        peer => PingAsync(peer, RequestTimeout, cancellationToken)).ToList();

                    await Task.WhenAll(tasks);
                    cancellationToken.ThrowIfCancellationRequested();
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshTableAsync)}() is cancelled.");
                    throw;
                }
                catch (TimeoutException)
                {
                }
            }
        }

        public async Task RebuildConnectionAsync(
            TimeSpan? period,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                _logger.Debug("Rebuilding connection...");
                var buffer = new byte[20];
                var tasks = new List<Task>();
                for (int i = 0; i < FindConcurrency; i++)
                {
                    _random.NextBytes(buffer);
                    tasks.Add(FindPeerAsync(
                        new Address(buffer),
                        null,
                        -1,
                        RequestTimeout,
                        cancellationToken));
                }

                tasks.Add(FindPeerAsync(_address, null, -1, RequestTimeout, cancellationToken));
                try
                {
                    await Task.WhenAll(tasks);
                }
                catch (TimeoutException)
                {
                }

                await Task.Delay(period ?? IdleRebuildInterval, cancellationToken);
            }
        }

#pragma warning disable CS4014
        public void ReceiveMessage(object sender, Message message)
        {
            switch (message)
            {
                case Ping ping:
                    ReceivePingAsync(ping);
                    break;

                case FindNeighbors findPeer:
                    ReceiveFindPeerAsync(findPeer);
                    break;

                default:
                    UpdateAsync(message.Remote);
                    break;
            }
        }
#pragma warning restore CS4014

        public string Trace()
        {
            var trace = $"Routing table of [{_address.ToHex()}]\n";
            var count = 1;
            for (var i = 0; i < TableSize; i++)
            {
                if (_routing.BucketOf(i).IsEmpty())
                {
                    continue;
                }

                trace += $"**Bucket {i}**\n";
                trace = _routing.BucketOf(i).Peers.Aggregate(trace, (current, peer) =>
                    current + $"{count++} : [{peer.Address.ToHex()}]\n");

                trace = trace.TrimEnd(' ', ',');
            }

            return trace.Trim('\n');
        }

        internal async Task PingAsync(
            BoundPeer target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (target is null)
            {
                throw new ArgumentNullException(nameof(target));
            }

            if (cancellationToken.IsCancellationRequested)
            {
                return;
            }

            try
            {
                if (!(await _swarm.SendMessageWithReplyAsync(
                    target,
                    new Ping(),
                    timeout,
                    cancellationToken) is Pong pong))
                {
                    throw new InvalidMessageException(
                        "Received pong is invalid.");
                }

                if (pong.Remote.Address.Equals(_address))
                {
                    throw new InvalidMessageException(
                        "Cannot receive pong from self");
                }

                // update process required
                await UpdateAsync(pong.Remote, cancellationToken);
            }
            catch (TimeoutException)
            {
                await RemovePeerAsync(target);
                throw;
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Debug("Different AppProtocolVersion encountered at PingAsync.");
                throw;
            }
        }

        // This updates routing table when receiving a message.
        // if corresponding bucket for remote peer is not full, just adds remote peer.
        // otherwise check whether if the least recently used (LRU) peer
        // is alive to determine evict LRU peer or discard remote peer.
        private async Task UpdateAsync(
            Peer rawPeer,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (rawPeer is null)
            {
                throw new ArgumentNullException(nameof(rawPeer));
            }

            if (!(rawPeer is BoundPeer peer) || rawPeer.AppProtocolVersion != _appProtocolVersion)
            {
                // Don't update peer without endpoint or with different appProtocolVersion.
                return;
            }

            if (cancellationToken.IsCancellationRequested)
            {
                throw new TaskCanceledException();
            }

            bool contains = _routing.Contains(peer);
            BoundPeer evictionCandidate = await _routing.AddPeerAsync(peer);
            if (evictionCandidate is null)
            {
                // added successfully since there was empty space in the bucket
                if (!contains)
                {
                    _logger.Debug($"Added [{peer.Address.ToHex()}] to table");
                }
            }
            else
            {
                try
                {
                    _routing.BucketOf(peer).ReplacementCache.Add(peer);
                    await PingAsync(
                        evictionCandidate,
                        RequestTimeout,
                        cancellationToken);
                }
                catch (TimeoutException)
                {
                    await RemovePeerAsync(evictionCandidate);
                }
            }
        }

        private async Task RemovePeerAsync(BoundPeer peer)
        {
            _logger.Debug($"Removing peer [{peer.Address.ToHex()}] from table.");
            await _routing.RemovePeerAsync(peer);

            foreach (KBucket bucket in _routing.NonFullBuckets)
            {
                foreach (BoundPeer replacement in bucket.ReplacementCache)
                {
                    // FIXME: appropriate cancellation token required.
                    await PingAsync(replacement, RequestTimeout, CancellationToken.None);
                }
            }
        }

        private async Task FindPeerAsync(
            Address target,
            BoundPeer viaPeer,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (depth >= MaxDepth)
            {
                return;
            }

            ImmutableList<BoundPeer> found;
            if (viaPeer is null)
            {
                found = await QueryNeighborsAsync(target, timeout, cancellationToken);
            }
            else
            {
                found = await GetNeighbors(viaPeer, target, timeout, cancellationToken);
            }

            await ProcessFoundAsync(found, target, depth, timeout, cancellationToken);
        }

        private async Task<ImmutableList<BoundPeer>> QueryNeighborsAsync(
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> neighbors = _routing.Neighbors(target, BucketSize).ToList();
            var found = new List<BoundPeer>();
            int count = neighbors.Count < FindConcurrency ? neighbors.Count : FindConcurrency;
            bool timeoutOccurred = true;
            for (int i = 0; i < count; i++)
            {
                try
                {
                    found.AddRange(
                        await GetNeighbors(neighbors[i], target, timeout, cancellationToken));
                    timeoutOccurred = false;
                }
                catch (TimeoutException)
                {
                    continue;
                }
            }

            if (count != 0 && timeoutOccurred)
            {
                _logger.Debug($"Timeout occurred during {nameof(QueryNeighborsAsync)}.");
                throw new TimeoutException(
                    $"Timeout occurred during {nameof(QueryNeighborsAsync)}.");
            }

            return found.ToImmutableList();
        }

        private async Task<ImmutableList<BoundPeer>> GetNeighbors(
            BoundPeer addressee,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            var findPeer = new FindNeighbors(target);
            try
            {
                if (!(await _swarm.SendMessageWithReplyAsync(
                    addressee,
                    findPeer,
                    timeout,
                    cancellationToken) is Neighbors neighbors))
                {
                    throw new InvalidMessageException("Reply of FindNeighbors is invalid.");
                }

                return neighbors.Found.ToImmutableList();
            }
            catch (TimeoutException)
            {
                await RemovePeerAsync(addressee);
                throw;
            }
        }

        // send pong back to remote
        private async Task ReceivePingAsync(Ping ping)
        {
            if (ping.Remote.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "Cannot receive ping from self");
            }

            await UpdateAsync(ping.Remote);

            Pong pong = new Pong((long?)null)
            {
                Identity = ping.Identity,
            };

            _swarm.ReplyMessage(pong);
        }

        private async Task ProcessFoundAsync(
            ImmutableList<BoundPeer> found,
            Address target,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> peers = found.Where(
                peer => !peer.Address.Equals(_address) && !_routing.Contains(peer)).ToList();

            if (peers.Count == 0)
            {
                _logger.Debug("No any neighbor received.");
                return;
            }

            peers = Kademlia.SortByDistance(peers, target);

            List<BoundPeer> closestCandidate = _routing.Neighbors(target, BucketSize).ToList();

            bool foundPingTimeout = true;
            foreach (BoundPeer peer in peers)
            {
                try
                {
                    // This timeout should be request timeout?
                    await PingAsync(peer, RequestTimeout, cancellationToken);
                    foundPingTimeout = false;
                }
                catch (TimeoutException)
                {
                    continue;
                }
            }

            if (foundPingTimeout)
            {
                _logger.Debug("All neighbors found are invalid.");
                throw new TimeoutException();
            }

            var findNeighboursTasks = new List<Task>();
            Peer closestKnown = closestCandidate.Count == 0 ? null : closestCandidate[0];
            for (int i = 0; i < FindConcurrency && i < peers.Count; i++)
            {
                if (closestKnown is null ||
                    string.CompareOrdinal(
                        Kademlia.CalculateDistance(peers[i].Address, target).ToHex(),
                        Kademlia.CalculateDistance(closestKnown.Address, target).ToHex()
                    ) < 1)
                {
                    findNeighboursTasks.Add(FindPeerAsync(
                        target,
                        peers[i],
                        (depth == -1) ? depth : depth + 1,
                        timeout,
                        cancellationToken));
                }
            }

            try
            {
                await Task.WhenAll(findNeighboursTasks);
            }
            catch (TimeoutException)
            {
                if (findNeighboursTasks.All(findPeerTask => findPeerTask.IsFaulted))
                {
                    throw new TimeoutException(
                        "Timeout exception occurred during ProcessFoundAsync().");
                }
            }
        }

        // FIXME: this method is not safe from amplification attack
        // maybe ping/pong/ping/pong is required
        private async Task ReceiveFindPeerAsync(FindNeighbors findNeighbors)
        {
            if (!(findNeighbors.Remote is null))
            {
                await UpdateAsync(findNeighbors.Remote);
            }

            List<BoundPeer> found = _routing.Neighbors(findNeighbors.Target, BucketSize).ToList();

            Neighbors neighbors = new Neighbors(found)
            {
                Identity = findNeighbors.Identity,
            };

            _swarm.ReplyMessage(neighbors);
        }
    }
}
