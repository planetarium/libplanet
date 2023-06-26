using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public class BootstrapMetadata : IEquatable<BootstrapMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x48 };                // 'H'
        private static readonly byte[] RoundKey = { 0x52 };                 // 'R'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly byte[] ValidatorPublicKeyKey = { 0x50 };    // 'P'

        private static Codec _codec = new Codec();

        /// <summary>
        /// Instantiates a <see cref="BootstrapMetadata"/> with given condition of bootstrapping
        /// <see cref="Validator"/>'s context.
        /// </summary>
        /// <param name="height">The height of bootstrapping context.
        /// </param>
        /// <param name="round">The round of bootstrapping context.
        /// </param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/>
        /// that bootstrapping request has been made.
        /// </param>
        /// <param name="validatorPublicKey">The <see cref="PublicKey"/> of bootstrapping
        /// <see cref="Validator"/> that will be signed on.
        /// </param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown if given <paramref name="height"/>
        /// or <paramref name="round"/> is less than zero.</exception>
        public BootstrapMetadata(
            long height,
            int round,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey)
        {
            if (height < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(height),
                    "Height must be greater than or equal to 0.");
            }

            if (round < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(round),
                    "Round must be greater than or equal to 0.");
            }

            Height = height;
            Round = round;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public BootstrapMetadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    encoded.GetValue<Binary>(ValidatorPublicKeyKey).ByteArray))
        {
        }
#pragma warning restore SA1118
        /// <summary>
        /// Current height of bootstrapping validator.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// Current round of bootstrapping validator.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of bootstrapping validator.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The time at which the bootstrapping requested.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="BootstrapMetadata"/>.
        /// </summary>
        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true))
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="BootstrapMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="Bootstrap"/>.</returns>
        public Bootstrap Sign(PrivateKey signer) =>
            new Bootstrap(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(BootstrapMetadata? other)
        {
            return other is { } metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture));
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is BootstrapMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                ValidatorPublicKey,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));
        }
    }
}
