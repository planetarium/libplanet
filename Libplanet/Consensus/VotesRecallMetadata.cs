using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public class VotesRecallMetadata : IEquatable<VotesRecallMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly byte[] HeightKey = { 0x48 };                // 'H'
        private static readonly byte[] RoundKey = { 0x52 };                 // 'R'
        private static readonly byte[] TimestampKey = { 0x74 };             // 't'
        private static readonly byte[] ValidatorPublicKeyKey = { 0x50 };    // 'P'
        private static readonly byte[] VotesKey = { 0x76 };                 // 'v'

        private static Codec _codec = new Codec();

        /// <summary>
        /// Instantiates a <see cref="VotesRecallMetadata"/> with given context of
        /// <see cref="Vote"/>s.
        /// </summary>
        /// <param name="height">The height of <paramref name="votes"/>.
        /// </param>
        /// <param name="round">The round of <paramref name="votes"/>.
        /// </param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/>
        /// when <see cref="VotesRecallMetadata"/> has been made.
        /// </param>
        /// <param name="validatorPublicKey">The <see cref="PublicKey"/> of sending
        /// <see cref="Validator"/> that will be signed on.
        /// </param>
        /// <param name="votes">The <see cref="Vote"/>s that <see cref="Validator"/>
        /// of <paramref name="validatorPublicKey"/> has been collected.
        /// </param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown if given <paramref name="height"/>
        /// or <paramref name="round"/> is less than zero.</exception>
        public VotesRecallMetadata(
            long height,
            int round,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            ImmutableHashSet<Vote> votes)
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
            Votes = votes;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VotesRecallMetadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    encoded.GetValue<Binary>(ValidatorPublicKeyKey).ByteArray),
                votes: encoded.GetValue<List>(VotesKey).Select(
                    v => new Vote(v)).ToImmutableHashSet())
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// The height of given votes recall.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// The round of given votes recall.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// The time at which the votes recall took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of <see cref="Validator"/>
        /// that helps bootstrapping with votes recall.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// Set of recalled <see cref="Vote"/>s.
        /// </summary>
        public ImmutableHashSet<Vote> Votes { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="VotesRecallMetadata"/>.
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
                    .Add(
                        VotesKey,
                        new List(
                            Votes.OrderBy(v => v.Timestamp)
                            .ThenBy(v => v.ValidatorPublicKey.ToAddress())
                            .Select(v => v.Bencoded)));

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="VotesRecallMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="VotesRecall"/>.</returns>
        public VotesRecall Sign(PrivateKey signer) =>
            new VotesRecall(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(VotesRecallMetadata? other)
        {
            return other is { } metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Votes.SetEquals(metadata.Votes);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is VotesRecallMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey);
        }
    }
}
