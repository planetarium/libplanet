using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    [Equals]
    public class BlockDraft<T>
        where T : IAction, new()
    {
        /// <summary>
        /// The most latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = BlockDraftHeader.CurrentProtocolVersion;

        private int _bytesLength;

        /// <summary>
        /// Creates a <see cref="BlockDraft{T}"/> instance by manually filling all field values.
        /// For a more automated way, see also <see cref="Mine"/> method.
        /// </summary>
        /// <param name="index">The height of the block to create.  Goes to the <see cref="Index"/>.
        /// </param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/> has to
        /// satisfy.  Goes to the <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty until this block.
        /// See also <see cref="Difficulty"/>.</param>
        /// <param name="nonce">The nonce which satisfy the given <paramref name="difficulty"/> with
        /// any other field values.  Goes to the <see cref="Nonce"/>.</param>
        /// <param name="miner">An optional address refers to who mines this block.
        /// Goes to the <see cref="Miner"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Block{T}.Hash"/>.  If it is
        /// a genesis block (i.e., <paramref name="index"/> is 0) this should be <c>null</c>.
        /// Goes to the <see cref="PreviousHash"/>.</param>
        /// <param name="timestamp">The time this block is created.  Goes to
        /// the <see cref="Timestamp"/>.</param>
        /// <param name="transactions">The transactions to be mined together with this block.
        /// Transactions become sorted in an unpredicted-before-mined order and then go to
        /// the <see cref="Transactions"/> property.
        /// </param>
        /// <param name="protocolVersion">The protocol version. <see cref="CurrentProtocolVersion"/>
        /// by default.</param>
        /// <seealso cref="Mine"/>
        public BlockDraft(
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address? miner,
            BlockHash? previousHash,
            DateTimeOffset timestamp,
            IReadOnlyList<Transaction<T>> transactions,
            int protocolVersion = CurrentProtocolVersion)
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            Nonce = nonce;
            Miner = miner;
            PreviousHash = previousHash;
            Timestamp = timestamp;
            Transactions = transactions.OrderBy(tx => tx.Id).ToArray();
            TxHash = CalcualteTxHashes(Transactions);

            Header = new BlockDraftHeader(
                protocolVersion: ProtocolVersion,
                index: Index,
                timestamp: Timestamp.ToString(
                    BlockDraftHeader.TimestampFormat,
                    CultureInfo.InvariantCulture),
                nonce: Nonce.ToByteArray().ToImmutableArray(),
                miner: Miner?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                difficulty: Difficulty,
                totalDifficulty: TotalDifficulty,
                previousHash: PreviousHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                txHash: TxHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                preEvaluationHash: ImmutableArray<byte>.Empty);
            PreEvaluationHash = new BlockHash(Header.PreEvaluationHash);
        }

        /// <summary>
        /// Creates a <see cref="BlockDraft{T}"/> instance from its serialization.
        /// </summary>
        /// <param name="dict">The <see cref="Bencodex.Types.Dictionary"/>
        /// representation of <see cref="BlockDraft{T}"/> instance.
        /// </param>
        public BlockDraft(Bencodex.Types.Dictionary dict)
            : this(new RawBlockDraft(dict))
        {
        }

        private BlockDraft(RawBlockDraft rb)
            : this(
#pragma warning disable SA1118
                rb.Header.ProtocolVersion,
                rb.Header.Index,
                rb.Header.Difficulty,
                rb.Header.TotalDifficulty,
                new Nonce(rb.Header.Nonce.ToArray()),
                rb.Header.Miner.Any() ? new Address(rb.Header.Miner) : (Address?)null,
                rb.Header.PreviousHash.Any()
                    ? new BlockHash(rb.Header.PreviousHash)
                    : (BlockHash?)null,
                DateTimeOffset.ParseExact(
                    rb.Header.Timestamp,
                    BlockDraftHeader.TimestampFormat,
                    CultureInfo.InvariantCulture).ToUniversalTime(),
                rb.Header.TxHash.Any()
                    ? new HashDigest<SHA256>(rb.Header.TxHash)
                    : (HashDigest<SHA256>?)null,
                rb.Transactions
                    .Select(tx => Transaction<T>.Deserialize(tx.ToArray(), false))
                    .ToList(),
                new BlockHash(rb.Header.PreEvaluationHash))
