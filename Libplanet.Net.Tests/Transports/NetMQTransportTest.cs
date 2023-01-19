#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
        public NetMQTransportTest(ITestOutputHelper testOutputHelper)
        {
            TransportConstructor = (
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
                    messageTimestampBuffer
                )
                => CreateNetMQTransport(
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    50,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
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

        [SkippableFact]
        public async Task SendMessageAsyncNetMQSocketLeak()
        {
            int previousMaxSocket = NetMQConfig.MaxSockets;

            try
            {
                // An arbitrary number to fit one transport testing.
                NetMQConfig.MaxSockets = 12;
                NetMQTransport transport = await NetMQTransport.Create(
                    new PrivateKey(),
                    default(AppProtocolVersion),
                    ImmutableHashSet.Create<PublicKey>(),
                    100,
                    "localhost",
                    null,
                    new IceServer[] { },
                    null
                );
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
            NetMQConfig.Cleanup(false);
        }

        private NetMQTransport CreateNetMQTransport(
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            TimeSpan? messageTimestampBuffer
        )
        {
            privateKey = privateKey ?? new PrivateKey();
            host = host ?? IPAddress.Loopback.ToString();
            iceServers = iceServers ?? new List<IceServer>();

            return NetMQTransport.Create(
                privateKey,
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                messageTimestampBuffer).ConfigureAwait(false).GetAwaiter().GetResult();
        }
    }
}
