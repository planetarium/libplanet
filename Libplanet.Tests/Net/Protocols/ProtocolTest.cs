using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
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

        [Fact(Timeout = Timeout)]
        public async Task Start()
        {
            var swarmA = CreateTestSwarm();
            var swarmB = CreateTestSwarm();

            Assert.Throws<SwarmException>(() => swarmA.SendPing(swarmB.AsPeer));
            swarmA.Start();
            swarmA.SendPing(swarmB.AsPeer);
            await swarmB.MessageReceived.WaitAsync();
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

        // TODO: scale up to 200 by boosting bootstrapping
        [Theory(Timeout = Timeout)]
        [InlineData(1)]
        [InlineData(5)]
        [InlineData(20)]
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

                foreach (var swarm in swarms)
                {
                    await swarm.Protocol.RebuildConnectionAsync(default(CancellationToken));
                }

                Log.Debug("Start broadcasting.");
                seed.BroadcastTestMessage("foo");
                Log.Debug("End broadcasting.");

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
