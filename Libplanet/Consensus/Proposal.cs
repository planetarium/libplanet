using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a <see cref="Proposal"/> from a validator for consensus.  It contains an
    /// essential information <see cref="ProposalMetaData"/> to propose a block for a consensus
    /// in a height and a round, and its signature to verify. The signature is verified in
    /// constructor, so the instance of <see cref="Proposal"/> should be valid.
    /// </summary>
    public class Proposal : IEquatable<Proposal>
    {
        internal const string SignatureKey = "signature";
        private static Codec _codec = new Codec();

        private readonly ProposalMetaData _proposalMetaData;

        /// <summary>
        /// Instantiates a <see cref="Proposal"/> with given <paramref name="proposalMetaData"/>
        /// and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="proposalMetaData">A <see cref="ProposalMetaData"/> to propose.</param>
        /// <param name="signature">A signature signed with <paramref name="proposalMetaData"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="proposalMetaData"/>.</exception>
        public Proposal(ProposalMetaData proposalMetaData, ImmutableArray<byte> signature)
        {
            _proposalMetaData = proposalMetaData;
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
                new ProposalMetaData(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="ProposalMetaData.Height"/>
        public long Height => _proposalMetaData.Height;

        /// <inheritdoc cref="ProposalMetaData.Round"/>
        public int Round => _proposalMetaData.Round;

        /// <inheritdoc cref="ProposalMetaData.MarshaledBlock"/>
        public byte[] BlockMarshaled => _proposalMetaData.MarshaledBlock;

        /// <inheritdoc cref="ProposalMetaData.Timestamp"/>
        public DateTimeOffset Timestamp => _proposalMetaData.Timestamp;

        /// <inheritdoc cref="ProposalMetaData.Validator"/>
        public PublicKey Validator => _proposalMetaData.Validator;

        /// <inheritdoc cref="ProposalMetaData.ValidRound"/>
        public int ValidRound => _proposalMetaData.ValidRound;

        /// <summary>
        /// A signature that signed with <see cref="ProposalMetaData"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="Proposal"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _proposalMetaData.Encoded.Add(SignatureKey, Signature)
                : _proposalMetaData.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="Proposal"/> data.
        /// </summary>
        [JsonIgnore]
        public byte[] ByteArray => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="ProposalMetaData"/> is properly signed by
        /// <see cref="Validator"/>.
        /// </summary>
        /// <returns><c>true</c> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            Validator.Verify(
                _proposalMetaData.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(Proposal? other)
        {
            return other is Proposal proposal &&
                   _proposalMetaData.Equals(proposal._proposalMetaData) &&
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
            return HashCode.Combine(_proposalMetaData.GetHashCode(), Signature);
        }
    }
}
