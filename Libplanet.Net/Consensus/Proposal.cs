using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Net.Consensus
{
    public class Proposal : IEquatable<Proposal>
    {
        internal const string SignatureKey = "signature";
        private static Codec _codec = new Codec();

        private readonly ProposalMetaData _proposalMetaData;

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

        public long Height => _proposalMetaData.Height;

        public int Round => _proposalMetaData.Round;

        public byte[] BlockMarshaled => _proposalMetaData.BlockMarshaled;

        public DateTimeOffset Timestamp => _proposalMetaData.Timestamp;

        public PublicKey Validator => _proposalMetaData.Validator;

        public int ValidRound => _proposalMetaData.ValidRound;

        public ImmutableArray<byte> Signature { get; }

        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _proposalMetaData.Encoded.Add(SignatureKey, Signature)
                : _proposalMetaData.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="Vote"/> data.
        /// </summary>
        [JsonIgnore]
        public byte[] ByteArray => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="Vote"/>'s payload is properly signed by
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
            return obj is Vote other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(_proposalMetaData.GetHashCode(), Signature);
        }
    }
}
