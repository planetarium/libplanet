#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
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
        private DateTimeOffset _timestamp = DateTimeOffset.UtcNow;
        private Address _miner;
        private PublicKey? _publicKey;
        private long _difficulty;
        private BigInteger _totalDifficulty;
        private HashDigest<SHA256>? _txHash;

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
        {
            ProtocolVersion = metadata.ProtocolVersion;
            Index = metadata.Index;
            Timestamp = metadata.Timestamp;
            Miner = metadata.Miner;
            PublicKey = metadata.PublicKey;
            Difficulty = metadata.Difficulty;
            TotalDifficulty = metadata.TotalDifficulty;
            PreviousHash = metadata.PreviousHash;
            _txHash = metadata.TxHash;
        }

        /// <summary>
        /// Creates an empty <see cref="BlockMetadata"/> instance.  Its properties can be easily
        /// filled with C# object initializers.
        /// </summary>
        public BlockMetadata()
        {
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when the value to set is
        /// less than 0, or greater than <see cref="CurrentProtocolVersion"/>, the latest known
        /// protocol version.</exception>
        public int ProtocolVersion
        {
            get => _protocolVersion;
            set
            {
                if (value < 0)
                {
                    throw new InvalidBlockProtocolVersionException(
                        value,
                        $"A block's protocol version cannot be less than zero: {value}."
                    );
                }
                else if (value > CurrentProtocolVersion)
                {
                    string msg =
                        "A block's protocol version cannot be greater than " +
                        $"{CurrentProtocolVersion}: {value}.";
                    throw new InvalidBlockProtocolVersionException(value, msg);
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
            set => _index
                = value >= 0L
                ? value
                : throw new InvalidBlockIndexException($"A negative index is disallowed: {value}.");
        }

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp
        {
            get => _timestamp;
            set => _timestamp = value.ToUniversalTime();
        }

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner
        {
            get => _miner;
            set
            {
                if (PublicKey is { } pubKey && !pubKey.ToAddress().Equals(value))
                {
                    throw new InvalidBlockPublicKeyException(
                        pubKey,
                        $"The miner address {value} is not consistent with its public key {pubKey}."
                    );
                }

                _miner = value;
            }
        }

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        /// <remarks>Its setter also updates the <see cref="Miner"/> property too.</remarks>
        public PublicKey? PublicKey
        {
            get => _publicKey;
            set
            {
                _publicKey = value;
                if (value is { } pubKey)
                {
                    _miner = pubKey.ToAddress();
                }
            }
        }

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        /// negative.</exception>
        /// <remarks>This cannot not be negative.
        /// <para>When <see cref="Difficulty"/> is updated, <see cref="TotalDifficulty"/> is also
        /// updated together.  For example, when <see cref="Difficulty"/> = 10 and
        /// <see cref="TotalDifficulty"/> = 50, if <see cref="Difficulty"/> is updated to
        /// 20 (= 10 + 10) <see cref="TotalDifficulty"/> is also updated to 60 (= 50 + 10).</para>
        /// </remarks>
        public long Difficulty
        {
            get => _difficulty;
            set
            {
                if (value < 0L)
                {
                    throw new InvalidBlockDifficultyException(
                        $"{nameof(Difficulty)} cannot be negative: {value}"
                    );
                }

                long delta = value - _difficulty;
                _difficulty = value;
                _totalDifficulty += delta;
            }
        }

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when the value to set
        /// is less than <see cref="Difficulty"/>.</exception>
        public BigInteger TotalDifficulty
        {
            get => _totalDifficulty;
            set
            {
                if (value < BigInteger.Zero)
                {
                    throw new InvalidBlockTotalDifficultyException(
                        Difficulty,
                        value,
                        $"{nameof(TotalDifficulty)} cannot be negative: ${value}."
                    );
                }
                else if (value < Difficulty)
                {
                    string msg =
                        $"{nameof(TotalDifficulty)} ({value}) cannot be less than " +
                        $"{nameof(Difficulty)} ({Difficulty}).";
                    throw new InvalidBlockTotalDifficultyException(Difficulty, value, msg);
                }

                _totalDifficulty = value;
            }
        }

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash { get; set; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        [SuppressMessage(
            "SonarQube",
            "S2292",
            Justification = "The backing field purposes to prevent intercepting from subclasses.")]
        public virtual HashDigest<SHA256>? TxHash
        {
            get => _txHash;
            set => _txHash = value;
        }

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
            dict = PublicKey is { } pubKey && ProtocolVersion > 1
                ? dict.Add("public_key", pubKey.Format(compress: true)) // ProtocolVersion >= 2
                : dict.Add("reward_beneficiary", Miner.ByteArray); /////// ProtocolVersion <= 1

            // For blocks with ProtocolVersion < 2, they had lacked TotalDifficulty values in their
            // serialization form.  As it was merely an unintended mistake, TotalDifficulty values
            // have been added from ProtocolVersion >= 2:
            if (ProtocolVersion >= 2)
            {
                dict = dict.Add(
                    "total_difficulty",
                    (IValue)(Bencodex.Types.Integer)TotalDifficulty
                );
            }

            return dict;
        }

        /// <summary>
        /// Derives a hash digest of <paramref name="hashAlgorithm"/> from the block metadata and
        /// <paramref name="nonce"/>.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use.</param>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        public ImmutableArray<byte> DerivePreEvaluationHash(
            HashAlgorithmType hashAlgorithm,
            Nonce nonce
        ) =>
            hashAlgorithm.Digest(Codec.Encode(MakeCandidateData(nonce))).ToImmutableArray();

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block
        /// <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use for calculating pre-evaluation
        /// hash.</param>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A pair of the mined nonce and the pre-evaluation hash that satisfy the
        /// block <see cref="Difficulty"/>.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) MineNonce(
            HashAlgorithmType hashAlgorithm,
            CancellationToken cancellationToken = default
        ) =>
            MineNonce(
                hashAlgorithm,
                Environment.ProcessorCount > 1 ? Environment.ProcessorCount / 2 : 1,
                cancellationToken
            );

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block
        /// <see cref="Difficulty"/>.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use for calculating pre-evaluation
        /// hash.</param>
        /// <param name="workers">The number of workers to run in parallel.
        /// Must be greater than zero.</param>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A pair of the mined nonce and the pre-evaluation hash that satisfy the
        /// block <see cref="Difficulty"/>.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public (Nonce Nonce, ImmutableArray<byte> PreEvaluationHash) MineNonce(
            HashAlgorithmType hashAlgorithm,
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
                return Hashcash.Answer(stamp, hashAlgorithm, Difficulty, seed, cancellationToken);
            }

            using var cts = new CancellationTokenSource();
            using CancellationTokenSource lts =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);
            int[] seeds = Enumerable.Range(0, workers).Select(_ => random.Next()).ToArray();
            Task<(Nonce Nonce, ImmutableArray<byte> Digest)>[] tasks = seeds.Select(seed =>
                Task.Run(
                    () => Hashcash.Answer(stamp, hashAlgorithm, Difficulty, seed, lts.Token),
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
