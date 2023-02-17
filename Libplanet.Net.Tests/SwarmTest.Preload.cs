#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using Serilog.Events;
using xRetry;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownload()
        {
            var minerKey = new PrivateKey();

            Swarm<DumbAction> minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(minerKey);
            }

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                await receiverSwarm.PreloadAsync();

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownloadStates()
        {
            var minerKey = new PrivateKey();

            Swarm<DumbAction> minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            var key = new PrivateKey();
            var address1 = key.ToAddress();
            var address2 = new PrivateKey().ToAddress();

            var action = new DumbAction(
                address1,
                "foo",
                transfer: Tuple.Create<Address, Address, BigInteger>(address1, address2, 10));

            minerChain.MakeTransaction(key, new[] { action });
            await minerChain.MineBlock(minerKey);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "bar") });
            await minerChain.MineBlock(minerKey);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "baz") });
            await minerChain.MineBlock(minerKey);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                await receiverSwarm.PreloadAsync();
                var state = receiverChain.GetState(address1);

                Assert.Equal((Text)"foo,bar,baz", state);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
            }
            finally
            {
                await StopAsync(minerSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Preload()
        {
            Swarm<DumbAction> minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            var blocks = new List<Block<DumbAction>>();
            foreach (int i in Enumerable.Range(0, 12))
            {
                Block<DumbAction> block = MineNext(
                    previousBlock: i == 0 ? minerChain.Genesis : blocks[i - 1],
                    miner: ChainPrivateKey.PublicKey,
                    difficulty: 1024
                ).Evaluate(ChainPrivateKey, minerChain);
                blocks.Add(block);
                if (i != 11)
                {
                    minerChain.Append(blocks[i]);
                }
            }

            var actualStates = new List<PreloadState>();
            var progress = new ActionProgress<PreloadState>(state =>
            {
                _logger.Information("Received a progress event: {@State}", state);
                lock (actualStates)
                {
                    actualStates.Add(state);

                    if (actualStates.Count == 10)
                    {
                        minerChain.Append(blocks[11]);
                    }
                }
            });

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                _logger.Verbose("Both chains before synchronization:");
                _logger.CompareBothChains(
                    LogEventLevel.Verbose,
                    "Miner chain",
                    minerChain,
                    "Receiver chain",
                    receiverChain
                );

                minerSwarm.FindNextHashesChunkSize = 3;
                await receiverSwarm.PreloadAsync(progress);

                // Await 1 second to make sure all progresses is reported.
                await Task.Delay(1000);

                _logger.Verbose(
                    $"Both chains after synchronization ({nameof(receiverSwarm.PreloadAsync)}):"
                );
                _logger.CompareBothChains(
                    LogEventLevel.Verbose,
                    "Miner chain",
                    minerChain,
                    "Receiver chain",
                    receiverChain
                );

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);

                var expectedStates = new List<PreloadState>();

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockHashDownloadState
                    {
                        EstimatedTotalBlockHashCount = 10,
                        ReceivedBlockHashCount = 1,
                        SourcePeer = minerSwarm.AsPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = i == 10 || i == 11 ? 12 : 11,
                        ReceivedBlockCount = i,
                        SourcePeer = minerSwarm.AsPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockVerificationState
                    {
                        VerifiedBlockHash = b.Hash,
                        TotalBlockCount = i == 10 || i == 11 ? 12 : 11,
                        VerifiedBlockCount = i,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new ActionExecutionState
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 12,
                        ExecutedBlockCount = i,
                    };
                    expectedStates.Add(state);
                }

                _logger.Debug("Expected preload states: {@expectedStates}", expectedStates);
                _logger.Debug("Actual preload states: {@actualStates}", actualStates);

                Assert.Equal(expectedStates.Count, actualStates.Count);
                foreach (var states in expectedStates.Zip(actualStates, ValueTuple.Create))
                {
                    Assert.Equal(states.Item1, states.Item2);
                }
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
            }
        }

        [RetryFact(Timeout = Timeout)]
        public async Task RenderInPreload()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var renderer1 = new RecordingActionRenderer<DumbAction>();
            var renderer2 = new RecordingActionRenderer<DumbAction>();
            var chain1 = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                renderers: new[] { renderer1 }
            );
            var chain2 = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                renderers: new[] { renderer2 }
            );

            var senderKey = new PrivateKey();

            var receiver1 = await CreateSwarm(chain1).ConfigureAwait(false);
            var receiver2 = await CreateSwarm(chain2).ConfigureAwait(false);
            var sender = await CreateSwarm(
                MakeBlockChain(
                    policy,
                    new MemoryStore(),
                    new TrieStateStore(new MemoryKeyValueStore())
                ),
                senderKey
            ).ConfigureAwait(false);

            int renderCount1 = 0, renderCount2 = 0;

            var privKey = new PrivateKey();
            var addr = sender.Address;
            var item = "foo";

            const int iteration = 3;
            for (var i = 0; i < iteration; i++)
            {
                sender.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
                await sender.BlockChain.MineBlock(senderKey);
            }

            renderer1.RenderEventHandler += (_, a) =>
                renderCount1 += a is DumbAction ? 1 : 0;
            renderer2.RenderEventHandler += (_, a) =>
                renderCount2 += a is DumbAction ? 1 : 0;

            await StartAsync(receiver1);
            await StartAsync(sender);

            await BootstrapAsync(receiver1, sender.AsPeer);
            await BootstrapAsync(receiver2, sender.AsPeer);
            await receiver1.PreloadAsync(render: false);
            await receiver2.PreloadAsync(render: true);

            Assert.Equal(sender.BlockChain.Tip, receiver1.BlockChain.Tip);
            Assert.Equal(sender.BlockChain.Count, receiver1.BlockChain.Count);
            Assert.Equal(sender.BlockChain.Count, receiver2.BlockChain.Count);
            Assert.Equal(sender.BlockChain.Count, receiver2.BlockChain.Count);
            Assert.Equal(0, renderCount1);
            Assert.Equal(1, renderCount2);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadWithFailedActions()
        {
            var policy = new BlockPolicy<ThrowException>();
            var fx1 = new MemoryStoreFixture();
            var fx2 = new MemoryStoreFixture();
            var minerChain = MakeBlockChain(policy, fx1.Store, fx1.StateStore);
            var receiverChain = MakeBlockChain(policy, fx2.Store, fx2.StateStore);

            var minerKey = new PrivateKey();

            Swarm<ThrowException> minerSwarm =
                await CreateSwarm(minerChain, minerKey).ConfigureAwait(false);
            Swarm<ThrowException> receiverSwarm =
                await CreateSwarm(receiverChain).ConfigureAwait(false);

            foreach (var unused in Enumerable.Range(0, 10))
            {
                await minerSwarm.BlockChain.MineBlock(minerKey);
            }

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync();

                var action = new ThrowException { ThrowOnExecution = true };

                var chainId = receiverChain.Id;
                Transaction<ThrowException> tx = Transaction<ThrowException>.Create(
                    0,
                    new PrivateKey(),
                    minerSwarm.BlockChain.Genesis.Hash,
                    new[] { action },
                    ImmutableHashSet<Address>.Empty,
                    DateTimeOffset.UtcNow
                );

                Block<ThrowException> block = MineNext(
                    minerChain.Tip,
                    new[] { tx },
                    miner: ChainPrivateKey.PublicKey,
                    difficulty: policy.GetNextBlockDifficulty(minerChain),
                    blockInterval: TimeSpan.FromSeconds(1)
                ).Evaluate(ChainPrivateKey, minerChain);
                minerSwarm.BlockChain.Append(block, false, true, false);

                await receiverSwarm.PreloadAsync();

                // Preloading should succeed even if action throws exception.
                Assert.Equal(minerChain.Tip, receiverChain.Tip);
            }
            finally
            {
                await StopAsync(minerSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromNominer()
        {
            var minerKey = new PrivateKey();
            Swarm<DumbAction> minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            var fxForNominers = new StoreFixture[2];
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            fxForNominers[0] = new MemoryStoreFixture(policy.BlockAction);
            fxForNominers[1] = new MemoryStoreFixture(policy.BlockAction);
            var blockChainsForNominers = new[]
            {
                MakeBlockChain(
                    policy,
                    fxForNominers[0].Store,
                    fxForNominers[0].StateStore),
                MakeBlockChain(
                    policy,
                    fxForNominers[1].Store,
                    fxForNominers[1].StateStore),
            };
            var nominerSwarm0 = await CreateSwarm(blockChainsForNominers[0]).ConfigureAwait(false);
            var nominerSwarm1 = await CreateSwarm(blockChainsForNominers[1]).ConfigureAwait(false);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(minerKey);
            }

            var actualStates = new List<PreloadState>();
            var progress = new ActionProgress<PreloadState>(state =>
            {
                lock (actualStates)
                {
                    actualStates.Add(state);
                }
            });

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(nominerSwarm0);
                await StartAsync(nominerSwarm1);
                minerSwarm.FindNextHashesChunkSize = 2;
                nominerSwarm0.FindNextHashesChunkSize = 2;
                nominerSwarm1.FindNextHashesChunkSize = 2;

                await nominerSwarm0.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await nominerSwarm0.PreloadAsync();
                await nominerSwarm1.AddPeersAsync(new[] { nominerSwarm0.AsPeer }, null);
                await nominerSwarm1.PreloadAsync();
                await receiverSwarm.AddPeersAsync(new[] { nominerSwarm1.AsPeer }, null);
                await receiverSwarm.PreloadAsync(progress);

                // Await 1 second to make sure all progresses is reported.
                await Task.Delay(1000);

                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);

                var expectedStates = new List<PreloadState>();

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var state = new BlockHashDownloadState
                    {
                        EstimatedTotalBlockHashCount = 10,
                        ReceivedBlockHashCount = i,
                        SourcePeer = nominerSwarm1.AsPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = minerChain[i].Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i,
                        SourcePeer = nominerSwarm1.AsPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var state = new BlockVerificationState
                    {
                        VerifiedBlockHash = minerChain[i].Hash,
                        TotalBlockCount = 10,
                        VerifiedBlockCount = i,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var state = new ActionExecutionState
                    {
                        ExecutedBlockHash = minerChain[i].Hash,
                        TotalBlockCount = 10,
                        ExecutedBlockCount = i,
                    };
                    expectedStates.Add(state);
                }

                // FIXME: this test does not ensures block download in order
                Assert.Equal(
                    new HashSet<PreloadState>(expectedStates),
                    new HashSet<PreloadState>(actualStates)
                );
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(nominerSwarm0);
                await StopAsync(nominerSwarm1);
                await StopAsync(receiverSwarm);

                nominerSwarm0.Dispose();
                nominerSwarm1.Dispose();

                fxForNominers[0].Dispose();
                fxForNominers[1].Dispose();
            }
        }

        [Theory(Timeout = Timeout)]
        [InlineData(4)]
        [InlineData(8)]
        [InlineData(16)]
        [InlineData(32)]
        public async Task PreloadRetryWithNextPeers(int blockCount)
        {
            var key0 = new PrivateKey();

            Swarm<DumbAction> swarm0 = await CreateSwarm(key0).ConfigureAwait(false);
            Swarm<DumbAction> swarm1 = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            receiverSwarm.Options.TimeoutOptions.GetBlockHashesTimeout
                = TimeSpan.FromMilliseconds(1000);

            swarm0.FindNextHashesChunkSize = blockCount / 2;
            swarm1.FindNextHashesChunkSize = blockCount / 2;

            for (int i = 0; i < blockCount; ++i)
            {
                var block = await swarm0.BlockChain.MineBlock(key0);
                swarm1.BlockChain.Append(block);
            }

            await StartAsync(swarm0);
            await StartAsync(swarm1);

            Assert.Equal(swarm0.BlockChain.BlockHashes, swarm1.BlockChain.BlockHashes);

            await receiverSwarm.AddPeersAsync(new[] { swarm0.AsPeer, swarm1.AsPeer }, null);
            Assert.Equal(
                new[] { swarm0.AsPeer, swarm1.AsPeer }.ToImmutableHashSet(),
                receiverSwarm.Peers.ToImmutableHashSet());

            var startedStop = false;
            var shouldStopSwarm =
                swarm0.AsPeer.Equals(receiverSwarm.Peers.First()) ? swarm0 : swarm1;

            async void Action(PreloadState state)
            {
                if (!startedStop && state is BlockDownloadState)
                {
                    startedStop = true;
                    await shouldStopSwarm.StopAsync(TimeSpan.Zero);
                }
            }

            await receiverSwarm.PreloadAsync(progress: new ActionProgress<PreloadState>(Action));

            Assert.Equal(swarm1.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
            Assert.Equal(swarm0.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
        }

        [RetryTheory(10, Timeout = Timeout)]
        [InlineData(0)]
        [InlineData(50)]
        [InlineData(100)]
        [InlineData(500)]
        [InlineData(1000)]
        [InlineData(2500)]
        [InlineData(5000)]
        public async Task PreloadAsyncCancellation(int cancelAfter)
        {
            Swarm<DumbAction> minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            Guid receiverChainId = receiverChain.Id;

            (Address address, IEnumerable<Block<DumbAction>> blocks) =
                await MakeFixtureBlocksForPreloadAsyncCancellationTest();

            var blockArray = blocks.ToArray();
            foreach (Block<DumbAction> block in blockArray)
            {
                minerChain.Append(block);
            }

            receiverChain.Append(blockArray[0]);

            Assert.NotNull(minerChain.Tip);

            minerSwarm.FindNextHashesChunkSize = 2;
            await StartAsync(minerSwarm);
            await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

            CancellationTokenSource cts = new CancellationTokenSource();
            cts.CancelAfter(cancelAfter);
            bool canceled = true;
            try
            {
                await receiverSwarm.PreloadAsync(cancellationToken: cts.Token);
                canceled = false;
                Log.Logger.Debug(
                    "{MethodName}() normally finished", nameof(receiverSwarm.PreloadAsync));
            }
            catch (OperationCanceledException)
            {
                Log.Logger.Debug("{MethodName}() aborted", nameof(receiverSwarm.PreloadAsync));
            }
            catch (AggregateException ae) when (ae.InnerException is TaskCanceledException)
            {
                Log.Logger.Debug("{MethodName}() aborted", nameof(receiverSwarm.PreloadAsync));
            }

            cts.Dispose();

            Assert.InRange(receiverChain.Store.ListChainIds().Count(), 0, 1);

            if (canceled)
            {
                Assert.Equal(receiverChainId, receiverChain.Id);
                Assert.Equal(
                    (blockArray[0].Index, blockArray[0].Hash),
                    (receiverChain.Tip.Index, receiverChain.Tip.Hash)
                );
                Assert.Equal(blockArray[0], receiverChain.Tip);
                Assert.Equal(
                    (Text)string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item0.{j}")),
                    receiverChain.GetState(address)
                );
            }
            else
            {
                Assert.NotEqual(receiverChainId, receiverChain.Id);
                Assert.Equal(minerChain.Tip, receiverChain.Tip);
                Assert.Equal(
                    (Text)string.Join(
                        ",",
                        Enumerable.Range(0, 20).Select(i =>
                            string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item{i}.{j}"))
                        )
                    ),
                    receiverChain.GetState(address)
                );
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetDemandBlockHashes()
        {
            Swarm<DumbAction> minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            (_, IEnumerable<Block<DumbAction>> blocks) =
                await MakeFixtureBlocksForPreloadAsyncCancellationTest();

            foreach (Block<DumbAction> block in blocks)
            {
                minerChain.Append(block);
            }

            minerSwarm.FindNextHashesChunkSize = 2;
            await StartAsync(minerSwarm);

            (BoundPeer, IBlockExcerpt)[] peersWithExcerpt =
            {
                (minerSwarm.AsPeer, minerChain.Tip.Header),
            };

            (long, BlockHash)[] demands = await receiverSwarm.GetDemandBlockHashes(
                receiverChain,
                peersWithExcerpt,
                progress: null,
                cancellationToken: CancellationToken.None
            ).ToArrayAsync();

            IEnumerable<(long, BlockHash)> expectedBlocks = minerChain.IterateBlocks()
                .Where(b => b.Index >= receiverChain.Count)
                .Select(b => (b.Index, b.Hash));
            Assert.Equal(expectedBlocks, demands);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadAfterReorg()
        {
            var minerKey = new PrivateKey();

            Swarm<DumbAction> minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 25))
            {
                Block<DumbAction> block = await minerChain.MineBlock(minerKey);
                receiverChain.Append(block);
            }

            var receiverForked = receiverChain.Fork(receiverChain[5].Hash);
            foreach (int i in Enumerable.Range(0, 20))
            {
                await receiverForked.MineBlock(minerKey);
            }

            receiverChain.Swap(receiverForked, false);

            foreach (int i in Enumerable.Range(0, 1))
            {
                await minerChain.MineBlock(minerKey);
            }

            minerSwarm.FindNextHashesChunkSize = 2;
            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync();
            }
            finally
            {
                await StopAsync(minerSwarm);
            }

            Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
        }

        [Fact(Timeout = Timeout)]
        public async Task GetDemandBlockHashesDuringReorg()
        {
            var minerKey = new PrivateKey();
            Swarm<DumbAction> minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            Block<DumbAction>[] blocks =
                (await MakeFixtureBlocksForPreloadAsyncCancellationTest()).Item2;

            foreach (Block<DumbAction> block in blocks)
            {
                minerChain.Append(block);
            }

            BlockChain<DumbAction> forked = minerChain.Fork(minerChain.Genesis.Hash);
            while (forked.Count <= minerChain.Count)
            {
                await forked.MineBlock(minerKey);
            }

            minerSwarm.FindNextHashesChunkSize = 2;
            await StartAsync(minerSwarm);

            (BoundPeer, IBlockExcerpt)[] peersWithBlockExcerpt =
            {
                (minerSwarm.AsPeer, minerChain.Tip.Header),
            };

            long receivedCount = 0;
            (long, BlockHash)[] demands = await receiverSwarm.GetDemandBlockHashes(
                receiverChain,
                peersWithBlockExcerpt,
                progress: new ActionProgress<PreloadState>(state =>
                {
                    if (state is BlockHashDownloadState s &&
                        s.ReceivedBlockHashCount > minerChain.Count / 2)
                    {
                        receivedCount = s.ReceivedBlockHashCount;
                        minerChain.Swap(forked, render: false);
                    }
                }),
                cancellationToken: CancellationToken.None
            ).ToArrayAsync();

            Assert.Equal(receivedCount, demands.LongLength);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadDeleteOnlyTempChain()
        {
            Swarm<DumbAction> minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = minerSwarm.BlockChain;

            receiverChain = receiverChain.Fork(receiverChain.Genesis.Hash);
            Block<DumbAction>[] blocks =
                (await MakeFixtureBlocksForPreloadAsyncCancellationTest()).Item2;

            foreach (Block<DumbAction> block in blocks)
            {
                minerChain.Append(block);
            }

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync();
            }
            finally
            {
                await StopAsync(minerSwarm);
            }

            // Check PreloadAsync() preserves chain that forked before preloading.
            Assert.Equal(2, receiverChain.Store.ListChainIds().Count());
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromTheMostDifficultChain()
        {
            var minerKey1 = new PrivateKey();
            Swarm<DumbAction> minerSwarm1 = await CreateSwarm(minerKey1).ConfigureAwait(false);
            Swarm<DumbAction> minerSwarm2 = await CreateSwarm().ConfigureAwait(false);
            Swarm<DumbAction> receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            BlockChain<DumbAction> minerChain1 = minerSwarm1.BlockChain;
            BlockChain<DumbAction> minerChain2 = minerSwarm2.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            await minerChain1.MineBlock(minerKey1);
            await minerChain1.MineBlock(minerKey1);

            long nextDifficulty = (long)minerChain1.Tip.TotalDifficulty +
                                  minerChain2.Policy.GetNextBlockDifficulty(minerChain2);
            Block<DumbAction> block = MineNext(
                minerChain2.Tip,
                miner: ChainPrivateKey.PublicKey,
                difficulty: nextDifficulty
            ).Evaluate(ChainPrivateKey, minerChain2);
            minerChain2.Append(block);

            Assert.True(minerChain1.Count > minerChain2.Count);
            Assert.True(minerChain1.Tip.TotalDifficulty < minerChain2.Tip.TotalDifficulty);

            try
            {
                await StartAsync(minerSwarm1);
                await StartAsync(minerSwarm2);
                await receiverSwarm.AddPeersAsync(
                    new[] { minerSwarm1.AsPeer, minerSwarm2.AsPeer },
                    null);
                await receiverSwarm.PreloadAsync();
            }
            finally
            {
                await StopAsync(minerSwarm1);
                await StopAsync(minerSwarm2);
                await StopAsync(receiverSwarm);
            }

            Assert.Equal(minerChain2.Count, receiverChain.Count);
            Assert.Equal(minerChain2.Tip, receiverChain.Tip);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadIgnorePeerWithDifferentGenesisBlock()
        {
            var minerKey = new PrivateKey();
            var policy = new BlockPolicy<DumbAction>();
            var genesisContent = new BlockContent<DumbAction>(
                new BlockMetadata(
                    index: 0,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: minerKey.PublicKey,
                    difficulty: 0,
                    totalDifficulty: 0,
                    previousHash: null,
                    txHash: null));
            var genesisBlock1Nonce = new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 });
            var genesisBlock1PreEvaluationHash = genesisContent.Metadata.DerivePreEvaluationHash(
                genesisBlock1Nonce);
            var genesisBlock1 = new PreEvaluationBlock<DumbAction>(
                genesisContent,
                (genesisBlock1Nonce, genesisBlock1PreEvaluationHash));
            var genesisBlock2Nonce = new Nonce(new byte[] { 0x02, 0x00, 0x00, 0x00 });
            var genesisBlock2PreEvaluationHash = genesisContent.Metadata.DerivePreEvaluationHash(
                genesisBlock2Nonce);
            var genesisBlock2 = new PreEvaluationBlock<DumbAction>(
                genesisContent,
                (genesisBlock2Nonce, genesisBlock2PreEvaluationHash));

            BlockChain<DumbAction> MakeBlockChainWithGenesis(
                PreEvaluationBlock<DumbAction> genesisBlock)
            {
                var stateStore = new TrieStateStore(new MemoryKeyValueStore());
                return MakeBlockChain(
                    policy,
                    new MemoryStore(),
                    stateStore,
                    genesisBlock: genesisBlock.Evaluate(
                        privateKey: minerKey,
                        blockAction: policy.BlockAction,
                        nativeTokenPredicate: policy.NativeTokens.Contains,
                        stateStore: stateStore)
                );
            }

            BlockChain<DumbAction> receiverChain = MakeBlockChainWithGenesis(genesisBlock1);
            BlockChain<DumbAction> validSeedChain = MakeBlockChainWithGenesis(genesisBlock1);
            BlockChain<DumbAction> invalidSeedChain = MakeBlockChainWithGenesis(genesisBlock2);
            Swarm<DumbAction> receiverSwarm =
                await CreateSwarm(receiverChain).ConfigureAwait(false);
            Swarm<DumbAction> validSeedSwarm =
                await CreateSwarm(validSeedChain).ConfigureAwait(false);
            Swarm<DumbAction> invalidSeedSwarm =
                await CreateSwarm(invalidSeedChain).ConfigureAwait(false);

            Assert.Equal(receiverSwarm.BlockChain.Genesis, validSeedSwarm.BlockChain.Genesis);
            Assert.NotEqual(receiverSwarm.BlockChain.Genesis, invalidSeedSwarm.BlockChain.Genesis);

            for (int i = 0; i < 10; i++)
            {
                await validSeedChain.MineBlock(minerKey);
            }

            for (int i = 0; i < 20; i++)
            {
                await invalidSeedChain.MineBlock(minerKey);
            }

            try
            {
                await StartAsync(receiverSwarm);
                await StartAsync(validSeedSwarm);
                await StartAsync(invalidSeedSwarm);

                await receiverSwarm.AddPeersAsync(
                    new[] { validSeedSwarm.AsPeer, invalidSeedSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync();

                Assert.Equal(receiverChain.Tip, validSeedChain.Tip);
            }
            finally
            {
                await StopAsync(receiverSwarm);
                await StopAsync(validSeedSwarm);
                await StopAsync(invalidSeedSwarm);

                receiverSwarm.Dispose();
                validSeedSwarm.Dispose();
                invalidSeedSwarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ActionExecutionWithBranchpoint()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx1 = new MemoryStoreFixture(policy.BlockAction);
            var fx2 = new MemoryStoreFixture(policy.BlockAction);
            var seedChain = MakeBlockChain(policy, fx1.Store, fx1.StateStore);
            var receiverChain = MakeBlockChain(policy, fx2.Store, fx2.StateStore);

            var seedKey = new PrivateKey();

            Swarm<DumbAction> seed = await CreateSwarm(seedChain, seedKey).ConfigureAwait(false);
            Swarm<DumbAction> receiver = await CreateSwarm(receiverChain).ConfigureAwait(false);

            for (int i = 0; i < 10; i++)
            {
                var block = await seedChain.MineBlock(seedKey);
                receiverChain.Append(block);
            }

            var forked = seedChain.Fork(seedChain[5].Hash);
            seedChain.Swap(forked, false);
            for (int i = 0; i < 10; i++)
            {
                await seedChain.MineBlock(seedKey);
            }

            var actionExecutionCount = 0;

            var progress = new ActionProgress<PreloadState>(state =>
            {
                if (state is ActionExecutionState)
                {
                    actionExecutionCount++;
                }
            });

            try
            {
                await StartAsync(seed);
                await BootstrapAsync(receiver, seed.AsPeer);
                await receiver.PreloadAsync(progress: progress);
                await Task.Delay(500);

                Assert.Equal(seedChain.Tip, receiverChain.Tip);
                Assert.Equal(10, actionExecutionCount);
            }
            finally
            {
                await StopAsync(seed);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task UpdateTxExecution()
        {
            PrivateKey seedKey = new PrivateKey();
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx1 = new MemoryStoreFixture(policy.BlockAction);
            var fx2 = new MemoryStoreFixture(policy.BlockAction);
            var seedChain = MakeBlockChain(policy, fx1.Store, fx1.StateStore);
            var receiverChain = MakeBlockChain(policy, fx2.Store, fx2.StateStore);

            Swarm<DumbAction> seed = await CreateSwarm(seedChain).ConfigureAwait(false);
            Swarm<DumbAction> receiver = await CreateSwarm(receiverChain).ConfigureAwait(false);

            List<Transaction<DumbAction>> transactions = new List<Transaction<DumbAction>>();
            for (int i = 0; i < 10; i++)
            {
                var transaction = seedChain.MakeTransaction(
                    new PrivateKey(),
                    new[]
                    {
                        new DumbAction(default, $"Item{i}"),
                    });
                await seedChain.MineBlock(seedKey);
                transactions.Add(transaction);
            }

            Assert.Equal(10, seedChain.Tip.Index);

            try
            {
                await StartAsync(seed);
                await StartAsync(receiver);

                await receiver.AddPeersAsync(
                    new[] { seed.AsPeer }, null);
                await receiver.PreloadAsync();

                Assert.Equal(receiverChain.Tip, seedChain.Tip);

                for (int i = 1; i < receiverChain.Count; i++)
                {
                    Assert.NotNull(fx2.Store.GetTxExecution(
                        receiverChain[i].Hash,
                        transactions[i - 1].Id));
                }
            }
            finally
            {
                await StopAsync(seed);
                await StopAsync(receiver);
            }
        }
    }
}
