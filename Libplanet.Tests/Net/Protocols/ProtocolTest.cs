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
        private readonly Dictionary<Address, TestTransport> _transports;

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

            _transports = new Dictionary<Address, TestTransport>();
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
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();

            Assert.Throws<SwarmException>(() => transportA.SendPing(transportB.AsPeer));
            await StartTestTransport(transportA);
            await Assert.ThrowsAsync<TimeoutException>(() =>
                transportA.AddPeersAsync(
                    new[] { transportB.AsPeer },
                    TimeSpan.FromMilliseconds(500))
            );
            Assert.Empty(transportA.ReceivedMessages);
        }

        [Fact(Timeout = Timeout)]
        public async Task Ping()
        {
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();

            try
            {
                await StartTestTransport(transportA);
                await StartTestTransport(transportB);
                transportA.SendPing(transportB.AsPeer);
                await transportA.MessageReceived.WaitAsync();
                await Task.Delay(100);

                Assert.Single(transportA.ReceivedMessages);
                Assert.Single(transportB.ReceivedMessages);
                Assert.Contains(transportA.AsPeer, transportB.Protocol.Peers);
            }
            finally
            {
                await transportA.StopAsync(TimeSpan.Zero);
                await transportB.StopAsync(TimeSpan.Zero);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PingTwice()
        {
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();

            try
            {
                await StartTestTransport(transportA);
                await StartTestTransport(transportB);

                transportA.SendPing(transportB.AsPeer);
                await transportA.MessageReceived.WaitAsync();
                await transportB.MessageReceived.WaitAsync();
                transportB.SendPing(transportA.AsPeer);
                await transportA.MessageReceived.WaitAsync();
                await transportB.MessageReceived.WaitAsync();

                Assert.Equal(2, transportA.ReceivedMessages.Count);
                Assert.Equal(2, transportB.ReceivedMessages.Count);
                Assert.Contains(transportA.AsPeer, transportB.Protocol.Peers);
                Assert.Contains(transportB.AsPeer, transportA.Protocol.Peers);
            }
            finally
            {
                await transportA.StopAsync(TimeSpan.Zero);
                await transportB.StopAsync(TimeSpan.Zero);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PingToClosedPeer()
        {
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();
            var transportC = CreateTestTransport();

            await StartTestTransport(transportA);
            await StartTestTransport(transportB);
            await StartTestTransport(transportC);

            await transportA.AddPeersAsync(new[] { transportB.AsPeer, transportC.AsPeer }, null);

            Assert.Contains(transportB.AsPeer, transportA.Protocol.Peers);
            Assert.Contains(transportC.AsPeer, transportA.Protocol.Peers);

            await transportC.StopAsync(TimeSpan.Zero);
            await Assert.ThrowsAsync<TimeoutException>(
                () => transportA.AddPeersAsync(
                    new[] { transportC.AsPeer },
                    TimeSpan.FromSeconds(3)));
            await transportA.AddPeersAsync(new[] { transportB.AsPeer }, null);

            Assert.Contains(transportB.AsPeer, transportA.Protocol.Peers);

            await transportA.StopAsync(TimeSpan.Zero);
            await transportB.StopAsync(TimeSpan.Zero);
            await transportC.StopAsync(TimeSpan.Zero);
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapException()
        {
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();

            await Assert.ThrowsAsync<SwarmException>(
                () => transportB.BootstrapAsync(
                    new[] { transportA.AsPeer },
                    TimeSpan.FromSeconds(3),
                    TimeSpan.FromSeconds(3))
            );
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapAsyncTest()
        {
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();
            var transportC = CreateTestTransport();

            await StartTestTransport(transportA);
            await StartTestTransport(transportB);
            await StartTestTransport(transportC);

            await transportB.BootstrapAsync(new[] { transportA.AsPeer });
            await transportC.BootstrapAsync(new[] { transportA.AsPeer });

            Assert.Contains(transportB.AsPeer, transportC.Protocol.Peers);
            Assert.Contains(transportC.AsPeer, transportB.Protocol.Peers);

            await transportA.StopAsync(TimeSpan.Zero);
            await transportB.StopAsync(TimeSpan.Zero);
            await transportC.StopAsync(TimeSpan.Zero);
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveStalePeers()
        {
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();

            await StartTestTransport(transportA);
            await StartTestTransport(transportB);

            await transportA.AddPeersAsync(new[] { transportB.AsPeer }, null);
            Assert.Single(transportA.Protocol.Peers);

            await transportB.StopAsync(TimeSpan.Zero);
            await Task.Delay(100);
            await transportA.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
            Assert.Empty(transportA.Protocol.Peers);
            await transportA.StopAsync(TimeSpan.Zero);
        }

        [Fact(Timeout = Timeout)]
        public async Task RoutingTableFull()
        {
            var transport = CreateTestTransport(tableSize: 1, bucketSize: 1);
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();
            var transportC = CreateTestTransport();

            await StartTestTransport(transport);
            await StartTestTransport(transportA);
            await StartTestTransport(transportB);
            await StartTestTransport(transportC);

            await transportA.AddPeersAsync(new[] { transport.AsPeer }, null);
            await transportB.AddPeersAsync(new[] { transport.AsPeer }, null);
            await transportC.AddPeersAsync(new[] { transport.AsPeer }, null);

            Assert.Single(transportA.Protocol.Peers);
            Assert.Contains(transportA.AsPeer, transport.Protocol.Peers);
            Assert.DoesNotContain(transportB.AsPeer, transport.Protocol.Peers);
            Assert.DoesNotContain(transportC.AsPeer, transport.Protocol.Peers);

            await transport.StopAsync(TimeSpan.Zero);
            await transportA.StopAsync(TimeSpan.Zero);
            await transportB.StopAsync(TimeSpan.Zero);
            await transportC.StopAsync(TimeSpan.Zero);
        }

        [Fact(Timeout = Timeout)]
        public async Task ReplacementCache()
        {
            var transport = CreateTestTransport(tableSize: 1, bucketSize: 1);
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();
            var transportC = CreateTestTransport();

            await StartTestTransport(transport);
            await StartTestTransport(transportA);
            await StartTestTransport(transportB);
            await StartTestTransport(transportC);

            await transportA.AddPeersAsync(new[] { transport.AsPeer }, null);
            await transportB.AddPeersAsync(new[] { transport.AsPeer }, null);
            await Task.Delay(100);
            await transportC.AddPeersAsync(new[] { transport.AsPeer }, null);

            Assert.Single(transportA.Protocol.Peers);
            Assert.Contains(transportA.AsPeer, transport.Protocol.Peers);
            Assert.DoesNotContain(transportB.AsPeer, transport.Protocol.Peers);

            await transportA.StopAsync(TimeSpan.Zero);
            await transport.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
            await transport.Protocol.CheckReplacementCacheAsync(default(CancellationToken));

            Assert.Single(transport.Protocol.Peers);
            Assert.DoesNotContain(transportA.AsPeer, transport.Protocol.Peers);
            Assert.Contains(transportB.AsPeer, transport.Protocol.Peers);
            Assert.DoesNotContain(transportC.AsPeer, transport.Protocol.Peers);

            await transport.StopAsync(TimeSpan.Zero);
            await transportB.StopAsync(TimeSpan.Zero);
            await transportC.StopAsync(TimeSpan.Zero);
        }

        [Fact(Timeout = Timeout)]
        public async Task RemoveDeadReplacementCache()
        {
            var transport = CreateTestTransport(tableSize: 1, bucketSize: 1);
            var transportA = CreateTestTransport();
            var transportB = CreateTestTransport();
            var transportC = CreateTestTransport();

            await StartTestTransport(transport);
            await StartTestTransport(transportA);
            await StartTestTransport(transportB);
            await StartTestTransport(transportC);

            await transportA.AddPeersAsync(new[] { transport.AsPeer }, null);
            await transportB.AddPeersAsync(new[] { transport.AsPeer }, null);

            Assert.Single(transport.Protocol.Peers);
            Assert.Contains(transportA.AsPeer, transport.Protocol.Peers);
            Assert.DoesNotContain(transportB.AsPeer, transport.Protocol.Peers);

            await transportA.StopAsync(TimeSpan.Zero);
            await transportB.StopAsync(TimeSpan.Zero);

            await transportC.AddPeersAsync(new[] { transport.AsPeer }, null);
            await transport.Protocol.RefreshTableAsync(TimeSpan.Zero, default(CancellationToken));
            await transport.Protocol.CheckReplacementCacheAsync(default(CancellationToken));

            Assert.Single(transport.Protocol.Peers);
            Assert.DoesNotContain(transportA.AsPeer, transport.Protocol.Peers);
            Assert.DoesNotContain(transportB.AsPeer, transport.Protocol.Peers);
            Assert.Contains(transportC.AsPeer, transport.Protocol.Peers);

            await transport.StopAsync(TimeSpan.Zero);
            await transportC.StopAsync(TimeSpan.Zero);
        }

        [Theory(Timeout = Timeout)]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(20)]
        [InlineData(50)]
        public async Task BroadcastMessage(int count)
        {
            var seed = CreateTestTransport();
            await StartTestTransport(seed);
            var transports = new TestTransport[count];
            for (var i = 0; i < count; i++)
            {
                transports[i] = CreateTestTransport();
                await StartTestTransport(transports[i]);
            }

            try
            {
                foreach (var transport in transports)
                {
                    await transport.BootstrapAsync(new[] { seed.AsPeer });
                }

                Log.Debug("Bootstrap completed.");

                var tasks =
                    transports.Select(transport => transport.WaitForTestMessageWithData("foo"));

                seed.BroadcastTestMessage(null, "foo");
                Log.Debug("Broadcast completed.");

                await Task.WhenAll(tasks);
            }
            finally
            {
                foreach (var transport in transports)
                {
                    Assert.True(transport.ReceivedTestMessageOfData("foo"));
                    await transport.StopAsync(TimeSpan.Zero);
                }
            }
        }

        private TestTransport CreateTestTransport(
            PrivateKey privateKey = null,
            int? tableSize = null,
            int? bucketSize = null,
            TimeSpan? networkDelay = null)
        {
            return new TestTransport(
                _transports,
                privateKey ?? new PrivateKey(),
                tableSize,
                bucketSize,
                networkDelay);
        }

        private async Task<Task> StartTestTransport(
            TestTransport transport,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await transport.StartAsync(cancellationToken);
            return transport.RunAsync(cancellationToken);
        }
    }
}
