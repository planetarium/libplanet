using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using Planetarium.Cryptography.BLS12_381;

namespace Libplanet.Crypto
{
    public class BlsSignature : IEquatable<BlsSignature>
    {
        private const int KeyByteSize = BLS.SIGNATURE_SERIALIZE_SIZE;
        private readonly IReadOnlyList<byte> _signature;

        public BlsSignature(IReadOnlyList<byte> signature)
        {
            if (signature.Count != KeyByteSize)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(signature),
                    $"The key must be {KeyByteSize} bytes."
                );
            }

            _signature = signature;
            _ = CryptoConfig.ConsensusCryptoBackend.ValidateGetNativeSignature(this);
        }

        [Pure]
        public ImmutableArray<byte> ByteArray => _signature.ToImmutableArray();

        public static bool operator ==(BlsSignature left, BlsSignature right) =>
            left.Equals(right);

        public static bool operator !=(BlsSignature left, BlsSignature right) =>
            !left.Equals(right);

        [Pure]
        public static BlsSignature FromString(string hex)
            => new BlsSignature(GenerateBytesFromHexString(hex));

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
