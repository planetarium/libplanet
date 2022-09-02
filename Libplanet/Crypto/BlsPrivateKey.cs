using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Planetarium.Cryptography.BLS12_381;

namespace Libplanet.Crypto
{
    /// <summary>
    /// A secret key pair of
    /// <a href="https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/">BLS Signature</a>
    /// used in consensus for signing signature.
    /// It can create <see cref="BlsSignature"/>, which can be verified corresponding
    /// <see cref="Libplanet.Crypto.BlsPublicKey"/> with message. Also <see cref="BlsSignature"/>
    /// can be aggregated with another signatures, and can be verified with multiple corresponding
    /// <see cref="Libplanet.Crypto.BlsPublicKey"/> by <see cref="BlsSignature.AggregateVerify"/>,
    /// <see cref="BlsSignature.FastAggregateVerify"/> or <see cref="BlsSignature.MultiVerify"/>
    /// for its use-case. The implementation uses the BLS12_381 curve type with minimal public key
    /// size setting, which is the same configuration with Ethereum 2.0 Phase 0.
    /// </summary>
    /// <remarks>
    /// These (and any derived representations, e.g., <see cref="ByteArray"/>)
    /// must be kept secret, if they are exposed, an attacker will be able to
    /// forge signatures.
    /// <para>Every <see cref="BlsPrivateKey"/> object is immutable.</para>
    /// </remarks>
    /// <seealso cref="Libplanet.Crypto.BlsPublicKey"/>
    public class BlsPrivateKey : IEquatable<BlsPrivateKey>, IPrivateKey
    {
        private const int KeyByteSize = BLS.SECRETKEY_SERIALIZE_SIZE;
        private readonly IReadOnlyList<byte> _privateKey;
        private BlsPublicKey? _publicKey;
        private BlsSignature? _proofOfPossession;

        /// <summary>
        /// Instantiates a new random <see cref="BlsPrivateKey"/> with CSPRNG (Cryptographically
        /// Secure Random Number Generator).
        /// </summary>
        public BlsPrivateKey()
        {
            _privateKey = CryptoConfig.ConsensusCryptoBackend.GeneratePrivateKey();
            _proofOfPossession = CryptoConfig.ConsensusCryptoBackend.GetProofOfPossession(this);
        }

        /// <summary>
        /// Instantiates a new <see cref="BlsPrivateKey"/> from a byte array.
        /// </summary>
        /// <param name="privateKey">A <see cref="byte"/> array representation of private key.
        /// </param>
        /// <exception cref="ArgumentException">Thrown if given value is zero.</exception>
        /// <exception cref="ArgumentNullException">Thrown if given value is
        /// <see cref="ImmutableArray{T}"/> and empty.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown if given private key is not
        /// <see cref="KeyByteSize"/>.
        /// </exception>
        /// <exception cref="CryptographicException">Thrown if deserialization has been failed
        /// in library.
        /// </exception>
        public BlsPrivateKey(IReadOnlyList<byte> privateKey)
        {
            if (privateKey is ImmutableArray<byte> i ? i.IsDefaultOrEmpty : !privateKey.Any())
            {
                throw new ArgumentNullException(
                    nameof(privateKey), "PublicKey is empty.");
            }

            if (privateKey.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(privateKey),
                    $"The key must be {KeyByteSize} bytes."
                );
            }

            if (privateKey.SequenceEqual(new byte[KeyByteSize]))
            {
                throw new ArgumentException(
                    "The zero private key should not be used.",
                    nameof(privateKey));
            }

            _privateKey = privateKey;
            _ = CryptoConfig.ConsensusCryptoBackend.ValidateGetNativePrivateKey(this);
            _proofOfPossession = CryptoConfig.ConsensusCryptoBackend.GetProofOfPossession(this);
        }

        /// <summary>
        /// Instantiates a new <see cref="BlsPrivateKey"/> from a hex string.
        /// </summary>
        /// <param name="hex">A hex <see cref="string"/> representation of private key.</param>
        public BlsPrivateKey(string hex)
            : this(GenerateBytesFromHexString(hex))
        {
        }

        /// <summary>
        /// A pair public key of private key.
        /// </summary>
        public BlsPublicKey PublicKey
        {
            get
            {
                if (_publicKey is null)
                {
                    _publicKey = CryptoConfig.ConsensusCryptoBackend.GetPublicKey(this);
                }

                return _publicKey;
            }
        }

        IPublicKey IPrivateKey.PublicKey => PublicKey;

        IReadOnlyList<byte> IPrivateKey.KeyBytes => ByteArray;

        /// <summary>
        /// Returns the corresponding Proof of Possession. Public key can be aggregated, some public
        /// key are not the true <see cref="BlsPublicKey"/> from a private key.
        /// <para>The Proof of Possession is used for validate whether the public key is derived
        /// from a private key.
        /// </para>
        /// </summary>
        /// <returns>Returns the proof of possession of <see cref="BlsPrivateKey"/>.</returns>
        /// <remarks>The infinite <see cref="BlsPublicKey"/> (e.g., derived from zero private key)
        /// cannot be validated with Proof of possession of its infinite signature and considered
        /// invalid, the infinite public key can be filtered with proof of possession.
        /// </remarks>
        public BlsSignature ProofOfPossession
        {
            get
            {
                if (_proofOfPossession is null)
                {
                    _proofOfPossession =
                        CryptoConfig.ConsensusCryptoBackend.GetProofOfPossession(this);
                }

                return _proofOfPossession;
            }
        }

