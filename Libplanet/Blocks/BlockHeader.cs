using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct BlockHeader
    {
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
            Index = dict.GetValue<Integer>("index");
            Timestamp = dict.GetValue<Text>("timestamp");
            Difficulty = dict.GetValue<Integer>("difficulty");
            Nonce = dict.GetValue<Binary>("nonce").ToImmutableArray();

            Miner = dict.ContainsKey((Text)"reward_beneficiary")
                ? dict.GetValue<Binary>("reward_beneficiary").ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            PreviousHash = dict.ContainsKey((Text)"previous_hash")
                ? dict.GetValue<Binary>("previous_hash").ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            TxHash = dict.ContainsKey((Text)"transaction_fingerprint")
                ? dict.GetValue<Binary>("transaction_fingerprint").ToImmutableArray()
                : ImmutableArray<byte>.Empty;

            Hash = dict.ContainsKey((Text)"hash")
                ? dict.GetValue<Binary>("hash").ToImmutableArray()
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
                .Add("index", Index)
                .Add("timestamp", Timestamp)
                .Add("difficulty", Difficulty)
                .Add("nonce", Nonce.ToArray())
                .Add("hash", Hash.ToArray());

            if (Miner.Any())
            {
                dict = dict.Add("reward_beneficiary", Miner.ToArray());
            }

            if (PreviousHash.Any())
            {
                dict = dict.Add("previous_hash", PreviousHash.ToArray());
            }

            if (TxHash.Any())
            {
                dict = dict.Add("transaction_fingerprint", TxHash.ToArray());
            }

            return dict;
        }
    }
}
