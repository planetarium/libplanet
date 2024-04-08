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
    /// Represents a <see cref="PreProposal"/> from a validator for consensus.
    /// It contains an essential information <see cref="PreProposalMetadata"/> to pre-propose
    /// a pre-evaluation block for a consensus in a height, a round, a last proof,
    /// and its signature to verify. The signature is verified in
    /// constructor, so the instance of <see cref="PreProposal"/> should be valid.
    /// </summary>
    public class PreProposal : IEquatable<PreProposal>
    {
        private static readonly Binary SignatureKey = new Binary(new byte[] { 0x53 }); // 'S'
        private static readonly Codec _codec = new Codec();

        private readonly PreProposalMetadata _preProposalMetadata;

        /// <summary>
        /// Instantiates a <see cref="PreProposal"/> with given
        /// <paramref name="preProposalMetadata"/> and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="preProposalMetadata">A <see cref="ProposalMetadata"/> to pre-propose.
        /// </param>
        /// <param name="signature">A signature signed with <paramref name="preProposalMetadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="preProposalMetadata"/>.</exception>
        public PreProposal(PreProposalMetadata preProposalMetadata, ImmutableArray<byte> signature)
        {
            _preProposalMetadata = preProposalMetadata;
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

        public PreProposal(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public PreProposal(Dictionary bencoded)
            : this(
                new PreProposalMetadata(bencoded),
                bencoded.ContainsKey(SignatureKey)
                    ? ((Binary)bencoded[SignatureKey]).ByteArray
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="PreProposalMetadata.Height"/>
        public long Height => _preProposalMetadata.Height;

        /// <inheritdoc cref="PreProposalMetadata.Round"/>
        public int Round => _preProposalMetadata.Round;

        /// <inheritdoc cref="PreProposalMetadata.LastProof"/>
        public Proof? LastProof => _preProposalMetadata.LastProof;

        /// <inheritdoc cref="PreProposalMetadata.PreEvaluationHash"/>
        public HashDigest<SHA256> PreEvaluationHash => _preProposalMetadata.PreEvaluationHash;

        /// <inheritdoc cref="PreProposalMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _preProposalMetadata.Timestamp;

        /// <inheritdoc cref="PreProposalMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _preProposalMetadata.ValidatorPublicKey;

        /// <inheritdoc cref="PreProposalMetadata.MarshaledPreEvalBlock"/>
        public byte[] MarshaledPreEvalBlock => _preProposalMetadata.MarshaledPreEvalBlock;

        /// <summary>
        /// A signature that signed with <see cref="PreProposalMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="PreProposal"/>.
        /// </summary>
        [JsonIgnore]
        public IValue Bencoded =>
            !Signature.IsEmpty
                ? ((Dictionary)_preProposalMetadata.Bencoded).Add(SignatureKey, Signature)
                : _preProposalMetadata.Bencoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="PreProposal"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Bencoded);

        /// <summary>
        /// Verifies whether the <see cref="PreProposalMetadata"/> is properly signed by
        /// <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _preProposalMetadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(PreProposal? other)
        {
            return other is PreProposal proposal &&
                   _preProposalMetadata.Equals(proposal._preProposalMetadata) &&
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
                _preProposalMetadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
