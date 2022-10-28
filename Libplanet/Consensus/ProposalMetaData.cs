using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class for constructing <see cref="Proposal"/>. This class contains proposal information
    /// in consensus of a height and a round. Use <see cref="Sign"/> to create a
    /// <see cref="Proposal"/>.
    /// </summary>
    public class ProposalMetaData
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private const string HeightKey = "height";
        private const string RoundKey = "round";
        private const string TimestampKey = "timestamp";
        private const string ValidatorKey = "validator";
        private const string BlockKey = "block";
        private const string ValidRoundKey = "validRound";

        private static Codec _codec = new Codec();

        /// <summary>
        /// Instantiates <see cref="ProposalMetaData"/> with given parameters.
        /// </summary>
        /// <param name="height">a height of given proposal values.</param>
        /// <param name="round">a round of given proposal values.</param>
        /// <param name="timestamp">The time at which the proposal took place.</param>
        /// <param name="validator">a <see cref="PublicKey"/> of proposing validator.</param>
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
        public ProposalMetaData(
            long height,
            int round,
            DateTimeOffset timestamp,
            PublicKey validator,
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
            Timestamp = timestamp;
            Validator = validator;
            MarshaledBlock = marshaledBlock;
            ValidRound = validRound;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public ProposalMetaData(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validator: new PublicKey(encoded.GetValue<Binary>(ValidatorKey).ByteArray),
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
        /// The time at which the proposal took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of proposing validator.
        /// </summary>
        public PublicKey Validator { get; }

        /// <summary>
        /// A marshaled bencodex-encoded <see cref="byte"/> array of block.
        /// </summary>
        public byte[] MarshaledBlock { get; }

        /// <summary>
        /// a latest valid round at the moment of given proposal.
        /// </summary>
        public int ValidRound { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="ProposalMetaData"/>.
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
                    .Add(ValidatorKey, Validator.Format(compress: true))
                    .Add(BlockKey, MarshaledBlock)
                    .Add(ValidRoundKey, ValidRound);

                return encoded;
            }
        }

        [JsonIgnore]
        public byte[] ByteArray => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="ProposalMetaData"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="Proposal"/>.</returns>
        public Proposal Sign(PrivateKey signer) =>
            new Proposal(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                ByteUtil.CalculateHashCode(MarshaledBlock),
                Validator,
                ValidRound);
        }
    }
}
