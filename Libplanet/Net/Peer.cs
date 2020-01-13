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
    /// <seealso cref="Swarm{T}"/>
    [Serializable]
    [Equals]
    public class Peer : ISerializable
    {
        public Peer(
            PublicKey publicKey,
            int appProtocolVersion)
        : this(publicKey, appProtocolVersion, null)
        {
        }

        internal Peer(
            PublicKey publicKey,
            int appProtocolVersion,
            IPAddress publicIPAddress)
        {
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));
            AppProtocolVersion = appProtocolVersion;
            PublicIPAddress = publicIPAddress;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            AppProtocolVersion = info.GetInt32("app_protocol_version");
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
        /// The corresponding application protocol version of this peer.
        /// </summary>
        /// <seealso cref="NetMQTransport.DifferentVersionPeerEncountered"/>
        [IgnoreDuringEquals]
        [Pure]
        public int AppProtocolVersion { get; }

        /// <summary>The peer's address which is derived from
        /// its <see cref="PublicKey"/>.
        /// </summary>
        /// <seealso cref="PublicKey"/>
        [IgnoreDuringEquals]
        [Pure]
        public Address Address => new Address(PublicKey);

        [Pure]
        public IPAddress PublicIPAddress { get; }

        /// <inheritdoc/>
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("app_protocol_version", AppProtocolVersion);
            info.AddValue("public_ip_address", PublicIPAddress?.ToString());
        }

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{nameof(Peer)} {{ {nameof(Address)} = {Address} }}";
        }
    }
}
