using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using Serilog.Events;
using xRetry;
using Xunit;

namespace Libplanet.Tests.Net
{
    public partial class SwarmTest
    {
        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockToReconnectedPeer()
        {
            var miner = new PrivateKey();
            var policy = new NullPolicy<DumbAction>();
            var fx = new MemoryStoreFixture(policy.BlockAction);
            var minerChain = TestUtils.MakeBlockChain(policy, fx.Store, fx.StateStore);
            foreach (int i in Enumerable.Range(0, 10))
            {
                await minerChain.MineBlock(miner);
            }

            Swarm<DumbAction> seed = CreateSwarm(
                miner,
                policy: policy,
                genesis: minerChain.Genesis
            );
            BlockChain<DumbAction> seedChain = seed.BlockChain;

            var privateKey = new PrivateKey();
            Swarm<DumbAction> swarmA = CreateSwarm(
                privateKey: privateKey,
                policy: policy,
                genesis: minerChain.Genesis
            );
            Swarm<DumbAction> swarmB = CreateSwarm(
                privateKey: privateKey,
                policy: policy,
                genesis: minerChain.Genesis
            );

            foreach (BlockHash blockHash in minerChain.BlockHashes.Skip(1).Take(4))
            {
                seedChain.Append(minerChain[blockHash]);
            }

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                Assert.Equal(swarmA.AsPeer, swarmB.AsPeer);

                await swarmA.AddPeersAsync(new[] { seed.AsPeer }, null);
                await StopAsync(swarmA);
                await seed.PeerDiscovery.RefreshTableAsync(
                    TimeSpan.Zero,
                    default(CancellationToken));

                Assert.DoesNotContain(swarmA.AsPeer, seed.Peers);

                foreach (BlockHash blockHash in minerChain.BlockHashes.Skip(5))
                {
                    seedChain.Append(minerChain[blockHash]);
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
                await StopAsync(seed);
                await StopAsync(swarmA);
                await StopAsync(swarmB);

                seed.Dispose();
                swarmA.Dispose();
                swarmB.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastIgnoreFromDifferentGenesisHash()
        {
            var receiverKey = new PrivateKey();
            Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverKey);
            BlockChain<DumbAction> receiverChain = receiverSwarm.BlockChain;
            var seedStateStore = new TrieStateStore(new MemoryKeyValueStore());
            IBlockPolicy<DumbAction> policy = receiverChain.Policy;
            Block<DumbAction> mismatchedGenesis = new BlockContent<DumbAction>
                {
                    PublicKey = receiverKey.PublicKey,
                    Timestamp = DateTimeOffset.MinValue,
                }
                .Mine(policy.GetHashAlgorithm(0))
                .Evaluate(receiverKey, policy.BlockAction, seedStateStore);
            BlockChain<DumbAction> seedChain = TestUtils.MakeBlockChain(
                policy,
                new MemoryStore(),
                seedStateStore,
                genesisBlock: mismatchedGenesis);
            var seedMiner = new PrivateKey();
            Swarm<DumbAction> seedSwarm = CreateSwarm(seedChain, seedMiner);
            try
            {
                await StartAsync(receiverSwarm);
                await StartAsync(seedSwarm);

                await receiverSwarm.AddPeersAsync(new[] { seedSwarm.AsPeer }, null);
                Block<DumbAction> block = await seedChain.MineBlock(seedMiner);
                seedSwarm.BroadcastBlock(block);
                while (receiverSwarm.Transport.MessageHistory
                    .Any(msg => msg is BlockHeaderMessage))
                {
                    await Task.Delay(100);
                }

                await Task.Delay(100);
                Assert.NotEqual(seedChain.Tip, receiverChain.Tip);
            }
            finally
            {
                await StopAsync(seedSwarm);
                await StopAsync(receiverSwarm);

                seedSwarm.Dispose();
            }
        }

        [RetryFact(10, Timeout = Timeout)]
        public async Task BroadcastWhileMining()
        {
            var minerA = new PrivateKey();
            var minerB = new PrivateKey();
            Swarm<DumbAction> a = CreateSwarm(minerA);
            Swarm<DumbAction> b = CreateSwarm(minerB);

            BlockChain<DumbAction> chainA = a.BlockChain;
            BlockChain<DumbAction> chainB = b.BlockChain;

            Task CreateMiner(
                PrivateKey miner,
                Swarm<DumbAction> swarm,
                BlockChain<DumbAction> chain,
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
                            var block = await chain.MineBlock(miner);

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
                    Log.Debug("Mining complete.");
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
                await StopAsync(a);
                await StopAsync(b);
            }

            _logger.CompareBothChains(LogEventLevel.Debug, "A", chainA, "B", chainB);
            Assert.Equal(chainA.BlockHashes, chainB.BlockHashes);
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTx()
        {
            var minerA = new PrivateKey();
            Swarm<DumbAction> swarmA = CreateSwarm(minerA);
            Swarm<DumbAction> swarmB = CreateSwarm();
            Swarm<DumbAction> swarmC = CreateSwarm();

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;
            BlockChain<DumbAction> chainC = swarmC.BlockChain;

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                chainA.Genesis.Hash,
                new DumbAction[] { }
            );

            chainA.StageTransaction(tx);
            await chainA.MineBlock(minerA);

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
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxWhileMining()
        {
            Swarm<DumbAction> swarmA = CreateSwarm();
            var minerC = new PrivateKey();
            Swarm<DumbAction> swarmC = CreateSwarm(minerC);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainC = swarmC.BlockChain;

            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
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

                for (var i = 0; i < 100; i++)
                {
                    swarmA.BroadcastTxs(txs);
                }

                var t = Task.Run(async () =>
                {
                    for (var i = 0; i < 10; i++)
                    {
                        await chainC.MineBlock(minerC);
                    }
                });

                while (!chainC.GetStagedTransactionIds().Any())
                {
                    await swarmC.TxReceived.WaitAsync();
                }

                await t;

                for (var i = 0; i < txCount; i++)
                {
                    Assert.NotNull(chainC.GetTransaction(txs[i].Id));
                }
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmC);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxAsync()
        {
            Swarm<DumbAction> swarmA = CreateSwarm();
            Swarm<DumbAction> swarmB = CreateSwarm();
            Swarm<DumbAction> swarmC = CreateSwarm();

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;
            BlockChain<DumbAction> chainC = swarmC.BlockChain;

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                chainA.Genesis.Hash,
                new DumbAction[] { }
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

                await StopAsync(swarmA);

                // Re-Broadcast received tx swarmB to swarmC
                await swarmB.AddPeersAsync(new[] { swarmC.AsPeer }, null);

                await swarmC.TxReceived.WaitAsync();
                Assert.Equal(tx, chainC.GetTransaction(tx.Id));
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);
            }
        }

