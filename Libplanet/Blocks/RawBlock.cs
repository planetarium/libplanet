using System.Collections;
using System.Runtime.Serialization;

namespace Libplanet.Blocks
{
    public struct RawBlock : ISerializable
    {
        public RawBlock(
            int index,
            string timestamp,
            byte[] nonce,
            byte[] rewardBenificiary,
            int difficulty,
            byte[] previousHash,
            IEnumerable transactions)
            : this(index, timestamp, nonce, rewardBenificiary, difficulty, previousHash, transactions, null)
        {
        }

        public RawBlock(
            int index,
            string timestamp,
            byte[] nonce,
            byte[] rewardBenificiary,
            int difficulty,
            byte[] previousHash,
            IEnumerable transactions,
            byte[] hash)
        {
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            RewardBeneficiary = rewardBenificiary;
            Difficulty = difficulty;
            PreviousHash = previousHash;
            Transactions = transactions;
            Hash = hash;
        }

        public int Index { get; }

        public string Timestamp { get; }

        public byte[] Nonce { get; }

        public byte[] RewardBeneficiary { get; }

        public int Difficulty { get; }

        public byte[] PreviousHash { get; }

        public byte[] Hash { get; }

        public IEnumerable Transactions { get; }

        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue("index", Index);
            info.AddValue("timestamp", Timestamp);
            info.AddValue("reward_beneficiary", RewardBeneficiary);
            info.AddValue("difficulty", Difficulty);
            info.AddValue("transactions", Transactions);
            info.AddValue("nonce", Nonce);

            if (PreviousHash != null)
            {
                info.AddValue("previous_hash", PreviousHash);
            }

            if (Hash != null)
            {
                info.AddValue("hash", Hash);
            }
        }

        public RawBlock AddHash(byte[] hash)
        {
            return new RawBlock(
                index: Index,
                timestamp: Timestamp,
                rewardBenificiary: RewardBeneficiary,
                difficulty: Difficulty,
                nonce: Nonce,
                previousHash: PreviousHash,
                transactions: Transactions,
                hash: hash
            );
        }
    }
}
