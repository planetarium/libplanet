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
    /// Represents a <see cref="Proposal"/> from a validator for consensus.  It contains an
    /// essential information <see cref="ProposalMetadata"/> to propose a block for a consensus
    /// in a height and a round, and its signature to verify. The signature is verified in
    /// constructor, so the instance of <see cref="Proposal"/> should be valid.
    /// </summary>
    public class Proposal : IEquatable<Proposal>
    {
        // FIXME: This should be private.  Left as internal for testing reasons.
        internal static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static Codec _codec = new Codec();

        private readonly ProposalMetadata _proposalMetadata;

        /// <summary>
        /// Instantiates a <see cref="Proposal"/> with given <paramref name="proposalMetadata"/>
        /// and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="proposalMetadata">A <see cref="ProposalMetadata"/> to propose.</param>
        /// <param name="signature">A signature signed with <paramref name="proposalMetadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="proposalMetadata"/>.</exception>
        public Proposal(ProposalMetadata proposalMetadata, ImmutableArray<byte> signature)
        {
            _proposalMetadata = proposalMetadata;
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

        public Proposal(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public Proposal(Dictionary encoded)
            : this(
                new ProposalMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="ProposalMetadata.Height"/>
        public long Height => _proposalMetadata.Height;

        /// <inheritdoc cref="ProposalMetadata.Round"/>
        public int Round => _proposalMetadata.Round;

        /// <inheritdoc cref="ProposalMetadata.BlockHash"/>
        public BlockHash BlockHash => _proposalMetadata.BlockHash;

        /// <inheritdoc cref="ProposalMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _proposalMetadata.Timestamp;

        /// <inheritdoc cref="ProposalMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _proposalMetadata.ValidatorPublicKey;

        /// <inheritdoc cref="ProposalMetadata.MarshaledBlock"/>
        public byte[] MarshaledBlock => _proposalMetadata.MarshaledBlock;

        /// <inheritdoc cref="ProposalMetadata.ValidRound"/>
        public int ValidRound => _proposalMetadata.ValidRound;

        /// <summary>
        /// A signature that signed with <see cref="ProposalMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="Proposal"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _proposalMetadata.Encoded.Add(SignatureKey, Signature)
                : _proposalMetadata.Encoded;

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
                _proposalMetadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(Proposal? other)
        {
            return other is Proposal proposal &&
                   _proposalMetadata.Equals(proposal._proposalMetadata) &&
                   Signature.SequenceEqual(proposal.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is Proposal other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _proposalMetadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