        [RetryFact(Timeout = Timeout)]
        public async Task BroadcastTxAsyncMany()
        {
            int size = 5;

            var policy = new BlockPolicy<DumbAction>();
            StoreFixture[] fxs = new StoreFixture[size];
            BlockChain<DumbAction>[] blockChains = new BlockChain<DumbAction>[size];
            Swarm<DumbAction>[] swarms = new Swarm<DumbAction>[size];

            for (int i = 0; i < size; i++)
            {
                fxs[i] = new MemoryStoreFixture();
                blockChains[i] = new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    fxs[i].Store,
                    fxs[i].StateStore,
                    fxs[i].GenesisBlock
                );
                swarms[i] = CreateSwarm(blockChains[i]);
            }

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                blockChains[size - 1].Genesis.Hash,
                new DumbAction[] { }
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
                    await StopAsync(swarms[i]);
                    fxs[i].Dispose();
                    swarms[i].Dispose();
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

            var swarmA = CreateSwarm(keyA);
            var swarmB = CreateSwarm(keyB);
            var swarmC = CreateSwarm(keyC);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;
            BlockChain<DumbAction> chainC = swarmC.BlockChain;

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

                chainA.UnstageTransaction(tx2);
                Assert.Equal(1, chainA.GetNextTxNonce(privateKey.ToAddress()));
                swarmA.RoutingTable.RemovePeer((BoundPeer)swarmB.AsPeer);
                swarmB.RoutingTable.RemovePeer((BoundPeer)swarmA.AsPeer);
                Assert.Empty(swarmA.Peers);
                Assert.Empty(swarmB.Peers);
                await chainB.MineBlock(keyB);

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
                await swarmC.TxReceived.WaitAsync();
                Assert.DoesNotContain(tx3.Id, chainB.GetStagedTransactionIds());
                Assert.Contains(tx4.Id, chainB.GetStagedTransactionIds());
                // SwarmC can not receive tx3 because SwarmB does not rebroadcast it.
                Assert.DoesNotContain(tx3.Id, chainC.GetStagedTransactionIds());
                Assert.Contains(tx4.Id, chainC.GetStagedTransactionIds());
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);

