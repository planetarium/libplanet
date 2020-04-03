using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Nito.AsyncEx;
using Serilog;
using Serilog.Events;

namespace Libplanet.Net
{
    internal class BlockCompletion<TPeer, TAction>
        where TAction : IAction, new()
    {
        private readonly ILogger _logger;
        private readonly Func<HashDigest<SHA256>, bool> _completionPredicate;
        private readonly int _window;
        private readonly ConcurrentDictionary<HashDigest<SHA256>, bool> _satisfiedBlocks;
        private readonly ConcurrentQueue<HashDigest<SHA256>> _demands;
        private readonly SemaphoreSlim _demandEnqueued;
        private bool _started;

        public BlockCompletion(
            Func<HashDigest<SHA256>, bool> completionPredicate = null,
            int window = 100
        )
        {
            _logger = Log.ForContext<BlockCompletion<TPeer, TAction>>();
            _completionPredicate = completionPredicate;
            _window = window;
            _satisfiedBlocks = new ConcurrentDictionary<HashDigest<SHA256>, bool>();
            _started = false;
            _demands = new ConcurrentQueue<HashDigest<SHA256>>();
            _demandEnqueued = new SemaphoreSlim(0);
        }

        public delegate IAsyncEnumerable<Block<TAction>> BlockFetcher(
            TPeer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes,
            CancellationToken cancellationToken
        );

        public bool Demand(HashDigest<SHA256> blockHash) =>
            Demand(blockHash, retry: false);

        public int Demand(IEnumerable<HashDigest<SHA256>> blockHashes) =>
            Demand(blockHashes, retry: false);

        public async IAsyncEnumerable<IEnumerable<HashDigest<SHA256>>> EnumerateChunks(
            [EnumeratorCancellation] CancellationToken cancellationToken = default
        )
        {
            var chunk = new List<HashDigest<SHA256>>(capacity: _window);
            while (!(cancellationToken.IsCancellationRequested ||
                     QueuedDemandCompleted()))
            {
                cancellationToken.ThrowIfCancellationRequested();
                if (_logger.IsEnabled(LogEventLevel.Verbose))
                {
                    _logger.Verbose(
                        "Waiting a demand enqueued...\n" +
                        "Demands in the buffer: {DemandCount}.\n" +
                        "Incomplete downloads: {IncompleteDownloads}.",
                        chunk.Count,
                        _satisfiedBlocks.Count(kv => !kv.Value && !chunk.Contains(kv.Key))
                    );
                }

                await _demandEnqueued.WaitAsync(100, cancellationToken);
                if (_demands.TryDequeue(out HashDigest<SHA256> demand))
                {
                    chunk.Add(demand);
                }

                if (chunk.Count >= _window || (
                        _started && _demands.IsEmpty && _satisfiedBlocks.All(kv =>
                            kv.Value || chunk.Contains(kv.Key))))
                {
                    yield return chunk.ToImmutableArray();
                    _logger.Verbose("A chunk of {Window} demands have made.", chunk.Count);

                    chunk.Clear();
                }
                else
                {
                    if (_logger.IsEnabled(LogEventLevel.Verbose))
                    {
                        _logger.Verbose(
                            "The number of buffered demands: {DemandCount}.\n" +
                            "The number of demands in the backlog: {BacklogCount}.\n" +
                            "The number of incomplete downloads: {IncompleteDownloads}.",
                            chunk.Count,
                            _demands.Count,
                            _satisfiedBlocks.Count(kv => !kv.Value && !chunk.Contains(kv.Key))
                        );
                    }
                }
            }

            if (!cancellationToken.IsCancellationRequested && chunk.Count > 0)
            {
                _logger.Verbose("The last chunk of {Window} demands have made.", chunk.Count);
                yield return chunk;
            }

            _logger.Verbose("The stream of demand chunks finished.");

            cancellationToken.ThrowIfCancellationRequested();
        }

        [Pure]
        public bool Satisfies(HashDigest<SHA256> blockHash, bool ignoreTransientCompletions = false)
        {
            return (!ignoreTransientCompletions && _satisfiedBlocks.ContainsKey(blockHash)) ||
                   (!(_completionPredicate is null) && _completionPredicate(blockHash));
        }

        public bool Satisfy(Block<TAction> block)
        {
            if (block is null)
            {
                throw new ArgumentNullException(nameof(block));
            }

            if (block.PreviousHash is HashDigest<SHA256> prevHash)
            {
                _logger.Verbose(
                    "The block #{BlockIndex} {BlockHash}'s previous block #{PreviousIndex} " +
                    "{PreviousHash} is needed; add it to the queue...",
                    block.Index,
                    block.Hash,
                    block.Index - 1,
                    prevHash
                );
                Demand(prevHash);
            }

            if (_satisfiedBlocks.TryUpdate(block.Hash, true, false))
            {
                _logger.Verbose(
                    "Completed the block #{BlockIndex} {BlockHash}. " +
                    "(Remained incomplete demands: {IncompleteDemands})",
                    block.Index,
                    block.Hash,
                    _demands.Count + _satisfiedBlocks.Count(kv => !kv.Value)
                );
                return true;
            }

            if (_satisfiedBlocks.ContainsKey(block.Hash))
            {
                _logger.Verbose(
                    "The block #{BlockIndex} {BlockHash} is already complete. " +
                    "(Remained incomplete demands: {IncompleteDemands})",
                    block.Index,
                    block.Hash,
                    _demands.Count + _satisfiedBlocks.Count(kv => !kv.Value)
                );
                return false;
            }

            _logger.Verbose(
                "The block #{BlockIndex} {BlockHash} has never demanded. " +
                "(Remained incomplete demands: {IncompleteDemands})",
                block.Index,
                block.Hash,
                _demands.Count + _satisfiedBlocks.Count(kv => !kv.Value)
            );
            return false;
        }

        /// <summary>
        /// Downloads blocks from <paramref name="peers"/> in parallel,
        /// using the given <paramref name="blockFetcher"/> function.
        /// </summary>
        /// <param name="peers">A list of peers to download blocks.</param>
        /// <param name="blockFetcher">A function to take demands and a peer, and then
        /// download corresponding blocks.</param>
        /// <param name="singleSessionTimeout">A maximum time to wait each single call of
        /// <paramref name="blockFetcher"/>.  If a call is timed out unsatisfied demands
        /// are automatically retried to fetch from other peers.</param>
        /// <param name="cancellationToken">A cancellation token to observe while waiting
        /// for the task to complete.</param>
        /// <returns>An async enumerable that yields pairs of a fetched block and its source
        /// peer.  It terminates when all demands are satisfied.</returns>
        public async IAsyncEnumerable<Tuple<Block<TAction>, TPeer>> Complete(
            IReadOnlyList<TPeer> peers,
            BlockFetcher blockFetcher,
            TimeSpan singleSessionTimeout,
            [EnumeratorCancellation] CancellationToken cancellationToken = default
        )
        {
            if (!peers.Any())
            {
                throw new ArgumentException("The list of peers must not be empty.", nameof(peers));
            }

            var pool = new PeerPool(peers);
            var queue = new AsyncProducerConsumerQueue<Tuple<Block<TAction>, TPeer>>();

            Task producer = Task.Run(async () =>
            {
                try
                {
                    await foreach (var hashes in EnumerateChunks(cancellationToken))
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        IList<HashDigest<SHA256>> hashDigests =
                            hashes is IList<HashDigest<SHA256>> l ? l : hashes.ToList();

                        cancellationToken.ThrowIfCancellationRequested();
                        await pool.SpawnAsync(
                            CreateEnqueuing(
                                hashDigests,
                                blockFetcher,
                                singleSessionTimeout,
                                cancellationToken,
                                queue
                            ),
                            cancellationToken: cancellationToken
                        );
                    }

                    await pool.WaitAll(cancellationToken);
                }
                finally
                {
                    queue.CompleteAdding();
                }
            });

            while (await queue.OutputAvailableAsync(cancellationToken))
            {
                Tuple<Block<TAction>, TPeer> pair;
                try
                {
                    pair = await queue.DequeueAsync(cancellationToken);
                }
                catch (InvalidOperationException)
                {
                    break;
                }

                yield return pair;
                _logger.Verbose(
                    "Completed a block {BlockIndex} {BlockHash} from {Peer}.",
                    pair.Item1.Index,
                    pair.Item1.Hash,
                    pair.Item2
                );
            }

            await producer;
        }

