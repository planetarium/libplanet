using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Crypto;
using Nito.AsyncEx.Synchronous;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block metadata without transactions or any proofs like nonce or hash.  This represents
    /// metadata of a block that is not yet mined nor proven.
    /// <para>To represent a block content including its metadata and transactions, use
    /// <see cref="BlockContent{T}"/>.</para>
    /// </summary>
    /// <seealso cref="BlockContent{T}"/>
    public class BlockMetadata : IBlockMetadata
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = 3;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Bencodex.Codec Codec = new Bencodex.Codec();

        static BlockMetadata()
        {
            HashAlgorithmType = HashAlgorithmType.Of<SHA256>();
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> by copying the fields of another block
        /// <paramref name="metadata"/>.
        /// </summary>
        /// <remarks>
        /// <para>
        /// As <paramref name="metadata"/> needn't be an actual <see cref="BlockMetadata"/>
        /// instance, but simply any object implementing <see cref="IBlockMetadata"/> interface,
        /// it can't be trusted to satisfy all the constraints for a valid
        /// <see cref="BlockMetadata"/> instance.  As such, conditions are checked again whilst
        /// creating a copy.  This is a relatively heavy operation, so must be used sparingly.
        /// </para>
        /// <para>
        /// This gets redirected to <see cref="BlockMetadata(int, long, DateTimeOffset, Address,
        /// PublicKey?, long, BigInteger, BlockHash?, HashDigest{SHA256}?)"/>.  Refer to the
        /// aforementioned constructor to see the full list of <see cref="Exception"/>s
        /// that may be thrown.
        /// </para>
        /// </remarks>
        /// <param name="metadata">The source block metadata to copy.  This needn't be
        /// an actual <see cref="BlockMetadata"/> instance, but can be any object which
        /// implements <see cref="IBlockMetadata"/>.</param>
        /// <seealso cref="BlockMetadata(int, long, DateTimeOffset, Address,
        /// PublicKey?, long, BigInteger, BlockHash?, HashDigest{SHA256}?)"/>
        public BlockMetadata(IBlockMetadata metadata)
            : this(
                protocolVersion: metadata.ProtocolVersion,
                index: metadata.Index,
                timestamp: metadata.Timestamp,
                miner: metadata.Miner,
                publicKey: metadata.PublicKey,
                difficulty: metadata.Difficulty,
                totalDifficulty: metadata.TotalDifficulty,
                previousHash: metadata.PreviousHash,
                txHash: metadata.TxHash)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> with
        /// <see cref="BlockMetadata.CurrentProtocolVersion"/> as its
        /// <see cref="IBlockMetadata.ProtocolVersion"/>.
        /// </summary>
        /// <remarks>
        /// With this, <see cref="IBlockMetadata.Timestamp"/> is set as current time and
        /// <see cref="IBlockMetadata.Miner"/> is derived from <paramref name="publicKey"/>.
        /// This gets redirected to <see cref="BlockMetadata(int, long, DateTimeOffset, Address,
        /// PublicKey?, long, BigInteger, BlockHash?, HashDigest{SHA256}?)"/>.  Refer to the
        /// aforementioned constructor to see the full list of <see cref="Exception"/>s
        /// that may be thrown.
        /// </remarks>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="timestamp">Goes to <see cref="IBlockMetadata.Timestamp"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="difficulty">Goes to <see cref="IBlockMetadata.Difficulty"/>.</param>
        /// <param name="totalDifficulty">Goes to <see cref="IBlockMetadata.TotalDifficulty"/>.
        /// </param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <seealso cref="BlockMetadata(int, long, DateTimeOffset, Address,
        /// PublicKey?, long, BigInteger, BlockHash?, HashDigest{SHA256}?)"/>
        public BlockMetadata(
            long index,
            DateTimeOffset timestamp,
            PublicKey publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash)
            : this(
                protocolVersion: CurrentProtocolVersion,
                index: index,
                timestamp: timestamp,
                miner: publicKey.ToAddress(),
                publicKey: publicKey,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                txHash: txHash)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> by manually filling in the fields for
        /// <see cref="BlockMetadata"/>.  All other public constructors are redirected to this one.
        /// </summary>
        /// <remarks>
        /// Except for debuggin and/or testing purposes, this shouldn't be called directly.
        /// </remarks>
        /// <param name="protocolVersion">Goes to <see cref="IBlockMetadata.ProtocolVersion"/>.
        /// </param>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="timestamp">Goes to <see cref="IBlockMetadata.Timestamp"/>.</param>
        /// <param name="miner">Goes to <see cref="IBlockMetadata.Miner"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="difficulty">Goes to <see cref="IBlockMetadata.Difficulty"/>.</param>
        /// <param name="totalDifficulty">Goes to <see cref="IBlockMetadata.TotalDifficulty"/>.
        /// </param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// <paramref name="protocolVersion"/> is less than zero or greater than
        /// <see cref="CurrentProtocolVersion"/>, the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when <paramref name="index"/> is
        /// less than zero.</exception>
        /// <exception cref="InvalidBlockPublicKeyException">Thrown when any of the following
        /// conditions isn't satisfied:
        /// <list type="bullet">
        ///   <item><description>If <paramref name="protocolVersion"/> >= 2,
        ///   <paramref name="miner"/> should match the derived address of
        ///   <paramref name="publicKey"/>.</description></item>
        ///   <item><description>Otherwise, <paramref name="publicKey"/> must be
        ///   <see langword="null"/>.</description></item>
        /// </list>
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when one of the following
        /// conditions is met:
        /// <list type="bullet">
        ///     <item><description>If <paramref name="difficulty"/> is less than 0.
        ///     </description></item>
        ///     <item><description>If <paramref name="index"/> is 0 and
        ///     <paramref name="difficulty"/> is not 0.</description></item>
        ///     <item><description>If <paramref name="index"/> is greater than 0 and
        ///     <paramref name="difficulty"/> is 0.</description></item>
        /// </list>
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when one of the following
        /// conditions is met:
        /// <list type="bullet">
        ///     <item><description>If <paramref name="totalDifficulty"/> is less than 0.
        ///     </description></item>
        ///     <item><description>If <paramref name="totalDifficulty"/> is less than
        ///     <paramref name="difficulty"/>.</description></item>
        /// </list>
        /// </exception>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <paramref name="previousHash"/> is not null while <paramref name="index"/> is zero
        /// or <paramref name="previousHash"/> is null while <paramref name="index"/> is nonzero.
        /// </exception>
        public BlockMetadata(
            int protocolVersion,
            long index,
            DateTimeOffset timestamp,
            Address miner,
            PublicKey? publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash)
        {
            // Protocol version validity check.
            if (protocolVersion < 0)
            {
                throw new InvalidBlockProtocolVersionException(
                    $"A block's protocol version cannot be less than zero: {protocolVersion}.",
                    protocolVersion);
            }
            else if (protocolVersion > CurrentProtocolVersion)
            {
                throw new InvalidBlockProtocolVersionException(
                    "A block's protocol version cannot be greater than " +
                    $"{CurrentProtocolVersion}: {protocolVersion}.",
                    protocolVersion);
            }
            else
            {
                ProtocolVersion = protocolVersion;
            }

            // Index validity check.
            Index = index < 0L
                ? throw new InvalidBlockIndexException(
                    $"A negative index is not allowed: {index}.")
                : index;

            // FIXME: Transaction timestamps do not convert to universal time.
            Timestamp = timestamp.ToUniversalTime();

            // Public key and miner validity checks.
            if (protocolVersion >= 2)
            {
                PublicKey = publicKey is { } p
                    ? p
                    : throw new InvalidBlockPublicKeyException(
                        $"Argument {nameof(publicKey)} cannot be null for " +
                        $"{nameof(protocolVersion)} >= 2.",
                        publicKey);
                Miner = miner == p.ToAddress()
                    ? miner
                    : throw new InvalidBlockPublicKeyException(
                        $"Argument {nameof(miner)} should match the derived address of " +
                        $"{nameof(publicKey)} for {nameof(protocolVersion)} >= 2.",
                        publicKey);
            }
            else
            {
                PublicKey = publicKey is null
                    ? (PublicKey?)null
                    : throw new InvalidBlockPublicKeyException(
                        $"Argument {nameof(publicKey)} should be null for " +
                        $"{nameof(protocolVersion)} < 2.",
                        publicKey);
                Miner = miner;
            }

            // Difficulty validity checks.
            if (index == 0L && difficulty > 0L)
            {
                throw new InvalidBlockDifficultyException(
                    $"Genesis block must have zero difficulty: {difficulty}.");
            }
            else if (index > 0L && difficulty <= 0L)
            {
                throw new InvalidBlockDifficultyException(
                    $"Block #{index}'s difficulty must be greater than zero (except for " +
                    $"a genesis block): {difficulty}.");
            }
            else if (totalDifficulty < difficulty)
            {
                throw new InvalidBlockTotalDifficultyException(
                    $"{nameof(totalDifficulty)} ({totalDifficulty}) cannot be less than " +
                    $"{nameof(difficulty)} ({difficulty}).",
                    difficulty,
                    totalDifficulty);
            }
            else
            {
                Difficulty = difficulty < 0L
                    ? throw new InvalidBlockDifficultyException(
                        $"{nameof(Difficulty)} cannot be negative: {difficulty}.")
                    : difficulty;
                TotalDifficulty = totalDifficulty < BigInteger.Zero
                    ? throw new InvalidBlockTotalDifficultyException(
                        $"{nameof(TotalDifficulty)} cannot be negative: ${totalDifficulty}.",
                        difficulty,
                        totalDifficulty)
                    : totalDifficulty;
            }

            // Previous hash validity checks.
            if ((index == 0 && previousHash is { }) ||
                (index != 0 && previousHash is null))
            {
                throw new InvalidBlockPreviousHashException(
                    $"{nameof(previousHash)} can be null if and only if {nameof(index)} is 0.");
            }
            else
            {
                PreviousHash = previousHash;
            }

            TxHash = txHash;
        }

        public static HashAlgorithmType HashAlgorithmType { get; private set; }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion { get; }

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index { get; }

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp { get; }

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner { get; }

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey { get; }

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty { get; }

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty { get; }

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash { get; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash { get; }

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block
        /// <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A pair of the mined nonce and the pre-evaluation hash that satisfy the
        /// block <see cref="Difficulty"/>.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) MineNonce(
            CancellationToken cancellationToken = default) =>
                MineNonce(
                    Environment.ProcessorCount > 1 ? Environment.ProcessorCount / 2 : 1,
                    cancellationToken);

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block
        /// <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="workers">The number of workers to run in parallel.
        /// Must be greater than zero.</param>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A pair of the mined nonce and the pre-evaluation hash that satisfy the
        /// block <see cref="Difficulty"/>.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) MineNonce(
            int workers,
            CancellationToken cancellationToken = default)
        {
            if (workers < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(workers));
            }

            Hashcash.Stamp stamp = GetStampFunction();
            var random = new Random();
            if (workers < 2)
            {
                int seed = random.Next();
                return Hashcash.Answer(
                    stamp, HashAlgorithmType, Difficulty, seed, cancellationToken);
            }

            using var cts = new CancellationTokenSource();
            using CancellationTokenSource lts =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);
            int[] seeds = Enumerable.Range(0, workers).Select(_ => random.Next()).ToArray();
            Task<(Nonce Nonce, ImmutableArray<byte> Digest)>[] tasks = seeds.Select(seed =>
                Task.Run(
                    () => Hashcash.Answer(stamp, HashAlgorithmType, Difficulty, seed, lts.Token),
                    lts.Token
                )
            ).ToArray();
            (Nonce n, ImmutableArray<byte> h) = Task.WhenAny(tasks)
                .WaitAndUnwrapException()
                .WaitAndUnwrapException();

            cts.Cancel();
            return (n, h);
        }

        /// <summary>
        /// Derives a hash digest from the block metadata and <paramref name="nonce"/>.
        /// </summary>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        public ImmutableArray<byte> DerivePreEvaluationHash(Nonce nonce) =>
            BlockMetadata.HashAlgorithmType.Digest(
                Codec.Encode(MakeCandidateData(nonce))).ToImmutableArray();

        /// <summary>
        /// Makes a serialized representation for mining.
        /// </summary>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A <see cref="Dictionary"/> representation for mining.</returns>
        public Dictionary MakeCandidateData(Nonce nonce)
        {
            var dict = Dictionary.Empty
                .Add("index", Index)
                .Add(
                    "timestamp",
                    Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                .Add("difficulty", Difficulty)
                .Add("nonce", nonce.ByteArray);

            if (ProtocolVersion != 0)
            {
                dict = dict.Add("protocol_version", ProtocolVersion);
            }

            if (PreviousHash is { } prevHash)
            {
                dict = dict.Add("previous_hash", prevHash.ByteArray);
            }

            if (TxHash is { } txHash)
            {
                dict = dict.Add("transaction_fingerprint", txHash.ByteArray);
            }

            // As blocks hadn't been signed before ProtocolVersion <= 1, the PublicKey property
            // is nullable type-wise.  Blocks with ProtocolVersion <= 1 had a `reward_beneficiary`
            // field, which referred to the Miner address.  On the other hand, blocks with
            // ProtocolVersion >= 2 have a `public_key` field instead.  (As Miner addresses can be
            // derived from PublicKeys, we don't need to include both at a time.)  The PublicKey
            // property in this class guarantees that its ProtocolVersion is <= 1 when it is null
            // and its ProtocolVersion is >= 2 when it is not null:
            dict = PublicKey is { } pubKey && ProtocolVersion >= 2
                ? dict.Add("public_key", pubKey.Format(compress: true)) ////// ProtocolVersion >= 2
                : dict.Add("reward_beneficiary", Miner.ByteArray); // ProtocolVersion <= 1

            // For blocks with ProtocolVersion < 2, they had lacked TotalDifficulty values in their
            // serialization form.  As it was merely an unintended mistake, TotalDifficulty values
            // have been added from ProtocolVersion >= 2:
            if (ProtocolVersion >= 2)
            {
                dict = dict.Add("total_difficulty", TotalDifficulty);
            }

            return dict;
        }

        private Hashcash.Stamp GetStampFunction()
        {
            // Poor man' way to optimize stamp...
            // FIXME: We need to rather reorganize the serialization layout.
            byte[] emptyNonce = Codec.Encode(MakeCandidateData(default));
            byte[] oneByteNonce = Codec.Encode(MakeCandidateData(new Nonce(new byte[1])));
            int offset = 0;
            while (offset < emptyNonce.Length && emptyNonce[offset].Equals(oneByteNonce[offset]))
            {
                offset++;
            }

            // Prepares fixed parts (stampPrefix, stampSuffix, colon) ahead of time
            // so that they can be reused:
            const int nonceLength = 2;  // In Bencodex, empty bytes are represented as "0:".
            byte[] stampPrefix = new byte[offset];
            Array.Copy(emptyNonce, stampPrefix, stampPrefix.Length);
            byte[] stampSuffix = new byte[emptyNonce.Length - offset - nonceLength];
            Array.Copy(emptyNonce, offset + nonceLength, stampSuffix, 0, stampSuffix.Length);
            byte[] colon = { 0x3a }; // ':'

            IEnumerable<byte[]> Stamp(Nonce nonce)
            {
                int nLen = nonce.ByteArray.Length;
                yield return stampPrefix;
                yield return Encoding.ASCII.GetBytes(nLen.ToString(CultureInfo.InvariantCulture));
                yield return colon; // ':'
                yield return nonce.ToByteArray();
                yield return stampSuffix;
            }

            return Stamp;
        }
    }
}
