using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a drawn <see cref="Lot"/> for consensus.
    /// This can be interpreted as a vote for proposer.
    /// </summary>
    public class DominantLot : IEquatable<DominantLot>
    {
        private static readonly Binary SignatureKey = new Binary(new byte[] { 0x53 }); // 'S'
        private static readonly Codec _codec = new Codec();

        private readonly DominantLotMetadata _dominantLotMetadata;

        /// <summary>
        /// Instantiates a <see cref="DominantLot"/> with given
        /// <paramref name="dominantLotMetadata"/> and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="dominantLotMetadata">A <see cref="DominantLotMetadata"/> to vote.</param>
        /// <param name="signature">A signature signed with <paramref name="dominantLotMetadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="dominantLotMetadata"/>.</exception>
        public DominantLot(DominantLotMetadata dominantLotMetadata, ImmutableArray<byte> signature)
        {
            _dominantLotMetadata = dominantLotMetadata;
            Signature = signature;

            if (signature.IsDefaultOrEmpty)
            {
                throw new ArgumentNullException(
                    nameof(signature),
                    "Signature cannot be null or empty.");
            }

            if (ValidatorPublicKey.Verify(
                _dominantLotMetadata.ByteArray.ToImmutableArray(),
                Signature))
            {
                throw new ArgumentException("Signature is invalid.", nameof(signature));
            }
        }

        public DominantLot(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public DominantLot(Dictionary encoded)
            : this(
                new DominantLotMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? ((Binary)encoded[SignatureKey]).ByteArray
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="DominantLotMetadata.Height"/>
        public long Height => _dominantLotMetadata.Height;

        /// <inheritdoc cref="DominantLotMetadata.Round"/>
        public int Round => _dominantLotMetadata.Round;

        /// <inheritdoc cref="DominantLotMetadata.Lot"/>
        public Lot Lot => _dominantLotMetadata.Lot;

        /// <inheritdoc cref="DominantLotMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _dominantLotMetadata.Timestamp;

        /// <inheritdoc cref="DominantLotMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _dominantLotMetadata.ValidatorPublicKey;

        /// <summary>
        /// A signature that signed with <see cref="DominantLotMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="DominantLot"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _dominantLotMetadata.Encoded.Add(SignatureKey, Signature)
                : _dominantLotMetadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="DominantLot"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(DominantLot? other)
        {
            return other is { } drawn &&
                   _dominantLotMetadata.Equals(drawn._dominantLotMetadata) &&
                   Signature.SequenceEqual(drawn.Signature);
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
                _dominantLotMetadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