        /// <summary>
        /// Downloads blocks from <paramref name="peers"/> in parallel,
        /// using the given <paramref name="blockFetcher"/> function.
        /// </summary>
        /// <param name="peers">A list of peers to download blocks.</param>
        /// <param name="blockFetcher">A function to take demands and a peer, and then
        /// download corresponding blocks.</param>
        /// <param name="millisecondsSingleSessionTimeout">A maximum time in milliseconds to wait
        /// each single call of <paramref name="blockFetcher"/>.  If a call is timed out unsatisfied
        /// demands are automatically retried to fetch from other peers.  10 seconds by default.
        /// </param>
        /// <param name="cancellationToken">A cancellation token to observe while waiting
        /// for the task to complete.</param>
        /// <returns>An async enumerable that yields pairs of a fetched block and its source
        /// peer.  It terminates when all demands are satisfied.</returns>
        public IAsyncEnumerable<Tuple<Block<TAction>, TPeer>> Complete(
            IReadOnlyList<TPeer> peers,
            BlockFetcher blockFetcher,
            int millisecondsSingleSessionTimeout = 10000,
            CancellationToken cancellationToken = default
        ) =>
            Complete(
                peers,
                blockFetcher,
                TimeSpan.FromMilliseconds(millisecondsSingleSessionTimeout),
                cancellationToken
            );

