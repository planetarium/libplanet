using System;
using System.Globalization;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Common;
using Libplanet.Crypto;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// A block metadata without transactions or any proof hash.  This represents
    /// metadata of a block that is not yet mined nor proven.
    /// <para>To represent a block content including its metadata and transactions, use
    /// <see cref="BlockContent"/>.</para>
    /// </summary>
    /// <seealso cref="BlockContent"/>
    public class BlockMetadata : IBlockMetadata
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = 6;

        /// <summary>
        /// The last PoW protocol version.
        /// </summary>
        public const int PoWProtocolVersion = 3;

        /// <summary>
        /// The last protocol version with union state model.
        /// </summary>
        public const int LegacyStateVersion = 4;

        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private static readonly Codec Codec = new Codec();

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
        /// PublicKey?, BlockHash?, HashDigest{SHA256}?, BlockCommit?)"/>.  Refer to the
        /// aforementioned constructor to see the full list of <see cref="Exception"/>s
        /// that may be thrown.
        /// </para>
        /// </remarks>
        /// <param name="metadata">The source block metadata to copy.  This needn't be
        /// an actual <see cref="BlockMetadata"/> instance, but can be any object which
        /// implements <see cref="IBlockMetadata"/>.</param>
        /// <seealso cref="BlockMetadata(int, long, DateTimeOffset, Address,
        /// PublicKey?, BlockHash?, HashDigest{SHA256}?, BlockCommit?)"/>
        public BlockMetadata(IBlockMetadata metadata)
            : this(
                protocolVersion: metadata.ProtocolVersion,
                index: metadata.Index,
                timestamp: metadata.Timestamp,
                miner: metadata.Miner,
                publicKey: metadata.PublicKey,
                previousHash: metadata.PreviousHash,
                txHash: metadata.TxHash,
                lastCommit: metadata.LastCommit,
                proof: metadata.Proof)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> with
        /// <see cref="BlockMetadata.CurrentProtocolVersion"/> as its
        /// <see cref="IBlockMetadata.ProtocolVersion"/>.
        /// </summary>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="timestamp">Goes to <see cref="IBlockMetadata.Timestamp"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <param name="lastCommit">Goes to <see cref="IBlockMetadata.LastCommit"/>.</param>
        /// <param name="proof">Goes to <see cref="IBlockMetadata.Proof"/>.</param>
        /// <seealso cref="BlockMetadata(int, long, DateTimeOffset, Address,
        /// PublicKey?, BlockHash?, HashDigest{SHA256}?, BlockCommit?, Proof?)"/>
        public BlockMetadata(
            long index,
            DateTimeOffset timestamp,
            PublicKey publicKey,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            BlockCommit? lastCommit,
            Proof? proof)
            : this(
                protocolVersion: CurrentProtocolVersion,
                index: index,
                timestamp: timestamp,
                miner: publicKey.Address,
                publicKey: publicKey,
                previousHash: previousHash,
                txHash: txHash,
                lastCommit: lastCommit,
                proof: proof)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockMetadata"/> by manually filling in the fields for
        /// <see cref="BlockMetadata"/>.  All other public constructors are redirected to this one.
        /// </summary>
        /// <remarks>
        /// Except for debugging and/or testing purposes, this shouldn't be called directly.
        /// </remarks>
        /// <param name="protocolVersion">Goes to <see cref="IBlockMetadata.ProtocolVersion"/>.
        /// </param>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="timestamp">Goes to <see cref="IBlockMetadata.Timestamp"/>.</param>
        /// <param name="miner">Goes to <see cref="IBlockMetadata.Miner"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <param name="lastCommit">Goes to <see cref="IBlockMetadata.LastCommit"/>.</param>
        /// <param name="proof">Goes to <see cref="IBlockMetadata.Proof"/>.</param>
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
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            BlockCommit? lastCommit,
            Proof? proof)
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
                Miner = miner == p.Address
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

            // Previous hash validity checks.
            if (index == 0 ^ previousHash is null)
            {
                throw new InvalidBlockPreviousHashException(
                    $"{nameof(previousHash)} can be null if and only if {nameof(index)} is 0.");
            }
            else
            {
                PreviousHash = previousHash;
            }

            // LastCommit checks.
            if (lastCommit is { } commit)
            {
                if (commit.Height != index - 1)
                {
                    throw new InvalidBlockLastCommitException(
                        $"The lastcommit height {commit.Height} of block #{index} " +
                        $"should match the previous block's index {index - 1}.");
                }
                else if (!commit.BlockHash.Equals(previousHash))
                {
                    throw new InvalidBlockLastCommitException(
                        $"The lastcommit blockhash {commit.BlockHash} of block #{index} " +
                        $"should match the previous block's hash {previousHash}.");
                }
            }

            TxHash = txHash;
            LastCommit = lastCommit;
            Proof = proof;
        }

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

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash { get; }

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash { get; }

        /// <inheritdoc cref="IBlockMetadata.LastCommit"/>
        public BlockCommit? LastCommit { get; }

        /// <inheritdoc cref="IBlockMetadata.Proof"/>
        public Proof? Proof { get; }

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

            if (LastCommit is { } lastCommit)
            {
                dict = dict.Add("last_commit", lastCommit.ToHash().ByteArray);
            }

            if (Proof is { } proof)
            {
                dict = dict.Add("proof", proof.ByteArray);
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
                : dict.Add("reward_beneficiary", Miner.Bencoded); /////// ProtocolVersion <= 1

            return dict;
        }

        /// <summary>
        /// Derives a hash digest from the block metadata and <paramref name="nonce"/>.
        /// </summary>
        /// <param name="nonce">The proof-of-work nonce.</param>
        /// <returns>A pre-evaluation block hash.</returns>
        public HashDigest<SHA256> DerivePreEvaluationHash(Nonce nonce) =>
            HashDigest<SHA256>.DeriveFrom(Codec.Encode(MakeCandidateData(nonce)));
    }
}
