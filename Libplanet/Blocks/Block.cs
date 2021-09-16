#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex;
using Libplanet.Action;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// The complete block including all block contents and done proof-of-work and action
    /// evaluation.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    [Equals]
    public class Block<T> : IPreEvaluationBlock<T>, IBlockHeader
        where T : IAction, new()
    {
        /// <summary>
        /// The latest protocol version.
        /// </summary>
        public const int CurrentProtocolVersion = BlockMetadata.CurrentProtocolVersion;

        private static readonly Codec Codec = new Codec();

        private readonly PreEvaluationBlock<T> _preEvaluationBlock;
        private int? _bytesLength;

        /// <summary>
        /// Creates a <see cref="Block{T}"/> instance by combining a block <paramref name="header"/>
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
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="header"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="header"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxPublicKeyException">Thrown when any tx signer is not derived
        /// from its its public key.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given block
        /// <paramref name="header"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <paramref name="transactions"/>.</exception>
        /// <exception cref="InvalidBlockPreEvaluationHashException">Thrown when the given
        /// <paramref name="header"/> has an invalid
        /// <see cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>.</exception>
        /// <exception cref="InvalidBlockNonceException">Thrown when the given
        /// <paramref name="header"/>'s <see cref="IPreEvaluationBlockHeader.Nonce"/> does not
        /// satisfy the required <see cref="PreEvaluationBlockHeader.Difficulty"/>.</exception>
        public Block(IBlockHeader header, IEnumerable<Transaction<T>> transactions)
            : this(
                new PreEvaluationBlock<T>(
                    new BlockContent<T>(header, transactions),
                    header.HashAlgorithm,
                    header.Nonce,
                    header.PreEvaluationHash
                ),
                header.StateRootHash
            )
        {
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
        {
            _preEvaluationBlock = preEvaluationBlock;
            Header = new BlockHeader(preEvaluationBlock, stateRootHash);
        }

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        [IgnoreDuringEquals]
        public int ProtocolVersion => _preEvaluationBlock.ProtocolVersion;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.HashAlgorithm"/>
        public HashAlgorithmType HashAlgorithm => _preEvaluationBlock.HashAlgorithm;

        /// <inheritdoc cref="IBlockExcerpt.Hash"/>
        public BlockHash Hash => Header.Hash;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.PreEvaluationHash"/>
        public ImmutableArray<byte> PreEvaluationHash => _preEvaluationBlock.PreEvaluationHash;

        /// <inheritdoc cref="IBlockHeader.StateRootHash"/>
        public HashDigest<SHA256> StateRootHash => Header.StateRootHash;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        [IgnoreDuringEquals]
        public long Index => _preEvaluationBlock.Index;

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        [IgnoreDuringEquals]
        public long Difficulty => _preEvaluationBlock.Difficulty;

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        [IgnoreDuringEquals]
        public BigInteger TotalDifficulty => _preEvaluationBlock.TotalDifficulty;

        /// <inheritdoc cref="IPreEvaluationBlockHeader.Nonce"/>
        [IgnoreDuringEquals]
        public Nonce Nonce => _preEvaluationBlock.Nonce;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        [IgnoreDuringEquals]
        public Address Miner => _preEvaluationBlock.Miner;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        [IgnoreDuringEquals]
        public BlockHash? PreviousHash => _preEvaluationBlock.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        [IgnoreDuringEquals]
        public DateTimeOffset Timestamp => _preEvaluationBlock.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        [IgnoreDuringEquals]
        public HashDigest<SHA256>? TxHash => _preEvaluationBlock.TxHash;

        /// <inheritdoc cref="IBlockContent{T}.Transactions"/>
        [IgnoreDuringEquals]
        public IReadOnlyList<Transaction<T>> Transactions => _preEvaluationBlock.Transactions;

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
        public BlockHeader Header { get; }

        public static bool operator ==(Block<T> left, Block<T> right) =>
            Operator.Weave(left, right);

        public static bool operator !=(Block<T> left, Block<T> right) =>
            Operator.Weave(left, right);

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString() =>
            Hash.ToString();
    }
}
