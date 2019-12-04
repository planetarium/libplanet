using System;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;

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

        public delegate System.Collections.Async.IAsyncEnumerable<Block<TAction>> BlockFetcher(
            TPeer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes
        );

        public void Demand(HashDigest<SHA256> blockHash) =>
            Demand(blockHash, retry: false);

        public void Demand(IEnumerable<HashDigest<SHA256>> blockHashes) =>
            Demand(blockHashes, retry: false);

        public System.Collections.Async.IAsyncEnumerable<IEnumerable<HashDigest<SHA256>>>
        EnumerateChunks() =>
            new AsyncEnumerable<IEnumerable<HashDigest<SHA256>>>(async yield =>
            {
                var chunk = new List<HashDigest<SHA256>>(capacity: _window);
                bool QueuedDemandCompleted() =>
                    _started && _demands.IsEmpty && _satisfiedBlocks.All(kv => kv.Value);
                while (!(yield.CancellationToken.IsCancellationRequested ||
                         QueuedDemandCompleted()))
                {
                    yield.CancellationToken.ThrowIfCancellationRequested();
                    _logger.Verbose(
                        "Waiting a demand enqueued...\n" +
                        "Demands in the buffer: {DemandCount}.\n" +
                        "Incomplete downloads: {IncompleteDownloads}.",
                        chunk.Count,
                        _satisfiedBlocks.Count(kv => !kv.Value && !chunk.Contains(kv.Key))
                    );

                    await _demandEnqueued.WaitAsync(100, yield.CancellationToken);
                    if (_demands.TryDequeue(out HashDigest<SHA256> demand))
                    {
                        chunk.Add(demand);
                    }

                    if (chunk.Count >= _window || (
                            _started && _demands.IsEmpty && _satisfiedBlocks.All(kv =>
                                kv.Value || chunk.Contains(kv.Key))))
                    {
                        await yield.ReturnAsync(chunk.ToImmutableArray());
                        _logger.Verbose("A chunk of {Window} demands made.", _window);
                        chunk.Clear();
                    }
                    else
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

                if (!yield.CancellationToken.IsCancellationRequested && chunk.Count > 0)
                {
                    _logger.Verbose("A chunk of {Window} demands made.", chunk.Count);
                    await yield.ReturnAsync(chunk);
                }

                _logger.Verbose("The stream of demand chunks finished.");

                yield.CancellationToken.ThrowIfCancellationRequested();
            });

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

            _logger.Verbose(
                "The block #{BlockIndex} {BlockHash} is already complete. " +
                "(Remained incomplete demands: {IncompleteDemands})",
                block.Index,
                block.Hash,
                _demands.Count + _satisfiedBlocks.Count(kv => !kv.Value)
            );
            return false;
        }

        public System.Collections.Async.IAsyncEnumerable<Block<TAction>> Complete(
            IReadOnlyList<TPeer> peers,
            BlockFetcher blockFetcher
        )
        {
            if (!peers.Any())
            {
                throw new ArgumentException("The list of peers must not be empty.", nameof(peers));
            }

            PeerPool pool = new PeerPool(peers);
            return new AsyncEnumerable<Block<TAction>>(async yield =>
            {
                await EnumerateChunks().ForEachAsync(
                    async hashes =>
                    {
                        yield.CancellationToken.ThrowIfCancellationRequested();
                        IList<HashDigest<SHA256>> hashDigests =
                            hashes is IList<HashDigest<SHA256>> l ? l : hashes.ToList();
                        await pool.SpawnAsync(
                            async (peer) =>
                            {
                                yield.CancellationToken.ThrowIfCancellationRequested();
                                var demands = new HashSet<HashDigest<SHA256>>(hashDigests);
                                try
                                {
                                    _logger.Debug(
                                        "Request blocks {BlockHashes} to {Peer}...",
                                        hashDigests,
                                        peer
                                    );
                                    await blockFetcher(peer, hashDigests).ForEachAsync(
                                        async block =>
                                        {
                                            yield.CancellationToken.ThrowIfCancellationRequested();
                                            _logger.Debug(
                                                "Downloaded a block #{BlockIndex} {BlockHash} " +
                                                "from {Peer}.",
                                                block.Index,
                                                block.Hash,
                                                peer
                                            );
                                            await yield.ReturnAsync(block);
                                            Satisfy(block);
                                            demands.Remove(block.Hash);
                                        },
                                        yield.CancellationToken
                                    );
                                }
                                finally
                                {
                                    _logger.Verbose(
                                        "Enqueue unsatisfied demands again: {UnsatisfiedDemands}.",
                                        demands
                                    );
                                    Demand(demands, retry: true);
                                }
                            },
                            cancellationToken: yield.CancellationToken
                        );
                    },
                    yield.CancellationToken
                );
            });
        }

        private void Demand(HashDigest<SHA256> blockHash, bool retry)
        {
            if (Satisfies(blockHash, ignoreTransientCompletions: retry))
            {
                return;
            }

            if (_satisfiedBlocks.TryAdd(blockHash, false) || retry)
            {
                _demands.Enqueue(blockHash);
                _started = true;
                _demandEnqueued.Release();
                _logger.Verbose("A demand was enqueued: {BlockHash}", blockHash);
            }
        }

        private void Demand(IEnumerable<HashDigest<SHA256>> blockHashes, bool retry)
        {
            foreach (HashDigest<SHA256> hash in blockHashes)
            {
                Demand(hash, retry);
            }
        }

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
                Func<TPeer, Task> action,
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
                            await action(peer);
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
