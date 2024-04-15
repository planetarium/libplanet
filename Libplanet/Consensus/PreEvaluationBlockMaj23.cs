using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Consensus;

namespace Libplanet.Consensus
{
    public class PreEvaluationBlockMaj23 : IEquatable<PreEvaluationBlockMaj23>
    {
        private static readonly Binary SignatureKey = new Binary(new byte[] { 0x53 }); // 'S'
        private static readonly Codec _codec = new Codec();

        private readonly PreEvaluationBlockMaj23Metadata _metadata;

        public PreEvaluationBlockMaj23(
            PreEvaluationBlockMaj23Metadata metadata, ImmutableArray<byte> signature)
        {
            _metadata = metadata;
            Signature = signature;

            if (signature.IsDefaultOrEmpty)
            {
                throw new ArgumentNullException(
                    nameof(signature),
                    "Signature cannot be null or empty.");
            }
            else if (!Verify())
            {
                throw new ArgumentException("Signature is invalid.", nameof(signature));
            }
        }

        public PreEvaluationBlockMaj23(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public PreEvaluationBlockMaj23(Dictionary encoded)
            : this(
                new PreEvaluationBlockMaj23Metadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? ((Binary)encoded[SignatureKey]).ByteArray
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="PreEvaluationBlockMaj23Metadata.Height"/>
        public long Height => _metadata.Height;

        /// <inheritdoc cref="PreEvaluationBlockMaj23Metadata.Round"/>
        public int Round => _metadata.Round;

        /// <inheritdoc cref="PreEvaluationBlockMaj23Metadata.PreEvaluationBlockHash"/>
        public HashDigest<SHA256> PreEvaluationBlockHash => _metadata.PreEvaluationBlockHash;

        /// <inheritdoc cref="PreEvaluationBlockMaj23Metadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _metadata.ValidatorPublicKey;

        /// <inheritdoc cref="PreEvaluationBlockMaj23Metadata.Flag"/>
        public VoteFlag Flag => _metadata.Flag;

        public ImmutableArray<byte> Signature { get; }

        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _metadata.Encoded.Add(SignatureKey, Signature)
                : _metadata.Encoded;

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _metadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(PreEvaluationBlockMaj23? other)
        {
            return other is { } maj23 &&
                   _metadata.Equals(maj23._metadata) &&
                   Signature.SequenceEqual(maj23.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is Maj23 other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _metadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
