using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Planetarium.Cryptography.BLS12_381;

namespace Libplanet.Crypto
{
    public class BlsPublicKey : IEquatable<BlsPublicKey>, IPublicKey
    {
        private const int KeyByteSize = BLS.PUBLICKEY_SERIALIZE_SIZE;

        private readonly IReadOnlyList<byte> _publicKey;

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

            _publicKey = publicKey;

            _ = CryptoConfig.ConsensusCryptoBackend.ValidateGetNativePublicKey(this);
        }

        public IReadOnlyList<byte> KeyBytes => ToImmutableArray();

        public static bool operator ==(BlsPublicKey left, BlsPublicKey right) =>
            left.Equals(right);

        public static bool operator !=(BlsPublicKey left, BlsPublicKey right) =>
            !left.Equals(right);

        public bool Equals(BlsPublicKey? other) =>
            other is { } && _publicKey.SequenceEqual(other._publicKey);

        public override bool Equals(object? obj) => obj is BlsPublicKey other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        [Pure]
        public bool VerifyProofOfPossession(BlsSignature proofOfPossession) =>
            CryptoConfig.ConsensusCryptoBackend.VerifyPoP(this, proofOfPossession);

        [Pure]
        public byte[] ToByteArray() => _publicKey.ToArray();

        [Pure]
        public ImmutableArray<byte> ToImmutableArray() =>
            ToByteArray().ToImmutableArray();

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

        public override string ToString() => ByteUtil.Hex(ToByteArray());
    }
}
