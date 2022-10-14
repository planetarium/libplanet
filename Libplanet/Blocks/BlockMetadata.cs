using System;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using Bencodex;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block metadata without transactions or any proofs like nonce or hash.  This represents
    /// metadata of a block that is not yet mined nor proven.
    /// <para>To represent a block content including its metadata and transactions, use <see
    /// cref="BlockContent{T}"/>, which is its subclass.</para>
    /// </summary>
    /// <seealso cref="BlockContent{T}"/>
    public class BlockMetadata : IBlockMetadata
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = 4;

        /// <summary>
        /// The latest PoW protocol version.
        /// </summary>
        public const int PoWProtocolVersion = 3;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Codec Codec = new Codec();

        private int _protocolVersion = CurrentProtocolVersion;
        private long _index;
        private DateTimeOffset _timestamp;

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
        public BlockMetadata(IBlockMetadata metadata)
            : this(
                protocolVersion: metadata.ProtocolVersion,
                index: metadata.Index,
                timestamp: metadata.Timestamp,
                miner: metadata.Miner,
                publicKey: metadata.PublicKey,
                previousHash: metadata.PreviousHash,
                txHash: metadata.TxHash,
                lastCommit: metadata.LastCommit)
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
        /// </remarks>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <exception cref="InvalidBlockIndexException">Thrown when <paramref name="index"/> is
        /// less than zero.</exception>
        /// <param name="lastCommit">Goes to <see cref="IBlockMetadata.LastCommit"/>.</param>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <paramref name="previousHash"/> is not null while <paramref name="index"/> is zero
        /// or <paramref name="previousHash"/> is null while <paramref name="index"/> is nonzero.
        /// </exception>
        public BlockMetadata(
            long index,
            PublicKey publicKey,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            BlockCommit? lastCommit)
            : this(
                protocolVersion: CurrentProtocolVersion,
                index: index,
                timestamp: DateTimeOffset.UtcNow,
                miner: publicKey.ToAddress(),
                publicKey: publicKey,
                previousHash: previousHash,
                txHash: txHash,
                lastCommit: lastCommit)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> by manually filling in the fields for
        /// <see cref="BlockMetadata"/>.  All public constructors should be redirected to this one.
        /// </summary>
        /// <param name="protocolVersion">Goes to <see cref="IBlockMetadata.ProtocolVersion"/>.
        /// </param>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="timestamp">Goes to <see cref="IBlockMetadata.Timestamp"/>.</param>
        /// <param name="miner">Goes to <see cref="IBlockMetadata.Miner"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <param name="lastCommit">Goes to <see cref="IBlockMetadata.LastCommit"/>.</param>
        /// <exception cref="InvalidBlockIndexException">Thrown when <paramref name="index"/> is
        /// less than zero.</exception>
        /// <exception cref="InvalidBlockPublicKeyException">Thrown when the following conditions
        /// aren't met:
        /// <list type="bullet">
        ///   <item><description>If <paramref name="protocolVersion"/> >= 2,
        ///   <paramref name="miner"/> should match the derived address of
        ///   <paramref name="publicKey"/>.</description></item>
        ///   <item><description>Otherwise, <paramref name="publicKey"/> must be
        ///   <see langword="null"/>.</description></item>
        /// </list>
        /// </exception>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <paramref name="previousHash"/> is not null while <paramref name="index"/> is zero
        /// or <paramref name="previousHash"/> is null while <paramref name="index"/> is nonzero.
        /// </exception>
        internal BlockMetadata(
            int protocolVersion,
            long index,
            DateTimeOffset timestamp,
            Address miner,
            PublicKey? publicKey,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            BlockCommit? lastCommit)
        {
            ProtocolVersion = protocolVersion;
            Index = index;
            Timestamp = timestamp;
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
            LastCommit = lastCommit;
        }

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

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash { get; private set; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash { get; private set; }

        public BlockCommit? LastCommit { get; set; }

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

            return dict;
        }

        /// <summary>
        /// Derives a hash digest from the block metadata and <paramref name="nonce"/>.
        /// </summary>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        public HashDigest<SHA256> DerivePreEvaluationHash(Nonce nonce) =>
            HashDigest<SHA256>.DeriveFrom(Codec.Encode(MakeCandidateData(nonce)));

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying <paramref name="difficulty"/>.
        /// </summary>
        /// <param name="difficulty">The difficulty to target when mining
        /// <see cref="PreEvaluationBlockHeader.PreEvaluationHash"/>.</param>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A pair of the mined nonce and the pre-evaluation hash that satisfy the
        /// block <paramref name="difficulty"/>.</returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public (Nonce Nonce, HashDigest<SHA256> PreEvaluationHash) MineNonce(
            long difficulty,
            CancellationToken cancellationToken = default)
        {
            Hashcash.Stamp stamp = GetStampFunction();
            var random = new Random();
            int seed = random.Next();
            return Hashcash.Answer(
                stamp, difficulty, seed, cancellationToken);
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

            byte[] Stamp(Nonce nonce)
            {
                int nLen = nonce.ByteArray.Length;
                return stampPrefix
                    .Concat(Encoding.ASCII.GetBytes(nLen.ToString(CultureInfo.InvariantCulture)))
                    .Concat(colon)
                    .Concat(nonce.ToByteArray())
                    .Concat(stampSuffix)
                    .ToArray();
            }

            return Stamp;
        }
    }
}
