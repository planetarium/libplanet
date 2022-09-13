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
    /// A public key pair of
    /// <a href="https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/">BLS Signature</a>
    /// used in consensus for verifying signature.
    /// It can verify <see cref="BlsSignature"/>, which can be verified corresponding
    /// <see cref="Libplanet.Crypto.BlsPublicKey"/> with message. Also <see cref="BlsSignature"/>
    /// can be aggregated with another signatures, and can be verified with multiple corresponding
    /// <see cref="Libplanet.Crypto.BlsPublicKey"/> by <see cref="BlsSignature.AggregateVerify"/>,
    /// <see cref="BlsSignature.FastAggregateVerify"/> or <see cref="BlsSignature.MultiVerify"/>
    /// for its use-case. The implementation uses the BLS12_381 curve type with minimal public key
    /// size setting, which is the same configuration with Ethereum 2.0 Phase 0.
    /// </summary>
    /// <remarks>
    /// The <see cref="BlsPublicKey"/> can be published publicly, and this is required to verify the
    /// signature from a <see cref="BlsPrivateKey"/>. The received public key from any peer should
    /// be checked with <see cref="BlsPrivateKey.ProofOfPossession"/> due to the availability of
    /// public key aggregation. See
    /// <a href="https://datatracker.ietf.org/doc/id/draft-halla
    /// mbaker-threshold-sigs-02.html#name-rogue-key-attack">
    /// Rouge Key Attack</a>.
    /// <para>Every <see cref="BlsPublicKey"/> object is immutable.</para>
    /// </remarks>
    /// <seealso cref="Libplanet.Crypto.BlsPrivateKey"/>
    public class BlsPublicKey : IEquatable<BlsPublicKey>, IPublicKey
    {
        private const int KeyByteSize = BLS.PUBLICKEY_SERIALIZE_SIZE;

        private readonly ImmutableArray<byte> _publicKey;

        /// <summary>
        /// Creates a <see cref="BlsPublicKey"/> instance from the given
        /// <see cref="byte"/> array (i.e., <paramref name="publicKey"/>).
        /// </summary>
        /// <param name="publicKey">A valid <see cref="byte"/> array that
        /// encodes an BLS public key.</param>
        public BlsPublicKey(IReadOnlyList<byte> publicKey)
        {
            if (publicKey is ImmutableArray<byte> i ? i.IsDefaultOrEmpty : !publicKey.Any())
            {
                throw new ArgumentNullException(
                    nameof(publicKey), "PublicKey is empty.");
            }

            if (publicKey.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(publicKey),
                    $"The key must be {KeyByteSize} bytes."
                );
            }

            _publicKey = publicKey.ToImmutableArray();
            _ = CryptoConfig.ConsensusCryptoBackend.ValidateGetNativePublicKey(this);
        }

        public ImmutableArray<byte> KeyBytes => ToImmutableArray();

        public static bool operator ==(BlsPublicKey left, BlsPublicKey right) =>
            left.Equals(right);

        public static bool operator !=(BlsPublicKey left, BlsPublicKey right) =>
            !left.Equals(right);

        public bool Equals(BlsPublicKey? other) =>
            other is { } && _publicKey.SequenceEqual(other._publicKey);

        public override bool Equals(object? obj) => obj is BlsPublicKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Checks a Proof of Possession. Public key can be aggregated, some public key are not
        /// the true public key from a <see cref="BlsPrivateKey"/>.
        /// <para>The Proof of Possession
        /// is used for validate whether the public key is derived from a private key.
        /// </para>
        /// </summary>
        /// <param name="proofOfPossession">A proof of possession derived from
        /// <see cref="BlsPrivateKey"/> of this <see cref="BlsPublicKey"/>.</param>
        /// <returns>Returns the proof of possession of <see cref="BlsPublicKey"/>.</returns>
        /// <remarks>The infinite public key (e.g., derived from zero private key) cannot be
        /// validated with Proof of possession of its infinite signature and considered invalid,
        /// the infinite public key also can be filtered with proof of possession.
        /// </remarks>
        [Pure]
        public bool VerifyProofOfPossession(BlsSignature proofOfPossession) =>
            CryptoConfig.ConsensusCryptoBackend.VerifyPoP(this, proofOfPossession);

        /// <summary>
        /// Encodes this public key into a mutable <see cref="byte"/> array representation.
        /// </summary>
        /// <returns>An encoded mutable <see cref="byte"/> array representation.  It can be
        /// recovered to a <see cref="PublicKey"/> instance again using
        /// <see cref="BlsPublicKey(IReadOnlyList{byte})"/> constructor.</returns>
        /// <seealso cref="ToImmutableArray()"/>
        /// <seealso cref="BlsPublicKey(IReadOnlyList{byte})"/>
        [Pure]
        public byte[] ToByteArray() => _publicKey.ToArray();

        /// <summary>
        /// Encodes this public key into a immutable <see cref="byte"/> array representation.
        /// <para>To get an mutable one, use <see cref="ToByteArray()"/> method instead.</para>
        /// </summary>
        /// <returns>An encoded immutable <see cref="byte"/> array representation.  It can be
        /// recovered to a <see cref="BlsPublicKey"/> instance again using
        /// <see cref="BlsPublicKey(IReadOnlyList{byte})"/> constructor.</returns>
        /// <seealso cref="BlsPublicKey(IReadOnlyList{byte})"/>
        [Pure]
        public ImmutableArray<byte> ToImmutableArray() =>
            ToByteArray().ToImmutableArray();

        /// <summary>
        /// Verifies whether a <paramref name="signature"/> proves authenticity of
        /// <paramref name="message"/> with the corresponding <see cref="BlsPrivateKey"/>.
        /// <para>If signature is aggregated, use <see cref="BlsSignature.AggregateVerify"/> or
        /// <see cref="BlsSignature.FastAggregateVerify"/>.</para>
        /// </summary>
        /// <param name="message">A original plaintext message that the <paramref name="signature"/>
        /// tries to prove its authenticity.  I.e., an argument data passed to
        /// <see cref="BlsPrivateKey.Sign(byte[])"/> or <see
        /// cref="BlsPrivateKey.Sign(ImmutableArray{byte})" /> methods.</param>
        /// <param name="signature">A signature which tries to authenticity of
        /// <paramref name="message"/>.  I.e., a data that <see cref="BlsPrivateKey.Sign(byte[])"/>
        /// or <see cref="BlsPrivateKey.Sign(ImmutableArray{byte})"/> methods returned.</param>
        /// <returns><c>true</c> if the <paramref name="signature"/> proves authenticity of
        /// the <paramref name="message"/> with the corresponding <see cref="BlsPublicKey"/>.
        /// Otherwise <c>false</c>.</returns>
        [Pure]
        public bool Verify(IReadOnlyList<byte> message, IReadOnlyList<byte> signature)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof(message));
            }

            if (signature == null)
            {
                throw new ArgumentNullException(nameof(signature));
            }

            if (signature is ImmutableArray<byte> j ? j.IsDefaultOrEmpty : !signature.Any())
            {
                throw new ArgumentException("Signature is empty.", nameof(signature));
            }

            if (message is ImmutableArray<byte> i ? i.IsDefaultOrEmpty : !message.Any())
            {
                throw new ArgumentException("Message is empty.", nameof(message));
            }

            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message.ToImmutableArray());
            return CryptoConfig.ConsensusCryptoBackend.Verify(
                hashed, signature.ToArray(), this);
        }

        /// <summary>
        /// Gets the public key's hexadecimal representation in compressed form.
        /// </summary>
        /// <returns>The hexadecimal string of the public key bytes.</returns>
        public override string ToString() => ByteUtil.Hex(ToByteArray());
    }
}
