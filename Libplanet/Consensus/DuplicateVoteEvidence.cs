using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a evidence of duplicate vote on consensus.
    /// </summary>
    public class DuplicateVoteEvidence
        : IDuplicateVoteEvidence, IEquatable<DuplicateVoteEvidence>, IBencodable
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x68 };                // 'h'
        private static readonly byte[] VotesKey = { 0x76 };                 // 'v'
        private static readonly byte[] ValidatorPowerKey = { 0x70 };        // 'p'
        private static readonly byte[] TotalPowerKey = { 0x50 };            // 'P'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly Codec Codec = new Codec();

        private EvidenceId? _id;

        /// <summary>
        /// Creates a <see cref="DuplicateVoteEvidence"/> instance.
        /// </summary>
        /// <param name="votes">Conflicting <see cref="Vote"/>s.</param>
        /// <param name="validatorSet"><see cref="ValidatorSet"/>
        /// from block of conflicting votes has been made.</param>
        /// <param name="timestamp">The timestamp of evidence.</param>
        public DuplicateVoteEvidence(
            Vote[] votes,
            ValidatorSet validatorSet,
            DateTimeOffset timestamp)
            : this(
                  height: votes[0].Height,
                  votes: votes,
                  validatorPower: validatorSet.GetValidator(votes[0].ValidatorPublicKey).Power,
                  totalPower: validatorSet.TotalPower,
                  timestamp: timestamp)
        {
        }

        public DuplicateVoteEvidence(Bencodex.Types.IValue bencoded)
            : this(bencoded is Bencodex.Types.Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Bencodex.Types.Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

        private DuplicateVoteEvidence(
            long height,
            IEnumerable<Vote> votes,
            BigInteger validatorPower,
            BigInteger totalPower,
            DateTimeOffset timestamp)
        {
            if (votes.Count() < 2)
            {
                throw new ArgumentException(
                    $"Less than two votes are found : {votes.Count()}");
            }

            if (votes.Any(vote => vote.Height != height))
            {
                throw new ArgumentException(
                    $"Height of votes are different from height {height}");
            }

            if (votes.Any(vote => vote.Round != votes.First().Round))
            {
                throw new ArgumentException(
                    $"Round of votes are different");
            }

            if (votes.Any(vote => vote.ValidatorPublicKey != votes.First().ValidatorPublicKey))
            {
                throw new ArgumentException(
                    $"Validator public key of votes are different");
            }

            if (votes.Any(vote => vote.Flag != votes.First().Flag))
            {
                throw new ArgumentException(
                    $"Flags of votes are different");
            }

            if (votes.Any(vote => vote.BlockHash is null))
            {
                throw new ArgumentException(
                    $"Nil votes are included in votes");
            }

            if (votes.Select(vote => vote.BlockHash).Distinct().Count() != votes.Count())
            {
                throw new ArgumentException(
                    $"Some block hash of votes are same");
            }

            if (votes.Any(vote => !vote.Verify()))
            {
                throw new ArgumentException(
                    $"Signature of votes are invalid");
            }

            Height = height;
            Votes = votes.OrderBy(vote => vote.BlockHash).ToArray();
            ValidatorPower = validatorPower;
            TotalPower = totalPower;
            Timestamp = timestamp;
        }

        private DuplicateVoteEvidence(Bencodex.Types.Dictionary bencoded)
            : this(
                height: bencoded.GetValue<Integer>(HeightKey),
                votes: bencoded.GetValue<List>(VotesKey).Select(v => new Vote(v)),
                validatorPower: bencoded.GetValue<Integer>(ValidatorPowerKey),
                totalPower: bencoded.GetValue<Integer>(TotalPowerKey),
                timestamp: DateTimeOffset.ParseExact(
                    bencoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture))
        {
        }

        /// <summary>
        /// A unique identifier derived from this <see cref="DuplicateVoteEvidence"/>'s
        /// content.
        /// <para>For more characteristics, see <see cref="EvidenceId"/> type.</para>
        /// </summary>
        /// <seealso cref="EvidenceId"/>
        public EvidenceId Id
        {
            get
            {
                if (!(_id is { } nonNull))
                {
                    using var hasher = SHA256.Create();
                    byte[] payload = Codec.Encode(Bencoded);
                    _id = nonNull = new EvidenceId(hasher.ComputeHash(payload));
                }

                return nonNull;
            }
        }

        public long Height { get; }

        public Vote[] Votes { get; }

        public BigInteger ValidatorPower { get; }

        public BigInteger TotalPower { get; }

        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc/>
        [JsonIgnore]
        public Bencodex.Types.IValue Bencoded
        {
            get
            {
                Dictionary bencoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(VotesKey, new Bencodex.Types.List(Votes.Select(v => v.Bencoded)))
                    .Add(ValidatorPowerKey, ValidatorPower)
                    .Add(TotalPowerKey, TotalPower)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));
                return bencoded;
            }
        }

        /// <inheritdoc/>
        public bool Equals(DuplicateVoteEvidence? other)
        {
            return other is DuplicateVoteEvidence metadata &&
                Height == metadata.Height &&
                Votes.SequenceEqual(metadata.Votes) &&
                ValidatorPower == metadata.ValidatorPower &&
                TotalPower == metadata.TotalPower &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture));
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is DuplicateVoteEvidence other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            HashCode hash = default;
            hash.Add(Height);
            foreach (var vote in Votes)
            {
                hash.Add(vote);
            }

            hash.Add(ValidatorPower);
            hash.Add(TotalPower);
            hash.Add(Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));
            return hash.ToHashCode();
        }
    }
}
