#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
    public class Libp2pTransportTest : IDisposable
    {
        private bool _disposed;
        private Serilog.ILogger _logger;

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

        [Fact(Timeout = 10_000)]
        public async Task Initialize()
        {
            PrivateKey privateKey = new PrivateKey();
            int freePort = TestUtils.GetFreePort();
            HostOptions hostOptions = new HostOptions("127.0.0.1", new IceServer[] { }, freePort);
            Libp2pTransport transport = new Libp2pTransport(
                privateKey,
                default,
                hostOptions);
            Assert.Throws<NullReferenceException>(() => transport.AsPeer);
            Assert.Throws<NullReferenceException>(() => transport.LocalPeer);
            Assert.Throws<NullReferenceException>(() => transport.Listener);
            Assert.Throws<NullReferenceException>(() => transport.ListenerAddress);

            await transport.Initialize(GetServiceProvider(transport));
            BoundPeer expected = new BoundPeer(
                CryptoKeyConverter.ToLibplanetPublicKey(
                    CryptoKeyConverter.ToLibp2pIdentity(privateKey).PublicKey),
                new DnsEndPoint("127.0.0.1", freePort));
            Assert.Equal(expected, transport.AsPeer);
        }

        [Fact(Timeout = 10_000)]
        public async Task DialToListeners()
        {
            int count = 2;
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<Libp2pTransport> transports = Enumerable
                .Range(0, count)
                .Select(i => new Libp2pTransport(
                    privateKeys[i],
                    new AppProtocolVersionOptions(),
                    new HostOptions("127.0.0.1", new IceServer[] { }, 0)))
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
                    "/ip4/127.0.0.1/tcp/0"))
                .ToList();
            List<IListener> listeners = localPeers
                .Select(async localPeer =>
                    await localPeer.ListenAsync("/ip4/127.0.0.1/tcp/0", default))
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

        [Fact(Timeout = 10_000)]
        public async Task DialToTransports()
        {
            int count = 2;
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<int> freePorts = TestUtils.GetFreePorts(2);
            List<HostOptions> hosts = freePorts
                .Select(freePort => new HostOptions("127.0.0.1", new IceServer[] { }, freePort))
                .ToList();
            List<Libp2pTransport> transports = Enumerable
                .Range(0, 2)
                .Select(i => new Libp2pTransport(
                    privateKeys[i],
                    new AppProtocolVersionOptions(),
                    hosts[i]))
                .ToList();
            List<IServiceProvider> serviceProviders = transports
                .Select(transport => GetServiceProvider(transport))
                .ToList();

            for (int i = 0; i < count; i++)
            {
                await transports[i].Initialize(serviceProviders[i]);
            }

            IRemotePeer remote0 = await transports[0].LocalPeer.DialAsync(
                transports[1].ListenerAddress, default);
            IRemotePeer remote1 = await transports[1].LocalPeer.DialAsync(
                transports[0].ListenerAddress, default);

            Assert.Equal(transports[1].ListenerAddress, remote0.Address);
            Assert.Equal(transports[0].ListenerAddress, remote1.Address);
        }

        [Fact(Timeout = 10_000)]
        public async Task RequestReply()
        {
            int count = 2;
            List<PrivateKey> privateKeys = Enumerable
                .Range(0, count)
                .Select(_ => new PrivateKey())
                .ToList();
            List<int> freePorts = TestUtils.GetFreePorts(2);
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

            for (int i = 0; i < count; i++)
            {
                await transports[i].Initialize(serviceProviders[i]);
            }

            transports[1].ProcessMessageHandler.Register(async (message, channel) =>
            {
                if (message.Content is PingMsg)
                {
                    await channel.Writer.WriteAsync(new PongMsg());
                }
            });

            List<Message> reply = (await transports[0].SendMessageAsync(
                transports[1].AsPeer,
                new PingMsg(),
                TimeSpan.FromSeconds(5),
                1,
                true,
                default)).ToList();
            Message single = Assert.Single<Message>(reply);
            Assert.IsType<PongMsg>(single.Content);
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
