using System.Collections.Generic;
using System.Linq;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct RawBlock
    {
        public const string IndexKey = "index";

        public const string TimestampKey = "timestamp";

        public const string DifficultyKey = "difficulty";

        public const string TransactionsKey = "transactions";

        public const string NonceKey = "nonce";

        public const string PreviousHashKey = "previous_hash";

        public const string TransactionFingerprintKey = "transaction_fingerprint";

        public const string HashKey = "hash";

        public const string RewardBeneficiaryKey = "reward_beneficiary";

        public RawBlock(
            long index,
            string timestamp,
            byte[] nonce,
            byte[] miner,
            long difficulty,
            byte[] previousHash,
            byte[] txHash,
            IEnumerable<byte[]> transactions)
            : this(
                index,
                timestamp,
                nonce,
                miner,
                difficulty,
                previousHash,
                txHash,
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
            byte[] txHash,
            IEnumerable<byte[]> transactions,
            byte[] hash)
        {
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            Miner = miner;
            Difficulty = difficulty;
            PreviousHash = previousHash;
            TxHash = txHash;
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

            Miner = dict.ContainsKey((Text)RewardBeneficiaryKey)
                ? dict.GetValue<Binary>(RewardBeneficiaryKey)
                : null;

            PreviousHash = dict.ContainsKey((Text)PreviousHashKey)
                ? (byte[])dict.GetValue<Binary>(PreviousHashKey)
                : null;

            TxHash = dict.ContainsKey((Text)TransactionFingerprintKey)
                ? (byte[])dict.GetValue<Binary>(TransactionFingerprintKey)
                : null;

            Hash = dict.ContainsKey((Text)HashKey)
                ? (byte[])dict.GetValue<Binary>(HashKey)
                : null;
        }

        public long Index { get; }

        public string Timestamp { get; }

        public byte[] Nonce { get; }

        public byte[] Miner { get; }

        public long Difficulty { get; }

        public byte[] PreviousHash { get; }

        public byte[] TxHash { get; }

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
                txHash: TxHash,
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

            if (!(TxHash is null))
            {
                dict = dict.Add(TransactionFingerprintKey, TxHash.ToArray());
            }

            if (!(Hash is null))
            {
                dict = dict.Add(HashKey, Hash.ToArray());
            }

            return dict;
        }
    }
}
