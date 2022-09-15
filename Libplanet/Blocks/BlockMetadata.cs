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
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Nito.AsyncEx.Synchronous;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block metadata without transactions or any proofs like nonce or hash.  This represents
    /// metadata of a block that is not yet mined nor proven.
    /// <para>To represent a block content including its metadata and transactions, use <see
    /// cref="BlockContent{T}"/>, which is its subclass.</para>
    /// </summary>
    /// <remarks>Unlike other model types like <see cref="Block{T}"/> or
    /// <see cref="PreEvaluationBlock{T}"/>, this type is mutable.  To get a distinct instance with
    /// partly changed fields, use <see cref="BlockMetadata(IBlockMetadata)"/> constructor and
    /// property setters on a copy instead.</remarks>
    /// <seealso cref="BlockContent{T}"/>
    public class BlockMetadata : IBlockMetadata
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = 3;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Codec Codec = new Codec();

        private int _protocolVersion = CurrentProtocolVersion;
        private long _index;
        private DateTimeOffset _timestamp;
        private long _difficulty;
        private BigInteger _totalDifficulty;

        static BlockMetadata()
        {
            HashAlgorithmType = HashAlgorithmType.Of<SHA256>();
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> by copying the fields of another block
        /// <paramref name="metadata"/>.
        /// </summary>
        /// <param name="metadata">This source of the block metadata to copy.  This hasn't be
        /// a actual <see cref="BlockMetadata"/> instance, but can be any object which implements
        /// <see cref="IBlockMetadata"/> instance.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="CurrentProtocolVersion"/>, the latest known
        /// protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
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

        public BlockMetadata(
            long index,
            PublicKey publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash)
            : this(
                protocolVersion: CurrentProtocolVersion,
                index: index,
                timestamp: DateTimeOffset.UtcNow,
                miner: publicKey.ToAddress(),
                publicKey: publicKey,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                txHash: txHash)
        {
        }

        internal BlockMetadata(
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
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp;
            if (protocolVersion >= 2)
            {
                PublicKey = publicKey is { } p
                    ? p
                    : throw new ArgumentException(
                        $"Argument {nameof(publicKey)} cannot be null for " +
                        $"{nameof(protocolVersion)} >= 2.",
                        nameof(publicKey));
                Miner = miner == p.ToAddress()
                    ? miner
                    : throw new ArgumentException(
                        $"Argument {nameof(miner)} should match the derived address of " +
                        $"{nameof(publicKey)} for {nameof(protocolVersion)} >= 2.",
                        nameof(miner));
            }
            else
            {
                PublicKey = publicKey is null
                    ? (PublicKey?)null
                    : throw new ArgumentException(
                        $"Argument {nameof(publicKey)} should be null for " +
                        $"{nameof(protocolVersion)} < 2.");
                Miner = miner;
            }

            if (totalDifficulty < difficulty)
            {
                throw new InvalidBlockTotalDifficultyException(
                    $"{nameof(totalDifficulty)} ({totalDifficulty}) cannot be less than " +
                    $"{nameof(difficulty)} ({difficulty}).",
                    difficulty,
                    totalDifficulty);
            }
            else
            {
                Difficulty = difficulty;
                TotalDifficulty = totalDifficulty;
            }

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
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when the value to set is
        /// less than 0, or greater than <see cref="CurrentProtocolVersion"/>, the latest known
        /// protocol version.</exception>
        public int ProtocolVersion
        {
            get => _protocolVersion;
            private set
            {
                if (value < 0)
                {
                    throw new InvalidBlockProtocolVersionException(
                        $"A block's protocol version cannot be less than zero: {value}.",
                        value
                    );
                }
                else if (value > CurrentProtocolVersion)
                {
                    throw new InvalidBlockProtocolVersionException(
                        "A block's protocol version cannot be greater than " +
                        $"{CurrentProtocolVersion}: {value}.",
                        value);
                }

                _protocolVersion = value;
            }
        }

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        public long Index
        {
            get => _index;
            private set => _index = value >= 0L
                ? value
                : throw new InvalidBlockIndexException(
                    $"A negative index is not allowed: {value}.");
        }

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp
        {
            get => _timestamp;
            private set => _timestamp = value.ToUniversalTime();
        }

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner { get; private set; }

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey { get; private set; }

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        /// negative.</exception>
        /// <remarks>This cannot not be negative.
        /// </remarks>
        public long Difficulty
        {
            get => _difficulty;
            private set
            {
                if (value < 0L)
                {
                    throw new InvalidBlockDifficultyException(
                        $"{nameof(Difficulty)} cannot be negative: {value}"
                    );
                }

                _difficulty = value;
            }
        }

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when the value to set
        /// is less than <see cref="Difficulty"/>.</exception>
        public BigInteger TotalDifficulty
        {
            get => _totalDifficulty;
            private set
            {
                if (value < BigInteger.Zero)
                {
                    throw new InvalidBlockTotalDifficultyException(
                        $"{nameof(TotalDifficulty)} cannot be negative: ${value}.",
                        Difficulty,
                        value
                    );
                }

                _totalDifficulty = value;
            }
        }

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash { get; private set; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash { get; private set; }

        /// <summary>
        /// Serializes data of a possible candidate shifted from it into a Bencodex dictionary.
        /// This data is used for PoW (proof-of-work) to find the satisfying
        /// <paramref name="nonce"/>, rather than transmitting the block over the network.
        /// </summary>
        /// <param name="nonce">The nonce of the block.</param>
        /// <returns>The serialized block content in a Bencodex dictionary.</returns>
        public Bencodex.Types.Dictionary MakeCandidateData(Nonce nonce)
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("index", Index)
                .Add("timestamp", Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
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
                ? dict.Add("public_key", pubKey.Format(compress: true)) // ProtocolVersion >= 2
                : dict.Add("reward_beneficiary", Miner.ByteArray); /////// ProtocolVersion <= 1

            // For blocks with ProtocolVersion < 2, they had lacked TotalDifficulty values in their
            // serialization form.  As it was merely an unintended mistake, TotalDifficulty values
            // have been added from ProtocolVersion >= 2:
            if (ProtocolVersion >= 2)
            {
                dict = dict.Add("total_difficulty", TotalDifficulty);
            }

            return dict;
        }

        /// <summary>
        /// Derives a hash digest from the block metadata and <paramref name="nonce"/>.
        /// </summary>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        public ImmutableArray<byte> DerivePreEvaluationHash(Nonce nonce) =>
            HashAlgorithmType.Digest(Codec.Encode(MakeCandidateData(nonce))).ToImmutableArray();

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
            CancellationToken cancellationToken = default
        ) =>
            MineNonce(
                Environment.ProcessorCount > 1 ? Environment.ProcessorCount / 2 : 1,
                cancellationToken
            );

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
            CancellationToken cancellationToken = default
        )
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