        /// <summary>
        /// An encoded <see cref="byte"/> array representation.
        /// </summary>
        /// <remarks>
        /// An encoded <see cref="byte"/> array representation can be recovered to a <see
        /// cref="BlsPrivateKey"/> instance again using
        /// <see cref="BlsPrivateKey(IReadOnlyList{byte})"/> constructor.
        /// <para>As like <see cref="BlsPrivateKey"/> instances, it also must be kept secret.
        /// In practice, this must not be sent over the network, and be securely stored in the file
        /// system.
        /// </para>
        /// <para>To get a mutable array instead of immutable one, use <see cref="ToByteArray()"/>
        /// method instead.</para>
        /// </remarks>
        /// <seealso cref="ToByteArray()"/>
        /// <seealso cref="BlsPrivateKey(IReadOnlyList{byte})"/>
        [Pure]
        public ImmutableArray<byte> ByteArray => _privateKey.ToImmutableArray();

        public static bool operator ==(BlsPrivateKey left, BlsPrivateKey right) =>
            left.Equals(right);

        public static bool operator !=(BlsPrivateKey left, BlsPrivateKey right) =>
            !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="BlsPrivateKey"/> instance from hexadecimal string of bytes.
        /// </summary>
        /// <param name="hex">A hexadecimal string of a private key's
        /// <see cref="ByteArray"/>.</param>
        /// <returns>A created <see cref="BlsPrivateKey"/> instance.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is too short or too long.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        /// <exception cref="CryptographicException">Thrown if deserialization has been failed
        /// in library.
        /// </exception>
        [Pure]
        public static BlsPrivateKey FromString(string hex) =>
            new BlsPrivateKey(GenerateBytesFromHexString(hex));

        public bool Equals(BlsPrivateKey? other) =>
            other is { } && _privateKey.SequenceEqual(other._privateKey);

        public override bool Equals(object? obj) => obj is BlsPrivateKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Creates a signature from the given <paramref name="message"/>.
        /// <para>A created signature can be verified by the corresponding
        /// <see cref="BlsPublicKey"/>.
        /// </para>
        /// <para>Signatures can be created by only the <see cref="BlsPrivateKey"/> which
        /// corresponds a <see cref="BlsPublicKey"/> to verify these signatures.</para>
        /// <para>To sum up, a signature is used to guarantee:</para>
        /// <list type="bullet">
        /// <item><description>that the <paramref name="message"/> was created by someone possessing
        /// the corresponding <see cref="BlsPrivateKey"/>,</description></item>
        /// <item><description>that the possessor cannot deny having sent the
        /// <paramref name="message"/>, and</description></item>
        /// <item><description>that the <paramref name="message"/> was not forged in the middle of
        /// transit.</description></item>
        /// </list>
        /// <see cref="BlsSignature"/> can be aggregated, and can verify multiple signature in
        /// batch.
        /// <list type="bullet">
        /// <item><description>If the messages are all different, use
        /// <see cref="BlsSignature.AggregateVerify"/> or,</description></item>
        /// <item><description>all the messages are same, use
        /// <see cref="BlsSignature.FastAggregateVerify"/></description></item>
        /// <item><description>if
        /// above all cases are not true, then use <see cref="BlsSignature.MultiVerify"/> without a
        /// signature aggregation.</description></item>
        /// </list>
        /// </summary>
        /// <param name="message">A message <see cref="byte"/>s to sign.</param>
        /// <returns>A signature that proves the authenticity of the <paramref name="message"/>.
        /// It can be verified using <see cref="Libplanet.Crypto.BlsPublicKey.Verify"/>,
        /// <see cref="BlsSignature.AggregateVerify"/>,
        /// <see cref="BlsSignature.FastAggregateVerify"/>, or
        /// <see cref="BlsSignature.MultiVerify"/> method with requiring use-case.
        /// </returns>
        /// <seealso cref="Libplanet.Crypto.BlsPublicKey.Verify"/>
        /// <seealso cref="BlsSignature.AggregateVerify"/>
        /// <seealso cref="BlsSignature.FastAggregateVerify"/>
        /// <seealso cref="BlsSignature.MultiVerify"/>
        public byte[] Sign(byte[] message)
        {
            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message);
            return CryptoConfig.ConsensusCryptoBackend.Sign(hashed, this);
        }

        /// <inheritdoc cref="Sign(byte[])"/>
        public byte[] Sign(ImmutableArray<byte> message) => Sign(message.ToArray());

        /// <summary>
        /// Encodes the private key into a corresponding mutable <see cref="byte"/> array
        /// representation.
        /// </summary>
        /// <returns>An encoded <see cref="byte"/> array representation.  It guarantees that
        /// returned arrays are never reused, and mutating on them does not affect
        /// <see cref="BlsPrivateKey"/> instance's internal states.</returns>
        /// <remarks>
        /// An encoded <see cref="byte"/> array representation can be recovered to a <see
        /// cref="BlsPrivateKey"/> instance again using
        /// <see cref="BlsPrivateKey(IReadOnlyList{byte})"/> constructor.
        /// <para>As like <see cref="BlsPrivateKey"/> instances, it also must be kept secret.
        /// In practice, this must not be sent over the network, and be securely stored in the file
        /// system.
        /// </para>
        /// <para>To get an immutable array instead of mutable one, use <see cref="ByteArray"/>
        /// property.</para>
        /// </remarks>
        /// <seealso cref="ByteArray"/>
        /// <seealso cref="BlsPrivateKey(IReadOnlyList{byte})"/>
        [Pure]
        public byte[] ToByteArray() => _privateKey.ToArray();

        private static byte[] GenerateBytesFromHexString(string hex)
        {
            byte[] bytes = ByteUtil.ParseHex(hex);
            if (bytes.Length != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {KeyByteSize * 2} hexadecimal digits."
                );
            }

            return bytes;
        }
    }
}
