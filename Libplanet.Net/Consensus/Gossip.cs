using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using Microsoft.Extensions.Caching.Memory;
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
        private readonly TimeSpan _seenTtl;
        private readonly ITransport _transport;
        private readonly MessageCache _cache;
        private readonly MemoryCache _seen;
        private readonly Action<Message> _processMessage;
        private readonly IEnumerable<BoundPeer> _seeds;
        private readonly ILogger _logger;

        private TaskCompletionSource<object?> _runningEvent;
        private CancellationTokenSource? _cancellationTokenSource;
        private RoutingTable _table;
        private IProtocol _protocol;

        /// <summary>
        /// Creates a <see cref="Gossip"/> instance.
        /// </summary>
        /// <param name="transport">
        /// An <see cref="ITransport"/> used for communicating messages.</param>
        /// <param name="peers">A list of <see cref="BoundPeer"/> composing network.</param>
        /// <param name="seeds">A list of <see cref="BoundPeer"/> for lookup network.</param>
        /// <param name="processMessage">Action to be called when receiving a new message.</param>
        /// <param name="seenTtl">Time To Live of each entry of the seen cache.
        /// 2 minutes is recommended.</param>
        /// <param name="seenCacheLimit">The size limit of the seen cache in byte.</param>
        public Gossip(
            ITransport transport,
            ImmutableArray<BoundPeer> peers,
            ImmutableArray<BoundPeer> seeds,
            Action<Message> processMessage,
            TimeSpan seenTtl,
            long? seenCacheLimit = null)
        {
            _transport = transport;
            _cache = new MessageCache(5, 3);
            _seenTtl = seenTtl;
            _seen = new MemoryCache(
                new MemoryCacheOptions
                {
                    SizeLimit = seenCacheLimit,
                });
            _processMessage = processMessage;
            _table = new RoutingTable(transport.AsPeer.Address);

            // FIXME: Dumb way to add peer.
            foreach (BoundPeer peer in peers.Where(p => p.Address != transport.AsPeer.Address))
            {
                _table.AddPeer(peer);
            }

            _protocol = new KademliaProtocol(_table, _transport, transport.AsPeer.Address);
            _seeds = seeds;

            _runningEvent = new TaskCompletionSource<object?>(
                TaskCreationOptions.RunContinuationsAsynchronously
            );
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
                    _runningEvent = new TaskCompletionSource<object?>(
                        TaskCreationOptions.RunContinuationsAsynchronously
                    );
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
        /// Start the <see cref="Gossip"/> instance.
        /// </summary>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task StartAsync(CancellationToken ctx)
        {
            _cancellationTokenSource = CancellationTokenSource.CreateLinkedTokenSource(ctx);
            Task transportTask = _transport.StartAsync(_cancellationTokenSource.Token);
            await _transport.WaitForRunningAsync();
            try
            {
                await _protocol.BootstrapAsync(_seeds, TimeSpan.FromSeconds(1), 3, ctx)
                    .ConfigureAwait(false);
            }
            catch (PeerDiscoveryException pde)
            {
                _logger.Error(
                    pde,
                    "Peer discovery exception occurred during {FName}.",
                    nameof(StartAsync));
            }

            _transport.ProcessMessageHandler.Register(
                HandleMessageAsync(_cancellationTokenSource.Token));
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

        /// <inheritdoc/>
        public void Dispose()
        {
            _cancellationTokenSource?.Cancel();
            _cancellationTokenSource?.Dispose();
            _seen.Dispose();
            _transport.Dispose();
        }

        /// <summary>
        /// Waits until this <see cref="Gossip"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="Gossip.Running"/>
        /// property becomes <see langword="true"/>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        /// <summary>
        /// Process a <see cref="Message"/> and add it to the gossip.
        /// </summary>
        /// <param name="message">A <see cref="Message"/> instance to process and gossip.</param>
        public void AddMessage(Message message)
        {
            if (_seen.TryGetValue(message.Id, out _))
            {
                _logger.Verbose(
                    "Message {Message} of id {Id} seen recently, ignored.",
                    message,
                    message.Id);
            }

            try
            {
                _cache.Put(message);
            }
            catch (Exception)
            {
                return;
            }

            // Message instance does not have to be stored.
            _seen.Set(message.Id, message.Id, _seenTtl);
            try
            {
                _processMessage(message);
            }
            catch (Exception)
            {
                // ignored
            }
        }

        /// <summary>
        /// Adds multiple <see cref="Message"/>s in parallel.
        /// <seealso cref="AddMessage"/>
        /// </summary>
        /// <param name="messages">
        /// An enumerable <see cref="Message"/> instance to process and gossip.</param>
        public void AddMessages(IEnumerable<Message> messages)
        {
            messages.AsParallel().ForAll(AddMessage);
        }

        /// <summary>
        /// Selects <paramref name="count"/> <see cref="BoundPeer"/>s from <paramref name="peers"/>.
        /// </summary>
        /// <param name="peers">A <see cref="BoundPeer"/> pool.</param>
        /// <param name="count">Number of <see cref="BoundPeer"/> to choose.</param>
        /// <returns>
        /// An enumerable <see cref="BoundPeer"/>'s of length <paramref name="count"/>.</returns>
        private static IEnumerable<BoundPeer> PeersToBroadcast(
            IEnumerable<BoundPeer> peers,
            int count)
        {
            var rnd = new Random();
            return peers.OrderBy(x => rnd.Next()).Take(count);
        }

        /// <summary>
        /// Handle a message received from <see cref="ITransport.ProcessMessageHandler"/>.
        /// </summary>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>A function with parameter of <see cref="Message"/>
        /// and return <see cref="Task"/>.</returns>
        private Func<Message, Task> HandleMessageAsync(CancellationToken ctx) => async msg =>
        {
            _logger.Verbose("HandleMessage: {Message}", msg);
            switch (msg)
            {
                case PingMsg _:
                case FindNeighborsMsg _:
                    // Ignore protocol related messages, Kadmelia Protocol will handle it.
                    break;
                case HaveMessage h:
                    await HandleHaveAsync(h, ctx);
                    break;
                case WantMessage w:
                    await HandleWantAsync(w, ctx);
                    break;
                default:
                    await Task.Run(() => AddMessage(msg), ctx);
                    break;
            }
        };

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

                _cache.Shift();

                await Task.Delay(_heartbeatInterval, ctx).ConfigureAwait(false);
            }
        }

        /// <summary>
        /// A function handling <see cref="HaveMessage"/>.
        /// <seealso cref="HandleMessageAsync"/>
        /// </summary>
        /// <param name="msg">Target <see cref="HaveMessage"/>.</param>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task HandleHaveAsync(HaveMessage msg, CancellationToken ctx)
        {
            if (!(msg.Remote is BoundPeer peer))
            {
                return;
            }

            if (!_table.Contains(peer))
            {
                await _protocol.AddPeersAsync(new[] { peer }, TimeSpan.FromSeconds(1), ctx)
                    .ConfigureAwait(false);
            }

            await ReplyMessagePongAsync(msg, ctx).ConfigureAwait(false);
            MessageId[] idsToGet = msg.Ids.Where(id => !_seen.TryGetValue(id, out _)).ToArray();
            _logger.Verbose(
                "Handle HaveMessage. {Total}/{Count} messages to get.",
                msg.Ids.Count(),
                idsToGet.Length);
            if (!idsToGet.Any())
            {
                return;
            }

            _logger.Verbose("Ids to receive: {Ids}", idsToGet);
            var want = new WantMessage(idsToGet);
            Message[] replies = (await _transport.SendMessageAsync(
                peer,
                want,
                TimeSpan.FromSeconds(1),
                idsToGet.Length,
                true,
                ctx).ConfigureAwait(false)).ToArray();
            _logger.Verbose(
                "Received {Expected}/{Count} messages. Messages: {@Messages}, Ids: {Ids}",
                idsToGet.Length,
                replies.Length,
                replies,
                replies.Select(m => m.Id).ToArray());
            AddMessages(replies);
        }

        /// <summary>
        /// A function handling <see cref="WantMessage"/>.
        /// <seealso cref="HandleMessageAsync"/>
        /// </summary>
        /// <param name="msg">Target <see cref="WantMessage"/>.</param>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task HandleWantAsync(WantMessage msg, CancellationToken ctx)
        {
            // FIXME: Message may have been discarded.
            // TODO: Message instance in cache itself is modified.
            // Should create new instance before modifying.
            Message[] messages = msg.Ids.Select(id =>
            {
                Message ret = _cache.Get(id);
                ret.Remote = _transport.AsPeer;
                ret.Identity = msg.Identity;
                return ret;
            }).ToArray();
            MessageId[] ids = messages.Select(m => m.Id).ToArray();

            _logger.Debug(
                "WantMessage: Requests are: {Idr}, Ids are: {Id}, Messages are: {@Messages}",
                msg.Ids,
                ids,
                messages);
            IEnumerable<Task> tasks = messages.Select(m => _transport.ReplyMessageAsync(m, ctx));
            await Task.WhenAll(tasks);
            _logger.Debug("Finished replying WantMessage.");
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
                await Task.Delay(_rebuildTableInterval, ctx)
                    .ConfigureAwait(false);
                _logger.Debug(
                    "{FName}: Updating peer table from seed(s) {Seeds}...",
                    nameof(RebuildTableAsync),
                    _seeds.Select(s => s.Address.ToHex()));
                await _protocol.RebuildConnectionAsync(Kademlia.MaxDepth, ctx)
                    .ConfigureAwait(false);
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
                    await _protocol.RefreshTableAsync(_refreshLifespan, ctx)
                        .ConfigureAwait(false);
                    await _protocol.CheckReplacementCacheAsync(ctx)
                        .ConfigureAwait(false);
                    await Task.Delay(_refreshTableInterval, ctx)
                        .ConfigureAwait(false);
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

        /// <summary>
        /// Replies a <see cref="PongMsg"/> of received <paramref name="message"/>.
        /// </summary>
        /// <param name="message">A message to replies.</param>
        /// <param name="ctx">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task ReplyMessagePongAsync(Message message, CancellationToken ctx)
        {
            var pong = new PongMsg { Identity = message.Identity };
            await _transport.ReplyMessageAsync(pong, ctx).ConfigureAwait(false);
        }
    }
}
