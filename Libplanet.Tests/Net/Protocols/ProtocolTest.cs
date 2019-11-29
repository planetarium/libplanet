using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Protocols;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net.Protocols
{
    public class ProtocolTest
    {
        private const int Timeout = 60 * 1000;
        private readonly Dictionary<Address, TestSwarm> _swarms;

        public ProtocolTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss}[@{Address}][{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ProtocolTest>();

            _swarms = new Dictionary<Address, TestSwarm>();
        }

        [Fact]
        public void KademliaTest()
        {
            var addr1 = new Address("0000000000000000000000000000000000000000");
            var addr2 = new Address("0000000000000000000000000000000000000001");
            var addr3 = new Address("000000000000000000000000000000000000000c");
            var addr4 = new Address("0000000001000001111110001000011001000001");

            Assert.Equal(
                new Address("000000000100000111111000100001100100000d"),
                Kademlia.CalculateDistance(addr3, addr4));

            Assert.Equal(159, Kademlia.CommonPrefixLength(addr1, addr2));
            Assert.Equal(156, Kademlia.CommonPrefixLength(addr1, addr3));
            Assert.Equal(39, Kademlia.CommonPrefixLength(addr1, addr4));

            Assert.True(string.CompareOrdinal(addr1.ToHex(), addr2.ToHex()) < 1);
            Assert.True(string.CompareOrdinal(addr2.ToHex(), addr3.ToHex()) < 1);
            Assert.True(string.CompareOrdinal(addr3.ToHex(), addr4.ToHex()) < 1);
        }

        [Fact(Timeout = Timeout)]
        public async Task Start()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();

            Assert.Throws<SwarmException>(() => swarmA.SendPing(swarmB.AsPeer));
            swarmA.Start();
            await Assert.ThrowsAsync<TimeoutException>(() =>
                swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, TimeSpan.FromMilliseconds(500))
            );
            Assert.Empty(swarmA.ReceivedMessages);
        }

        [Fact(Timeout = Timeout)]
        public async Task Ping()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();

            try
            {
                swarmA.Start();
                swarmB.Start();
                swarmA.SendPing(swarmB.AsPeer);
                await swarmA.MessageReceived.WaitAsync();
                await Task.Delay(100);

                Assert.Single(swarmA.ReceivedMessages);
                Assert.Single(swarmB.ReceivedMessages);
                Assert.Contains(swarmA.AsPeer, swarmB.Protocol.Peers);
            }
            finally
            {
                swarmA.Stop();
                swarmB.Stop();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PingTwice()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();

            try
            {
                swarmA.Start();
                swarmB.Start();

                swarmA.SendPing(swarmB.AsPeer);
                await swarmA.MessageReceived.WaitAsync();
                await swarmB.MessageReceived.WaitAsync();
                swarmB.SendPing(swarmA.AsPeer);
                await swarmA.MessageReceived.WaitAsync();
                await swarmB.MessageReceived.WaitAsync();

                Assert.Equal(2, swarmA.ReceivedMessages.Count);
                Assert.Equal(2, swarmB.ReceivedMessages.Count);
                Assert.Contains(swarmA.AsPeer, swarmB.Protocol.Peers);
                Assert.Contains(swarmB.AsPeer, swarmA.Protocol.Peers);
            }
            finally
            {
                swarmA.Stop();
                swarmB.Stop();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PingToClosedPeer()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();
            var swarmC = CreateTestSwarm();

            swarmA.Start();
            swarmB.Start();
            swarmC.Start();

            await swarmA.AddPeersAsync(new[] { swarmB.AsPeer, swarmC.AsPeer }, null);

            Assert.Contains(swarmB.AsPeer, swarmA.Peers);
            Assert.Contains(swarmC.AsPeer, swarmA.Peers);

            swarmC.Stop();
            await Assert.ThrowsAsync<TimeoutException>(
                () => swarmA.AddPeersAsync(new[] { swarmC.AsPeer }, TimeSpan.FromSeconds(3)));
            await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);

            Assert.Contains(swarmB.AsPeer, swarmA.Peers);

            swarmA.Stop();
            swarmB.Stop();
            swarmC.Stop();
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapException()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();

            await Assert.ThrowsAsync<SwarmException>(
                () => swarmB.BootstrapAsync(
                    new[] { swarmA.AsPeer },
                    TimeSpan.FromSeconds(3),
                    TimeSpan.FromSeconds(3))
            );
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapAsyncTest()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();
            var swarmC = CreateTestSwarm();

            swarmA.Start();
            swarmB.Start();
            swarmC.Start();

            await swarmB.BootstrapAsync(new[] { swarmA.AsPeer });
            await swarmC.BootstrapAsync(new[] { swarmA.AsPeer });

            Assert.Contains(swarmB.AsPeer, swarmC.Peers);
            Assert.Contains(swarmC.AsPeer, swarmB.Peers);

            swarmA.Stop();
            swarmB.Stop();
            swarmC.Stop();
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveStalePeers()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();

            swarmA.Start();
            swarmB.Start();

            await swarmA.AddPeersAsync(new[] { swarmB.AsPeer }, null);
            Assert.Single(swarmA.Peers);

            swarmB.Stop();
            await Task.Delay(100);
            await swarmA.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
            Assert.Empty(swarmA.Peers);
        }

        [Fact(Timeout = Timeout)]
        public async Task RoutingTableFull()
        {
            var swarm = CreateTestSwarm(tableSize: 1, bucketSize: 1);
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();
            var swarmC = CreateTestSwarm();

            swarm.Start();
            swarmA.Start();
            swarmB.Start();
            swarmC.Start();

            await swarmA.AddPeersAsync(new[] { swarm.AsPeer }, null);
            await swarmB.AddPeersAsync(new[] { swarm.AsPeer }, null);
            await swarmC.AddPeersAsync(new[] { swarm.AsPeer }, null);

            Assert.Single(swarmA.Peers);
            Assert.Contains(swarmA.AsPeer, swarm.Peers);
            Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);
            Assert.DoesNotContain(swarmC.AsPeer, swarm.Peers);

            swarm.Stop();
            swarmA.Stop();
            swarmB.Stop();
            swarmC.Stop();
        }

        [Fact(Timeout = Timeout)]
        public async Task ReplacementCache()
        {
            var swarm = CreateTestSwarm(tableSize: 1, bucketSize: 1);
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();
            var swarmC = CreateTestSwarm();

            swarm.Start();
            swarmA.Start();
            swarmB.Start();
            swarmC.Start();

            await swarmA.AddPeersAsync(new[] { swarm.AsPeer }, null);
            await swarmB.AddPeersAsync(new[] { swarm.AsPeer }, null);
            await Task.Delay(100);
            await swarmC.AddPeersAsync(new[] { swarm.AsPeer }, null);

            Assert.Single(swarmA.Peers);
            Assert.Contains(swarmA.AsPeer, swarm.Peers);
            Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);

            swarmA.Stop();
            await swarm.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
            await swarm.Protocol.CheckReplacementCacheAsync(default(CancellationToken));

            Assert.Single(swarm.Peers);
            Assert.DoesNotContain(swarmA.AsPeer, swarm.Peers);
            Assert.Contains(swarmB.AsPeer, swarm.Peers);
            Assert.DoesNotContain(swarmC.AsPeer, swarm.Peers);

            swarm.Stop();
            swarmB.Stop();
            swarmC.Stop();
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveDeadReplacementCache()
        {
            TestSwarm swarm = CreateTestSwarm(tableSize: 1, bucketSize: 1);
            TestSwarm swarmA = CreateTestSwarm();
            TestSwarm swarmB = CreateTestSwarm();
            TestSwarm swarmC = CreateTestSwarm();

            swarm.Start();
            swarmA.Start();
            swarmB.Start();
            swarmC.Start();

            await swarmA.AddPeersAsync(new[] { swarm.AsPeer }, null);
            await swarmB.AddPeersAsync(new[] { swarm.AsPeer }, null);

            Assert.Single(swarm.Peers);
            Assert.Contains(swarmA.AsPeer, swarm.Peers);
            Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);

            swarmA.Stop();
            swarmB.Stop();

            await swarmC.AddPeersAsync(new[] { swarm.AsPeer }, null);
            await swarm.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
            await swarm.Protocol.CheckReplacementCacheAsync(default(CancellationToken));

            Assert.Single(swarm.Peers);
            Assert.DoesNotContain(swarmA.AsPeer, swarm.Peers);
            Assert.DoesNotContain(swarmB.AsPeer, swarm.Peers);
            Assert.Contains(swarmC.AsPeer, swarm.Peers);

            swarm.Stop();
            swarmC.Stop();
            swarm.Dispose();
        }

        [Theory(Timeout = Timeout)]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(20)]
        [InlineData(50)]
        public async Task BroadcastMessage(int count)
        {
            var seed = CreateTestSwarm();
            seed.Start();
            var swarms = new TestSwarm[count];
            for (var i = 0; i < count; i++)
            {
                swarms[i] = CreateTestSwarm();
                swarms[i].Start();
            }

            try
            {
                foreach (var swarm in swarms)
                {
                    await swarm.BootstrapAsync(new[] { seed.AsPeer });
                }

                Log.Debug("Bootstrap completed.");

                seed.BroadcastTestMessage("foo");
                Log.Debug("Broadcast completed.");

                var tasks = swarms.Select(swarm => swarm.WaitForTestMessageWithData("foo"));

                await Task.WhenAll(tasks);
            }
            finally
            {
                foreach (var swarm in swarms)
                {
                    Assert.True(swarm.ReceivedTestMessageOfData("foo"));
                    swarm.Stop();
                }
            }
        }

        private TestSwarm CreateTestSwarm(
            PrivateKey privateKey = null,
            int? tableSize = null,
            int? bucketSize = null,
            TimeSpan? networkDelay = null)
        {
            return new TestSwarm(
                _swarms,
                privateKey ?? new PrivateKey(),
                tableSize,
                bucketSize,
                networkDelay);
        }
    }
}
