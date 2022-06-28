using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Crypto;

namespace Libplanet.Net.Transports
{
    public static class InitTransport
    {
        public static ITransport Init(TransportParam param) => param.Type switch
        {
            TransportType.NetMQTransport => NetMQ(param),
            TransportType.TcpTransport => Tcp(param),
            _ => throw new ArgumentOutOfRangeException(),
        };

        private static NetMQTransport NetMQ(
            TransportParam param)
        {
            return new NetMQTransport(
                param.MessageSigner,
                param.AppProtocolVersion,
                param.TrustedAppProtocolVersionSigners,
                param.Workers ?? 50,
                param.Host,
                param.ListenPort,
                param.IceServers ?? new IceServer[0],
                param.DifferentAppProtocolVersionEncountered,
                param.MessageTimestampBuffer);
        }

        private static TcpTransport Tcp(
            TransportParam param)
        {
            return new TcpTransport(
                param.MessageSigner,
                param.AppProtocolVersion,
                param.TrustedAppProtocolVersionSigners,
                param.Host,
                param.ListenPort,
                param.IceServers ?? new IceServer[0],
                param.DifferentAppProtocolVersionEncountered,
                param.MessageTimestampBuffer);
        }

        public struct TransportParam
        {
            public TransportType Type { get; set; }

            public int? Workers { get; set; }

            public string Host { get; set; }

            public PrivateKey MessageSigner { get; set; }

            public AppProtocolVersion AppProtocolVersion { get; set; }

            public IImmutableSet<PublicKey> TrustedAppProtocolVersionSigners { get; set; }

            public DifferentAppProtocolVersionEncountered DifferentAppProtocolVersionEncountered
            {
                get;
                set;
            }

            public TimeSpan? MessageTimestampBuffer { get; set; }

            public int? ListenPort { get; set; }

            public IEnumerable<IceServer>? IceServers { get; set; }
        }
    }
}
