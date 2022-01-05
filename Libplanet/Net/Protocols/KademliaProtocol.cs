#nullable enable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Serilog;
using Random = System.Random;

namespace Libplanet.Net.Protocols
{
    /// <summary>
    /// A Kademlia based peer discovery protocol.
    /// </summary>
    public class KademliaProtocol : IProtocol
    {
        private readonly TimeSpan _requestTimeout;
        private readonly ITransport _transport;
        private readonly Address _address;
        private readonly Random _random;
        private readonly RoutingTable _table;
        private readonly int _findConcurrency;
        private readonly ILogger _logger;

        /// <summary>
        /// Creates a <see cref="KademliaProtocol"/> instance.
        /// </summary>
        /// <param name="table">
        /// The <see cref="RoutingTable"/> where <see cref="Peer"/>s are stored.</param>
        /// <param name="transport"><see cref="ITransport"/> to process messages.</param>
        /// <param name="address">The <see cref="Address"/> of the <see cref="Peer"/>
        /// to be the reference point.</param>
        /// <param name="findConcurrency">The number of concurrency in peer discovery.</param>
        /// <param name="requestTimeout">
        /// A timeout of waiting for the reply of messages.
        /// If it's omitted or <c>null</c> is given, will automatically be set to 5 seconds.
        /// </param>
        public KademliaProtocol(
            RoutingTable table,
            ITransport transport,
            Address address,
            int findConcurrency = Kademlia.FindConcurrency,
            TimeSpan? requestTimeout = null)
        {
            _transport = transport;
            _logger = Log.ForContext<KademliaProtocol>();

            _address = address;
            _random = new System.Random();
            _findConcurrency = findConcurrency;
            _table = table;
            _requestTimeout = requestTimeout ?? TimeSpan.FromMilliseconds(5000);
            _transport.ProcessMessageHandler.Register(ProcessMessageHandler);
        }

        /// <inheritdoc />
        // FIXME: Currently bootstrap is done until it finds closest peer, but it should halt
        // when found neighbor's count is reached 2*k.
        public async Task BootstrapAsync(
            IEnumerable<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findNeighborsTimeout,
            int depth,
            CancellationToken cancellationToken)
        {
            var findPeerTasks = new List<Task>();
            var history = new ConcurrentBag<BoundPeer>();
            var dialHistory = new ConcurrentBag<BoundPeer>();

            foreach (BoundPeer peer in bootstrapPeers.Where(peer => !peer.Address.Equals(_address)))
            {
                // Guarantees at least one connection (seed peer)
                try
                {
                    await PingAsync(peer, pingSeedTimeout, cancellationToken);
                    findPeerTasks.Add(
                        FindPeerAsync(
                            history,
                            dialHistory,
                            _address,
                            peer,
                            depth,
                            findNeighborsTimeout,
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
                        e, "An unexpected exception occurred connecting to seed peer.");
                }
            }

            if (!_table.Peers.Any())
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
                var msg = $"An unexpected exception occurred during {nameof(BootstrapAsync)}().";
                _logger.Error(e, msg);
                throw;
            }
        }

        /// <inheritdoc />
        public async Task AddPeersAsync(
            IEnumerable<Peer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            try
            {
                var tasks = new List<Task>();
                foreach (Peer peer in peers)
                {
                    if (peer is BoundPeer boundPeer)
                    {
                        tasks.Add(PingAsync(
                            boundPeer,
                            timeout: timeout,
                            cancellationToken: cancellationToken));
                    }
                }

                _logger.Verbose("Trying to ping {PeerCount} peers.", tasks.Count);
                await Task.WhenAll(tasks);
                _logger.Verbose("Update complete.");
            }
            catch (DifferentAppProtocolVersionException e)
            {
                AppProtocolVersion expected = e.ExpectedVersion, actual = e.ActualVersion;
                _logger.Debug(
                    $"Different version encountered during {nameof(AddPeersAsync)}().\n" +
                    "Expected version: {ExpectedVersion} ({ExpectedVersionExtra}) " +
                    "[{ExpectedSignature}; {ExpectedSigner}]\n" +
                    "Actual version: {ActualVersion} ({ActualVersionExtra}) [{ActualSignature};" +
                    "{ActualSigner}]",
                    expected.Version,
                    expected.Extra,
                    ByteUtil.Hex(expected.Signature),
                    expected.Signer.ToString(),
                    actual.Version,
                    actual.Extra,
                    ByteUtil.Hex(actual.Signature),
                    actual.Signer
                );
            }
            catch (TimeoutException e)
            {
                const string msg =
                    "Timeout occurred during " + nameof(AddPeersAsync) + "() after {Timeout}.";
                _logger.Debug(e, msg, timeout);
                throw;
            }
            catch (TaskCanceledException e)
            {
                const string msg = "Task is cancelled during " + nameof(AddPeersAsync) + "().";
                _logger.Debug(e, msg);
            }
            catch (Exception e)
            {
                const string msg = "Unexpected exception occurred during " +
                                   nameof(AddPeersAsync) + "().";
                _logger.Error(e, msg);
                throw;
            }
        }