#pragma warning restore SA1118
        {
        }

        private BlockDraft(
            int protocolVersion,
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address? miner,
            BlockHash? previousHash,
            DateTimeOffset timestamp,
            HashDigest<SHA256>? txHash,
            IReadOnlyList<Transaction<T>> transactions,
            BlockHash preEvaluationHash)
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            Nonce = nonce;
            Miner = miner;
            PreviousHash = previousHash;
            Timestamp = timestamp;
            PreEvaluationHash = preEvaluationHash;

            TxHash = txHash;
            Transactions = transactions.ToImmutableArray();

            Header = new BlockDraftHeader(
                protocolVersion: ProtocolVersion,
                index: Index,
                timestamp: Timestamp.ToString(
                    BlockDraftHeader.TimestampFormat,
                    CultureInfo.InvariantCulture),
                nonce: Nonce.ToByteArray().ToImmutableArray(),
                miner: Miner?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                difficulty: Difficulty,
                totalDifficulty: TotalDifficulty,
                previousHash: PreviousHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                txHash: TxHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                preEvaluationHash: PreEvaluationHash.ToByteArray().ToImmutableArray());
        }

        /// <summary>
        /// The protocol version number.
        /// </summary>
        [IgnoreDuringEquals]
        public int ProtocolVersion { get; }

        /// <summary>
        /// The hash derived from the block draft.
        /// Used for <see cref="BlockDraftHeader.Validate"/> checking <see cref="Nonce"/>.
        /// </summary>
        /// <seealso cref="Nonce"/>
        /// <seealso cref="BlockDraftHeader.Validate"/>
        public BlockHash PreEvaluationHash { get; }

        [IgnoreDuringEquals]
        public long Index { get; }

        [IgnoreDuringEquals]
        public long Difficulty { get; }

        [IgnoreDuringEquals]
        public BigInteger TotalDifficulty { get; }

        [IgnoreDuringEquals]
        public Nonce Nonce { get; }

        [IgnoreDuringEquals]
        public Address? Miner { get; }

        /// <summary>
        /// The <see cref="Block{T}.Hash"/> of its previous block.
        /// This field is mandatory except for a genesis block.
        /// </summary>
        [IgnoreDuringEquals]
        public BlockHash? PreviousHash { get; }

        [IgnoreDuringEquals]
        public DateTimeOffset Timestamp { get; }

        [IgnoreDuringEquals]
        public HashDigest<SHA256>? TxHash { get; }

        [IgnoreDuringEquals]
        public IReadOnlyList<Transaction<T>> Transactions { get; }

        /// <summary>
        /// The bytes length in its serialized format.
        /// </summary>
        [IgnoreDuringEquals]
        public int BytesLength
        {
            get
            {
                // Note that Serialize() by itself caches _byteLength, so that this ByteLength
                // property never invokes Serialize() more than once.
                return _bytesLength > 0 ? _bytesLength : Serialize().Length;
            }
        }

        /// <summary>
        /// The <see cref="BlockDraftHeader"/> of the block.
        /// </summary>
        [IgnoreDuringEquals]
        public BlockDraftHeader Header { get; }

        public static bool operator ==(BlockDraft<T> left, BlockDraft<T> right) =>
            Operator.Weave(left, right);

        public static bool operator !=(BlockDraft<T> left, BlockDraft<T> right) =>
            Operator.Weave(left, right);

        /// <summary>
        /// Generate a block draft with given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="index">Index of the block.</param>
        /// <param name="difficulty">Difficulty to find the <see cref="Block{T}"/>
        /// <see cref="Nonce"/>.</param>
        /// <param name="previousTotalDifficulty">The total difficulty until the previous
        /// <see cref="Block{T}"/>.</param>
        /// <param name="miner">The <see cref="Address"/> of miner that mined the block.</param>
        /// <param name="previousHash">
        /// The <see cref="HashDigest{SHA256}"/> of previous block.
        /// </param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="transactions"><see cref="Transaction{T}"/>s that are going to be included
        /// in the block.</param>
        /// <param name="protocolVersion">The protocol version.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.</param>
        /// <returns>A <see cref="BlockDraft{T}"/> that is mined.</returns>
        public static BlockDraft<T> Mine(
            long index,
            long difficulty,
            BigInteger previousTotalDifficulty,
            Address miner,
            BlockHash? previousHash,
            DateTimeOffset timestamp,
            IEnumerable<Transaction<T>> transactions,
            int protocolVersion = CurrentProtocolVersion,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var txs = transactions.OrderBy(tx => tx.Id).ToImmutableArray();
            BlockDraft<T> MakeBlockDraft(Nonce n) => new BlockDraft<T>(
                index,
                difficulty,
                previousTotalDifficulty + difficulty,
                n,
                miner,
                previousHash,
                timestamp,
                txs,
                protocolVersion: protocolVersion);

            // Poor man' way to optimize stamp...
            // FIXME: We need to rather reorganize the serialization layout.
            byte[] emptyNonce = MakeBlockDraft(new Nonce(new byte[0])).Header.SerializeForHash();
            byte[] oneByteNonce = MakeBlockDraft(new Nonce(new byte[1])).Header.SerializeForHash();
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
                    byte[] nLenStr = Encoding.ASCII.GetBytes(
                        nLen.ToString(CultureInfo.InvariantCulture));
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

            return MakeBlockDraft(nonce);
        }

        /// <summary>
        /// Decodes a <see cref="BlockDraft{T}"/>'s
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a <see cref="Block{T}"/>.</param>
        /// <returns>A decoded <see cref="Block{T}"/> object.</returns>
        /// <seealso cref="Serialize()"/>
        [Pure]
        public static BlockDraft<T> Deserialize(byte[] bytes)
        {
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            var block = new BlockDraft<T>(dict);
            block._bytesLength = bytes.Length;
            return block;
        }

        public byte[] Serialize()
        {
            var codec = new Codec();
            byte[] serialized = codec.Encode(ToBencodex());
            _bytesLength = serialized.Length;
            return serialized;
        }

        public Bencodex.Types.Dictionary ToBencodex() => ToRawBlockDraft().ToBencodex();

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
        /// <param name="accountBalanceGetter">An <see cref="AccountBalanceGetter"/> delegate to
        /// get previous account balance.
        /// A <c>null</c> value, which is default, means a constant function that returns zero.
        /// </param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
        /// </param>
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
        public IEnumerable<Tuple<Transaction<T>, ActionEvaluation>> EvaluateActionsPerTx(
            AccountStateGetter accountStateGetter = null,
            AccountBalanceGetter accountBalanceGetter = null,
            ITrie previousBlockStatesTrie = null)
        {
            accountStateGetter ??= a => null;
            accountBalanceGetter ??= (a, c) => new FungibleAssetValue(c);

            foreach (Transaction<T> tx in Transactions)
            {
                IAccountStateDelta delta = ProtocolVersion > 0
                    ? new AccountStateDeltaImpl(accountStateGetter, accountBalanceGetter, tx.Signer)
                    : new AccountStateDeltaImplV0(
                        accountStateGetter, accountBalanceGetter, tx.Signer);
                IEnumerable<ActionEvaluation> evaluations =
                    tx.EvaluateActionsGradually(
                        PreEvaluationHash,
                        Index,
                        delta,
                        Miner.Value,
                        previousBlockStatesTrie: previousBlockStatesTrie);
                foreach (var evaluation in evaluations)
                {
                    yield return Tuple.Create(tx, evaluation);
                    delta = evaluation.OutputStates;
                }

                accountStateGetter = delta.GetState;
                accountBalanceGetter = delta.GetBalance;
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
        /// <param name="accountStateGetter">An <see cref="AccountStateGetter"/> delegate to get
        /// a previous state.  A <c>null</c> value, which is default, means a constant function
        /// that returns <c>null</c>.
        /// This affects the execution of <see cref="Transaction{T}.Actions"/>.
        /// </param>
        /// <param name="accountBalanceGetter">An <see cref="AccountBalanceGetter"/> delegate to
        /// get previous account balance.
        /// A <c>null</c> value, which is default, means a constant function that returns zero.
        /// This affects the execution of <see cref="Transaction{T}.Actions"/>.
        /// </param>
        /// <param name="previousBlockStatesTrie">The trie to contain states at previous block.
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
        /// <exception cref="InvalidBlockTxHashException">Thrown when
        /// the <see cref="TxHash" /> does not match with its
        /// <see cref="Transactions"/>.</exception>
        /// <exception cref="InvalidTxUpdatedAddressesException">Thrown when
        /// any <see cref="IAction"/> of <see cref="Transactions"/> tries
        /// to update the states of <see cref="Address"/>es not included
        /// in <see cref="Transaction{T}.UpdatedAddresses"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when its
        /// <see cref="Transaction{T}.Signature"/> is invalid or not signed by
        /// the account who corresponds to its <see cref="PublicKey"/>.
        /// </exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when its
        /// <see cref="Transaction{T}.Signer"/> is not derived from its
        /// <see cref="Transaction{T}.PublicKey"/>.</exception>
        public IEnumerable<ActionEvaluation> Evaluate(
            DateTimeOffset currentTime,
            AccountStateGetter accountStateGetter = null,
            AccountBalanceGetter accountBalanceGetter = null,
            ITrie previousBlockStatesTrie = null
        )
        {
            accountStateGetter ??= a => null;
            accountBalanceGetter ??= (a, c) => new FungibleAssetValue(c);

            Validate(currentTime);
            Tuple<Transaction<T>, ActionEvaluation>[] txEvaluations =
                EvaluateActionsPerTx(
                    accountStateGetter, accountBalanceGetter, previousBlockStatesTrie).ToArray();

            var txUpdatedAddressesPairs = txEvaluations
                    .GroupBy(tuple => tuple.Item1)
                    .Select(
                        grp => (
                            grp.Key,
                            grp.Last().Item2.OutputStates.UpdatedAddresses));
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
            return PreEvaluationHash.ToString();
        }

        internal void Validate(DateTimeOffset currentTime)
        {
            Header.Validate(currentTime);

            foreach (Transaction<T> tx in Transactions)
            {
                tx.Validate();
            }

            if (ProtocolVersion > 0)
            {
                BlockHash expectedPreEvaluationHash =
                    Hashcash.Hash(Header.SerializeForHash());
                if (!expectedPreEvaluationHash.Equals(PreEvaluationHash))
                {
                    string message =
                        $"The expected pre-evaluation hash of block draft {PreEvaluationHash} is " +
                        $"{expectedPreEvaluationHash}, but its pre-evaluation hash is " +
                        $"{PreEvaluationHash}.";
                    throw new InvalidBlockPreEvaluationHashException(
                        PreEvaluationHash,
                        expectedPreEvaluationHash,
                        message);
                }
            }

            HashDigest<SHA256>? calculatedTxHash =
                CalcualteTxHashes(Transactions.OrderBy(tx => tx.Id));
            if (!calculatedTxHash.Equals(TxHash))
            {
                throw new InvalidBlockTxHashException(
                    $"Block draft #{Index} {PreEvaluationHash}'s TxHash doesn't match its content.",
                    TxHash,
                    calculatedTxHash
                );
            }
        }

        internal RawBlockDraft ToRawBlockDraft()
        {
            return new RawBlockDraft(
                header: Header,
                transactions: Transactions
                .Select(tx => tx.Serialize(true).ToImmutableArray()).ToImmutableArray());
        }

        private static HashDigest<SHA256>? CalcualteTxHashes(IEnumerable<Transaction<T>> txs)
        {
            if (!txs.Any())
            {
                return null;
            }

            byte[][] serializedTxs = txs.Select(tx => tx.Serialize(true)).ToArray();
            int txHashSourceLength = serializedTxs.Select(b => b.Length).Sum() + 2;
            var txHashSource = new byte[txHashSourceLength];

            // Bencodex lists look like: l...e
            txHashSource[0] = 0x6c;
            txHashSource[txHashSourceLength - 1] = 0x65;
            int offset = 1;
            foreach (byte[] serializedTx in serializedTxs)
            {
                serializedTx.CopyTo(txHashSource, offset);
                offset += serializedTx.Length;
            }

            using SHA256 hashAlgo = SHA256.Create();
            return HashDigest<SHA256>.DeriveFrom(txHashSource);
        }
    }
}
