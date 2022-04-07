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
    public class Peer : ISerializable, IEquatable<Peer>
    {
        private static readonly byte[] PublicKeyKey = { 0x70 }; // 'p'
        private static readonly byte[] PublicIpAddressKey = { 0x50 }; // 'P'

        public Peer(PublicKey publicKey)
        : this(publicKey, null)
        {
        }

        public Peer(Bencodex.Types.Dictionary dictionary)
        : this(
            new PublicKey(((Binary)dictionary[PublicKeyKey]).ByteArray),
            dictionary[PublicIpAddressKey] is Text text ? IPAddress.Parse(text) : null)
        {
        }

        internal Peer(
            PublicKey publicKey,
            IPAddress? publicIPAddress)
        {
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));
            PublicIPAddress = publicIPAddress;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>(nameof(PublicKey)));
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

        [LogAsScalar]
        [Pure]
        public IPAddress? PublicIPAddress { get; }

        public static bool operator ==(Peer left, Peer right) => left.Equals(right);

        public static bool operator !=(Peer left, Peer right) => !left.Equals(right);

        public bool Equals(Peer? other)
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
                   (PublicIPAddress?.Equals(other.PublicIPAddress) ??
                    other.PublicIPAddress is null);
        }

        public override bool Equals(object? obj) => obj is Peer other && Equals(other);

        public override int GetHashCode() =>
            HashCode.Combine(PublicKey.GetHashCode(), PublicIPAddress?.GetHashCode());

        /// <inheritdoc/>
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue(nameof(PublicKey), PublicKey.Format(true));
            info.AddValue(nameof(PublicIPAddress), PublicIPAddress?.ToString());
        }

        public virtual Bencodex.Types.Dictionary ToBencodex() => Bencodex.Types.Dictionary.Empty
            .Add(PublicKeyKey, PublicKey.Format(true))
            .Add(
                PublicIpAddressKey,
                PublicIPAddress is IPAddress ip ? (IValue)(Text)ip.ToString() : Null.Value);

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{nameof(Peer)} {{ {nameof(Address)} = {Address} }}";
        }
    }
}
