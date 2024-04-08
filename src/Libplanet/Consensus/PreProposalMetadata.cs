using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class for constructing <see cref="PreProposal"/>. This class contains proposal information
    /// in consensus of a height and a round. Use <see cref="Sign"/> to create a
    /// <see cref="Proposal"/>.
    /// </summary>
    public class PreProposalMetadata : IEquatable<PreProposalMetadata>, IBencodable
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary LastProofKey =
            new Binary(new byte[] { 0x4c }); // 'L

        private static readonly Binary TimestampKey =
            new Binary(new byte[] { 0x74 }); // 't'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Binary PreEvalBlockKey =
            new Binary(new byte[] { 0x42 }); // 'B'

        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Instantiates <see cref="PreProposalMetadata"/> with given parameters.
        /// </summary>
        /// <param name="height">a height of given pre-proposal values.</param>
        /// <param name="round">a round of given pre-proposal values.</param>
        /// <param name="lastProof">a <see cref="Proof"/> of previous round.</param>
        /// <param name="timestamp">The time at which the pre-proposal took place.</param>
        /// <param name="validatorPublicKey">a <see cref="PublicKey"/> of pre-proposing validator.
        /// </param>
        /// <param name="marshaledPreEvalBlock">a marshaled bencodex-encoded
        /// <see cref="byte"/> array of <see cref="PreEvaluationBlock"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">This can be thrown in following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     Given <paramref name="height"/> is less than 0.
        /// </description></item>
        /// <item><description>
        ///     Given <paramref name="round"/> is less than 0.
        /// </description></item>
        /// </list>
        /// </exception>
        public PreProposalMetadata(
            long height,
            int round,
            Proof? lastProof,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            byte[] marshaledPreEvalBlock)
        {
            if (height < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(height),
                    "Height must be greater than or equal to 0.");
            }
            else if (round < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(round),
                    "Round must be greater than or equal to 0.");
            }

            Height = height;
            Round = round;
            LastProof = lastProof;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
            MarshaledPreEvalBlock = marshaledPreEvalBlock;
            PreEvaluationHash = BlockMarshaler.UnmarshalPreEvaluationHash(
                (Dictionary)_codec.Decode(marshaledPreEvalBlock));
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public PreProposalMetadata(Dictionary encoded)
            : this(
                height: (Integer)encoded[HeightKey],
                round: (Integer)encoded[RoundKey],
                lastProof: encoded.TryGetValue(LastProofKey, out IValue proof)
                    ? (Proof?)new Proof(proof)
                    : null,
                timestamp: DateTimeOffset.ParseExact(
                    (Text)encoded[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    ((Binary)encoded[ValidatorPublicKeyKey]).ByteArray),
                marshaledPreEvalBlock: ((Binary)encoded[PreEvalBlockKey]).ToByteArray())
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// A height of given pre-proposal values.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round of given pre-proposal values.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// A <see cref="Proof"/> of previous round.
        /// </summary>
        public Proof? LastProof { get; }

        /// <summary>
        /// The pre-evaluation hash of <see cref="MarshaledPreEvalBlock"/>.
        /// This is automatically derived from <see cref="MarshaledPreEvalBlock"/>.
        /// </summary>
        public HashDigest<SHA256> PreEvaluationHash { get; }

        /// <summary>
        /// The time at which the pre-proposal took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of pre-proposing validator.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// A marshaled bencodex-encoded <see cref="byte"/> array of pre-evaluation block.
        /// </summary>
        public byte[] MarshaledPreEvalBlock { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="ProposalMetadata"/>.
        /// </summary>
        [JsonIgnore]
        public IValue Bencoded
        {
            get
            {
                Dictionary encoded = Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true))
                    .Add(PreEvalBlockKey, MarshaledPreEvalBlock);

                if (LastProof is Proof proof)
                {
                    encoded = encoded.Add(LastProofKey, proof.Bencoded);
                }

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Bencoded);

        /// <summary>
        /// Signs given <see cref="PreProposalMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="PreProposal"/>.</returns>
        public PreProposal Sign(PrivateKey signer) =>
            new PreProposal(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(PreProposalMetadata? other)
        {
            return other is PreProposalMetadata metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                LastProof.Equals(metadata.LastProof) &&
                PreEvaluationHash.Equals(metadata.PreEvaluationHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is PreProposalMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                LastProof is Proof proof ? ByteUtil.CalculateHashCode(proof.ToByteArray()) : 0,
                ByteUtil.CalculateHashCode(PreEvaluationHash.ToByteArray()),
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey);
        }
    }
}
