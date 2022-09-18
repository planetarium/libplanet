using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A block content without any proofs like nonce or hash.  This represents contents of a
    /// block that is not yet mined.
    /// </summary>
    /// <typeparam name="T">A class implementing <see cref="IAction"/> to include.  This type
    /// parameter is aligned with <see cref="Transaction{T}"/>'s type parameter.</typeparam>
    /// <remarks>Unlike other model types like <see cref="Block{T}"/> or
    /// <see cref="Transaction{T}"/>, this type is mutable.</remarks>
    public sealed class BlockContent<T> : IBlockContent<T>
        where T : IAction, new()
    {
        private BlockMetadata _blockMetadata;
        private IReadOnlyList<Transaction<T>> _transactions;

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance filled with given
        /// <paramref name="metadata"/> and <paramref name="transactions"/>.
        /// </summary>
        /// <remarks>
        /// This creates a new instance of <see cref="BlockMetadata"/> to check the validity
        /// of <paramref name="metadata"/>, hence throws any <see cref="Exception"/>s that may
        /// arise from a <see cref="BlockMetadata"/>'s constructor in addition to the ones
        /// explicitly listed below.
        /// </remarks>
        /// <param name="metadata">The <see cref="IBlockMetadata"/> to copy.</param>
        /// <param name="transactions">The transactions to include in the block.</param>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="metadata"/>'s <see cref="IBlockMetadata.TxHash"/> is inconsistent with
        /// <paramref name="transactions"/>.</exception>
        /// <seealso cref="BlockMetadata"/>
        public BlockContent(IBlockMetadata metadata, IEnumerable<Transaction<T>> transactions)
            : this(new BlockMetadata(metadata), transactions)
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance with given
        /// <paramref name="metadata"/> and without any <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="metadata">The <see cref="BlockMetadata"/> to include in the block.</param>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="metadata"/>'s <see cref="IBlockMetadata.TxHash"/> is not
        /// <see lagnword="null"/>.</exception>
        public BlockContent(
            BlockMetadata metadata)
            : this(metadata, new List<Transaction<T>>())
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance with given
        /// <paramref name="metadata"/> and <paramref name="transactions"/>.
        /// </summary>
        /// <param name="metadata">The <see cref="BlockMetadata"/> to include in the block.</param>
        /// <param name="transactions">The transactions to include in the block.</param>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="metadata"/>'s <see cref="IBlockMetadata.TxHash"/> is inconsistent with
        /// <paramref name="transactions"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid
        /// or not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="transactions"/> is
        /// not ordered by <see cref="Transaction{T}.Id"/>s.</exception>
        public BlockContent(
            BlockMetadata metadata,
            IEnumerable<Transaction<T>> transactions)
        {
            // Check if TxHash provided by metadata is valid.
            HashDigest<SHA256>? derivedTxHash = DeriveTxHash(transactions);
            if (!((metadata.TxHash is { } a && derivedTxHash is { } b && a.Equals(b)) ||
                (metadata.TxHash is null && derivedTxHash is null)))
            {
                throw new InvalidBlockTxHashException(
                    $"The block #{metadata.Index}'s {nameof(metadata.TxHash)} is invalid.",
                    metadata.TxHash,
                    derivedTxHash);
            }

            // Check if transactions are ordered with valid nonces.
            transactions.ValidateTxNonces(metadata.Index);
            TxId? prevId = null;
            foreach (Transaction<T> tx in transactions)
            {
                // FIXME: Transaction<T> should disallow illegal states to be represented
                // as its instances.  https://github.com/planetarium/libplanet/issues/1164
                tx.Validate();
                if (prevId is { } prev && prev.CompareTo(tx.Id) > 0)
                {
                    throw new ArgumentException(
                        $"Transactions must be ordered by their {nameof(Transaction<T>.Id)}s.",
                        nameof(transactions));
                }

                prevId = tx.Id;
            }

            _blockMetadata = metadata;
            _transactions = transactions.ToImmutableList();
        }

        /// <summary>
        /// Internal <see cref="BlockMetadata"/>.
        /// </summary>
        public BlockMetadata Metadata => _blockMetadata;

        /// <inheritdoc cref="IBlockMetadata.ProtocolVersion"/>
        public int ProtocolVersion => _blockMetadata.ProtocolVersion;

        /// <inheritdoc cref="IBlockMetadata.Index"/>
        public long Index => _blockMetadata.Index;

        /// <inheritdoc cref="IBlockMetadata.Timestamp"/>
        public DateTimeOffset Timestamp => _blockMetadata.Timestamp;

        /// <inheritdoc cref="IBlockMetadata.Miner"/>
        public Address Miner => _blockMetadata.Miner;

        /// <inheritdoc cref="IBlockMetadata.PublicKey"/>
        public PublicKey? PublicKey => _blockMetadata.PublicKey;

        /// <inheritdoc cref="IBlockMetadata.Difficulty"/>
        public long Difficulty => _blockMetadata.Difficulty;

        /// <inheritdoc cref="IBlockMetadata.TotalDifficulty"/>
        public BigInteger TotalDifficulty => _blockMetadata.TotalDifficulty;

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _blockMetadata.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _blockMetadata.TxHash;

        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.</remarks>
        public IReadOnlyList<Transaction<T>> Transactions => _transactions;

        /// <summary>
        /// Derives <see cref="IBlockMetadata.TxHash"/> from given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="transactions">The transactions to derive
        /// <see cref="IBlockMetadata.TxHash"/> from.  This must be ordered by
        /// <see cref="Transaction{T}.Id"/>.</param>
        /// <returns>The derived <see cref="IBlockMetadata.TxHash"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when the <paramref name="transactions"/> are
        /// not ordered by their <see cref="Transaction{T}.Id"/>s.</exception>
        public static HashDigest<SHA256>? DeriveTxHash(IEnumerable<Transaction<T>> transactions)
        {
            TxId? prevId = null;
            SHA256 hasher = SHA256.Create();

            // Bencodex lists look like: l...e
            hasher.TransformBlock(new byte[] { 0x6c }, 0, 1, null, 0);  // "l"
            foreach (Transaction<T> tx in transactions)
            {
                if (prevId is { } prev && prev.CompareTo(tx.Id) > 0)
                {
                    throw new ArgumentException(
                        $"Transactions must be ordered by their {nameof(Transaction<T>.Id)}s.",
                        nameof(transactions)
                    );
                }

                byte[] payload = tx.Serialize(true);
                hasher.TransformBlock(payload, 0, payload.Length, null, 0);
                prevId = tx.Id;
            }

            if (prevId is null)
            {
                return null;
            }

            hasher.TransformFinalBlock(new byte[] { 0x65 }, 0, 1);  // "e"
            return new HashDigest<SHA256>(hasher.Hash);
        }

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block
        /// <see cref="BlockMetadata.Difficulty"/>, and returns a valid
        /// <see cref="PreEvaluationBlock{T}"/> instance.
        /// </summary>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A <see cref="PreEvaluationBlock{T}"/> instance with a valid proof-of-work.
        /// </returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public PreEvaluationBlock<T> Mine(CancellationToken cancellationToken = default) =>
            new PreEvaluationBlock<T>(this, _blockMetadata.MineNonce(cancellationToken));
    }
}
