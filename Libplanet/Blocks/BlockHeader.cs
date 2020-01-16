using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct BlockHeader
    {
        public static readonly byte[] IndexKey = { 0x69 }; // 'i'

        public static readonly byte[] TimestampKey = { 0x74 }; // 't'

        public static readonly byte[] DifficultyKey = { 0x64 }; // 'd'

        public static readonly byte[] NonceKey = { 0x6e }; // 'n'

        public static readonly byte[] MinerKey = { 0x6d }; // 'm'

        public static readonly byte[] PreviousHashKey = { 0x70 }; // 'p'

        public static readonly byte[] TxHashKey = { 0x78 }; // 'x'

        public static readonly byte[] HashKey = { 0x68 }; // 'h'

        public BlockHeader(
            long index,
            string timestamp,
            ImmutableArray<byte> nonce,
            ImmutableArray<byte> miner,
            long difficulty,
            ImmutableArray<byte> previousHash,
            ImmutableArray<byte> txHash,
            ImmutableArray<byte> hash)
        {
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            PreviousHash = previousHash;
            TxHash = txHash;
            Hash = hash;
        }

        public BlockHeader(Bencodex.Types.Dictionary dict)
        {
            Index = dict.GetValue<Integer>(IndexKey);
            Timestamp = dict.GetValue<Text>(TimestampKey);
            Difficulty = dict.GetValue<Integer>(DifficultyKey);
            Nonce = dict.GetValue<Binary>(NonceKey).ToImmutableArray();

            Miner = dict.ContainsKey((Binary)MinerKey)
                ? dict.GetValue<Binary>(MinerKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            PreviousHash = dict.ContainsKey((Binary)PreviousHashKey)
                ? dict.GetValue<Binary>(PreviousHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            TxHash = dict.ContainsKey((Binary)TxHashKey)
                ? dict.GetValue<Binary>(TxHashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            Hash = dict.ContainsKey((Binary)HashKey)
                ? dict.GetValue<Binary>(HashKey).ToImmutableArray()
                : ImmutableArray<byte>.Empty;
        }

        public long Index { get; }

        public string Timestamp { get; }

        public ImmutableArray<byte> Nonce { get; }

        public ImmutableArray<byte> Miner { get; }

        public long Difficulty { get; }

        public ImmutableArray<byte> PreviousHash { get; }

        public ImmutableArray<byte> TxHash { get; }

        public ImmutableArray<byte> Hash { get; }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(IndexKey, Index)
                .Add(TimestampKey, Timestamp)
                .Add(DifficultyKey, Difficulty)
                .Add(NonceKey, Nonce.ToArray())
                .Add(HashKey, Hash.ToArray());

            if (Miner.Any())
            {
                dict = dict.Add(MinerKey, Miner.ToArray());
            }

            if (PreviousHash.Any())
            {
                dict = dict.Add(PreviousHashKey, PreviousHash.ToArray());
            }

            if (TxHash.Any())
            {
                dict = dict.Add(TxHashKey, TxHash.ToArray());
            }

            return dict;
        }
    }
}