        private bool Demand(HashDigest<SHA256> blockHash, bool retry)
        {
            if (Satisfies(blockHash, ignoreTransientCompletions: retry))
            {
                return false;
            }

            if (_satisfiedBlocks.TryAdd(blockHash, false) || retry)
            {
                _demands.Enqueue(blockHash);
                _started = true;
                _demandEnqueued.Release();
                _logger.Verbose("A demand was enqueued: {BlockHash}", blockHash);
                return true;
            }

            return false;
        }

        private int Demand(IEnumerable<HashDigest<SHA256>> blockHashes, bool retry)
        {
            int sum = 0;
            foreach (HashDigest<SHA256> hash in blockHashes)
            {
                if (Demand(hash, retry))
                {
                    sum++;
                }
            }

            return sum;
        }

        private bool QueuedDemandCompleted() =>
                        _started && _demands.IsEmpty && _satisfiedBlocks.All(kv => kv.Value);

        private Func<TPeer, CancellationToken, Task> CreateEnqueuing(
            IList<HashDigest<SHA256>> hashDigests,
            BlockFetcher blockFetcher,
            TimeSpan singleSessionTimeout,
            CancellationToken cancellationToken,
            AsyncProducerConsumerQueue<Tuple<Block<TAction>, TPeer>> queue
        ) =>
            async (peer, ct) =>
            {
                ct.ThrowIfCancellationRequested();
                var demands = new HashSet<HashDigest<SHA256>>(hashDigests);
                try
                {
                    _logger.Debug(
                        "Request blocks {BlockHashes} to {Peer}...",
                        hashDigests,
                        peer
                    );
                    var timeout = new CancellationTokenSource(singleSessionTimeout);
                    CancellationToken timeoutToken = timeout.Token;
                    timeoutToken.Register(() =>
                        _logger.Debug("Timed out to wait a response from {Peer}.", peer)
                    );
                    ct.Register(() => timeout.Cancel());

                    try
                    {
                        ConfiguredCancelableAsyncEnumerable<Block<TAction>> blocks =
                            blockFetcher(peer, hashDigests, timeoutToken)
                                .WithCancellation(timeoutToken);
                        await foreach (Block<TAction> block in blocks)
                        {
                            _logger.Debug(
                                "Downloaded a block #{BlockIndex} {BlockHash} " +
                                "from {Peer}.",
                                block.Index,
                                block.Hash,
                                peer
                            );

                            if (Satisfy(block))
                            {
                                await queue.EnqueueAsync(
                                    Tuple.Create(block, peer),
                                    cancellationToken
                                );
                            }

                            demands.Remove(block.Hash);
                        }
                    }
                    catch (OperationCanceledException e)
                    {
                        if (ct.IsCancellationRequested)
                        {
                            _logger.Error(
                                e,
                                "A blockFetcher job (peer: {Peer}) is cancelled.",
                                peer
                            );
                            throw;
                        }

                        _logger.Debug(
                            e,
                            "Timed out to wait a response from {Peer}.",
                            peer
                        );
                    }
                    catch (Exception e)
                    {
                        _logger.Error(e, "A blockFetcher job (peer: {Peer}) is failed.", peer);
                    }
                }
                finally
                {
                    if (demands.Any())
                    {
                        _logger.Verbose(
                            "Fetched blocks from {Peer}, but there are still " +
                            "unsatisfied demands ({UnsatisfiedDemandsNumber}) so " +
                            "enqueue them again: {UnsatisfiedDemands}.",
                            peer,
                            demands.Count,
                            demands
                        );
                        Demand(demands, retry: true);
                    }
                    else
                    {
                        _logger.Verbose("Fetched blocks from {Peer}.", peer);
                    }
                }
            };

