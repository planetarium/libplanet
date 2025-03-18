using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Consensus
{
    public class VoteSetBitsMetadata : IEquatable<VoteSetBitsMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary TimestampKey =
            new Binary(new byte[] { 0x74 }); // 't'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Binary BlockHashKey =
            new Binary(new byte[] { 0x42 }); // 'B'

        private static readonly Binary FlagKey =
            new Binary(new byte[] { 0x46 }); // 'F'

        private static readonly Binary VoteBitsKey =
            new Binary(new byte[] { 0x56 }); // 'V'

        private static readonly Codec _codec = new Codec();

        public VoteSetBitsMetadata(
            long height,
            int round,
            BlockHash blockHash,
            DateTimeOffset timestamp,
            PublicKey validatorPublicKey,
            VoteFlag flag,
            IEnumerable<bool> voteBits)
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
            VoteBits = voteBits.ToImmutableArray();
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VoteSetBitsMetadata(Dictionary encoded)
            : this(
                height: (Integer)encoded[HeightKey],
                round: (Integer)encoded[RoundKey],
                blockHash: new BlockHash(encoded[BlockHashKey]),
                timestamp: DateTimeOffset.ParseExact(
                    (Text)encoded[TimestampKey],
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validatorPublicKey: new PublicKey(
                    ((Binary)encoded[ValidatorPublicKeyKey]).ByteArray.ToArray()),
                flag: (VoteFlag)(int)(Integer)encoded[FlagKey],
                voteBits: ((List)encoded[VoteBitsKey])
                    .Select(bit => (bool)(Bencodex.Types.Boolean)bit))
        {
        }
#pragma warning restore SA1118

        /// <summary>
        /// A height of the votes in the given vote set.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round of the votes in the given vote set.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// The <see cref="Types.Blocks.BlockHash"/> of the votes in the vote sets.
        /// </summary>
        public BlockHash BlockHash { get; }

        /// <summary>
        /// The time at which the set is created.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// A <see cref="PublicKey"/> of the vote set.
        /// </summary>
        public PublicKey ValidatorPublicKey { get; }

        /// <summary>
        /// The <see cref="VoteFlag"/> of the votes in the vote set.
        /// </summary>
        public VoteFlag Flag { get; }

        /// <summary>
        /// <see cref="bool"/>s of the vote set to be .
        /// </summary>
        public ImmutableArray<bool> VoteBits { get; }

        /// <summary>
        /// A Bencodex-encoded value of <see cref="VoteSetBitsMetadata"/>.
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
                    .Add(FlagKey, (int)Flag)
                    .Add(
                        VoteBitsKey,
                        new List(VoteBits.Select(bit => (Bencodex.Types.Boolean)bit)));

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        /// <summary>
        /// Signs given <see cref="VoteSetBitsMetadata"/> with given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">A <see cref="PrivateKey"/> to sign.</param>
        /// <returns>Returns a signed <see cref="VoteSetBits"/>.</returns>
        public VoteSetBits Sign(PrivateKey signer) =>
            new VoteSetBits(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(VoteSetBitsMetadata? other)
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
                Flag == metadata.Flag &&
                VoteBits.SequenceEqual(other.VoteBits);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is VoteSetBitsMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            int voteBitsHashCode = VoteBits.Aggregate(
                0,
                (current, voteBit) => (current * 397) ^ voteBit.GetHashCode());

            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                ValidatorPublicKey,
                Flag,
                voteBitsHashCode);
        }
    }
}
