using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Runtime.Serialization;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Serialization;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    [Equals]
    public class Block<T> : ISerializable
        where T : IAction, new()
    {
        internal const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";

        private static readonly TimeSpan TimestampThreshold =
            TimeSpan.FromSeconds(900);

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling all field values.
        /// For a more automated way, see also <see cref="Mine"/> method.
        /// </summary>
        /// <param name="index">The height of the block to create.  Goes to the <see cref="Index"/>.
        /// </param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/> has to
        /// satisfy.  Goes to the <see cref="Difficulty"/>.</param>
        /// <param name="nonce">The nonce which satisfy the given <paramref name="difficulty"/> with
        /// any other field values.  Goes to the <see cref="Nonce"/>.</param>
        /// <param name="miner">An optional address refers to who mines this block.
        /// Goes to the <see cref="Miner"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., <paramref name="index"/> is 0) this should be <c>null</c>.
        /// Goes to the <see cref="PreviousHash"/>.</param>
        /// <param name="timestamp">The time this block is created.  Goes to
        /// the <see cref="Timestamp"/>.</param>
        /// <param name="transactions">The transactions to be mined together with this block.
        /// Transactions become sorted in an unpredicted-before-mined order and then go to
        /// the <see cref="Transactions"/> property.
        /// </param>
        /// <seealso cref="Mine"/>
        public Block(
            long index,
            long difficulty,
            Nonce nonce,
            Address? miner,
            HashDigest<SHA256>? previousHash,
            DateTimeOffset timestamp,
            IEnumerable<Transaction<T>> transactions)
        {
            Index = index;
            Difficulty = difficulty;
            Nonce = nonce;
            Miner = miner;
            PreviousHash = previousHash;
            Timestamp = timestamp;
            Transactions = transactions.OrderBy(tx => tx.Id).ToArray();
            Hash = Hashcash.Hash(ToBencodex(false, false));

            // As the order of transactions should be unpredictable until a block is mined,
            // the sorter key should be derived from both a block hash and a txid.
            var hashInteger = new BigInteger(Hash.ToByteArray());

            // If there are multiple transactions for the same signer these should be ordered by
            // their tx nonces.  So transactions of the same signer should have the same sort key.
            // The following logic "flattens" multiple tx ids having the same signer into a single
            // txid by applying XOR between them.
            IImmutableDictionary<Address, IImmutableSet<Transaction<T>>> signerTxs = Transactions
                .GroupBy(tx => tx.Signer)
                .ToImmutableDictionary(
                    g => g.Key,
                    g => (IImmutableSet<Transaction<T>>)g.ToImmutableHashSet()
                );
            IImmutableDictionary<Address, BigInteger> signerTxIds = signerTxs
                .ToImmutableDictionary(
                    pair => pair.Key,
                    pair => pair.Value
                        .Select(tx => new BigInteger(tx.Id.ToByteArray()))
                        .OrderBy(txid => txid)
                        .Aggregate((a, b) => a ^ b)
                );

            // Order signers by values derivied from both block hash and their "flatten" txid:
            IImmutableList<Address> signers = signerTxIds
                .OrderBy(pair => pair.Value ^ hashInteger)
                .Select(pair => pair.Key)
                .ToImmutableArray();

            // Order transactions for each signer by their tx nonces:
            Transactions = signers
                .SelectMany(signer => signerTxs[signer].OrderBy(tx => tx.Nonce))
                .ToImmutableArray();
        }

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling all field values.
        /// For a more automated way, see also <see cref="Mine"/> method.
        /// </summary>
        /// <param name="index">The height of the block to create.  Goes to the <see cref="Index"/>.
        /// </param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/> has to
        /// satisfy.  Goes to the <see cref="Difficulty"/>.</param>
        /// <param name="previousTotalDifficulty">Total difficulty of previous block.</param>
        /// <param name="nonce">The nonce which satisfy the given <paramref name="difficulty"/> with
        /// any other field values.  Goes to the <see cref="Nonce"/>.</param>
        /// <param name="miner">An optional address refers to who mines this block.
        /// Goes to the <see cref="Miner"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., <paramref name="index"/> is 0) this should be <c>null</c>.
        /// Goes to the <see cref="PreviousHash"/>.</param>
        /// <param name="timestamp">The time this block is created.  Goes to
        /// the <see cref="Timestamp"/>.</param>
        /// <param name="transactions">The transactions to be mined together with this block.
        /// Transactions become sorted in an unpredicted-before-mined order and then go to
        /// the <see cref="Transactions"/> property.
        /// </param>
        /// <seealso cref="Mine"/>
        public Block(
            long index,
            long difficulty,
            long previousTotalDifficulty,
            Nonce nonce,
            Address? miner,
            HashDigest<SHA256>? previousHash,
            DateTimeOffset timestamp,
            IEnumerable<Transaction<T>> transactions)
            : this(
                index,
                difficulty,
                nonce,
                miner,
                previousHash,
                timestamp,
                transactions
            )
        {
            TotalDifficulty = difficulty + previousTotalDifficulty;
        }

        protected Block(SerializationInfo info, StreamingContext context)
            : this(new RawBlock(info, context))
        {
        }

        private Block(RawBlock rb)
            : this(
                rb.Index,
                rb.Difficulty,
                new Nonce(rb.Nonce),
                rb.Miner is null ? (Address?)null : new Address(rb.Miner),
#pragma warning disable MEN002 // Line is too long
                rb.PreviousHash is null ? (HashDigest<SHA256>?)null : new HashDigest<SHA256>(rb.PreviousHash),
#pragma warning restore MEN002 // Line is too long
                DateTimeOffset.ParseExact(
                    rb.Timestamp,
                    TimestampFormat,
                    CultureInfo.InvariantCulture).ToUniversalTime(),
                rb.Transactions
                    .Cast<Dictionary<string, object>>()
                    .Select(d => new Transaction<T>(new RawTransaction(d)))
                    .ToList()
                )
        {
        }

        public HashDigest<SHA256> Hash { get; }

        [IgnoreDuringEquals]
        public long Index { get; }

        [IgnoreDuringEquals]
        public long Difficulty { get; }

        public long TotalDifficulty { get; }

        [IgnoreDuringEquals]
        public Nonce Nonce { get; }

        [IgnoreDuringEquals]
        public Address? Miner { get; }

        [IgnoreDuringEquals]
        public HashDigest<SHA256>? PreviousHash { get; }

        [IgnoreDuringEquals]
        public DateTimeOffset Timestamp { get; }

        [IgnoreDuringEquals]
        public IEnumerable<Transaction<T>> Transactions { get; }

        /// <summary>
        /// Generate a block with given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="index">Index of the block.</param>
        /// <param name="difficulty">Difficulty to find the <see cref="Block{T}"/>.</param>
        /// <param name="previousTotalDifficulty">total difficulty of previous block.</param>
        /// <param name="miner">The <see cref="Address"/> of miner that mined the block.</param>
        /// <param name="previousHash">
        /// The <see cref="HashDigest{SHA256}"/> of previous block.
        /// </param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="transactions"><see cref="Transaction{T}"/>s that are going to be included
        /// in the block.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>A <see cref="Block{T}"/> that mined.</returns>
        public static Block<T> Mine(
            long index,
            long difficulty,
            long previousTotalDifficulty,
            Address miner,
            HashDigest<SHA256>? previousHash,
            DateTimeOffset timestamp,
            IEnumerable<Transaction<T>> transactions,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var txs = transactions.OrderBy(tx => tx.Id).ToImmutableArray();
            Block<T> MakeBlock(Nonce n) => new Block<T>(
                index,
                difficulty,
                previousTotalDifficulty,
                n,
                miner,
                previousHash,
                timestamp,
                txs);

            // Poor man' way to optimize stamp...
            // FIXME: We need to rather reorganize the serialization layout.
            byte[] emptyNonce = MakeBlock(new Nonce(new byte[0])).ToBencodex(false, false);
            byte[] oneByteNonce = MakeBlock(new Nonce(new byte[1])).ToBencodex(false, false);
            int offset = 0;
            while (offset < emptyNonce.Length && emptyNonce[offset].Equals(oneByteNonce[offset]))
            {
                offset++;
            }

            const int nonceLength = 2;  // In Bencodex, empty bytes are represented as "0:".
            byte[] stampPrefix = new byte[offset];
            Array.Copy(emptyNonce, stampPrefix, stampPrefix.Length);
            byte[] stampSuffix = new byte[emptyNonce.Length - offset - nonceLength];
            Array.Copy(emptyNonce, offset + nonceLength, stampSuffix, 0, stampSuffix.Length);

            Nonce nonce = Hashcash.Answer(
                n =>
                {
                    int nLen = n.ByteArray.Length;
                    byte[] nLenStr = Encoding.ASCII.GetBytes(nLen.ToString());
                    int totalLen =
                        stampPrefix.Length + nLenStr.Length + 1 + nLen + stampSuffix.Length;
                    byte[] stamp = new byte[totalLen];
                    Array.Copy(stampPrefix, stamp, stampPrefix.Length);
                    int pos = stampPrefix.Length;
                    Array.Copy(nLenStr, 0, stamp, pos, nLenStr.Length);
                    pos += nLenStr.Length;
                    stamp[pos] = 0x3a;  // ':'
                    pos++;
                    n.ByteArray.CopyTo(stamp, pos);
                    pos += nLen;
                    Array.Copy(stampSuffix, 0, stamp, pos, stampSuffix.Length);
                    return stamp;
                },
                difficulty,
                cancellationToken
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

        /// <summary>
        /// Executes every <see cref="IAction"/> in the
        /// <see cref="Transactions"/> step by step, and emits a pair of
        /// a transaction, and an <see cref="ActionEvaluation"/>
        /// for each step.
        /// </summary>
        /// <param name="accountStateGetter">An <see cref="AccountStateGetter"/>
        /// delegate to get a previous state.
        /// A <c>null</c> value, which is default, means a constant function
        /// that returns <c>null</c>.</param>
        /// <returns>Enumerates pair of a transaction, and
        /// <see cref="ActionEvaluation"/> for each action.
        /// The order of pairs are the same to
        /// the <see cref="Transactions"/> and their
        /// <see cref="Transaction{T}.Actions"/> (e.g., tx&#xb9;-act&#xb9;,
        /// tx&#xb9;-act&#xb2;, tx&#xb2;-act&#xb9;, tx&#xb2;-act&#xb2;,
        /// &#x2026;).
        /// Note that each <see cref="IActionContext.Random"/> object has
        /// a unconsumed state.
        /// </returns>
        [Pure]
        public
        IEnumerable<Tuple<Transaction<T>, ActionEvaluation>>
        EvaluateActionsPerTx(AccountStateGetter accountStateGetter = null)
        {
            IAccountStateDelta delta =
                new AccountStateDeltaImpl(
                    accountStateGetter ?? (a => null)
                );
            foreach (Transaction<T> tx in Transactions)
            {
                IEnumerable<ActionEvaluation> evaluations =
                    tx.EvaluateActionsGradually(
                        Hash,
                        Index,
                        delta,
                        Miner.Value);
                foreach (var evaluation in evaluations)
                {
                    yield return Tuple.Create(tx, evaluation);
                    delta = evaluation.OutputStates;
                }

                delta = new AccountStateDeltaImpl(delta.GetState);
            }
        }

        /// <summary>
        /// Executes every <see cref="IAction"/> in the
        /// <see cref="Transactions"/> and gets result states of each step of
        /// every <see cref="Transaction{T}"/>.
        /// <para>It throws an <see cref="InvalidBlockException"/> or
        /// an <see cref="InvalidTxException"/> if there is any
        /// integrity error.</para>
        /// <para>Otherwise it enumerates an <see cref="ActionEvaluation"/>
        /// for each <see cref="IAction"/>.</para>
        /// </summary>
        /// <param name="currentTime">The current time to validate
        /// time-wise conditions.</param>
        /// <param name="accountStateGetter">The getter of previous states.
        /// This affects the execution of <see cref="Transaction{T}.Actions"/>.
        /// </param>
        /// <returns>An <see cref="ActionEvaluation"/> for each
        /// <see cref="IAction"/>.</returns>
        /// <exception cref="InvalidBlockTimestampException">Thrown when
        /// the <see cref="Timestamp"/> is invalid, for example, it is the far
        /// future than the given <paramref name="currentTime"/>.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when
        /// the <see cref="Index"/>is invalid, for example, it is a negative
        /// integer.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <see cref="Difficulty"/> is not properly configured,
        /// for example, it is too easy.</exception>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <see cref="PreviousHash"/> is invalid so that
        /// the <see cref="Block{T}"/>s are not continuous.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when
        /// the <see cref="Nonce"/> does not satisfy its
        /// <see cref="Difficulty"/> level.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Transaction{T}.Signature"/> is invalid or not signed by
        /// the account who corresponds to its
        /// <see cref="Transaction{T}.PublicKey"/>.</exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Transaction{T}.Signer"/> is not derived from its
        /// <see cref="Transaction{T}.PublicKey"/>.</exception>
        /// <exception cref="InvalidTxUpdatedAddressesException">Thrown when
        /// any <see cref="IAction"/> of <see cref="Transactions"/> tries
        /// to update the states of <see cref="Address"/>es not included
        /// in <see cref="Transaction{T}.UpdatedAddresses"/>.</exception>
        public IEnumerable<ActionEvaluation> Evaluate(
            DateTimeOffset currentTime,
            AccountStateGetter accountStateGetter
        )
        {
            Validate(currentTime);
            Tuple<Transaction<T>, ActionEvaluation>[] txEvaluations =
                EvaluateActionsPerTx(accountStateGetter).ToArray();

            var txUpdatedAddressesPairs = txEvaluations
                    .GroupBy(tuple => tuple.Item1)
                    .Select(
                        grp => (
                            grp.Key,
                            grp.Last().Item2.OutputStates.UpdatedAddresses
                        )
                    );
            foreach (
                (Transaction<T> tx, IImmutableSet<Address> updatedAddresses)
                in txUpdatedAddressesPairs)
            {
                if (!tx.UpdatedAddresses.IsSupersetOf(updatedAddresses))
                {
                    const string msg =
                        "Actions in the transaction try to update " +
                        "the addresses not granted.";
                    throw new InvalidTxUpdatedAddressesException(
                        tx.Id,
                        tx.UpdatedAddresses,
                        updatedAddresses,
                        msg
                    );
                }
            }

            return txEvaluations.Select(te => te.Item2);
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

        internal void Validate(DateTimeOffset currentTime)
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

            if (!Hash.Satisfies(Difficulty))
            {
                throw new InvalidBlockNonceException(
                    $"hash ({Hash}) with the nonce ({Nonce}) does not " +
                    $"satisfy its difficulty level {Difficulty}."
                );
            }

            foreach (Transaction<T> tx in Transactions)
            {
                tx.Validate();
            }
        }

        internal RawBlock ToRawBlock(
            bool includeHash,
            bool includeTransactionData
        )
        {
            IEnumerable transactions =
                Transactions.OrderBy(tx => tx.Id).Select(
                    tx => includeTransactionData
                        ? tx.ToRawTransaction(true) as object
                        : tx.Id.ToByteArray() as object
                );
            var rawBlock = new RawBlock(
                index: Index,
                timestamp: Timestamp.ToString(TimestampFormat),
                nonce: Nonce.ToByteArray(),
                miner: Miner?.ToByteArray(),
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

        private readonly struct BlockSerializationContext
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
