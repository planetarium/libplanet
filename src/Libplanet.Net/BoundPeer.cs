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
    [Serializable]
    public sealed class BoundPeer : IEquatable<BoundPeer>, IBencodable
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BoundPeer"/> class.
        /// </summary>
        /// <param name="publicKey">A <see cref="PublicKey"/> of the
        /// <see cref="BoundPeer"/>.</param>
        /// <param name="endPoint">A <see cref="DnsEndPoint"/> consisting of the
        /// host and port of the <see cref="BoundPeer"/>.</param>
        public BoundPeer(PublicKey publicKey, DnsEndPoint endPoint)
            : this(Uri.CheckHostName(endPoint.Host) == UriHostNameType.IPv4
                ? (Multiaddress)(
                    $"/ip4/{endPoint.Host}/tcp/{endPoint.Port}/p2p" +
                    $"/{new Identity(CryptoKeyConverter.ToLibp2pPublicKey(publicKey)).PeerId}")
                : throw new ArgumentException(
                    $"Given {nameof(endPoint)} has unknown host name type: {endPoint.Host}",
                    nameof(endPoint)))
        {
            // FIXME: Should support host types other than IPv4.
        }

        public BoundPeer(Multiaddress multiaddress)
        {
            if (multiaddress.GetPeerId() is null)
            {
                throw new NullReferenceException(
                    $"Given {nameof(multiaddress)} is missing peer id: {multiaddress}");
            }

            Multiaddress = multiaddress;
        }

        public BoundPeer(IValue bencoded)
            : this(bencoded is Text text
                ? text
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Text)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private BoundPeer(Text bencoded)
            : this((Multiaddress)bencoded.Value)
        {
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

        [LogAsScalar]
        [Pure]
        public IPAddress? PublicIPAddress => null;

        public string PeerString => Multiaddress.ToString();

        /// <inheritdoc/>
        [Pure]
        public IValue Bencoded => new Text(Multiaddress.ToString());

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
            try
            {
                return new BoundPeer((Multiaddress)peerInfo);
            }
            catch (Exception e)
            {
                throw new ArgumentException(
                    $"Given {nameof(peerInfo)} has invalid format: {peerInfo}",
                    nameof(peerInfo),
                    e);
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

            return Multiaddress.Equals(other.Multiaddress);
        }

        public override bool Equals(object? obj) => obj is BoundPeer other && Equals(other);

        public override int GetHashCode() => HashCode.Combine(PublicKey.GetHashCode(), EndPoint);

        /// <inheritdoc/>
        public override string ToString() => $"{Multiaddress}";
    }
}
