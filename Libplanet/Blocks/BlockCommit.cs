using System;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;

namespace Libplanet.Blocks
{
    public readonly struct BlockCommit
    {
        internal const string HeightKey = "height";
        internal const string RoundKey = "round";
        internal const string BlockHashKey = "block_hash";
        private const string VotesKey = "votes";

        private static Codec _codec = new Codec();

        /// <summary>
        /// Creates an instance of <see cref="BlockCommit"/> given a set of <see cref="Vote"/>s.
        /// </summary>
        /// <param name="height">The <see cref="Block{T}.Index"/> of the last committed
        /// <see cref="Block{T}"/>.</param>
        /// <param name="round">The round in which a consensus was reached.</param>
        /// <param name="hash">The <see cref="Block{T}.Hash"/> of the last commited
        /// <see cref="Block{T}"/>.</param>
        /// <param name="votes">The set of <see cref="Vote"/>s as a proof for the commit
        /// of the last <see cref="Block{T}"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when either
        /// <paramref name="height"/> or <paramref name="round"/> is negative.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="votes"/> is
        /// empty.</exception>
        public BlockCommit(
            long height,
            int round,
            BlockHash hash,
            ImmutableArray<Vote> votes)
        {
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

            Height = height;
            Round = round;
            BlockHash = hash;
            Votes = votes;
        }

        public BlockCommit(VoteSet set, BlockHash hash)
            : this(set.Height, set.Round, hash, set.Votes)
        {
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

        public byte[] ByteArray
        {
            get
            {
                var codec = new Codec();
                var dict = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(BlockHashKey, BlockHash.ByteArray);

                if (!Votes.IsEmpty)
                {
                    var bencodexVotes = Votes.Select(x => x.ByteArray);
                    dict = dict.Add(VotesKey, new List(bencodexVotes));
                }

                return codec.Encode(dict);
            }
        }

        public bool Equals(BlockCommit other)
        {
            if (Height == 0)
            {
                return Height == other.Height
                       && Round == other.Round
                       && BlockHash.Equals(other.BlockHash);
            }

            return Height == other.Height &&
                   Round == other.Round &&
                   BlockHash.Equals(other.BlockHash) &&
                   Votes.SequenceEqual(other.Votes);
        }

        /// <inheritdoc />
        public override bool Equals(object? obj)
        {
            return obj is BlockCommit other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Height, Round, BlockHash, Votes);
        }
    }
}