        internal class PeerPool
        {
            private readonly ConcurrentQueue<TPeer> _completions;
            private readonly ConcurrentDictionary<TPeer, Task> _tasks;
            private long _taken;
            private long _finished;

            public PeerPool(IEnumerable<TPeer> peers)
            {
                _completions = new ConcurrentQueue<TPeer>(peers);
                _tasks = new ConcurrentDictionary<TPeer, Task>();
                _taken = 0;
                _finished = 0;
            }

            public async Task SpawnAsync(
                Func<TPeer, CancellationToken, Task> action,
                CancellationToken cancellationToken = default
            )
            {
                Interlocked.Increment(ref _taken);
                TPeer peer;
                while (!_completions.TryDequeue(out peer))
                {
                    Task[] tasks = _tasks.Values
                        .Concat(new[] { Task.Delay(500, cancellationToken) })
                        .ToArray();
                    await Task.WhenAny(tasks);
                    cancellationToken.ThrowIfCancellationRequested();
                }

                if (_tasks.TryRemove(peer, out Task completeTask))
                {
                    await completeTask;
                }

                _tasks[peer] = Task.Run(
                    async () =>
                    {
                        cancellationToken.ThrowIfCancellationRequested();
                        try
                        {
                            await action(peer, cancellationToken);
                        }
                        finally
                        {
                            _completions.Enqueue(peer);
                            Interlocked.Increment(ref _finished);
                        }
                    },
                    cancellationToken: cancellationToken
                );
            }

            public async Task WaitAll(CancellationToken cancellationToken = default)
            {
                while (Interlocked.Read(ref _taken) > Interlocked.Read(ref _finished))
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    Task[] tasks = _tasks.Values.ToArray();
                    if (tasks.Any())
                    {
                        var tcs = new TaskCompletionSource<object>();
                        cancellationToken.Register(
                            () => tcs.TrySetCanceled(),
                            useSynchronizationContext: false
                        );
                        await Task.WhenAny(Task.WhenAll(tasks), tcs.Task);
                    }
                    else
                    {
                        await Task.Delay(100, cancellationToken);
                    }
                }
            }
        }
    }
}
