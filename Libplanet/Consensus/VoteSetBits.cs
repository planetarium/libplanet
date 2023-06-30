using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class used to requests lacking votes by sending <see cref="Vote"/>s that the peer has.
    /// </summary>
    public class VoteSetBits : IEquatable<VoteSetBits>
    {
        // FIXME: This should be private.  Left as internal for testing reasons.
        internal static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static Codec _codec = new Codec();

        private readonly VoteSetBitsMetadata _voteSetBitsMetadata;

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
        public VoteSetBits(VoteSetBitsMetadata voteSetBitsMetadata, ImmutableArray<byte> signature)
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

        public VoteSetBits(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VoteSetBits(Dictionary encoded)
            : this(
                new VoteSetBitsMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="VoteSetBitsMetadata.Height"/>
        public long Height => _voteSetBitsMetadata.Height;

        /// <inheritdoc cref="VoteSetBitsMetadata.Round"/>
        public int Round => _voteSetBitsMetadata.Round;

        /// <inheritdoc cref="VoteSetBitsMetadata.BlockHash"/>
        public BlockHash BlockHash => _voteSetBitsMetadata.BlockHash;

        /// <inheritdoc cref="VoteSetBitsMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _voteSetBitsMetadata.Timestamp;

        /// <inheritdoc cref="VoteSetBitsMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _voteSetBitsMetadata.ValidatorPublicKey;

        /// <inheritdoc cref="VoteSetBitsMetadata.Flag"/>
        public VoteFlag Flag => _voteSetBitsMetadata.Flag;

        /// <inheritdoc cref="VoteSetBitsMetadata.VoteBits"/>
        public ImmutableArray<bool> VoteBits => _voteSetBitsMetadata.VoteBits;

        /// <summary>
        /// A signature that signed with <see cref="VoteSetBitsMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="VoteSetBits"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _voteSetBitsMetadata.Encoded.Add(SignatureKey, Signature)
                : _voteSetBitsMetadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="VoteSetBits"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="VoteSetBitsMetadata"/> is properly signed by
        /// <see cref="Validator"/>.
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
        public bool Equals(VoteSetBits? other)
        {
            return other is { } voteSetBits &&
                   _voteSetBitsMetadata.Equals(voteSetBits._voteSetBitsMetadata) &&
                   Signature.SequenceEqual(voteSetBits.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is VoteSetBits other && Equals(other);
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
