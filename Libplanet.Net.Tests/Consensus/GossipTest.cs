using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using NetMQ;
using Nito.AsyncEx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Consensus
{
    [Collection("NetMQConfiguration")]
    public class GossipTest : IDisposable
    {
        private const int Timeout = 60 * 1000;
        private readonly ILogger _logger;

        public GossipTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ} - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ConsensusReactorTestBase>();

            _logger = Log.ForContext<ConsensusReactorTestBase>();
        }

        public void Dispose()
        {
            NetMQConfig.Cleanup();
        }

        [Fact(Timeout = Timeout)]
        public async void AddMessage()
        {
            bool received1 = false;
            bool received2 = false;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var receivedEvent = new AsyncAutoResetEvent();
            var gossip1 = CreateGossip(
                message =>
                {
                    if (message is ConsensusPropose)
                    {
                        received1 = true;
                    }
                },
                key1,
                6001,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("localhost", 6002)) });
            var gossip2 = CreateGossip(
                message =>
                {
                    if (message is ConsensusPropose)
                    {
                        received2 = true;
                        receivedEvent.Set();
                    }
                },
                key2,
                6002,
                new[] { new BoundPeer(key1.PublicKey, new DnsEndPoint("localhost", 6001)) });
            try
            {
                _ = gossip1.StartAsync(default);
                _ = gossip2.StartAsync(default);
                await gossip1.WaitForRunningAsync();
                await gossip2.WaitForRunningAsync();
                gossip1.AddMessage(
                    new ConsensusPropose(
                        new PrivateKey().PublicKey,
                        0,
                        0,
                        TestUtils.BlockHash0,
                        new byte[] { },
                        0));
                await receivedEvent.WaitAsync();
                Assert.True(received1);
                Assert.True(received2);
            }
            finally
            {
                await gossip1.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await gossip2.StopAsync(TimeSpan.FromMilliseconds(100), default);
                gossip1.Dispose();
                gossip2.Dispose();
            }
        }

        [Fact(Timeout = Timeout)]
        public async void AddMessages()
        {
            int received1 = 0;
            int received2 = 0;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var receivedEvent = new AsyncAutoResetEvent();
            var gossip1 = CreateGossip(
                message =>
                {
                    if (message is ConsensusPropose)
                    {
                        received1++;
                    }
                },
                key1,
                6001,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("localhost", 6002)) });
            var gossip2 = CreateGossip(
                message =>
                {
                    if (message is ConsensusPropose)
                    {
                        received2++;
                    }

                    if (received2 == 4)
                    {
                        receivedEvent.Set();
                    }
                },
                key2,
                6002,
                new[] { new BoundPeer(key1.PublicKey, new DnsEndPoint("localhost", 6001)) });
            try
            {
                _ = gossip1.StartAsync(default);
                _ = gossip2.StartAsync(default);
                await gossip1.WaitForRunningAsync();
                await gossip2.WaitForRunningAsync();
                PublicKey key = new PrivateKey().PublicKey;
                gossip1.AddMessages(
                    new[]
                    {
                        new ConsensusPropose(key, 0, 0, TestUtils.BlockHash0, new byte[] { }, 0),
                        new ConsensusPropose(key, 1, 0, TestUtils.BlockHash0, new byte[] { }, 0),
                        new ConsensusPropose(key, 2, 0, TestUtils.BlockHash0, new byte[] { }, 0),
                        new ConsensusPropose(key, 3, 0, TestUtils.BlockHash0, new byte[] { }, 0),
                    });

                await receivedEvent.WaitAsync();
                Assert.Equal(4, received1);
                Assert.Equal(4, received2);
            }
            finally
            {
                await gossip1.StopAsync(TimeSpan.FromMilliseconds(100), default);
                await gossip2.StopAsync(TimeSpan.FromMilliseconds(100), default);
                gossip1.Dispose();
                gossip2.Dispose();
            }
        }

        private Gossip CreateGossip(
            Action<Message> processMessage,
            PrivateKey? privateKey = null,
            int? port = null,
            IEnumerable<BoundPeer>? peers = null)
        {
            var transport = new NetMQTransport(
                privateKey ?? new PrivateKey(),
                TestUtils.AppProtocolVersion,
                null,
                500,
                "localhost",
                port,
                null,
                null);
            return new Gossip(
                transport,
                peers?.ToImmutableArray() ?? ImmutableArray<BoundPeer>.Empty,
                processMessage,
                TimeSpan.FromMinutes(2));
        }
    }
}
