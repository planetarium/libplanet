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

        private static readonly Binary LotKey =
            new Binary(new byte[] { 0x4C }); // 'L'

        private static readonly Binary TimestampKey =
            new Binary(new byte[] { 0x74 }); // 't'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Creates a new instance of <see cref="DominantLotMetadata"/>.
        /// </summary>
        /// <param name="lot">The lot that is dominant.</param>
        /// <param name="timestamp">The time at which the dominant lot selected.</param>
        /// <param name="validatorPublicKey">
        /// The <see cref="PublicKey"/> of the validator selected dominant lot.</param>
        public DominantLotMetadata(
            Lot lot,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey)
        {
            Lot = lot;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public DominantLotMetadata(Dictionary encoded)
            : this(
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
        /// The <see cref="Lot"/> that is dominant.
        /// </summary>
        public Lot Lot { get; }

        /// <summary>
        /// The time at which the dominant lot selected.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// The <see cref="PublicKey"/> of the validator selected dominant lot.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The height of the dominant lot.
        /// </summary>
        public long Height => Lot.Height;

        /// <summary>
        /// The round of the dominant lot.
        /// </summary>
        public int Round => Lot.Round;

        /// <summary>
        /// A Bencodex-encoded value of <see cref="DominantLotMetadata"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Bencoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(LotKey, Lot.Bencoded)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true));

                return encoded;
            }
        }

        /// <summary>
        /// An immutable byte array encoded value of <see cref="DominantLotMetadata"/>.
        /// </summary>
        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        /// <summary>
        /// Retrieve a byte array encoded value of <see cref="DominantLotMetadata"/>.
        /// </summary>
        /// <returns>
        /// A byte array encoded value of <see cref="DominantLotMetadata"/>.
        /// </returns>
        public byte[] ToByteArray() => _codec.Encode(Bencoded);

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
