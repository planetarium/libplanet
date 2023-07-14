using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common.Crypto;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class for constructing <see cref="Proposal"/>. This class contains proposal information
    /// in consensus of a height and a round. Use <see cref="Sign"/> to create a
    /// <see cref="Proposal"/>.
    /// </summary>
    public class ProposalMetadata : IEquatable<ProposalMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x48 };                // 'H'
        private static readonly byte[] RoundKey = { 0x52 };                 // 'R'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly byte[] ValidatorPublicKeyKey = { 0x50 };    // 'P'
        private static readonly byte[] BlockKey = { 0x42 };                 // 'B'
        private static readonly byte[] ValidRoundKey = { 0x56 };            // 'V'

        private static Codec _codec = new Codec();

        /// <summary>
        /// Instantiates <see cref="ProposalMetadata"/> with given parameters.
        /// </summary>
        /// <param name="height">a height of given proposal values.</param>
        /// <param name="round">a round of given proposal values.</param>
        /// <param name="timestamp">The time at which the proposal took place.</param>
        /// <param name="validatorPublicKey">a <see cref="PublicKey"/> of proposing validator.
        /// </param>
        /// <param name="validRound">a latest valid round at the moment of given proposal.</param>
        /// <param name="marshaledBlock">a marshaled bencodex-encoded <see cref="byte"/> array of
        /// block.</param>
        /// <exception cref="ArgumentOutOfRangeException">This can be thrown in following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     Given <paramref name="height"/> is less than 0.
        /// </description></item>
        /// <item><description>
        ///     Given <paramref name="round"/> is less than 0.
        /// </description></item>
        /// <item><description>
        ///     Given <paramref name="validRound"/> is less than -1.
        /// </description></item>
        /// </list>
        /// </exception>
        public ProposalMetadata(
            long height,
            int round,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            byte[] marshaledBlock,
            int validRound)
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
            else if (validRound < -1)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(validRound),
                    "ValidRound must be greater than or equal to -1.");
            }

            Height = height;
            Round = round;
            BlockHash = BlockMarshaler.UnmarshalBlockHash(
                (Dictionary)_codec.Decode(marshaledBlock));
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
            MarshaledBlock = marshaledBlock;
            ValidRound = validRound;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public ProposalMetadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    encoded.GetValue<Binary>(ValidatorPublicKeyKey).ByteArray),
                marshaledBlock: encoded.GetValue<Binary>(BlockKey),
                validRound: encoded.GetValue<Integer>(ValidRoundKey))
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// A height of given proposal values.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round of given proposal values.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// The <see cref="Common.Types.Blocks.BlockHash"/> of <see cref="MarshaledBlock"/>.
        /// This is automatically derived from <see cref="MarshaledBlock"/>.
        /// </summary>
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The time at which the proposal took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of proposing validator.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// A marshaled bencodex-encoded <see cref="byte"/> array of block.
        /// </summary>
        public byte[] MarshaledBlock { get; }

        /// <summary>
        /// a latest valid round at the moment of given proposal.
        /// </summary>
        public int ValidRound { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="ProposalMetadata"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true))
                    .Add(BlockKey, MarshaledBlock)
                    .Add(ValidRoundKey, ValidRound);

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="ProposalMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="Proposal"/>.</returns>
        public Proposal Sign(PrivateKey signer) =>
            new Proposal(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(ProposalMetadata? other)
        {
            return other is ProposalMetadata metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                BlockHash.Equals(metadata.BlockHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                ValidRound == metadata.ValidRound;
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is ProposalMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey,
                ValidRound);
        }
    }
}
