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
    /// Represents a <see cref="Vote"/> from a validator for consensus.
    /// </summary>
    public class Vote : IVoteMetadata, IEquatable<Vote>
    {
        private const string SignatureKey = "signature";

        private static Codec _codec = new Codec();
        private readonly VoteMetadata _metadata;

        public Vote(
            VoteMetadata metadata,
            ImmutableArray<byte> signature)
        {
            if (signature.IsDefault)
            {
                throw new ArgumentException(
                    $"Given {nameof(signature)} should not be set to default; use " +
                    $"an empty array to represent a lack of signature for a {nameof(Vote)}.",
                    nameof(signature));
            }
            else if (!signature.IsEmpty)
            {
                if (metadata.Flag != VoteFlag.PreVote && metadata.Flag != VoteFlag.PreCommit)
                {
                    throw new ArgumentException(
                        $"If {nameof(signature)} is not empty, {metadata.Flag} should be either " +
                        $"{VoteFlag.PreVote} or {VoteFlag.PreCommit}",
                        nameof(signature));
                }
                else if (!metadata.Validator.Verify(metadata.ByteArray, signature))
                {
                    throw new ArgumentException(
                        $"Given {nameof(signature)} is invalid.",
                        nameof(signature));
                }
            }
            else if (signature.IsEmpty &&
                (metadata.Flag != VoteFlag.Null && metadata.Flag != VoteFlag.Unknown))
            {
                throw new ArgumentException(
                    $"If {nameof(signature)} is empty, {metadata.Flag} should be either " +
                    $"{VoteFlag.Null} or {VoteFlag.Unknown}",
                    nameof(signature));
            }

            _metadata = metadata;
            Signature = signature;
        }

        /// <summary>
        /// Creates a <see cref="Vote"/> instance.
        /// </summary>
        /// <param name="marshaled">Marshaled value of the <see cref="Vote"/>.
        /// <seealso cref="ByteArray"/></param>
        public Vote(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public Vote(Dictionary encoded)
            : this(
                new VoteMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc/>
        public long Height => _metadata.Height;

        /// <inheritdoc/>
        public int Round => _metadata.Round;

        /// <inheritdoc/>
        public BlockHash? BlockHash => _metadata.BlockHash;

        /// <inheritdoc/>
        public DateTimeOffset Timestamp => _metadata.Timestamp;

        /// <inheritdoc/>
        public PublicKey Validator => _metadata.Validator;

        /// <inheritdoc/>
        public VoteFlag Flag => _metadata.Flag;

        /// <summary>
        /// The signature for the <see cref="Vote"/>.  Lack of signature for a <see cref="Vote"/>
        /// is represented by an empty array <em>not</em> <see langword="default"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _metadata.Encoded.Add(SignatureKey, Signature)
                : _metadata.Encoded;

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
            !Signature.IsEmpty &&
            Validator.Verify(_metadata.ByteArray.ToImmutableArray(), Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(Vote? other)
        {
            return other is Vote vote &&
                _metadata.Equals(vote._metadata) &&
                Signature.SequenceEqual(vote.Signature);
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
            return HashCode.Combine(
                _metadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }
    }
}
