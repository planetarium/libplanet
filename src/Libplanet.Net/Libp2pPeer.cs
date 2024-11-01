using System;
using System.Diagnostics.Contracts;
using System.Net;
using Bencodex;
using Bencodex.Types;
using Destructurama.Attributed;
using Libplanet.Crypto;
using Multiformats.Address;
using Multiformats.Address.Net;
using Nethermind.Libp2p.Core;

namespace Libplanet.Net
{
#pragma warning disable S101 // Class name.
    public sealed class Libp2pPeer : IEquatable<Libp2pPeer>, IBencodable
#pragma warning restore S101
    {
        private static readonly Codec _codec = new Codec();

        public Libp2pPeer(Multiaddress multiaddress)
        {
            Multiaddress = multiaddress;
        }

        public Libp2pPeer(Bencodex.Types.IValue bencoded)
            : this(bencoded is Bencodex.Types.Text text
                ? text
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Bencodex.Types.Text)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private Libp2pPeer(Bencodex.Types.Text bencoded)
        {
            Multiaddress = bencoded.Value;
        }

        public Multiaddress Multiaddress { get; }

        /// <summary>
        /// The corresponding <see cref="Libplanet.Crypto.PublicKey"/> of
        /// this peer.
        /// </summary>
        [LogAsScalar]
        [Pure]
        public PublicKey PublicKey =>
            CryptoKeyConverter.ToLibplanetPublicKey(Multiaddress.GetPeerId() ??
                throw new NullReferenceException());

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
        public DnsEndPoint EndPoint
        {
            get
            {
                IPEndPoint ipEndPoint = Multiaddress.ToEndPoint();
                return new DnsEndPoint(ipEndPoint.Address.ToString(), ipEndPoint.Port);
            }
        }

        public string PeerString => Multiaddress.ToString();

        /// <inheritdoc/>
        [Pure]
        public Bencodex.Types.IValue Bencoded => new Text(Multiaddress.ToString());

        public static bool operator ==(Libp2pPeer left, Libp2pPeer right) => left.Equals(right);

        public static bool operator !=(Libp2pPeer left, Libp2pPeer right) => !left.Equals(right);

        public bool Equals(Libp2pPeer? other)
        {
            if (other is null)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            return Multiaddress.Equals(other.Multiaddress);
        }

        public override bool Equals(object? obj) => obj is Libp2pPeer other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(PublicKey.GetHashCode(), EndPoint);

        /// <inheritdoc/>
        public override string ToString() => $"{Multiaddress}";
    }
}
