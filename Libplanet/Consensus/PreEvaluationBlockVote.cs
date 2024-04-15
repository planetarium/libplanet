using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Misc;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Consensus
{
    /// <summary>
    /// Represents a <see cref="PreEvaluationBlockVote"/> from a validator for consensus.
    /// </summary>
    public class PreEvaluationBlockVote
        : IPreEvaluationBlockVoteMetadata, IEquatable<PreEvaluationBlockVote>, IBencodable
    {
        private static readonly Binary SignatureKey = new Binary(new byte[] { 0x53 }); // 'S'

        private static readonly Codec _codec = new Codec();
        private readonly PreEvaluationBlockVoteMetadata _metadata;

        public PreEvaluationBlockVote(
            PreEvaluationBlockVoteMetadata metadata,
            ImmutableArray<byte> signature)
        {
            if (signature.IsDefault)
            {
                throw new ArgumentException(
                    $"Given {nameof(signature)} should not be set to default; use " +
                    $"an empty array to represent a lack of signature for a " +
                    $"{nameof(PreEvaluationBlockVote)}.",
                    nameof(signature));
            }
            else if (!signature.IsEmpty)
            {
                if (metadata.Flag != VoteFlag.PreVote && metadata.Flag != VoteFlag.PreCommit)
                {
                    throw new ArgumentException(
                        $"If {nameof(signature)} is not empty, {metadata.Flag} should be either " +
                        $"{VoteFlag.PreVote} or {VoteFlag.PreCommit}",
                        nameof(signature));
                }
                else if (!metadata.ValidatorPublicKey.Verify(
                    _codec.Encode(metadata.Bencoded), signature))
                {
                    throw new ArgumentException(
                        $"Given {nameof(signature)} is invalid.",
                        nameof(signature));
                }
            }
            else if (signature.IsEmpty &&
                (metadata.Flag != VoteFlag.Null && metadata.Flag != VoteFlag.Unknown))
            {
                throw new ArgumentException(
                    $"If {nameof(signature)} is empty, {metadata.Flag} should be either " +
                    $"{VoteFlag.Null} or {VoteFlag.Unknown}",
                    nameof(signature));
            }

            _metadata = metadata;
            Signature = signature;
        }

        public PreEvaluationBlockVote(Bencodex.Types.IValue bencoded)
            : this(bencoded is Bencodex.Types.Dictionary dict
                ? dict
                : throw new ArgumentException(
                    $"Given {nameof(bencoded)} must be of type " +
                    $"{typeof(Bencodex.Types.Dictionary)}: {bencoded.GetType()}",
                    nameof(bencoded)))
        {
        }

#pragma warning disable SA1118 // The parameter spans multiple lines
        private PreEvaluationBlockVote(Bencodex.Types.Dictionary encoded)
            : this(
                new PreEvaluationBlockVoteMetadata((IValue)encoded),
                encoded.ContainsKey(SignatureKey)
                    ? ((Binary)encoded[SignatureKey]).ByteArray
                    : ImmutableArray<byte>.Empty)
        {
        }
#pragma warning restore SA1118

        /// <inheritdoc/>
        public long Height => _metadata.Height;

        /// <inheritdoc/>
        public int Round => _metadata.Round;

        /// <inheritdoc/>
        public HashDigest<SHA256> PreEvaluationBlockHash => _metadata.PreEvaluationBlockHash;

        /// <inheritdoc/>
        public PublicKey ValidatorPublicKey => _metadata.ValidatorPublicKey;

        /// <inheritdoc/>
        public VoteFlag Flag => _metadata.Flag;

        /// <summary>
        /// The signature for the <see cref="PreEvaluationBlockVote"/>.  Lack of signature for a
        /// <see cref="PreEvaluationBlockVote"/>
        /// is represented by an empty array <em>not</em> <see langword="default"/>.
        /// </summary>
        public ImmutableArray<byte> Signature { get; }

        /// <inheritdoc/>
        [JsonIgnore]
        public Bencodex.Types.IValue Bencoded =>
            !Signature.IsEmpty
                ? ((Bencodex.Types.Dictionary)_metadata.Bencoded).Add(SignatureKey, Signature)
                : _metadata.Bencoded;

        /// <summary>
        /// Verifies whether the <see cref="PreEvaluationBlockVote"/>'s payload
        /// is properly signed by <see cref="Validator"/>.
        /// </summary>
        /// <returns><see langword="true"/> if the <see cref="Signature"/> is not empty
        /// and is a valid signature signed by <see cref="Validator"/>,
        /// <see langword="false"/> otherwise.</returns>
        [Pure]
        public bool Verify() =>
            !Signature.IsEmpty &&
            ValidatorPublicKey.Verify(
                _codec.Encode(_metadata.Bencoded).ToImmutableArray(), Signature);

        /// <inheritdoc/>
        [Pure]
        public bool Equals(PreEvaluationBlockVote? other)
        {
            return other is PreEvaluationBlockVote vote &&
                _metadata.Equals(vote._metadata) &&
                Signature.SequenceEqual(vote.Signature);
        }

        /// <inheritdoc/>
        [Pure]
        public override bool Equals(object? obj)
        {
            return obj is PreEvaluationBlockVote other && Equals(other);
        }

        /// <inheritdoc/>
        [Pure]
        public override int GetHashCode()
        {
            return HashCode.Combine(
                _metadata.GetHashCode(),
                ByteUtil.CalculateHashCode(Signature.ToArray()));
        }

        /// <inheritdoc/>
        [Pure]
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "validator_public_key", ValidatorPublicKey.ToString() },
                { "vote_flag", Flag.ToString() },
                { "pre_evaluation_block_hash", PreEvaluationBlockHash.ByteArray.Hex() ?? "null" },
                { "height", Height },
                { "round", Round },
            };
            return JsonSerializer.Serialize(dict);
        }
    }
}
