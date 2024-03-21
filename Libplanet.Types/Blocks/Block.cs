using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using Libplanet.Common;
using Libplanet.Common.JsonConverters;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// The complete block including all block contents and action evaluation.
    /// </summary>
    public sealed class Block : IPreEvaluationBlock, IBlockHeader, IEquatable<Block>
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = BlockMetadata.CurrentProtocolVersion;

        private readonly BlockHeader _header;
        private readonly PreEvaluationBlock _preEvaluationBlock;

        /// <summary>
        /// Creates a <see cref="Block"/> instance by combining a block <paramref name="header"/>
        /// and <paramref name="transactions"/>.
        /// </summary>
        /// <param name="header">The block header.</param>
        /// <param name="transactions">The transactions to include.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="header"/>'s <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="header"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given block
        /// <paramref name="header"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <paramref name="transactions"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="header"/> has an invalid
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>.</exception>
        public Block(IBlockHeader header, IEnumerable<Transaction> transactions)
            : this(
                new PreEvaluationBlock(header, transactions),
                (header.StateRootHash, header.Signature, header.Hash))
        {
        }

        /// <summary>
        /// Creates a <see cref="Block"/> instance by combining
        /// a <paramref name="preEvaluationBlock"/>, its corresponding
        /// <paramref name="proof.StateRootHash"/>, valid <paramref name="proof.Signature"/>,
        /// and correctly derived <paramref name="proof.Hash"/>.
        /// </summary>
        /// <param name="preEvaluationBlock">A pre-evaluation block.</param>
        /// <param name="proof">A triple of the state root hash, the block signature,
        /// and the block hash.</param>
        public Block(
            PreEvaluationBlock preEvaluationBlock,
            (
                HashDigest<SHA256> StateRootHash,
                ImmutableArray<byte>? Signature,
                BlockHash Hash
            ) proof
        )
        {
            _header = new BlockHeader(preEvaluationBlock.Header, proof);
            _preEvaluationBlock = preEvaluationBlock;
        }

        /// <summary>
        /// The <see cref="BlockHeader"/> of the block.
        /// </summary>
        [JsonIgnore]
        public BlockHeader Header => _header;

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _preEvaluationBlock.ProtocolVersion;

        /// <inheritdoc cref="IBlockExcerpt.Hash"/>
        public BlockHash Hash => Header.Hash;

        /// <inheritdoc cref="IBlockHeader.Signature"/>
        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        [JsonConverter(typeof(ByteArrayJsonConverter))]
        public ImmutableArray<byte>? Signature => Header.Signature;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public HashDigest<SHA256> PreEvaluationHash => _preEvaluationBlock.PreEvaluationHash;

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash => Header.StateRootHash;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _preEvaluationBlock.Index;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _preEvaluationBlock.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => _preEvaluationBlock.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _preEvaluationBlock.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _preEvaluationBlock.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _preEvaluationBlock.TxHash;

        /// <inheritdoc cref="IBlockMetadata.LastCommit"/>
        public BlockCommit? LastCommit => _preEvaluationBlock.LastCommit;

        /// <inheritdoc cref="IBlockMetadata.Proof"/>
        public Proof? Proof => _preEvaluationBlock.Proof;

        /// <inheritdoc cref="IBlockContent.Transactions"/>
        public IReadOnlyList<Transaction> Transactions => _preEvaluationBlock.Transactions;

        /// <inheritdoc cref="IBlockContent.Transactions"/>
        IReadOnlyList<ITransaction> IBlockContent.Transactions => _preEvaluationBlock.Transactions;

        /// <summary>
        /// Equivalent to <see cref="IEquatable{T}.Equals(T)"/>.
        /// </summary>
        /// <param name="left">A block.</param>
        /// <param name="right">Another block.</param>
        /// <returns><see langword="true"/> if two blocks are equal.
        /// Otherwise <see langword="false"/>.</returns>
        public static bool operator ==(Block? left, Block? right) =>
            Equals(left, right);

        /// <summary>
        /// Negation of <see cref="IEquatable{T}.Equals(T)"/>.
        /// </summary>
        /// <param name="left">A block.</param>
        /// <param name="right">Another block.</param>
        /// <returns><see langword="true"/> if two blocks are different.
        /// Otherwise <see langword="false"/>.</returns>
        public static bool operator !=(Block? left, Block? right) =>
            !Equals(left, right);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(Block? other)
        {
            if (other is null)
            {
                return false;
            }

            return ReferenceEquals(this, other) || Hash.Equals(other.Hash);
        }

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) =>
            obj is Block other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode() =>
            unchecked((17 * 31 + Hash.GetHashCode()) * 31);

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString() =>
            Hash.ToString();
    }
}