        /// <inheritdoc />
        public async Task RefreshTableAsync(TimeSpan maxAge, CancellationToken cancellationToken)
        {
            // TODO: Add timeout parameter for this method
            try
            {
                IReadOnlyList<BoundPeer> peers = _table.PeersToRefresh(maxAge);
                _logger.Verbose(
                    "Refreshing {CandidateCount} peers out of {PeerCount} peers...",
                    peers.Count,
                    _table.Peers.Count);

                List<Task> tasks = peers
                    .Select(peer =>
                        ValidateAsync(
                            peer,
                            _requestTimeout,
                            cancellationToken))
                    .ToList();

                await Task.WhenAll(tasks);
                cancellationToken.ThrowIfCancellationRequested();
            }
            catch (TimeoutException)
            {
            }
        }

        /// <summary>
        /// Refreshes all peers in routing table.
        /// </summary>
        /// <param name="timeout">A timeout of waiting for the reply of messages.
        /// If <c>null</c> is given, the task never halts by itself
        /// even no any response was given from the the target peer.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task CheckAllPeersAsync(TimeSpan? timeout, CancellationToken cancellationToken)
        {
            try
            {
                _logger.Verbose("Start to validate all peers: ({Count})", _table.Peers.Count);
                foreach (var peer in _table.Peers)
                {
                    await ValidateAsync(peer, timeout ?? _requestTimeout, cancellationToken);
                }
            }
            catch (TimeoutException e)
            {
                _logger.Error(e, "Timeout occurred checking some peers.");
            }
        }

        /// <inheritdoc />
        public async Task RebuildConnectionAsync(int depth, CancellationToken cancellationToken)
        {
            _logger.Verbose("Rebuilding connection...");
            var buffer = new byte[20];
            var tasks = new List<Task>();
            var history = new ConcurrentBag<BoundPeer>();
            var dialHistory = new ConcurrentBag<BoundPeer>();
            for (int i = 0; i < _findConcurrency; i++)
            {
                _random.NextBytes(buffer);
                tasks.Add(FindPeerAsync(
                    history,
                    dialHistory,
                    new Address(buffer),
                    null,
                    depth,
                    _requestTimeout,
                    cancellationToken));
            }

            tasks.Add(
                FindPeerAsync(
                    history,
                    dialHistory,
                    _address,
                    null,
                    depth,
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

        /// <inheritdoc />
        public async Task CheckReplacementCacheAsync(CancellationToken cancellationToken)
        {
            _logger.Verbose("Checking replacement cache.");
            foreach (IEnumerable<BoundPeer> cache in _table.CachesToCheck)
            {
                foreach (BoundPeer replacement in cache)
                {
                    try
                    {
                        _logger.Verbose("Check peer {Peer}.", replacement);

                        _table.RemoveCache(replacement);
                        await PingAsync(replacement, _requestTimeout, cancellationToken);
                    }
                    catch (PingTimeoutException)
                    {
                        _logger.Verbose(
                            "Removed stale peer {Peer} from replacement cache.",
                            replacement);
                    }
                }
            }

            _logger.Verbose("Replacement cache checked.");
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
        /// <returns>A <see cref="BoundPeer"/> with <paramref name="target"/> as its
        /// <see cref="Address"/> if found.  Otherwise, <c>null</c>.</returns>
        public async Task<BoundPeer?> FindSpecificPeerAsync(
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

            if (_table.GetPeer(target) is BoundPeer boundPeer)
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
                    RemovePeer(boundPeer);
                    return null;
                }

                _logger.Verbose(
                    "{BoundPeer}, a target peer, is in the routing table.",
                    boundPeer);
                return boundPeer;
            }

            HashSet<BoundPeer> history = new HashSet<BoundPeer>();
            Queue<Tuple<BoundPeer, int>> peersToFind = new Queue<Tuple<BoundPeer, int>>();
            foreach (BoundPeer peer in _table.Neighbors(target, _findConcurrency, false))
            {
                peersToFind.Enqueue(new Tuple<BoundPeer, int>(peer, 0));
            }

            while (peersToFind.Any())
            {
                cancellationToken.ThrowIfCancellationRequested();

                peersToFind.Dequeue().Deconstruct(out BoundPeer viaPeer, out int curDepth);
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
                        // Ignore peer not responding
                    }
                    finally
                    {
                        history.Add(found);
                    }
                }
            }

            return null;
        }

