using System;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Net;
using System.Runtime.Serialization;
using Bencodex.Types;
using Destructurama.Attributed;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    public sealed class BoundPeer : ISerializable, IEquatable<BoundPeer>
    {
        private static readonly byte[] PublicKeyKey = { 0x70 }; // 'p'
        private static readonly byte[] EndPointHostKey = { 0x68 }; // 'h'
        private static readonly byte[] EndPointPortKey = { 0x65 }; // 'e'
        private static readonly byte[] PublicIpAddressKey = { 0x50 }; // 'P'

        /// <summary>
        /// Initializes a new instance of the <see cref="BoundPeer"/> class.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the
        /// <see cref="BoundPeer"/>.</param>
        /// <param name="endPoint">A <see cref="DnsEndPoint"/> consisting of the
        /// host and port of the <see cref="BoundPeer"/>.</param>
        public BoundPeer(
            PublicKey publicKey,
            DnsEndPoint endPoint)
            : this(publicKey, endPoint, null)
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public BoundPeer(Bencodex.Types.Dictionary dictionary)
            : this(
                new PublicKey(((Binary)dictionary[PublicKeyKey]).ByteArray),
                new DnsEndPoint(
                    (Text)dictionary[EndPointHostKey], (Integer)dictionary[EndPointPortKey]),
                dictionary[PublicIpAddressKey] is Text text
                    ? IPAddress.Parse(text)
                    : null)
        {
        }
#pragma warning restore SA1118

        internal BoundPeer(
            PublicKey publicKey,
            DnsEndPoint endPoint,
            IPAddress? publicIPAddress)
        {
            PublicKey = publicKey;
            EndPoint = endPoint;
            PublicIPAddress = publicIPAddress;
        }

        private BoundPeer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>(nameof(PublicKey)));
            EndPoint = new DnsEndPoint(
                info.GetString("end_point_host"),
                info.GetInt32("end_point_port"));
            if (info.GetString(nameof(PublicIPAddress)) is string address)
            {
                PublicIPAddress = IPAddress.Parse(address);
            }
        }

        /// <summary>
        /// The corresponding <see cref="Libplanet.Crypto.PublicKey"/> of
        /// this peer.
        /// </summary>
        [LogAsScalar]
        [Pure]
        public PublicKey PublicKey { get; }

        /// <summary>The peer's address which is derived from
        /// its <see cref="PublicKey"/>.
        /// </summary>
        /// <seealso cref="PublicKey"/>
        [LogAsScalar]
        [Pure]
        public Address Address => new Address(PublicKey);

        /// <summary>
        /// The corresponding <see cref="DnsEndPoint"/> of this peer.
        /// </summary>
        [LogAsScalar]
        [Pure]
        public DnsEndPoint EndPoint { get; }

        [LogAsScalar]
        [Pure]
        public IPAddress? PublicIPAddress { get; }

        public string PeerString => $"{PublicKey},{EndPoint.Host},{EndPoint.Port}";

        public static bool operator ==(BoundPeer left, BoundPeer right) => left.Equals(right);

        public static bool operator !=(BoundPeer left, BoundPeer right) => !left.Equals(right);

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

        public bool Equals(BoundPeer? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return PublicKey.Equals(other.PublicKey) &&
                (PublicIPAddress?.Equals(other.PublicIPAddress) ?? other.PublicIPAddress is null) &&
                EndPoint.Equals(other.EndPoint);
        }

        public override bool Equals(object? obj) => obj is BoundPeer other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(
            HashCode.Combine(PublicKey.GetHashCode(), PublicIPAddress?.GetHashCode()), EndPoint);

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context)
        {
            info.AddValue(nameof(PublicKey), PublicKey.Format(true));
            info.AddValue("end_point_host", EndPoint.Host);
            info.AddValue("end_point_port", EndPoint.Port);
            info.AddValue(nameof(PublicIPAddress), PublicIPAddress?.ToString());
        }

        public Bencodex.Types.Dictionary ToBencodex() =>
            Bencodex.Types.Dictionary.Empty
                .Add(PublicKeyKey, PublicKey.Format(true))
                .Add(EndPointHostKey, EndPoint.Host)
                .Add(EndPointPortKey, EndPoint.Port)
                .Add(
                    PublicIpAddressKey,
                    PublicIPAddress is IPAddress ip ? (IValue)(Text)ip.ToString() : Null.Value);

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{Address}.{EndPoint}.{PublicIPAddress}";
        }
    }
}
