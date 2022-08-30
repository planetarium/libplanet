using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    /// <summary>
    /// Represents any vote from validators for consensus.
    /// </summary>
    public readonly struct Vote : IEquatable<Vote>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private const string HeightKey = "height";
        private const string RoundKey = "round";
        private const string BlockHashKey = "block_hash";
        private const string TimestampKey = "timestamp";
        private const string ValidatorKey = "validator";
        private const string FlagKey = "vote_flag";
        private const string SignatureKey = "signature";

        /// <summary>
        /// Create a vote instance.
        /// </summary>
        /// <param name="height">Height of the vote target block.</param>
        /// <param name="round">Round of the vote in given height.</param>
        /// <param name="blockHash"><see cref="BlockHash"/> of the block in vote.</param>
        /// <param name="timestamp">The time at which the voting took place.</param>
        /// <param name="validator">
        /// <see cref="PublicKey"/> of the validator made the vote.
        /// </param>
        /// <param name="flag">
        /// <see cref="VoteFlag"/> for the vote's status.</param>
        /// <param name="signature">Signature of the vote.</param>
        public Vote(
            long height,
            int round,
            BlockHash? blockHash,
            DateTimeOffset timestamp,
            PublicKey validator,
            VoteFlag flag,
            ImmutableArray<byte>? signature)
        {
            Height = height;
            Round = round;
            BlockHash = blockHash;
            Timestamp = timestamp;
            Validator = validator;
            Flag = flag;
            Signature = signature;
        }

        /// <summary>
        /// Create a vote instance.
        /// </summary>
        /// <param name="marshaled">Marshaled value of the vote. <seealso cref="ByteArray"/></param>
        /// <exception cref="ArgumentException">
        /// Thrown when given bytearray cannot be unmarshaled into <see cref="Vote"/>.
        /// </exception>
        public Vote(byte[] marshaled)
        {
            var codec = new Codec();
            try
            {
                var dict = (Dictionary)codec.Decode(marshaled);
                Height = dict.GetValue<Integer>(HeightKey);
                Round = dict.GetValue<Integer>(RoundKey);
                BlockHash = dict.ContainsKey(BlockHashKey)
                    ? new BlockHash(dict.GetValue<Binary>(BlockHashKey).ByteArray)
                    : (BlockHash?)null;
                Timestamp = DateTimeOffset.ParseExact(
                    dict.GetValue<Text>(TimestampKey),
                    TimestampFormat,
                    CultureInfo.InvariantCulture);
                Validator = new PublicKey(dict.GetValue<Binary>(ValidatorKey).ByteArray);
                Flag = (VoteFlag)(long)dict.GetValue<Integer>(FlagKey);
                Signature = dict.ContainsKey(SignatureKey)
                    ? dict.GetValue<Binary>(SignatureKey)
                    : (ImmutableArray<byte>?)null;
            }
            catch (Exception)
            {
                throw new ArgumentException(
                    "Cannot unmarshal given bytearray into vote.",
                    nameof(marshaled));
            }
        }

        /// <summary>
        /// Height of the vote target block.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// Round of the vote in given height.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// <see cref="BlockHash"/> of the block in vote. If null, vote nil.
        /// </summary>
        public BlockHash? BlockHash { get; }

        /// <summary>
        /// The time at which the voting took place.
        /// </summary>
        public DateTimeOffset Timestamp { get; }

        /// <summary>
        /// <see cref="PublicKey"/> of the validator made the vote.
        /// </summary>
        public PublicKey Validator { get; }

        /// <summary>
        /// <see cref="VoteFlag"/> for the vote's status.
        /// </summary>
        public VoteFlag Flag { get; }

        /// <summary>
        /// Signature of the vote.
        /// </summary>
        public ImmutableArray<byte>? Signature { get; }

        /// <summary>
        /// Marshaled vote data.
        /// </summary>
        public byte[] ByteArray
        {
            get
            {
                var codec = new Codec();
                var dict = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorKey, Validator.Format(compress: true))
                    .Add(FlagKey, (long)Flag);

                if (BlockHash is { } blockHash)
                {
                    dict = dict.Add(BlockHashKey, blockHash.ByteArray);
                }

                if (Signature is { } signature)
                {
                    dict = dict.Add(SignatureKey, signature);
                }

                return codec.Encode(dict);
            }
        }

        public Vote RemoveSignature =>
            new Vote(Height, Round, BlockHash, Timestamp, Validator, Flag, null);

        /// <summary>
        /// Sign a <see cref="Vote"/> using the given private key.
        /// </summary>
        /// <param name="signer">A private key to sign the claim.</param>
        /// <returns>A signed vote claim.</returns>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="signer"/> is
        /// <c>null</c>.</exception>
        public Vote Sign(PrivateKey signer)
        {
            Vote voteWithoutSign = RemoveSignature;
            byte[] sign = signer.Sign(voteWithoutSign.ByteArray);
            return new Vote(
                Height,
                Round,
                BlockHash,
                Timestamp,
                Validator,
                Flag,
                sign.ToImmutableArray());
        }

        /// <summary>
        /// Verifies whether the claim is certainly signed by the <see cref="Validator"/>.
        /// </summary>
        /// <param name="publicKey">A public key of the <see cref="Validator"/>.</param>
        /// <returns><c>true</c> if and only if the given <paramref name="publicKey"/> is
        /// <see cref="Validator"/>'s and the <see cref="Signature"/> is certainly signed by
        /// the <see cref="Validator"/>.</returns>
        [Pure]
        public bool Verify(PublicKey publicKey) =>
            Validator.Equals(publicKey) &&
            publicKey.Verify(RemoveSignature.ByteArray.ToImmutableArray(), Signature!);

        public bool Equals(Vote other)
        {
            return Height == other.Height &&
                   Round == other.Round &&
                   BlockHash.Equals(other.BlockHash) &&
                   Timestamp
                       .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                           other.Timestamp.ToString(
                               TimestampFormat,
                               CultureInfo.InvariantCulture)) &&
                   Validator.Equals(other.Validator) &&
                   Flag == other.Flag &&
                   Nullable.Equals(Signature, other.Signature);
        }

        /// <inheritdoc />
        public override bool Equals(object? obj)
        {
            return obj is Vote other && Equals(other);
        }

        /// <inheritdoc />
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                Validator,
                Signature);
        }
    }
}
