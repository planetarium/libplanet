using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net;
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
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
                    messageLifespan
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
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey> trustedAppProtocolVersionSigners,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered differentAppProtocolVersionEncountered,
            TimeSpan? messageLifespan
        )
        {
            privateKey = privateKey ?? new PrivateKey();
            host = host ?? IPAddress.Loopback.ToString();
            iceServers = iceServers ?? new IceServer[] { };

            return new NetMQTransport(
                privateKey,
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                messageLifespan);
        }
    }
}
