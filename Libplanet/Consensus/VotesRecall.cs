using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class used to help peer <see cref="Validator"/> to bootstrap by sending
    /// <see cref="Vote"/>s that the peer has.
    /// </summary>
    public class VotesRecall : IEquatable<VotesRecall>
    {
        private static readonly byte[] SignatureKey = { 0x53 }; // 'S'
        private static Codec _codec = new Codec();

        private readonly VotesRecallMetadata _votesRecallMetadata;

        /// <summary>
        /// Instantiates a <see cref="VotesRecall"/> with given
        /// <paramref name="votesRecallMetadata"/> and its <paramref name="signature"/>.
        /// </summary>
        /// <param name="votesRecallMetadata">
        /// A <see cref="VotesRecallMetadata"/> to help bootstrapping.</param>
        /// <param name="signature">A signature signed with <paramref name="votesRecallMetadata"/>.
        /// </param>
        /// <exception cref="ArgumentNullException">Thrown if given <paramref name="signature"/> is
        /// empty.</exception>
        /// <exception cref="ArgumentException">Thrown if given <paramref name="signature"/> is
        /// invalid and cannot be verified with <paramref name="votesRecallMetadata"/>.</exception>
        public VotesRecall(VotesRecallMetadata votesRecallMetadata, ImmutableArray<byte> signature)
        {
            _votesRecallMetadata = votesRecallMetadata;
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

        public VotesRecall(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VotesRecall(Dictionary encoded)
            : this(
                new VotesRecallMetadata(encoded),
                encoded.ContainsKey(SignatureKey)
                    ? encoded.GetValue<Binary>(SignatureKey).ToImmutableArray()
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc cref="VotesRecallMetadata.Height"/>
        public long Height => _votesRecallMetadata.Height;

        /// <inheritdoc cref="VotesRecallMetadata.Round"/>
        public int Round => _votesRecallMetadata.Round;

        /// <inheritdoc cref="VotesRecallMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _votesRecallMetadata.Timestamp;

        /// <inheritdoc cref="VotesRecallMetadata.ValidatorPublicKey"/>
        public PublicKey ValidatorPublicKey => _votesRecallMetadata.ValidatorPublicKey;

        /// <inheritdoc cref="VotesRecallMetadata.Votes"/>
        public ImmutableHashSet<Vote> Votes => _votesRecallMetadata.Votes;

        /// <summary>
        /// A signature that signed with <see cref="VotesRecallMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="VotesRecall"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded =>
            !Signature.IsEmpty
                ? _votesRecallMetadata.Encoded.Add(SignatureKey, Signature)
                : _votesRecallMetadata.Encoded;

        /// <summary>
        /// <see cref="byte"/> encoded <see cref="VotesRecall"/> data.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Verifies whether the <see cref="VotesRecallMetadata"/> is properly signed by
        /// <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsDefaultOrEmpty &&
            ValidatorPublicKey.Verify(
                _votesRecallMetadata.ByteArray.ToImmutableArray(),
                Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(VotesRecall? other)
        {
            return other is { } votesRecall &&
                   _votesRecallMetadata.Equals(votesRecall._votesRecallMetadata) &&
                   Signature.SequenceEqual(votesRecall.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is VotesRecall other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _votesRecallMetadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }

        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "validator_public_key", ValidatorPublicKey.ToString() },
                {
                    "votes", Votes.Aggregate(
                        string.Empty, (current, next) => current + next.ToString())
                },
                { "height", Height },
                { "round", Round },
                { "timestamp", Timestamp.ToString(CultureInfo.InvariantCulture) },
            };
            return JsonSerializer.Serialize(dict);
        }
    }
}