                swarmA.Dispose();
                swarmB.Dispose();
                swarmC.Dispose();
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

            var swarmA = CreateSwarm(keyA);
            var swarmB = CreateSwarm(keyB);
            var swarmC = CreateSwarm(keyC);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;
            BlockChain<DumbAction> chainC = swarmC.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                await chainA.MineBlock(keyA);
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                await chainB.MineBlock(keyB);
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
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);

                swarmA.Dispose();
                swarmB.Dispose();
                swarmC.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithSkip()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var fx1 = new MemoryStoreFixture();
            var blockChain = TestUtils.MakeBlockChain(policy, fx1.Store, fx1.StateStore);
            var privateKey = new PrivateKey();
            var minerSwarm = CreateSwarm(blockChain, privateKey);
            var fx2 = new MemoryStoreFixture();
            var receiverRenderer = new RecordingActionRenderer<DumbAction>();
            var loggedRenderer = new LoggedActionRenderer<DumbAction>(
                receiverRenderer,
                _logger);
            var receiverChain = TestUtils.MakeBlockChain(
                policy,
                fx2.Store,
                fx2.StateStore,
                renderers: new[] { loggedRenderer });
            Swarm<DumbAction> receiverSwarm = CreateSwarm(receiverChain);

            int renderCount = 0;

            receiverRenderer.RenderEventHandler += (_, a) => renderCount += a is DumbAction ? 1 : 0;

            Transaction<DumbAction>[] transactions =
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

            Block<DumbAction> block1 = TestUtils.MineNext(
                blockChain.Genesis,
                policy.GetHashAlgorithm,
                new[] { transactions[0] },
                null,
                policy.GetNextBlockDifficulty(blockChain),
                miner: TestUtils.GenesisMiner.PublicKey
            ).Evaluate(TestUtils.GenesisMiner, blockChain);
            blockChain.Append(block1, true, true, false);
            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                policy.GetHashAlgorithm,
                new[] { transactions[1] },
                null,
                policy.GetNextBlockDifficulty(blockChain),
                miner: TestUtils.GenesisMiner.PublicKey
            ).Evaluate(TestUtils.GenesisMiner, blockChain);
            blockChain.Append(block2, true, true, false);

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await BootstrapAsync(receiverSwarm, minerSwarm.AsPeer);

                minerSwarm.BroadcastBlock(block2);

                await TestUtils.AssertThatEventually(
                    () => receiverChain.Tip.Equals(block2),
                    5_000
                );
                Assert.Equal(3, receiverChain.Count);
                Assert.Equal(4, renderCount);
            }
            finally
            {
                await StopAsync(minerSwarm);
                await StopAsync(receiverSwarm);
                fx1.Dispose();
                minerSwarm.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastBlockWithoutGenesis()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            Swarm<DumbAction> swarmA = CreateSwarm(keyA);
            Swarm<DumbAction> swarmB = CreateSwarm(keyB);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await BootstrapAsync(swarmB, swarmA.AsPeer);

                await chainA.MineBlock(keyA);
                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);

                await chainA.MineBlock(keyB);
                swarmA.BroadcastBlock(chainA[-1]);

                await swarmB.BlockAppended.WaitAsync();

                Assert.Equal(chainB.BlockHashes, chainA.BlockHashes);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task IgnoreExistingBlocks()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();

            Swarm<DumbAction> swarmA = CreateSwarm(keyA);
            Swarm<DumbAction> swarmB = CreateSwarm(keyB);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;

            Block<DumbAction> genesis = await chainA.MineBlock(keyA);
            chainB.Append(genesis);

            foreach (int i in Enumerable.Range(0, 3))
            {
                await chainA.MineBlock(keyA);
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
                await StopAsync(swarmA);
                await StopAsync(swarmB);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PullBlocks()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();

            var swarmA = CreateSwarm(keyA);
            var swarmB = CreateSwarm(keyB);
            var swarmC = CreateSwarm(keyC);

            BlockChain<DumbAction> chainA = swarmA.BlockChain;
            BlockChain<DumbAction> chainB = swarmB.BlockChain;
            BlockChain<DumbAction> chainC = swarmC.BlockChain;

            foreach (int i in Enumerable.Range(0, 10))
            {
                await chainA.MineBlock(keyA);
            }

            Block<DumbAction> chainATip = chainA.Tip;

            foreach (int i in Enumerable.Range(0, 5))
            {
                await chainB.MineBlock(keyB);
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                await chainC.MineBlock(keyB);
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await BootstrapAsync(swarmB, swarmA.AsPeer);
                await BootstrapAsync(swarmC, swarmA.AsPeer);

                await swarmC.PullBlocksAsync(TimeSpan.FromSeconds(5), int.MaxValue, default);
                Assert.Equal(chainC.Tip, chainATip);
            }
            finally
            {
                await StopAsync(swarmA);
                await StopAsync(swarmB);
                await StopAsync(swarmC);

                swarmA.Dispose();
                swarmB.Dispose();
                swarmC.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PullBlocksByDifficulty()
        {
            var policy = new BlockPolicy<DumbAction>(new MinerReward(1));
            var chain1 = TestUtils.MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()));
            var chain2 = TestUtils.MakeBlockChain(
                policy,
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()));

            var key1 = new PrivateKey();
            var key2 = new PrivateKey();

            var miner1 = CreateSwarm(chain1, key1);
            var miner2 = CreateSwarm(chain2, key2);

            await chain1.MineBlock(key1);
            await chain1.MineBlock(key2);
            long nextDifficulty =
                (long)chain1.Tip.TotalDifficulty + policy.GetNextBlockDifficulty(chain2);
            Block<DumbAction> block = TestUtils.MineNext(
                chain2.Tip,
                policy.GetHashAlgorithm,
                miner: TestUtils.ChainPrivateKey.PublicKey,
                difficulty: nextDifficulty,
                blockInterval: TimeSpan.FromMilliseconds(1)
            ).Evaluate(TestUtils.ChainPrivateKey, chain2);
            chain2.Append(block);

            Assert.True(chain1.Tip.Index > chain2.Tip.Index);
            Assert.True(chain1.Tip.TotalDifficulty < chain2.Tip.TotalDifficulty);

            try
            {
                await StartAsync(miner1);
                await StartAsync(miner2);

                await BootstrapAsync(miner2, miner1.AsPeer);

                await miner1.PullBlocksAsync(TimeSpan.FromSeconds(5), int.MaxValue, default);

                Assert.Equal(miner2.BlockChain.Count, miner1.BlockChain.Count);
                Assert.Equal(miner2.BlockChain.Tip, miner1.BlockChain.Tip);
            }
            finally
            {
                await StopAsync(miner1);
                await StopAsync(miner2);
                miner1.Dispose();
                miner2.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanFillWithInvalidTransaction()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var swarm1 = CreateSwarm();
            var swarm2 = CreateSwarm();

            var tx1 = swarm2.BlockChain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(address, "foo") });

            var tx2 = swarm2.BlockChain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(address, "bar") });

            var tx3 = swarm2.BlockChain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(address, "quz") });

            var tx4 = Transaction<DumbAction>.Create(
                4,
                privateKey,
                swarm1.BlockChain.Genesis.Hash,
                new[] { new DumbAction(address, "qux") });

            try
            {
                await StartAsync(swarm1);
                await StartAsync(swarm2);

                var transport = swarm1.Transport;
                var msg = new GetTxs(new[] { tx1.Id, tx2.Id, tx3.Id, tx4.Id });
                var replies = (await transport.SendMessageWithReplyAsync(
                    (BoundPeer)swarm2.AsPeer,
                    msg,
                    TimeSpan.FromSeconds(1),
                    4,
                    true,
                    default)).ToList();

                Assert.Equal(3, replies.Count);
                Assert.Equal(
                    new[] { tx1, tx2, tx3 }.ToHashSet(),
                    replies.Select(
                        m => Transaction<DumbAction>.Deserialize(
                            ((Libplanet.Net.Messages.Tx)m).Payload)).ToHashSet());
            }
            finally
            {
                await StopAsync(swarm1);
                await StopAsync(swarm2);
                swarm1.Dispose();
                swarm2.Dispose();
            }
        }
    }
}
