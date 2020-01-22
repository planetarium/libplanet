using System;
using System.Collections.Concurrent;
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
        private readonly ITransport _transport;
        private readonly Address _address;
        private readonly int _appProtocolVersion;
        private readonly Random _random;
        private readonly RoutingTable _routing;
        private readonly int _tableSize;
        private readonly int _bucketSize;

        private readonly ILogger _logger;

        public KademliaProtocol(
            ITransport transport,
            Address address,
            int appProtocolVersion,
            ILogger logger,
            int? tableSize,
            int? bucketSize,
            TimeSpan? requestTimeout = null)
        {
            _transport = transport;
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

        public IEnumerable<BoundPeer> Peers => _routing.Peers;

        public IEnumerable<BoundPeer> PeersToBroadcast(Address? except) =>
            _routing.PeersToBroadcast(except);

        // FIXME: Currently bootstrap is done until it finds closest peer, but it should halt
        // when found neighbor's count is reached 2*k.
        public async Task BootstrapAsync(
            IImmutableList<BoundPeer> bootstrapPeers,
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
            var history = new ConcurrentBag<BoundPeer>();

            foreach (BoundPeer peer in bootstrapPeers.Where(peer => !peer.Address.Equals(_address)))
            {
                // Guarantees at least one connection (seed peer)
                try
                {
                    await PingAsync(peer, pingSeedTimeout, cancellationToken);
                    findPeerTasks.Add(
                        FindPeerAsync(
                            history,
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
                    RemovePeer(peer);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occurred connecting to seed peer. {Exception}",
                        e);
                }
            }

            if (!_routing.Peers.Any())
            {
                throw new PeerDiscoveryException("All seeds are unreachable.");
            }

            if (findPeerTasks.Count == 0)
            {
                throw new PeerDiscoveryException("Bootstrap failed.");
            }

            try
            {
                await Task.WhenAll(findPeerTasks);
            }
            catch (Exception e)
            {
                if (findPeerTasks.All(task =>
                    task.IsFaulted &&
                    !(task.Exception is null) &&
                    task.Exception.InnerExceptions.All(ex => ex is TimeoutException)))
                {
                    throw new TimeoutException(
                        $"Timeout exception occurred during {nameof(BootstrapAsync)}().");
                }

                var msg = $"An unexpected exception occurred during {nameof(BootstrapAsync)}()." +
                          " {Exception}";
                _logger.Error(e, msg, e);
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
            // TODO: Add timeout parameter for this method
            try
            {
                _logger.Debug("Refreshing table... total peers: {Count}", _routing.Peers.Count());
                List<Task> tasks = _routing.PeersToRefresh(maxAge)
                    .Select(peer =>
                        ValidateAsync(
                            peer,
                            _requestTimeout,
                            cancellationToken)
                    ).ToList();

                _logger.Debug("Refresh candidates: {Count}", tasks.Count);

                await Task.WhenAll(tasks);
                cancellationToken.ThrowIfCancellationRequested();
            }
            catch (TimeoutException)
            {
            }
        }

        public async Task CheckAllPeersAsync(CancellationToken cancellationToken)
        {
            try
            {
                _logger.Debug("Validating all peers: {Count}", _routing.Peers.Count());
                List<Task> tasks = _routing.Peers
                    .Select(peer =>
                        ValidateAsync(
                            peer,
                            _requestTimeout,
                            cancellationToken)
                    ).ToList();

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
                    new ConcurrentBag<BoundPeer>(),
                    new Address(buffer),
                    null,
                    -1,
                    _requestTimeout,
                    cancellationToken));
            }

            tasks.Add(
                FindPeerAsync(
                    new ConcurrentBag<BoundPeer>(),
                    _address,
                    null,
                    -1,
                    _requestTimeout,
                    cancellationToken));
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
            foreach (IEnumerable<BoundPeer> cache in _routing.CachesToCheck)
            {
                foreach (BoundPeer replacement in cache)
                {
                    try
                    {
                        _logger.Debug("Check peer {Peer}.", replacement);

                        await PingAsync(replacement, _requestTimeout, cancellationToken);
                    }
                    catch (TimeoutException)
                    {
                        _logger.Debug(
                            "Remove stale peer {Peer} from replacement cache.",
                            replacement);
                        _routing.RemoveCache(replacement);
                    }
                }
            }

            _logger.Debug("Replacement cache checked.");
        }

#pragma warning disable CS4014 // To run UpdateAsync() without await.
        public void ReceiveMessage(Message message)
        {
            if (message is FindNeighbors findPeer)
            {
                ReceiveFindPeer(findPeer);
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
                trace = _routing.BucketOf(i).PeerStates.Aggregate(trace, (current, state) =>
                    current +
                    $"| {++count}: [{state.Address.ToHex()}]\n" +
                    $"| - LastUpdated: {state.LastUpdated}\n" +
                    $"| - LastChecked: {state.LastChecked}\n" +
                    $"| - Latency: {state.Latency?.Milliseconds}ms\n");

                trace = trace.TrimEnd(' ', ',');
            }

            return $"Total peer count: {count}\n{trace.Trim('\n')}";
        }

        /// <summary>
        /// Send <see cref="FindNeighbors"/> messages to <paramref name="viaPeer"/>
        /// to find <see cref="Peer"/>s near <paramref name="target"/>
        /// to see if the <see cref="Peer"/>s have a specific address.
        /// </summary>
        /// <param name="history">The <see cref="Peer"/> that searched.</param>
        /// <param name="target">The <see cref="Address"/> to find.</param>
        /// <param name="viaPeer">The target <see cref="Peer"/> to send <see cref="FindNeighbors"/>
        /// message. If null, selects 3 <see cref="Peer"/>s from <see cref="RoutingTable"/> of
        /// self.</param>
        /// <param name="depth">Target depth of recursive operation.</param>
        /// <param name="searchTarget">The address to search for among peers.</param>
        /// <param name="timeout"><see cref="TimeSpan"/> for waiting reply of
        /// <see cref="FindNeighbors"/>.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>BoundPeer containing the <paramref name="searchTarget"/>'s address.</returns>
        public async Task<BoundPeer> FindSpecificPeerAsync(
            ConcurrentBag<BoundPeer> history,
            Address target,
            BoundPeer viaPeer,
            int depth,
            Address searchTarget,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                $"{nameof(FindSpecificPeerAsync)}() with {{Target}} to {{Peer}}. " +
                "(depth: {Depth})",
                target,
                viaPeer,
                depth);

            if (history is null)
            {
                history = new ConcurrentBag<BoundPeer>();
            }

            IEnumerable<BoundPeer> found;
            if (viaPeer is null)
            {
                found = await QueryNeighborsAsync(history, target, timeout, cancellationToken);
            }
            else
            {
                found = await GetNeighbors(viaPeer, target, timeout, cancellationToken);
                history.Add(viaPeer);
            }

            BoundPeer specificPeerFound = await ProcessFoundForSpecificAsync(
                history,
                found,
                target,
                depth,
                timeout,
                cancellationToken,
                searchTarget
            );

            return specificPeerFound;
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
                _logger.Debug("Trying to ping async to {Peer}.", target);
                if (!(await _transport.SendMessageWithReplyAsync(
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
                _logger.Debug("Validating peer {Peer}", peer);
                var check = DateTimeOffset.UtcNow;
                await PingAsync(peer, timeout, cancellationToken);
                _routing.Check(peer, check, DateTimeOffset.UtcNow);
            }
            catch (TimeoutException)
            {
                _logger.Debug("Peer {Peer} is invalid, removing...", peer);
                RemovePeer(peer);
                throw;
            }
        }

        // This updates routing table when receiving a message.
        // if corresponding bucket for remote peer is not full, just adds remote peer.
        // otherwise check whether if the least recently used (LRU) peer
        // is alive to determine evict LRU peer or discard remote peer.
        private void UpdateAsync(Peer rawPeer)
        {
            _logger.Verbose($"Try to {nameof(UpdateAsync)}() {{Peer}}.", rawPeer);
            if (rawPeer is null)
            {
                throw new ArgumentNullException(nameof(rawPeer));
            }

            if (!(rawPeer is BoundPeer peer) || rawPeer.AppProtocolVersion != _appProtocolVersion)
            {
                // Don't update peer without endpoint or with different appProtocolVersion.
                return;
            }

            _routing.AddPeer(peer);
        }

        private void RemovePeer(BoundPeer peer)
        {
            _logger.Debug("Removing peer {Peer} from table.", peer);
            _routing.RemovePeer(peer);
        }

        /// <summary>
        /// Send <see cref="FindNeighbors"/> messages to <paramref name="viaPeer"/>
        /// to find <see cref="Peer"/>s near <paramref name="target"/>.
        /// </summary>
        /// <param name="history">The <see cref="Peer"/> that searched.</param>
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
            ConcurrentBag<BoundPeer> history,
            Address target,
            BoundPeer viaPeer,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                $"{nameof(FindPeerAsync)}() with {{Target}} to {{Peer}}. " +
                "(depth: {Depth})",
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
                found = await QueryNeighborsAsync(history, target, timeout, cancellationToken);
            }
            else
            {
                found = await GetNeighbors(viaPeer, target, timeout, cancellationToken);
                history.Add(viaPeer);
            }

            await ProcessFoundAsync(history, found, target, depth, timeout, cancellationToken);
        }

        private async Task<IEnumerable<BoundPeer>> QueryNeighborsAsync(
            ConcurrentBag<BoundPeer> history,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> neighbors = _routing.Neighbors(target, _bucketSize).ToList();
            var found = new List<BoundPeer>();
            int count = neighbors.Count < Kademlia.FindConcurrency
                ? neighbors.Count
                : Kademlia.FindConcurrency;
            var timeoutOccurred = true;
            for (var i = 0; i < count; i++)
            {
                try
                {
                    var peers =
                        await GetNeighbors(neighbors[i], target, timeout, cancellationToken);
                    history.Add(neighbors[i]);
                    found.AddRange(peers.Where(peer => !found.Contains(peer)));
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
                if (!(await _transport.SendMessageWithReplyAsync(
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
                RemovePeer(addressee);
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
        }

        /// <summary>
        /// Process <see cref="Peer"/>s that is replied by sending <see cref="FindNeighbors"/>
        /// request.
        /// </summary>
        /// <param name="history"><see cref="Peer"/>s that already searched.</param>
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
            ConcurrentBag<BoundPeer> history,
            IEnumerable<BoundPeer> found,
            Address target,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> peers = found.Where(
                peer =>
                    !peer.Address.Equals(_address) &&
                    !_routing.Contains(peer) &&
                    !history.Contains(peer)).ToList();

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
            catch (Exception e)
            {
                if (awaitables.All(task =>
                    task.IsFaulted &&
                    !(task.Exception is null) &&
                    task.Exception.InnerExceptions.All(ex => ex is TimeoutException)))
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

            var findPeerTasks = new List<Task>();
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

                if (history.Contains(peer))
                {
                    continue;
                }

                findPeerTasks.Add(FindPeerAsync(
                    history,
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
                await Task.WhenAll(findPeerTasks);
            }
            catch (Exception e)
            {
                if (findPeerTasks.All(task =>
                    task.IsFaulted &&
                    !(task.Exception is null) &&
                    task.Exception.InnerExceptions.All(ex => ex is TimeoutException)))
                {
                    throw new TimeoutException(
                        "All FindPeer tasks caused timeout during " +
                        $"{nameof(ProcessFoundAsync)}().");
                }

                _logger.Error(
                    e,
                    "Some FindPeer tasks were unexpectedly terminated: {Exception}",
                    e
                );
            }
        }

        private async Task<BoundPeer> ProcessFoundForSpecificAsync(
            ConcurrentBag<BoundPeer> history,
            IEnumerable<BoundPeer> found,
            Address target,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken,
            Address searchAddress)
        {
            BoundPeer peerFound = null;
            List<BoundPeer> peers = found.Where(
                peer => !peer.Address.Equals(_address)).ToList();

            if (peers.Count == 0)
            {
                _logger.Debug("No any neighbor received.");
                return peerFound;
            }

            peers = Kademlia.SortByDistance(peers, target);

            List<BoundPeer> closestNeighbors = _routing.Neighbors(target, _bucketSize).ToList();

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

            for (int i = 0; i < closestNeighbors.Count; i++)
            {
                if (string.CompareOrdinal(
                        closestNeighbors[i].Address.ToHex(),
                        searchAddress.ToHex()
                   ) == 0 && _routing.Contains(closestNeighbors[i]))
                {
                    peerFound = closestNeighbors[i];
                    return peerFound;
                }
            }

            var findNeighboursTasks = new List<Task<BoundPeer>>();
            Peer closestKnown = closestNeighbors.Count == 0 ? null : closestNeighbors[0];
            for (int i = 0; i < Kademlia.FindConcurrency && i < peers.Count; i++)
            {
                if (peerFound is null ||
                    string.CompareOrdinal(
                        Kademlia.CalculateDistance(peers[i].Address, target).ToHex(),
                        Kademlia.CalculateDistance(closestKnown.Address, target).ToHex()
                    ) < 1)
                {
                    findNeighboursTasks.Add(FindSpecificPeerAsync(
                        history,
                        target,
                        peers[i],
                        (depth == -1) ? depth : depth - 1,
                        searchAddress,
                        timeout,
                        cancellationToken));
                }
            }

            var foundSpecificPeer = new List<BoundPeer>();
            try
            {
                foundSpecificPeer.AddRange(await Task.WhenAll(findNeighboursTasks));
            }
            catch (TimeoutException)
            {
                if (findNeighboursTasks.All(findPeerTask => findPeerTask.IsFaulted))
                {
                    throw new TimeoutException(
                        "Timeout exception occurred during " +
                        $"{nameof(ProcessFoundForSpecificAsync)}.");
                }
            }

            for (int i = 0; i < foundSpecificPeer.Count; i++)
            {
                if (string.CompareOrdinal(
                        foundSpecificPeer[i].Address.ToHex(),
                        searchAddress.ToHex()
                   ) == 0 && _routing.Contains(foundSpecificPeer[i]))
                {
                    peerFound = foundSpecificPeer[i];
                    return peerFound;
                }
            }

            return peerFound;
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

            _transport.ReplyMessage(neighbors);
        }
    }
}
