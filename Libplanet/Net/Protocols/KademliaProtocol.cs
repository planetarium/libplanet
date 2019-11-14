using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Serilog;
using Random = System.Random;

namespace Libplanet.Net.Protocols
{
    internal class KademliaProtocol : IProtocol
    {
        private readonly TimeSpan _requestTimeout;
        private readonly ISwarm _swarm;
        private readonly Address _address;
        private readonly int _appProtocolVersion;
        private readonly Random _random;
        private readonly RoutingTable _routing;
        private readonly int _tableSize;
        private readonly int _bucketSize;

        private readonly ILogger _logger;

        public KademliaProtocol(
            ISwarm swarm,
            Address address,
            int appProtocolVersion,
            ILogger logger,
            int? tableSize,
            int? bucketSize,
            TimeSpan? requestTimeout = null)
        {
            _swarm = swarm;
            _appProtocolVersion = appProtocolVersion;
            _logger = logger;

            _address = address;
            _random = new System.Random();
            _tableSize = tableSize ?? Kademlia.TableSize;
            _bucketSize = bucketSize ?? Kademlia.BucketSize;
            _routing = new RoutingTable(_address, _tableSize, _bucketSize, _random, _logger);
            _requestTimeout =
                requestTimeout ??
                TimeSpan.FromMilliseconds(Kademlia.IdleRequestTimeout);
        }

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
            int depth,
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
                        FindPeerAsync(
                            _address,
                            peer,
                            depth,
                            findPeerTimeout,
                            cancellationToken));
                }
                catch (DifferentAppProtocolVersionException)
                {
                    _logger.Error("Version is different from seed peer.");
                }
                catch (TimeoutException)
                {
                    _logger.Error("A timeout exception occurred connecting to seed peer.");
                    await RemovePeerAsync(peer, cancellationToken);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occurred connecting to seed peer. {e}",
                        e);
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
        }

        /// <summary>
        /// Checks whether <see cref="Peer"/>s in <see cref="RoutingTable"/> is online by
        /// sending <see cref="Ping"/>.
        /// </summary>
        /// <param name="maxAge">Maximum age of peer to validate.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task RefreshTableAsync(TimeSpan maxAge, CancellationToken cancellationToken)
        {
            try
            {
                _logger.Debug("Refreshing table... total peers: {count}", Peers.Count);
                List<Task> tasks = _routing.NonEmptyBuckets
                    .Where(bucket => bucket.Tail.Item1 + maxAge < DateTimeOffset.UtcNow)
                    .Select(bucket =>
                        ValidateAsync(
                            bucket.Tail.Item2,
                            _requestTimeout,
                            cancellationToken)
                ).ToList();

                _logger.Debug("Refresh candidates: {count}", tasks.Count);

                await Task.WhenAll(tasks);
                cancellationToken.ThrowIfCancellationRequested();
            }
            catch (TimeoutException)
            {
            }
        }

        /// <summary>
        /// Reconstructs network connection between peers on network.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>>An awaitable task without value.</returns>
        public async Task RebuildConnectionAsync(CancellationToken cancellationToken)
        {
            _logger.Debug("Rebuilding connection...");
            var buffer = new byte[20];
            var tasks = new List<Task>();
            for (int i = 0; i < Kademlia.FindConcurrency; i++)
            {
                _random.NextBytes(buffer);
                tasks.Add(FindPeerAsync(
                    new Address(buffer),
                    null,
                    -1,
                    _requestTimeout,
                    cancellationToken));
            }

            tasks.Add(FindPeerAsync(_address, null, -1, _requestTimeout, cancellationToken));
            try
            {
                await Task.WhenAll(tasks);
            }
            catch (TimeoutException)
            {
            }
        }

        /// <summary>
        /// Checks the <see cref="KBucket"/> in the <see cref="RoutingTable"/> and if
        /// there is an empty <see cref="KBucket"/>, fill it with <see cref="Peer"/>s
        /// in the <see cref="KBucket.ReplacementCache"/>.
        /// </summary>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>>An awaitable task without value.</returns>
        public async Task CheckReplacementCacheAsync(CancellationToken cancellationToken)
        {
            _logger.Debug("Checking replacement cache.");
            foreach (var bucket in _routing.NonFullBuckets)
            {
                var cachePeers = new BoundPeer[bucket.ReplacementCache.Count];
                bucket.ReplacementCache.CopyTo(cachePeers);
                foreach (BoundPeer replacement in cachePeers)
                {
                    try
                    {
                        _logger.Debug("Check {peer}.", replacement);
                        if (bucket.IsFull())
                        {
                            break;
                        }

                        await PingAsync(replacement, _requestTimeout, cancellationToken);
                    }
                    catch (TimeoutException)
                    {
                        _logger.Debug(
                            "Remove stale peer [{peer}] from replacement cache.",
                            replacement);
                        bucket.ReplacementCache.Remove(replacement);
                    }
                }
            }

            _logger.Debug("Replacement cache checked.");
        }

