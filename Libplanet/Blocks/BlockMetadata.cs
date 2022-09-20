using System;
using System.Diagnostics.CodeAnalysis;
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
        public const int CurrentProtocolVersion = 4;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Codec Codec = new Codec();

        private int _protocolVersion = CurrentProtocolVersion;
        private long _index;
        private DateTimeOffset _timestamp = DateTimeOffset.UtcNow;
        private Address _miner;
        private PublicKey? _publicKey;
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
        public BlockMetadata(IBlockMetadata metadata)
        {
            PreviousMiner = metadata.PreviousMiner;
            LastCommit = metadata.LastCommit;
            ProtocolVersion = metadata.ProtocolVersion;
            Index = metadata.Index;
            Timestamp = metadata.Timestamp;
            Miner = metadata.Miner;
            PublicKey = metadata.PublicKey;
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
                        $"A block's protocol version cannot be less than zero: {value}.",
                        value
                    );
                }
                else if (value > CurrentProtocolVersion)
                {
                    string msg =
                        "A block's protocol version cannot be greater than " +
                        $"{CurrentProtocolVersion}: {value}.";
                    throw new InvalidBlockProtocolVersionException(msg, value);
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
                        $"The miner address {value} is not consistent" +
                        $"with its public key {pubKey}.",
                        pubKey
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

        public Address? PreviousMiner { get; set; }

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
            dict = PublicKey is { } pubKey && ProtocolVersion > 1
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
