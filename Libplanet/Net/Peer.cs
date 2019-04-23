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
    /// <seealso cref="Swarm"/>
    [Serializable]
    [Equals]
    public class Peer : ISerializable
    {
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
            PublicKey publicKey, DnsEndPoint endPoint, int appProtocolVersion)
        {
            if (publicKey == null)
            {
                throw new ArgumentNullException(nameof(publicKey));
            }
            else if (endPoint == null)
            {
                throw new ArgumentNullException(nameof(endPoint));
            }

            PublicKey = publicKey;
            EndPoint = endPoint;
            AppProtocolVersion = appProtocolVersion;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            EndPoint = new DnsEndPoint(
                info.GetString("end_point_host"),
                info.GetInt32("end_point_port"));
            AppProtocolVersion = info.GetInt32("app_protocol_version");
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
        /// <seealso cref="Swarm.DifferentVersionPeerEncountered"/>
        [IgnoreDuringEquals]
        [Pure]
        public int AppProtocolVersion { get; }

        /// <summary>The peer's address which is derviced from
        /// its <see cref="PublicKey"/>.
        /// </summary>
        /// <seealso cref="PublicKey"/>
        [IgnoreDuringEquals]
        [Pure]
        public Address Address => new Address(PublicKey);

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
        }

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{Address}.{EndPoint}.{AppProtocolVersion}";
        }
    }
}
