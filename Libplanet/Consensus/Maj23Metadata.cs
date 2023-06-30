using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public class Maj23Metadata : IEquatable<Maj23Metadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x48 };                // 'H'
        private static readonly byte[] RoundKey = { 0x52 };                 // 'R'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly byte[] ValidatorPublicKeyKey = { 0x50 };    // 'P'
        private static readonly byte[] BlockHashKey = { 0x42 };             // 'B'
        private static readonly byte[] FlagKey = { 0x46 };                  // 'F'

        private static Codec _codec = new Codec();

        public Maj23Metadata(
            long height,
            int round,
            BlockHash blockHash,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            VoteFlag flag)
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

            if (flag == VoteFlag.Null || flag == VoteFlag.Unknown)
            {
                throw new ArgumentException(
                    "Vote flag should be PreVote or PreCommit.",
                    nameof(flag));
            }

            Height = height;
            Round = round;
            BlockHash = blockHash;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
            Flag = flag;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public Maj23Metadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                blockHash: new BlockHash(encoded.GetValue<Binary>(BlockHashKey).ByteArray),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    encoded.GetValue<Binary>(ValidatorPublicKeyKey).ByteArray),
                flag: (VoteFlag)(int)encoded.GetValue<Integer>(FlagKey).Value)
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// A height of given maj23 values.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round of given maj23 values.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// The <see cref="Libplanet.Blocks.BlockHash"/> of vote claim.
        /// </summary>
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The time at which the claim took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of claimant.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The <see cref="VoteFlag"/> of the <see cref="Maj23Metadata"/>.
        /// </summary>
        public VoteFlag Flag { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="Maj23Metadata"/>.
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
                    .Add(BlockHashKey, BlockHash.ByteArray)
                    .Add(FlagKey, (int)Flag);

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="Maj23Metadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="Maj23"/>.</returns>
        public Maj23 Sign(PrivateKey signer) =>
            new Maj23(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(Maj23Metadata? other)
        {
            return other is { } metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                BlockHash.Equals(metadata.BlockHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Flag == metadata.Flag;
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is Maj23Metadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey,
                Flag);
        }
    }
}
