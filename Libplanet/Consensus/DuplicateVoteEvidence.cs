using System;
using System.Globalization;
using System.Numerics;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Misc;
using Bencodex.Types;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a evidence of duplicate vote on consensus.
    /// </summary>
    public class DuplicateVoteEvidence
        : Evidence, IEquatable<DuplicateVoteEvidence>, IBencodable
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x68 };                // 'h'
        private static readonly byte[] VoteRefKey = { 0x76 };                 // 'v'
        private static readonly byte[] VoteDupKey = { 0x56 };                 // 'V'
        private static readonly byte[] ValidatorPowerKey = { 0x70 };        // 'p'
        private static readonly byte[] TotalPowerKey = { 0x50 };            // 'P'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'

        /// <summary>
        /// Creates a <see cref="DuplicateVoteEvidence"/> instance.
        /// </summary>
        /// <param name="voteRef">Reference vote of conflicting <see cref="Vote"/>s.</param>
        /// <param name="voteDup">Duplicated vote of conflicting <see cref="Vote"/>s.</param>
        /// <param name="validatorSet"><see cref="ValidatorSet"/>
        /// from block of conflicting votes has been made.</param>
        /// <param name="timestamp">The timestamp of evidence.</param>
        public DuplicateVoteEvidence(
            Vote voteRef,
            Vote voteDup,
            ValidatorSet validatorSet,
            DateTimeOffset timestamp)
            : this(
                  voteRef.Height,
                  voteRef,
                  voteDup,
                  validatorSet.GetValidator(voteRef.ValidatorPublicKey).Power,
                  validatorSet.TotalPower,
                  timestamp)
        {
        }

        /// <summary>
        /// Creates a <see cref="DuplicateVoteEvidence"/> instance from
        /// bencoded <see cref="IValue"/>.
        /// </summary>
        /// <param name="bencoded">Bencoded <see cref="IValue"/>.</param>
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
            Vote voteRef,
            Vote voteDup,
            BigInteger validatorPower,
            BigInteger totalPower,
            DateTimeOffset timestamp)
            : base(height, timestamp)
        {
            if (voteRef.Height != height)
            {
                throw new ArgumentException(
                    $"Height of voteRef is different from height : " +
                    $"Expected {height}, Actual {voteRef.Height}");
            }

            if (voteDup.Height != height)
            {
                throw new ArgumentException(
                    $"Height of voteDup is different from height : " +
                    $"Expected {height}, Actual {voteDup.Height}");
            }

            if (voteRef.Round != voteDup.Round)
            {
                throw new ArgumentException(
                    $"Round of votes are different : " +
                    $"voteRef {voteRef.Round}, voteDup {voteDup.Round}");
            }

            if (voteRef.ValidatorPublicKey != voteDup.ValidatorPublicKey)
            {
                throw new ArgumentException(
                    $"Validator public key of votes are different : " +
                    $"voteRef {voteRef.ValidatorPublicKey}," +
                    $"voteDup {voteDup.ValidatorPublicKey}");
            }

            if (voteRef.Flag != voteDup.Flag)
            {
                throw new ArgumentException(
                    $"Flags of votes are different : " +
                    $"voteRef {voteRef.Flag}, voteDup {voteDup.Flag}");
            }

            if (voteRef.BlockHash is { } voteRefHash)
            {
            }
            else
            {
                throw new ArgumentException(
                    $"voteRef is nill vote");
            }

            if (voteDup.BlockHash is { } voteDupHash)
            {
            }
            else
            {
                throw new ArgumentException(
                    $"voteDup is nill vote");
            }

            if (voteRefHash.Equals(voteDupHash))
            {
                throw new ArgumentException(
                    $"Blockhash of votes are same : " +
                    $"{voteRefHash}");
            }

            if (!voteRef.Verify())
            {
                throw new ArgumentException(
                    $"Signature of voteRef is invalid : " +
                    $"voteRef {voteRef}," +
                    $"signature {voteRef.Signature.Hex()}");
            }

            if (!voteDup.Verify())
            {
                throw new ArgumentException(
                    $"Signature of voteDup is invalid : " +
                    $"voteDup {voteDup}," +
                    $"signature {voteDup.Signature.Hex()}");
            }

            if (height < 0L)
            {
                throw new ArgumentException(
                    $"Height is not positive");
            }

            if (validatorPower <= BigInteger.Zero)
            {
                throw new ArgumentException(
                    $"Validator Power is not positive");
            }

            if (totalPower <= BigInteger.Zero)
            {
                throw new ArgumentException(
                    $"Total power is not positive");
            }

            (VoteRef, VoteDup) = OrderDuplicateVotePair(voteRef, voteDup);
            ValidatorPower = validatorPower;
            TotalPower = totalPower;
        }

        private DuplicateVoteEvidence(Bencodex.Types.Dictionary bencoded)
            : this(
                height: bencoded.GetValue<Integer>(HeightKey),
                voteRef: new Vote(bencoded.GetValue<IValue>(VoteRefKey)),
                voteDup: new Vote(bencoded.GetValue<IValue>(VoteDupKey)),
                validatorPower: bencoded.GetValue<Integer>(ValidatorPowerKey),
                totalPower: bencoded.GetValue<Integer>(TotalPowerKey),
                timestamp: DateTimeOffset.ParseExact(
                    bencoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture))
        {
        }

        public override EvidenceType Type => EvidenceType.DuplicateVoteEvidence;

        /// <summary>
        /// The reference vote of conflicting votes.
        /// </summary>
        public Vote VoteRef { get; }

        /// <summary>
        /// The duplicated vote of conflicting votes.
        /// </summary>
        public Vote VoteDup { get; }

        /// <summary>
        /// Consensus power of validator that committed infraction at the time
        /// that infraction has been occured.
        /// </summary>
        public BigInteger ValidatorPower { get; }

        /// <summary>
        /// Total power of validators at the time that infraction has been occured.
        /// </summary>
        public BigInteger TotalPower { get; }

        /// <inheritdoc/>
        [JsonIgnore]
        public override Bencodex.Types.IValue Bencoded
        {
            get
            {
                Dictionary bencoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(VoteRefKey, VoteRef.Bencoded)
                    .Add(VoteDupKey, VoteDup.Bencoded)
                    .Add(ValidatorPowerKey, ValidatorPower)
                    .Add(TotalPowerKey, TotalPower)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));
                return bencoded;
            }
        }

        public static (Vote, Vote) OrderDuplicateVotePair(Vote voteRef, Vote voteDup)
        {
            if (voteRef.BlockHash is { } voteRefHash)
            {
            }
            else
            {
                throw new ArgumentException(
                    $"voteRef is nill vote");
            }

            if (voteDup.BlockHash is { } voteDupHash)
            {
            }
            else
            {
                throw new ArgumentException(
                    $"voteDup is nill vote");
            }

            if (voteRef.Timestamp < voteDup.Timestamp)
            {
                return (voteRef, voteDup);
            }
            else if (voteRef.Timestamp > voteDup.Timestamp)
            {
                return (voteDup, voteRef);
            }
            else
            {
                if (voteRefHash.CompareTo(voteDupHash) < 0)
                {
                    return (voteRef, voteDup);
                }
                else
                {
                    return (voteDup, voteRef);
                }
            }
        }

        /// <inheritdoc/>
        public bool Equals(DuplicateVoteEvidence? other)
            => other is DuplicateVoteEvidence duplicateVoteEvidence &&
                Height == duplicateVoteEvidence.Height &&
                VoteRef.Equals(duplicateVoteEvidence.VoteRef) &&
                VoteDup.Equals(duplicateVoteEvidence.VoteDup) &&
                ValidatorPower == duplicateVoteEvidence.ValidatorPower &&
                TotalPower == duplicateVoteEvidence.TotalPower &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        duplicateVoteEvidence.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture));

        /// <inheritdoc/>
        public override bool Equals(object? obj)
            => obj is DuplicateVoteEvidence other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
            => HashCode.Combine(
                Height,
                VoteRef,
                VoteDup,
                ValidatorPower,
                TotalPower,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));
    }
}
