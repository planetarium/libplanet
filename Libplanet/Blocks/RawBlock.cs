using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Bencodex;
using Bencodex.Types;

namespace Libplanet.Blocks
{
    internal readonly struct RawBlock
    {
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

        public RawBlock(byte[] bytes)
        {
            var codec = new Codec();
            var value = codec.Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException("Bencodex.Types.Dictionary expected");
            }

            Func<string, byte[]> b = Encoding.ASCII.GetBytes;
            Index = dict.GetValue<Integer>(b("index"));
            Timestamp = dict.GetValue<Text>(b("timestamp"));
            Difficulty = dict.GetValue<Integer>(b("difficulty"));
            Transactions = dict.GetValue<Bencodex.Types.List>(b("transactions"))
                .Select(tx => (byte[])(Binary)tx);
            Nonce = dict.GetValue<Binary>(b("nonce"));

            Miner = dict.ContainsKey((Binary)b("reward_beneficiary"))
                ? dict.GetValue<Binary>(b("reward_beneficiary"))
                : null;

            PreviousHash = dict.ContainsKey((Binary)b("previous_hash"))
                ? (byte[])dict.GetValue<Binary>(b("previous_hash"))
                : null;

            Hash = dict.ContainsKey((Binary)b("hash"))
                ? (byte[])dict.GetValue<Binary>(b("hash"))
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

        public byte[] ToBencodex()
        {
            var transactions = new Bencodex.Types.List(
                Transactions.Select(tx => (IValue)(Binary)tx));
            Func<string, byte[]> b = Encoding.ASCII.GetBytes;
            var dict = Bencodex.Types.Dictionary.Empty
                .Add(b("index"), Index)
                .Add(b("timestamp"), Timestamp)
                .Add(b("difficulty"), Difficulty)
                .Add(b("transactions"), (IValue)transactions)
                .Add(b("nonce"), Nonce);

            if (!(Miner is null))
            {
                dict = dict.Add(b("reward_beneficiary"), Miner);
            }

            if (!(PreviousHash is null))
            {
                dict = dict.Add(b("previous_hash"), PreviousHash);
            }

            if (!(Hash is null))
            {
                dict = dict.Add(b("hash"), Hash.ToArray());
            }

            var codec = new Codec();
            return codec.Encode(dict);
        }
    }
}
