using System;
using System.Diagnostics.Contracts;
using System.Net;
using System.Runtime.Serialization;
using Bencodex.Types;
using Destructurama.Attributed;
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
        private static readonly byte[] PublicKeyKey = { 0x70 }; // 'p'
        private static readonly byte[] PublicIpAddressKey = { 0x50 }; // 'P'

        public Peer(PublicKey publicKey)
        : this(publicKey, null)
        {
        }

        public Peer(Bencodex.Types.Dictionary dictionary)
        : this(
            new PublicKey((Binary)dictionary[PublicKeyKey]),
            dictionary[PublicIpAddressKey] is Text text ? IPAddress.Parse(text) : null)
        {
        }

        internal Peer(
            PublicKey publicKey,
            IPAddress publicIPAddress)
        {
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));
            PublicIPAddress = publicIPAddress;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
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
        [LogAsScalar]
        [Pure]
        public PublicKey PublicKey { get; }

        /// <summary>The peer's address which is derived from
        /// its <see cref="PublicKey"/>.
        /// </summary>
        /// <seealso cref="PublicKey"/>
        [LogAsScalar]
        [IgnoreDuringEquals]
        [Pure]
        public Address Address => new Address(PublicKey);

        [LogAsScalar]
        [Pure]
        public IPAddress PublicIPAddress { get; }

        public static bool operator ==(Peer left, Peer right) => Operator.Weave(left, right);

        public static bool operator !=(Peer left, Peer right) => Operator.Weave(left, right);

        /// <inheritdoc/>
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("public_ip_address", PublicIPAddress?.ToString());
        }

        public virtual Bencodex.Types.Dictionary ToBencodex() => Bencodex.Types.Dictionary.Empty
            .Add(PublicKeyKey, PublicKey.Format(true))
            .Add(
                PublicIpAddressKey,
                !(PublicIPAddress is null) ? (IValue)(Text)PublicIPAddress.ToString() : Null.Value);

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{nameof(Peer)} {{ {nameof(Address)} = {Address} }}";
        }
    }
}
