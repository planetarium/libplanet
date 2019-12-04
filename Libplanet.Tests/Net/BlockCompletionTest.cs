using System;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Net;
using Libplanet.Tests.Common.Action;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public class BlockCompletionTest
    {
        private const int Timeout = 20000;
        private readonly ITestOutputHelper _output;
        private readonly ILogger _logger;

        public BlockCompletionTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} [thread/{ThreadId}] {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<BlockCompletionTest>();
            _logger = Log.ForContext<BlockCompletionTest>();
            _output = output;
        }

        [Fact(Timeout = Timeout)]
        public async Task PeerPool()
        {
            const int tasks = 50;
            ConcurrentDictionary<int, int> peers = new ConcurrentDictionary<int, int>(
                Enumerable.Range(0, 3).Select(peerId => new KeyValuePair<int, int>(peerId, 0))
            );
            var concurrentWorkersLogs = new ConcurrentBag<int>();
            long done = 0;
            var pool = new BlockCompletion<int, DumbAction>.PeerPool(peers.Keys);
            var random = new System.Random();
            Task[] spawns = Enumerable.Range(0, tasks).Select(i =>
            {
                int sleep = random.Next(50, 500);
                return pool.SpawnAsync(async peerId =>
                {
                    try
                    {
                        int counter;
                        do
                        {
                            counter = peers[peerId];
                        }
                        while (!peers.TryUpdate(peerId, counter + 1, counter));

                        concurrentWorkersLogs.Add(
                            peers.Where(kv => kv.Key != peerId).Sum(kv => kv.Value) +
                            counter + 1
                        );

                        await Task.Delay(sleep);

                        do
                        {
                            counter = peers[peerId];
                        }
                        while (!peers.TryUpdate(peerId, counter - 1, counter));
                    }
                    catch (Exception e)
                    {
                        _output.WriteLine(e.ToString());
                    }
                    finally
                    {
                        Interlocked.Increment(ref done);
                        _output.WriteLine(i.ToString());
                    }
                });
            }).ToArray();

            _output.WriteLine("Wait spawned tasks to be finished...");
            await Task.WhenAll(spawns);
            _output.WriteLine("All spawned tasks finished; wait PeerPool to be finished...");
            await pool.WaitAll();
            _output.WriteLine("PeerPool finished.");

            Assert.Equal(tasks, Interlocked.Read(ref done));
            Assert.Equal(tasks, concurrentWorkersLogs.Count);
            foreach (int log in concurrentWorkersLogs)
            {
                Assert.InRange(log, 0, 3);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void EnumerateChunks()
        {
            // 0, 1: Already existed blocks
            // 2, 3, 4,  5,  6: first chunk
            // 7, 8, 9, 10, 11: second chunk
            //   12,    13, 14: last chunk
            ImmutableArray<Block<DumbAction>> fixture =
                GenerateBlocks<DumbAction>(15).ToImmutableArray();
            const int initialHeight = 2;
            const int window = 5;
            var bc = new BlockCompletion<int, DumbAction>(
                fixture.Take(initialHeight).Select(b => b.Hash).ToImmutableHashSet().Contains,
                window
            );
            var logs = new ConcurrentBag<(int, ImmutableArray<HashDigest<SHA256>>)>();
            var ev = new AutoResetEvent(false);
            var bg = Task.Run(async () =>
            {
                int i = 0;
                await bc.EnumerateChunks().ForEachAsync(hashes =>
                {
                    ImmutableArray<HashDigest<SHA256>> hashesArray = hashes.ToImmutableArray();
                    logs.Add((i, hashesArray));
                    i++;

                    // To test dynamic demands
                    if (hashesArray.Contains(fixture[7].Hash))
                    {
                        bc.Demand(fixture[14].Hash);
                        bc.Demand(fixture[0].Hash);  // This should be ignored as it's existed.
                        bc.Demand(fixture[3].Hash);  // This should be ignored as it's satisfied.
                    }

                    ev.Set();
                    _logger.Verbose("Got a chunk of hashes: {0}", string.Join(", ", hashesArray));
                });
            });

            // Demand: 2, 3, 4, 5
            for (int i = initialHeight; i < initialHeight + window - 1; ++i)
            {
                var message = "There should be no logs recorded, but:\n" + string.Join(
                    "\n",
                    logs.Select(t => $"- {t.Item1:02d}, {t.Item2}")
                );
                Assert.True(logs.IsEmpty, message);
                bc.Demand(fixture[i].Hash);
            }

            Assert.True(logs.IsEmpty);

            // Demand: 6
            bc.Demand(fixture[initialHeight + window - 1].Hash);

            // Chunk: 2, 3, 4, 5, 6
            _logger.Verbose("Waiting demand #2-6...");
            ev.WaitOne();
            _logger.Verbose("Demand #2-6 processed.");
            Assert.Single(logs);
            Assert.True(logs.TryTake(out var log));
            Assert.Equal(0, log.Item1);
            Assert.Equal(fixture.Skip(initialHeight).Take(window).Select(b => b.Hash), log.Item2);

            // Complete: 2, 3, 4, 5 (and no 6)
            for (int i = initialHeight; i < initialHeight + window - 1; i++)
            {
                bc.Satisfy(fixture[i]);
            }

            // Demand: 7, 8, 9, 10, 11, 12, 13 (and 14 <- 7 will be added soon)
            bc.Demand(fixture.Skip(initialHeight + window).Select(b => b.Hash));

            // Chunk: 7, 8, 9, 10, 11
            _logger.Verbose("Waiting demand #7-11...");
            ev.WaitOne();
            _logger.Verbose("Demand #7-11 processed.");
            Assert.Single(logs);
            Assert.True(logs.TryTake(out log));
            Assert.Equal(1, log.Item1);
            Assert.Equal(
                fixture.Skip(initialHeight + window).Take(window).Select(b => b.Hash),
                log.Item2
            );

            // Complete: 6, 7, 8, 9, 10, 11
            for (int i = initialHeight + window - 1; i < initialHeight + window * 2; i++)
            {
                bc.Satisfy(fixture[i]);
            }

            // Chunk: 12, 13, 14
            _logger.Verbose("Waiting demand #12-14...");
            ev.WaitOne();
            _logger.Verbose("Demand #12-14 processed.");
            Assert.Single(logs);
            Assert.True(logs.TryTake(out log));
            Assert.Equal(2, log.Item1);
            Assert.Equal(
                fixture.Skip(initialHeight + window * 2).Select(b => b.Hash).ToImmutableHashSet(),
                log.Item2.ToImmutableHashSet()
            );

            // Complete: 12, 13, 14
            for (int i = initialHeight + window * 2; i < fixture.Length; i++)
            {
                bc.Satisfy(fixture[i]);
            }

            await bg;
        }

        [Fact(Timeout = Timeout)]
        public async Task Complete()
        {
            // 0, 1: Already existed blocks
            // 2, 3, 4,  5,  6: first chunk
            // 7, 8, 9, 10, 11: second chunk
            //   12,    13, 14: last chunk
            ImmutableArray<Block<DumbAction>> fixture =
                GenerateBlocks<DumbAction>(15).ToImmutableArray();

            // Blocks each block has:
            //   A: 0, 4, 8,  12
            //   B: 1, 5, 9,  13
            //   C: 2, 6, 10, 14
            //   D: 3, 7, 11
            char[] peers = { 'A', 'B', 'C', 'D' };
            ImmutableDictionary<char, ImmutableDictionary<HashDigest<SHA256>, Block<DumbAction>>>
                peerBlocks = peers.ToImmutableDictionary(
                    p => p,
                    p => fixture.Skip(p - 'A').Where((_, i) => i % 4 < 1).ToImmutableDictionary(
                        b => b.Hash,
                        b => b
                    )
                );

            const int initialHeight = 2;
            const int window = 5;
            var bc = new BlockCompletion<char, DumbAction>(
                fixture.Take(initialHeight).Select(b => b.Hash).ToImmutableHashSet().Contains,
                window
            );
            ImmutableArray<HashDigest<SHA256>> initialDemands = fixture
                .Skip(initialHeight + 10)
                .Select(b => b.Hash)
                .ToImmutableArray();
            bc.Demand(initialDemands);
            _logger.Verbose("Initial demands: {0}", initialDemands);
            System.Collections.Async.IAsyncEnumerable<Block<DumbAction>> result = bc.Complete(
                new[] { 'A', 'B', 'C', 'D' },
                (peer, hashes) => new AsyncEnumerable<Block<DumbAction>>(async yield =>
                {
                    var blocksPeerHas = peerBlocks[peer];
                    var sent = new HashSet<HashDigest<SHA256>>();
                    foreach (HashDigest<SHA256> hash in hashes)
                    {
                        if (blocksPeerHas.ContainsKey(hash))
                        {
                            Block<DumbAction> block = blocksPeerHas[hash];
                            await yield.ReturnAsync(block);
                            sent.Add(block.Hash);
                        }
                    }

                    _logger.Verbose("Peer {Peer} sent blocks: {SentBlockHashes}.", peer, sent);
                })
            );

            var downloadedBlocks = new HashSet<Block<DumbAction>>();
            await result.ForEachAsync(block =>
            {
                downloadedBlocks.Add(block);
            });

            Assert.Equal(fixture.Skip(2).ToHashSet(), downloadedBlocks);
        }

        private IEnumerable<Block<T>> GenerateBlocks<T>(int count)
            where T : IAction, new()
        {
            if (count >= 1)
            {
                Block<T> block = TestUtils.MineGenesis<T>();
                yield return block;

                for (int i = 1; i < count; i++)
                {
                    block = TestUtils.MineNext(block);
                    yield return block;
                }
            }
        }
    }
}
