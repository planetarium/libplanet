using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex;
using Bencodex.Types;
using Libplanet.Consensus;

namespace Libplanet.Blocks
{
    public readonly struct BlockCommit
    {
        private const string HeightKey = "height";
        private const string RoundKey = "round";
        private const string BlockHashKey = "block_hash";
        private const string VotesKey = "votes";

        public BlockCommit(
            long height,
            int round,
            BlockHash hash,
            ImmutableArray<Vote>? votes)
        {
            Height = height;
            Round = round;
            BlockHash = hash;
            if (Height != 0 && votes is null)
            {
                // TODO: Make new exception.
                throw new Exception("Null votes are only allow genesis block.");
            }

            Votes = votes;
        }

        public BlockCommit(byte[] marshaled)
        {
            var codec = new Codec();
            try
            {
                var dict = (Dictionary)codec.Decode(marshaled);
                Height = dict.GetValue<Integer>(HeightKey);
                Round = dict.GetValue<Integer>(RoundKey);
                BlockHash = new BlockHash(dict.GetValue<Binary>(BlockHashKey).ByteArray);
                Votes = dict.ContainsKey(VotesKey)
                    ? ((IEnumerable<IValue>)dict.GetValue<IValue>(VotesKey)).Select(x =>
                        new Vote((Binary)x)).ToImmutableArray()
                    : (ImmutableArray<Vote>?)null;
            }
            catch (Exception)
            {
                throw new ArgumentException(
                    "Cannot unmarshal given bytearray into vote.",
                    nameof(marshaled));
            }
        }

        public BlockCommit(VoteSet set, BlockHash hash)
            : this(set.Height, set.Round, hash, set.Votes)
        {
        }

        public long Height { get; }

        public int Round { get; }

        public BlockHash BlockHash { get; }

        public ImmutableArray<Vote>? Votes { get; }

        public byte[] ByteArray
        {
            get
            {
                var codec = new Codec();
                var dict = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(BlockHashKey, BlockHash.ByteArray);

                if (Votes is { } votes)
                {
                    var bencodexVotes = votes.Select(x => x.ByteArray);
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

            return other.Votes != null && Votes != null && Height == other.Height &&
                   Round == other.Round && BlockHash.Equals(other.BlockHash) &&
                   Votes.Value.SequenceEqual(other.Votes.Value);
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
