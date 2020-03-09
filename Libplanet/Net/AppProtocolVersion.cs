using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using NetMQ;

namespace Libplanet.Net
{
    /// <summary>
    /// A <em>claim</em> of a version.
    /// <para>Every peer in network shows others their <see cref="AppProtocolVersion"/> information.
    /// As every peer can change its software by itself, this <see cref="AppProtocolVersion"/>
    /// is theoretically arbitrary, hence a &#x201c;claim.&#x201d; (i.e., no authority).</para>
    /// <para>In order to verify who claimed a version, every <see cref="AppProtocolVersion"/>
    /// has its <see cref="Signature"/> which is made by its <see cref="Signer"/>.
    /// <see cref="Verify(PublicKey)"/> method purposes to determine whether an information
    /// is claimed by its corresponding <see cref="Signer"/> in fact.</para>
    /// </summary>
    public readonly struct AppProtocolVersion : IEquatable<AppProtocolVersion>
    {
        /// <summary>
        /// The version number.  This does not have to be increased by only 1, but can be more
        /// than that.
        /// </summary>
        public readonly int Version;

        /// <summary>
        /// Optional extra data about the version.  This can be used for any purpose
        /// by apps, such as a URL to download the software.
        /// </summary>
        public readonly IValue Extra;

        /// <summary>
        /// A signature which verifies <seealso cref="Signer"/>'s claim of a version.
        /// </summary>
        public readonly ImmutableArray<byte> Signature;

        /// <summary>
        /// A signer who claims presence of a version.
        /// </summary>
        public readonly Address Signer;

        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Initializes an <see cref="AppProtocolVersion"/> value with field values.
        /// </summary>
        /// <param name="version">Sets the <see cref="Version"/>.</param>
        /// <param name="extra">Sets the <see cref="Extra"/>.</param>
        /// <param name="signature">Sets the <see cref="Signature"/>.</param>
        /// <param name="signer">Gets the <see cref="Signer"/>.</param>
        public AppProtocolVersion(
            int version,
            IValue extra,
            ImmutableArray<byte> signature,
            Address signer
        )
        {
            Version = version;
            Extra = extra;
            Signature = signature;
            Signer = signer;
        }

        /// <summary>
        /// Claim a <paramref name="version"/> with <paramref name="extra"/> data and sign it
        /// using the given private key.
        /// </summary>
        /// <param name="signer">A private key to sign the claim.</param>
        /// <param name="version">A version to claim.</param>
        /// <param name="extra">Extra data to claim.</param>
        public AppProtocolVersion(PrivateKey signer, int version, IValue extra = null)
            : this(
                version,
                extra,
                ImmutableArray<byte>.Empty,
                new Address((signer ?? throw new ArgumentNullException(nameof(signer))).PublicKey)
            )
        {
            Signature = ImmutableArray.Create(signer.Sign(GetMessage()));
        }

        [Pure]
        public static bool operator ==(AppProtocolVersion left, AppProtocolVersion right) =>
            left.Equals(right);

        [Pure]
        public static bool operator !=(AppProtocolVersion left, AppProtocolVersion right) =>
            !(left == right);

        /// <summary>
        /// Verifies whether the claim is certainly signed by the <see cref="Signer"/>.
        /// </summary>
        /// <param name="publicKey">A public key of the <see cref="Signer"/>.</param>
        /// <returns><c>true</c> if and only if the given <paramref name="publicKey"/> is
        /// <see cref="Signer"/>'s and the <see cref="Signature"/> is certainly signed by
        /// the <see cref="Signer"/>.</returns>
        [Pure]
        public bool Verify(PublicKey publicKey) =>
            Signer.Equals(new Address(publicKey)) &&
            publicKey.Verify(GetMessage(), Signature.ToBuilder().ToArray());

        /// <inheritdoc/>
        [Pure]
        public bool Equals(AppProtocolVersion other) =>
            /* The reason why we need to check other fields than the Signature is that
            this struct in itself does not guarantee its Signature is derived from
            other field values.  A value of this struct can represent an invalid claim. */
            Version == other.Version &&
            Signer.Equals(other.Signer) &&
            Equals(Extra, other.Extra) &&
            Signature.SequenceEqual(other.Signature);

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object obj) =>
            obj is AppProtocolVersion other && Equals(other);

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            int hash = 17;
            unchecked
            {
                hash *= 31 + Version.GetHashCode();
                hash *= 31 + (Extra is null ? 0 : Extra.GetHashCode());
                hash *= 31 + Signature.GetHashCode();
                hash *= 31 + Signer.GetHashCode();
            }

            return hash;
        }

        /// <inheritdoc/>
        [Pure]
        public override string ToString() => string.Format(
            CultureInfo.InvariantCulture,
            Extra is null ? "{0}" : "{0} ({1})",
            Version,
            Extra
        );

        /// <summary>
        /// Gets a deterministic message to sign.
        /// </summary>
        /// <returns>A deterministic message to sign.</returns>
        [Pure]
        private byte[] GetMessage()
        {
            byte[] msg = NetworkOrderBitsConverter.GetBytes(Version);
            if (!(Extra is null))
            {
                byte[] extraBytes = _codec.Encode(Extra);
                int versionLength = msg.Length;
                Array.Resize(ref msg, versionLength + extraBytes.Length);
                extraBytes.CopyTo(msg, versionLength);
            }

            return msg;
        }
    }
}
