using System;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;

namespace Libplanet.Consensus
{
    /// <summary>
    /// A class for constructing <see cref="ProposalClaim"/>. This class contains proposal claim
    /// information in consensus of a height, round and <see cref="BlockHash"/>.
    /// Use <see cref="Sign"/> to create a <see cref="ProposalClaim"/>.
    /// </summary>
    public class ProposalClaimMetadata : IEquatable<ProposalClaimMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary BlockHashKey =
            new Binary(new byte[] { 0x68 }); // 'h'

        private static readonly Binary TimestampKey =
            new Binary(new byte[] { 0x74 }); // 't'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Codec _codec = new Codec();

        /// <summary>
        /// Instantiates <see cref="ProposalClaimMetadata"/> with given parameters.
        /// </summary>
        /// <param name="height">A height of given claim values.</param>
        /// <param name="round">A round of given claim values.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> of given proposal to claim.</param>
        /// <param name="timestamp">The time at which the proposal took place.</param>
        /// <param name="validatorPublicKey">a <see cref="PublicKey"/> of proposing validator.
        /// </param>
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
        public ProposalClaimMetadata(
            long height,
            int round,
            BlockHash blockHash,
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
            BlockHash = blockHash;
            Timestamp = timestamp;
            ValidatorPublicKey = validatorPublicKey;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public ProposalClaimMetadata(Dictionary encoded)
            : this(
                height: (Integer)encoded[HeightKey],
                round: (Integer)encoded[RoundKey],
                blockHash: new BlockHash(encoded[BlockHashKey]),
                timestamp: DateTimeOffset.ParseExact(
                    (Text)encoded[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    ((Binary)encoded[ValidatorPublicKeyKey]).ByteArray.ToArray()))
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
        /// The <see cref="Types.Blocks.BlockHash"/> of <see cref="Proposal"/> to claim.
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
                    .Add(BlockHashKey, BlockHash.ByteArray)
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
        /// Signs given <see cref="ProposalMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="Proposal"/>.</returns>
        public ProposalClaim Sign(PrivateKey signer) =>
            new ProposalClaim(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(ProposalClaimMetadata? other)
        {
            return other is ProposalClaimMetadata metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                BlockHash.Equals(metadata.BlockHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey);
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
                ValidatorPublicKey);
        }
    }
}
