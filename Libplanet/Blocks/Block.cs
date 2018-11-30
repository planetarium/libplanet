using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Action;
using Libplanet.Serialization;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    public struct Block<T> : ISerializable
        where T : IAction
    {
        public readonly int Index;
        public readonly int Difficulty;
        public readonly Nonce Nonce;
        public readonly Address? RewardBeneficiary;
        public readonly HashDigest? PreviousHash;
        public readonly DateTime Timestamp;
        public readonly IEnumerable<Transaction<T>> Transactions;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        public Block(
            int index,
            int difficulty,
            Nonce nonce,
            Address? rewardBeneficiary,
            HashDigest? previousHash,
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

        public HashDigest Hash
        {
            get
            {
                byte[] bencoded = Bencoded(hash: false, transactionData: true);
                return Hashcash.Hash(bencoded);
            }
        }

        public static Block<T> Mine(
            int index,
            int difficulty,
            Address rewardBeneficiary,
            HashDigest? previousHash,
            DateTime timestamp,
            IEnumerable<Transaction<T>> transactions)
        {
            Block<T> makeBlock(Nonce n) => new Block<T>(
                index,
                difficulty,
                n,
                rewardBeneficiary,
                previousHash,
                timestamp,
                transactions
            );
            Nonce nonce = Hashcash.Answer(
                n => makeBlock(n).Bencoded(false, true),
                difficulty
            );
            return makeBlock(nonce);
        }

        public byte[] Bencoded(bool hash, bool transactionData)
        {
            var serializer = new BencodeFormatter<Block<T>>
            {
                Context = new StreamingContext(
                    StreamingContextStates.All,
                    new BlockSerializationContext { IncludeHash = hash, IncludeTransactionData = transactionData }
                )
            };
            using (var stream = new MemoryStream())
            {
                serializer.Serialize(stream, this);
                return stream.ToArray();
            }
        }

        public void Validate()
        {
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
                        $"difficulty must be 0 for the genesis block, but its difficulty is {Difficulty}."
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
                        $"difficulty must be more than 0 (except of the genesis block), but its difficulty is {Difficulty}."
                    );
                }

                if (PreviousHash == null)
                {
                    throw new InvalidBlockPreviousHashException(
                        "previous hash must be present except of the genesis block."
                    );
                }
            }

            if (!Hash.HasLeadingZeroBits(Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"hash ({Hash}) with the nonce ({Nonce}) does not satisfy its difficulty level {Difficulty}."
                );
            }
        }

        public override string ToString()
        {
            return Hash.ToString();
        }

        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            bool includeHash = false;
            bool includeTransactionData = false;
            if (context.Context is BlockSerializationContext blockSerializationContext)
            {
                includeHash = blockSerializationContext.IncludeHash;
                includeTransactionData = blockSerializationContext.IncludeTransactionData;
            }

            RawBlock rawBlock = ToRawBlock(includeHash, includeTransactionData);
            rawBlock.GetObjectData(info, context);
        }

        public RawBlock ToRawBlock(bool includeHash, bool includeTransactionData)
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
    }

    internal struct BlockSerializationContext
    {
        internal bool IncludeHash { get; set; }

        internal bool IncludeTransactionData { get; set; }
    }
}
