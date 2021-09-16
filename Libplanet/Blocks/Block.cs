using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Action;
using Libplanet.Store.Trie;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    [Equals]
    public class Block<T> : IPreEvaluationBlock<T>, IBlockHeader
        where T : IAction, new()
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = BlockMetadata.CurrentProtocolVersion;

        internal static readonly byte[] HeaderKey = { 0x48 }; // 'H'
        internal static readonly byte[] TransactionsKey = { 0x54 }; // 'T'

        private static readonly Codec Codec = new Codec();

        private int? _bytesLength = null;
        private BlockHeader? _header;
        private ImmutableArray<byte>? _preEvaluationHash = null;
        private BlockHash? _hash = null;

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling field values.
        /// For a more automated way, see also the <see cref="BlockContent{T}"/> method.
        /// </summary>
        /// <param name="index">The height of the block to create.  Goes to the <see cref="Index"/>.
        /// </param>
        /// <param name="difficulty">The mining difficulty that <paramref name="nonce"/> has to
        /// satisfy.  Goes to the <see cref="Difficulty"/>.</param>
        /// <param name="totalDifficulty">The total mining difficulty until this block.
        /// See also <see cref="Difficulty"/>.</param>
        /// <param name="nonce">The nonce which satisfy the given <paramref name="difficulty"/> with
        /// any other field values.  Goes to the <see cref="Nonce"/>.</param>
        /// <param name="miner">The <see cref="Address"/> of the miner of this block. Goes to the
        /// <see cref="Miner"/>.</param>
        /// <param name="previousHash">The previous block's <see cref="Hash"/>.  If it's a genesis
        /// block (i.e., <paramref name="index"/> is 0) this should be <c>null</c>.
        /// Goes to the <see cref="PreviousHash"/>.</param>
        /// <param name="timestamp">The time this block is created.  Goes to
        /// the <see cref="Timestamp"/>.</param>
        /// <param name="transactions">The transactions to be mined together with this block.
        /// Transactions become sorted in an unpredicted-before-mined order and then go to
        /// the <see cref="Transactions"/> property.
        /// </param>
        /// <param name="hashAlgorithm">The hash algorithm for proof-of-work, if and only if
        /// <paramref name="preEvaluationHash"/> is omitted.</param>
        /// <param name="preEvaluationHash">The hash derived from the block <em>except of</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Automatically determined if <c>null</c> is passed, but <paramref name="hashAlgorithm"/>
        /// is needed in that case.</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the states on the block.
        /// </param>
        /// <param name="protocolVersion">The protocol version. <see cref="CurrentProtocolVersion"/>
        /// by default.</param>
        /// <exception cref="ArgumentException">Thrown when either both
        /// <paramref name="hashAlgorithm"/> and <paramref name="preEvaluationHash"/> are present
        /// or both are missing.
        /// <exception cref="ArgumentException">Thrown when <paramref name="stateRootHash"/>
        /// is null while <paramref name="preEvaluationHash"/> is not null.
        /// </exception>
        /// </exception>
        /// <remarks>
        /// Due to historic reasons, there is non-trivial implicit logic embedded inside this
        /// constructor.  It is strongly recommended to use <see cref="BlockContent{T}"/> instead.
        /// </remarks>
        public Block(
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address miner,
            BlockHash? previousHash,
            DateTimeOffset timestamp,
            IReadOnlyList<Transaction<T>> transactions,
            HashAlgorithmType hashAlgorithm,
            HashDigest<SHA256> stateRootHash,
            ImmutableArray<byte>? preEvaluationHash = null,
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
            TxHash = BlockContent<T>.DeriveTxHash(Transactions);

            if (!(preEvaluationHash is { } peh))
            {
                var content = new BlockContent<T>
                {
                    ProtocolVersion = ProtocolVersion,
                    Index = Index,
                    Timestamp = Timestamp,
                    Miner = Miner,
                    Difficulty = Difficulty,
                    TotalDifficulty = TotalDifficulty,
                    PreviousHash = PreviousHash,
                    Transactions = Transactions,
                    TxHash = TxHash,
                };
                var preEval = new PreEvaluationBlock<T>(content, hashAlgorithm, Nonce);
                peh = preEval.PreEvaluationHash;
            }

            try
            {
                _header = new BlockHeader(
                    protocolVersion: ProtocolVersion,
                    index: Index,
                    timestamp: Timestamp,
                    nonce: Nonce,
                    miner: Miner,
                    difficulty: Difficulty,
                    totalDifficulty: TotalDifficulty,
                    previousHash: PreviousHash,
                    txHash: TxHash,
                    preEvaluationHash: peh,
                    stateRootHash: stateRootHash,
                    hashAlgorithm: hashAlgorithm
                );
            }
            catch (InvalidBlockHeaderException e)
            {
                throw e.InnerException ?? e;
            }

            HashAlgorithm = hashAlgorithm;
            _preEvaluationHash = Header.PreEvaluationHash;
            StateRootHash = stateRootHash;
            _hash = Header.Hash;

            // Order transactions for evaluation
            Transactions = OrderTxsForEvaluation(
                ProtocolVersion,
                Transactions,
                PreEvaluationHash).ToImmutableArray();
        }

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by combining
        /// a <paramref name="preEvaluationBlock"/> and its corresponding
        /// <paramref name="stateRootHash"/>.
        /// </summary>
        /// <param name="preEvaluationBlock">A pre-evaluation block.</param>
        /// <param name="stateRootHash">A state root hash determined from the given
        /// <paramref name="preEvaluationBlock"/> and its previous state root.</param>
        public Block(PreEvaluationBlock<T> preEvaluationBlock, HashDigest<SHA256> stateRootHash)
            : this(
                preEvaluationBlock.Index,
                preEvaluationBlock.Difficulty,
                preEvaluationBlock.TotalDifficulty,
                preEvaluationBlock.Nonce,
                preEvaluationBlock.Miner,
                preEvaluationBlock.PreviousHash,
                preEvaluationBlock.Timestamp,
                preEvaluationBlock.Transactions,
                preEvaluationBlock.HashAlgorithm,
                preEvaluationHash: preEvaluationBlock.PreEvaluationHash,
                stateRootHash: stateRootHash,
                protocolVersion: preEvaluationBlock.ProtocolVersion
            )
        {
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        [IgnoreDuringEquals]
        public int ProtocolVersion { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.HashAlgorithm"/>
        public HashAlgorithmType HashAlgorithm { get; }

        /// <summary>
        /// The hash digest derived from the whole contents of the block including <see
        /// cref="StateRootHash"/>, which is determined by evaluating <see cref="Transactions"/>
        /// and a <see cref="Blockchain.Policies.IBlockPolicy{T}.BlockAction"/> (if exists).
        /// <para>This is used for block's unique identifier.</para>
        /// </summary>
        /// <seealso cref="PreEvaluationHash"/>
        /// <seealso cref="StateRootHash"/>
        public BlockHash Hash => _hash
            ?? throw new InvalidOperationException("Hash has not been set.");

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        /// <seealso cref="BlockHeader.Validate"/>
        public ImmutableArray<byte> PreEvaluationHash => _preEvaluationHash
            ?? throw new InvalidOperationException("PreEvaluationHash is has not been set.");

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash { get; }

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        [IgnoreDuringEquals]
        public long Index { get; }

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        [IgnoreDuringEquals]
        public long Difficulty { get; }

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        [IgnoreDuringEquals]
        public BigInteger TotalDifficulty { get; }

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        [IgnoreDuringEquals]
        public Nonce Nonce { get; }

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        [IgnoreDuringEquals]
        public Address Miner { get; }

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        [IgnoreDuringEquals]
        public BlockHash? PreviousHash { get; }

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        [IgnoreDuringEquals]
        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        [IgnoreDuringEquals]
        public HashDigest<SHA256>? TxHash { get; }

        /// <inheritdoc cref="IBlockContent{T}.Transactions"/>
        [IgnoreDuringEquals]
        public IReadOnlyList<Transaction<T>> Transactions { get; }

        /// <summary>
        /// The bytes length in its serialized format.
        /// </summary>
        [IgnoreDuringEquals]
        public int BytesLength =>
            _bytesLength ?? (int)(_bytesLength = Codec.Encode(this.MarshalBlock()).Length);

        /// <summary>
        /// The <see cref="BlockHeader"/> of the block.
        /// </summary>
        [IgnoreDuringEquals]
        public BlockHeader Header => _header
            ?? throw new InvalidOperationException("Header has not been set.");

        public static bool operator ==(Block<T> left, Block<T> right) =>
            Operator.Weave(left, right);

        public static bool operator !=(Block<T> left, Block<T> right) =>
            Operator.Weave(left, right);

        public override string ToString()
        {
            return Hash.ToString();
        }

        /// <summary>
        /// Deterministically shuffles <paramref name="txs"/> for evaluation using
        /// <paramref name="preEvaluationHash"/> as a random seed.
        /// </summary>
        /// <param name="protocolVersion">The <see cref="Block{T}.ProtocolVersion"/> that
        /// <paramref name="txs"/> belong to.</param>
        /// <param name="txs">The list of <see cref="Transaction{T}"/>s to shuffle.</param>
        /// <param name="preEvaluationHash">The <see cref="Block{T}.PreEvaluationHash"/> to use
        /// as a random seed when shuffling.</param>
        /// <returns>An <see cref="IEnumerable{T}"/> of <see cref="Transaction{T}"/>s in evaluation
        /// order with the following properties:
        /// <list type="bullet">
        /// <item><see cref="Transaction{T}"/>s with the same <see cref="Transaction{T}.Signer"/>
        /// value appear consecutive in the list.</item>
        /// <item><see cref="Transaction{T}"/>s with the same <see cref="Transaction{T}.Signer"/>
        /// value are ordered by <see cref="Transaction{T}.Nonce"/> value in ascending order.</item>
        /// </list>
        /// </returns>
        /// <remarks>
        /// This is to prevent an attempt to gain a first move advantage by participants.
        /// </remarks>
        internal static IEnumerable<Transaction<T>> OrderTxsForEvaluation(
            int protocolVersion,
            IEnumerable<Transaction<T>> txs,
            ImmutableArray<byte> preEvaluationHash)
        {
            return protocolVersion > 1
                ? OrderTxsForEvaluationV2(txs, preEvaluationHash)
                : OrderTxsForEvaluationV0(txs, preEvaluationHash);
        }

        /// <summary>
        /// Validates this <see cref="Block{T}"/> and throws an appropriate exception
        /// if not valid.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm used to calculate
        /// the <see cref="PreEvaluationHash"/>.</param>
        /// <param name="currentTime">The current time to validate time-wise conditions.</param>
        /// <exception cref="InvalidBlockHashException">Thrown when <see cref="Hash"/>
        /// is invalid.</exception>
        /// <exception cref="InvalidBlockTimestampException">Thrown when <see cref="Timestamp"/>
        /// is invalid.  For example, if <see cref="Timestamp"/> is too far in the future
        /// compared to <paramref name="currentTime"/>.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when <see cref="Index"/>
        /// is invalid.  For example, if it is a negative integer.
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when <see cref="Difficulty"/>
        /// is not properly configured.  For example, if it is too easy.</exception>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <see cref="PreviousHash"/> is invalid so that the <see cref="Block{T}"/>s are not
        /// continuous.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when
        /// <see cref="Nonce"/> does not satisfy the <see cref="Difficulty"/> level.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the value of
        /// <see cref="TxHash"/> is not consistent with <see cref="Transactions"/>.
        /// </exception>
        internal void Validate(HashAlgorithmType hashAlgorithm, DateTimeOffset currentTime)
        {
            Header.Validate();

            foreach (Transaction<T> tx in Transactions)
            {
                tx.Validate();
            }

            HashDigest<SHA256>? calculatedTxHash =
                BlockContent<T>.DeriveTxHash(Transactions.OrderBy(tx => tx.Id));
            if (!calculatedTxHash.Equals(TxHash))
            {
                throw new InvalidBlockTxHashException(
                    $"Block #{Index} {Hash}'s TxHash doesn't match its content.",
                    TxHash,
                    calculatedTxHash
                );
            }
        }

        private static IEnumerable<Transaction<T>> OrderTxsForEvaluationV0(
            IEnumerable<Transaction<T>> txs,
            ImmutableArray<byte> preEvaluationHash)
        {
            // As the order of transactions should be unpredictable until a block is mined,
            // the sorter key should be derived from both a block hash and a txid.
            var maskInteger = new BigInteger(preEvaluationHash.ToBuilder().ToArray());

            // Transactions with the same signers are grouped first and the ordering of the groups
            // is determined by the XOR aggregate of the txid's in the group with XOR bitmask
            // applied using the pre-evaluation hash provided.  Then within each group,
            // transactions are ordered by nonce.
            return txs
                .GroupBy(tx => tx.Signer)
                .OrderBy(
                    group => maskInteger ^ group
                        .Select(tx => new BigInteger(tx.Id.ToByteArray()))
                        .Aggregate((first, second) => first ^ second))
                .SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }

        private static IEnumerable<Transaction<T>> OrderTxsForEvaluationV2(
            IEnumerable<Transaction<T>> txs,
            ImmutableArray<byte> preEvaluationHash)
        {
            using SHA256 sha256 = SHA256.Create();
            var maskInteger = new BigInteger(
                sha256.ComputeHash(preEvaluationHash.ToBuilder().ToArray()));

            // Transactions with the same signers are grouped first and the ordering of the groups
            // is determined by the signer's address with XOR bitmask applied using
            // the pre-evaluation hash provided.  Then within each group, transactions
            // are ordered by nonce.
            return txs
                .GroupBy(tx => tx.Signer)
                .OrderBy(group => maskInteger ^ new BigInteger(group.Key.ToByteArray()))
                .SelectMany(group => group.OrderBy(tx => tx.Nonce));
        }
    }
}
