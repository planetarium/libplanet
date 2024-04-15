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
    /// <summary>
    /// A class used to requests lacking votes by sending <see cref="Vote"/>s that the peer has.
    /// </summary>
    public class PreEvaluationBlockVoteSetBits : IEquatable<PreEvaluationBlockVoteSetBits>
    {
        // FIXME: This should be private.  Left as internal for testing reasons.
        internal static readonly Binary SignatureKey = new Binary(new byte[] { 0x53 }); // 'S'
        private static Codec _codec = new Codec();

        private readonly PreEvaluationBlockVoteSetBitsMetadata _voteSetBitsMetadata;

        /// <summary>
        /// Instantiates a <see cref="VoteSetBits"/> with given
        /// <paramref name="voteSetBitsMetadata"/> and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="voteSetBitsMetadata">
        /// A <see cref="VoteSetBitsMetadata"/> to request.</param>
        /// <param name="signature">A signature signed with <paramref name="voteSetBitsMetadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="voteSetBitsMetadata"/>.</exception>
        public PreEvaluationBlockVoteSetBits(
            PreEvaluationBlockVoteSetBitsMetadata voteSetBitsMetadata,
            ImmutableArray<byte> signature)
        {
            _voteSetBitsMetadata = voteSetBitsMetadata;
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

        public PreEvaluationBlockVoteSetBits(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public PreEvaluationBlockVoteSetBits(Dictionary encoded)
            : this(
                new PreEvaluationBlockVoteSetBitsMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? ((Binary)encoded[SignatureKey]).ByteArray
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        public long Height => _voteSetBitsMetadata.Height;

        public int Round => _voteSetBitsMetadata.Round;

        public HashDigest<SHA256> PreEvaluationBlockHash
            => _voteSetBitsMetadata.PreEvaluationBlockHash;

        public PublicKey ValidatorPublicKey => _voteSetBitsMetadata.ValidatorPublicKey;

        public VoteFlag Flag => _voteSetBitsMetadata.Flag;

        public ImmutableArray<bool> VoteBits => _voteSetBitsMetadata.VoteBits;

        /// <summary>
        /// A signature that signed with <see cref="PreEvaluationBlockVoteSetBitsMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="PreEvaluationBlockVoteSetBits"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _voteSetBitsMetadata.Encoded.Add(SignatureKey, Signature)
                : _voteSetBitsMetadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="PreEvaluationBlockVoteSetBits"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="PreEvaluationBlockVoteSetBitsMetadata"/>
        /// is properly signed by <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _voteSetBitsMetadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(PreEvaluationBlockVoteSetBits? other)
        {
            return other is { } voteSetBits &&
                   _voteSetBitsMetadata.Equals(voteSetBits._voteSetBitsMetadata) &&
                   Signature.SequenceEqual(voteSetBits.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is PreEvaluationBlockVoteSetBits other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _voteSetBitsMetadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
