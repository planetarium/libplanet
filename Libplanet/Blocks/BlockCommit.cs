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

        public BlockCommit(
            long height,
            int round,
            BlockHash hash,
            ImmutableArray<Vote>? votes)
        {
            if (height < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(height),
                    $"Height must be non-negative: {height}");
            }

            Height = height;

            if (round < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(round),
                    $"Round must be non-negative: {round}");
            }

            Round = round;

            if (hash.Equals(default))
            {
                throw new ArgumentNullException(
                    nameof(hash),
                    "Block hash for BlockCommit must not be null.");
            }

            BlockHash = hash;
            if ((Height != 0 && votes is null) ||
                (Height != 0 && votes != null && votes.Value.IsDefaultOrEmpty))
            {
                // TODO: Make new exception.
                throw new Exception("Null votes are only allow genesis block.");
            }

            Votes = votes ?? ImmutableArray<Vote>.Empty;

            // Blocking uninitialized ImmutableArray case
            if (Votes.IsDefault)
            {
                Votes = ImmutableArray<Vote>.Empty;
            }
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
