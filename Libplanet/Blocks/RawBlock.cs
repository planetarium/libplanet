using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct RawBlock
    {
        public static readonly byte[] IndexKey =
            Encoding.ASCII.GetBytes("index");

        public static readonly byte[] TimestampKey =
            Encoding.ASCII.GetBytes("timestamp");

        public static readonly byte[] DifficultyKey =
            Encoding.ASCII.GetBytes("difficulty");

        public static readonly byte[] TransactionsKey =
            Encoding.ASCII.GetBytes("transactions");

        public static readonly byte[] NonceKey =
            Encoding.ASCII.GetBytes("nonce");

        public static readonly byte[] PreviousHashKey =
            Encoding.ASCII.GetBytes("previous_hash");

        public static readonly byte[] HashKey =
            Encoding.ASCII.GetBytes("hash");

        public static readonly byte[] RewardBeneficiaryKey =
            Encoding.ASCII.GetBytes("reward_beneficiary");

        public RawBlock(
            long index,
            string timestamp,
            byte[] nonce,
            byte[] miner,
            long difficulty,
            byte[] previousHash,
            IEnumerable<byte[]> transactions)
            : this(
                index,
                timestamp,
                nonce,
                miner,
                difficulty,
                previousHash,
                transactions,
                null
            )
        {
        }

        public RawBlock(
            long index,
            string timestamp,
            byte[] nonce,
            byte[] miner,
            long difficulty,
            byte[] previousHash,
            IEnumerable<byte[]> transactions,
            byte[] hash)
        {
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            PreviousHash = previousHash;
            Transactions = transactions;
            Hash = hash;
        }

        public RawBlock(Bencodex.Types.Dictionary dict)
        {
            Index = dict.GetValue<Integer>(IndexKey);
            Timestamp = dict.GetValue<Text>(TimestampKey);
            Difficulty = dict.GetValue<Integer>(DifficultyKey);
            Transactions = dict.GetValue<Bencodex.Types.List>(TransactionsKey)
                .Select(tx => (byte[])(Binary)tx);
            Nonce = dict.GetValue<Binary>(NonceKey);

            Miner = dict.ContainsKey((Binary)RewardBeneficiaryKey)
                ? dict.GetValue<Binary>(RewardBeneficiaryKey)
                : null;

            PreviousHash = dict.ContainsKey((Binary)PreviousHashKey)
                ? (byte[])dict.GetValue<Binary>(PreviousHashKey)
                : null;

            Hash = dict.ContainsKey((Binary)HashKey)
                ? (byte[])dict.GetValue<Binary>(HashKey)
                : null;
        }

        public long Index { get; }

        public string Timestamp { get; }

        public byte[] Nonce { get; }

        public byte[] Miner { get; }

        public long Difficulty { get; }

        public byte[] PreviousHash { get; }

        public byte[] Hash { get; }

        public IEnumerable<byte[]> Transactions { get; }

        public RawBlock AddHash(byte[] hash)
        {
            return new RawBlock(
                index: Index,
                timestamp: Timestamp,
                miner: Miner,
                difficulty: Difficulty,
                nonce: Nonce,
                previousHash: PreviousHash,
                transactions: Transactions,
                hash: hash
            );
        }

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var transactions = new Bencodex.Types.List(
                Transactions.Select(tx => (IValue)(Binary)tx));
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(IndexKey, Index)
                .Add(TimestampKey, Timestamp)
                .Add(DifficultyKey, Difficulty)
                .Add(TransactionsKey, (IValue)transactions)
                .Add(NonceKey, Nonce);

            if (!(Miner is null))
            {
                dict = dict.Add(RewardBeneficiaryKey, Miner);
            }

            if (!(PreviousHash is null))
            {
                dict = dict.Add(PreviousHashKey, PreviousHash);
            }

            if (!(Hash is null))
            {
                dict = dict.Add(HashKey, Hash.ToArray());
            }

            return dict;
        }
    }
}
