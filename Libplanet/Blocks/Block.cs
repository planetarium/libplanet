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

        private int? _bytesLength = null;
        private BlockHeader? _header = null;
        private ImmutableArray<byte>? _preEvaluationHash = null;
        private BlockHash? _hash = null;

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling field values.
        /// For a more automated way, see also the <see cref="Mine"/> method.
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
        /// <param name="hashAlgorithm">The hash algorithm for the proof-of-work.</param>
        /// <param name="protocolVersion">The protocol version. <see cref="CurrentProtocolVersion"/>
        /// by default.</param>
        /// <remarks>
        /// Due to historic reasons, there is non-trivial implicit logic embedded inside this
        /// constructor.  It is strongly recommended to use <see cref="Mine"/> instead.
        /// </remarks>
        /// <seealso cref="Mine"/>
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
            TxHash = CalculateTxHashes(Transactions);

            // FIXME: This only works due to sanity constraint on usage.
#pragma warning disable SA1118
            _header = new BlockHeader(
                protocolVersion: ProtocolVersion,
                index: Index,
                timestamp: Timestamp.ToString(
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture),
                nonce: Nonce.ToByteArray().ToImmutableArray(),
                miner: Miner.ToByteArray().ToImmutableArray(),
                difficulty: Difficulty,
                totalDifficulty: TotalDifficulty,
                previousHash: PreviousHash?.ToByteArray().ToImmutableArray()
                    ?? ImmutableArray<byte>.Empty,
                txHash: TxHash?.ToByteArray().ToImmutableArray()
                    ?? ImmutableArray<byte>.Empty,
                hashAlgorithm: hashAlgorithm);
            _preEvaluationHash = Header.PreEvaluationHash;
            StateRootHash = null;
            _hash = new BlockHash(Header.Hash);
