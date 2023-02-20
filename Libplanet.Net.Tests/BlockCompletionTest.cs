#nullable disable
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dasync.Collections;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Nito.AsyncEx;
using Serilog;
using xRetry;
using Xunit;
using Xunit.Abstractions;
#if NETFRAMEWORK && (NET47 || NET471)
using static Libplanet.Tests.HashSetExtensions;
#endif
using static Libplanet.Tests.TestUtils;
using AsyncEnumerable = System.Linq.AsyncEnumerable;

namespace Libplanet.Net.Tests
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

        [Fact(Timeout = Timeout * 3)]
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
                int sleep = random.Next(5, 50);
                return pool.SpawnAsync(async (peerId, cancellationToken) =>
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
                        _output.WriteLine($"Task {i} finished.");
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

        [RetryFact(Timeout = Timeout)]
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
            var logs = new ConcurrentBag<(int, ImmutableArray<BlockHash>)>();
            var ev = new AsyncAutoResetEvent(false);
            var bg = Task.Run(async () =>
            {
                await Task.Delay(100);
                int i = 0;
                await AsyncEnumerable.ForEachAsync(bc.EnumerateChunks(), hashes =>
                {
                    ImmutableArray<BlockHash> hashesArray = hashes.ToImmutableArray();
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

            // Demand: 2, 3, 4, 5, 6
            bc.Demand(fixture.Skip(initialHeight).Take(5).Select(b => b.Hash));

            // Chunk: 2, 3, 4, 5, 6
            _logger.Verbose("Waiting demand #2-6...");

            // TODO change waiting condition
            await Task.Delay(1000);
            _logger.Verbose("Demand #2-6 processed");
            var actual = new List<BlockHash>();
            while (logs.TryTake(out var log))
            {
                actual.AddRange(log.Item2);
            }

            Assert.Equal(fixture.Skip(initialHeight).Take(window).Select(b => b.Hash), actual);

            // Complete: 2, 3, 4, 5 (and no 6)
            for (int i = initialHeight; i < initialHeight + window - 1; i++)
            {
                bc.Satisfy(fixture[i]);
            }

            // Demand: 7, 8, 9, 10, 11, 12, 13 (and 14 <- 7 will be added soon)
            bc.Demand(fixture.Skip(initialHeight + window).Select(b => b.Hash));

            // Chunk: 7, 8, 9, 10, 11
            _logger.Verbose("Waiting demand #7-11...");
            // TODO change waiting condition
            await Task.Delay(1000);
            _logger.Verbose("Demand #7-11 processed");

            actual = new List<BlockHash>();
            while (logs.TryTake(out var log))
            {
                actual.AddRange(log.Item2);
            }

            Assert.Equal(
                fixture.Skip(initialHeight + window).Take(window).Select(b => b.Hash),
                actual
            );

            // Complete: 6, 7, 8, 9, 10, 11
            for (int i = initialHeight + window - 1; i < initialHeight + window * 2; i++)
            {
                bc.Satisfy(fixture[i]);
            }

            // Chunk: 12, 13, 14
            _logger.Verbose("Waiting demand #12-14...");
            // TODO change waiting condition
            await Task.Delay(1000);
            _logger.Verbose("Demand #12-14 processed");
            actual = new List<BlockHash>();
            while (logs.TryTake(out var log))
            {
                actual.AddRange(log.Item2);
            }

            Assert.Equal(
                fixture.Skip(initialHeight + window * 2).Select(b => b.Hash).ToImmutableHashSet(),
                actual.ToImmutableHashSet()
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
            ImmutableDictionary<char, ImmutableDictionary<BlockHash, Block<DumbAction>>>
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
            ImmutableArray<BlockHash> initialDemands = fixture
                .Skip(initialHeight + 10)
                .Select(b => b.Hash)
                .ToImmutableArray();
            bc.Demand(initialDemands);
            _logger.Verbose("Initial demands: {0}", initialDemands);
            IAsyncEnumerable<Tuple<Block<DumbAction>, char>> rv = bc.Complete(
                new[] { 'A', 'B', 'C', 'D' },
                (peer, hashes, token) => new AsyncEnumerable<Block<DumbAction>>(async yield =>
                {
                    var blocksPeerHas = peerBlocks[peer];
                    var sent = new HashSet<BlockHash>();
                    foreach (BlockHash hash in hashes)
                    {
                        if (blocksPeerHas.ContainsKey(hash))
                        {
                            Block<DumbAction> block = blocksPeerHas[hash];
                            await yield.ReturnAsync(block);
                            sent.Add(block.Hash);
                        }
                    }

                    _logger.Verbose("Peer {Peer} sent blocks: {SentBlockHashes}", peer, sent);
                })
            );

            var downloadedBlocks = new HashSet<Block<DumbAction>>();
            var sourcePeers = new HashSet<char>();
            await AsyncEnumerable.ForEachAsync(rv, pair =>
            {
                downloadedBlocks.Add(pair.Item1);
                sourcePeers.Add(pair.Item2);
            });

            Assert.Equal(fixture.Skip(2).ToHashSet(), downloadedBlocks);
            Assert.Subset(peers.ToHashSet(), sourcePeers);
        }

        [Fact(Timeout = Timeout)]
        public async Task CompleteWithBlockFetcherGivingWrongBlocks()
        {
            Block<DumbAction> genesis = MineGenesisBlock<DumbAction>(GenesisMiner),
                demand = MineNextBlock(genesis, GenesisMiner),
                wrong = MineNextBlock(genesis, GenesisMiner);
            _logger.Debug("Genesis: #{Index} {Hash}", genesis.Index, genesis.Hash);
            _logger.Debug("Demand:  #{Index} {Hash}", demand.Index, demand.Hash);
            _logger.Debug("Wrong:   #{Index} {Hash}", wrong.Index, wrong.Hash);
            var bc = new BlockCompletion<char, DumbAction>(
                ((IEquatable<BlockHash>)genesis.Hash).Equals,
                5
            );
            bc.Demand(demand.Hash);

            long counter = 0;
            BlockCompletion<char, DumbAction>.BlockFetcher wrongBlockFetcher =
                (peer, blockHashes, token) => new AsyncEnumerable<Block<DumbAction>>(async yield =>
                {
                    // Provides a wrong block (i.e., not corresponding to the demand) at first call,
                    // and then provide a proper block later calls.
                    await yield.ReturnAsync(Interlocked.Read(ref counter) < 1 ? wrong : demand);
                    Interlocked.Increment(ref counter);
                });

            Tuple<Block<DumbAction>, char>[] result =
                await AsyncEnumerable.ToArrayAsync(bc.Complete(new[] { 'A' }, wrongBlockFetcher));
            Assert.Equal(new[] { Tuple.Create(demand, 'A') }, result);
        }

        [Fact(Timeout = Timeout)]
        public async Task CompleteWithNonRespondingPeers()
        {
            ImmutableArray<Block<DumbAction>> fixture =
                GenerateBlocks<DumbAction>(15).ToImmutableArray();
            var bc = new BlockCompletion<char, DumbAction>(_ => false, 5);
            bc.Demand(fixture.Select(b => b.Hash));

            BlockCompletion<char, DumbAction>.BlockFetcher blockFetcher =
                (peer, blockHashes, token) => new AsyncEnumerable<Block<DumbAction>>(async yield =>
                {
                    // Peer A does not respond and Peer B does respond.
                    if (peer == 'A')
                    {
                        const int transportTimeout = 3_000;
                        await Task.Delay(transportTimeout, yield.CancellationToken);

                        // Technically this should throw CommunicationException, but that would
                        // require much more scaffolding.
                        throw new Exception("Peer failed to respond");
                    }

                    foreach (Block<DumbAction> b in fixture)
                    {
                        if (blockHashes.Contains(b.Hash))
                        {
                            await yield.ReturnAsync(b);
                        }
                    }
                });

            Tuple<Block<DumbAction>, char>[] result =
                await AsyncEnumerable.ToArrayAsync(
                    bc.Complete(new[] { 'A', 'B' }, blockFetcher));
            Assert.Equal(
                fixture.Select(b => Tuple.Create(b, 'B')).ToHashSet(),
                result.ToHashSet()
            );
        }

        [Fact(Timeout = Timeout)]
        public async Task CompleteWithCrashingPeers()
        {
            ImmutableArray<Block<DumbAction>> fixture =
                GenerateBlocks<DumbAction>(15).ToImmutableArray();
            var bc = new BlockCompletion<char, DumbAction>(_ => false, 5);
            bc.Demand(fixture.Select(b => b.Hash));

            BlockCompletion<char, DumbAction>.BlockFetcher blockFetcher =
                (peer, blockHashes, token) => new AsyncEnumerable<Block<DumbAction>>(async yield =>
                {
                    // Peer A does crash and Peer B does respond.
                    if (peer == 'A')
                    {
                        throw new Exception("Peer A can't respond.");
                    }

                    foreach (Block<DumbAction> b in fixture)
                    {
                        if (blockHashes.Contains(b.Hash))
                        {
                            await yield.ReturnAsync(b);
                        }
                    }
                });

            Tuple<Block<DumbAction>, char>[] result =
                await AsyncEnumerable.ToArrayAsync(bc.Complete(new[] { 'A', 'B' }, blockFetcher));
            Assert.Equal(
                fixture.Select(b => Tuple.Create(b, 'B')).ToHashSet(),
                result.ToHashSet()
            );
        }

        private IEnumerable<Block<T>> GenerateBlocks<T>(int count)
            where T : IAction, new()
        {
            if (count >= 1)
            {
                Block<T> block =
                    MineGenesisBlock<T>(GenesisMiner);
                yield return block;

                for (int i = 1; i < count; i++)
                {
                    block =
                        MineNextBlock(block, GenesisMiner);
                    yield return block;
                }
            }
        }
    }
}
