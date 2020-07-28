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
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Nito.AsyncEx;
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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(_fx1.Address1);
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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            var key = new PrivateKey();
            var address1 = key.ToAddress();
            var address2 = new PrivateKey().ToAddress();

            var action = new DumbAction(
                address1,
                "foo",
                transfer: Tuple.Create<Address, Address, BigInteger>(address1, address2, 10));

            minerChain.MakeTransaction(key, new[] { action });
            await minerChain.MineBlock(_fx1.Address1);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "bar") });
            await minerChain.MineBlock(_fx1.Address1);

            minerChain.MakeTransaction(key, new[] { new DumbAction(address1, "baz") });
            await minerChain.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                var trustedStateValidators = new[] { minerSwarm.Address }.ToImmutableHashSet();

                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedStateValidators);
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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            var blocks = new List<Block<DumbAction>>();
            foreach (int i in Enumerable.Range(0, 11))
            {
                blocks.Add(TestUtils.MineNext(
                    previousBlock: i == 0 ? minerChain.Genesis : blocks[i - 1],
                    difficulty: 1024));
                if (i != 10)
                {
                    minerChain.Append(blocks[i]);
                }
            }

            var actualStates = new List<PreloadState>();
            var progress = new Progress<PreloadState>(state =>
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

        [Fact]
        public async Task PreloadFailed()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            foreach (var unused in Enumerable.Range(0, 10))
            {
                await minerSwarm.BlockChain.MineBlock(_fx1.Address1);
            }

            receiverSwarm.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(10);

            var isCalled = false;
            void Handler(object sender, PreloadBlockDownloadFailEventArgs e)
            {
                if (e.InnerExceptions.All(ex => ex is TimeoutException))
                {
                    isCalled = true;
                }
            }

            try
            {
                // SwarmException should be thrown if event handler doesn't exist.
                await StartAsync(minerSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                var t = receiverSwarm.PreloadAsync(TimeSpan.FromSeconds(15));
                await receiverSwarm.PreloadStarted.WaitAsync();
                await StopAsync(minerSwarm);
                await Assert.ThrowsAsync<AggregateException>(async () => await t);

                // Event handler should be called if it exists.
                await StartAsync(minerSwarm);

                t = receiverSwarm.PreloadAsync(
                    TimeSpan.FromSeconds(15),
                    blockDownloadFailed: Handler);
                await receiverSwarm.PreloadStarted.WaitAsync();
                await StopAsync(minerSwarm);
                await t;
                Assert.True(isCalled);
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
            var minerChain = TestUtils.MakeBlockChain(policy, fx1.Store);
            var receiverChain = TestUtils.MakeBlockChain(policy, fx2.Store);

            Swarm<ThrowException> minerSwarm = CreateSwarm(minerChain);
            Swarm<ThrowException> receiverSwarm = CreateSwarm(receiverChain);

            foreach (var unused in Enumerable.Range(0, 10))
            {
                await minerSwarm.BlockChain.MineBlock(_fx1.Address1);
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
                    blockInterval: TimeSpan.FromSeconds(1));
                minerSwarm.BlockChain.Append(block, DateTimeOffset.UtcNow, false, false);

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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            var fxForNominers = new StoreFixture[2];
            fxForNominers[0] = new DefaultStoreFixture(memory: true);
            fxForNominers[1] = new DefaultStoreFixture(memory: true);
            var policy = new BlockPolicy<DumbAction>();
            var blockChainsForNominers = new[]
            {
                TestUtils.MakeBlockChain(policy, fxForNominers[0].Store),
                TestUtils.MakeBlockChain(policy, fxForNominers[1].Store),
            };
            var nominerSwarm0 = CreateSwarm(blockChainsForNominers[0]);
            var nominerSwarm1 = CreateSwarm(blockChainsForNominers[1]);

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(_fx1.Address1);
            }

            var actualStates = new List<PreloadState>();
            var progress = new Progress<PreloadState>(state =>
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
            Swarm<DumbAction> swarm0 = _swarms[0];
            Swarm<DumbAction> swarm1 = _swarms[1];
            Swarm<DumbAction> receiverSwarm = _swarms[2];

            receiverSwarm.BlockHashRecvTimeout = TimeSpan.FromMilliseconds(100);

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
                progress: new Progress<PreloadState>(async (state) =>
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

        [Theory(Timeout = Timeout)]
        [InlineData(true, false)]
        [InlineData(false, false)]
        [InlineData(true, true)]
        [InlineData(false, true)]
        public async Task PreloadWithTrustedPeers(bool trust, bool genesisWithAction)
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];
            PrivateKey[] signers =
                Enumerable.Repeat(0, 10).Select(_ => new PrivateKey()).ToArray();
            Address[] targets = Enumerable.Repeat(0, signers.Length).Select(_
                => new PrivateKey().ToAddress()
            ).ToArray();
            (PrivateKey, Address)[] fixturePairs =
                signers.Zip(targets, ValueTuple.Create).ToArray();

            HashDigest<SHA256>? deepBlockHash = null;

            Address genesisTarget = new PrivateKey().ToAddress();
            if (genesisWithAction)
            {
                minerChain.MakeTransaction(
                    signers[0],
                    new[] { new DumbAction(genesisTarget, "Genesis") }
                );
                await minerChain.MineBlock(minerSwarm.Address);
            }

            const int repeat = 3;
            for (int i = 0; i < repeat; i++)
            {
                int j = 0;
                Block<DumbAction> block = null;
                foreach ((PrivateKey signer, Address target) in fixturePairs)
                {
                    minerChain.MakeTransaction(
                        signer,
                        new[] { new DumbAction(target, $"Item{i}.{j}") }
                    );
                    block = await minerChain.MineBlock(minerSwarm.Address);
                    j++;
                }

                if (i < 2)
                {
                    deepBlockHash = block?.Hash;
                }
            }

            Assert.NotNull(deepBlockHash);

            try
            {
                _logger.Verbose("Start the miner swarm...");
                await StartAsync(minerSwarm);
                _logger.Verbose("Started the miner swarm.");
                _logger.Verbose("Start the receiver swarm...");
                await StartAsync(receiverSwarm);
                _logger.Verbose("Started the receiver swarm.");

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                IImmutableSet<Address> trustedPeers = trust
                    ? new[] { minerSwarm.Address }.ToImmutableHashSet()
                    : ImmutableHashSet<Address>.Empty;
                _logger.Verbose("Make the receiver swarm to start preloading...");
                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedPeers);
                _logger.Verbose("The receiver swarm finished preloading.");

                Assert.Empty(DumbAction.RenderRecords.Value);
                Assert.Empty(MinerReward.RenderRecords.Value);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
                int i = 0;
                foreach (Address target in targets)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var chainType = ReferenceEquals(chain, minerChain) ? "M" : "R";
                        IValue state = chain.GetState(
                            target,
                            stateCompleter: StateCompleters<DumbAction>.Reject
                        );
                        Assert.NotNull(state);
                        Assert.Equal(
                            $"({chainType}) Item0.{i},Item1.{i},Item2.{i}",
                            $"({chainType}) {((Text)state).Value}"
                        );
                    }

                    IValue TryToGetDeepStates() => receiverChain.GetState(
                        target,
                        deepBlockHash,
                        StateCompleters<DumbAction>.Reject
                    );

                    if (trust)
                    {
                        Assert.Throws<IncompleteBlockStatesException>(
                            () => TryToGetDeepStates()
                        );
                    }
                    else
                    {
                        IValue deepState = TryToGetDeepStates();
                        Assert.NotNull(deepState);
                        Assert.Equal((Text)$"Item0.{i},Item1.{i}", deepState);
                    }

                    i++;
                }

                if (genesisWithAction)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        IValue state = chain.GetState(
                            genesisTarget,
                            stateCompleter: StateCompleters<DumbAction>.Reject
                        );
                        Assert.NotNull(state);
                        Assert.Equal((Text)"Genesis", state);
                    }
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    IValue minerState = chain.GetState(
                        minerSwarm.Address,
                        stateCompleter: StateCompleters<DumbAction>.Reject
                    );
                    Assert.NotNull(minerState);
                    Assert.Equal(
                        (Integer)((genesisWithAction ? 1 : 0) + repeat * fixturePairs.Length),
                        (Integer)minerState
                    );
                }
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        [Fact]
        public async Task PreloadWithBranchesAndTrustedPeers()
        {
            // Two miners; one trusts other one.  Test if it downloads the minimum range of blocks
            // (instead of the entire chain from the genesis to the tip) when there are branches.
            // See also: https://github.com/planetarium/libplanet/issues/465#issuecomment-525682219
            Swarm<DumbAction> senderSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> senderChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            Block<DumbAction> g = senderChain.Genesis,
                bp = TestUtils.MineNext(g, difficulty: 1024),
                b2send = TestUtils.MineNext(bp, difficulty: 1024),
                b2recv = TestUtils.MineNext(bp, difficulty: 1024),
                b3 = TestUtils.MineNext(b2send, difficulty: 1024);

            Assert.Equal(senderChain.Genesis, receiverChain.Genesis);

            senderChain.Append(bp);
            senderChain.Append(b2send);
            senderChain.Append(b3);

            _logger.Verbose("Sender chain:");
            foreach (Block<DumbAction> block in senderChain.IterateBlocks())
            {
                _logger.Verbose(
                    "#{BlockIndex} {BlockHash} (<- {PreviousHash})",
                    block.Index,
                    block.Hash,
                    block.PreviousHash
                );
            }

            receiverChain.Append(bp);
            receiverChain.Append(b2recv);

            _logger.Verbose("Receiver chain:");
            foreach (Block<DumbAction> block in receiverChain.IterateBlocks())
            {
                _logger.Verbose(
                    "#{BlockIndex} {BlockHash} (<- {PreviousHash})",
                    block.Index,
                    block.Hash,
                    block.PreviousHash
                );
            }

            try
            {
                await StartAsync(senderSwarm);
                await receiverSwarm.AddPeersAsync(new[] { senderSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync(
                    trustedStateValidators: ImmutableHashSet<Address>.Empty.Add(senderSwarm.Address)
                );
            }
            finally
            {
                await StopAsync(senderSwarm);
            }

            Assert.Equal(senderChain.BlockHashes, receiverChain.BlockHashes);
            // FIXME: these should be tested via storage
            /*
            Assert.DoesNotContain(g.Hash, receivedBlockStates)
            Assert.DoesNotContain(bp.Hash, receivedBlockStates)
            */
        }

        [Fact]
        public async Task PreloadWhilePeerTipIsChanging()
        {
            var key = new PrivateKey();
            var address = key.ToAddress();

            var policy = new NullPolicy<DumbAction>();

            var fxMiner = new DefaultStoreFixture(memory: true);
            var minerChain = new BlockChain<DumbAction>(
                policy, fxMiner.Store, fxMiner.GenesisBlock);
            var minerAddress = fxMiner.Address1;

            async Task MineBlocks()
            {
                for (var i = 0; i < 10; i++)
                {
                    var actions = new[] { new DumbAction(address, $"{i}") };
                    minerChain.MakeTransaction(key, actions);

                    await minerChain.MineBlock(minerAddress);
                }
            }

            await MineBlocks();

            var fxReceiver = new DefaultStoreFixture(memory: true);
            var receiverChain = new BlockChain<DumbAction>(
                policy, fxReceiver.Store, fxReceiver.GenesisBlock);

            var minerSwarm = CreateSwarm(minerChain);
            var receiverSwarm = CreateSwarm(receiverChain);

            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                var trustedStateValidators = new[] { minerSwarm.Address }.ToImmutableHashSet();

                var t = MineBlocks();
                await receiverSwarm.PreloadAsync(trustedStateValidators: trustedStateValidators);

                await t;

                var minerStateRefs = minerChain.Store
                    .ListAllStateReferences(minerChain.Id, 0, receiverChain.Tip.Index)
                    .FirstOrDefault().Value;

                var receiverStateRefs = receiverChain.Store
                    .ListAllStateReferences(receiverChain.Id, 0, receiverChain.Tip.Index)
                    .FirstOrDefault().Value;

                Assert.Equal(receiverChain.Count, receiverStateRefs.Count + 1);
                _logger.CompareBothChains(
                    LogEventLevel.Verbose,
                    "minerChain",
                    minerChain,
                    "receiverChain",
                    receiverChain
                );
                _logger.Verbose(
                    "minerStateRefs = {@minerStateRefs}",
                    minerStateRefs.Select(s => s.ToString())
                );
                _logger.Verbose(
                    "receiverStateRefs = {@receiverStateRefs}",
                    receiverStateRefs.Select(s => s.ToString())
                );
                Assert.Equal(minerStateRefs, receiverStateRefs);
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
                minerSwarm.Dispose();
                receiverSwarm.Dispose();
                fxMiner.Dispose();
                fxReceiver.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadSparseStateWithTrustedPeers()
        {
            // Test that preload states from chain where middle state reference is empty.
            // (filled with blocks with no any transactions at the middle of chain)
            var fx1 = new DefaultStoreFixture(memory: true);
            var fx2 = new DefaultStoreFixture(memory: true);
            var policy = new BlockPolicy<DumbAction>();

            BlockChain<DumbAction> minerChain =
                TestUtils.MakeBlockChain(policy, fx1.Store);
            BlockChain<DumbAction> receiverChain =
                TestUtils.MakeBlockChain(policy, fx2.Store);

            Swarm<DumbAction> minerSwarm = CreateSwarm(minerChain);
            Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverChain);

            minerSwarm.FindNextStatesChunkSize = 21;

            PrivateKey[] signers =
                Enumerable.Repeat(0, 10).Select(_ => new PrivateKey()).ToArray();
            Address[] targets = Enumerable.Repeat(0, signers.Length).Select(_
                => new PrivateKey().ToAddress()
            ).ToArray();
            (PrivateKey, Address)[] fixturePairs =
                signers.Zip(targets, ValueTuple.Create).ToArray();

            HashDigest<SHA256>? deepBlockHash = null;

            Address genesisTarget = new PrivateKey().ToAddress();
            minerChain.MakeTransaction(
                signers[0],
                new[] { new DumbAction(genesisTarget, "Genesis") }
            );
            Block<DumbAction> genesis = await minerChain.MineBlock(minerSwarm.Address);
            receiverChain.Append(
                genesis,
                DateTimeOffset.UtcNow,
                evaluateActions: true,
                renderActions: true);

            const int repeat = 10;
            for (int i = 0; i < repeat; i++)
            {
                if (i < 4 || i == repeat - 1)
                {
                    int j = 0;
                    Block<DumbAction> block = null;
                    foreach ((PrivateKey signer, Address target) in fixturePairs)
                    {
                        minerChain.MakeTransaction(
                            signer,
                            new[] { new DumbAction(target, $"Item{i}.{j}") }
                        );
                        block = await minerChain.MineBlock(minerSwarm.Address);
                        j++;
                    }

                    if (i == 0)
                    {
                        deepBlockHash = block?.Hash;
                    }
                }
                else
                {
                    await minerChain.MineBlock(minerSwarm.Address);
                }
            }

            Assert.NotNull(deepBlockHash);

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                IImmutableSet<Address> trustedPeers =
                    new[] { minerSwarm.Address }.ToImmutableHashSet();
                var downloadStates = new List<StateDownloadState>();
                int totalCount =
                    (int)Math.Ceiling((double)minerChain.Count /
                                      minerSwarm.FindNextStatesChunkSize);
                int currentCount = 0;
                var allProgressesReported = new AsyncAutoResetEvent();
                await receiverSwarm.PreloadAsync(
                    progress: new Progress<PreloadState>(state =>
                    {
                        if (state is StateDownloadState srds)
                        {
                            downloadStates.Add(srds);
                            currentCount++;

                            if (currentCount == totalCount)
                            {
                                allProgressesReported.Set();
                            }
                        }
                    }),
                    trustedStateValidators: trustedPeers);

                await allProgressesReported.WaitAsync();

                Assert.Empty(DumbAction.RenderRecords.Value);
                Assert.Equal(minerChain.BlockHashes, receiverChain.BlockHashes);
                int i = 0;
                foreach (Address target in targets)
                {
                    foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                    {
                        var chainType = ReferenceEquals(chain, minerChain) ? "M" : "R";
                        IValue state = chain.GetState(
                            target,
                            stateCompleter: StateCompleters<DumbAction>.Reject
                        );
                        Assert.NotNull(state);
                        Assert.Equal(
                            $"({chainType}) Item0.{i},Item1.{i},Item2.{i},Item3.{i},Item9.{i}",
                            $"({chainType}) {((Text)state).Value}"
                        );
                    }

                    IValue TryToGetDeepStates() => receiverChain.GetState(
                        target,
                        deepBlockHash,
                        StateCompleters<DumbAction>.Reject
                    );

                    Assert.Throws<IncompleteBlockStatesException>(
                        () => TryToGetDeepStates()
                    );

                    i++;
                }

                foreach (BlockChain<DumbAction> chain in new[] { minerChain, receiverChain })
                {
                    IValue state = chain.GetState(
                        genesisTarget,
                        stateCompleter: StateCompleters<DumbAction>.Reject
                    );
                    Assert.NotNull(state);
                    Assert.Equal((Text)"Genesis", state);
                }

                Assert.Equal(totalCount, downloadStates.Count);
                i = 1;
                foreach (StateDownloadState state in downloadStates)
                {
                    Assert.Equal(4, state.CurrentPhase);
                    Assert.Equal(totalCount, state.TotalIterationCount);
                    Assert.Equal(i++, state.ReceivedIterationCount);
                }
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);

                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                fx1.Dispose();
                fx2.Dispose();

                minerSwarm.Dispose();
                receiverSwarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadWithDifferenctFindNextStatesChunkSize()
        {
            var blockHashes = new List<HashDigest<SHA256>>();

            Swarm<DumbAction> swarm0 = _swarms[0];
            Swarm<DumbAction> swarm1 = _swarms[1];
            Swarm<DumbAction> swarm2 = _swarms[2];

            BlockChain<DumbAction> chain0 = _blockchains[0];
            BlockChain<DumbAction> chain1 = _blockchains[1];
            BlockChain<DumbAction> chain2 = _blockchains[2];

            swarm0.FindNextStatesChunkSize = 4;
            swarm1.FindNextStatesChunkSize = 3;

            blockHashes.Add(chain0.Genesis.Hash);
            const int repeat = 14;
            for (int i = 0; i < repeat; i++)
            {
                Block<DumbAction> block = await chain0.MineBlock(swarm0.Address);
                blockHashes.Add(block.Hash);
            }

            try
            {
                await StartAsync(swarm0);
                await StartAsync(swarm1);
                await StartAsync(swarm2);

                await swarm1.AddPeersAsync(new[] { swarm0.AsPeer }, null);
                await swarm1.PreloadAsync(
                    trustedStateValidators: new[] { swarm0.Address }.ToImmutableHashSet());

                Assert.Equal(chain0.BlockHashes, chain1.BlockHashes);

                foreach (BlockChain<DumbAction> chain in new[] { chain0, chain1 })
                {
                    IValue blockActionState = chain.GetState(
                        swarm0.Address,
                        stateCompleter: StateCompleters<DumbAction>.Reject
                    );
                    Assert.NotNull(blockActionState);
                    Assert.Equal((Integer)repeat, (Integer)blockActionState);
                }

                for (int i = 1; i <= repeat; i++)
                {
                    if (i == 3 || i == 7 || i == 11 || i == repeat)
                    {
                        var state = chain1.GetState(
                            swarm0.Address,
                            blockHashes[i],
                            stateCompleter: StateCompleters<DumbAction>.Reject
                        );
                        Assert.NotNull(state);
                        Assert.Equal((Integer)i, (Integer)state);
                    }
                    else
                    {
                        Assert.Throws<IncompleteBlockStatesException>(() =>
                        {
                            chain1.GetState(
                                swarm0.Address,
                                blockHashes[i],
                                stateCompleter: StateCompleters<DumbAction>.Reject
                            );
                        });
                    }
                }

                await swarm2.AddPeersAsync(new[] { swarm1.AsPeer }, null);
                await swarm2.PreloadAsync(
                    trustedStateValidators: new[] { swarm1.Address }.ToImmutableHashSet());

                Assert.Equal(chain1.BlockHashes, chain2.BlockHashes);

                foreach (BlockChain<DumbAction> chain in new[] { chain1, chain2 })
                {
                    IValue blockActionState = chain.GetState(
                        swarm0.Address,
                        stateCompleter: StateCompleters<DumbAction>.Reject
                    );
                    Assert.NotNull(blockActionState);
                    Assert.Equal((Integer)repeat, (Integer)blockActionState);
                }

                for (int i = 1; i <= repeat; i++)
                {
                    if (i == 11 || i == repeat)
                    {
                        var state = chain2.GetState(
                            swarm0.Address,
                            blockHashes[i],
                            StateCompleters<DumbAction>.Reject
                        );
                        Assert.NotNull(state);
                        Assert.Equal((Integer)i, (Integer)state);
                    }
                    else
                    {
                        Assert.Throws<IncompleteBlockStatesException>(() =>
                        {
                            chain2.GetState(
                                swarm0.Address,
                                blockHashes[i],
                                StateCompleters<DumbAction>.Reject
                            );
                        });
                    }
                }
            }
            finally
            {
                await StopAsync(swarm0);
                await StopAsync(swarm1);
            }
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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

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
                await receiverSwarm.PreloadAsync(
                    trustedStateValidators: new[] { minerSwarm.Address }.ToImmutableHashSet(),
                    cancellationToken: cts.Token
                );
                canceled = false;
                Log.Logger.Debug($"{nameof(receiverSwarm.PreloadAsync)}() normally finished.");
            }
            catch (OperationCanceledException)
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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

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

        [Fact]
        public async Task PreloadAfterReorg()
        {
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 25))
            {
                Block<DumbAction> block = await minerChain.MineBlock(_fx1.Address1);
                receiverChain.Append(block);
            }

            var receiverForked = receiverChain.Fork(receiverChain[5].Hash);
            foreach (int i in Enumerable.Range(0, 20))
            {
                await receiverForked.MineBlock(_fx1.Address1);
            }

            receiverChain.Swap(receiverForked, false);

            foreach (int i in Enumerable.Range(0, 1))
            {
                await minerChain.MineBlock(_fx1.Address1);
            }

            minerSwarm.FindNextHashesChunkSize = 1;
            try
            {
                await StartAsync(minerSwarm);
                await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                await receiverSwarm.PreloadAsync(
                    trustedStateValidators: new[] { minerSwarm.Address }.ToImmutableHashSet()
                );
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
            Swarm<DumbAction> minerSwarm = _swarms[0];
            Swarm<DumbAction> receiverSwarm = _swarms[1];
            Log.Logger.Information("Miner:    {0}", minerSwarm.Address);
            Log.Logger.Information("Receiver: {0}", receiverSwarm.Address);

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

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
            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            receiverChain = receiverChain.Fork(receiverChain.Genesis.Hash);
            Block<DumbAction>[] blocks =
                (await MakeFixtureBlocksForPreloadAsyncCancellationTest()).Item2;

            foreach (Block<DumbAction> block in blocks)
            {
                minerChain.Append(block);
            }

            using (Swarm<DumbAction> minerSwarm = CreateSwarm(minerChain))
            using (Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverChain))
            {
                try
                {
                    await StartAsync(minerSwarm);
                    await receiverSwarm.AddPeersAsync(new[] { minerSwarm.AsPeer }, null);
                    await receiverSwarm.PreloadAsync(
                        trustedStateValidators: new[] { minerSwarm.Address }.ToImmutableHashSet()
                    );
                }
                finally
                {
                    await StopAsync(minerSwarm);
                }

                // Check PreloadAsync() preserves chain that forked before preloading.
                Assert.Equal(2, receiverChain.Store.ListChainIds().Count());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PreloadFromTheMostDifficultChain()
        {
            BlockChain<DumbAction> minerChain1 = _blockchains[0];
            BlockChain<DumbAction> minerChain2 = _blockchains[1];
            BlockChain<DumbAction> receiverChain = _blockchains[2];

            await minerChain1.MineBlock(_fx1.Address1);
            await minerChain1.MineBlock(_fx1.Address1);

            long nextDifficulty = (long)minerChain1.Tip.TotalDifficulty +
                                  minerChain2.Policy.GetNextBlockDifficulty(minerChain2);
            var block = TestUtils.MineNext(minerChain2.Tip, difficulty: nextDifficulty);
            minerChain2.Append(block);

            Assert.True(minerChain1.Count > minerChain2.Count);
            Assert.True(minerChain1.Tip.TotalDifficulty < minerChain2.Tip.TotalDifficulty);

            using (Swarm<DumbAction> minerSwarm1 = CreateSwarm(minerChain1))
            using (Swarm<DumbAction> minerSwarm2 = CreateSwarm(minerChain2))
            using (Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverChain))
            {
                try
                {
                    await StartAsync(minerSwarm1);
                    await StartAsync(minerSwarm2);
                    await receiverSwarm.AddPeersAsync(
                        new[] { minerSwarm1.AsPeer, minerSwarm2.AsPeer },
                        null);
                    await receiverSwarm.PreloadAsync(
                        trustedStateValidators: new[] { minerSwarm1.Address, minerSwarm2.Address }
                            .ToImmutableHashSet()
                    );
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
        }

        [Fact(Timeout = Timeout)]
        public async Task ReorgWhilePreloadAsync()
        {
            BlockChain<DumbAction> seedChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];
            for (int i = 0; i < 10; i++)
            {
                await seedChain.MineBlock(_fx1.Address1);
            }

            var progress = new Progress<PreloadState>(state =>
            {
                _logger.Information("Received a progress event: {@State}", state);

                if (state is BlockDownloadState blockDownloadState
                    && blockDownloadState.ReceivedBlockHash.Equals(seedChain.Tip.Hash))
                {
                    var forked = seedChain.Fork(seedChain[9].Hash);
                    seedChain.Swap(forked, false);
                    seedChain.MineBlock(_fx1.Address1).Wait();
                    seedChain.MineBlock(_fx1.Address1).Wait();
                }
            });

            var seed = _swarms[0];
            var receiver = _swarms[1];

            try
            {
                await StartAsync(seed);
                await BootstrapAsync(receiver, seed.AsPeer);
                await receiver.PreloadAsync(
                    progress: progress,
                    trustedStateValidators: new[] { seed.Address }.ToImmutableHashSet());
                Assert.Equal(seedChain.Tip, receiverChain.Tip);
            }
            finally
            {
                await StopAsync(seed);
            }
        }
    }
}
