using System;
using System.Collections.Async;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public class SwarmTest : IDisposable
    {
        private readonly FileStoreFixture _fx1;
        private readonly FileStoreFixture _fx2;
        private readonly FileStoreFixture _fx3;

        private readonly List<BlockChain<BaseAction>> _blockchains;
        private readonly List<Swarm> _swarms;

        public SwarmTest(ITestOutputHelper output)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: "{Timestamp:HH:mm:ss}[@{SwarmId}][{ThreadId}] - {Message}")
                .CreateLogger()
                .ForContext<SwarmTest>();

            var policy = new BlockPolicy<BaseAction>();
            _fx1 = new FileStoreFixture();
            _fx2 = new FileStoreFixture();
            _fx3 = new FileStoreFixture();

            _blockchains = new List<BlockChain<BaseAction>>
            {
                new BlockChain<BaseAction>(policy, _fx1.Store),
                new BlockChain<BaseAction>(policy, _fx2.Store),
                new BlockChain<BaseAction>(policy, _fx3.Store),
            };

            _swarms = new List<Swarm>
            {
                new Swarm(
                    new PrivateKey(),
                    ipAddress: IPAddress.Loopback),
                new Swarm(
                    new PrivateKey(),
                    ipAddress: IPAddress.Loopback),
                new Swarm(
                    new PrivateKey(),
                    ipAddress: IPAddress.Loopback),
            };
        }

        public void Dispose()
        {
            _fx1.Dispose();
            _fx2.Dispose();
            _fx3.Dispose();
        }

        [Fact]
        public async Task CanNotStartTwice()
        {
            Swarm swarm = _swarms[0];
            BlockChain<BaseAction> chain = _blockchains[0];

            Task t = await Task.WhenAny(
                swarm.StartAsync(chain),
                swarm.StartAsync(chain));

            Assert.True(swarm.Running);
            Assert.True(t.IsFaulted);
            Assert.IsType<SwarmException>(t.Exception.InnerException);

            await swarm.StopAsync();
        }

        [Fact]
        public async Task CanStop()
        {
            Swarm swarm = _swarms[0];
            BlockChain<BaseAction> chain = _blockchains[0];

            await swarm.StopAsync();
            Task task = await StartAsync(swarm, chain);

            Assert.True(swarm.Running);
            await swarm.StopAsync();

            Assert.False(swarm.Running);
            await task;
        }

        [Fact]
        public async Task CanWaitForRunning()
        {
            Swarm swarm = _swarms[0];
            BlockChain<BaseAction> chain = _blockchains[0];

            Assert.False(swarm.Running);

            Task consumerTask = Task.Run(
                async () =>
                {
                    await swarm.WaitForRunningAsync();
                    Assert.True(swarm.Running);
                }
            );

            Task producerTask = Task.Run(async () =>
            {
                await swarm.StartAsync(chain);
            });

            await consumerTask;
            Assert.True(swarm.Running);

            await swarm.StopAsync();
            Assert.False(swarm.Running);
        }

        [Fact]
        public async Task CanBroadcastWhlieMining()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];

            BlockChain<BaseAction> chainA = _blockchains[0];
            BlockChain<BaseAction> chainB = _blockchains[1];

            Task CreateMiner(
                Swarm swarm,
                BlockChain<BaseAction> chain,
                int delay,
                CancellationToken cancellationToken
            )
            {
                return Task.Run(async () =>
                {
                    while (!cancellationToken.IsCancellationRequested)
                    {
                        var block = chain.MineBlock(_fx1.Address1);
                        Log.Debug(
                            $"Block mined. " +
                            $"[Swarm: {swarm.Address}, Block: {block.Hash}]");
                        await swarm.BroadcastBlocksAsync(new[] { block });
                        await Task.Delay(delay);
                    }

                    await swarm.BroadcastBlocksAsync(new[] { chain.Last() });
                    Log.Debug("Mining complete.");
                });
            }

            var minerCanceller = new CancellationTokenSource();
            Task miningA = CreateMiner(a, chainA, 5000, minerCanceller.Token);
            Task miningB = CreateMiner(b, chainB, 8000, minerCanceller.Token);

            try
            {
                await StartAsync(a, chainA);
                await StartAsync(b, chainB);

                await b.AddPeersAsync(new[] { a.AsPeer });
                await EnsureExchange(a, b);

                await Task.Delay(10000);
                minerCanceller.Cancel();

                await Task.WhenAll(miningA, miningB);

                await Task.Delay(5000);
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
            }

            Log.Debug($"chainA: {string.Join(",", chainA)}");
            Log.Debug($"chainB: {string.Join(",", chainB)}");

            Assert.Subset(
                chainA.AsEnumerable().ToHashSet(),
                chainB.AsEnumerable().ToHashSet());
        }

        [Fact]
        public async Task CanExchangePeer()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];
            Swarm c = _swarms[2];

            BlockChain<BaseAction> chain = _blockchains[0];

            DateTimeOffset lastDistA;
            Peer aAsPeer;

            try
            {
                try
                {
                    await StartAsync(a, chain);
                    await StartAsync(b, chain);
                    await StartAsync(c, chain);

                    await b.AddPeersAsync(new[] { a.AsPeer });
                    await EnsureExchange(a, b);
                    Assert.Equal(new[] { b.AsPeer }.ToImmutableHashSet(), a.ToImmutableHashSet());
                    Assert.Equal(new[] { a.AsPeer }.ToImmutableHashSet(), b.ToImmutableHashSet());

                    await c.AddPeersAsync(new[] { a.AsPeer });
                    await EnsureExchange(a, c);
                    await EnsureExchange(a, b);

                    Assert.Equal(new[] { b.AsPeer, c.AsPeer }.ToImmutableHashSet(), a.ToImmutableHashSet());
                    Assert.Equal(new[] { a.AsPeer, c.AsPeer }.ToImmutableHashSet(), b.ToImmutableHashSet());
                    Assert.Equal(new[] { a.AsPeer, b.AsPeer }.ToImmutableHashSet(), c.ToImmutableHashSet());

                    lastDistA = a.LastDistributed;
                    aAsPeer = a.AsPeer;
                }
                finally
                {
                    await a.StopAsync();
                }

                Assert.True(lastDistA < a.LastDistributed);

                await EnsureRecvAsync(b, aAsPeer, a.LastDistributed);
                await EnsureRecvAsync(c, aAsPeer, a.LastDistributed);
                await EnsureExchange(b, c);

                Assert.Equal(new[] { c.AsPeer }.ToImmutableHashSet(), b.ToImmutableHashSet());
                Assert.Equal(new[] { b.AsPeer }.ToImmutableHashSet(), c.ToImmutableHashSet());
            }
            finally
            {
                await b.StopAsync();
                await c.StopAsync();
            }
        }

        [Fact]
        public void WorksAsCollection()
        {
            Swarm a = _swarms[0];
            Swarm b = _swarms[1];
            Swarm c = _swarms[2];

            Assert.Empty(a);
            Assert.Empty(b);
            Assert.Empty(c);

            a.Add(b.AsPeer);
            a.Add(c.AsPeer);
            Assert.Contains(b.AsPeer, a);
            Assert.Contains(c.AsPeer, a);

            Peer[] peers = null;
            Assert.Throws<ArgumentNullException>(() =>
            {
                a.CopyTo(peers, 0);
            });

            peers = new Peer[3];
            Assert.Throws<ArgumentOutOfRangeException>(() =>
            {
                a.CopyTo(peers, -1);
            });
            Assert.Throws<ArgumentException>(() =>
            {
                a.CopyTo(peers, 2);
            });

            a.CopyTo(peers, 1);

            Assert.Equal(new Peer[] { null, b.AsPeer, c.AsPeer }, peers);
        }

        [Fact]
        public void CanBeComparedProperly()
        {
            var pk1 = new PrivateKey();
            var pk2 = new PrivateKey();
            var a = new Swarm(pk1);
            var b = new Swarm(pk1, createdAt: a.LastDistributed);
            var c = new Swarm(pk2);
            var u1 = new Uri($"inproc://swarmtest.t");

            Assert.Equal(a, b);
            Assert.NotEqual(a, c);
            a.Add(c.AsPeer);

            Assert.NotEqual(a, b);
            Assert.True(a.KeyEquals(b));
        }

        [Fact]
        public async Task CanBeCancelled()
        {
            Swarm swarm = _swarms[0];
            BlockChain<BaseAction> chain = _blockchains[0];
            var cts = new CancellationTokenSource();

            Task task = await StartAsync(
                swarm,
                chain,
                cancellationToken: cts.Token
            );

            cts.Cancel();
            await Assert.ThrowsAsync<TaskCanceledException>(async () => await task);
            Assert.False(swarm.Running);
        }

        [Fact]
        public async Task CanGetBlock()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];

            BlockChain<BaseAction> chainA = _blockchains[0];
            BlockChain<BaseAction> chainB = _blockchains[1];

            Block<BaseAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            Block<BaseAction> block1 = chainA.MineBlock(_fx1.Address1);
            Block<BaseAction> block2 = chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainA);

                await Assert.ThrowsAsync<PeerNotFoundException>(
                    async () => await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null));

                await swarmB.AddPeersAsync(new[] { swarmA.AsPeer });

                IEnumerable<HashDigest<SHA256>> inventories1 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash, block2.Hash },
                    inventories1);

                IEnumerable<HashDigest<SHA256>> inventories2 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        block1.Hash);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash },
                    inventories2);

                List<Block<BaseAction>> receivedBlocks =
                    await swarmB.GetBlocksAsync<BaseAction>(
                        swarmA.AsPeer, inventories1
                    ).ToListAsync();

                Assert.Equal(
                    new[] { genesis, block1, block2 },
                    receivedBlocks);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact]
        public async Task CanGetTx()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];

            BlockChain<BaseAction> chainA = _blockchains[0];
            BlockChain<BaseAction> chainB = _blockchains[1];

            Transaction<BaseAction> tx = Transaction<BaseAction>.Make(
                new PrivateKey(),
                new PrivateKey().PublicKey.ToAddress(),
                new BaseAction[] { },
                DateTimeOffset.UtcNow
            );
            chainB.StageTransactions(new[] { tx }.ToHashSet());
            chainB.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainB);

                Assert.Throws<PeerNotFoundException>(
                    () => swarmB.GetTxsAsync<BaseAction>(
                        swarmA.AsPeer, new[] { tx.Id }));

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });

                List<Transaction<BaseAction>> txs =
                    await swarmA.GetTxsAsync<BaseAction>(
                        swarmB.AsPeer, new[] { tx.Id }
                    ).ToListAsync();

                Assert.Equal(new[] { tx }, txs);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact]
        public async Task CanBroadcastTx()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];
            Swarm swarmC = _swarms[2];

            BlockChain<BaseAction> chainA = _blockchains[0];
            BlockChain<BaseAction> chainB = _blockchains[1];
            BlockChain<BaseAction> chainC = _blockchains[2];

            Transaction<BaseAction> tx = Transaction<BaseAction>.Make(
                new PrivateKey(),
                new PrivateKey().PublicKey.ToAddress(),
                new BaseAction[] { },
                DateTimeOffset.UtcNow
            );

            chainA.StageTransactions(new[] { tx }.ToHashSet());
            chainA.MineBlock(_fx1.Address1);

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainB);
                await StartAsync(swarmC, chainC);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });
                await swarmA.AddPeersAsync(new[] { swarmC.AsPeer });

                await EnsureExchange(swarmA, swarmB);
                await EnsureExchange(swarmA, swarmC);

                await swarmA.BroadcastTxsAsync(new[] { tx });

                await swarmC.TxReceived.WaitAsync();
                await swarmB.TxReceived.WaitAsync();

                Assert.Equal(tx, chainB.Transactions[tx.Id]);
                Assert.Equal(tx, chainC.Transactions[tx.Id]);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync(),
                    swarmC.StopAsync());
            }
        }

        [Fact]
        public async Task CanBroadcastBlock()
        {
            Swarm swarmA = _swarms[0];
            Swarm swarmB = _swarms[1];
            Swarm swarmC = _swarms[2];

            BlockChain<BaseAction> chainA = _blockchains[0];
            BlockChain<BaseAction> chainB = _blockchains[1];
            BlockChain<BaseAction> chainC = _blockchains[2];

            // chainA, chainB and chainC shares genesis block.
            Block<BaseAction> genesis = chainA.MineBlock(_fx1.Address1);
            chainB.Append(genesis);
            chainC.Append(genesis);

            foreach (int i in Enumerable.Range(0, 10))
            {
                chainA.MineBlock(_fx1.Address1);
                await Task.Delay(100);
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                chainB.MineBlock(_fx2.Address1);
                await Task.Delay(100);
            }

            try
            {
                await StartAsync(swarmA, chainA);
                await StartAsync(swarmB, chainB);
                await StartAsync(swarmC, chainC);

                await swarmA.AddPeersAsync(new[] { swarmB.AsPeer });
                await swarmA.AddPeersAsync(new[] { swarmC.AsPeer });

                await EnsureExchange(swarmA, swarmB);
                await EnsureExchange(swarmA, swarmC);

                await swarmB.BroadcastBlocksAsync(new[] { chainB.Last() });

                await Task.Delay(5000);

                Assert.Equal(chainB.AsEnumerable(), chainC);

                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA
                Assert.NotEqual(chainB.AsEnumerable(), chainA);

                await swarmA.BroadcastBlocksAsync(new[] { chainA.Last() });

                await Task.Delay(5000);

                Assert.Equal(chainA.AsEnumerable(), chainB);
                Assert.Equal(chainA.AsEnumerable(), chainC);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync(),
                    swarmC.StopAsync());
            }
        }

        [Fact]
        public void CanDenyNullParams()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm(null);
            });
        }

        [Fact]
        public void CanResolveUrl()
        {
            Swarm s = new Swarm(
                new PrivateKey(),
                ipAddress: IPAddress.Parse("1.2.3.4"),
                listenPort: 5678);

            Assert.Equal(new Uri("tcp://1.2.3.4:5678"), s.Url);
            Assert.Equal(
                new[] { new Uri("tcp://1.2.3.4:5678") },
                s.AsPeer.Urls);
        }

        private async Task<Task> StartAsync<T>(
            Swarm swarm,
            BlockChain<T> blockChain,
            CancellationToken cancellationToken = default
        )
            where T : IAction
        {
            Task task = Task.Run(
                async () => await swarm.StartAsync(
                    blockChain,
                    200,
                    cancellationToken
                )
            );
            await swarm.WaitForRunningAsync();
            return task;
        }

        private async Task EnsureRecvAsync(Swarm swarm, Peer peer = null, DateTimeOffset? lastReceived = null)
        {
            while (true)
            {
                Log.Debug($"Waiting for receive event... [{swarm.AsPeer}]");
                await swarm.DeltaReceived.WaitAsync();
                Log.Debug($"Event received. [{swarm.AsPeer}]");

                if (lastReceived == null)
                {
                    break;
                }

                DateTimeOffset? lastSeen = null;
                if (peer == null)
                {
                    lastSeen = swarm.LastReceived;
                }
                else
                {
                    if (swarm.LastSeenTimestamps.ContainsKey(peer))
                    {
                        lastSeen = swarm.LastSeenTimestamps[peer];
                    }
                    else
                    {
                        foreach (KeyValuePair<Peer, DateTimeOffset> kv in swarm.LastSeenTimestamps)
                        {
                            if (peer.PublicKey == kv.Key.PublicKey)
                            {
                                lastSeen = kv.Value;
                                break;
                            }
                        }
                    }
                }

                if ((lastSeen != null) && (lastSeen >= lastReceived))
                {
                    break;
                }
            }
        }

        private async Task EnsureExchange(Swarm a, Swarm b)
        {
            await a.WaitForRunningAsync();
            await b.WaitForRunningAsync();

            Log.Debug($"Waiting for a[{a.AsPeer}] to distribute... ");
            await a.DeltaDistributed.WaitAsync();
            Log.Debug($"Waiting for b[{b.AsPeer}] to receive a[{a.AsPeer}]...");
            await EnsureRecvAsync(b, a.AsPeer);
            Log.Debug($"Waiting for b[{b.AsPeer}] to distribute...");
            await b.DeltaDistributed.WaitAsync();
            Log.Debug($"Waiting for a[{a.AsPeer}] to receive b[{b.AsPeer}]...");
            await EnsureRecvAsync(a, b.AsPeer);
        }
    }
}
