#nullable disable
using System;
using System.Net;
using System.Net.Sockets;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Transports;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Net.Tests.Transports
{
    [Collection("NetMQConfiguration")]
    public class NetMQTransportTest : TransportTest, IDisposable
    {
        private bool _disposed;

        public NetMQTransportTest(ITestOutputHelper testOutputHelper)
        {
            TransportConstructor = async (
                    privateKey,
                    appProtocolVersionOptions,
                    hostOptions,
                    messageTimestampBuffer) =>
                await CreateNetMQTransport(
                    privateKey,
                    appProtocolVersionOptions,
                    hostOptions,
                    messageTimestampBuffer);

            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffff}[{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(testOutputHelper, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<NetMQTransportTest>();
            Logger = Log.ForContext<NetMQTransportTest>();
        }

        ~NetMQTransportTest()
        {
            Dispose(false);
        }

        [Fact]
        public async Task SendMessageAsyncNetMQSocketLeak()
        {
            int previousMaxSocket = NetMQConfig.MaxSockets;

            try
            {
                // An arbitrary number to fit one transport testing.
                NetMQConfig.MaxSockets = 12;
                NetMQTransport transport = await NetMQTransport.Create(
                    new PrivateKey(),
                    new AppProtocolVersionOptions(),
                    new HostOptions(IPAddress.Loopback.ToString(), new IceServer[] { }, 0)
                ).ConfigureAwait(false);
                transport.ProcessMessageHandler.Register(
                    async m =>
                    {
                        await transport.ReplyMessageAsync(
                            new PongMsg
                            {
                                Identity = m.Identity,
                            },
                            CancellationToken.None
                        );
                    }
                );
                await InitializeAsync(transport);

                string invalidHost = Guid.NewGuid().ToString();

                // it isn't assertion for Libplanet codes, but to make sure that `invalidHost`
                // really fails lookup before moving to the next step.
                Assert.ThrowsAny<SocketException>(() =>
                {
                    Dns.GetHostEntry(invalidHost);
                });
                var invalidPeer = new BoundPeer(
                    new PrivateKey().PublicKey,
                    new DnsEndPoint(invalidHost, 0)
                );

                CommunicationFailException exc =
                    await Assert.ThrowsAsync<CommunicationFailException>(
                        () => transport.SendMessageAsync(
                            invalidPeer,
                            new PingMsg(),
                            TimeSpan.FromSeconds(5),
                            default
                        )
                    );

                // Expecting SocketException about host resolving since `invalidPeer` has an
                // invalid hostname
                Assert.IsAssignableFrom<SocketException>(exc.InnerException);

                // Check sending/receiving after exceptions exceeding NetMQConifg.MaxSockets.
                Message reply = await transport.SendMessageAsync(
                    transport.AsPeer,
                    new PingMsg(),
                    TimeSpan.FromSeconds(1),
                    default
                );
                Assert.IsType<PongMsg>(reply);

                await transport.StopAsync(TimeSpan.Zero, CancellationToken.None);
            }
            finally
            {
                NetMQConfig.MaxSockets = previousMaxSocket;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    NetMQConfig.Cleanup(false);
                }

                _disposed = true;
            }
        }

        private Task<NetMQTransport> CreateNetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersionOptions appProtocolVersionOptions,
            HostOptions hostOptions,
            TimeSpan? messageTimestampBuffer)
        {
            privateKey = privateKey ?? new PrivateKey();
            return NetMQTransport.Create(
                privateKey,
                appProtocolVersionOptions,
                hostOptions,
                messageTimestampBuffer
            );
        }
    }
}