#pragma warning restore SA1118

            // Order transactions for evaluation
            Transactions = OrderTxsForEvaluation(
                ProtocolVersion,
                Transactions,
                PreEvaluationHash).ToImmutableArray();
        }

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling field values.
        /// For a more automated way, see also the <see cref="Mine"/> method.
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
        /// <param name="preEvaluationHash">The hash derived from the block <em>except of</em>
        /// <paramref name="stateRootHash"/> (i.e., without action evaluation).
        /// Automatically determined if <c>null</c> is passed.</param>
        /// <param name="stateRootHash">The <see cref="ITrie.Hash"/> of the states on the block.
        /// </param>
        /// <param name="protocolVersion">The protocol version. <see cref="CurrentProtocolVersion"/>
        /// by default.</param>
        /// <remarks>
        /// Due to historic reasons, there is non-trivial implicit logic embedded inside this
        /// constructor.  It is strongly recommended to use <see cref="Mine"/> instead.
        /// </remarks>
        /// <seealso cref="Mine"/>
        public Block(
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address miner,
            BlockHash? previousHash,
            DateTimeOffset timestamp,
            IReadOnlyList<Transaction<T>> transactions,
            ImmutableArray<byte> preEvaluationHash,
            HashDigest<SHA256> stateRootHash,
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
            TxHash = CalculateTxHashes(Transactions);

#pragma warning disable SA1118
            _header = new BlockHeader(
                protocolVersion: ProtocolVersion,
                index: Index,
                timestamp: Timestamp.ToString(
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture),
                nonce: Nonce.ToByteArray().ToImmutableArray(),
                miner: Miner.ToByteArray().ToImmutableArray(),
                difficulty: Difficulty,
                totalDifficulty: TotalDifficulty,
                previousHash: PreviousHash?.ToByteArray().ToImmutableArray()
                    ?? ImmutableArray<byte>.Empty,
                txHash: TxHash?.ToByteArray().ToImmutableArray()
                    ?? ImmutableArray<byte>.Empty,
                preEvaluationHash: preEvaluationHash,
                stateRootHash: stateRootHash.ToByteArray().ToImmutableArray());

            _preEvaluationHash = Header.PreEvaluationHash;
            StateRootHash = stateRootHash;
            _hash = new BlockHash(Header.Hash);
#pragma warning restore SA1118

            // Order transactions for evaluation
            Transactions = OrderTxsForEvaluation(
                ProtocolVersion,
                Transactions,
                PreEvaluationHash).ToImmutableArray();
        }

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by manually filling field values.
        /// For a more automated way, see also the <see cref="Mine"/> method.
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
        /// <param name="preEvaluationHash">The hash derived from the block <em>except of</em>
        /// <see cref="Block{T}.StateRootHash"/> (i.e., without action evaluation).
        /// Automatically determined if <c>null</c> is passed.</param>
        /// <param name="protocolVersion">The protocol version. <see cref="CurrentProtocolVersion"/>
        /// by default.</param>
        /// <remarks>
        /// Due to historic reasons, there is non-trivial implicit logic embedded inside this
        /// constructor.  It is strongly recommended to use <see cref="Mine"/> instead.
        /// </remarks>
        /// <seealso cref="Mine"/>
        public Block(
            long index,
            long difficulty,
            BigInteger totalDifficulty,
            Nonce nonce,
            Address miner,
            BlockHash? previousHash,
            DateTimeOffset timestamp,
            IReadOnlyList<Transaction<T>> transactions,
            ImmutableArray<byte> preEvaluationHash,
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
            TxHash = CalculateTxHashes(Transactions);

#pragma warning disable SA1118
            _header = new BlockHeader(
                protocolVersion: ProtocolVersion,
                index: Index,
                timestamp: Timestamp.ToString(
                    BlockHeader.TimestampFormat,
                    CultureInfo.InvariantCulture),
                nonce: Nonce.ToByteArray().ToImmutableArray(),
                miner: Miner.ToByteArray().ToImmutableArray(),
                difficulty: Difficulty,
                totalDifficulty: TotalDifficulty,
                previousHash: PreviousHash?.ToByteArray().ToImmutableArray()
                    ?? ImmutableArray<byte>.Empty,
                txHash: TxHash?.ToByteArray().ToImmutableArray()
                    ?? ImmutableArray<byte>.Empty,
                preEvaluationHash: preEvaluationHash,
                stateRootHash: ImmutableArray<byte>.Empty);

            _preEvaluationHash = Header.PreEvaluationHash;
            StateRootHash = null;
            _hash = new BlockHash(Header.Hash);
#pragma warning restore SA1118

            // Order transactions for evaluation
            Transactions = OrderTxsForEvaluation(
                ProtocolVersion,
                Transactions,
                PreEvaluationHash).ToImmutableArray();
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

#pragma warning disable SA1514, SA1515
        // FIXME: This probably should not be public.
        // See also <https://github.com/planetarium/libplanet/issues/1146>.
        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by attaching <paramref name="stateRootHash"/>
        /// to given <paramref name="block"/>.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> instance without
        /// <see cref="Block{T}.StateRootHash"/> to use.</param>
        /// <param name="stateRootHash">A <see cref="HashDigest{SHA256}"/> to attach.</param>
#pragma warning restore SA1514, SA1515
        public Block(
            Block<T> block,
            HashDigest<SHA256> stateRootHash)
            : this(
                block.Index,
                block.Difficulty,
                block.TotalDifficulty,
                block.Nonce,
                block.Miner,
                block.PreviousHash,
                block.Timestamp,
                block.Transactions,
                preEvaluationHash: block.PreEvaluationHash,
                stateRootHash: stateRootHash,
                protocolVersion: block.ProtocolVersion)
        {
        }

        private Block(RawBlock rawBlock)
        {
            _header = rawBlock.Header;

            ProtocolVersion = rawBlock.Header.ProtocolVersion;
            Index = rawBlock.Header.Index;
            Difficulty = rawBlock.Header.Difficulty;
            TotalDifficulty = rawBlock.Header.TotalDifficulty;
            Nonce = new Nonce(rawBlock.Header.Nonce.ToArray());
            Miner = new Address(rawBlock.Header.Miner);
            PreviousHash = rawBlock.Header.PreviousHash.Any()
                ? new BlockHash(rawBlock.Header.PreviousHash)
                : (BlockHash?)null;
            Timestamp = DateTimeOffset.ParseExact(
                Header.Timestamp,
                BlockHeader.TimestampFormat,
                CultureInfo.InvariantCulture).ToUniversalTime();
            TxHash = Header.TxHash.Any()
                ? new HashDigest<SHA256>(rawBlock.Header.TxHash)
                : (HashDigest<SHA256>?)null;

            // FIXME: Transactions should be re-ordered to properly validate StateRootHash.
            // See also <https://github.com/planetarium/libplanet/issues/1299>.
            Transactions = rawBlock.Transactions
                .Select(tx => Transaction<T>.Deserialize(tx.ToArray(), false))
                .ToImmutableList();

            _preEvaluationHash = rawBlock.Header.PreEvaluationHash.Any()
                ? rawBlock.Header.PreEvaluationHash
                : throw new ArgumentException(
                    $"PreEvaluationHash of {nameof(rawBlock.Header)} cannot be empty.");

            // FIXME: We should convert `StateRootHash`'s type to `HashDisgest<SHA256>` after
            // removing `IBlockStateStore`.
            // See also <https://github.com/planetarium/libplanet/pull/1116#discussion_r535836480>.
            // FIXME: Normal path should not lead to StateRootHash being null.  Should be
            // refactored to throw an exception.
            StateRootHash = rawBlock.Header.StateRootHash.Any()
                ? new HashDigest<SHA256>(rawBlock.Header.StateRootHash)
                : (HashDigest<SHA256>?)null;
            _hash = new BlockHash(rawBlock.Header.Hash);
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
        public BlockHash Hash => _hash
            ?? throw new InvalidOperationException("Hash has not been set.");

        /// <summary>
        /// The hash derived from the block <em>except of</em>
        /// <see cref="StateRootHash"/> (i.e., without action evaluation).
        /// Used for <see cref="BlockHeader.Validate"/> checking <see cref="Nonce"/>.
        /// </summary>
        /// <seealso cref="Nonce"/>
        /// <seealso cref="BlockHeader.Validate"/>
        public ImmutableArray<byte> PreEvaluationHash => _preEvaluationHash
            ?? throw new InvalidOperationException("PreEvaluationHash is has not been set.");

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
        public Address Miner { get; }

        /// <summary>
        /// The <see cref="Hash"/> of its previous block.
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
                return _bytesLength ?? (int)(_bytesLength = Serialize().Length);
            }
        }

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

        /// <summary>
        /// Generate a block with given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="index">Index of the block.</param>
        /// <param name="hashAlgorithm">The hash algorithm to use for calculating
        /// <see cref="Block{T}.PreEvaluationHash"/>.</param>
        /// <param name="difficulty">Difficulty to find the <see cref="Block{T}"/>
        /// <see cref="Nonce"/>.</param>
        /// <param name="previousTotalDifficulty">The total difficulty until the previous
        /// <see cref="Block{T}"/>.</param>
        /// <param name="miner">The <see cref="Address"/> of miner that mines the block.</param>
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
            HashAlgorithmType hashAlgorithm,
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
            Block<T> MakeBlock(Nonce n) => new Block<T>(
                index,
                difficulty,
                previousTotalDifficulty + difficulty,
                n,
                miner,
                previousHash,
                timestamp,
                txs,
                hashAlgorithm: hashAlgorithm,
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

            (Nonce nonce, _) = Hashcash.Answer(
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
                hashAlgorithm,
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
            return serialized;
        }

        public Bencodex.Types.Dictionary ToBencodex() => ToRawBlock().ToBencodex();

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
            Header.Validate(hashAlgorithm, currentTime);

            foreach (Transaction<T> tx in Transactions)
            {
                tx.Validate();
            }

            HashDigest<SHA256>? calculatedTxHash =
                CalculateTxHashes(Transactions.OrderBy(tx => tx.Id));
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

        private static HashDigest<SHA256>? CalculateTxHashes(IEnumerable<Transaction<T>> txs)
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
