using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using NetMQ;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net.Transports
{
    [Collection("NetMQConfiguration")]
    public class NetMQTransportTest : TransportTest, IDisposable
    {
        public NetMQTransportTest(ITestOutputHelper testOutputHelper)
        {
            TransportConstructor = (
                    table,
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
                    minimumBroadcastTarget,
                    messageLifespan
                )
                => CreateNetMQTransport(
                    table,
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    50,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
                    minimumBroadcastTarget,
                    messageLifespan);

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

        public void Dispose()
        {
            NetMQConfig.Cleanup(false);
        }

        private NetMQTransport CreateNetMQTransport(
            PrivateKey privateKey = null,
            int tableSize = 160,
            int bucketSize = 16,
            AppProtocolVersion appProtocolVersion = default,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners = null,
            int workers = 50,
            string host = null,
            int? listenPort = null,
            IEnumerable<IceServer> iceServers = null,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered = null,
            int minimumBroadcastTarget = 10,
            TimeSpan? messageLifespan = null
        )
        {
            privateKey = privateKey ?? new PrivateKey();
            host = host ?? IPAddress.Loopback.ToString();
            var table = new RoutingTable(privateKey.ToAddress(), tableSize, bucketSize);

            return new NetMQTransport(
                table,
                privateKey,
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                minimumBroadcastTarget,
                messageLifespan);
        }

        private NetMQTransport CreateNetMQTransport(
            RoutingTable table,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            int minimumBroadcastTarget,
            TimeSpan? messageLifespan
        )
        {
            return new NetMQTransport(
                table,
                privateKey,
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                minimumBroadcastTarget,
                messageLifespan);
        }
    }
}
