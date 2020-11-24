using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
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
        private readonly AppProtocolVersion _appProtocolVersion;
        private readonly IImmutableSet<PublicKey> _trustedAppProtocolVersionSigners;
        private readonly DifferentAppProtocolVersionEncountered
            _differentAppProtocolVersionEncountered;

        private readonly Random _random;
        private readonly RoutingTable _routing;
        private readonly int _tableSize;
        private readonly int _bucketSize;
        private readonly int _findConcurrency;

        private readonly ILogger _logger;

        public KademliaProtocol(
            ITransport transport,
            Address address,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            ILogger logger,
            int? tableSize,
            int? bucketSize,
            int findConcurrency = Kademlia.FindConcurrency,
            TimeSpan? requestTimeout = null)
        {
            _transport = transport;
            _appProtocolVersion = appProtocolVersion;
            _trustedAppProtocolVersionSigners = trustedAppProtocolVersionSigners;
            _differentAppProtocolVersionEncountered = differentAppProtocolVersionEncountered;
            _logger = logger;

            _address = address;
            _random = new System.Random();
            _tableSize = tableSize ?? Kademlia.TableSize;
            _bucketSize = bucketSize ?? Kademlia.BucketSize;
            _findConcurrency = findConcurrency;
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
                catch (PingTimeoutException)
                {
                    _logger.Warning("A timeout exception occurred connecting to seed peer.");
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
                _logger.Verbose("Refreshing table... total peers: {Count}", _routing.Peers.Count());
                List<Task> tasks = _routing.PeersToRefresh(maxAge)
                    .Select(peer =>
                        ValidateAsync(
                            peer,
                            _requestTimeout,
                            cancellationToken)
                    ).ToList();

                _logger.Verbose("Refresh candidates: {Count}", tasks.Count);

                await Task.WhenAll(tasks);
                cancellationToken.ThrowIfCancellationRequested();
            }
            catch (TimeoutException)
            {
            }
        }

        public async Task CheckAllPeersAsync(CancellationToken cancellationToken, TimeSpan? timeout)
        {
            try
            {
                _logger.Verbose("Start to validate all peers: ({Count})", _routing.Peers.Count());
                foreach (var peer in _routing.Peers)
                {
                    await ValidateAsync(peer, timeout ?? _requestTimeout, cancellationToken);
                }
            }
            catch (TimeoutException e)
            {
                _logger.Error(e, "Timeout occurred checking some peers: {e}", e);
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
            _logger.Verbose("Rebuilding connection...");
            var buffer = new byte[20];
            var tasks = new List<Task>();
            for (int i = 0; i < _findConcurrency; i++)
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
            _logger.Verbose("Checking replacement cache.");
            foreach (IEnumerable<BoundPeer> cache in _routing.CachesToCheck)
            {
                foreach (BoundPeer replacement in cache)
                {
                    try
                    {
                        _logger.Verbose("Check peer {Peer}.", replacement);

                        await PingAsync(replacement, _requestTimeout, cancellationToken);
                        _routing.RemoveCache(replacement);
                        UpdateAsync(replacement);
                    }
                    catch (PingTimeoutException)
                    {
                        _logger.Verbose(
                            "Remove stale peer {Peer} from replacement cache.",
                            replacement);
                        _routing.RemoveCache(replacement);
                    }
                }
            }

            _logger.Verbose("Replacement cache checked.");
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
        /// Use <see cref="FindNeighbors"/> messages to to find a <see cref="BoundPeer"/> with
        /// <see cref="Address"/> of <paramref name="target"/>.
        /// </summary>
        /// <param name="target">The <see cref="Address"/> to find.</param>
        /// <param name="depth">Target depth of recursive operation.</param>
        /// <param name="timeout"><see cref="TimeSpan"/> for waiting reply of
        /// <see cref="FindNeighbors"/>.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>A <see cref="BoundPeer"/> with <see cref="Address"/> of
        /// <paramref name="target"/>.</returns>
        public async Task<BoundPeer> FindSpecificPeerAsync(
            Address target,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            _logger.Verbose(
                $"{nameof(FindSpecificPeerAsync)}() with {{Target}}. " +
                "(depth: {Depth})",
                target,
                depth);

            if (_routing.GetPeer(target) is BoundPeer boundPeer)
            {
                try
                {
                    await PingAsync(boundPeer, _requestTimeout, cancellationToken);
                }
                catch (PingTimeoutException)
                {
                    var msg =
                        "{BoundPeer}, a target peer, is in the routing table does not respond.";
                    _logger.Verbose(msg, boundPeer);
                    return null;
                }

                _logger.Verbose(
                    "{BoundPeer}, a target peer, is in the routing table.",
                    boundPeer);
                return boundPeer;
            }

            var history = new ConcurrentBag<BoundPeer>();
            var peersToFind = new ConcurrentQueue<Tuple<BoundPeer, int>>();
            foreach (BoundPeer peer in _routing.Neighbors(target, _findConcurrency, false))
            {
                peersToFind.Enqueue(new Tuple<BoundPeer, int>(peer, 0));
            }

            while (peersToFind.Any())
            {
                cancellationToken.ThrowIfCancellationRequested();

                if (!peersToFind.TryDequeue(out Tuple<BoundPeer, int> tuple))
                {
                    continue;
                }

                tuple.Deconstruct(out BoundPeer viaPeer, out int curDepth);
                _logger.Debug("ViaPeer: {Peer}, curDepth: {curDepth}", viaPeer, curDepth);
                if (depth != -1 && curDepth >= depth)
                {
                    continue;
                }

                history.Add(viaPeer);
                IEnumerable<BoundPeer> foundPeers =
                    await GetNeighbors(viaPeer, target, timeout, cancellationToken);
                IEnumerable<BoundPeer> filteredPeers = foundPeers
                    .Where(peer =>
                        !history.Contains(peer) &&
                        !peersToFind.Any(t => t.Item1.Equals(peer)) &&
                        !peer.Address.Equals(_address))
                    .Take(_findConcurrency);
                int count = 0;
                foreach (var found in filteredPeers)
                {
                    try
                    {
                        await PingAsync(found, _requestTimeout, cancellationToken);
                        if (found.Address.Equals(target))
                        {
                            return found;
                        }

                        peersToFind.Enqueue(new Tuple<BoundPeer, int>(found, curDepth + 1));

                        if (count++ >= _findConcurrency)
                        {
                            break;
                        }
                    }
                    catch (TaskCanceledException)
                    {
                        throw new TaskCanceledException(
                            $"Task is cancelled during {nameof(FindSpecificPeerAsync)}()");
                    }
                    catch (PingTimeoutException)
                    {
                        history.Add(found);
                    }
                }
            }

            return null;
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
                _logger.Verbose("Trying to ping async to {Peer}.", target);
                Message reply = await _transport.SendMessageWithReplyAsync(
                    target,
                    new Ping(),
                    timeout,
                    cancellationToken
                );
                if (!(reply is Pong pong))
                {
                    throw new InvalidMessageException("Received pong is invalid.", reply);
                }

                if (pong.Remote.Address.Equals(_address))
                {
                    throw new InvalidMessageException("Cannot receive pong from self", pong);
                }
            }
            catch (TimeoutException)
            {
                throw new PingTimeoutException(
                    target,
                    $"Timeout occurred during dial to {target}.");
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Error("Different AppProtocolVersion encountered at PingAsync.");
                throw;
            }
        }

        internal void ClearTable()
        {
            _routing.Clear();
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
                _logger.Verbose("Start to validate a peer: {Peer}", peer);
                DateTimeOffset check = DateTimeOffset.UtcNow;
                await PingAsync(peer, timeout, cancellationToken);
                _routing.Check(peer, check, DateTimeOffset.UtcNow);
            }
            catch (PingTimeoutException)
            {
                _logger.Verbose("Peer {Peer} is invalid, removing...", peer);
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

            if (rawPeer is BoundPeer peer)
            {
                // Don't update peer without endpoint or with different appProtocolVersion.
                _routing.AddPeer(peer);
            }
        }

        private void RemovePeer(BoundPeer peer)
        {
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
            _logger.Verbose(
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

            // In ethereum's devp2p, GetNeighbors request will exclude peer with address of
            // target. But our implementation contains target itself for FindSpecificPeerAsync(),
            // so it should be excluded in here.
            found = found.Where(peer => !peer.Address.Equals(target));
            await ProcessFoundAsync(history, found, target, depth, timeout, cancellationToken);
        }

        private async Task<IEnumerable<BoundPeer>> QueryNeighborsAsync(
            ConcurrentBag<BoundPeer> history,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> neighbors = _routing.Neighbors(target, _bucketSize, false).ToList();
            var found = new List<BoundPeer>();
            int count = Math.Min(neighbors.Count, _findConcurrency);
            for (var i = 0; i < count; i++)
            {
                var peers =
                    await GetNeighbors(neighbors[i], target, timeout, cancellationToken);
                history.Add(neighbors[i]);
                found.AddRange(peers.Where(peer => !found.Contains(peer)));
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
                Message reply = await _transport.SendMessageWithReplyAsync(
                    addressee,
                    findPeer,
                    timeout,
                    cancellationToken
                );
                if (!(reply is Neighbors neighbors))
                {
                    throw new InvalidMessageException(
                        $"Reply to {nameof(FindNeighbors)} is invalid.",
                        reply
                    );
                }

                return neighbors.Found;
            }
            catch (TimeoutException)
            {
                RemovePeer(addressee);
                return ImmutableArray<BoundPeer>.Empty;
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
                _logger.Verbose("No any neighbor received.");
                return;
            }

            peers = Kademlia.SortByDistance(peers, target);

            List<BoundPeer> closestCandidate =
                _routing.Neighbors(target, _bucketSize, false).ToList();

            Task[] awaitables = peers.Select(peer =>
                PingAsync(peer, _requestTimeout, cancellationToken)
            ).ToArray();
            try
            {
                await Task.WhenAll(awaitables);
            }
            catch (Exception)
            {
                IEnumerable<AggregateException> exceptions = awaitables
                    .Where(t => t.IsFaulted)
                    .Select(t => t.Exception);
                foreach (var ae in exceptions)
                {
                    foreach (var ie in ae.InnerExceptions)
                    {
                        if (ie is PingTimeoutException pte)
                        {
                            peers.Remove(pte.Target);
                            break;
                        }
                    }

                    _logger.Warning(
                        ae,
                        "Some responses from neighbors found unexpectedly terminated: {ae}",
                        ae
                    );
                }
            }

            var findPeerTasks = new List<Task>();
            Peer closestKnown = closestCandidate.FirstOrDefault();
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
                if (count++ >= _findConcurrency)
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
                _logger.Error(
                    e,
                    "Some FindPeer tasks were unexpectedly terminated: {Exception}",
                    e
                );
            }
        }

        // FIXME: this method is not safe from amplification attack
        // maybe ping/pong/ping/pong is required
        private void ReceiveFindPeer(FindNeighbors findNeighbors)
        {
            IEnumerable<BoundPeer> found =
                _routing.Neighbors(findNeighbors.Target, _bucketSize, true);

            Neighbors neighbors = new Neighbors(found)
            {
                Identity = findNeighbors.Identity,
            };

            _transport.ReplyMessage(neighbors);
        }
    }
}
