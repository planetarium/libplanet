using System;
using System.Collections;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Serilog;
using Serilog.Events;

namespace Libplanet.Net
{
    [Uno.GeneratedEquality]
    public partial class Swarm : ICollection<Peer>, IDisposable
    {
        private readonly IDictionary<Peer, DateTimeOffset> _peers;
        private readonly IDictionary<Peer, DateTimeOffset> _removedPeers;

        private readonly PrivateKey _privateKey;
        private readonly RouterSocket _router;
        private readonly IDictionary<Address, DealerSocket> _dealers;

        private readonly TimeSpan _dialTimeout;
        private readonly AsyncLock _distributeMutex;
        private readonly AsyncLock _receiveMutex;
        private readonly AsyncLock _blockSyncMutex;
        private readonly IPAddress _ipAddress;

        private readonly ILogger _logger;

        private TaskCompletionSource<object> _runningEvent;
        private int? _listenPort;

        public Swarm(
            PrivateKey privateKey,
            int millisecondsDialTimeout = 15000,
            IPAddress ipAddress = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null)
            : this(
                  privateKey,
                  TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                  ipAddress,
                  listenPort,
                  createdAt)
        {
        }

        public Swarm(
            PrivateKey privateKey,
            TimeSpan dialTimeout,
            IPAddress ipAddress = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null)
        {
            Running = false;

            _privateKey = privateKey
                ?? throw new ArgumentNullException(nameof(privateKey));
            _dialTimeout = dialTimeout;
            _peers = new Dictionary<Peer, DateTimeOffset>();
            _removedPeers = new Dictionary<Peer, DateTimeOffset>();
            LastSeenTimestamps = new Dictionary<Peer, DateTimeOffset>();

            DateTimeOffset now = createdAt.GetValueOrDefault(
                DateTimeOffset.UtcNow);
            LastDistributed = now;
            LastReceived = now;
            DeltaDistributed = new AsyncAutoResetEvent();
            DeltaReceived = new AsyncAutoResetEvent();
            TxReceived = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();

            _dealers = new ConcurrentDictionary<Address, DealerSocket>();
            _router = new RouterSocket();

            _distributeMutex = new AsyncLock();
            _receiveMutex = new AsyncLock();
            _blockSyncMutex = new AsyncLock();

            _ipAddress = ipAddress ?? GetLocalIPAddress();
            _listenPort = listenPort;

            string loggerId = _privateKey.PublicKey.ToAddress().ToHex();
            _logger = Log.ForContext<Swarm>()
                .ForContext("SwarmId", loggerId);
        }

        ~Swarm()
        {
            // FIXME If possible, we should stop Swarm appropriately here.
            if (Running)
            {
                _logger.Warning(
                    "Swarm is scheduled to destruct, but it's still running.");
            }
        }

        public int Count => _peers.Count;

        public bool IsReadOnly => false;

        public Uri Url
        {
            get
            {
                if (_ipAddress != null && _listenPort is int port)
                {
                    return new UriBuilder()
                    {
                        Scheme = "tcp",
                        Host = _ipAddress.ToString(),
                        Port = port,
                    }.Uri;
                }
                else
                {
                    return null;
                }
            }
        }

        [Uno.EqualityKey]
        public Address Address => _privateKey.PublicKey.ToAddress();

        public Peer AsPeer => new Peer(
            _privateKey.PublicKey,
            Url != null ? new[] { Url } : new Uri[] { }
        );

        [Uno.EqualityIgnore]
        public AsyncAutoResetEvent DeltaReceived { get; }

        [Uno.EqualityIgnore]
        public AsyncAutoResetEvent DeltaDistributed { get; }

        [Uno.EqualityIgnore]
        public AsyncAutoResetEvent TxReceived { get; }

        [Uno.EqualityIgnore]
        public AsyncAutoResetEvent BlockReceived { get; }

        public DateTimeOffset LastReceived { get; private set; }

        public DateTimeOffset LastDistributed { get; private set; }

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps
        {
            get;
            private set;
        }

