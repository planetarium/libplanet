#nullable disable
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Sdk;
using static Libplanet.Net.Tests.TestUtils;

namespace Libplanet.Net.Tests.Transports
{
    public abstract class TransportTest
    {
        protected const int Timeout = 60 * 1000;

        protected ILogger Logger { get; set; }

        #pragma warning disable MEN002
        protected Func<PrivateKey, AppProtocolVersionOptions, HostOptions, TimeSpan?, Task<ITransport>> TransportConstructor { get; set; }
        #pragma warning restore MEN002

        [SkippableFact(Timeout = Timeout)]
        public async Task StartAsync()
        {
            ITransport transport = await CreateTransportAsync().ConfigureAwait(false);

            try
            {
                _ = transport.StartAsync();
                await transport.WaitForRunningAsync();
                Assert.True(transport.Running);
            }
            finally
            {
                transport.Dispose();
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task RestartAsync()
        {
            ITransport transport = await CreateTransportAsync().ConfigureAwait(false);

            try
            {
                await InitializeAsync(transport);
                Assert.True(transport.Running);
                await transport.StopAsync(TimeSpan.Zero);
                Assert.False(transport.Running);

                await InitializeAsync(transport);
                Assert.True(transport.Running);
            }
            finally
            {
                transport.Dispose();
                if (transport is NetMQTransport)
                {
                    NetMQConfig.Cleanup(false);
                }
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task DisposeTest()
        {
            ITransport transport = await CreateTransportAsync().ConfigureAwait(false);

            try
            {
                await InitializeAsync(transport);
                Assert.True(transport.Running);
                transport.Dispose();
                var boundPeer = new BoundPeer(
                    new PrivateKey().PublicKey,
                    new DnsEndPoint("localhost", 1234));
                var message = new PingMsg();
                await Assert.ThrowsAsync<ObjectDisposedException>(
                    async () => await transport.StartAsync());
                await Assert.ThrowsAsync<ObjectDisposedException>(
                    async () => await transport.StopAsync(TimeSpan.Zero));
                await Assert.ThrowsAsync<ObjectDisposedException>(
                    async () => await transport.SendMessageAsync(
                        boundPeer,
                        message,
                        null,
                        default));
                await Assert.ThrowsAsync<ObjectDisposedException>(
                    async () => await transport.SendMessageAsync(
                        boundPeer,
                        message,
                        null,
                        3,
                        false,
                        default));
                Assert.Throws<ObjectDisposedException>(
                    () => transport.BroadcastMessage(null, message));
                await Assert.ThrowsAsync<ObjectDisposedException>(
                    async () => await transport.ReplyMessageAsync(message, default));

                // To check multiple Dispose() throws error or not.
                transport.Dispose();
            }
            finally
            {
                transport.Dispose();
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task AsPeer()
        {
            var privateKey = new PrivateKey();
            string host = IPAddress.Loopback.ToString();
            ITransport transport =
                await CreateTransportAsync(privateKey: privateKey).ConfigureAwait(false);

            try
            {
                var peer = transport.AsPeer;
                Assert.Equal(privateKey.ToAddress(), peer.Address);
                Assert.Equal(host, peer.EndPoint.Host);
            }
            finally
            {
                transport.Dispose();
            }
        }

        // This also tests ITransport.ReplyMessageAsync at the same time.
        [SkippableFact(Timeout = Timeout)]
        public async Task SendMessageAsync()
        {
            ITransport transportA = await CreateTransportAsync().ConfigureAwait(false);
            ITransport transportB = await CreateTransportAsync().ConfigureAwait(false);

            transportB.ProcessMessageHandler.Register(async message =>
            {
                if (message is PingMsg)
                {
                    await transportB.ReplyMessageAsync(
                        new PongMsg
                        {
                            Identity = message.Identity,
                        },
                        CancellationToken.None);
                }
            });

            try
            {
                await InitializeAsync(transportA);
                await InitializeAsync(transportB);

                Message reply = await transportA.SendMessageAsync(
                    transportB.AsPeer,
                    new PingMsg(),
                    TimeSpan.FromSeconds(3),
                    CancellationToken.None);

                Assert.IsType<PongMsg>(reply);
            }
            finally
            {
                transportA.Dispose();
                transportB.Dispose();
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task SendMessageCancelAsync()
        {
            ITransport transportA = await CreateTransportAsync().ConfigureAwait(false);
            ITransport transportB = await CreateTransportAsync().ConfigureAwait(false);
            var cts = new CancellationTokenSource();

            try
            {
                await InitializeAsync(transportA, default);
                await InitializeAsync(transportB, default);

                cts.CancelAfter(TimeSpan.FromSeconds(1));
                await Assert.ThrowsAsync<TaskCanceledException>(
                    async () => await transportA.SendMessageAsync(
                        transportB.AsPeer,
                        new PingMsg(),
                        null,
                        cts.Token));
            }
            finally
            {
                transportA.Dispose();
                transportB.Dispose();
                cts.Dispose();
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task SendMessageMultipleRepliesAsync()
        {
            ITransport transportA = await CreateTransportAsync().ConfigureAwait(false);
            ITransport transportB = await CreateTransportAsync().ConfigureAwait(false);

            transportB.ProcessMessageHandler.Register(async message =>
            {
                if (message is PingMsg)
                {
                    await transportB.ReplyMessageAsync(
                        new PingMsg
                        {
                            Identity = message.Identity,
                        },
                        default);
                    await transportB.ReplyMessageAsync(
                        new PongMsg
                        {
                            Identity = message.Identity,
                        },
                        default);
                }
            });

            try
            {
                await InitializeAsync(transportA);
                await InitializeAsync(transportB);

                var replies = (await transportA.SendMessageAsync(
                    transportB.AsPeer,
                    new PingMsg(),
                    TimeSpan.FromSeconds(3),
                    2,
                    false,
                    CancellationToken.None)).ToArray();

                Assert.Contains(replies, message => message is PingMsg);
                Assert.Contains(replies, message => message is PongMsg);
            }
            finally
            {
                transportA.Dispose();
                transportB.Dispose();
            }
        }

        // This also tests ITransport.ReplyMessage at the same time.
        [SkippableFact(Timeout = Timeout)]
        public async Task SendMessageAsyncTimeout()
        {
            ITransport transportA = await CreateTransportAsync().ConfigureAwait(false);
            ITransport transportB = await CreateTransportAsync().ConfigureAwait(false);

            try
            {
                await InitializeAsync(transportA);
                await InitializeAsync(transportB);

                var e = await Assert.ThrowsAsync<CommunicationFailException>(
                    async () => await transportA.SendMessageAsync(
                        transportB.AsPeer,
                        new PingMsg(),
                        TimeSpan.FromSeconds(3),
                        CancellationToken.None));
                Assert.True(e.InnerException is TimeoutException ie);
            }
            finally
            {
                transportA.Dispose();
                transportB.Dispose();
            }
        }

        [SkippableTheory(Timeout = Timeout)]
        [ClassData(typeof(TransportTestInvalidPeers))]
        public async Task SendMessageToInvalidPeerAsync(BoundPeer invalidPeer)
        {
            ITransport transport = await CreateTransportAsync().ConfigureAwait(false);

            try
            {
                await InitializeAsync(transport);
                Task task = transport.SendMessageAsync(
                    invalidPeer,
                    new PingMsg(),
                    TimeSpan.FromSeconds(5),
                    default);

                // TcpTransport and NetMQTransport fail for different reasons, i.e.
                // a thrown exception for each case has a different inner exception.
                await Assert.ThrowsAsync<CommunicationFailException>(async () => await task);
            }
            finally
            {
                transport.Dispose();
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task SendMessageAsyncCancelWhenTransportStop()
        {
            ITransport transportA = await CreateTransportAsync().ConfigureAwait(false);
            ITransport transportB = await CreateTransportAsync().ConfigureAwait(false);

            try
            {
                await InitializeAsync(transportA);
                await InitializeAsync(transportB);

                Task t = transportA.SendMessageAsync(
                        transportB.AsPeer,
                        new PingMsg(),
                        null,
                        CancellationToken.None);

                // For context change
                await Task.Delay(100);

                await transportA.StopAsync(TimeSpan.Zero);
                Assert.False(transportA.Running);
                await Assert.ThrowsAsync<TaskCanceledException>(async () => await t);
                Assert.True(t.IsCanceled);
            }
            finally
            {
                transportA.Dispose();
                transportB.Dispose();
            }
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task BroadcastMessage()
        {
            var address = new PrivateKey().ToAddress();
            ITransport transportA = null;
            ITransport transportB = await CreateTransportAsync(
                privateKey: GeneratePrivateKeyOfBucketIndex(address, 0));
            ITransport transportC = await CreateTransportAsync(
                privateKey: GeneratePrivateKeyOfBucketIndex(address, 1));
            ITransport transportD = await CreateTransportAsync(
                privateKey: GeneratePrivateKeyOfBucketIndex(address, 2));

            var tcsB = new TaskCompletionSource<Message>();
            var tcsC = new TaskCompletionSource<Message>();
            var tcsD = new TaskCompletionSource<Message>();

            transportB.ProcessMessageHandler.Register(MessageHandler(tcsB));
            transportC.ProcessMessageHandler.Register(MessageHandler(tcsC));
            transportD.ProcessMessageHandler.Register(MessageHandler(tcsD));

            Func<Message, Task> MessageHandler(TaskCompletionSource<Message> tcs)
            {
                return async message =>
                {
                    if (message is PingMsg)
                    {
                        tcs.SetResult(message);
                    }

                    await Task.Yield();
                };
            }

            try
            {
                await InitializeAsync(transportB);
                await InitializeAsync(transportC);
                await InitializeAsync(transportD);

                var table = new RoutingTable(address, bucketSize: 1);
                table.AddPeer(transportB.AsPeer);
                table.AddPeer(transportC.AsPeer);
                table.AddPeer(transportD.AsPeer);

                transportA = await CreateTransportAsync().ConfigureAwait(false);
                await InitializeAsync(transportA);

                transportA.BroadcastMessage(
                    table.PeersToBroadcast(transportD.AsPeer.Address),
                    new PingMsg());

                await Task.WhenAll(tcsB.Task, tcsC.Task);

                Assert.IsType<PingMsg>(tcsB.Task.Result);
                Assert.IsType<PingMsg>(tcsC.Task.Result);
                Assert.False(tcsD.Task.IsCompleted);

                tcsD.SetCanceled();
            }
            finally
            {
                transportA?.Dispose();
                transportB.Dispose();
                transportC.Dispose();
                transportD.Dispose();
            }
        }

        protected async Task InitializeAsync(
            ITransport transport,
            CancellationToken cts = default)
        {
            _ = transport.StartAsync(cts);
            await transport.WaitForRunningAsync();
        }

        private Task<ITransport> CreateTransportAsync(
            PrivateKey privateKey = null,
            AppProtocolVersionOptions appProtocolVersionOptions = null,
            HostOptions hostOptions = null,
            TimeSpan? messageTimestampBuffer = null
        )
        {
            if (TransportConstructor is null)
            {
                throw new XunitException("Transport constructor is not defined.");
            }

            privateKey = privateKey ?? new PrivateKey();
            return TransportConstructor(
                privateKey,
                appProtocolVersionOptions ?? new AppProtocolVersionOptions(),
                hostOptions ?? new HostOptions(
                    IPAddress.Loopback.ToString(), new IceServer[] { }, 0),
                messageTimestampBuffer);
        }

        private class TransportTestInvalidPeers : IEnumerable<object[]>
        {
            public IEnumerator<object[]> GetEnumerator()
            {
                // Make sure the tcp port is invalid.
                var l = new TcpListener(IPAddress.Loopback, 0);
                l.Start();
                int port = ((IPEndPoint)l.LocalEndpoint).Port;
                l.Stop();

                yield return new[]
                {
                    new BoundPeer(
                        new PrivateKey().PublicKey,
                        new DnsEndPoint("0.0.0.0", port)),
                };
            }

            IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
        }
    }
}
