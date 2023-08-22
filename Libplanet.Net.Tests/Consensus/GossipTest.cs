using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Tests.Store;
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
        private const int Timeout = 20 * 1000;
        private readonly ILogger _logger;

        public GossipTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffffZ}[{Caller}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .Enrich.WithCaller()
                .WriteTo.File("/tmp/artifacts/gossip-test.log", outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<GossipTest>();

            _logger = Log.ForContext<GossipTest>();
        }

        public void Dispose()
        {
            Console.WriteLine("Disposing GossipTest...");
            NetMQConfig.Cleanup(false);
        }

        [Fact(Timeout = Timeout)]
        public async void PublishMessage()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            bool received1 = false;
            bool received2 = false;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var receivedEvent = new AsyncAutoResetEvent();
            var port1 = new Random().Next(10000, 20000);
            var port2 = new Random().Next(20001, 30000);
            var gossip1 = CreateGossip(
                content =>
                {
                    if (content is ConsensusProposalMsg)
                    {
                        received1 = true;
                    }
                },
                key1,
                port1,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", port2)) });
            var gossip2 = CreateGossip(
                content =>
                {
                    if (content is ConsensusProposalMsg)
                    {
                        received2 = true;
                        receivedEvent.Set();
                    }
                },
                key2,
                port2,
                new[] { new BoundPeer(key1.PublicKey, new DnsEndPoint("127.0.0.1", port1)) });
            try
            {
                _ = gossip1.StartAsync(default);
                _ = gossip2.StartAsync(default);
                await gossip1.WaitForRunningAsync();
                await gossip2.WaitForRunningAsync();
                gossip1.PublishMessage(
                    TestUtils.CreateConsensusPropose(fx.Block1, new PrivateKey(), 0));
                await receivedEvent.WaitAsync();
                Assert.True(received1);
                Assert.True(received2);
            }
            finally
            {
                await CleaningGossip(gossip1);
                await CleaningGossip(gossip2);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void AddMessage()
        {
            // It has no difference with PublishMessage() test,
            // since two methods only has timing difference.
            MemoryStoreFixture fx = new MemoryStoreFixture();
            bool received1 = false;
            bool received2 = false;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var receivedEvent = new AsyncAutoResetEvent();
            var port1 = new Random().Next(10000, 20000);
            var port2 = new Random().Next(20001, 30000);
            var gossip1 = CreateGossip(
                content =>
                {
                    if (content is ConsensusProposalMsg)
                    {
                        received1 = true;
                    }
                },
                key1,
                port1,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", port2)) });
            var gossip2 = CreateGossip(
                content =>
                {
                    if (content is ConsensusProposalMsg)
                    {
                        received2 = true;
                        receivedEvent.Set();
                    }
                },
                key2,
                port2,
                new[] { new BoundPeer(key1.PublicKey, new DnsEndPoint("127.0.0.1", port1)) });
            try
            {
                _ = gossip1.StartAsync(default);
                _ = gossip2.StartAsync(default);
                await gossip1.WaitForRunningAsync();
                await gossip2.WaitForRunningAsync();
                gossip1.AddMessage(
                    TestUtils.CreateConsensusPropose(fx.Block1, new PrivateKey(), 0));
                await receivedEvent.WaitAsync();
                Assert.True(received1);
                Assert.True(received2);
            }
            finally
            {
                await CleaningGossip(gossip1);
                await CleaningGossip(gossip2);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void AddMessages()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            int received1 = 0;
            int received2 = 0;
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var receivedEvent = new AsyncAutoResetEvent();
            var port1 = new Random().Next(10000, 20000);
            var port2 = new Random().Next(20001, 30000);

            var gossip1 = CreateGossip(
                content =>
                {
                    if (content is ConsensusProposalMsg)
                    {
                        received1++;
                    }
                },
                key1,
                port1,
                new[] { new BoundPeer(key2.PublicKey, new DnsEndPoint("127.0.0.1", port2)) });
            var gossip2 = CreateGossip(
                content =>
                {
                    if (content is ConsensusProposalMsg)
                    {
                        received2++;
                    }

                    if (received2 == 4)
                    {
                        receivedEvent.Set();
                    }
                },
                key2,
                port2,
                new[] { new BoundPeer(key1.PublicKey, new DnsEndPoint("127.0.0.1", port1)) });
            try
            {
                _ = gossip1.StartAsync(default);
                _ = gossip2.StartAsync(default);
                await gossip1.WaitForRunningAsync();
                await gossip2.WaitForRunningAsync();
                PrivateKey key = new PrivateKey();
                gossip1.AddMessages(
                    new[]
                    {
                        TestUtils.CreateConsensusPropose(fx.Block1, key, 0),
                        TestUtils.CreateConsensusPropose(fx.Block1, key, 1),
                        TestUtils.CreateConsensusPropose(fx.Block1, key, 2),
                        TestUtils.CreateConsensusPropose(fx.Block1, key, 3),
                    });

                await receivedEvent.WaitAsync();
                Assert.Equal(4, received1);
                Assert.Equal(4, received2);
            }
            finally
            {
                await CleaningGossip(gossip1);
                await CleaningGossip(gossip2);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void AddPeerWithHaveMessage()
        {
            var key1 = new PrivateKey();
            var key2 = new PrivateKey();
            var received = false;
            var receivedEvent = new AsyncAutoResetEvent();

            var port1 = new Random().Next(10000, 20000);
            var port2 = new Random().Next(20001, 30000);

            var transport1 = CreateTransport(key1, port1);

            async Task HandleMessage(Message message)
            {
                received = true;
                receivedEvent.Set();
                await Task.Yield();
            }

            transport1.ProcessMessageHandler.Register(HandleMessage);
            var gossip = new Gossip(
                transport1,
                ImmutableArray<BoundPeer>.Empty,
                ImmutableArray<BoundPeer>.Empty,
                _ => { },
                _ => { },
                _ => { });
            var transport2 = CreateTransport(key2, port2);
            try
            {
                _ = gossip.StartAsync(default);
                _ = transport2.StartAsync(default);
                await gossip.WaitForRunningAsync();
                await transport2.WaitForRunningAsync();

                await transport2.SendMessageAsync(
                    gossip.AsPeer,
                    new HaveMessage(Array.Empty<MessageId>()),
                    TimeSpan.FromSeconds(1),
                    default);

                await receivedEvent.WaitAsync();
                Assert.True(received);
                Assert.Contains(transport2.AsPeer, gossip.Peers);
            }
            finally
            {
                await CleaningGossip(gossip);
                await CleaningTransport(transport2);
                await CleaningTransport(transport1);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void DoNotBroadcastToSeedPeers()
        {
            bool received = false;
            async Task ProcessMessage(Message msg)
            {
                if (msg.Content is HaveMessage)
                {
                    received = true;
                }

                await Task.CompletedTask;
            }

            ITransport seed = CreateTransport();
            seed.ProcessMessageHandler.Register(ProcessMessage);
            Gossip gossip = CreateGossip(_ => { }, seeds: new[] { seed.AsPeer });

            try
            {
                _ = seed.StartAsync();
                _ = gossip.StartAsync(default);
                await seed.WaitForRunningAsync();
                await gossip.WaitForRunningAsync();
                gossip.AddMessage(new PingMsg());

                // Wait heartbeat interval * 2.
                await Task.Delay(2 * 1000);
                Assert.False(received);
            }
            finally
            {
                await CleaningTransport(seed);
                await CleaningGossip(gossip);
            }
        }

        [Fact(Timeout = Timeout)]
        public async void DoNotSendDuplicateMessageRequest()
        {
            int received = 0;
            async Task ProcessMessage(Message msg)
            {
                if (msg.Content is WantMessage)
                {
                    received++;
                }

                await Task.CompletedTask;
            }

            Gossip receiver = CreateGossip(_ => { });
            ITransport sender1 = CreateTransport();
            sender1.ProcessMessageHandler.Register(ProcessMessage);
            ITransport sender2 = CreateTransport();
            sender2.ProcessMessageHandler.Register(ProcessMessage);

            try
            {
                _ = receiver.StartAsync(default);
                _ = sender1.StartAsync(default);
                _ = sender2.StartAsync(default);
                await receiver.WaitForRunningAsync();
                await sender1.WaitForRunningAsync();
                await sender2.WaitForRunningAsync();
                var msg1 = new PingMsg();
                var msg2 = new PongMsg();
                await sender1.SendMessageAsync(
                    receiver.AsPeer,
                    new HaveMessage(new[] { msg1.Id, msg2.Id }),
                    null,
                    default);
                await sender2.SendMessageAsync(
                    receiver.AsPeer,
                    new HaveMessage(new[] { msg1.Id, msg2.Id }),
                    null,
                    default);

                // Wait heartbeat interval * 2.
                await Task.Delay(2 * 1000);
                Assert.Equal(1, received);
            }
            finally
            {
                await CleaningGossip(receiver);
                await CleaningTransport(sender1);
                await CleaningTransport(sender2);
            }
        }

        private Gossip CreateGossip(
            Action<MessageContent> processMessage,
            PrivateKey? privateKey = null,
            int? port = null,
            IEnumerable<BoundPeer>? peers = null,
            IEnumerable<BoundPeer>? seeds = null)
        {
            var transport = CreateTransport(privateKey, port);
            return new Gossip(
                transport,
                peers?.ToImmutableArray() ?? ImmutableArray<BoundPeer>.Empty,
                seeds?.ToImmutableArray() ?? ImmutableArray<BoundPeer>.Empty,
                _ => { },
                _ => { },
                processMessage);
        }

        private async Task CleaningTransport(ITransport transport)
        {
            try
            {
                await transport.StopAsync(TimeSpan.FromMilliseconds(100), default);
                transport.Dispose();
            }
            catch (ObjectDisposedException)
            {
                _logger.Warning("Transport already disposed.");
            }
        }

        private async Task CleaningGossip(Gossip gossip)
        {
            try
            {
                await gossip.StopAsync(TimeSpan.FromMilliseconds(100), default);
                gossip.Dispose();
            }
            catch (ObjectDisposedException)
            {
                _logger.Warning("Gossip already disposed.");
            }
        }

        private NetMQTransport CreateTransport(
            PrivateKey? privateKey = null,
            int? port = null)
        {
            var apvOptions = new AppProtocolVersionOptions
                { AppProtocolVersion = TestUtils.AppProtocolVersion };
            HostOptions hostOptions;
            if (port is { } p)
            {
                hostOptions = new HostOptions("127.0.0.1", Array.Empty<IceServer>(), p);
            }
            else
            {
                hostOptions = new HostOptions("127.0.0.1", Array.Empty<IceServer>());
            }

            return NetMQTransport.Create(
                privateKey ?? new PrivateKey(),
                apvOptions,
                hostOptions).ConfigureAwait(false).GetAwaiter().GetResult();
        }
    }
}
