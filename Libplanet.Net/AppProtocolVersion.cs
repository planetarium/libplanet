#nullable disable
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
        /// A signer who claims presence of a version.
        /// </summary>
        public readonly Address Signer;

        private static readonly Codec _codec = new Codec();

        private readonly ImmutableArray<byte> _signature;

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
            _signature = signature;
            Signer = signer;
        }

        /// <summary>
        /// A signature which verifies <seealso cref="Signer"/>'s claim of a version.
        /// </summary>
        public ImmutableArray<byte> Signature =>
            _signature.IsDefault ? ImmutableArray<byte>.Empty : _signature;

        /// <summary>
        /// A token string which serializes an <see cref="AppProtocolVersion"/>.
        /// <para>As this is designed to be easy to copy and paste, the format consists of only
        /// printable characters in the ASCII character set.</para>
        /// <para>A token can be deserialized into an <see cref="AppProtocolVersion"/> through
        /// <see cref="FromToken(string)"/> method.</para>
        /// </summary>
        /// <seealso cref="FromToken(string)"/>
        [Pure]
        public string Token
        {
            get
            {
                string sig = Convert.ToBase64String(
                    Signature.ToBuilder().ToArray(),
                    Base64FormattingOptions.None
                ).Replace('/', '.');
                var prefix =
                    $"{Version.ToString(CultureInfo.InvariantCulture)}/{Signer.ToHex()}/{sig}";
                if (Extra is null)
                {
                    return prefix;
                }

                string extra = Convert.ToBase64String(
                    _codec.Encode(Extra),
                    Base64FormattingOptions.None
                ).Replace('/', '.');
                return $"{prefix}/{extra}";
            }
        }

        [Pure]
        public static bool operator ==(AppProtocolVersion left, AppProtocolVersion right) =>
            left.Equals(right);

        [Pure]
        public static bool operator !=(AppProtocolVersion left, AppProtocolVersion right) =>
            !(left == right);

        /// <summary>
        /// Claim a <paramref name="version"/> with <paramref name="extra"/> data and sign it
        /// using the given private key.
        /// </summary>
        /// <param name="signer">A private key to sign the claim.</param>
        /// <param name="version">A version to claim.</param>
        /// <param name="extra">Extra data to claim.</param>
        /// <returns>A signed version claim.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="signer"/> is
        /// <see langword="null"/>.</exception>
        public static AppProtocolVersion Sign(PrivateKey signer, int version, IValue extra = null)
        {
            if (signer is null)
            {
                throw new ArgumentNullException(nameof(signer));
            }

            return new AppProtocolVersion(
                version,
                extra,
                ImmutableArray.Create(signer.Sign(GetMessage(version, extra))),
                new Address(signer.PublicKey)
            );
        }

        /// <summary>
        /// Deserializes a <see cref="Token"/> into an <see cref="AppProtocolVersion"/> object.
        /// </summary>
        /// <param name="token">A <see cref="Token"/> string.</param>
        /// <returns>A deserialized <see cref="AppProtocolVersion"/> object.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/> is passed to
        /// <paramref name="token"/>.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="token"/>'s
        /// format is invalid.  The detailed reason is in the message.</exception>
        /// <seealso cref="Token"/>
        public static AppProtocolVersion FromToken(string token)
        {
            if (token is null)
            {
                throw new ArgumentNullException(nameof(token));
            }

            int pos, pos2;
            pos = token.IndexOf('/');
            if (pos < 0)
            {
                throw new FormatException("Failed to find the first field delimiter.");
            }

            int version;
            try
            {
                version = int.Parse(token.Substring(0, pos), CultureInfo.InvariantCulture);
            }
            catch (Exception e) when (e is OverflowException || e is FormatException)
            {
                throw new FormatException("Failed to parse a version number", e);
            }

            pos++;
            pos2 = token.IndexOf('/', pos);
            if (pos2 < 0)
            {
                throw new FormatException("Failed to find the second field delimiter.");
            }

            Address signer;
            try
            {
                signer = new Address(token.Substring(pos, pos2 - pos));
            }
            catch (ArgumentException e)
            {
                throw new FormatException("Failed to parse a signer address", e);
            }

            pos2++;
            pos = token.IndexOf('/', pos2);
            string sigEncoded = pos < 0 ? token.Substring(pos2) : token.Substring(pos2, pos - pos2);

            ImmutableArray<byte> sig;
            try
            {
                sig = ImmutableArray.Create(Convert.FromBase64String(sigEncoded.Replace('.', '/')));
            }
            catch (FormatException e)
            {
                throw new FormatException("Failed to parse a signature", e);
            }

            IValue extra = null;
            if (pos >= 0)
            {
                pos++;
                string extraEncoded = token.Substring(pos);
                byte[] extraBytes = Convert.FromBase64String(extraEncoded.Replace('.', '/'));
                try
                {
                    extra = _codec.Decode(extraBytes);
                }
                catch (DecodingException e)
                {
                    throw new FormatException(
                        $"Failed to parse extra data (offset = {pos})", e);
                }
            }

            return new AppProtocolVersion(version, extra, sig, signer);
        }

        /// <summary>
        /// Verifies whether the claim is certainly signed by the <see cref="Signer"/>.
        /// </summary>
        /// <param name="publicKey">A public key of the <see cref="Signer"/>.</param>
        /// <returns><see langword="true"/> if and only if the given <paramref name="publicKey"/> is
        /// <see cref="Signer"/>'s and the <see cref="Signature"/> is certainly signed by
        /// the <see cref="Signer"/>.</returns>
        [Pure]
        public bool Verify(PublicKey publicKey) =>
            Signer.Equals(new Address(publicKey)) &&
            publicKey.Verify(GetMessage(Version, Extra), Signature.ToBuilder().ToArray());

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
                hash *= 31 + ByteUtil.CalculateHashCode(Signature.ToArray());
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
        private static byte[] GetMessage(int version, IValue extra)
        {
            byte[] msg = NetworkOrderBitsConverter.GetBytes(version);
            if (!(extra is null))
            {
                byte[] extraBytes = _codec.Encode(extra);
                int versionLength = msg.Length;
                Array.Resize(ref msg, versionLength + extraBytes.Length);
                extraBytes.CopyTo(msg, versionLength);
            }

            return msg;
        }
    }
}
