using System;
using System.Collections.Immutable;
using System.Globalization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents a vote metadata from a validator for consensus.
    /// </summary>
    public class VoteMetadata : IVoteMetadata, IEquatable<VoteMetadata>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private const string HeightKey = "height";
        private const string RoundKey = "round";
        private const string BlockHashKey = "block_hash";
        private const string TimestampKey = "timestamp";
        private const string ValidatorKey = "validator";
        private const string FlagKey = "vote_flag";

        private static Codec _codec = new Codec();

        /// <summary>
        /// Creates a <see cref="VoteMetadata"/> instance.
        /// </summary>
        /// <param name="height">Height of the vote target block.</param>
        /// <param name="round">Round of the vote in given height.</param>
        /// <param name="blockHash"><see cref="BlockHash"/> of the block in vote.</param>
        /// <param name="timestamp">The time at which the voting took place.</param>
        /// <param name="validator">
        /// <see cref="PublicKey"/> of the validator made the vote.
        /// </param>
        /// <param name="flag"><see cref="VoteFlag"/> for the vote's status.</param>
        public VoteMetadata(
            long height,
            int round,
            BlockHash? blockHash,
            DateTimeOffset timestamp,
            PublicKey validator,
            VoteFlag flag)
        {
            // TODO: Check arguments.
            Height = height;
            Round = round;
            BlockHash = blockHash;
            Timestamp = timestamp;
            Validator = validator;
            Flag = flag;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public VoteMetadata(Dictionary encoded)
            : this(
                height: encoded.GetValue<Integer>(HeightKey),
                round: encoded.GetValue<Integer>(RoundKey),
                blockHash: encoded.ContainsKey(BlockHashKey)
                    ? new BlockHash(encoded.GetValue<Binary>(BlockHashKey).ByteArray)
                    : (BlockHash?)null,
                timestamp: DateTimeOffset.ParseExact(
                    encoded.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture),
                validator: new PublicKey(encoded.GetValue<Binary>(ValidatorKey).ByteArray),
                flag: (VoteFlag)(long)encoded.GetValue<Integer>(FlagKey))
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc/>
        public long Height { get; }

        /// <inheritdoc/>
        public int Round { get; }

        /// <inheritdoc/>
        public BlockHash? BlockHash { get; }

        /// <inheritdoc/>
        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc/>
        public PublicKey Validator { get; }

        /// <inheritdoc/>
        public VoteFlag Flag { get; }

        /// <summary>
        /// Marshaled <see cref="VoteMetadata"/> data.  This is used as a payload for
        /// signing.
        /// </summary>
        public byte[] ByteArray => _codec.Encode(Encoded());

        /// <summary>
        /// Signs a <see cref="VoteMetadata"/> to create a <see cref="Vote"/>
        /// using given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">The <see cref="PrivateKey"/> to sign the data with.  This can be
        /// <see langword="null"/> to create an unsigned <see cref="Vote"/> instance.</param>
        /// <returns>A <see cref="Vote"/> with a (possibly <see langword="null"/>) signature.
        /// </returns>
        public Vote Sign(PrivateKey? signer)
        {
            return signer is PrivateKey key
                ? new Vote(this, key.Sign(ByteArray).ToImmutableArray())
                : new Vote(this, ImmutableArray<byte>.Empty);
        }

        public Dictionary Encoded()
        {
            Dictionary encoded = Bencodex.Types.Dictionary.Empty
                .Add(HeightKey, Height)
                .Add(RoundKey, Round)
                .Add(
                    TimestampKey,
                    Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add(ValidatorKey, Validator.Format(compress: true))
                .Add(FlagKey, (long)Flag);

            if (BlockHash is { } blockHash)
            {
                encoded = encoded.Add(BlockHashKey, blockHash.ByteArray);
            }

            return encoded;
        }

        public bool Equals(VoteMetadata? other)
        {
            return other is VoteMetadata metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                BlockHash.Equals(metadata.BlockHash) &&
                Timestamp
                    .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                        metadata.Timestamp.ToString(
                            TimestampFormat,
                            CultureInfo.InvariantCulture)) &&
                Validator.Equals(metadata.Validator) &&
                Flag == metadata.Flag;
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is VoteMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                Validator);
        }
    }
}
