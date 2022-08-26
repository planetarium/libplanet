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
    /// The signature value type for
    /// <a href="https://datatracker.ietf.org/doc/draft-irtf-cfrg-bls-signature/">BLS Signature</a>.
    /// <para> The signature is used for verification whether an <see cref="BlsPrivateKey"/> has any
    /// relation with a message, by signing.</para>
    /// The class allows to aggregate signatures and verifies aggregated signature,
    /// <see cref="BlsSignature.AggregateVerify"/>,
    /// <see cref="BlsSignature.FastAggregateVerify"/> or <see cref="BlsSignature.MultiVerify"/>
    /// for its use-case.
    /// <para>The implementation uses the BLS12_381 curve type with minimal public key
    /// size setting, which is the same configuration with Ethereum 2.0 Phase 0.</para>
    /// </summary>
    /// <remarks>
    /// The <see cref="BlsSignature"/> can be shared publicly.
    /// The <see cref="BlsSignature"/> can be a single signature, aggregated signature, or
    /// <see cref="BlsPrivateKey.ProofOfPossession"/>. Signature aggregation can be done by
    /// <see cref="BlsSignatureExtensions.AggregateAll"/>.
    /// <para>The infinite signature should be carefully treated, due to aggregating signatures with
    /// infinite results an aggregated signature without infinite signature.</para>
    /// <para>Every <see cref="BlsSignature"/> object is immutable.</para>
    /// </remarks>
    /// <seealso cref="Libplanet.Crypto.BlsPrivateKey"/>
    /// <seealso cref="Libplanet.Crypto.BlsPublicKey"/>
    public sealed class BlsSignature : IEquatable<BlsSignature>
    {
        private const int KeyByteSize = BLS.SIGNATURE_SERIALIZE_SIZE;
        private readonly IReadOnlyList<byte> _signature;

        /// <summary>
        /// Instantiates a new <see cref="BlsSignature"/> by given <see cref="byte"/>
        /// representation.
        /// </summary>
        /// <param name="signature">A <see cref="byte"/> representation of signature.</param>
        /// <exception cref="ArgumentNullException">Thrown if given value is
        /// <see cref="ImmutableArray{T}"/> and empty.
        /// </exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown if given signature length is not
        /// <see cref="KeyByteSize"/>.
        /// </exception>
        /// <exception cref="CryptographicException">Thrown if library has failed to deserializing
        /// the signature (e.g., Invalid).</exception>
        public BlsSignature(IReadOnlyList<byte> signature)
        {
            if (signature is ImmutableArray<byte> i ? i.IsDefaultOrEmpty : !signature.Any())
            {
                throw new ArgumentNullException(
                    nameof(signature), "Signature is empty.");
            }

            if (signature.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(signature),
                    $"The key must be {KeyByteSize} bytes."
                );
            }

            _signature = signature;
            _ = CryptoConfig.ConsensusCryptoBackend.ValidateGetNativeSignature(ToByteArray());
        }

        /// <summary>
        /// Encodes this public key into an immutable <see cref="byte"/> array representation.
        /// Use <see cref="ToByteArray()"/> if a mutable <see cref="byte"/> array is needed.
        /// </summary>
        /// <returns>An encoded immutable <see cref="byte"/> array representation.  It can be
        /// recovered to a <see cref="BlsSignature"/> instance again using
        /// <see cref="BlsSignature(IReadOnlyList{byte})"/> constructor.</returns>
        /// <seealso cref="ToByteArray()"/>
        /// <seealso cref="BlsSignature(IReadOnlyList{byte})"/>
        [Pure]
        public ImmutableArray<byte> ByteArray => _signature.ToImmutableArray();

        public static bool operator ==(BlsSignature left, BlsSignature right) =>
            left.Equals(right);

        public static bool operator !=(BlsSignature left, BlsSignature right) =>
            !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="BlsSignature"/> instance from hexadecimal string of bytes.
        /// </summary>
        /// <param name="hex">A hexadecimal string of a signature's
        /// <see cref="ByteArray"/>.</param>
        /// <returns>A created <see cref="BlsSignature"/> instance.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is too short or too long.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        /// <exception cref="CryptographicException">Thrown if deserialization has been failed
        /// in library.
        /// </exception>
        [Pure]
        public static BlsSignature FromString(string hex)
            => new BlsSignature(GenerateBytesFromHexString(hex));

        /// <summary>
        /// Verifies multiple signatures with their pair public keys, messages. The difference
        /// between multiple calling of <see cref="BlsPublicKey.Verify"/> is that, this method
        /// utilizes multiple thread and verify with convenience.
        /// <para>
        /// Unlike other aggregating verification methods, <see cref="AggregateVerify"/>,
        /// <see cref="FastAggregateVerify"/>, this method does not have any requirement of using
        /// identical or unique messages.
        /// </para>
        /// <para>
        /// The pair signature, message and public key should be placed in same index at its array.
        /// </para>
        /// </summary>
        /// <param name="signatures">The <see cref="BlsSignature"/>s to be verified.</param>
        /// <param name="publicKeys">The <see cref="BlsPublicKey"/>s for verification.</param>
        /// <param name="messages">The message used in signing.</param>
        /// <returns>Returns <see langword="true"/> if all the given value is valid, otherwise
        /// returns <see langword="false"/>.
        /// </returns>
        public static bool MultiVerify(
            BlsSignature[] signatures, BlsPublicKey[] publicKeys, IReadOnlyList<byte>[] messages)
        {
            HashDigest<SHA256>[] hashes = new HashDigest<SHA256>[messages.Length];

            for (var i = 0; i < messages.Length; ++i)
            {
                hashes[i] = HashDigest<SHA256>.DeriveFrom(messages[i].ToImmutableArray());
            }

            return CryptoConfig.ConsensusCryptoBackend.MultiVerify(signatures, publicKeys, hashes);
        }

        /// <summary>
        /// <para>
        /// Verifies an aggregated signature with corresponding public keys.
        /// This method only can be used if all the signature signed for the same message. The
        /// signatures can be aggregated with <see cref="BlsSignatureExtensions.AggregateAll"/>.
        /// </para>
        /// <para>
        /// If all the message has different messages, use <see cref="AggregateVerify"/>, if not all
        /// the message is neither different nor same message, use <see cref="MultiVerify"/>.
        /// </para>
        /// </summary>
        /// <param name="publicKeys">The <see cref="BlsPublicKey"/>s for verify.</param>
        /// <param name="message">A message used for signing.</param>
        /// <returns>Returns <see langword="true"/> if all the given value is valid, otherwise
        /// returns <see langword="false"/>.
        /// </returns>
        public bool FastAggregateVerify(BlsPublicKey[] publicKeys, IReadOnlyList<byte> message)
        {
            HashDigest<SHA256> hashed = message switch
            {
                byte[] ma => HashDigest<SHA256>.DeriveFrom(ma),
                ImmutableArray<byte> im => HashDigest<SHA256>.DeriveFrom(im),
                _ => HashDigest<SHA256>.DeriveFrom(message.ToArray()),
            };

            return CryptoConfig.ConsensusCryptoBackend.FastAggregateVerify(
                this, publicKeys, hashed);
        }

        /// <summary>
        /// <para>
        /// Verifies an aggregated signature with corresponding public keys.
        /// This method only can be used if all the signature signed for the different message. The
        /// signatures can be aggregated with <see cref="BlsSignatureExtensions.AggregateAll"/>.
        /// </para>
        /// <para>
        /// If all the message has same messages, use <see cref="FastAggregateVerify"/>, if not all
        /// the message is neither different nor same message, use <see cref="MultiVerify"/>.
        /// </para>
        /// </summary>
        /// <param name="publicKeys">The <see cref="BlsPublicKey"/>s for verify.</param>
        /// <param name="messages">A message used for signing.</param>
        /// <returns>Returns <see langword="true"/> if all the given value is valid, otherwise
        /// returns <see langword="false"/>.
        /// </returns>
        public bool AggregateVerify(BlsPublicKey[] publicKeys, IReadOnlyList<byte>[] messages)
        {
            HashDigest<SHA256>[] hashes = new HashDigest<SHA256>[messages.Length];

            for (var i = 0; i < messages.Length; ++i)
            {
                hashes[i] = HashDigest<SHA256>.DeriveFrom(messages[i].ToImmutableArray());
            }

            return CryptoConfig.ConsensusCryptoBackend.AggregateVerify(this, publicKeys, hashes);
        }

        public bool Equals(BlsSignature? other) =>
            other is { } && _signature.SequenceEqual(other._signature);

        public override bool Equals(object? obj) => obj is BlsPrivateKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Encodes this signature into a mutable <see cref="byte"/> array representation.
        /// </summary>
        /// <returns>An encoded mutable <see cref="byte"/> array representation.  It can be
        /// recovered to a <see cref="BlsSignature"/> instance again using
        /// <see cref="BlsSignature(IReadOnlyList{byte})"/> constructor.</returns>
        /// <seealso cref="BlsSignature(IReadOnlyList{byte})"/>
        [Pure]
        public byte[] ToByteArray() => _signature.ToArray();

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
