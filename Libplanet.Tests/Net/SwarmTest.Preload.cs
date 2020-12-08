using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tests.Store.Trie;
using Libplanet.Tx;
using Serilog;
using Serilog.Events;
using Xunit;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownload()
        {
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(minerSwarm.Address);
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
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();

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
            await minerChain.MineBlock(minerSwarm.Address);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "bar") });
            await minerChain.MineBlock(minerSwarm.Address);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "baz") });
            await minerChain.MineBlock(minerSwarm.Address);

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
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            var blocks = new List<Block<DumbAction>>();
            foreach (int i in Enumerable.Range(0, 11))
            {
                Block<DumbAction> block = TestUtils.MineNext(
                        previousBlock: i == 0 ? minerChain.Genesis : blocks[i - 1],
                        difficulty: 1024)
                    .AttachStateRootHash(
                        minerChain.StateStore,
                        minerChain.Policy.BlockAction);
                blocks.Add(block);
                if (i != 10)
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

                    if (actualStates.Count == 9)
                    {
                        minerChain.Append(blocks[10]);
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

                minerSwarm.FindNextHashesChunkSize = 2;
                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15), progress);

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
                        SourcePeer = minerSwarm.AsPeer as BoundPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockDownloadState
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = i == 9 || i == 10 ? 11 : 10,
                        ReceivedBlockCount = i,
                        SourcePeer = minerSwarm.AsPeer as BoundPeer,
                    };
                    expectedStates.Add(state);
                }

                for (var i = 1; i < minerChain.Count; i++)
                {
                    var b = minerChain[i];
                    var state = new BlockVerificationState
                    {
                        VerifiedBlockHash = b.Hash,
                        TotalBlockCount = i == 9 || i == 10 ? 11 : 10,
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
                        TotalBlockCount = 11,
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

        [Fact(Timeout = 5 * 1000)]
        public async Task BlockDownloadTimeout()
        {
            var options = new SwarmOptions
            {
                BlockDownloadTimeout = TimeSpan.FromMilliseconds(1),
            };

            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm(options: options);

            foreach (var unused in Enumerable.Range(0, 10))
            {
                await minerSwarm.BlockChain.MineBlock(minerSwarm.Address);
            }

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                Task waitTask = receiverSwarm.BlockDownloadStarted.WaitAsync();

                Task preloadTask = receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15));
                await waitTask;
                await StopAsync(minerSwarm);
                Exception thrown = null;

                try
                {
                    await preloadTask;
                }
                catch (OperationCanceledException e)
                {
                    thrown = e;
                }

                Assert.True(
                    thrown is OperationCanceledException || thrown is TaskCanceledException,
                    $"The exception thrown is {thrown}"
                );
            }
            finally
            {
                await StopAsync(minerSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadWithFailedActions()
        {
            var policy = new BlockPolicy<ThrowException>();
            var fx1 = new DefaultStoreFixture(memory: true);
            var fx2 = new DefaultStoreFixture(memory: true);
            var minerChain = TestUtils.MakeBlockChain(policy, fx1.Store, fx1.StateStore);
            var receiverChain = TestUtils.MakeBlockChain(policy, fx2.Store, fx2.StateStore);

            Swarm<ThrowException> minerSwarm = CreateSwarm(minerChain);
            Swarm<ThrowException> receiverSwarm = CreateSwarm(receiverChain);

            foreach (var unused in Enumerable.Range(0, 10))
            {
                await minerSwarm.BlockChain.MineBlock(minerSwarm.Address);
            }

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(1));

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

                var block = TestUtils.MineNext(
                        minerChain.Tip,
                        new[] { tx },
                        difficulty: policy.GetNextBlockDifficulty(minerChain),
                        blockInterval: TimeSpan.FromSeconds(1))
                    .AttachStateRootHash(minerChain.StateStore, minerChain.Policy.BlockAction);
                minerSwarm.BlockChain.Append(block, DateTimeOffset.UtcNow, false, true, false);

                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(1));

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
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();
            var fxForNominers = new StoreFixture[2];
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            fxForNominers[0] =
                new DefaultStoreFixture(memory: true, blockAction: policy.BlockAction);
            fxForNominers[1] =
                new DefaultStoreFixture(memory: true, blockAction: policy.BlockAction);
            var blockChainsForNominers = new[]
            {
                TestUtils.MakeBlockChain(
                    policy,
                    fxForNominers[0].Store,
                    fxForNominers[0].StateStore),
                TestUtils.MakeBlockChain(
                    policy,
                    fxForNominers[1].Store,
                    fxForNominers[1].StateStore),
            };
            var nominerSwarm0 = CreateSwarm(blockChainsForNominers[0]);
            var nominerSwarm1 = CreateSwarm(blockChainsForNominers[1]);

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(minerSwarm.Address);
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
                await receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15), progress);

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
                        SourcePeer = nominerSwarm1.AsPeer as BoundPeer,
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
                        SourcePeer = nominerSwarm1.AsPeer as BoundPeer,
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
                    expectedStates.ToHashSet(),
                    actualStates.ToHashSet()
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
            Swarm<DumbAction> swarm0 = CreateSwarm();
            Swarm<DumbAction> swarm1 = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();

            receiverSwarm.Options.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(1000);

            swarm0.FindNextHashesChunkSize = blockCount / 2;
            swarm1.FindNextHashesChunkSize = blockCount / 2;

            for (int i = 0; i < blockCount; ++i)
            {
                var block = await swarm0.BlockChain.MineBlock(swarm0.Address);
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
            await receiverSwarm.PreloadAsync(
                progress: new ActionProgress<PreloadState>(async (state) =>
                {
                    if (!startedStop && state is BlockDownloadState)
                    {
                        startedStop = true;
                        await shouldStopSwarm.StopAsync(TimeSpan.Zero);
                    }
                }));

            Assert.Equal(swarm1.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
            Assert.Equal(swarm0.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
        }

        [Theory]
        [InlineData(0)]
        [InlineData(50)]
        [InlineData(100)]
        [InlineData(500)]
        [InlineData(1000)]
        [InlineData(2500)]
        [InlineData(5000)]
        public async Task PreloadAsyncCancellation(int cancelAfter)
        {
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();
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
                Log.Logger.Debug($"{nameof(receiverSwarm.PreloadAsync)}() normally finished.");
            }
            catch (OperationCanceledException)
            {
                Log.Logger.Debug($"{nameof(receiverSwarm.PreloadAsync)}() aborted.");
            }
            catch (AggregateException ae) when (ae.InnerException is TaskCanceledException)
            {
                Log.Logger.Debug($"{nameof(receiverSwarm.PreloadAsync)}() aborted.");
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
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();
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

            (BoundPeer, long)[] peers =
            {
                ((BoundPeer)minerSwarm.AsPeer, minerChain.Count - 1),
            };

            (long, HashDigest<SHA256>)[] demands = await receiverSwarm.GetDemandBlockHashes(
                receiverChain,
                peers,
                progress: null,
                cancellationToken: CancellationToken.None
            ).ToArrayAsync();

            IEnumerable<(long, HashDigest<SHA256>)> expectedBlocks = minerChain.IterateBlocks()
                .Where(b => b.Index >= receiverChain.Count)
                .Select(b => (b.Index, b.Hash));
            Assert.Equal(expectedBlocks, demands);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadAfterReorg()
        {
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();

            BlockChain<DumbAction> minerChain = minerSwarm.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 25))
            {
                Block<DumbAction> block = await minerChain.MineBlock(minerSwarm.Address);
                receiverChain.Append(block);
            }

            var receiverForked = receiverChain.Fork(receiverChain[5].Hash);
            foreach (int i in Enumerable.Range(0, 20))
            {
                await receiverForked.MineBlock(minerSwarm.Address);
            }

            receiverChain.Swap(receiverForked, false);

            foreach (int i in Enumerable.Range(0, 1))
            {
                await minerChain.MineBlock(minerSwarm.Address);
            }

            minerSwarm.FindNextHashesChunkSize = 1;
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
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();
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
                await forked.MineBlock(minerSwarm.Address);
            }

            minerSwarm.FindNextHashesChunkSize = 2;
            await StartAsync(minerSwarm);

            (BoundPeer, long)[] peers =
            {
                ((BoundPeer)minerSwarm.AsPeer, minerChain.Count - 1),
            };

            long receivedCount = 0;
            (long, HashDigest<SHA256>)[] demands = await receiverSwarm.GetDemandBlockHashes(
                receiverChain,
                peers,
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
            Swarm<DumbAction> minerSwarm = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();
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
            Swarm<DumbAction> minerSwarm1 = CreateSwarm();
            Swarm<DumbAction> minerSwarm2 = CreateSwarm();
            Swarm<DumbAction> receiverSwarm = CreateSwarm();
            BlockChain<DumbAction> minerChain1 = minerSwarm1.BlockChain;
            BlockChain<DumbAction> minerChain2 = minerSwarm2.BlockChain;
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;

            await minerChain1.MineBlock(minerSwarm1.Address);
            await minerChain1.MineBlock(minerSwarm1.Address);

            long nextDifficulty = (long)minerChain1.Tip.TotalDifficulty +
                                  minerChain2.Policy.GetNextBlockDifficulty(minerChain2);
            var block = TestUtils.MineNext(minerChain2.Tip, difficulty: nextDifficulty)
                .AttachStateRootHash(minerChain2.StateStore, minerChain2.Policy.BlockAction);
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
            var minerAddress = new PrivateKey().ToAddress();
            var policy = new BlockPolicy<DumbAction>();
            var genesisBlock1 = new Block<DumbAction>(
                0,
                0,
                0,
                new Nonce(new byte[] { 0x01, 0x00, 0x00, 0x00 }),
                minerAddress,
                null,
                DateTimeOffset.MinValue,
                Enumerable.Empty<Transaction<DumbAction>>());
            var genesisBlock2 = new Block<DumbAction>(
                0,
                0,
                0,
                new Nonce(new byte[] { 0x02, 0x00, 0x00, 0x00 }),
                minerAddress,
                null,
                DateTimeOffset.MinValue,
                Enumerable.Empty<Transaction<DumbAction>>());

            BlockChain<DumbAction> MakeBlockChain(Block<DumbAction> genesisBlock) =>
                TestUtils.MakeBlockChain(
                    policy,
                    new DefaultStore(path: null),
                    new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore()),
                    genesisBlock: genesisBlock);

            BlockChain<DumbAction> receiverChain = MakeBlockChain(genesisBlock1);
            BlockChain<DumbAction> validSeedChain = MakeBlockChain(genesisBlock1);
            BlockChain<DumbAction> invalidSeedChain = MakeBlockChain(genesisBlock2);
            Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverChain);
            Swarm<DumbAction> validSeedSwarm = CreateSwarm(validSeedChain);
            Swarm<DumbAction> invalidSeedSwarm = CreateSwarm(invalidSeedChain);

            Assert.Equal(receiverSwarm.BlockChain.Genesis, validSeedSwarm.BlockChain.Genesis);
            Assert.NotEqual(receiverSwarm.BlockChain.Genesis, invalidSeedSwarm.BlockChain.Genesis);

            for (int i = 0; i < 10; i++)
            {
                await validSeedChain.MineBlock(minerAddress);
            }

            for (int i = 0; i < 20; i++)
            {
                await invalidSeedChain.MineBlock(minerAddress);
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
            var fx1 = new DefaultStoreFixture(memory: true, blockAction: policy.BlockAction);
            var fx2 = new DefaultStoreFixture(memory: true, blockAction: policy.BlockAction);
            var seedChain = TestUtils.MakeBlockChain(policy, fx1.Store, fx1.StateStore);
            var receiverChain = TestUtils.MakeBlockChain(policy, fx2.Store, fx2.StateStore);
            var receiverStateStore = (TrieStateStore)fx2.StateStore;

            Swarm<DumbAction> seed = CreateSwarm(seedChain);
            Swarm<DumbAction> receiver = CreateSwarm(receiverChain);

            for (int i = 0; i < 10; i++)
            {
                var block = await seedChain.MineBlock(seed.Address);
                receiverChain.Append(block);
            }

            var forked = seedChain.Fork(seedChain[5].Hash);
            seedChain.Swap(forked, false);
            for (int i = 0; i < 10; i++)
            {
                await seedChain.MineBlock(seed.Address);
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
    }
}
