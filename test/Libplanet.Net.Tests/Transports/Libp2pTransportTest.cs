#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Microsoft.Extensions.DependencyInjection;
using Multiformats.Address;
using Nethermind.Libp2p.Core;
using Nethermind.Libp2p.Stack;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Transports
{
    [CollectionDefinition(nameof(Libp2pTransportTest), DisableParallelization = true)]
    public class Libp2pTransportTest : IDisposable
    {
        public const int Timeout = 30_000;
        private bool _disposed;
        private ILogger _logger;

        public Libp2pTransportTest(ITestOutputHelper testOutputHelper)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffff}[{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(testOutputHelper, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<Libp2pTransportTest>();
            _logger = Log.ForContext<Libp2pTransportTest>();
        }

        ~Libp2pTransportTest()
        {
            Dispose(false);
        }

        [Fact(Timeout = Timeout)]
        public async Task Initialize()
        {
            PrivateKey privateKey = new PrivateKey();
            int freePort = TestUtils.GetFreePort();
            HostOptions hostOptions = new HostOptions("127.0.0.1", new IceServer[] { }, freePort);
            Libp2pTransport transport = new Libp2pTransport(
                privateKey,
                new AppProtocolVersionOptions(),
                hostOptions);
            Assert.Throws<NullReferenceException>(() => transport.AsPeer);
            Assert.Throws<NullReferenceException>(() => transport.LocalPeer);
            Assert.Throws<NullReferenceException>(() => transport.Listener);
            Assert.Throws<NullReferenceException>(() => transport.ListenerAddress);

            transport = await Libp2pTransport.Create(
                privateKey,
                new AppProtocolVersionOptions(),
                hostOptions);
            BoundPeer expected = new BoundPeer(
                CryptoKeyConverter.ToLibplanetPublicKey(
                    CryptoKeyConverter.ToLibp2pIdentity(privateKey).PublicKey),
                new DnsEndPoint("127.0.0.1", freePort));
            Assert.Equal(expected, transport.AsPeer);
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true)]
        [InlineData(false)]
        public async Task DialToListeners(bool usePortZero)
        {
            // NOTE: Using port 0 does not work for this test.
            int count = 2;
            List<int> freePorts = usePortZero
                ? Enumerable.Range(0, count).Select(_ => 0).ToList()
                : TestUtils.GetFreePorts(count);
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<Libp2pTransport> transports = Enumerable
                .Range(0, count)
                .Select(i => new Libp2pTransport(
                    privateKeys[i],
                    new AppProtocolVersionOptions(),
                    new HostOptions("127.0.0.1", new IceServer[] { }, freePorts[i])))
                .ToList();
            List<IServiceProvider> serviceProviders = transports
                .Select(transport => GetServiceProvider(transport))
                .ToList();
            List<IPeerFactory> peerFactories = serviceProviders
                .Select(serviceProvider => serviceProvider.GetService<IPeerFactory>()!)
                .ToList();
            List<ILocalPeer> localPeers = Enumerable
                .Range(0, count)
                .Select(i => peerFactories[i].Create(
                    CryptoKeyConverter.ToLibp2pIdentity(privateKeys[i]),
                    $"/ip4/127.0.0.1/tcp/{freePorts[i]}"))
                .ToList();
            List<IListener> listeners = Enumerable
                .Range(0, count)
                .Select(async i =>
                    await localPeers[i].ListenAsync($"/ip4/127.0.0.1/tcp/{freePorts[i]}", default))
                .Select(task => task.Result)
                .ToList();
            List<Multiaddress> listenerAddresses = listeners
                .Select(listener => listener.Address)
                .ToList();

            IRemotePeer remote0 = await localPeers[0].DialAsync(listenerAddresses[1], default);
            IRemotePeer remote1 = await localPeers[1].DialAsync(listenerAddresses[0], default);

            Assert.Equal(listenerAddresses[1], remote0.Address);
            Assert.Equal(listenerAddresses[0], remote1.Address);
        }

        [Fact(Timeout = Timeout)]
        public async Task DialCancel()
        {
            PrivateKey privateKey = new PrivateKey();
            List<int> freePorts = TestUtils.GetFreePorts(2);
            Libp2pTransport transport = await Libp2pTransport.Create(
                privateKey,
                new AppProtocolVersionOptions(),
                new HostOptions("127.0.0.1", new IceServer[] { }, freePorts[0]));

            Identity identity = CryptoKeyConverter.ToLibp2pIdentity(new PrivateKey());
            Multiaddress badAddress = $"/ip4/127.0.0.1/tcp/{freePorts[1]}/p2p/{identity.PeerId}";
            CancellationTokenSource cts = new CancellationTokenSource();
            cts.CancelAfter(1_000);
            await Assert.ThrowsAsync<TaskCanceledException>(
                async () => await transport.LocalPeer.DialAsync(badAddress, cts.Token));
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true)]
        [InlineData(false)]
        public async Task DialToTransports(bool usePortZero)
        {
            int count = 2;
            List<int> freePorts = usePortZero
                ? Enumerable.Range(0, count).Select(_ => 0).ToList()
                : TestUtils.GetFreePorts(count);
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<HostOptions> hosts = freePorts
                .Select(freePort => new HostOptions("127.0.0.1", new IceServer[] { }, freePort))
                .ToList();
            List<Libp2pTransport> transports = Enumerable
                .Range(0, 2)
                .Select(async i => await Libp2pTransport.Create(
                    privateKeys[i],
                    new AppProtocolVersionOptions(),
                    hosts[i]))
                .Select(task => task.Result)
                .ToList();

            IRemotePeer remote0 = await transports[0].LocalPeer.DialAsync(
                transports[1].ListenerAddress, default);
            IRemotePeer remote1 = await transports[1].LocalPeer.DialAsync(
                transports[0].ListenerAddress, default);

            Assert.Equal(transports[1].ListenerAddress, remote0.Address);
            Assert.Equal(transports[0].ListenerAddress, remote1.Address);
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true)]
        [InlineData(false)]
        public async Task RequestReply(bool usePortZero)
        {
            int count = 2;
            List<int> freePorts = usePortZero
                ? Enumerable.Range(0, count).Select(_ => 0).ToList()
                : TestUtils.GetFreePorts(count);
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<Libp2pTransport> transports = Enumerable
                .Range(0, count)
                .Select(async i => await Libp2pTransport.Create(
                    privateKeys[i],
                    new AppProtocolVersionOptions(),
                    new HostOptions("127.0.0.1", new IceServer[] { }, freePorts[i])))
                .Select(task => task.Result)
                .ToList();

            transports[1].ProcessMessageHandler.Register(async (message, channel) =>
            {
                if (message.Content is PingMsg)
                {
                    await channel.Writer.WriteAsync(new PongMsg());
                }
            });

            Message reply = await transports[0].SendMessageAsync(
                transports[1].AsPeer,
                new PingMsg(),
                TimeSpan.FromSeconds(5),
                default);
            Assert.IsType<PongMsg>(reply.Content);
        }

        [Theory(Timeout = Timeout)]
        [InlineData(true)]
        [InlineData(false)]
        public async Task Broadcast(bool usePortZero)
        {
            int count = 4;
            List<int> freePorts = usePortZero
                ? Enumerable.Range(0, count).Select(_ => 0).ToList()
                : TestUtils.GetFreePorts(count);
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<Libp2pTransport> transports = Enumerable
                .Range(0, count)
                .Select(async i => await Libp2pTransport.Create(
                    privateKeys[i],
                    new AppProtocolVersionOptions(),
                    new HostOptions("127.0.0.1", new IceServer[] { }, freePorts[i])))
                .Select(task => task.Result)
                .ToList();

            int receivedCount = 0;
            foreach (var transport in transports.Skip(1).ToList())
            {
                transport.ProcessMessageHandler.Register(async (message, channel) =>
                {
                    if (message.Content is PingMsg)
                    {
                        await channel.Writer.WriteAsync(new PongMsg());
                        receivedCount++;
                    }
                });
            }

            transports[0].BroadcastMessage(
                transports.Skip(1).Select(transport => transport.AsPeer).ToList(),
                new PingMsg());
            await Task.Delay(1_000);
            Assert.Equal(count - 1, receivedCount);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                _disposed = true;
            }
        }

        private IServiceProvider GetServiceProvider(ITransport transport)
        {
            return new ServiceCollection()
                .AddLibp2p(builder => builder
                    .AddAppLayerProtocol<ReqRepProtocol>(new ReqRepProtocol(transport)))
                .BuildServiceProvider();
        }
    }
}
