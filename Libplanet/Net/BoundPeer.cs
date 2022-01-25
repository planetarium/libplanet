using System;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Net;
using System.Runtime.Serialization;
using Bencodex.Types;
using Destructurama.Attributed;
using Libplanet.Crypto;

namespace Libplanet.Net
{
    [Serializable]
    [Equals]
    public sealed class BoundPeer : Peer
    {
        private static readonly byte[] EndPointHostKey = { 0x68 }; // 'h'
        private static readonly byte[] EndPointPortKey = { 0x65 }; // 'e'

        /// <summary>
        /// Initializes a new instance of the <see cref="BoundPeer"/> class.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the
        /// <see cref="Peer"/>.</param>
        /// <param name="endPoint">A <see cref="DnsEndPoint"/> consisting of the
        /// host and port of the <see cref="Peer"/>.</param>
        public BoundPeer(
            PublicKey publicKey,
            DnsEndPoint endPoint)
        : this(publicKey, endPoint, null)
        {
        }

        public BoundPeer(Bencodex.Types.Dictionary dictionary)
        : base(dictionary)
        {
            EndPoint = new DnsEndPoint(
                (Text)dictionary[EndPointHostKey],
                (Integer)dictionary[EndPointPortKey]);
        }

        internal BoundPeer(
            PublicKey publicKey,
            DnsEndPoint endPoint,
            IPAddress? publicIPAddress)
        : base(publicKey, publicIPAddress)
        {
            EndPoint = endPoint;
        }

        private BoundPeer(SerializationInfo info, StreamingContext context)
        : base(info, context)
        {
            EndPoint = new DnsEndPoint(
                info.GetString("end_point_host"),
                info.GetInt32("end_point_port"));
        }

        /// <summary>
        /// The corresponding <see cref="DnsEndPoint"/> of this peer.
        /// </summary>
        [LogAsScalar]
        [Pure]
        public DnsEndPoint EndPoint { get; }

        public static bool operator ==(BoundPeer left, BoundPeer right) =>
            Operator.Weave(left, right);

        public static bool operator !=(BoundPeer left, BoundPeer right) =>
            Operator.Weave(left, right);

        /// <summary>
        /// Initializes a new instance of the <see cref="BoundPeer"/> class from
        /// comma-separated string.</summary>
        /// <param name="peerInfo">A comma-separated string have format {pubkey},{host},{port}.
        /// </param>
        /// <returns>A <see cref="BoundPeer"/> from given data.</returns>
        /// <exception cref="ArgumentException">Thrown when the given peerInfo is invalid.
        /// </exception>
        public static BoundPeer ParsePeer(string peerInfo)
        {
            if (peerInfo is null)
            {
                throw new ArgumentNullException(nameof(peerInfo));
            }

            string[] tokens = peerInfo.Split(',');
            if (tokens.Length != 3)
            {
                throw new ArgumentException(
                    $"'{peerInfo}', should have format <pubkey>,<host>,<port>",
                    nameof(peerInfo)
                );
            }

            if (!(tokens[0].Length == 130 || tokens[0].Length == 66))
            {
                throw new ArgumentException(
                    $"'{peerInfo}', a length of public key must be 130 or 66 in hexadecimal," +
                    $" but the length of given public key '{tokens[0]}' doesn't.",
                    nameof(peerInfo)
                );
            }

            try
            {
                var pubKey = new PublicKey(ByteUtil.ParseHex(tokens[0]));
                var host = tokens[1];
                var port = int.Parse(tokens[2], CultureInfo.InvariantCulture);

                // FIXME: It might be better to make Peer.AppProtocolVersion property nullable...
                return new BoundPeer(
                    pubKey,
                    new DnsEndPoint(host, port));
            }
            catch (Exception e)
            {
                throw new ArgumentException(
                    $"{nameof(peerInfo)} seems invalid. [{peerInfo}]",
                    nameof(peerInfo),
                    innerException: e
                );
            }
        }

        /// <inheritdoc/>
        public override void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            base.GetObjectData(info, context);
            info.AddValue("end_point_host", EndPoint.Host);
            info.AddValue("end_point_port", EndPoint.Port);
        }

        public override Bencodex.Types.Dictionary ToBencodex() => base.ToBencodex()
            .Add(EndPointHostKey, EndPoint.Host)
            .Add(EndPointPortKey, EndPoint.Port);

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{Address}.{EndPoint}.{PublicIPAddress}";
        }
    }
}
