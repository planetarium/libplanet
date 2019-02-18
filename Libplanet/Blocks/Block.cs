using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Serialization;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    [Uno.GeneratedEquality]
    public partial class Block<T> : ISerializable
        where T : IAction
    {
        internal const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private static readonly TimeSpan TimestampThreshold =
            TimeSpan.FromSeconds(900);

        public Block(
            long index,
            int difficulty,
            Nonce nonce,
            Address? rewardBeneficiary,
            HashDigest<SHA256>? previousHash,
            DateTime timestamp,
            IEnumerable<Transaction<T>> transactions)
        {
            Index = index;
            Difficulty = difficulty;
            Nonce = nonce;
            RewardBeneficiary = rewardBeneficiary;
            PreviousHash = previousHash;
            Timestamp = timestamp;
            Transactions = transactions;
        }

        protected Block(SerializationInfo info, StreamingContext context)
            : this(new RawBlock(info, context))
        {
        }

        private Block(RawBlock rawBlock)
        {
            Index = rawBlock.Index;
            Difficulty = rawBlock.Difficulty;
            Nonce = new Nonce(rawBlock.Nonce);
            RewardBeneficiary = (rawBlock.RewardBeneficiary != null)
                ? new Address(rawBlock.RewardBeneficiary)
                : default(Address?);
            PreviousHash = (rawBlock.PreviousHash != null)
                ? new HashDigest<SHA256>(rawBlock.PreviousHash)
                : default(HashDigest<SHA256>?);
            Timestamp = DateTime.ParseExact(
                rawBlock.Timestamp,
                TimestampFormat,
                CultureInfo.InvariantCulture).ToUniversalTime();
            Transactions = rawBlock.Transactions
                .Cast<Dictionary<string, object>>()
                .Select(d => new Transaction<T>(new RawTransaction(d)))
                .ToList();
        }

        [Uno.EqualityKey]
        public HashDigest<SHA256> Hash
        {
            get
            {
                byte[] bencoded = ToBencodex(
                    hash: false,
                    transactionData: true
                );
                return Hashcash.Hash(bencoded);
            }
        }

        [Uno.EqualityIgnore]
        public long Index { get; }

        [Uno.EqualityIgnore]
        public int Difficulty { get; }

        [Uno.EqualityIgnore]
        public Nonce Nonce { get; }

        [Uno.EqualityIgnore]
        public Address? RewardBeneficiary { get; }

        [Uno.EqualityIgnore]
        public HashDigest<SHA256>? PreviousHash { get; }

        [Uno.EqualityIgnore]
        public DateTime Timestamp { get; }

        [Uno.EqualityIgnore]
        public IEnumerable<Transaction<T>> Transactions { get; }

        public static Block<T> Mine(
            long index,
            int difficulty,
            Address rewardBeneficiary,
            HashDigest<SHA256>? previousHash,
            DateTime timestamp,
            IEnumerable<Transaction<T>> transactions)
        {
            Block<T> MakeBlock(Nonce n) => new Block<T>(
                index,
                difficulty,
                n,
                rewardBeneficiary,
                previousHash,
                timestamp,
                transactions
            );
            Nonce nonce = Hashcash.Answer(
                n => MakeBlock(n).ToBencodex(false, true),
                difficulty
            );
            return MakeBlock(nonce);
        }

        public static Block<T> FromBencodex(byte[] encoded)
        {
            var serializer = new BencodexFormatter<Block<T>>();
            using (var stream = new MemoryStream(encoded))
            {
                return (Block<T>)serializer.Deserialize(stream);
            }
        }

        public byte[] ToBencodex(bool hash, bool transactionData)
        {
            var serializer = new BencodexFormatter<Block<T>>
            {
                Context = new StreamingContext(
                    StreamingContextStates.All,
                    new BlockSerializationContext(hash, transactionData)
                ),
            };
            using (var stream = new MemoryStream())
            {
                serializer.Serialize(stream, this);
                return stream.ToArray();
            }
        }

        public void Validate()
        {
            Validate(DateTime.UtcNow);
        }

        public void Validate(DateTime currentTime)
        {
            if (currentTime + TimestampThreshold < Timestamp)
            {
                throw new InvalidBlockTimestampException(
                    $"The block #{Index}'s timestamp ({Timestamp}) is " +
                    $"later than now ({currentTime}, " +
                    $"threshold: {TimestampThreshold})."
                );
            }

            if (Index < 0)
            {
                throw new InvalidBlockIndexException(
                    $"index must be 0 or more, but its index is {Index}."
                );
            }

            if (Index == 0)
            {
                if (Difficulty != 0)
                {
                    throw new InvalidBlockDifficultyException(
                        "difficulty must be 0 for the genesis block, " +
                        $"but its difficulty is {Difficulty}."
                    );
                }

                if (PreviousHash != null)
                {
                    throw new InvalidBlockPreviousHashException(
                        "previous hash must be empty for the genesis block."
                    );
                }
            }
            else
            {
                if (Difficulty < 1)
                {
                    throw new InvalidBlockDifficultyException(
                        "difficulty must be more than 0 (except of " +
                        "the genesis block), but its difficulty is " +
                        $"{Difficulty}."
                    );
                }

                if (PreviousHash == null)
                {
                    throw new InvalidBlockPreviousHashException(
                        "previous hash must be present except of " +
                        "the genesis block."
                    );
                }
            }

            if (!Hash.HasLeadingZeroBits(Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"hash ({Hash}) with the nonce ({Nonce}) does not " +
                    $"satisfy its difficulty level {Difficulty}."
                );
            }
        }

        public override string ToString()
        {
            return Hash.ToString();
        }

        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context
        )
        {
            bool includeHash = false;
            bool includeTransactionData = false;
            if (context.Context is BlockSerializationContext serialCtx)
            {
                includeHash = serialCtx.IncludeHash;
                includeTransactionData = serialCtx.IncludeTransactionData;
            }

            RawBlock rawBlock = ToRawBlock(includeHash, includeTransactionData);
            rawBlock.GetObjectData(info, context);
        }

        internal RawBlock ToRawBlock(
            bool includeHash,
            bool includeTransactionData
        )
        {
            IEnumerable transactions =
                Transactions.Select(
                    tx => includeTransactionData ?
                    tx.ToRawTransaction(true) as object :
                    tx.Id.ToByteArray() as object
                );
            var rawBlock = new RawBlock(
                index: Index,
                timestamp: Timestamp.ToString(TimestampFormat),
                nonce: Nonce.ToByteArray(),
                rewardBenificiary: RewardBeneficiary?.ToByteArray(),
                difficulty: Difficulty,
                transactions: transactions,
                previousHash: PreviousHash?.ToByteArray()
            );

            if (includeHash)
            {
                rawBlock = rawBlock.AddHash(Hash.ToByteArray());
            }

            return rawBlock;
        }

        private struct BlockSerializationContext
        {
            public BlockSerializationContext(bool hash, bool transactionData)
            {
                IncludeHash = hash;
                IncludeTransactionData = transactionData;
            }

            internal bool IncludeHash { get; }

            internal bool IncludeTransactionData { get; }
        }
    }
}
