using System;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;

namespace Libplanet.Consensus
{
    public class PreEvaluationBlockMaj23Metadata : IEquatable<PreEvaluationBlockMaj23Metadata>
    {
        private static readonly Binary HeightKey =
            new Binary(new byte[] { 0x48 }); // 'H'

        private static readonly Binary RoundKey =
            new Binary(new byte[] { 0x52 }); // 'R'

        private static readonly Binary ValidatorPublicKeyKey =
            new Binary(new byte[] { 0x50 }); // 'P'

        private static readonly Binary PreEvaluationBlockHashKey =
            new Binary(new byte[] { 0x42 }); // 'B'

        private static readonly Binary FlagKey =
            new Binary(new byte[] { 0x46 }); // 'F'

        private static readonly Codec _codec = new Codec();

        public PreEvaluationBlockMaj23Metadata(
            long height,
            int round,
            HashDigest<SHA256> preEvaluationBlockHash,
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
            PreEvaluationBlockHash = preEvaluationBlockHash;
            ValidatorPublicKey = validatorPublicKey;
            Flag = flag;
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        public PreEvaluationBlockMaj23Metadata(Dictionary encoded)
            : this(
                height: (Integer)encoded[HeightKey],
                round: (Integer)encoded[RoundKey],
                preEvaluationBlockHash: new HashDigest<SHA256>(encoded[PreEvaluationBlockHashKey]),
                validatorPublicKey: new PublicKey(
                    ((Binary)encoded[ValidatorPublicKeyKey]).ByteArray),
                flag: (VoteFlag)(int)(Integer)encoded[FlagKey])
        {
        }
#pragma warning restore SA1118

        public long Height { get; }

        public int Round { get; }

        public HashDigest<SHA256> PreEvaluationBlockHash { get; }

        public PublicKey ValidatorPublicKey { get; }

        public VoteFlag Flag { get; }

        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                Dictionary encoded = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(ValidatorPublicKeyKey, ValidatorPublicKey.Format(compress: true))
                    .Add(PreEvaluationBlockHashKey, PreEvaluationBlockHash.ByteArray)
                    .Add(FlagKey, (int)Flag);

                return encoded;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        public PreEvaluationBlockMaj23 Sign(PrivateKey signer) =>
            new PreEvaluationBlockMaj23(this, signer.Sign(ByteArray).ToImmutableArray());

        /// <inheritdoc/>
        public bool Equals(PreEvaluationBlockMaj23Metadata? other)
        {
            return other is { } metadata &&
                Height == metadata.Height &&
                Round == metadata.Round &&
                PreEvaluationBlockHash.Equals(metadata.PreEvaluationBlockHash) &&
                ValidatorPublicKey.Equals(metadata.ValidatorPublicKey) &&
                Flag == metadata.Flag;
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj) =>
            obj is PreEvaluationBlockMaj23Metadata other && Equals(other);

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