        /// <summary>
        /// Whether this <see cref="Swarm"/> instance is running.
        /// </summary>
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
                    _runningEvent = new TaskCompletionSource<object>();
                }
            }
        }

        /// <summary>
        /// Waits until this <see cref="Swarm"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        public async Task<ISet<Peer>> AddPeersAsync(
            IEnumerable<Peer> peers,
            DateTimeOffset? timestamp = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (timestamp == null)
            {
                timestamp = DateTimeOffset.UtcNow;
            }

            foreach (Peer peer in peers)
            {
                if (_removedPeers.ContainsKey(peer))
                {
                    _removedPeers.Remove(peer);
                }
            }

            var existingKeys = new HashSet<PublicKey>(
                _peers.Keys.Select(p => p.PublicKey)
            );
            PublicKey publicKey = _privateKey.PublicKey;
            var addedPeers = new HashSet<Peer>();

            foreach (Peer peer in peers)
            {
                Peer addedPeer = peer;
                if (peer.PublicKey == publicKey)
                {
                    continue;
                }

                if (!IsUnknownPeer(peer))
                {
                    _logger.Debug($"Peer[{peer}] is already exists, ignored.");
                    continue;
                }

                if (Running)
                {
                    try
                    {
                        _logger.Debug($"Trying to DialPeerAsync({peer})...");
                        addedPeer = await DialPeerAsync(
                            peer,
                            cancellationToken
                        );
                        _logger.Debug($"DialPeerAsync({peer}) is complete.");
                    }
                    catch (IOException e)
                    {
                        _logger.Error(
                            e,
                            $"IOException occured in DialPeerAsync ({peer})."
                        );
                        continue;
                    }
                }

                _peers[addedPeer] = timestamp.Value;
                addedPeers.Add(addedPeer);
            }

            return addedPeers;
        }

        public void Add(Peer item)
        {
            if (Running)
            {
                var task = DialPeerAsync(item, CancellationToken.None);
                Peer dialed = task.Result;
                _peers[dialed] = DateTimeOffset.UtcNow;
            }
            else
            {
                _peers[item] = DateTimeOffset.UtcNow;
            }
        }

        public void Clear()
        {
            _peers.Clear();
        }

        public bool Contains(Peer item)
        {
            return _peers.ContainsKey(item);
        }

        public void CopyTo(Peer[] array, int arrayIndex)
        {
            if (array == null)
            {
                throw new ArgumentNullException(nameof(array));
            }

            if (arrayIndex < 0)
            {
                throw new ArgumentOutOfRangeException();
            }

            if (array.Length < Count + arrayIndex)
            {
                throw new ArgumentException();
            }

            int index = arrayIndex;
            foreach (Peer peer in this)
            {
                array[index] = peer;
                index++;
            }
        }

        public async Task StopAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _logger.Debug("Stopping...");
            if (Running)
            {
                _removedPeers[AsPeer] = DateTimeOffset.UtcNow;
                await DistributeDeltaAsync(false, cancellationToken);

                _router.Dispose();
                foreach (DealerSocket s in _dealers.Values)
                {
                    s.Dispose();
                }

                _dealers.Clear();

                Running = false;
            }

            _logger.Debug("Stopped.");
        }

        public void Dispose()
        {
            StopAsync().Wait();
        }

        public IEnumerator<Peer> GetEnumerator()
        {
            return _peers.Keys.GetEnumerator();
        }

        public bool Remove(Peer item)
        {
            return _peers.Remove(item);
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public async Task StartAsync<T>(
            BlockChain<T> blockChain,
            int millisecondsDistributeInterval = 1500,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            await StartAsync(
                blockChain,
                TimeSpan.FromMilliseconds(millisecondsDistributeInterval),
                cancellationToken
            );
        }

        public async Task StartAsync<T>(
            BlockChain<T> blockChain,
            TimeSpan distributeInterval,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            if (_listenPort == null)
            {
                _listenPort = _router.BindRandomPort("tcp://*");
            }
            else
            {
                _router.Bind($"tcp://*:{_listenPort}");
            }

            _logger.Information($"Listen on {_listenPort}");

            try
            {
                Running = true;
                foreach (Peer peer in _peers.Keys)
                {
                    try
                    {
                        Peer replacedPeer = await DialPeerAsync(
                            peer,
                            cancellationToken
                        );
                        if (replacedPeer != peer)
                        {
                            _peers[replacedPeer] = _peers[peer];
                            _peers.Remove(peer);
                        }
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(
                            e,
                            $"TimeoutException occured ({peer})."
                        );
                        continue;
                    }
                    catch (IOException e)
                    {
                        _logger.Error(
                            e,
                            $"IOException occured ({peer})."
                        );
                        continue;
                    }
                }

                await Task.WhenAll(
                    RepeatDeltaDistributionAsync(
                        distributeInterval, cancellationToken),
                    ReceiveMessageAsync(blockChain, cancellationToken));
            }
            catch (Exception e)
            {
                _logger.Error(e, "Unexpected exception occured.");
                throw;
            }
            finally
            {
                await StopAsync();
            }
        }

        public async Task BroadcastBlocksAsync<T>(
            IEnumerable<Block<T>> blocks,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHashes(
                Address,
                blocks.Select(b => b.Hash)
            );
            await BroadcastMessage(
                message.ToNetMQMessage(_privateKey),
                TimeSpan.FromMilliseconds(300),
                cancellationToken);
            _logger.Debug("Block broadcasting complete.");
        }

        public async Task BroadcastTxsAsync<T>(
            IEnumerable<Transaction<T>> txs,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            _logger.Debug("Broadcast Txs.");
            var message = new TxIds(Address, txs.Select(tx => tx.Id));
            await BroadcastMessage(
                message.ToNetMQMessage(_privateKey),
                TimeSpan.FromMilliseconds(300),
                cancellationToken);
        }

        internal async Task<IEnumerable<HashDigest<SHA256>>>
            GetBlockHashesAsync(
                Peer peer,
                BlockLocator locator,
                HashDigest<SHA256>? stop,
                CancellationToken token = default(CancellationToken)
            )
        {
            CheckStarted();

            if (!_peers.ContainsKey(peer))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            var request = new GetBlockHashes(locator, stop);

            using (var socket = new DealerSocket(ToNetMQAddress(peer)))
            {
                await socket.SendMultipartMessageAsync(
                    request.ToNetMQMessage(_privateKey),
                    cancellationToken: token);

                NetMQMessage response =
                    await socket.ReceiveMultipartMessageAsync();
                Message parsedMessage = Message.Parse(response, reply: true);
                if (parsedMessage is BlockHashes blockHashes)
                {
                    return blockHashes.Hashes;
                }

                throw new InvalidMessageException(
                    $"The response of GetBlockHashes isn't BlockHashes. " +
                    $"but {parsedMessage}");
            }
        }

        internal IAsyncEnumerable<Block<T>> GetBlocksAsync<T>(
            Peer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes,
            CancellationToken token = default(CancellationToken))
            where T : IAction
        {
            CheckStarted();

            if (!_peers.ContainsKey(peer))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            return new AsyncEnumerable<Block<T>>(async yield =>
            {
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    var request = new GetBlocks(blockHashes);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey),
                        cancellationToken: token);

                    int hashCount = blockHashes.Count();
                    while (hashCount > 0)
                    {
                        NetMQMessage response =
                        await socket.ReceiveMultipartMessageAsync(
                            cancellationToken: token);
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Block blockMessage)
                        {
                            Block<T> block = Block<T>.FromBencodex(
                                blockMessage.Payload);
                            await yield.ReturnAsync(block);
                            hashCount--;
                        }
                        else
                        {
                            throw new InvalidMessageException(
                                $"The response of GetData isn't a Block. " +
                                $"but {parsedMessage}");
                        }
                    }
                }
            });
        }

        internal IAsyncEnumerable<Transaction<T>> GetTxsAsync<T>(
            Peer peer,
            IEnumerable<TxId> txIds,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            CheckStarted();

            if (!_peers.ContainsKey(peer))
            {
                throw new PeerNotFoundException(
                    $"The peer[{peer.Address}] could not be found.");
            }

            return new AsyncEnumerable<Transaction<T>>(async yield =>
            {
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    var request = new GetTxs(txIds);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey),
                        cancellationToken: cancellationToken);

                    int hashCount = txIds.Count();
                    while (hashCount > 0)
                    {
                        NetMQMessage response =
                        await socket.ReceiveMultipartMessageAsync(
                            cancellationToken: cancellationToken);
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Messages.Tx parsed)
                        {
                            Transaction<T> tx = Transaction<T>.FromBencodex(
                                parsed.Payload);
                            await yield.ReturnAsync(tx);
                            hashCount--;
                        }
                        else
                        {
                            throw new InvalidMessageException(
                                $"The response of getdata isn't block. " +
                                $"but {parsedMessage}");
                        }
                    }
                }
            });
        }

        private static IPAddress GetLocalIPAddress()
        {
            using (var socket = new Socket(
                AddressFamily.InterNetwork,
                SocketType.Dgram,
                0))
            {
                // it's a workaround for checking the IP on the activated NIC.
                // we don't need to make sure the endpoint is reachable
                // because it doesn't connect.
                socket.Connect("8.8.8.8", 65530);
                var endPoint = socket.LocalEndPoint as IPEndPoint;
                return endPoint.Address;
            }
        }

        private static IEnumerable<Peer> FilterPeers(
            IDictionary<Peer, DateTimeOffset> peers,
            DateTimeOffset before,
            DateTimeOffset? after = null,
            bool remove = false)
        {
            foreach (KeyValuePair<Peer, DateTimeOffset> kv in peers.ToList())
            {
                if (after != null && kv.Value <= after)
                {
                    continue;
                }

                if (kv.Value <= before)
                {
                    if (remove)
                    {
                        peers.Remove(kv.Key);
                    }

                    yield return kv.Key;
                }
            }
        }

        private async Task ReceiveMessageAsync<T>(
            BlockChain<T> blockChain, CancellationToken cancellationToken)
            where T : IAction
        {
            CheckStarted();

            while (Running)
            {
                try
                {
                    NetMQMessage raw;
                    try
                    {
                        raw = await _router.ReceiveMultipartMessageAsync(
                            timeout: TimeSpan.FromMilliseconds(100),
                            cancellationToken: cancellationToken);
                    }
                    catch (TimeoutException)
                    {
                        // Ignore this exception because it's expected
                        // when there is no received message in duration.
                        continue;
                    }

                    _logger.Verbose($"The raw message[{raw}] has received.");
                    Message message = Message.Parse(raw, reply: false);
                    _logger.Debug($"The message[{message}] has parsed.");

                    // Queue a task per message to avoid blocking.
                    #pragma warning disable CS4014
                    Task.Run(async () =>
                    {
                        // it's still async because some method it relies are
                        // async yet.
                        await ProcessMessageAsync(
                            blockChain,
                            message,
                            cancellationToken
                        );
                    });
                    #pragma warning restore CS4014
                }
                catch (InvalidMessageException e)
                {
                    _logger.Error(
                        e,
                        "Could not parse NetMQMessage properly; ignore."
                    );
                }
                catch (Exception e)
                {
                    _logger.Error(e, "Unexpected exception occured.");
                    throw;
                }
            }
        }

        private async Task ProcessMessageAsync<T>(
            BlockChain<T> blockChain,
            Message message,
            CancellationToken cancellationToken)
            where T : IAction
        {
            switch (message)
            {
                case Ping ping:
                    {
                        _logger.Debug($"Ping received.");
                        var reply = new Pong
                        {
                            Identity = ping.Identity,
                        };
                        await ReplyAsync(reply, cancellationToken);
                        _logger.Debug($"Pong sent.");
                        break;
                    }

                case Messages.PeerSetDelta peerSetDelta:
                    {
                        await ProcessDeltaAsync(
                            peerSetDelta.Delta, cancellationToken);
                        break;
                    }

                case GetBlockHashes getBlockHashes:
                    {
                        IEnumerable<HashDigest<SHA256>> hashes =
                            blockChain.FindNextHashes(
                                getBlockHashes.Locator,
                                getBlockHashes.Stop,
                                500);
                        var reply = new BlockHashes(Address, hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        await ReplyAsync(reply, cancellationToken);
                        break;
                    }

                case GetBlocks getBlocks:
                    {
                        await TransferBlocks(
                            blockChain, getBlocks, cancellationToken);
                        break;
                    }

                case GetTxs getTxs:
                    {
                        await TransferTxs(
                            blockChain, getTxs, cancellationToken);
                        break;
                    }

                case TxIds txIds:
                    {
                        await ProcessTxIds(
                            txIds, blockChain, cancellationToken);
                        break;
                    }

                case BlockHashes blockHashes:
                    {
                        await ProcessBlockHashes(
                            blockHashes, blockChain, cancellationToken);
                        break;
                    }

                default:
                    Trace.Fail($"Can't handle message. [{message}]");
                    break;
            }
        }

        private async Task ProcessBlockHashes<T>(
            BlockHashes message,
            BlockChain<T> blockChain,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            if (!(message.Sender is Address from))
            {
                throw new NullReferenceException(
                    "BlockHashes doesn't have sender address.");
            }

            Peer peer = _peers.Keys.FirstOrDefault(p => p.Address == from);
            if (peer == null)
            {
                _logger.Information(
                    "BlockHashes was sent from unknown peer. ignored.");
                return;
            }

            _logger.Debug(
                $"Trying to GetBlocksAsync() " +
                $"(using {message.Hashes.Count()} hashes");
            IAsyncEnumerable<Block<T>> fetched = GetBlocksAsync<T>(
                peer, message.Hashes, cancellationToken);

            List<Block<T>> blocks = await fetched.ToListAsync();
            _logger.Debug("GetBlocksAsync() complete.");

            try
            {
                await AppendBlocksAsync(
                    blockChain, peer, blocks, cancellationToken
                );
                _logger.Debug("Append complete.");
            }
            catch (Exception e)
            {
                _logger.Error(e, $"Append Failed. exception: {e}");
                throw;
            }
        }

        private async Task AppendBlocksAsync<T>(
            BlockChain<T> blockChain,
            Peer peer,
            List<Block<T>> blocks,
            CancellationToken cancellationToken
        )
            where T : IAction
        {
            // We assume that the blocks are sorted in order.
            Block<T> oldest = blocks.First();
            Block<T> latest = blocks.Last();
            Block<T> tip = blockChain.Tip;

            if (tip == null || latest.Index >= tip.Index)
            {
                using (await _blockSyncMutex.LockAsync())
                {
                    _logger.Debug("Trying to find branchpoint...");
                    BlockLocator locator = blockChain.GetBlockLocator();
                    IEnumerable<HashDigest<SHA256>> hashes =
                        await GetBlockHashesAsync(
                            peer, locator, oldest.Hash, cancellationToken);
                    HashDigest<SHA256> branchPoint = hashes.First();

                    _logger.Debug(
                        $"Branchpoint is " +
                        $"{ByteUtil.Hex(branchPoint.ToByteArray())}"
                    );

                    BlockChain<T> toSync;

                    if (tip == null || branchPoint == tip.Hash)
                    {
                        _logger.Debug("it doesn't need fork.");
                        toSync = blockChain;
                    }

                    // FIXME BlockChain.Blocks.ContainsKey() can be very
                    // expensive.
                    // we can omit this clause if assume every chain shares
                    // same genesis block...
                    else if (!blockChain.Blocks.ContainsKey(branchPoint))
                    {
                        toSync = new BlockChain<T>(
                            blockChain.Policy,
                            blockChain.Store);
                    }
                    else
                    {
                        _logger.Debug("Forking needed. trying to fork...");
                        toSync = blockChain.Fork(branchPoint);
                        _logger.Debug("Forking complete. ");
                    }

                    _logger.Debug("Trying to fill up previous blocks...");

                    int retry = 3;
                    while (true)
                    {
                        try
                        {
                            await FillBlocksAsync(
                                peer,
                                toSync,
                                oldest.PreviousHash,
                                cancellationToken
                            );

                            break;
                        }
                        catch (Exception e)
                        {
                            if (retry > 0)
                            {
                                _logger.Error(
                                    e,
                                    "FillBlockAsync() failed. retrying..."
                                );
                                retry--;
                            }
                            else
                            {
                                throw;
                            }
                        }
                    }

                    _logger.Debug("Filled up. trying to concatenation...");

                    foreach (Block<T> block in blocks)
                    {
                        toSync.Append(block);
                    }

                    _logger.Debug("Sync is done.");
                    if (!toSync.Id.Equals(blockChain.Id))
                    {
                        _logger.Debug("trying to swapping chain...");
                        blockChain.Swap(toSync);
                        _logger.Debug("Swapping complete");
                    }
                }
            }
            else
            {
                _logger.Information(
                    "Received index is older than current chain's tip." +
                    " ignored.");
            }

            BlockReceived.Set();
        }

        private async Task FillBlocksAsync<T>(
            Peer peer,
            BlockChain<T> blockChain,
            HashDigest<SHA256>? stop,
            CancellationToken cancellationToken)
            where T : IAction
        {
            while (blockChain.Tip?.Hash != stop)
            {
                BlockLocator locator = blockChain.GetBlockLocator();
                IEnumerable<HashDigest<SHA256>> hashes =
                    await GetBlockHashesAsync(
                        peer, locator, stop, cancellationToken);

                if (blockChain.Tip != null)
                {
                    hashes = hashes.Skip(1);
                }

                _logger.Debug(
                    $"Required hashes are {string.Join(",", hashes)}. " +
                    $"(tip: {blockChain.Tip?.Hash})"
                );

                await GetBlocksAsync<T>(
                    peer,
                    hashes,
                    cancellationToken
                ).ForEachAsync(block =>
                {
                    blockChain.Append(block);
                });
            }
        }

        private async Task TransferTxs<T>(
            BlockChain<T> blockChain,
            GetTxs getTxs,
            CancellationToken cancellationToken)
            where T : IAction
        {
            IDictionary<TxId, Transaction<T>> txs = blockChain.Transactions;
            foreach (var txid in getTxs.TxIds)
            {
                if (txs.TryGetValue(txid, out Transaction<T> tx))
                {
                    Message response = new Messages.Tx(tx.ToBencodex(true))
                    {
                        Identity = getTxs.Identity,
                    };
                    await ReplyAsync(response, cancellationToken);
                }
            }
        }

        private async Task ProcessTxIds<T>(
            TxIds message,
            BlockChain<T> blockChain,
            CancellationToken cancellationToken = default(CancellationToken))
            where T : IAction
        {
            _logger.Debug("Trying to fetch txs...");

            IEnumerable<TxId> unknownTxIds = message.Ids
                .Where(id => !blockChain.Transactions.ContainsKey(id));

            if (!(message.Sender is Address from))
            {
                throw new NullReferenceException(
                    "TxIds doesn't have sender address.");
            }

            Peer peer = _peers.Keys.FirstOrDefault(p => p.Address == from);
            if (peer == null)
            {
                _logger.Information(
                    "TxIds was sent from unknown peer. ignored.");
                return;
            }

            IAsyncEnumerable<Transaction<T>> fetched = GetTxsAsync<T>(
                peer, unknownTxIds, cancellationToken);
            var toStage = new HashSet<Transaction<T>>(
                await fetched.ToListAsync(cancellationToken));

            blockChain.StageTransactions(toStage);
            TxReceived.Set();
            _logger.Debug("Txs staged successfully.");
        }

        private async Task ReplyAsync(Message message, CancellationToken token)
        {
            NetMQMessage netMQMessage = message.ToNetMQMessage(_privateKey);
            await _router.SendMultipartMessageAsync(
                netMQMessage,
                cancellationToken: token);
        }

        private async Task TransferBlocks<T>(
            BlockChain<T> blockChain,
            GetBlocks getData,
            CancellationToken cancellationToken)
            where T : IAction
        {
            _logger.Debug("Trying to transfer blocks...");
            foreach (HashDigest<SHA256> hash in getData.BlockHashes)
            {
                if (blockChain.Blocks.TryGetValue(hash, out Block<T> block))
                {
                    Message response = new Block(block.ToBencodex(true, true))
                    {
                        Identity = getData.Identity,
                    };
                    await ReplyAsync(response, cancellationToken);
                }
            }

            _logger.Debug("Transfer complete.");
        }

        private async Task ProcessDeltaAsync(
            PeerSetDelta delta,
            CancellationToken cancellationToken
        )
        {
            Peer sender = delta.Sender;

            if (IsUnknownPeer(sender))
            {
                delta = new PeerSetDelta(
                    delta.Sender,
                    delta.Timestamp,
                    delta.AddedPeers.Add(sender),
                    delta.RemovedPeers,
                    delta.ExistingPeers
                );
            }

            _logger.Debug($"Received the delta[{delta}].");

            using (await _receiveMutex.LockAsync(cancellationToken))
            {
                _logger.Debug($"Trying to apply the delta[{delta}]...");
                await ApplyDelta(delta, cancellationToken);

                LastReceived = delta.Timestamp;
                LastSeenTimestamps[delta.Sender] = delta.Timestamp;

                DeltaReceived.Set();
            }

            _logger.Debug($"The delta[{delta}] has been applied.");
        }

        private bool IsUnknownPeer(Peer sender)
        {
            if (_peers.Keys.All(p => sender.PublicKey != p.PublicKey))
            {
                return true;
            }

            if (_dealers.Keys.All(a => sender.Address != a))
            {
                return true;
            }

            return false;
        }

        private async Task ApplyDelta(
            PeerSetDelta delta,
            CancellationToken cancellationToken
        )
        {
            PublicKey senderPublicKey = delta.Sender.PublicKey;
            bool firstEncounter = IsUnknownPeer(delta.Sender);
            RemovePeers(delta.RemovedPeers, delta.Timestamp);
            var addedPeers = new HashSet<Peer>(delta.AddedPeers);

            if (delta.ExistingPeers != null)
            {
                ImmutableHashSet<PublicKey> removedPublicKeys = _removedPeers
                    .Keys.Select(p => p.PublicKey)
                    .ToImmutableHashSet();
                addedPeers.UnionWith(
                    delta.ExistingPeers.Where(
                        p => !removedPublicKeys.Contains(p.PublicKey)
                    )
                );
            }

            _logger.Debug("Trying to add peers...");
            ISet<Peer> added = await AddPeersAsync(
                addedPeers, delta.Timestamp, cancellationToken);
            if (_logger.IsEnabled(LogEventLevel.Debug))
            {
                DumpDiffs(
                    delta,
                    added,
                    addedPeers.Except(added),
                    delta.RemovedPeers
                );
            }

            if (firstEncounter)
            {
                await DistributeDeltaAsync(true, cancellationToken);
            }
        }

        private void DumpDiffs(
            PeerSetDelta delta,
            IEnumerable<Peer> added,
            IEnumerable<Peer> existing,
            IEnumerable<Peer> removed)
        {
            DateTimeOffset timestamp = delta.Timestamp;

            foreach (Peer peer in added)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > +{peer}");
            }

            foreach (Peer peer in existing)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > {peer}");
            }

            foreach (Peer peer in removed)
            {
                _logger.Debug($"{timestamp} {delta.Sender} > -{peer}");
            }
        }

        private void RemovePeers(
            IEnumerable<Peer> peers, DateTimeOffset timestamp)
        {
            PublicKey publicKey = _privateKey.PublicKey;
            foreach (Peer peer in peers)
            {
                if (peer.PublicKey != publicKey)
                {
                    continue;
                }

                _removedPeers[peer] = timestamp;
            }

            Dictionary<PublicKey, Peer[]> existingPeers =
                _peers.Keys.ToDictionary(
                    p => p.PublicKey,
                    p => new[] { p }
                );

            using (_distributeMutex.Lock())
            {
                foreach (Peer peer in peers)
                {
                    _peers.Remove(peer);

                    _logger.Debug(
                        $"Trying to close dealers associated {peer}."
                    );
                    if (Running)
                    {
                        CloseDealer(peer);
                    }

                    var pubKey = peer.PublicKey;

                    if (existingPeers.TryGetValue(pubKey, out Peer[] remains))
                    {
                        foreach (Peer key in remains)
                        {
                            _peers.Remove(key);

                            if (Running)
                            {
                                CloseDealer(key);
                            }
                        }
                    }

                    _logger.Debug($"Dealers associated {peer} were closed.");
                }
            }
        }

        private void CloseDealer(Peer peer)
        {
            CheckStarted();
            if (_dealers.TryGetValue(peer.Address, out DealerSocket dealer))
            {
                dealer.Dispose();
                _dealers.Remove(peer.Address);
            }
        }

        private async Task<DealerSocket> DialAsync(
            Uri address,
            DealerSocket dealer,
            CancellationToken cancellationToken
        )
        {
            CheckStarted();

            dealer.Connect(address.ToString().TrimEnd('/'));

            _logger.Debug($"Trying to Ping to [{address}]...");
            var ping = new Ping();
            await dealer.SendMultipartMessageAsync(
                ping.ToNetMQMessage(_privateKey),
                cancellationToken: cancellationToken);

            _logger.Debug($"Waiting for Pong from [{address}]...");
            await dealer.ReceiveMultipartMessageAsync(
                timeout: _dialTimeout,
                cancellationToken: cancellationToken);

            _logger.Debug($"Pong received.");

            return dealer;
        }

        private async Task<Peer> DialPeerAsync(
            Peer peer, CancellationToken cancellationToken)
        {
            Peer original = peer;
            var connected = false;

            // Peer can have more than 2 Url due to NAT and so on.
            // Therefore, DialPeerAsync () checks the accessible URLs
            // and puts them at the front.
            foreach (var (url, i) in peer.Urls.Select((url, i) => (url, i)))
            {
                var dealer = new DealerSocket();
                dealer.Options.Identity =
                    _privateKey.PublicKey.ToAddress().ToByteArray();
                try
                {
                    _logger.Debug($"Trying to DialAsync({url})...");
                    await DialAsync(url, dealer, cancellationToken);
                    _logger.Debug($"DialAsync({url}) is complete.");
                }
                catch (IOException e)
                {
                    _logger.Error(
                        e,
                        $"IOException occured in DialAsync ({url})."
                    );
                    dealer.Dispose();
                    continue;
                }
                catch (TimeoutException e)
                {
                    _logger.Error(
                        e,
                        $"TimeoutException occured in DialAsync ({url})."
                    );
                    dealer.Dispose();
                    continue;
                }

                if (i > 0)
                {
                    peer = new Peer(peer.PublicKey, peer.Urls.Skip(i));
                }

                _dealers[peer.Address] = dealer;
                connected = true;
                break;
            }

            if (!connected)
            {
                throw new IOException($"not reachable at all to {original}");
            }

            return peer;
        }

        private async Task DistributeDeltaAsync(
            bool all, CancellationToken cancellationToken)
        {
            CheckStarted();

            DateTimeOffset now = DateTimeOffset.UtcNow;
            var addedPeers = FilterPeers(
                _peers,
                before: now,
                after: LastDistributed).ToImmutableHashSet();
            var removedPeers = FilterPeers(
                _removedPeers,
                before: now,
                remove: true).ToImmutableHashSet();
            var existingPeers = all
                    ? _peers.Keys.ToImmutableHashSet().Except(addedPeers)
                    : null;
            var delta = new PeerSetDelta(
                sender: AsPeer,
                timestamp: now,
                addedPeers: addedPeers,
                removedPeers: removedPeers,
                existingPeers: existingPeers
            );

            _logger.Debug(
                $"Trying to distribute own delta ({delta.AddedPeers.Count})..."
            );
            if (delta.AddedPeers.Any() || delta.RemovedPeers.Any() || all)
            {
                LastDistributed = now;

                using (await _distributeMutex.LockAsync(cancellationToken))
                {
                    var message = new Messages.PeerSetDelta(delta);
                    _logger.Debug("Send the delta to dealers...");

                    try
                    {
                        await BroadcastMessage(
                            message.ToNetMQMessage(_privateKey),
                            TimeSpan.FromMilliseconds(300),
                            cancellationToken);
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(e, "TimeoutException occured.");
                    }
                    catch (Exception e)
                    {
                        _logger.Error(e, "UnexpectedException occured.");
                        throw;
                    }

                    _logger.Debug("The delta has been sent.");
                    DeltaDistributed.Set();
                }
            }
        }

        private Task BroadcastMessage(
            NetMQMessage message,
            TimeSpan timeout,
            CancellationToken cancellationToken)
        {
            // FIXME Should replace with PUB/SUB model.
            return Task.WhenAll(
                _dealers.Values.Select(
                    s => s.SendMultipartMessageAsync(
                        message,
                        timeout: timeout,
                        cancellationToken: cancellationToken)));
        }

        private async Task RepeatDeltaDistributionAsync(
            TimeSpan interval, CancellationToken cancellationToken)
        {
            int i = 1;
            while (Running)
            {
                await DistributeDeltaAsync(i % 10 == 0, cancellationToken);
                await Task.Delay(interval, cancellationToken);
                i = (i + 1) % 10;
            }
        }

        private void CheckStarted()
        {
            if (!Running)
            {
                throw new NoSwarmContextException("Swarm hasn't started yet.");
            }
        }

        private string ToNetMQAddress(Peer peer)
        {
            if (peer == null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            // See DialPeerAsync().
            Uri url = peer.Urls.FirstOrDefault();
            return url?.ToString().TrimEnd('/');
        }
    }
}
