using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Channels;
using System.Threading.Tasks;
using Dasync.Collections;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A class gossips messages into network. Peers will be stored and managed by Kademlia DHT.
    /// </summary>
    public class Gossip : IDisposable
    {
        private const int DLazy = 6;
        private readonly TimeSpan _rebuildTableInterval = TimeSpan.FromMinutes(1);
        private readonly TimeSpan _refreshTableInterval = TimeSpan.FromSeconds(10);
        private readonly TimeSpan _refreshLifespan = TimeSpan.FromSeconds(60);
        private readonly TimeSpan _heartbeatInterval = TimeSpan.FromSeconds(1);
        private readonly ITransport _transport;
        private readonly MessageCache _cache;
        private readonly Action<Message> _validateMessageToReceive;
        private readonly Action<MessageContent> _validateMessageToSend;
        private readonly Action<MessageContent> _processMessage;
        private readonly IEnumerable<BoundPeer> _seeds;
        private readonly ILogger _logger;

        private TaskCompletionSource<object?> _runningEvent;
        private CancellationTokenSource? _cancellationTokenSource;
        private RoutingTable _table;
        private HashSet<BoundPeer> _denySet;
        private IProtocol _protocol;
        private ConcurrentDictionary<BoundPeer, HashSet<MessageId>> _haveDict;

        /// <summary>
        /// Creates a <see cref="Gossip"/> instance.
        /// </summary>
        /// <param name="transport">
        /// An <see cref="ITransport"/> used for communicating messages.</param>
        /// <param name="peers">A list of <see cref="BoundPeer"/> composing network.</param>
        /// <param name="seeds">A list of <see cref="BoundPeer"/> for lookup network.</param>
        /// <param name="validateMessageToReceive">Action to be called to validate
        /// a received message to add. Validates on <see cref="HandleMessageAsync"/>.</param>
        /// <param name="validateMessageToSend">Action to be called to validate a new message
        /// to send. Validates on <see cref="HandleWantAsync"/>.</param>
        /// <param name="processMessage">Action to be called when receiving a new message.</param>
        public Gossip(
            ITransport transport,
            ImmutableArray<BoundPeer> peers,
            ImmutableArray<BoundPeer> seeds,
            Action<Message> validateMessageToReceive,
            Action<MessageContent> validateMessageToSend,
            Action<MessageContent> processMessage)
        {
            _transport = transport;
            _cache = new MessageCache();
            _validateMessageToReceive = validateMessageToReceive;
            _validateMessageToSend = validateMessageToSend;
            _processMessage = processMessage;
            _table = new RoutingTable(transport.AsPeer.Address);

            // FIXME: Dumb way to add peer.
            foreach (BoundPeer peer in peers.Where(p => p.Address != transport.AsPeer.Address))
            {
                _table.AddPeer(peer);
            }

            _protocol = new KademliaProtocol(_table, _transport, transport.AsPeer.Address);
            _seeds = seeds;

            _runningEvent = new TaskCompletionSource<object?>();
            _haveDict = new ConcurrentDictionary<BoundPeer, HashSet<MessageId>>();
            _denySet = new HashSet<BoundPeer>();
            Running = false;

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Gossip")
                .ForContext<Gossip>()
                .ForContext("Source", nameof(Gossip));
        }

        /// <summary>
        /// Whether this <see cref="Gossip"/> instance is running.
        /// </summary>
        /// <value>Gets the value indicates whether the instance is running.</value>
        public bool Running
        {
            get => _runningEvent.Task.Status == TaskStatus.RanToCompletion;

            private set
            {
                if (value)
                {
                    _runningEvent.TrySetResult(null);
                }
                else
                {
                    _runningEvent = new TaskCompletionSource<object?>();
                }
            }
        }

        /// <summary>
        /// <see cref="BoundPeer"/> representation of transport used in <see cref="Gossip"/>.
        /// </summary>
        public BoundPeer AsPeer => _transport.AsPeer;

        /// <summary>
        /// The list of <see cref="BoundPeer"/>s in the <see cref="Gossip"/>'s table.
        /// </summary>
        public IEnumerable<BoundPeer> Peers => _table.Peers;

        /// <summary>
        /// The list of <see cref="BoundPeer"/>s written in <see cref="_denySet"/>.
        /// </summary>
        public IEnumerable<BoundPeer> DeniedPeers => _denySet.ToList();

        /// <summary>
        /// Start the <see cref="Gossip"/> instance.
        /// </summary>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task StartAsync(CancellationToken ctx)
        {
            _cancellationTokenSource = CancellationTokenSource.CreateLinkedTokenSource(ctx);
            Task transportTask = _transport.StartAsync(ctx);
            await _transport.WaitForRunningAsync();
            try
            {
                await _protocol.BootstrapAsync(_seeds, TimeSpan.FromSeconds(1), 3, ctx);
            }
            catch (PeerDiscoveryException pde)
            {
                _logger.Error(
                    pde,
                    "Peer discovery exception occurred during {FName}.",
                    nameof(StartAsync));
            }

            _transport.ProcessMessageHandler.Register((message, channel) =>
                HandleMessageAsync(message, channel, _cancellationTokenSource.Token));
            _logger.Debug("All peers are alive. Starting gossip...");
            Running = true;
            await Task.WhenAny(
                transportTask,
                RefreshTableAsync(_cancellationTokenSource.Token),
                RebuildTableAsync(_cancellationTokenSource.Token),
                HeartbeatTask(_cancellationTokenSource.Token));
        }

        /// <summary>
        /// Stop the <see cref="Gossip"/> instance.
        /// </summary>
        /// <param name="waitFor">
        /// The <see cref="TimeSpan"/> of delay before actual stopping.</param>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task StopAsync(TimeSpan waitFor, CancellationToken ctx)
        {
            _cancellationTokenSource?.Cancel();
            await _transport.StopAsync(waitFor, ctx);
        }

        /// <summary>
        /// Clear message cache.
        /// </summary>
        public void ClearCache()
        {
            _cache.Clear();
        }

        /// <inheritdoc/>
        public void Dispose()
        {
            _cancellationTokenSource?.Cancel();
            _cancellationTokenSource?.Dispose();
            _cache.Clear();
            _transport.Dispose();
        }

        /// <summary>
        /// Waits until this <see cref="Gossip"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="Gossip.Running"/>
        /// property becomes <see langword="true"/>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        /// <summary>
        /// Publish given <see cref="MessageContent"/> to peers.
        /// </summary>
        /// <param name="content">A <see cref="MessageContent"/> instance to publish.</param>
        public void PublishMessage(MessageContent content) => PublishMessage(
            content,
            PeersToBroadcast(_table.Peers, DLazy));

        /// <summary>
        /// Publish given <see cref="MessageContent"/> to given <paramref name="targetPeers"/>.
        /// </summary>
        /// <param name="content">A <see cref="MessageContent"/> instance to publish.</param>
        /// <param name="targetPeers"><see cref="BoundPeer"/>s to publish to.</param>
        public void PublishMessage(MessageContent content, IEnumerable<BoundPeer> targetPeers)
        {
            AddMessage(content);
            _transport.BroadcastMessage(targetPeers, content);
        }

        /// <summary>
        /// Process a <see cref="MessageContent"/> and add it to the gossip.
        /// </summary>
        /// <param name="content">A <see cref="MessageContent"/> instance to
        /// process and gossip.</param>
        public void AddMessage(MessageContent content)
        {
            try
            {
                _cache.Put(content);
            }
            catch (ArgumentException)
            {
                _logger.Verbose(
                    "Message of content {Content} with id {Id} seen recently, ignored",
                    content,
                    content.Id);
                return;
            }
            catch (Exception)
            {
                return;
            }

            try
            {
                _processMessage(content);
            }
            catch (Exception)
            {
                // ignored
            }
        }

        /// <summary>
        /// Adds multiple <see cref="MessageContent"/>s in parallel.
        /// <seealso cref="AddMessage(MessageContent)"/>
        /// </summary>
        /// <param name="contents">
        /// An enumerable <see cref="MessageContent"/> instance to process and gossip.</param>
        public void AddMessages(IEnumerable<MessageContent> contents)
        {
            contents.AsParallel().ForAll(AddMessage);
        }

        /// <summary>
        /// Adds <paramref name="peer"/> to the <see cref="_denySet"/> to reject
        /// <see cref="Message"/>s from.
        /// </summary>
        /// <param name="peer"><see cref="BoundPeer"/> to deny.</param>
        public void DenyPeer(BoundPeer peer)
        {
            _denySet.Add(peer);
        }

        /// <summary>
        /// Remove <paramref name="peer"/> frin the <see cref="_denySet"/> to allow
        /// <see cref="Message"/>s from.
        /// </summary>
        /// <param name="peer"><see cref="BoundPeer"/> to allow.</param>
        public void AllowPeer(BoundPeer peer)
        {
            _denySet.Remove(peer);
        }

        /// <summary>
        /// Clear <see cref="_denySet"/> to allow all <see cref="BoundPeer"/>.
        /// </summary>
        public void ClearDenySet()
        {
            _denySet.Clear();
        }

        /// <summary>
        /// Selects <paramref name="count"/> <see cref="BoundPeer"/>s from <paramref name="peers"/>.
        /// </summary>
        /// <param name="peers">A <see cref="BoundPeer"/> pool.</param>
        /// <param name="count">Number of <see cref="BoundPeer"/> to choose.</param>
        /// <returns>
        /// An enumerable <see cref="BoundPeer"/>'s of length <paramref name="count"/>.</returns>
        private IEnumerable<BoundPeer> PeersToBroadcast(
            IEnumerable<BoundPeer> peers,
            int count)
        {
            var rnd = new Random();
            return peers
                .Where(x => !_seeds.Contains(x))
                .OrderBy(x => rnd.Next())
                .Take(count);
        }

        /// <summary>
        /// Handle a message received from <see cref="ITransport.ProcessMessageHandler"/>.
        /// </summary>
        /// <returns>A function with parameter of <see cref="Message"/>
        /// and return <see cref="Task"/>.</returns>
        private async Task HandleMessageAsync(
            Message message,
            Channel<MessageContent> channel,
            CancellationToken cancellationToken)
        {
            _logger.Verbose("HandleMessage: {Message}", message.Content);

            if (_denySet.Contains(message.Remote))
            {
                _logger.Verbose("Message from denied peer, rejecting: {Message}", message.Content);
                await channel.Writer
                    .WriteAsync(new PongMsg(), cancellationToken)
                    .ConfigureAwait(false);
                return;
            }

            try
            {
                _validateMessageToReceive(message);
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "Invalid message, rejecting: {Message}",
                    message.Content);
                return;
            }

            switch (message.Content)
            {
                case PingMsg _:
                case FindNeighborsMsg _:
                    // Ignore protocol related messages, Kadmelia Protocol will handle it.
                    return;
                case HaveMessage _:
                    await HandleHaveAsync(message, channel, cancellationToken);
                    return;
                case WantMessage _:
                    await HandleWantAsync(message, channel, cancellationToken);
                    return;
                default:
                    await channel.Writer
                        .WriteAsync(new PongMsg(), cancellationToken)
                        .ConfigureAwait(false);
                    AddMessage(message.Content);
                    return;
            }
        }

        /// <summary>
        /// A lifecycle task which will run in every <see cref="_heartbeatInterval"/>.
        /// </summary>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task HeartbeatTask(CancellationToken ctx)
        {
            while (!ctx.IsCancellationRequested)
            {
                _logger.Debug("{FName}() has invoked.", nameof(HeartbeatTask));
                MessageId[] ids = _cache.GetGossipIds();
                if (ids.Any())
                {
                    _transport.BroadcastMessage(
                        PeersToBroadcast(_table.Peers, DLazy),
                        new HaveMessage(ids));
                }

                _ = SendWantAsync(ctx);
                await Task.Delay(_heartbeatInterval, ctx);
            }
        }

        /// <summary>
        /// A function handling <see cref="HaveMessage"/>.
        /// <seealso cref="HandleMessageAsync"/>
        /// </summary>
        /// <param name="message">Target <see cref="HaveMessage"/>.</param>
        /// <param name="channel">The <see cref="Channel{T}"/> to write
        /// reply messages.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task HandleHaveAsync(
            Message message,
            Channel<MessageContent> channel,
            CancellationToken cancellationToken)
        {
            var haveMessage = (HaveMessage)message.Content;

            await channel.Writer
                .WriteAsync(new PongMsg(), cancellationToken)
                .ConfigureAwait(false);

            MessageId[] idsToGet = _cache.DiffFrom(haveMessage.Ids);
            _logger.Verbose(
                "Handle HaveMessage. {Total}/{Count} messages to get.",
                haveMessage.Ids.Count(),
                idsToGet.Length);
            if (!idsToGet.Any())
            {
                return;
            }

            _logger.Verbose("Ids to receive: {Ids}", idsToGet);
            if (!_haveDict.ContainsKey(message.Remote))
            {
                _haveDict.TryAdd(message.Remote, new HashSet<MessageId>(idsToGet));
            }
            else
            {
                List<MessageId> list = _haveDict[message.Remote].ToList();
                list.AddRange(idsToGet.Where(id => !list.Contains(id)));
                _haveDict[message.Remote] = new HashSet<MessageId>(list);
            }
        }

        private async Task SendWantAsync(CancellationToken ctx)
        {
            // TODO: To optimize WantMessage count to minimum, should remove duplications.
            var copy = _haveDict.ToDictionary(pair => pair.Key, pair => pair.Value.ToArray());
            _haveDict = new ConcurrentDictionary<BoundPeer, HashSet<MessageId>>();
            var optimized = new Dictionary<BoundPeer, MessageId[]>();
            while (copy.Any())
            {
                var longest = copy.OrderBy(pair => pair.Value.Length).Last();
                optimized.Add(longest.Key, longest.Value);
                copy.Remove(longest.Key);
                var removeCandidate = new List<BoundPeer>();
                foreach (var pair in copy)
                {
                    var clean = pair.Value.Where(id => !longest.Value.Contains(id)).ToArray();
                    if (clean.Any())
                    {
                        copy[pair.Key] = clean;
                    }
                    else
                    {
                        removeCandidate.Add(pair.Key);
                    }
                }

                foreach (var peer in removeCandidate)
                {
                    copy.Remove(peer);
                }
            }

            await optimized.ParallelForEachAsync(
                async pair =>
                {
                    MessageId[] idsToGet = pair.Value;
                    var want = new WantMessage(idsToGet);
                    Message[] replies = (await _transport.SendMessageAsync(
                        pair.Key,
                        want,
                        TimeSpan.FromSeconds(1),
                        idsToGet.Length,
                        true,
                        ctx)).ToArray();
                    _logger.Verbose(
                        "Received {Expected}/{Count} messages. Messages: {@Messages}, Ids: {Ids}",
                        idsToGet.Length,
                        replies.Length,
                        replies,
                        replies.Select(m => m.Content.Id).ToArray());
                    replies.AsParallel().ForAll(
                        r =>
                        {
                            try
                            {
                                _validateMessageToReceive(r);
                                AddMessage(r.Content);
                            }
                            catch (Exception e)
                            {
                                _logger.Error(
                                    "Invalid message, rejecting: {Message}, {Exception}",
                                    r,
                                    e.Message);
                            }
                        });
                },
                ctx);
        }

        /// <summary>
        /// A function handling <see cref="WantMessage"/>.
        /// <seealso cref="HandleMessageAsync"/>
        /// </summary>
        /// <param name="message">Target <see cref="WantMessage"/>.</param>
        /// <param name="channel">The <see cref="Channel{T}"/> to write
        /// reply messages.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task HandleWantAsync(
            Message message,
            Channel<MessageContent> channel,
            CancellationToken cancellationToken)
        {
            // FIXME: Message may have been discarded.
            WantMessage wantMessage = (WantMessage)message.Content;
            MessageContent[] contents = wantMessage.Ids.Select(id => _cache.Get(id)).ToArray();
            MessageId[] ids = contents.Select(c => c.Id).ToArray();

            _logger.Debug(
                "WantMessage: Requests are: {Idr}, Ids are: {Id}, Messages are: {Messages}",
                wantMessage.Ids,
                ids,
                contents.Select(content => (content.Type, content.Id)));

            foreach (var content in contents)
            {
                try
                {
                    _validateMessageToSend(content);
                    await channel.Writer
                        .WriteAsync(content, cancellationToken)
                        .ConfigureAwait(false);
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "Invalid message, rejecting {Message}",
                        message.Content);
                }
            }
        }

        /// <summary>
        /// A lifecycle task which will run in every <see cref="_rebuildTableInterval"/> for
        /// refreshing peer table from seed peer.
        /// </summary>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task RebuildTableAsync(CancellationToken ctx)
        {
            _logger.Debug(
                "{FName}: Updating the peer table from seed for every {Time} milliseconds...",
                nameof(RebuildTableAsync),
                _rebuildTableInterval.TotalMilliseconds);

            while (!ctx.IsCancellationRequested)
            {
                await Task.Delay(_rebuildTableInterval, ctx);
                _logger.Debug(
                    "{FName}: Updating peer table from seed(s) {Seeds}...",
                    nameof(RebuildTableAsync),
                    _seeds.Select(s => s.Address.ToHex()));
                await _protocol.RebuildConnectionAsync(Kademlia.MaxDepth, ctx);
            }
        }

        /// <summary>
        /// Periodically checks whether peers in table is alive.
        /// </summary>
        /// <param name="ctx">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        private async Task RefreshTableAsync(CancellationToken ctx)
        {
            while (!ctx.IsCancellationRequested)
            {
                try
                {
                    await _protocol.RefreshTableAsync(_refreshLifespan, ctx);
                    await _protocol.CheckReplacementCacheAsync(ctx);
                    await Task.Delay(_refreshTableInterval, ctx);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshTableAsync)}() is cancelled.");
                    throw;
                }
                catch (Exception e)
                {
                    var msg = "Unexpected exception occurred during " +
                              $"{nameof(RefreshTableAsync)}(): {{0}}";
                    _logger.Warning(e, msg, e);
                }
            }
        }
    }
}
