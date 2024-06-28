using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public class DominantLotMetadata : IEquatable<DominantLotMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary LotKey =
            new Binary(new byte[] { 0x4C }); // 'L'

        private static readonly Binary TimestampKey =
            new Binary(new byte[] { 0x74 }); // 't'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Codec _codec = new Codec();

        public DominantLotMetadata(
            long height,
            int round,
            Lot lot,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey)
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
            Lot = lot;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public DominantLotMetadata(Dictionary encoded)
            : this(
                height: (Integer)encoded[HeightKey],
                round: (Integer)encoded[RoundKey],
                lot: new Lot(encoded[LotKey]),
                timestamp: DateTimeOffset.ParseExact(
                    (Text)encoded[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    ((Binary)encoded[ValidatorPublicKeyKey]).ByteArray))
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// A height of consensus.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round of consensus.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// The <see cref="Lot"/> of vote claim.
        /// </summary>
        public Lot Lot { get; }

        /// <summary>
        /// The time at which the claim took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of claimant.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="DominantLotMetadata"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(LotKey, Lot.Bencoded)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true));

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="DominantLotMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="DominantLot"/>.</returns>
        public DominantLot Sign(PrivateKey signer) =>
            new DominantLot(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(DominantLotMetadata? other)
        {
            return other is { } metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                Lot.Equals(metadata.Lot) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is DominantLotMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                Lot,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey);
        }
    }
}
