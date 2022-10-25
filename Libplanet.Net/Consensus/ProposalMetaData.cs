using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Net.Consensus
{
    public class ProposalMetaData
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private const string HeightKey = "height";
        private const string RoundKey = "round";
        private const string BlockKey = "block";
        private const string TimestampKey = "timestamp";
        private const string ValidatorKey = "validator";
        private const string ValidRoundKey = "validRound";

        private static Codec _codec = new Codec();

        public ProposalMetaData(
            long height,
            int round,
            byte[] blockMarshaled,
            DateTimeOffset timestamp,
            PublicKey validator,
            int validRound
        )
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
            BlockMarshaled = blockMarshaled;
            Timestamp = timestamp;
            Validator = validator;
            ValidRound = validRound;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public ProposalMetaData(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                blockMarshaled: encoded.GetValue<Binary>(BlockKey),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validator: new PublicKey(encoded.GetValue<Binary>(ValidatorKey).ByteArray),
                validRound: encoded.GetValue<Integer>(ValidRoundKey))
        {
        }
#pragma warning restore SA1118

        public long Height { get; }

        public int Round { get; }

        public byte[] BlockMarshaled { get; }

        public DateTimeOffset Timestamp { get; }

        public PublicKey Validator { get; }

        public int ValidRound { get; }

        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(BlockKey, BlockMarshaled)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorKey, Validator.Format(compress: true))
                    .Add(ValidRoundKey, ValidRound);

                return encoded;
            }
        }

        [JsonIgnore]
        public byte[] ByteArray => _codec.Encode(Encoded);

        public Proposal Sign(PrivateKey signer)
        {
            return signer is PrivateKey key
                ? new Proposal(this, key.Sign(ByteArray).ToImmutableArray())
                : new Proposal(this, ImmutableArray<byte>.Empty);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockMarshaled,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                Validator);
        }
    }
}
