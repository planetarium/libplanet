using Bencodex;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal struct BlockHeader
    {
        public BlockHeader(
            long index,
            string timestamp,
            byte[] nonce,
            byte[] miner,
            long difficulty,
            byte[] previousHash,
            byte[] txHash,
            byte[] hash)
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
            Nonce = dict.GetValue<Binary>("nonce");

            Miner = dict.ContainsKey((Text)"reward_beneficiary")
                ? (byte[])dict.GetValue<Binary>("reward_beneficiary")
                : null;

            PreviousHash = dict.ContainsKey((Text)"previous_hash")
                ? (byte[])dict.GetValue<Binary>("previous_hash")
                : null;

            TxHash = dict.ContainsKey((Text)"transaction_fingerprint")
                ? (byte[])dict.GetValue<Binary>("transaction_fingerprint")
                : null;

            Hash = dict.ContainsKey((Text)"hash")
                ? (byte[])dict.GetValue<Binary>("hash")
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

        public Bencodex.Types.Dictionary ToBencodex()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("index", Index)
                .Add("timestamp", Timestamp)
                .Add("difficulty", Difficulty)
                .Add("nonce", Nonce);

            if (!(Miner is null))
            {
                dict = dict.Add("reward_beneficiary", Miner);
            }

            if (!(PreviousHash is null))
            {
                dict = dict.Add("previous_hash", PreviousHash);
            }

            if (!(TxHash is null))
            {
                dict = dict.Add("transaction_fingerprint", TxHash);
            }

            if (!(Hash is null))
            {
                dict = dict.Add("hash", Hash);
            }

            return dict;
        }
    }
}
