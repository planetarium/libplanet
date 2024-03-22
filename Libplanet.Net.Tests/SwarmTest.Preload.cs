#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
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

            Swarm minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block block = minerChain.ProposeBlock(
                    minerKey,
                    CreateBlockCommit(minerChain.Tip),
                    new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                        .Prove(minerKey).Proof);
                minerChain.Append(block, TestUtils.CreateBlockCommit(block));
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
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownloadStates()
        {
            var minerKey = new PrivateKey();

            Swarm minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            var key = new PrivateKey();
            var address1 = key.Address;
            var address2 = new PrivateKey().Address;

            var action = new DumbAction(
                address1,
                "foo",
                transfer: Tuple.Create<Address, Address, BigInteger>(address1, address2, 10));

            minerChain.MakeTransaction(key, new[] { action });
            var block = minerChain.ProposeBlock(
                minerKey,
                CreateBlockCommit(minerChain.Tip),
                new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                    .Prove(minerKey).Proof);
            minerChain.Append(block, TestUtils.CreateBlockCommit(block));

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "bar") });
            block = minerChain.ProposeBlock(
                minerKey,
                CreateBlockCommit(minerChain.Tip),
                new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                    .Prove(minerKey).Proof);
            minerChain.Append(block, TestUtils.CreateBlockCommit(block));

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "baz") });
            block = minerChain.ProposeBlock(
                minerKey,
                CreateBlockCommit(minerChain.Tip),
                new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                    .Prove(minerKey).Proof);
            minerChain.Append(block, TestUtils.CreateBlockCommit(block));

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                await receiverSwarm.PreloadAsync();
                var state = receiverChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(address1);

                Assert.Equal((Text)"foo,bar,baz", state);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
            }
            finally
            {
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Preload()
        {
            Swarm minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            var blocks = new List<Block>();
            foreach (int i in Enumerable.Range(0, 12))
            {
                Block block = minerChain.EvaluateAndSign(
                    ProposeNext(
                        previousBlock: i == 0 ? minerChain.Genesis : blocks[i - 1],
                        miner: ChainPrivateKey.PublicKey,
                        lastCommit: CreateBlockCommit(minerChain.Tip),
                        proof: new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                            .Prove(ChainPrivateKey).Proof),
                    ChainPrivateKey);
                blocks.Add(block);
                if (i != 11)
                {
                    minerChain.Append(blocks[i], TestUtils.CreateBlockCommit(blocks[i]));
                }
            }

            var actualStates = new List<BlockSyncState>();
            var progress = new ActionProgress<BlockSyncState>(state =>
            {
                _logger.Information("Received a progress event: {@State}", state);
                lock (actualStates)
                {
                    actualStates.Add(state);

                    if (actualStates.Count == 10)
                    {
                        minerChain.Append(blocks[11], CreateBlockCommit(blocks[11]));
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

                var expectedStates = new List<BlockSyncState>();

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
                    var state1 = new ActionExecutionState
                    {
                        ExecutedBlockHash = b.Hash,
                        TotalBlockCount = 12,
                        ExecutedBlockCount = i,
                    };
                    expectedStates.Add(state1);

                    var state2 = new BlockVerificationState
                    {
                        VerifiedBlockHash = b.Hash,
                        TotalBlockCount = i == 9 || i == 10 ? 11 : 10,
                        VerifiedBlockCount = i,
                    };
                    expectedStates.Add(state2);
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
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
            }
        }

        [Fact(
            Skip = "Scenario is no more possible since validator set has moved to state.",
            Timeout = Timeout)]
        public async Task PreloadWithMaliciousPeer()
        {
            const int initialSharedTipHeight = 3;
            const int maliciousTipHeight = 5;
            const int honestTipHeight = 7;
            var policy = new NullBlockPolicy();
            var policyB = new NullBlockPolicy();
            var genesis = new MemoryStoreFixture(policy.BlockAction).GenesisBlock;

            var swarmA = await CreateSwarm(
                privateKey: new PrivateKey(),
                policy: policy,
                genesis: genesis).ConfigureAwait(false);
            var swarmB = await CreateSwarm(
                privateKey: new PrivateKey(),
                policy: policyB,
                genesis: genesis).ConfigureAwait(false);
            var swarmC = await CreateSwarm(
                privateKey: new PrivateKey(),
                policy: policy,
                genesis: genesis).ConfigureAwait(false);
            var chainA = swarmA.BlockChain;
            var chainB = swarmB.BlockChain;
            var chainC = swarmC.BlockChain;

            // Setup initial state where all chains share the same blockchain state.
            for (int i = 1; i <= initialSharedTipHeight; i++)
            {
                var proposerKey = new PrivateKey();
                var block = chainA.ProposeBlock(
                    proposerKey,
                    TestUtils.CreateBlockCommit(chainA.Tip),
                    new LotMetadata(chainA.Tip.Index + 1, 0, chainA.Tip.Proof)
                        .Prove(proposerKey).Proof);
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
                chainB.Append(block, TestUtils.CreateBlockCommit(block));
                chainC.Append(block, TestUtils.CreateBlockCommit(block));
            }

            // Setup malicious node to broadcast.
            for (int i = initialSharedTipHeight + 1; i < maliciousTipHeight; i++)
            {
                var proposerKey = new PrivateKey();
                var block = chainB.ProposeBlock(
                    proposerKey,
                    TestUtils.CreateBlockCommit(chainB.Tip),
                    new LotMetadata(chainB.Tip.Index + 1, 0, chainB.Tip.Proof)
                        .Prove(proposerKey).Proof);
                chainB.Append(block, TestUtils.CreateBlockCommit(block));
                chainC.Append(block, TestUtils.CreateBlockCommit(block));
            }

            var specialPK = new PrivateKey();
            var specialBlock = chainB.ProposeBlock(
                specialPK,
                TestUtils.CreateBlockCommit(chainB.Tip),
                new LotMetadata(chainB.Tip.Index + 1, 0, chainB.Tip.Proof)
                    .Prove(specialPK).Proof);
            var invalidBlockCommit = new BlockCommit(
                maliciousTipHeight,
                0,
                specialBlock.Hash,
                ImmutableArray<Vote>.Empty
                    .Add(new VoteMetadata(
                        maliciousTipHeight,
                        0,
                        specialBlock.Hash,
                        DateTimeOffset.UtcNow,
                        TestUtils.PrivateKeys[0].PublicKey,
                        VoteFlag.PreCommit).Sign(TestUtils.PrivateKeys[0])));
            var validBlockCommit = TestUtils.CreateBlockCommit(specialBlock);
            chainB.Append(specialBlock, invalidBlockCommit);
            chainC.Append(specialBlock, validBlockCommit);

            // Setup honest node with higher tip
            for (int i = maliciousTipHeight + 1; i <= honestTipHeight; i++)
            {
                var privateKey = new PrivateKey();
                var block = chainC.ProposeBlock(
                    privateKey,
                    TestUtils.CreateBlockCommit(chainC.Tip),
                    new LotMetadata(chainC.Tip.Index + 1, 0, chainC.Tip.Proof)
                        .Prove(privateKey).Proof);
                chainC.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Assert.Equal(initialSharedTipHeight, chainA.Tip.Index);
            Assert.Equal(maliciousTipHeight, chainB.Tip.Index);
            Assert.Equal(honestTipHeight, chainC.Tip.Index);

            try
            {
                await StartAsync(swarmA, millisecondsBroadcastBlockInterval: int.MaxValue);
                await StartAsync(swarmB, millisecondsBroadcastBlockInterval: int.MaxValue);
                await StartAsync(swarmC, millisecondsBroadcastBlockInterval: int.MaxValue);

                // Checks swarmB cannot make swarmA append a block with invalid block commit.
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                try
                {
                    await swarmA.PreloadAsync();
                }
                catch (InvalidBlockCommitException)
                {
                }

                // Makes sure preload failed.
                Assert.Equal(initialSharedTipHeight, chainA.Tip.Index);

                // Checks swarmA can sync with an honest node with higher tip afterwards.
                await swarmA.AddPeersAsync(new[] { swarmC.AsPeer }, null);
                await swarmC.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                await swarmA.PreloadAsync();

                Assert.Equal(chainC.Tip, chainA.Tip);
                Assert.Equal(
                    chainC.GetBlockCommit(chainC.Tip.Hash),
                    chainA.GetBlockCommit(chainA.Tip.Hash));
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [RetryFact(Timeout = Timeout)]
        public async Task NoRenderInPreload()
        {
            var policy = new BlockPolicy(new MinerReward(1));
            var renderer = new RecordingActionRenderer();
            var chain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                renderers: new[] { renderer });

            var senderKey = new PrivateKey();

            var receiver = await CreateSwarm(chain).ConfigureAwait(false);
            var sender = await CreateSwarm(
                MakeBlockChain(
                    policy,
                    new MemoryStore(),
                    new TrieStateStore(new MemoryKeyValueStore()),
                    new SingleActionLoader(typeof(DumbAction))
                ),
                senderKey
            ).ConfigureAwait(false);

            int renderCount = 0;

            var privKey = new PrivateKey();
            var addr = sender.Address;
            var item = "foo";

            const int iteration = 3;
            for (var i = 0; i < iteration; i++)
            {
                sender.BlockChain.MakeTransaction(privKey, new[] { new DumbAction(addr, item) });
                Block block = sender.BlockChain.ProposeBlock(
                    senderKey,
                    CreateBlockCommit(sender.BlockChain.Tip),
                    new LotMetadata(sender.BlockChain.Tip.Index + 1, 0, sender.BlockChain.Tip.Proof)
                        .Prove(senderKey).Proof);
                sender.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            renderer.RenderEventHandler += (_, a) =>
                renderCount += IsDumbAction(a) ? 1 : 0;

            await StartAsync(receiver);
            await StartAsync(sender);

            await BootstrapAsync(receiver, sender.AsPeer);
            await receiver.PreloadAsync();

            Assert.Equal(sender.BlockChain.Tip, receiver.BlockChain.Tip);
            Assert.Equal(sender.BlockChain.Count, receiver.BlockChain.Count);
            Assert.Equal(0, renderCount);

            CleaningSwarm(receiver);
            CleaningSwarm(sender);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadWithFailedActions()
        {
            var policy = new BlockPolicy();
            var fx1 = new MemoryStoreFixture();
            var fx2 = new MemoryStoreFixture();
            var minerChain = MakeBlockChain(
                policy, fx1.Store, fx1.StateStore, new SingleActionLoader(typeof(ThrowException)));
            var receiverChain = MakeBlockChain(
                policy, fx2.Store, fx2.StateStore, new SingleActionLoader(typeof(ThrowException)));

            var minerKey = new PrivateKey();

            Swarm minerSwarm =
                await CreateSwarm(minerChain, minerKey).ConfigureAwait(false);
            Swarm receiverSwarm =
                await CreateSwarm(receiverChain).ConfigureAwait(false);

            foreach (var unused in Enumerable.Range(0, 10))
            {
                Block block = minerChain.ProposeBlock(
                    minerKey,
                    CreateBlockCommit(minerChain.Tip),
                    new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                        .Prove(minerKey).Proof);
                minerChain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            try
            {
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync();

                var action = new ThrowException { ThrowOnExecution = true };

                var chainId = receiverChain.Id;
                Transaction tx = Transaction.Create(
                    0,
                    new PrivateKey(),
                    minerSwarm.BlockChain.Genesis.Hash,
                    new[] { action }.ToPlainValues(),
                    null,
                    null,
                    DateTimeOffset.UtcNow);

                Block block = minerChain.ProposeBlock(
                    ChainPrivateKey,
                    new[] { tx }.ToImmutableList(),
                    CreateBlockCommit(minerChain.Tip),
                    new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                        .Prove(minerKey).Proof);
                minerChain.Append(block, CreateBlockCommit(block), true);

                await receiverSwarm.PreloadAsync();

                // Preloading should succeed even if action throws exception.
                Assert.Equal(minerChain.Tip, receiverChain.Tip);
            }
            finally
            {
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromNominer()
        {
            var minerKey = new PrivateKey();
            Swarm minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            var fxForNominers = new StoreFixture[2];
            var policy = new BlockPolicy(new MinerReward(1));
            fxForNominers[0] = new MemoryStoreFixture(policy.BlockAction);
            fxForNominers[1] = new MemoryStoreFixture(policy.BlockAction);
            var blockChainsForNominers = new[]
            {
                MakeBlockChain(
                    policy,
                    fxForNominers[0].Store,
                    fxForNominers[0].StateStore,
                    new SingleActionLoader(typeof(DumbAction))),
                MakeBlockChain(
                    policy,
                    fxForNominers[1].Store,
                    fxForNominers[1].StateStore,
                    new SingleActionLoader(typeof(DumbAction))),
            };
            var nominerSwarm0 =
                await CreateSwarm(blockChainsForNominers[0]).ConfigureAwait(false);
            var nominerSwarm1 =
                await CreateSwarm(blockChainsForNominers[1]).ConfigureAwait(false);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block block = minerChain.ProposeBlock(
                    minerKey,
                    CreateBlockCommit(minerChain.Tip),
                    new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                        .Prove(minerKey).Proof);
                minerChain.Append(block, CreateBlockCommit(block));
            }

            var actualStates = new List<BlockSyncState>();
            var progress = new ActionProgress<BlockSyncState>(state =>
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

                var expectedStates = new List<BlockSyncState>();

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
                    var state1 = new ActionExecutionState
                    {
                        ExecutedBlockHash = minerChain[i].Hash,
                        TotalBlockCount = 10,
                        ExecutedBlockCount = i,
                    };
                    expectedStates.Add(state1);

                    var state2 = new BlockVerificationState
                    {
                        VerifiedBlockHash = minerChain[i].Hash,
                        TotalBlockCount = 10,
                        VerifiedBlockCount = i,
                    };
                    expectedStates.Add(state2);
                }

                // FIXME: this test does not ensures block download in order
                Assert.True(expectedStates.SequenceEqual(actualStates));
            }
            finally
            {
                CleaningSwarm(minerSwarm);
                CleaningSwarm(nominerSwarm0);
                CleaningSwarm(nominerSwarm1);
                CleaningSwarm(receiverSwarm);

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

            Swarm swarm0 = await CreateSwarm(key0).ConfigureAwait(false);
            Swarm swarm1 = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            receiverSwarm.Options.TimeoutOptions.GetBlockHashesTimeout
                = TimeSpan.FromMilliseconds(1000);

            swarm0.FindNextHashesChunkSize = blockCount / 2;
            swarm1.FindNextHashesChunkSize = blockCount / 2;

            for (int i = 0; i < blockCount; ++i)
            {
                var block = swarm0.BlockChain.ProposeBlock(
                    key0,
                    CreateBlockCommit(swarm0.BlockChain.Tip),
                    new LotMetadata(swarm0.BlockChain.Tip.Index + 1, 0, swarm0.BlockChain.Tip.Proof)
                        .Prove(key0).Proof);
                swarm0.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));
                swarm1.BlockChain.Append(block, TestUtils.CreateBlockCommit(block));
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

            async void Action(BlockSyncState state)
            {
                if (!startedStop && state is BlockDownloadState)
                {
                    startedStop = true;
                    await shouldStopSwarm.StopAsync(TimeSpan.Zero);
                }
            }

            await receiverSwarm.PreloadAsync(progress: new ActionProgress<BlockSyncState>(Action));

            Assert.Equal(swarm1.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);
            Assert.Equal(swarm0.BlockChain.BlockHashes, receiverSwarm.BlockChain.BlockHashes);

            CleaningSwarm(swarm0);
            CleaningSwarm(swarm1);
            CleaningSwarm(receiverSwarm);
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
            Swarm minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            Guid receiverChainId = receiverChain.Id;

            (Address address, IEnumerable<Block> blocks) =
                MakeFixtureBlocksForPreloadAsyncCancellationTest();

            var blockArray = blocks.ToArray();
            foreach (Block block in blockArray)
            {
                minerChain.Append(block, CreateBlockCommit(block));
            }

            receiverChain.Append(blockArray[0], CreateBlockCommit(blockArray[0]));

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
                    receiverChain
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address)
                );
            }
            else
            {
                Assert.Equal(minerChain.Tip, receiverChain.Tip);
                Assert.Equal(
                    (Text)string.Join(
                        ",",
                        Enumerable.Range(0, 20).Select(i =>
                            string.Join(",", Enumerable.Range(0, 5).Select(j => $"Item{i}.{j}"))
                        )
                    ),
                    receiverChain
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(address)
                );
            }

            CleaningSwarm(minerSwarm);
            CleaningSwarm(receiverSwarm);
        }

        [Fact(Timeout = Timeout)]
        public async Task GetDemandBlockHashes()
        {
            Swarm minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            (_, IEnumerable<Block> blocks) =
                MakeFixtureBlocksForPreloadAsyncCancellationTest();

            foreach (Block block in blocks)
            {
                minerChain.Append(block, CreateBlockCommit(block));
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
                chunkSize: int.MaxValue,
                progress: null,
                cancellationToken: CancellationToken.None
            ).ToArrayAsync();

            IEnumerable<(long, BlockHash)> expectedBlocks = minerChain.IterateBlocks()
                .Where(b => b.Index >= receiverChain.Count)
                .Select(b => (b.Index, b.Hash));
            Assert.Equal(expectedBlocks, demands);

            CleaningSwarm(minerSwarm);
            CleaningSwarm(receiverSwarm);
        }

        [Fact(Timeout = Timeout, Skip = "No Reorganization in PBFT")]
        public async Task PreloadAfterReorg()
        {
            var minerKey = new PrivateKey();

            Swarm minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;
            foreach (int i in Enumerable.Range(0, 25))
            {
                Block block = minerChain.ProposeBlock(
                    minerKey,
                    CreateBlockCommit(minerChain.Tip),
                    new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                        .Prove(minerKey).Proof);
                minerChain.Append(block, CreateBlockCommit(block));
                receiverChain.Append(block, CreateBlockCommit(block));
            }

            var receiverForked = receiverChain.Fork(receiverChain[5].Hash);
            foreach (int i in Enumerable.Range(0, 20))
            {
                Block block = receiverForked.ProposeBlock(
                    minerKey,
                    CreateBlockCommit(receiverForked.Tip),
                    new LotMetadata(receiverForked.Tip.Index + 1, 0, receiverForked.Tip.Proof)
                        .Prove(minerKey).Proof);
                receiverForked.Append(block, CreateBlockCommit(block));
            }

            receiverChain.Swap(receiverForked, false);

            foreach (int i in Enumerable.Range(0, 1))
            {
                Block block = minerChain.ProposeBlock(
                    minerKey,
                    CreateBlockCommit(minerChain.Tip),
                    new LotMetadata(minerChain.Tip.Index + 1, 0, minerChain.Tip.Proof)
                        .Prove(minerKey).Proof);
                minerChain.Append(block, CreateBlockCommit(block));
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
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
            }

            Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
        }

        [Fact(Timeout = Timeout)]
        public async Task GetDemandBlockHashesDuringReorg()
        {
            var minerKey = new PrivateKey();
            Swarm minerSwarm = await CreateSwarm(minerKey).ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            Block[] blocks =
                MakeFixtureBlocksForPreloadAsyncCancellationTest().Item2;

            foreach (Block block in blocks)
            {
                minerChain.Append(block, CreateBlockCommit(block));
            }

            BlockChain forked = minerChain.Fork(minerChain.Genesis.Hash);
            while (forked.Count <= minerChain.Count)
            {
                Block block = forked.ProposeBlock(
                    minerKey, CreateBlockCommit(forked.Tip));
                forked.Append(block, CreateBlockCommit(block));
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
                chunkSize: int.MaxValue,
                progress: new ActionProgress<BlockSyncState>(state =>
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

            CleaningSwarm(minerSwarm);
            CleaningSwarm(receiverSwarm);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadDeleteOnlyTempChain()
        {
            Swarm minerSwarm = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            BlockChain minerChain = minerSwarm.BlockChain;
            BlockChain receiverChain = minerSwarm.BlockChain;

            receiverChain = receiverChain.Fork(receiverChain.Genesis.Hash);
            Block[] blocks =
                MakeFixtureBlocksForPreloadAsyncCancellationTest().Item2;

            foreach (Block block in blocks)
            {
                minerChain.Append(block, CreateBlockCommit(block));
            }

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync();
            }
            finally
            {
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
            }

            // Check PreloadAsync() preserves chain that forked before preloading.
            Assert.Equal(2, receiverChain.Store.ListChainIds().Count());
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromTheHighestTipIndexChain()
        {
            var minerKey1 = new PrivateKey();
            Swarm minerSwarm1 = await CreateSwarm(minerKey1).ConfigureAwait(false);
            Swarm minerSwarm2 = await CreateSwarm().ConfigureAwait(false);
            Swarm receiverSwarm = await CreateSwarm().ConfigureAwait(false);
            BlockChain minerChain1 = minerSwarm1.BlockChain;
            BlockChain minerChain2 = minerSwarm2.BlockChain;
            BlockChain receiverChain = receiverSwarm.BlockChain;

            Block block1 = minerChain1.ProposeBlock(
                minerKey1, CreateBlockCommit(minerChain1.Tip));
            minerChain1.Append(block1, CreateBlockCommit(block1));
            Block block2 = minerChain1.ProposeBlock(
                minerKey1, CreateBlockCommit(minerChain1.Tip));
            minerChain1.Append(block2, CreateBlockCommit(block2));

            Block block = minerChain2.ProposeBlock(
                ChainPrivateKey, CreateBlockCommit(minerChain2.Tip));
            minerChain2.Append(block, CreateBlockCommit(block));

            Assert.True(minerChain1.Count > minerChain2.Count);

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
                CleaningSwarm(minerSwarm1);
                CleaningSwarm(minerSwarm2);
                CleaningSwarm(receiverSwarm);
            }

            Assert.Equal(minerChain1.Count, receiverChain.Count);
            Assert.Equal(minerChain1.Tip, receiverChain.Tip);
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadIgnorePeerWithDifferentGenesisBlock()
        {
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var policy = new BlockPolicy();

            BlockChain receiverChain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                privateKey: key1);
            BlockChain validSeedChain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                privateKey: key1,
                genesisBlock: receiverChain.Genesis);
            BlockChain invalidSeedChain = MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbAction)),
                privateKey: key2);
            Swarm receiverSwarm =
                await CreateSwarm(receiverChain).ConfigureAwait(false);
            Swarm validSeedSwarm =
                await CreateSwarm(validSeedChain).ConfigureAwait(false);
            Swarm invalidSeedSwarm =
                await CreateSwarm(invalidSeedChain).ConfigureAwait(false);

            Assert.Equal(receiverSwarm.BlockChain.Genesis, validSeedSwarm.BlockChain.Genesis);
            Assert.NotEqual(receiverSwarm.BlockChain.Genesis, invalidSeedSwarm.BlockChain.Genesis);

            for (int i = 0; i < 10; i++)
            {
                Block block = validSeedChain.ProposeBlock(
                    key1, CreateBlockCommit(validSeedChain.Tip));
                validSeedChain.Append(block, CreateBlockCommit(block));
            }

            for (int i = 0; i < 20; i++)
            {
                Block block = invalidSeedChain.ProposeBlock(
                    key1, CreateBlockCommit(invalidSeedChain.Tip));
                invalidSeedChain.Append(block, CreateBlockCommit(block));
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
                CleaningSwarm(receiverSwarm);
                CleaningSwarm(validSeedSwarm);
                CleaningSwarm(invalidSeedSwarm);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task ActionExecutionWithBranchpoint()
        {
            var policy = new BlockPolicy(new MinerReward(1));
            var fx1 = new MemoryStoreFixture(policy.BlockAction);
            var fx2 = new MemoryStoreFixture(policy.BlockAction);
            var seedChain = MakeBlockChain(
                policy, fx1.Store, fx1.StateStore, new SingleActionLoader(typeof(DumbAction)));
            var receiverChain = MakeBlockChain(
                policy, fx2.Store, fx2.StateStore, new SingleActionLoader(typeof(DumbAction)));

            var seedKey = new PrivateKey();

            Swarm seed =
                await CreateSwarm(seedChain, seedKey).ConfigureAwait(false);
            Swarm receiver =
                await CreateSwarm(receiverChain).ConfigureAwait(false);

            for (int i = 0; i < 10; i++)
            {
                var block = seedChain.ProposeBlock(
                    seedKey, CreateBlockCommit(seedChain.Tip));
                seedChain.Append(block, TestUtils.CreateBlockCommit(block));
                receiverChain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            var forked = seedChain.Fork(seedChain[5].Hash);
            seedChain.Swap(forked, false);
            for (int i = 0; i < 10; i++)
            {
                Block block = seedChain.ProposeBlock(
                    seedKey, CreateBlockCommit(seedChain.Tip));
                seedChain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            var actionExecutionCount = 0;

            var progress = new ActionProgress<BlockSyncState>(state =>
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
                CleaningSwarm(seed);
                CleaningSwarm(receiver);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task UpdateTxExecution()
        {
            PrivateKey seedKey = new PrivateKey();
            var policy = new BlockPolicy(new MinerReward(1));
            var fx1 = new MemoryStoreFixture(policy.BlockAction);
            var fx2 = new MemoryStoreFixture(policy.BlockAction);
            var seedChain = MakeBlockChain(
                policy, fx1.Store, fx1.StateStore, new SingleActionLoader(typeof(DumbAction)));
            var receiverChain = MakeBlockChain(
                policy, fx2.Store, fx2.StateStore, new SingleActionLoader(typeof(DumbAction)));

            Swarm seed =
                await CreateSwarm(seedChain).ConfigureAwait(false);
            Swarm receiver =
                await CreateSwarm(receiverChain).ConfigureAwait(false);

            List<Transaction> transactions = new List<Transaction>();
            for (int i = 0; i < 10; i++)
            {
                var transaction = seedChain.MakeTransaction(
                    new PrivateKey(),
                    new[]
                    {
                        new DumbAction(default, $"Item{i}"),
                    });
                Block block = seedChain.ProposeBlock(
                    seedKey, CreateBlockCommit(seedChain.Tip));
                seedChain.Append(block, TestUtils.CreateBlockCommit(block));
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
                CleaningSwarm(seed);
                CleaningSwarm(receiver);
            }
        }
    }
}
