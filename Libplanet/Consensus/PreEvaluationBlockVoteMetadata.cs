using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    public class PreEvaluationBlockVoteMetadata
        : IPreEvaluationBlockVoteMetadata, IEquatable<PreEvaluationBlockVoteMetadata>, IBencodable
    {
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary PreEvaluationBlockHashKey =
            new Binary(new byte[] { 0x68 }); // 'h'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Binary FlagKey =
            new Binary(new byte[] { 0x46 }); // 'F'

        private static readonly Codec _codec = new Codec();

        public PreEvaluationBlockVoteMetadata(
            long height,
            int round,
            HashDigest<SHA256> preEvaluationBlockHash,
            PublicKey validatorPublicKey,
            VoteFlag flag)
        {
            if (height < 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(height)} cannot be negative: {height}");
            }

            if (round < 0)
            {
                throw new ArgumentException(
                    $"Given {nameof(round)} cannot be negative: {round}");
            }

            if (
                preEvaluationBlockHash.Equals(default)
                && (flag == VoteFlag.Null || flag == VoteFlag.Unknown))
            {
                throw new ArgumentException(
                    $"Given {nameof(preEvaluationBlockHash)} cannot be default if {nameof(flag)} " +
                    $"is {VoteFlag.Null} or {VoteFlag.Unknown}");
            }

            Height = height;
            Round = round;
            PreEvaluationBlockHash = preEvaluationBlockHash;
            ValidatorPublicKey = validatorPublicKey;
            Flag = flag;
        }

        public PreEvaluationBlockVoteMetadata(Bencodex.Types.IValue bencoded)
            : this(bencoded is Bencodex.Types.Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Bencodex.Types.Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        private PreEvaluationBlockVoteMetadata(Bencodex.Types.Dictionary bencoded)
            : this(
                height: (Integer)bencoded[HeightKey],
                round: (Integer)bencoded[RoundKey],
                preEvaluationBlockHash: new HashDigest<SHA256>(bencoded[PreEvaluationBlockHashKey]),
                validatorPublicKey: new PublicKey(
                    ((Binary)bencoded[ValidatorPublicKeyKey]).ByteArray),
                flag: (VoteFlag)(int)(Integer)bencoded[FlagKey])
        {
        }
#pragma warning restore

        /// <inheritdoc/>
        public long Height { get; }

        /// <inheritdoc/>
        public int Round { get; }

        /// <inheritdoc/>
        public HashDigest<SHA256> PreEvaluationBlockHash { get; }

        /// <inheritdoc/>
        public PublicKey ValidatorPublicKey { get; }

        /// <inheritdoc/>
        public VoteFlag Flag { get; }

        /// <inheritdoc/>
        [JsonIgnore]
        public IValue Bencoded
        {
            get
            {
                Dictionary encoded = Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true));

                if (PreEvaluationBlockHash is { } hash)
                {
                    encoded = encoded.Add(PreEvaluationBlockHashKey, hash.ByteArray);
                }

                return encoded;
            }
        }

        /// <summary>
        /// Signs a <see cref="PreEvaluationBlockVoteMetadata"/> to create a
        /// <see cref="PreEvaluationBlockVote"/>
        /// using given <paramref name="signer"/>.
        /// </summary>
        /// <param name="signer">The <see cref="PrivateKey"/> to sign the data with.  This can be
        /// <see langword="null"/> to create an unsigned <see cref="PreEvaluationBlockVote"/>
        /// instance.</param>
        /// <returns>A <see cref="PreEvaluationBlockVote"/> with a (possibly <see langword="null"/>)
        /// signature.
        /// </returns>
        public PreEvaluationBlockVote Sign(PrivateKey? signer)
        {
            return signer is PrivateKey key
                ? new PreEvaluationBlockVote(
                    this, key.Sign(_codec.Encode(Bencoded)).ToImmutableArray())
                : new PreEvaluationBlockVote(this, ImmutableArray<byte>.Empty);
        }

        /// <inheritdoc/>
        public bool Equals(PreEvaluationBlockVoteMetadata? other)
        {
            return other is PreEvaluationBlockVoteMetadata metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                PreEvaluationBlockHash.Equals(metadata.PreEvaluationBlockHash) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Flag == metadata.Flag;
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is PreEvaluationBlockVoteMetadata other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                PreEvaluationBlockHash,
                ValidatorPublicKey,
                Flag);
        }
    }
}
