using System.Collections;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Blocks
{
    internal struct RawBlock : ISerializable
    {
        public RawBlock(
            long index,
            string timestamp,
            byte[] nonce,
            byte[] rewardBeneficiary,
            int difficulty,
            byte[] previousHash,
            IEnumerable transactions)
            : this(
                index,
                timestamp,
                nonce,
                rewardBeneficiary,
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
            byte[] rewardBeneficiary,
            int difficulty,
            byte[] previousHash,
            IEnumerable transactions,
            byte[] hash)
        {
            Index = index;
            Timestamp = timestamp;
            Nonce = nonce;
            RewardBeneficiary = rewardBeneficiary;
            Difficulty = difficulty;
            PreviousHash = previousHash;
            Transactions = transactions;
            Hash = hash;
        }

        internal RawBlock(SerializationInfo info, StreamingContext context)
            : this(
                index: info.GetInt64("index"),
                timestamp: info.GetString("timestamp"),
                nonce: info.GetValue<byte[]>("nonce"),
                rewardBeneficiary: info.GetValue<byte[]>("reward_beneficiary"),
                difficulty: info.GetInt32("difficulty"),
                previousHash: info.GetValueOrDefault<byte[]>(
                    "previous_hash",
                    null
                ),
                transactions: info.GetValue<IEnumerable>("transactions"),
                hash: info.GetValue<byte[]>("hash")
            )
        {
        }

        public long Index { get; }

        public string Timestamp { get; }

        public byte[] Nonce { get; }

        public byte[] RewardBeneficiary { get; }

        public int Difficulty { get; }

        public byte[] PreviousHash { get; }

        public byte[] Hash { get; }

        public IEnumerable Transactions { get; }

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
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
                rewardBeneficiary: RewardBeneficiary,
                difficulty: Difficulty,
                nonce: Nonce,
                previousHash: PreviousHash,
                transactions: Transactions,
                hash: hash
            );
        }
    }
}
