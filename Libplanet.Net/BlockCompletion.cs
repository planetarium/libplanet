#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.CompilerServices;
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
        private readonly Func<BlockHash, bool> _completionPredicate;
        private readonly int _window;
        private readonly ConcurrentDictionary<BlockHash, bool> _satisfiedBlocks;
        private readonly ConcurrentQueue<BlockHash> _demands;
        private readonly SemaphoreSlim _demandEnqueued;
        private bool _started;

        public BlockCompletion(Func<BlockHash, bool> completionPredicate = null, int window = 100)
        {
            _logger = Log.ForContext<BlockCompletion<TPeer, TAction>>();
            _completionPredicate = completionPredicate;
            _window = window;
            _satisfiedBlocks = new ConcurrentDictionary<BlockHash, bool>();
            _started = false;
            _demands = new ConcurrentQueue<BlockHash>();
            _demandEnqueued = new SemaphoreSlim(0);
        }

        public delegate IAsyncEnumerable<Block<TAction>> BlockFetcher(
            TPeer peer,
            IEnumerable<BlockHash> blockHashes,
            CancellationToken cancellationToken
        );

        public bool Demand(BlockHash blockHash) =>
            Demand(blockHash, retry: false);

        public int Demand(IEnumerable<BlockHash> blockHashes) =>
            Demand(blockHashes, retry: false);

        public async IAsyncEnumerable<IEnumerable<BlockHash>> EnumerateChunks(
            [EnumeratorCancellation] CancellationToken cancellationToken = default
        )
        {
            var chunk = new List<BlockHash>(capacity: _window);
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
                if (_demands.TryDequeue(out BlockHash demand))
                {
                    chunk.Add(demand);
                }

                if (chunk.Count >= _window || (
                        _started && _demands.IsEmpty && _satisfiedBlocks.All(kv =>
                            kv.Value || chunk.Contains(kv.Key))))
                {
                    yield return chunk.ToImmutableArray();
                    _logger.Verbose("A chunk of {Window} demands have made", chunk.Count);

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

            _logger.Verbose("The stream of demand chunks finished");

            cancellationToken.ThrowIfCancellationRequested();
        }

        [Pure]
        public bool Satisfies(BlockHash blockHash, bool ignoreTransientCompletions = false)
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

            if (block.PreviousHash is { } prevHash)
            {
                _logger.Verbose(
                    "Block #{BlockIndex} {BlockHash}'s previous block " +
                    "#{PreviousIndex} {PreviousHash} is needed; adding it to the queue...",
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
                    "Completed block #{BlockIndex} {BlockHash}; " +
                    "remaining incomplete demands: {IncompleteDemands}",
                    block.Index,
                    block.Hash,
                    _demands.Count + _satisfiedBlocks.Count(kv => !kv.Value)
                );
                return true;
            }

            if (_satisfiedBlocks.ContainsKey(block.Hash))
            {
                _logger.Verbose(
                    "Block #{BlockIndex} {BlockHash} is already complete; " +
                    "remaining incomplete demands: {IncompleteDemands}",
                    block.Index,
                    block.Hash,
                    _demands.Count + _satisfiedBlocks.Count(kv => !kv.Value)
                );
                return false;
            }

            _logger.Verbose(
                "Block #{BlockIndex} {BlockHash} was never demanded; " +
                "remaining incomplete demands: {IncompleteDemands}",
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
        /// <param name="cancellationToken">A cancellation token to observe while waiting
        /// for the task to complete.</param>
        /// <returns>An async enumerable that yields pairs of a fetched block and its source
        /// peer.  It terminates when all demands are satisfied.</returns>
        public async IAsyncEnumerable<Tuple<Block<TAction>, TPeer>> Complete(
            IReadOnlyList<TPeer> peers,
            BlockFetcher blockFetcher,
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
                        IList<BlockHash> blockHashes =
                            hashes is IList<BlockHash> l ? l : hashes.ToList();

                        cancellationToken.ThrowIfCancellationRequested();
                        await pool.SpawnAsync(
                            CreateEnqueuing(
                                blockHashes,
                                blockFetcher,
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
                    "Completed block #{BlockIndex} {BlockHash} from {Peer}",
                    pair.Item1.Index,
                    pair.Item1.Hash,
                    pair.Item2
                );
            }

            await producer;
        }

        private bool Demand(BlockHash blockHash, bool retry)
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

        private int Demand(IEnumerable<BlockHash> blockHashes, bool retry)
        {
            int sum = 0;
            foreach (BlockHash hash in blockHashes)
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
            IList<BlockHash> blockHashes,
            BlockFetcher blockFetcher,
            CancellationToken cancellationToken,
            AsyncProducerConsumerQueue<Tuple<Block<TAction>, TPeer>> queue
        ) =>
            async (peer, ct) =>
            {
                ct.ThrowIfCancellationRequested();
                var demands = new HashSet<BlockHash>(blockHashes);
                try
                {
                    _logger.Debug(
                        "Requesting {BlockCount} blocks from {Peer}...",
                        blockHashes.Count,
                        peer
                    );

                    try
                    {
                        ConfiguredCancelableAsyncEnumerable<Block<TAction>> blocks =
                            blockFetcher(peer, blockHashes, cancellationToken)
                                .WithCancellation(cancellationToken);
                        await foreach (Block<TAction> block in blocks)
                        {
                            _logger.Debug(
                                "Downloaded block #{BlockIndex} {BlockHash} from {Peer}",
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
                                "A blockFetcher job (peer: {Peer}) is cancelled",
                                peer
                            );
                            throw;
                        }

                        _logger.Debug(
                            e,
                            "Timed out while waiting for a response from {Peer}",
                            peer
                        );
                    }
                    catch (Exception e)
                    {
                        _logger.Error(e, "A blockFetcher job (peer: {Peer}) has failed", peer);
                    }
                }
                finally
                {
                    if (demands.Any())
                    {
                        _logger.Verbose(
                            "Fetched blocks from {Peer}, but there are still " +
                            "unsatisfied demands ({UnsatisfiedDemandsNumber}) so " +
                            "enqueue them again: {UnsatisfiedDemands}",
                            peer,
                            demands.Count,
                            demands
                        );
                        Demand(demands, retry: true);
                    }
                    else
                    {
                        _logger.Verbose("Fetched blocks from {Peer}", peer);
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
                        using CancellationTokenRegistration ctr = cancellationToken.Register(
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
