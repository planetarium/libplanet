using System;
using System.Diagnostics.Contracts;
using System.Net;
using System.Runtime.Serialization;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    [Equals]
    public sealed class BoundPeer : Peer
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BoundPeer"/> class.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the
        /// <see cref="Peer"/>.</param>
        /// <param name="endPoint">A <see cref="DnsEndPoint"/> consisting of the
        /// host and port of the <see cref="Peer"/>.</param>
        /// <param name="appProtocolVersion">An application protocol version
        /// that the <see cref="Peer"/> is using.</param>
        public BoundPeer(
            PublicKey publicKey,
            DnsEndPoint endPoint,
            int appProtocolVersion)
        : this(publicKey, endPoint, appProtocolVersion, null)
        {
        }

        internal BoundPeer(
            PublicKey publicKey,
            DnsEndPoint endPoint,
            int appProtocolVersion,
            IPAddress publicIPAddress)
        : base(publicKey, appProtocolVersion, publicIPAddress)
        {
            EndPoint = endPoint ?? throw new ArgumentNullException(nameof(endPoint));
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
        [Pure]
        public DnsEndPoint EndPoint { get; }

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

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{Address}.{EndPoint}.{AppProtocolVersion}";
        }
    }
}
