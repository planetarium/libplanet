using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;

namespace Libplanet.Blocks
{
    public sealed class BlockCommit : IEquatable<BlockCommit>
    {
        private static readonly byte[] HeightKey = { 0x48 };    // 'H'
        private static readonly byte[] RoundKey = { 0x52 };     // 'R'
        private static readonly byte[] BlockHashKey = { 0x68 }; // 'h'
        private static readonly byte[] VotesKey = { 0x56 };

        private static Codec _codec = new Codec();

        /// <summary>
        /// Creates an instance of <see cref="BlockCommit"/> given a set of <see cref="Vote"/>s.
        /// </summary>
        /// <param name="height">The <see cref="Block{T}.Index"/> of the last committed
        /// <see cref="Block{T}"/>.</param>
        /// <param name="round">The round in which a consensus was reached.</param>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the last commited
        /// <see cref="Block{T}"/>.</param>
        /// <param name="votes">The set of <see cref="Vote"/>s as a proof for the commit
        /// of the last <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when either
        /// <paramref name="height"/> or <paramref name="round"/> is negative.</exception>
        /// <exception cref="ArgumentException">Thrown for any of the following reasons:
        /// <list type="bullet">
        /// <item><description>
        ///     Given <paramref name="votes"/> is empty.
        /// </description></item>
        /// <item><description>
        ///     Any one of <see cref="Vote"/> of <paramref name="votes"/> has a different
        ///     <see cref="Vote.Height"/> from <paramref name="height"/>.
        /// </description></item>
        /// <item><description>
        ///     Any one of <see cref="Vote"/> of <paramref name="votes"/> has a different
        ///     <see cref="Vote.Round"/> from <paramref name="round"/>.
        /// </description></item>
        /// <item><description>
        ///     Any one of <see cref="Vote"/> of <paramref name="votes"/> has a different
        ///     <see cref="Vote.BlockHash"/> from <paramref name="blockHash"/>.
        /// </description></item>
        /// <item><description>
        ///     Any one of <see cref="Vote"/> of <paramref name="votes"/> has
        ///     <see cref="Vote.Flag"/> that is neither <see cref="VoteFlag.Null"/>
        ///     nor <see cref="VoteFlag.PreCommit"/>.
        /// </description></item>
        /// <item><description>
        ///     The number of <see cref="Vote"/>s with <see cref="Vote.Flag"/> set as
        ///     <see cref="VoteFlag.PreCommit"/> does not exceed 2/3 of the total number of
        ///     <see cref="Vote"/>s in <paramref name="votes"/>
        /// </description></item>
        /// </list>
        /// </exception>
        public BlockCommit(
            long height,
            int round,
            BlockHash blockHash,
            ImmutableArray<Vote> votes)
        {
            // TODO: Implement separate exception for each case.
            // TODO: Optimize by using flags to allow single iterating through votes.
            if (height < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(height),
                    $"Height must be non-negative: {height}");
            }
            else if (round < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(round),
                    $"Round must be non-negative: {round}");
            }
            else if (votes.IsDefaultOrEmpty)
            {
                throw new ArgumentException("Empty set of votes is not allowed.", nameof(votes));
            }
            else if (votes.Any(vote =>
                vote.Height != height ||
                vote.Round != round ||
                !blockHash.Equals(vote.BlockHash) ||
                (vote.Flag != VoteFlag.Null && vote.Flag != VoteFlag.PreCommit)))
            {
                throw new ArgumentException(
                    $"Every vote must have the same height as {height}, the same round " +
                    $"as {round}, the same hash as {blockHash}, and must have flag value of " +
                    $"either {VoteFlag.Null} or {VoteFlag.PreCommit}.",
                    nameof(votes));
            }

            Height = height;
            Round = round;
            BlockHash = blockHash;
            Votes = votes;
        }

        public BlockCommit(byte[] marshaled)
            : this((Dictionary)_codec.Decode(marshaled))
        {
        }

        [SuppressMessage(
            "StyleCop.CSharp.ReadabilityRules",
            "SA1118:ParameterMustNotSpanMultipleLines",
            Justification =
                "Multiple lines are Vote decoding. Redirect Bencodex value to public " +
                "constructor for checking not allowed values.")]
        internal BlockCommit(Dictionary dictionary)
            : this(
                dictionary.GetValue<Integer>(HeightKey),
                dictionary.GetValue<Integer>(RoundKey),
                new BlockHash(dictionary.GetValue<Binary>(BlockHashKey).ByteArray),
                dictionary.ContainsKey(VotesKey)
                    ? dictionary.GetValue<List>(VotesKey)
                        .Select(vote => new Vote((Binary)vote))
                        .ToImmutableArray()
                    : ImmutableArray<Vote>.Empty)
        {
        }

        public long Height { get; }

        public int Round { get; }

        public BlockHash BlockHash { get; }

        public ImmutableArray<Vote> Votes { get; }

        [JsonIgnore]
        public Dictionary Encoded
        {
            get
            {
                var dict = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(BlockHashKey, BlockHash.ByteArray);

                if (!Votes.IsEmpty)
                {
                    var bencodexVotes = Votes.Select(x => x.ByteArray);
                    dict = dict.Add(VotesKey, new List(bencodexVotes));
                }

                return dict;
            }
        }

        public ImmutableArray<byte> ByteArray => ToByteArray().ToImmutableArray();

        public byte[] ToByteArray() => _codec.Encode(Encoded);

        public bool Equals(BlockCommit? other)
        {
            return other is BlockCommit commit &&
                Height == commit.Height &&
                Round == commit.Round &&
                BlockHash.Equals(commit.BlockHash) &&
                Votes.SequenceEqual(commit.Votes);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            return obj is BlockCommit other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Height, Round, BlockHash, Votes);
        }

        /// <summary>
        /// Gets a <see cref="SHA256"/> digested <see cref="BlockCommit"/> hash value.
        /// </summary>
        /// <returns>Returns a <see cref="SHA256"/> digested <see cref="BlockCommit"/>.</returns>
        public HashDigest<SHA256> ToHash() => HashDigest<SHA256>.DeriveFrom(ToByteArray());

        /// <inheritdoc/>
        [Pure]
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "block_hash", BlockHash.ToString() },
                { "height", Height },
                { "round", Round },
                {
                    "votes",
                    Votes.Select(
                        v => new Dictionary<string, object>
                        {
                            { "validator_public_key", v.ValidatorPublicKey.ToString() },
                            { "flag", v.Flag },
                            { "timestamp", v.Timestamp.ToString(CultureInfo.InvariantCulture) },
                        })
                },
            };
            return JsonSerializer.Serialize(dict);
        }
    }
}
