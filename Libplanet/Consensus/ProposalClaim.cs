using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a <see cref="ProposalClaim"/> from a validator for consensus.  It contains an
    /// essential information <see cref="ProposalClaimMetadata"/> to claim a <see cref="Proposal"/>
    /// for a consensus in a height, round, <see cref="BlockHash"/>, and its signature to verify.
    /// The signature is verified in
    /// constructor, so the instance of <see cref="ProposalClaim"/> should be valid.
    /// </summary>
    public class ProposalClaim : IEquatable<ProposalClaim>
    {
        // FIXME: This should be private.  Left as internal for testing reasons.
        internal static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static Codec _codec = new Codec();

        private readonly ProposalClaimMetadata _metadata;

        /// <summary>
        /// Instantiates a <see cref="ProposalClaim"/> with given <paramref name="metadata"/>
        /// and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="metadata">A <see cref="ProposalClaimMetadata"/> to claim.</param>
        /// <param name="signature">A signature signed with <paramref name="metadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="metadata"/>.</exception>
        public ProposalClaim(ProposalClaimMetadata metadata, ImmutableArray<byte> signature)
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

        public ProposalClaim(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public ProposalClaim(Dictionary encoded)
            : this(
                new ProposalClaimMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="ProposalClaimMetadata.Height"/>
        public long Height => _metadata.Height;

        /// <inheritdoc cref="ProposalClaimMetadata.Round"/>
        public int Round => _metadata.Round;

        /// <inheritdoc cref="ProposalClaimMetadata.BlockHash"/>
        public BlockHash BlockHash => _metadata.BlockHash;

        /// <inheritdoc cref="ProposalClaimMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _metadata.Timestamp;

        /// <inheritdoc cref="ProposalClaimMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _metadata.ValidatorPublicKey;

        /// <summary>
        /// A signature that signed with <see cref="ProposalMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="ProposalClaim"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _metadata.Encoded.Add(SignatureKey, Signature)
                : _metadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="Proposal"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="ProposalMetadata"/> is properly signed by
        /// <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _metadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(ProposalClaim? other)
        {
            return other is ProposalClaim proposalClaim &&
                   _metadata.Equals(proposalClaim._metadata) &&
                   Signature.SequenceEqual(proposalClaim.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is ProposalClaim other && Equals(other);
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
