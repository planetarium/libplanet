using System;
using System.Diagnostics.Contracts;
using System.Net;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    /// <summary>
    /// A representation of peer node.
    /// </summary>
    /// <seealso cref="Swarm{TTxAction, TBlockAction}"/>
    [Serializable]
    [Equals]
    public class Peer : ISerializable
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Peer"/> class
        /// with omitting <see cref="AppProtocolVersion"/>.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the
        /// <see cref="Peer"/>.</param>
        /// <param name="endPoint">A <see cref="DnsEndPoint"/> consisting of the
        /// host and port of the <see cref="Peer"/>.</param>
        public Peer(
            PublicKey publicKey,
            DnsEndPoint endPoint)
            : this(publicKey, endPoint, default(int?), null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="Peer"/> class.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the
        /// <see cref="Peer"/>.</param>
        /// <param name="endPoint">A <see cref="DnsEndPoint"/> consisting of the
        /// host and port of the <see cref="Peer"/>.</param>
        /// <param name="appProtocolVersion">An application protocol version
        /// that the <see cref="Peer"/> is using.</param>
        public Peer(
            PublicKey publicKey,
            DnsEndPoint endPoint,
            int? appProtocolVersion)
        : this(publicKey, endPoint, appProtocolVersion, null)
        {
        }

        internal Peer(
            PublicKey publicKey,
            DnsEndPoint endPoint,
            int? appProtocolVersion,
            IPAddress publicIPAddress)
        {
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));
            EndPoint = endPoint ??
                       throw new ArgumentNullException(nameof(endPoint));
            AppProtocolVersion = appProtocolVersion;
            PublicIPAddress = publicIPAddress;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            EndPoint = new DnsEndPoint(
                info.GetString("end_point_host"),
                info.GetInt32("end_point_port"));
            AppProtocolVersion =
                info.GetValueOrDefault<int?>("app_protocol_version", null);
            string addressStr = info.GetString("public_ip_address");
            if (addressStr != null)
            {
                PublicIPAddress = IPAddress.Parse(addressStr);
            }
        }

        /// <summary>
        /// The corresponding <see cref="Libplanet.Crypto.PublicKey"/> of
        /// this peer.
        /// </summary>
        [Pure]
        public PublicKey PublicKey { get; }

        /// <summary>
        /// The corresponding <see cref="DnsEndPoint"/> of this peer.
        /// </summary>
        [Pure]
        public DnsEndPoint EndPoint { get; }

        /// <summary>
        /// The corresponding application protocol version of this peer.
        /// </summary>
        /// <seealso cref="Swarm{TTxAction, TBlockAction}.DifferentVersionPeerEncountered"/>
        [IgnoreDuringEquals]
        [Pure]
        public int? AppProtocolVersion { get; }

        /// <summary>The peer's address which is derived from
        /// its <see cref="PublicKey"/>.
        /// </summary>
        /// <seealso cref="PublicKey"/>
        [IgnoreDuringEquals]
        [Pure]
        public Address Address => new Address(PublicKey);

        [Pure]
        internal IPAddress PublicIPAddress { get; }

        /// <inheritdoc/>
        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("end_point_host", EndPoint.Host);
            info.AddValue("end_point_port", EndPoint.Port);
            info.AddValue("app_protocol_version", AppProtocolVersion);
            info.AddValue("public_ip_address", PublicIPAddress?.ToString());
        }

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{Address}.{EndPoint}.{AppProtocolVersion}";
        }

        internal Peer WithAppProtocolVersion(int appProtocolVersion)
        {
            return new Peer(
                PublicKey,
                EndPoint,
                appProtocolVersion,
                PublicIPAddress);
        }
    }
}
