using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Tx;

namespace Libplanet.Types.Blocks
{
    /// <summary>
    /// A block content without any proofs like nonce or hash.  This represents contents of a
    /// block that is not yet mined.
    /// </summary>
    /// <remarks>Unlike other model types like <see cref="Block"/> or
    /// <see cref="Transaction"/>, this type is mutable.</remarks>
    public sealed class BlockContent : IBlockContent
    {
        private BlockMetadata _blockMetadata;
        private IReadOnlyList<Transaction> _transactions;

        /// <summary>
        /// Creates a new <see cref="BlockContent"/> instance filled with given
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
        /// by <see cref="Blockchain.BlockChain"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="metadata"/>'s <see cref="IBlockMetadata.TxHash"/> is inconsistent with
        /// <paramref name="transactions"/>.</exception>
        /// <seealso cref="BlockMetadata"/>
        public BlockContent(IBlockMetadata metadata, IEnumerable<Transaction> transactions)
            : this(new BlockMetadata(metadata), transactions)
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent"/> instance with given
        /// <paramref name="metadata"/> and without any <see cref="Transaction"/>s.
        /// </summary>
        /// <param name="metadata">The <see cref="BlockMetadata"/> to include in the block.</param>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="metadata"/>'s <see cref="IBlockMetadata.TxHash"/> is not
        /// <see lagnword="null"/>.</exception>
        public BlockContent(
            BlockMetadata metadata)
            : this(metadata, new List<Transaction>())
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent"/> instance with given
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
        /// by <see cref="Blockchain.BlockChain"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="ArgumentException">Thrown when <paramref name="transactions"/> is
        /// not ordered by <see cref="Transaction.Id"/>s.</exception>
        public BlockContent(
            BlockMetadata metadata,
            IEnumerable<Transaction> transactions)
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
            foreach (Transaction tx in transactions)
            {
                if (prevId is { } prev && prev.CompareTo(tx.Id) > 0)
                {
                    throw new ArgumentException(
                        $"Transactions must be ordered by their {nameof(Transaction.Id)}s.",
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

        /// <inheritdoc cref="IBlockMetadata.PreviousHash"/>
        public BlockHash? PreviousHash => _blockMetadata.PreviousHash;

        /// <inheritdoc cref="IBlockMetadata.TxHash"/>
        public HashDigest<SHA256>? TxHash => _blockMetadata.TxHash;

        /// <inheritdoc cref="IBlockMetadata.LastCommit"/>
        public BlockCommit? LastCommit => _blockMetadata.LastCommit;

        /// <inheritdoc cref="IBlockMetadata.Proof"/>
        public Proof? Proof => _blockMetadata.Proof;

        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction.Id"/>.</remarks>
        public IReadOnlyList<Transaction> Transactions => _transactions;

        IReadOnlyList<ITransaction> IBlockContent.Transactions => _transactions;

        /// <summary>
        /// Derives <see cref="IBlockMetadata.TxHash"/> from given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="transactions">The transactions to derive
        /// <see cref="IBlockMetadata.TxHash"/> from.  This must be ordered by
        /// <see cref="Transaction.Id"/>.</param>
        /// <returns>The derived <see cref="IBlockMetadata.TxHash"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when the <paramref name="transactions"/> are
        /// not ordered by their <see cref="Transaction.Id"/>s.</exception>
        public static HashDigest<SHA256>? DeriveTxHash(IEnumerable<Transaction> transactions)
        {
            TxId? prevId = null;
            SHA256 hasher = SHA256.Create();

            // Bencodex lists look like: l...e
            hasher.TransformBlock(new byte[] { 0x6c }, 0, 1, null, 0);  // "l"
            foreach (Transaction tx in transactions)
            {
                if (prevId is { } prev && prev.CompareTo(tx.Id) > 0)
                {
                    throw new ArgumentException(
                        $"Transactions must be ordered by their {nameof(Transaction.Id)}s.",
                        nameof(transactions)
                    );
                }

                byte[] payload = tx.Serialize();
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

        public PreEvaluationBlock Propose()
        {
            return new PreEvaluationBlock(
                this,
                _blockMetadata.DerivePreEvaluationHash(default));
        }
    }
}
