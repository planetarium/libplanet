using System;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.Security.Cryptography;
using Bencodex;
using Bencodex.Types;
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
        public const int CurrentProtocolVersion = 3;

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
            LastCommit = metadata.LastCommit;
            ProtocolVersion = metadata.ProtocolVersion;
            Index = metadata.Index;
            Timestamp = metadata.Timestamp;
            Proposer = metadata.Proposer;
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

        /// <inheritdoc cref="IBlockMetadata.Proposer"/>
        public Address Proposer
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
        /// <remarks>Its setter also updates the <see cref="Proposer"/> property too.</remarks>
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

        public BlockCommit? LastCommit { get; set; }

        /// <summary>
        /// Serializes data of a possible candidate shifted from it into a Bencodex dictionary.
        /// </summary>
        /// <returns>The serialized block content in a Bencodex dictionary.</returns>
        public Bencodex.Types.Dictionary MakeCandidateData()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("index", Index)
                .Add(
                    "timestamp",
                    Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture));

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
                : dict.Add("reward_beneficiary", Proposer.ByteArray); /////// ProtocolVersion <= 1

            // For blocks with ProtocolVersion < 2, they had lacked TotalDifficulty values in their
            // serialization form.  As it was merely an unintended mistake, TotalDifficulty values
            // have been added from ProtocolVersion >= 2:
            if (ProtocolVersion >= 2)
            {
                // obsolete
            }

            return dict;
        }
    }
}
