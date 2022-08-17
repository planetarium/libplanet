using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Planetarium.Cryptography.BLS12_381;

namespace Libplanet.Crypto
{
    public class BlsPublicKey : IEquatable<BlsPublicKey>
    {
        private const int KeyByteSize = BLS.PUBLICKEY_SERIALIZE_SIZE;

        private readonly IReadOnlyList<byte> _publicKey;

        public BlsPublicKey(IReadOnlyList<byte> publicKey)
        {
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
            CryptoConfig.ConsensusCryptoBackend.VerifyPoP(proofOfPossession);

        [Pure]
        public byte[] ToByteArray() => _publicKey.ToArray();

        [Pure]
        public ImmutableArray<byte> ToImmutableArray() =>
            ToByteArray().ToImmutableArray();

        [Pure]
        public bool Verify(IReadOnlyList<byte> message, BlsSignature signature)
        {
            if (message == null)
            {
                throw new ArgumentNullException(nameof(message));
            }

            HashDigest<SHA256> hashed = HashDigest<SHA256>.DeriveFrom(message.ToImmutableArray());
            return CryptoConfig.ConsensusCryptoBackend.Verify(
                hashed, signature.ToByteArray(), this);
        }

        public override string ToString() => ByteUtil.Hex(ToByteArray());
    }
}
