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
    public class Block<T> : IBlockExcerpt
        where T : IAction, new()
    {
        /// <summary>
        /// The most latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = BlockHeader.CurrentProtocolVersion;

        private int _bytesLength;

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling all field values.
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
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., <paramref name="index"/> is 0) this should be <c>null</c>.
        /// Goes to the <see cref="PreviousHash"/>.</param>
        /// <param name="timestamp">The time this block is created.  Goes to
        /// the <see cref="Timestamp"/>.</param>
        /// <param name="transactions">The transactions to be mined together with this block.
        /// Transactions become sorted in an unpredicted-before-mined order and then go to
        /// the <see cref="Transactions"/> property.
        /// </param>
        /// <param name="preEvaluationHash">The hash derived from the block <em>except of</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Automatically determined if <c>null</c> is passed (which is default).</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the states on the block.
        /// </param>
        /// <param name="protocolVersion">The protocol version. <see cref="CurrentProtocolVersion"/>
        /// by default.</param>
        /// <seealso cref="Mine"/>
        public Block(
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address? miner,
            HashDigest<SHA256>? previousHash,
            DateTimeOffset timestamp,
            IEnumerable<Transaction<T>> transactions,
            HashDigest<SHA256>? preEvaluationHash = null,
            HashDigest<SHA256>? stateRootHash = null,
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

            PreEvaluationHash = preEvaluationHash ?? Hashcash.Hash(Header.SerializeForHash());
            StateRootHash = stateRootHash;

            // FIXME: This does not need to be computed every time?
            Hash = Hashcash.Hash(Header.SerializeForHash());

            // As the order of transactions should be unpredictable until a block is mined,
            // the sorter key should be derived from both a block hash and a txid.
            var hashInteger = new BigInteger(PreEvaluationHash.ToByteArray());

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
        /// Creates a <see cref="Block{T}"/> instance from its serialization.
        /// </summary>
        /// <param name="dict">The <see cref="Bencodex.Types.Dictionary"/>
        /// representation of <see cref="Block{T}"/> instance.
        /// </param>
        public Block(Bencodex.Types.Dictionary dict)
            : this(new RawBlock(dict))
        {
        }

        // FIXME: Should this necessarily be a public constructor?
        // See also <https://github.com/planetarium/libplanet/issues/1146>.
        public Block(
            Block<T> block,
            HashDigest<SHA256>? stateRootHash
        )
            : this(
                block.Index,
                block.Difficulty,
                block.TotalDifficulty,
                block.Nonce,
                block.Miner,
                block.PreviousHash,
                block.Timestamp,
                block.Transactions,
                block.PreEvaluationHash,
                stateRootHash,
                protocolVersion: block.ProtocolVersion
            )
        {
        }

        private Block(RawBlock rb)
            : this(
#pragma warning disable SA1118
                rb.Header.ProtocolVersion,
                new HashDigest<SHA256>(rb.Header.Hash),
                rb.Header.Index,
                rb.Header.Difficulty,
                rb.Header.TotalDifficulty,
                new Nonce(rb.Header.Nonce.ToArray()),
                rb.Header.Miner.Any() ? new Address(rb.Header.Miner) : (Address?)null,
                rb.Header.PreviousHash.Any()
                    ? new HashDigest<SHA256>(rb.Header.PreviousHash)
                    : (HashDigest<SHA256>?)null,
                DateTimeOffset.ParseExact(
                    rb.Header.Timestamp,
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture).ToUniversalTime(),
                rb.Header.TxHash.Any()
                    ? new HashDigest<SHA256>(rb.Header.TxHash)
                    : (HashDigest<SHA256>?)null,
                rb.Transactions
                    .Select(tx => Transaction<T>.Deserialize(tx.ToArray(), false))
                    .ToList(),
                rb.Header.PreEvaluationHash.Any()
                    ? new HashDigest<SHA256>(rb.Header.PreEvaluationHash)
                    : (HashDigest<SHA256>?)null,
                rb.Header.StateRootHash.Any()
                    ? new HashDigest<SHA256>(rb.Header.StateRootHash)
                    : (HashDigest<SHA256>?)null)
#pragma warning restore SA1118
        {
        }

        private Block(
            int protocolVersion,
            HashDigest<SHA256> hash,
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address? miner,
            HashDigest<SHA256>? previousHash,
            DateTimeOffset timestamp,
            HashDigest<SHA256>? txHash,
            IEnumerable<Transaction<T>> transactions,
            HashDigest<SHA256>? preEvaluationHash,
            HashDigest<SHA256>? stateRootHash
        )
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Difficulty = difficulty;
            TotalDifficulty = totalDifficulty;
            Nonce = nonce;
            Miner = miner;
            PreviousHash = previousHash;
            Timestamp = timestamp;
            Hash = hash;
            PreEvaluationHash = preEvaluationHash ??
                throw new ArgumentNullException(nameof(preEvaluationHash));

            // See also: https://github.com/planetarium/libplanet/pull/1116#discussion_r535836480
            // FIXME: we should convert `StateRootHash`'s type to `HashDisgest<SHA256>` after
            // removing `IBlockStateStore`.
            StateRootHash = stateRootHash;
            TxHash = txHash;
            Transactions = transactions.ToImmutableArray();
        }

        /// <summary>
        /// The protocol version number.
        /// </summary>
        [IgnoreDuringEquals]
        public int ProtocolVersion { get; }

        /// <summary>
        /// <see cref="Hash"/> is derived from a serialized <see cref="Block{T}"/>
        /// after <see cref="Transaction{T}.Actions"/> are evaluated.
        /// </summary>
        /// <seealso cref="PreEvaluationHash"/>
        /// <seealso cref="StateRootHash"/>
        public HashDigest<SHA256> Hash { get; }

        /// <summary>
        /// The hash derived from the block <em>except of</em>
        /// <see cref="StateRootHash"/> (i.e., without action evaluation).
        /// Used for <see cref="BlockHeader.Validate"/> checking <see cref="Nonce"/>.
        /// </summary>
        /// <seealso cref="Nonce"/>
        /// <seealso cref="BlockHeader.Validate"/>
        public HashDigest<SHA256> PreEvaluationHash { get; }

        /// <summary>
        /// The <see cref="ITrie.Hash"/> of the states on the block.
        /// </summary>
        /// <seealso cref="ITrie.Hash"/>
        public HashDigest<SHA256>? StateRootHash { get; }

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

        [IgnoreDuringEquals]
        public HashDigest<SHA256>? PreviousHash { get; }

        [IgnoreDuringEquals]
        public DateTimeOffset Timestamp { get; }

        [IgnoreDuringEquals]
        public HashDigest<SHA256>? TxHash { get; }

        [IgnoreDuringEquals]
        public IEnumerable<Transaction<T>> Transactions { get; }

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
        /// The <see cref="BlockHeader"/> of the block.
        /// </summary>
        [IgnoreDuringEquals]
        public BlockHeader Header
        {
            get
            {
                string timestampAsString = Timestamp.ToString(
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture
                );
                ImmutableArray<byte> previousHashAsArray =
                    PreviousHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty;
                ImmutableArray<byte> stateRootHashAsArray =
                    StateRootHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty;

                // FIXME: When hash is not assigned, should throw an exception.
                return new BlockHeader(
                    protocolVersion: ProtocolVersion,
                    index: Index,
                    timestamp: timestampAsString,
                    nonce: Nonce.ToByteArray().ToImmutableArray(),
                    miner: Miner?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                    difficulty: Difficulty,
                    totalDifficulty: TotalDifficulty,
                    previousHash: previousHashAsArray,
                    txHash: TxHash?.ToByteArray().ToImmutableArray() ?? ImmutableArray<byte>.Empty,
                    hash: Hash.ToByteArray().ToImmutableArray(),
                    preEvaluationHash: PreEvaluationHash.ToByteArray().ToImmutableArray(),
                    stateRootHash: stateRootHashAsArray
                );
            }
        }

        public static bool operator ==(Block<T> left, Block<T> right) =>
            Operator.Weave(left, right);

        public static bool operator !=(Block<T> left, Block<T> right) =>
            Operator.Weave(left, right);

        /// <summary>
        /// Generate a block with given <paramref name="transactions"/>.
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
        /// <returns>A <see cref="Block{T}"/> that mined.</returns>
        public static Block<T> Mine(
            long index,
            long difficulty,
            BigInteger previousTotalDifficulty,
            Address miner,
            HashDigest<SHA256>? previousHash,
            DateTimeOffset timestamp,
            IEnumerable<Transaction<T>> transactions,
            int protocolVersion = CurrentProtocolVersion,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var txs = transactions.OrderBy(tx => tx.Id).ToImmutableArray();
            Block<T> MakeBlock(Nonce n) => new Block<T>(
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
            byte[] emptyNonce = MakeBlock(new Nonce(new byte[0])).Header.SerializeForHash();
            byte[] oneByteNonce = MakeBlock(new Nonce(new byte[1])).Header.SerializeForHash();
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

            return MakeBlock(nonce);
        }

        /// <summary>
        /// Decodes a <see cref="Block{T}"/>'s
        /// <a href="https://bencodex.org/">Bencodex</a> representation.
        /// </summary>
        /// <param name="bytes">A <a href="https://bencodex.org/">Bencodex</a>
        /// representation of a <see cref="Block{T}"/>.</param>
        /// <returns>A decoded <see cref="Block{T}"/> object.</returns>
        /// <seealso cref="Serialize()"/>
        [Pure]
        public static Block<T> Deserialize(byte[] bytes)
        {
            IValue value = new Codec().Decode(bytes);
            if (!(value is Bencodex.Types.Dictionary dict))
            {
                throw new DecodingException(
                    $"Expected {typeof(Bencodex.Types.Dictionary)} but " +
                    $"{value.GetType()}");
            }

            var block = new Block<T>(dict);
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

        public Bencodex.Types.Dictionary ToBencodex() => ToRawBlock().ToBencodex();

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
        public
        IEnumerable<Tuple<Transaction<T>, ActionEvaluation>> EvaluateActionsPerTx(
            AccountStateGetter accountStateGetter = null,
            AccountBalanceGetter accountBalanceGetter = null,
            ITrie previousBlockStatesTrie = null
        )
        {
            accountStateGetter ??= a => null;
            accountBalanceGetter ??= (a, c) => new FungibleAssetValue(c);

            IAccountStateDelta delta;
            foreach (Transaction<T> tx in Transactions)
            {
                delta = ProtocolVersion > 0
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
        /// <exception cref="InvalidBlockHashException">Thrown when
        /// the <see cref="Hash"/> is invalid.</exception>
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

        /// <summary>
        /// Gets <see cref="BlockDigest"/> representation of the <see cref="Block{T}"/>.
        /// </summary>
        /// <returns><see cref="BlockDigest"/> representation of the <see cref="Block{T}"/>.
        /// </returns>
        public BlockDigest ToBlockDigest()
        {
            return new BlockDigest(
                header: Header,
                txIds: Transactions
                    .Select(tx => tx.Id.ToByteArray().ToImmutableArray())
                    .ToImmutableArray());
        }

        public override string ToString()
        {
            return Hash.ToString();
        }

        internal void Validate(DateTimeOffset currentTime)
        {
            Header.Validate(currentTime);

            foreach (Transaction<T> tx in Transactions)
            {
                tx.Validate();
            }

            HashDigest<SHA256> expectedPreEvaluationHash =
                Hashcash.Hash(Header.SerializeForHash(includeStateRootHash: false));
            if (!expectedPreEvaluationHash.Equals(PreEvaluationHash))
            {
                string message =
                    $"The expected pre evaluation hash of block {Hash} is " +
                    $"{expectedPreEvaluationHash}, but its pre evaluation hash is " +
                    $"{PreEvaluationHash}.";
                throw new InvalidBlockPreEvaluationHashException(
                    PreEvaluationHash,
                    expectedPreEvaluationHash,
                    message);
            }

            HashDigest<SHA256>? calculatedTxHash =
                CalcualteTxHashes(Transactions.OrderBy(tx => tx.Id));
            if (!calculatedTxHash.Equals(TxHash))
            {
                throw new InvalidBlockTxHashException(
                    $"Block #{Index} {Hash}'s TxHash doesn't match its content.",
                    TxHash,
                    calculatedTxHash
                );
            }
        }

        internal RawBlock ToRawBlock()
        {
            return new RawBlock(
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

            return Hashcash.Hash(txHashSource);
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