#pragma warning disable CS4014 // To run UpdateAsync() without await.
        public void ReceiveMessage(Message message)
        {
            switch (message)
            {
                case Ping ping:
                    ReceivePing(ping);
                    break;

                case FindNeighbors findPeer:
                    ReceiveFindPeer(findPeer);
                    break;
            }

            UpdateAsync(message?.Remote);
        }
#pragma warning restore CS4014

        public string Trace()
        {
            var trace = $"Routing table of [{_address.ToHex()}]\n";
            var count = 0;
            for (var i = 0; i < _tableSize; i++)
            {
                if (_routing.BucketOf(i).IsEmpty())
                {
                    continue;
                }

                trace += $"**Bucket {i}**\n";
                trace = _routing.BucketOf(i).Peers.Aggregate(trace, (current, peer) =>
                    current + $"{++count} : [{peer.Address.ToHex()}]\n");

                trace = trace.TrimEnd(' ', ',');
            }

            return $"Total peer count: {count}\n{trace.Trim('\n')}";
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

                _logger.Verbose(
                    $"Trying to {nameof(UpdateAsync)}() with pong: {{Pong}}",
                    pong);

                // update process required
                await UpdateAsync(pong.Remote, cancellationToken);
                _logger.Verbose(
                    $"{nameof(UpdateAsync)}() finished with pong: {{Pong}}",
                    pong);
            }
            catch (TimeoutException)
            {
                throw new TimeoutException($"Timeout occurred during {nameof(PingAsync)}().");
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Debug("Different AppProtocolVersion encountered at PingAsync.");
                throw;
            }
        }

        /// <summary>
        /// Validate peer by send <see cref="Ping"/> to <paramref name="peer"/>. If target peer
        /// does not responds, remove it from the table.
        /// </summary>
        /// <param name="peer">A <see cref="BoundPeer"/> to validate.</param>
        /// <param name="timeout">Timeout for waiting reply of <see cref="Ping"/>.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task ValidateAsync(
            BoundPeer peer,
            TimeSpan timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                _logger.Debug("Validating {Peer}", peer);
                await PingAsync(peer, timeout, cancellationToken);
            }
            catch (TimeoutException)
            {
                _logger.Debug("{Peer} is invalid, removing...", peer);
                await RemovePeerAsync(peer, cancellationToken);
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

            await _routing.AddPeerAsync(peer, cancellationToken);
        }

        private async Task RemovePeerAsync(BoundPeer peer, CancellationToken cancellationToken)
        {
            _logger.Debug("Removing peer [{peer}] from table.", peer);
            await _routing.RemovePeerAsync(peer, cancellationToken);
        }

        /// <summary>
        /// Send <see cref="FindNeighbors"/> messages to <paramref name="viaPeer"/>
        /// to find <see cref="Peer"/>s near <paramref name="target"/>.
        /// </summary>
        /// <param name="target">The <see cref="Address"/> to find.</param>
        /// <param name="viaPeer">The target <see cref="Peer"/> to send <see cref="FindNeighbors"/>
        /// message. If null, selects 3 <see cref="Peer"/>s from <see cref="RoutingTable"/> of
        /// self.</param>
        /// <param name="depth">Target depth of recursive operation.</param>
        /// <param name="timeout"><see cref="TimeSpan"/> for waiting reply of
        /// <see cref="FindNeighbors"/>.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task FindPeerAsync(
            Address target,
            BoundPeer viaPeer,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                $"{nameof(FindPeerAsync)}() with {{target}} to {{viaPeer}}. " +
                "(depth: {depth})",
                target,
                viaPeer,
                depth);
            if (depth == 0)
            {
                return;
            }

            IEnumerable<BoundPeer> found;
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

        private async Task<IEnumerable<BoundPeer>> QueryNeighborsAsync(
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> neighbors = _routing.Neighbors(target, _bucketSize).ToList();
            var found = new List<BoundPeer>();
            int count = (neighbors.Count < Kademlia.FindConcurrency)
                ? neighbors.Count
                : Kademlia.FindConcurrency;
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
                }
            }

            if (count != 0 && timeoutOccurred)
            {
                _logger.Debug($"Timeout occurred during {nameof(QueryNeighborsAsync)}.");
                throw new TimeoutException(
                    $"Timeout occurred during {nameof(QueryNeighborsAsync)}.");
            }

            return found;
        }

        private async Task<IEnumerable<BoundPeer>> GetNeighbors(
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

                return neighbors.Found;
            }
            catch (TimeoutException)
            {
                await RemovePeerAsync(addressee, cancellationToken);
                throw;
            }
        }

        // send pong back to remote
        private void ReceivePing(Ping ping)
        {
            if (ping.Remote.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "Cannot receive ping from self");
            }

            Pong pong = new Pong((long?)null)
            {
                Identity = ping.Identity,
            };

            _swarm.ReplyMessage(pong);
        }

        /// <summary>
        /// Process <see cref="Peer"/>s that is replied by sending <see cref="FindNeighbors"/>
        /// request.
        /// </summary>
        /// <param name="found"><see cref="Peer"/>s that found.</param>
        /// <param name="target">The target <see cref="Address"/> to search.</param>
        /// <param name="depth">Target depth of recursive operation. If -1 is given,
        /// it runs until the closest peer is found.</param>
        /// <param name="timeout"><see cref="TimeSpan"/> for next depth's
        /// <see cref="FindPeerAsync"/> operation.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="TimeoutException">Thrown when all peers that found are
        /// not online.</exception>
        private async Task ProcessFoundAsync(
            IEnumerable<BoundPeer> found,
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

            List<BoundPeer> closestCandidate = _routing.Neighbors(target, _bucketSize).ToList();

            Task[] awaitables = peers.Select(peer =>
                PingAsync(peer, _requestTimeout, cancellationToken)
            ).ToArray();
            try
            {
                await Task.WhenAll(awaitables);
            }
            catch (AggregateException e)
            {
                if (e.InnerExceptions.All(ie => ie is TimeoutException) &&
                    e.InnerExceptions.Count == awaitables.Length)
                {
                    throw new TimeoutException(
                        $"All neighbors found do not respond in {_requestTimeout}."
                    );
                }

                _logger.Error(
                    e,
                    "Some responses from neighbors found unexpectedly terminated: {Exception}",
                    e
                );
            }

            var findNeighboursTasks = new List<Task>();
            Peer closestKnown = closestCandidate.Count == 0 ? null : closestCandidate[0];
            var count = 0;
            foreach (var peer in peers)
            {
                if (!(closestKnown is null) &&
                   string.CompareOrdinal(
                       Kademlia.CalculateDistance(peer.Address, target).ToHex(),
                       Kademlia.CalculateDistance(closestKnown.Address, target).ToHex()
                   ) >= 1)
                {
                    break;
                }

                findNeighboursTasks.Add(FindPeerAsync(
                    target,
                    peer,
                    depth == -1 ? depth : depth - 1,
                    timeout,
                    cancellationToken));
                if (count++ >= Kademlia.FindConcurrency)
                {
                    break;
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
        private void ReceiveFindPeer(FindNeighbors findNeighbors)
        {
            IEnumerable<BoundPeer> found = _routing.Neighbors(findNeighbors.Target, _bucketSize);

            Neighbors neighbors = new Neighbors(found)
            {
                Identity = findNeighbors.Identity,
            };

            _swarm.ReplyMessage(neighbors);
        }
    }
}
