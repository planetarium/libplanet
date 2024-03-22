#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Serilog;
using Serilog.Events;
using xRetry;
using Xunit;
#if NETFRAMEWORK && (NET47 || NET471)
using static Libplanet.Tests.HashSetExtensions;
#endif
using static Libplanet.Tests.LoggerExtensions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Net.Tests
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlock()
        {
            const int numBlocks = 5;
            var policy = new NullBlockPolicy();
            var genesis = new MemoryStoreFixture(policy.BlockAction).GenesisBlock;

            var swarmA = await CreateSwarm(
                privateKey: new PrivateKey(),
                policy: policy,
                genesis: genesis).ConfigureAwait(false);
            var swarmB = await CreateSwarm(
                privateKey: new PrivateKey(),
                policy: policy,
                genesis: genesis).ConfigureAwait(false);
            var chainA = swarmA.BlockChain;
            var chainB = swarmB.BlockChain;

            foreach (int i in Enumerable.Range(0, numBlocks))
            {
                var block = chainA.ProposeBlock(
                    new PrivateKey(), TestUtils.CreateBlockCommit(chainA.Tip));
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Assert.Equal(numBlocks, chainA.Tip.Index);
            Assert.NotEqual(chainA.Tip, chainB.Tip);
            Assert.NotNull(chainA.GetBlockCommit(chainA.Tip.Hash));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                swarmA.BroadcastBlock(chainA.Tip);
                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainA.Tip, chainB.Tip);
                Assert.Equal(
                    chainA.GetBlockCommit(chainA.Tip.Hash),
                    chainB.GetBlockCommit(chainB.Tip.Hash));
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockToReconnectedPeer()
        {
            var miner = new PrivateKey();
            var policy = new NullBlockPolicy();
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var minerChain = MakeBlockChain(
                policy, fx.Store, fx.StateStore, new SingleActionLoader(typeof(DumbAction)));
            foreach (int i in Enumerable.Range(0, 10))
            {
                Block block = minerChain.ProposeBlock(
                    miner, CreateBlockCommit(minerChain.Tip));
                minerChain.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Swarm seed = await CreateSwarm(
                miner,
                policy: policy,
                genesis: minerChain.Genesis
            ).ConfigureAwait(false);
            BlockChain seedChain = seed.BlockChain;

            var privateKey = new PrivateKey();
            Swarm swarmA = await CreateSwarm(
                privateKey: privateKey,
                policy: policy,
                genesis: minerChain.Genesis
            ).ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm(
                privateKey: privateKey,
                policy: policy,
                genesis: minerChain.Genesis
            ).ConfigureAwait(false);

            foreach (BlockHash blockHash in minerChain.BlockHashes.Skip(1).Take(4))
            {
                seedChain.Append(
                    minerChain[blockHash],
                    TestUtils.CreateBlockCommit(minerChain[blockHash]));
            }

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                Assert.Equal(swarmA.AsPeer.Address, swarmB.AsPeer.Address);
                Assert.Equal(swarmA.AsPeer.PublicIPAddress, swarmB.AsPeer.PublicIPAddress);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await StopAsync(swarmA);
                await seed.PeerDiscovery.RefreshTableAsync(
                    TimeSpan.Zero,
                    default);

                Assert.DoesNotContain(swarmA.AsPeer, seed.Peers);

                foreach (BlockHash blockHash in minerChain.BlockHashes.Skip(5))
                {
                    seedChain.Append(
                        minerChain[blockHash],
                        TestUtils.CreateBlockCommit(minerChain[blockHash]));
                }

                await swarmB.AddPeersAsync(new[] { seed.AsPeer }, null);

                // This is added for context switching.
                await Task.Delay(100);

                Assert.Contains(swarmB.AsPeer, seed.Peers);
                Assert.Contains(seed.AsPeer, swarmB.Peers);

                seed.BroadcastBlock(seedChain.Tip);

                await swarmB.BlockAppended.WaitAsync();

                Assert.NotEqual(seedChain.BlockHashes, swarmA.BlockChain.BlockHashes);
                Assert.Equal(seedChain.BlockHashes, swarmB.BlockChain.BlockHashes);
            }
            finally
            {
                CleaningSwarm(seed);
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastIgnoreFromDifferentGenesisHash()
        {
            var receiverKey = new PrivateKey();
            Swarm receiverSwarm = await CreateSwarm(receiverKey).ConfigureAwait(false);
            BlockChain receiverChain = receiverSwarm.BlockChain;
            var seedStateStore = new TrieStateStore(new MemoryKeyValueStore());
            IBlockPolicy policy = receiverChain.Policy;
            BlockChain seedChain = MakeBlockChain(
                policy,
                new MemoryStore(),
                seedStateStore,
                new SingleActionLoader(typeof(DumbAction)),
                privateKey: receiverKey);
            var seedMiner = new PrivateKey();
            Swarm seedSwarm =
                await CreateSwarm(seedChain, seedMiner).ConfigureAwait(false);
            try
            {
                await StartAsync(receiverSwarm);
                await StartAsync(seedSwarm);

                await receiverSwarm.AddPeersAsync(new[] { seedSwarm.AsPeer }, null);
                Block block = seedChain.ProposeBlock(seedMiner);
                seedChain.Append(block, TestUtils.CreateBlockCommit(block));
                seedSwarm.BroadcastBlock(block);
                Assert.NotEqual(seedChain.Tip, receiverChain.Tip);
            }
            finally
            {
                CleaningSwarm(seedSwarm);
                CleaningSwarm(receiverSwarm);
            }
        }

        [RetryFact(10, Timeout = Timeout)]
        public async Task BroadcastWhileMining()
        {
            var minerA = new PrivateKey();
            var minerB = new PrivateKey();
            Swarm a = await CreateSwarm(minerA).ConfigureAwait(false);
            Swarm b = await CreateSwarm(minerB).ConfigureAwait(false);

            BlockChain chainA = a.BlockChain;
            BlockChain chainB = b.BlockChain;

            Task CreateMiner(
                PrivateKey miner,
                Swarm swarm,
                BlockChain chain,
                int delay,
                CancellationToken cancellationToken
            )
            {
                return Task.Run(async () =>
                {
                    while (!cancellationToken.IsCancellationRequested)
                    {
                        try
                        {
                            var block = chain.ProposeBlock(
                                miner, CreateBlockCommit(chain.Tip));
                            chain.Append(block, TestUtils.CreateBlockCommit(block));

                            Log.Debug(
                                "Block mined. [Node: {0}, Block: {1}]",
                                swarm.Address,
                                block.Hash);
                            swarm.BroadcastBlock(block);
                        }
                        catch (OperationCanceledException)
                        {
                            continue;
                        }
                        finally
                        {
                            await Task.Delay(delay);
                        }
                    }

                    swarm.BroadcastBlock(chain[-1]);
                    Log.Debug("Mining complete");
                });
            }

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await a.AddPeersAsync(new[] { b.AsPeer }, null);

                var minerCanceller = new CancellationTokenSource();
                Task miningA = CreateMiner(minerA, a, chainA, 5000, minerCanceller.Token);
                Task miningB = CreateMiner(minerB, b, chainB, 8000, minerCanceller.Token);

                await Task.Delay(10000);
                minerCanceller.Cancel();

                await Task.WhenAll(miningA, miningB);

                await Task.Delay(5000);
            }
            finally
            {
                CleaningSwarm(a);
                CleaningSwarm(b);
            }

            _logger.CompareBothChains(LogEventLevel.Debug, "A", chainA, "B", chainB);
            Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTx()
        {
            var minerA = new PrivateKey();
            Swarm swarmA = await CreateSwarm(minerA).ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmC = await CreateSwarm().ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;
            BlockChain chainC = swarmC.BlockChain;

            Transaction tx = Transaction.Create(
                0,
                new PrivateKey(),
                chainA.Genesis.Hash,
                new DumbAction[] { }.ToPlainValues()
            );

            chainA.StageTransaction(tx);
            Block block = chainA.ProposeBlock(minerA);
            chainA.Append(block, TestUtils.CreateBlockCommit(block));

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);
                await swarmC.AddPeersAsync(new[] { swarmA.AsPeer }, null);

                swarmA.BroadcastTxs(new[] { tx });

                await swarmC.TxReceived.WaitAsync();
                await swarmB.TxReceived.WaitAsync();

                Assert.Equal(tx, chainB.GetTransaction(tx.Id));
                Assert.Equal(tx, chainC.GetTransaction(tx.Id));
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxWhileMining()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            var minerC = new PrivateKey();
            Swarm swarmC = await CreateSwarm(minerC).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainC = swarmC.BlockChain;

            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            var txCount = 10;

            var txs = Enumerable.Range(0, txCount).Select(_ =>
                    chainA.MakeTransaction(
                        new PrivateKey(),
                        new[] { new DumbAction(address, "foo") }))
                .ToArray();

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmC);

                await swarmC.AddPeersAsync(new[] { swarmA.AsPeer }, null);
                Assert.Contains(swarmC.AsPeer, swarmA.Peers);
                Assert.Contains(swarmA.AsPeer, swarmC.Peers);

                Task miningTask = Task.Run(() =>
                {
                    for (var i = 0; i < 10; i++)
                    {
                        Block block = chainC.ProposeBlock(
                            minerC, CreateBlockCommit(chainC.Tip));
                        chainC.Append(block, TestUtils.CreateBlockCommit(block));
                    }
                });

                Task txReceivedTask = swarmC.TxReceived.WaitAsync();

                for (var i = 0; i < 100; i++)
                {
                    swarmA.BroadcastTxs(txs);
                }

                await txReceivedTask;
                await miningTask;

                for (var i = 0; i < txCount; i++)
                {
                    Assert.NotNull(chainC.GetTransaction(txs[i].Id));
                }
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxAsync()
        {
            Swarm swarmA = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm().ConfigureAwait(false);
            Swarm swarmC = await CreateSwarm().ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;
            BlockChain chainC = swarmC.BlockChain;

            Transaction tx = Transaction.Create(
                0,
                new PrivateKey(),
                chainA.Genesis.Hash,
                new DumbAction[] { }.ToPlainValues()
            );

            chainA.StageTransaction(tx);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                // Broadcast tx swarmA to swarmB
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(tx, chainB.GetTransaction(tx.Id));

                CleaningSwarm(swarmA);

                // Re-Broadcast received tx swarmB to swarmC
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);

                await swarmC.TxReceived.WaitAsync();
                Assert.Equal(tx, chainC.GetTransaction(tx.Id));
            }
            finally
            {
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [RetryFact(Timeout = Timeout)]
        public async Task BroadcastTxAsyncMany()
        {
            int size = 5;

            var policy = new BlockPolicy();
            StoreFixture[] fxs = new StoreFixture[size];
            BlockChain[] blockChains = new BlockChain[size];
            Swarm[] swarms = new Swarm[size];

            for (int i = 0; i < size; i++)
            {
                fxs[i] = new MemoryStoreFixture();
                blockChains[i] = BlockChain.Create(
                    policy,
                    new VolatileStagePolicy(),
                    fxs[i].Store,
                    fxs[i].StateStore,
                    fxs[i].GenesisBlock,
                    new ActionEvaluator(
                        policyBlockActionGetter: _ => policy.BlockAction,
                        stateStore: fxs[i].StateStore,
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
                swarms[i] = await CreateSwarm(blockChains[i]).ConfigureAwait(false);
            }

            Transaction tx = Transaction.Create(
                0,
                new PrivateKey(),
                blockChains[size - 1].Genesis.Hash,
                new DumbAction[] { }.ToPlainValues()
            );

            blockChains[size - 1].StageTransaction(tx);

            try
            {
                for (int i = 0; i < size; i++)
                {
                    await StartAsync(swarms[i]);
                }

                List<Task> tasks = new List<Task>();
                for (int i = 1; i < size; i++)
                {
                    await BootstrapAsync(swarms[i], swarms[0].AsPeer);
                }

                for (int i = 0; i < size - 1; i++)
                {
                    tasks.Add(swarms[i].TxReceived.WaitAsync());
                }

                await Task.WhenAll(tasks);

                for (int i = 0; i < size; i++)
                {
                    Assert.Equal(tx, blockChains[i].GetTransaction(tx.Id));
                }
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    CleaningSwarm(swarms[i]);
                    fxs[i].Dispose();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotRebroadcastTxsWithLowerNonce()
        {
            // If the bucket stored peers are the same, the block may not propagate,
            // so specify private keys to make the buckets different.
            PrivateKey keyA = PrivateKey.FromString(
                "8568eb6f287afedece2c7b918471183db0451e1a61535bb0381cfdf95b85df20");
            PrivateKey keyB = PrivateKey.FromString(
                "c34f7498befcc39a14f03b37833f6c7bb78310f1243616524eda70e078b8313c");
            PrivateKey keyC = PrivateKey.FromString(
                "941bc2edfab840d79914d80fe3b30840628ac37a5d812d7f922b5d2405a223d3");

            var autoBroadcastDisabled = new SwarmOptions
            {
                BlockBroadcastInterval = TimeSpan.FromSeconds(Timeout),
                TxBroadcastInterval = TimeSpan.FromSeconds(Timeout),
            };

            var swarmA =
                await CreateSwarm(keyA, options: autoBroadcastDisabled).ConfigureAwait(false);
            var swarmB =
                await CreateSwarm(keyB, options: autoBroadcastDisabled).ConfigureAwait(false);
            var swarmC =
                await CreateSwarm(keyC, options: autoBroadcastDisabled).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;
            BlockChain chainC = swarmC.BlockChain;

            var privateKey = new PrivateKey();

            try
            {
                var tx1 = swarmA.BlockChain.MakeTransaction(
                    privateKey: privateKey,
                    actions: new DumbAction[] { });
                var tx2 = swarmA.BlockChain.MakeTransaction(
                    privateKey: privateKey,
                    actions: new DumbAction[] { });
                Assert.Equal(0, tx1.Nonce);
                Assert.Equal(1, tx2.Nonce);

                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                swarmA.BroadcastTxs(new[] { tx1, tx2 });
                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(
                    new HashSet<TxId> { tx1.Id, tx2.Id },
                    chainB.GetStagedTransactionIds().ToHashSet());
                swarmA.RoutingTable.RemovePeer(swarmB.AsPeer);
                swarmB.RoutingTable.RemovePeer(swarmA.AsPeer);

                chainA.UnstageTransaction(tx2);
                Assert.Equal(1, chainA.GetNextTxNonce(privateKey.Address));

                await StopAsync(swarmA);
                await StopAsync(swarmB);

                swarmA.RoutingTable.RemovePeer(swarmB.AsPeer);
                swarmB.RoutingTable.RemovePeer(swarmA.AsPeer);
                Assert.Empty(swarmA.Peers);
                Assert.Empty(swarmB.Peers);

                await StartAsync(swarmA);
                await StartAsync(swarmB);

                Block block = chainB.ProposeBlock(keyB);
                chainB.Append(block, TestUtils.CreateBlockCommit(block));

                var tx3 = chainA.MakeTransaction(
                    privateKey: privateKey,
                    actions: new DumbAction[] { });
                var tx4 = chainA.MakeTransaction(
                    privateKey: privateKey,
                    actions: new DumbAction[] { });
                Assert.Equal(1, tx3.Nonce);
                Assert.Equal(2, tx4.Nonce);

                await StartAsync(swarmC);
                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);

                swarmA.BroadcastTxs(new[] { tx3, tx4 });
                await swarmB.TxReceived.WaitAsync();

                // SwarmB receives tx3 and is staged, but policy filters it.
                Assert.DoesNotContain(tx3.Id, chainB.GetStagedTransactionIds());
                Assert.Contains(
                    tx3.Id,
                    chainB.StagePolicy.Iterate(chainB, filtered: false).Select(tx => tx.Id));
                Assert.Contains(tx4.Id, chainB.GetStagedTransactionIds());

                await swarmC.TxReceived.WaitAsync();
                // SwarmC can not receive tx3 because SwarmB does not rebroadcast it.
                Assert.DoesNotContain(tx3.Id, chainC.GetStagedTransactionIds());
                Assert.DoesNotContain(
                    tx3.Id,
                    chainC.StagePolicy.Iterate(chainC, filtered: false).Select(tx => tx.Id));
                Assert.Contains(tx4.Id, chainC.GetStagedTransactionIds());
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanBroadcastBlock()
        {
            // If the bucket stored peers are the same, the block may not propagate,
            // so specify private keys to make the buckets different.
            PrivateKey keyA = PrivateKey.FromString(
                "8568eb6f287afedece2c7b918471183db0451e1a61535bb0381cfdf95b85df20");
            PrivateKey keyB = PrivateKey.FromString(
                "c34f7498befcc39a14f03b37833f6c7bb78310f1243616524eda70e078b8313c");
            PrivateKey keyC = PrivateKey.FromString(
                "941bc2edfab840d79914d80fe3b30840628ac37a5d812d7f922b5d2405a223d3");

            var swarmA = await CreateSwarm(keyA).ConfigureAwait(false);
            var swarmB = await CreateSwarm(keyB).ConfigureAwait(false);
            var swarmC = await CreateSwarm(keyC).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;
            BlockChain chainC = swarmC.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block block = chainA.ProposeBlock(
                    keyA, CreateBlockCommit(chainA.Tip));
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                Block block = chainB.ProposeBlock(
                    keyB, CreateBlockCommit(chainB.Tip));
                chainB.Append(block, TestUtils.CreateBlockCommit(block));
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                swarmB.BroadcastBlock(chainB[-1]);

                // chainA ignores block header received because its index is shorter.
                await swarmA.BlockHeaderReceived.WaitAsync();
                await swarmC.BlockAppended.WaitAsync();
                Assert.False(swarmA.BlockAppended.IsSet);

                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA
                Assert.NotEqual(chainB, chainA);

                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();
                await swarmC.BlockAppended.WaitAsync();

                Log.Debug("Compare chainA and chainB");
                Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
                Log.Debug("Compare chainA and chainC");
                Assert.Equal(chainA.BlockHashes, chainC.BlockHashes);
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithSkip()
        {
            var policy = new BlockPolicy(new MinerReward(1));
            var fx1 = new MemoryStoreFixture();
            var blockChain = MakeBlockChain(
                policy, fx1.Store, fx1.StateStore, new SingleActionLoader(typeof(DumbAction)));
            var privateKey = new PrivateKey();
            var minerSwarm =
                await CreateSwarm(blockChain, privateKey).ConfigureAwait(false);
            var fx2 = new MemoryStoreFixture();
            var receiverRenderer = new RecordingActionRenderer();
            var loggedRenderer = new LoggedActionRenderer(
                receiverRenderer,
                _logger);
            var receiverChain = MakeBlockChain(
                policy,
                fx2.Store,
                fx2.StateStore,
                new SingleActionLoader(typeof(DumbAction)),
                renderers: new[] { loggedRenderer });
            Swarm receiverSwarm =
                await CreateSwarm(receiverChain).ConfigureAwait(false);

            int renderCount = 0;

            receiverRenderer.RenderEventHandler += (_, a) => renderCount += IsDumbAction(a) ? 1 : 0;

            Transaction[] transactions =
            {
                fx1.MakeTransaction(
                    new[]
                    {
                        new DumbAction(fx1.Address2, "foo"),
                        new DumbAction(fx1.Address2, "bar"),
                    },
                    timestamp: DateTimeOffset.MinValue,
                    nonce: 0,
                    privateKey: privateKey),
                fx1.MakeTransaction(
                    new[]
                    {
                        new DumbAction(fx1.Address2, "baz"),
                        new DumbAction(fx1.Address2, "qux"),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(5),
                    nonce: 1,
                    privateKey: privateKey),
            };

            Block block1 = blockChain.ProposeBlock(
                GenesisProposer,
                new[] { transactions[0] }.ToImmutableList(),
                TestUtils.CreateBlockCommit(blockChain.Tip),
                new LotMetadata(blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof)
                    .Prove(GenesisProposer).Proof);
            blockChain.Append(block1, TestUtils.CreateBlockCommit(block1), true);
            Block block2 = blockChain.ProposeBlock(
                GenesisProposer,
                new[] { transactions[1] }.ToImmutableList(),
                CreateBlockCommit(blockChain.Tip),
                new LotMetadata(blockChain.Tip.Index + 1, 0, blockChain.Tip.Proof)
                    .Prove(GenesisProposer).Proof);
            blockChain.Append(block2, TestUtils.CreateBlockCommit(block2), true);

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await BootstrapAsync(receiverSwarm, minerSwarm.AsPeer);

                minerSwarm.BroadcastBlock(block2);

                await AssertThatEventually(
                    () => receiverChain.Tip.Equals(block2),
                    5_000,
                    1_000
                );
                Assert.Equal(3, receiverChain.Count);
                Assert.Equal(4, renderCount);
            }
            finally
            {
                CleaningSwarm(minerSwarm);
                CleaningSwarm(receiverSwarm);
                fx1.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithoutGenesis()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            Swarm swarmA = await CreateSwarm(keyA).ConfigureAwait(false);
            Swarm swarmB = await CreateSwarm(keyB).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                var block = chainA.ProposeBlock(
                    keyA, CreateBlockCommit(chainA.Tip));
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);

                block = chainA.ProposeBlock(
                    keyB, CreateBlockCommit(chainA.Tip));
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreExistingBlocks()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            Swarm swarmA = await CreateSwarm(keyA).ConfigureAwait(false);
            Swarm swarmB =
                await CreateSwarm(keyB, genesis: swarmA.BlockChain.Genesis).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;

            var block = chainA.ProposeBlock(
                keyA, CreateBlockCommit(chainA.Tip));
            BlockCommit blockCommit = TestUtils.CreateBlockCommit(block);
            chainA.Append(block, blockCommit);
            chainB.Append(block, blockCommit);

            foreach (int i in Enumerable.Range(0, 3))
            {
                block = chainA.ProposeBlock(
                    keyA, CreateBlockCommit(chainA.Tip));
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                swarmA.BroadcastBlock(chainA[-1]);
                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);

                CancellationTokenSource cts = new CancellationTokenSource();
                swarmA.BroadcastBlock(chainA[-1]);
                Task t = swarmB.BlockAppended.WaitAsync(cts.Token);

                // Actually, previous code may pass this test if message is
                // delayed over 5 seconds.
                await Task.Delay(5000);
                Assert.False(t.IsCompleted);

                cts.Cancel();
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PullBlocks()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();

            var swarmA = await CreateSwarm(keyA).ConfigureAwait(false);
            var swarmB = await CreateSwarm(keyB).ConfigureAwait(false);
            var swarmC = await CreateSwarm(keyC).ConfigureAwait(false);

            BlockChain chainA = swarmA.BlockChain;
            BlockChain chainB = swarmB.BlockChain;
            BlockChain chainC = swarmC.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                Block block = chainA.ProposeBlock(
                    keyA, CreateBlockCommit(chainA.Tip));
                chainA.Append(block, TestUtils.CreateBlockCommit(block));
            }

            Block chainATip = chainA.Tip;

            foreach (int i in Enumerable.Range(0, 5))
            {
                Block block = chainB.ProposeBlock(
                    keyB, CreateBlockCommit(chainB.Tip));
                chainB.Append(block, TestUtils.CreateBlockCommit(block));
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                Block block = chainC.ProposeBlock(
                    keyB, CreateBlockCommit(chainC.Tip));
                chainC.Append(block, TestUtils.CreateBlockCommit(block));
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                await swarmC.PullBlocksAsync(
                    TimeSpan.FromSeconds(5), int.MaxValue, int.MaxValue, null, default);
                await swarmC.BlockAppended.WaitAsync();
                Assert.Equal(chainC.Tip, chainATip);
            }
            finally
            {
                CleaningSwarm(swarmA);
                CleaningSwarm(swarmB);
                CleaningSwarm(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanFillWithInvalidTransaction()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            var swarm1 = await CreateSwarm().ConfigureAwait(false);
            var swarm2 = await CreateSwarm().ConfigureAwait(false);

            var tx1 = swarm2.BlockChain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(address, "foo") });

            var tx2 = swarm2.BlockChain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(address, "bar") });

            var tx3 = swarm2.BlockChain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(address, "quz") });

            var tx4 = Transaction.Create(
                4,
                privateKey,
                swarm1.BlockChain.Genesis.Hash,
                new[] { new DumbAction(address, "qux") }.ToPlainValues());

            try
            {
                await StartAsync(swarm1);
                await StartAsync(swarm2);
                await swarm1.AddPeersAsync(new[] { swarm2.AsPeer }, null);

                var transport = swarm1.Transport;
                var msg = new GetTxsMsg(new[] { tx1.Id, tx2.Id, tx3.Id, tx4.Id });
                var replies = (await transport.SendMessageAsync(
                    swarm2.AsPeer,
                    msg,
                    TimeSpan.FromSeconds(1),
                    4,
                    true,
                    default)).ToList();

                Assert.Equal(3, replies.Count);
                Assert.Equal(
                    new[] { tx1, tx2, tx3 }.ToHashSet(),
                    replies.Select(
                        m => Transaction.Deserialize(
                            ((TxMsg)m.Content).Payload)).ToHashSet());
            }
            finally
            {
                CleaningSwarm(swarm1);
                CleaningSwarm(swarm2);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task DoNotSpawnMultipleTaskForSinglePeer()
        {
            var key = new PrivateKey();
            var apv = new AppProtocolVersionOptions();
            Swarm receiver =
                await CreateSwarm(appProtocolVersionOptions: apv).ConfigureAwait(false);
            ITransport mockTransport = await NetMQTransport.Create(
                new PrivateKey(),
                apv,
                new HostOptions(
                    IPAddress.Loopback.ToString(),
                    Array.Empty<IceServer>()));
            int requestCount = 0;

            async Task MessageHandler(Message message)
            {
                _logger.Debug("Received message: {Content}", message);
                switch (message.Content)
                {
                    case PingMsg ping:
                        await mockTransport.ReplyMessageAsync(
                            new PongMsg(),
                            message.Identity,
                            default);
                        break;

                    case GetBlockHashesMsg gbhm:
                        requestCount++;
                        break;
                }
            }

            mockTransport.ProcessMessageHandler.Register(MessageHandler);

            Block block1 = ProposeNextBlock(
                receiver.BlockChain.Genesis,
                key,
                new Transaction[] { });
            Block block2 = ProposeNextBlock(
                block1,
                key,
                new Transaction[] { });

            try
            {
                await StartAsync(receiver);
                _ = mockTransport.StartAsync();
                await mockTransport.WaitForRunningAsync();

                // Send block header for block 1.
                var blockHeaderMsg1 = new BlockHeaderMsg(
                    receiver.BlockChain.Genesis.Hash,
                    block1.Header);
                await mockTransport.SendMessageAsync(
                    receiver.AsPeer,
                    blockHeaderMsg1,
                    TimeSpan.FromSeconds(5),
                    default);
                await receiver.BlockHeaderReceived.WaitAsync();

                // Wait until FillBlockAsync task has spawned block demand task.
                await Task.Delay(1000);

                // Re-send block header for block 1, make sure it does not spawn new task.
                await mockTransport.SendMessageAsync(
                    receiver.AsPeer,
                    blockHeaderMsg1,
                    TimeSpan.FromSeconds(5),
                    default);
                await receiver.BlockHeaderReceived.WaitAsync();
                await Task.Delay(1000);

                // Send block header for block 2, make sure it does not spawn new task.
                var blockHeaderMsg2 = new BlockHeaderMsg(
                    receiver.BlockChain.Genesis.Hash,
                    block2.Header);
                await mockTransport.SendMessageAsync(
                    receiver.AsPeer,
                    blockHeaderMsg2,
                    TimeSpan.FromSeconds(5),
                    default);
                await receiver.BlockHeaderReceived.WaitAsync();
                await Task.Delay(1000);

                Assert.Equal(1, requestCount);
            }
            finally
            {
                CleaningSwarm(receiver);
                await mockTransport.StopAsync(TimeSpan.FromMilliseconds(10));
                mockTransport.Dispose();
            }
        }
    }
}