        internal async Task PingAsync(
            BoundPeer peer,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (cancellationToken.IsCancellationRequested)
            {
                return;
            }

            try
            {
                _logger.Verbose("Trying to ping async to {Peer}.", peer);
                Message reply = await _transport.SendMessageWithReplyAsync(
                    peer,
                    new Ping(),
                    timeout,
                    cancellationToken
                );
                if (!(reply is Pong pong))
                {
                    throw new InvalidMessageException(
                        $"Expected pong, but received {reply.Type}.", reply);
                }
                else if (!(pong.Remote is Peer remote))
                {
                    throw new InvalidMessageException($"Received pong's remote is null.", pong);
                }
                else if (remote.Address.Equals(_address))
                {
                    throw new InvalidMessageException("Cannot receive pong from self", pong);
                }

                AddPeer(peer);
            }
            catch (TimeoutException)
            {
                throw new PingTimeoutException(
                    peer,
                    $"Timeout occurred during dial to {peer}.");
            }
            catch (InvalidTimestampException)
            {
                throw new PingTimeoutException(
                    peer,
                    $"Received Pong from {peer} has invalid timestamp.");
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Error(
                    $"Different AppProtocolVersion encountered at {nameof(PingAsync)}().");
                throw;
            }
        }

        private async Task ProcessMessageHandler(Message message)
        {
            switch (message)
            {
                case Ping ping:
                {
                    await ReceivePingAsync(ping);
                    break;
                }

                case FindNeighbors findNeighbors:
                {
                    await ReceiveFindPeerAsync(findNeighbors);
                    break;
                }
            }

            if (message.Remote is BoundPeer peer)
            {
                // Should we update peer status for non-protocol related messages?
                // (i.e. BlockHashes)
                AddPeer(peer);
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
        /// <exception cref="TimeoutException">
        /// Thrown when validation fails in given <paramref name="timeout"/>.
        /// </exception>
        private async Task ValidateAsync(
            BoundPeer peer,
            TimeSpan timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            try
            {
                _logger.Verbose("Starting to validate peer {Peer}...", peer);
                DateTimeOffset check = DateTimeOffset.UtcNow;
                await PingAsync(peer, timeout, cancellationToken);
                _table.Check(peer, check, DateTimeOffset.UtcNow);
            }
            catch (PingTimeoutException)
            {
                _logger.Verbose("Removing invalid peer {Peer}...", peer);
                RemovePeer(peer);
                throw new TimeoutException($"Timeout occurred during {nameof(ValidateAsync)}");
            }
        }

        private void AddPeer(BoundPeer peer)
        {
            _logger.Verbose("Trying to add {Peer}...", peer);
            _table.AddPeer(peer);
        }

        private void RemovePeer(BoundPeer peer)
        {
            _logger.Verbose("Trying to remove {Peer}...", peer);
            _table.RemovePeer(peer);
        }

        /// <summary>
        /// Send <see cref="FindNeighbors"/> messages to <paramref name="viaPeer"/>
        /// to find <see cref="Peer"/>s near <paramref name="target"/>.
        /// </summary>
        /// <param name="history">The <see cref="Peer"/> that searched.</param>
        /// <param name="dialHistory">The <see cref="Peer"/> that ping was sent.</param>
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
            ConcurrentBag<BoundPeer> dialHistory,
            Address target,
            BoundPeer? viaPeer,
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
            await ProcessFoundAsync(
                history,
                dialHistory,
                found,
                target,
                depth,
                timeout,
                cancellationToken);
        }

        private async Task<IEnumerable<BoundPeer>> QueryNeighborsAsync(
            ConcurrentBag<BoundPeer> history,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> neighbors = _table.Neighbors(target, _table.BucketSize, false).ToList();
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
            BoundPeer peer,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            var findPeer = new Messages.FindNeighbors(target);
            try
            {
                Message reply = await _transport.SendMessageWithReplyAsync(
                    peer,
                    findPeer,
                    timeout,
                    cancellationToken);
                if (!(reply is Messages.Neighbors neighbors))
                {
                    throw new InvalidMessageException(
                        $"Reply to {nameof(Messages.FindNeighbors)} is invalid.",
                        reply);
                }

                return neighbors.Found;
            }
            catch (InvalidTimestampException)
            {
                _logger.Debug($"Reply of {nameof(GetNeighbors)}'s timestamp is stale.");
                return ImmutableArray<BoundPeer>.Empty;
            }
            catch (TimeoutException)
            {
                RemovePeer(peer);
                return ImmutableArray<BoundPeer>.Empty;
            }
        }

        // Send pong back to remote
        private async Task ReceivePingAsync(Ping ping)
        {
            if (!(ping.Remote is Peer remote))
            {
                throw new InvalidMessageException("Received ping's remote is null.", ping);
            }
            else if (remote.Address.Equals(_address))
            {
                throw new InvalidMessageException("Cannot receive ping from self.", ping);
            }

            var pong = new Pong
            {
                Identity = ping.Identity,
            };

            await _transport.ReplyMessageAsync(pong, default);
        }

        /// <summary>
        /// Process <see cref="Peer"/>s that is replied by sending <see cref="FindNeighbors"/>
        /// request.
        /// </summary>
        /// <param name="history"><see cref="Peer"/>s that already searched.</param>
        /// <param name="dialHistory"><see cref="Peer"/>s that ping sent.</param>
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
            ConcurrentBag<BoundPeer> dialHistory,
            IEnumerable<BoundPeer> found,
            Address target,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> peers = found.Where(
                peer =>
                    !peer.Address.Equals(_address) &&
                    !_table.Contains(peer) &&
                    !history.Contains(peer)).ToList();

            if (peers.Count == 0)
            {
                _logger.Verbose("No any neighbor received.");
                return;
            }

            peers = Kademlia.SortByDistance(peers, target).ToList();

            IReadOnlyList<BoundPeer> closestCandidate =
                _table.Neighbors(target, _table.BucketSize, false);

            List<Task> tasks = peers
                .Where(peer => !dialHistory.Contains(peer))
                .Select(
                    peer =>
                    {
                        dialHistory.Add(peer);
                        return PingAsync(peer, _requestTimeout, cancellationToken);
                    }
                ).ToList();
            Task aggregateTask = Task.WhenAll(tasks);
            try
            {
                await aggregateTask;
            }
            catch (Exception)
            {
                AggregateException aggregateException = aggregateTask.Exception!;
                foreach (Exception e in aggregateException.InnerExceptions)
                {
                    if (e is PingTimeoutException pte)
                    {
                        peers.Remove(pte.Target);
                    }
                }

                _logger.Warning(
                    aggregateException,
                    "Some responses from neighbors found unexpectedly terminated.");
            }

            var findPeerTasks = new List<Task>();
            BoundPeer closestKnownPeer = closestCandidate.FirstOrDefault();
            var count = 0;
            foreach (var peer in peers)
            {
                if (closestKnownPeer is { } ckp &&
                   string.CompareOrdinal(
                       Kademlia.CalculateDistance(peer.Address, target).ToHex(),
                       Kademlia.CalculateDistance(ckp.Address, target).ToHex()
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
                    dialHistory,
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
                    "Some FindPeer tasks were unexpectedly terminated.");
            }
        }

        // FIXME: this method is not safe from amplification attack
        // maybe ping/pong/ping/pong is required
        private async Task ReceiveFindPeerAsync(Messages.FindNeighbors findNeighbors)
        {
            IEnumerable<BoundPeer> found =
                _table.Neighbors(findNeighbors.Target, _table.BucketSize, true);

            Messages.Neighbors neighbors = new Messages.Neighbors(found)
            {
                Identity = findNeighbors.Identity,
            };

            await _transport.ReplyMessageAsync(neighbors, default);
        }
    }
}
