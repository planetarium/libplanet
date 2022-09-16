using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
    /// <see cref="Transaction{T}"/>, this type is mutable.  To get a distinct instance with
    /// partly changed fields, use <see cref="BlockContent{T}(IBlockContent{T})"/> constructor and
    /// property setters on a copy instead.</remarks>
    public sealed class BlockContent<T> : BlockMetadata, IBlockContent<T>
        where T : IAction, new()
    {
        private IReadOnlyList<Transaction<T>> _transactions = ImmutableArray<Transaction<T>>.Empty;

        /// <summary>
        /// Creates a <see cref="BlockContent{T}"/> by copying the fields of another block
        /// <paramref name="content"/>.
        /// </summary>
        /// <param name="content">This source of the block content to copy.  This hasn't be
        /// a actual <see cref="BlockContent{T}"/> instance, but can be any object which implements
        /// <see cref="IBlockContent{T}"/> instance.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="content"/>'s <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        ///  is negative.</exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="content"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given block
        /// <paramref name="content"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <see cref="IBlockContent{T}.Transactions"/>.</exception>
        public BlockContent(IBlockContent<T> content)
            : this(content, content.Transactions)
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance filled with the given
        /// <paramref name="metadata"/>'s contents and <paramref name="transactions"/>.
        /// </summary>
        /// <param name="metadata">The <see cref="IBlockMetadata"/> to copy.</param>
        /// <param name="transactions">The transactions to include in the block.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the <paramref name="metadata"/>
        /// has a negative <see cref="IBlockMetadata.Index"/>.</exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.Difficulty"/> is negative.
        /// </exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
        /// than its <see cref="IBlockMetadata.Difficulty"/>.</exception>
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
        public BlockContent(IBlockMetadata metadata, IEnumerable<Transaction<T>> transactions)
            : this(
                protocolVersion: metadata.ProtocolVersion,
                index: metadata.Index,
                timestamp: metadata.Timestamp,
                miner: metadata.Miner,
                publicKey: metadata.PublicKey,
                difficulty: metadata.Difficulty,
                totalDifficulty: metadata.TotalDifficulty,
                previousHash: metadata.PreviousHash,
                txHash: metadata.TxHash,
                transactions: transactions)
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance with no
        /// <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <remarks>
        /// <see cref="IBlockMetadata.TxHash"/> and <see cref="IBlockMetadata.Miner"/> are
        /// automatically derived.
        /// </remarks>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="difficulty">Goes to <see cref="IBlockMetadata.Difficulty"/>.</param>
        /// <param name="totalDifficulty">Goes to <see cref="IBlockMetadata.TotalDifficulty"/>.
        /// </param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        public BlockContent(
            long index,
            PublicKey publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash)
            : this(
                index: index,
                publicKey: publicKey,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                transactions: new List<Transaction<T>>())
        {
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance with given
        /// <paramref name="transactions"/>.
        /// </summary>
        /// <remarks>
        /// <see cref="IBlockMetadata.TxHash"/> and <see cref="IBlockMetadata.Miner"/> are
        /// automatically derived.  Also <paramref name="transactions"/> are automatically
        /// sorted by <see cref="Transaction{T}.Id"/>.
        /// </remarks>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="difficulty">Goes to <see cref="IBlockMetadata.Difficulty"/>.</param>
        /// <param name="totalDifficulty">Goes to <see cref="IBlockMetadata.TotalDifficulty"/>.
        /// </param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="transactions">Goes to <see cref="IBlockContent{T}.Transactions"/>.</param>
        public BlockContent(
            long index,
            PublicKey publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            IReadOnlyList<Transaction<T>> transactions)
            : this(
                index: index,
                publicKey: publicKey,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                txHash: DeriveTxHash(transactions.OrderBy(tx => tx.Id).ToList()),
                transactions: transactions.OrderBy(tx => tx.Id).ToList())
        {
        }

        internal BlockContent(
            long index,
            PublicKey publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            IReadOnlyList<Transaction<T>> transactions)
            : this(
                protocolVersion: BlockMetadata.CurrentProtocolVersion,
                index: index,
                timestamp: DateTimeOffset.UtcNow,
                miner: publicKey.ToAddress(),
                publicKey: publicKey,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                txHash: txHash,
                transactions: transactions)
        {
        }

        /// <summary>
        /// Creates a <see cref="BlockContent{T}"/> by manually filling in the fields for
        /// <see cref="IBlockContent{T}"/>.  All public constructors gets redirected to this one.
        /// </summary>
        /// <param name="protocolVersion">Goes to <see cref="IBlockMetadata.ProtocolVersion"/>.
        /// </param>
        /// <param name="index">Goes to <see cref="IBlockMetadata.Index"/>.</param>
        /// <param name="timestamp">Goes to <see cref="IBlockMetadata.Timestamp"/>.</param>
        /// <param name="miner">Goes to <see cref="IBlockMetadata.Miner"/>.</param>
        /// <param name="publicKey">Goes to <see cref="IBlockMetadata.PublicKey"/>.</param>
        /// <param name="difficulty">Goes to <see cref="IBlockMetadata.Difficulty"/>.</param>
        /// <param name="totalDifficulty">Goes to <see cref="IBlockMetadata.TotalDifficulty"/>.
        /// </param>
        /// <param name="previousHash">Goes to <see cref="IBlockMetadata.PreviousHash"/>.</param>
        /// <param name="txHash">Goes to <see cref="IBlockMetadata.TxHash"/>.</param>
        /// <param name="transactions">Goes to <see cref="IBlockContent{T}.Transactions"/>.</param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="transactions"/> is
        /// not ordered by <see cref="Transaction{T}.Id"/>.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when <paramref name="index"/> is
        /// less than zero.</exception>
        /// <exception cref="InvalidBlockPublicKeyException">Thrown when any of the following
        /// conditions is not satisfied.
        /// <list type="bullet">
        ///   <item><description>If <paramref name="protocolVersion"/> >= 2,
        ///   <paramref name="miner"/> should match the derived address of
        ///   <paramref name="publicKey"/>.</description></item>
        ///   <item><description>Otherwise, <paramref name="publicKey"/> must be
        ///   <see langword="null"/>.</description></item>
        /// </list>
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when
        /// <paramref name="difficulty"/> is less than zero.</exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when either
        /// <paramref name="totalDifficulty"/> is less than zero or less than
        /// <paramref name="difficulty"/>.</exception>
        /// <exception cref="InvalidBlockPreviousHashException">Thrown when
        /// <paramref name="previousHash"/> is not null while <paramref name="index"/> is zero
        /// or <paramref name="previousHash"/> is null while <paramref name="index"/> is nonzero.
        /// </exception>
        /// <exception cref="InvalidBlockTxHashException">Thrown when <paramref name="txHash"/>
        /// does not match the one derived from <paramref name="transactions"/>.</exception>
        internal BlockContent(
            int protocolVersion,
            long index,
            DateTimeOffset timestamp,
            Address miner,
            PublicKey? publicKey,
            long difficulty,
            BigInteger totalDifficulty,
            BlockHash? previousHash,
            HashDigest<SHA256>? txHash,
            IEnumerable<Transaction<T>> transactions)
            : base(
                protocolVersion: protocolVersion,
                index: index,
                timestamp: timestamp,
                miner: miner,
                publicKey: publicKey,
                difficulty: difficulty,
                totalDifficulty: totalDifficulty,
                previousHash: previousHash,
                txHash: txHash)
        {
            Transactions = transactions.ToImmutableList();
            ValidateTxHash();
        }

        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.</remarks>
        /// <exception cref="InvalidTxSignatureException">Thrown when any tx signature is invalid or
        /// not signed by its signer.</exception>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        public IReadOnlyList<Transaction<T>> Transactions
        {
            get => _transactions;
            set
            {
                value.ValidateTxNonces(Index);
                TxId? prevId = null;
                foreach (Transaction<T> tx in value)
                {
                    // FIXME: Transaction<T> should disallow illegal states to be represented
                    // as its instances.  https://github.com/planetarium/libplanet/issues/1164
                    tx.Validate();
                    if (prevId is { } prev && prev.CompareTo(tx.Id) > 0)
                    {
                        throw new ArgumentException(
                            $"Transactions must be ordered by their {nameof(Transaction<T>.Id)}s.",
                            nameof(value));
                    }

                    prevId = tx.Id;
                }

                _transactions = value;
            }
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
            new PreEvaluationBlock<T>(this, MineNonce(cancellationToken));

        /// <summary>
        /// Derives <see cref="IBlockMetadata.TxHash"/> from given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="transactions">The transactions to derive
        /// <see cref="IBlockMetadata.TxHash"/> from.  This must be ordered by
        /// <see cref="Transaction{T}.Id"/>.</param>
        /// <returns>The derived <see cref="IBlockMetadata.TxHash"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when the <paramref name="transactions"/> are
        /// not ordered by their <see cref="Transaction{T}.Id"/>s.</exception>
        internal static HashDigest<SHA256>? DeriveTxHash(IEnumerable<Transaction<T>> transactions)
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

        private void ValidateTxHash()
        {
            HashDigest<SHA256>? derivedTxHash = DeriveTxHash(Transactions);
            if (!((TxHash is { } a && derivedTxHash is { } b && a.Equals(b)) ||
                (TxHash is null && derivedTxHash is null)))
            {
                throw new InvalidBlockTxHashException(
                    $"The block #{Index}'s {nameof(TxHash)} is invalid.",
                    TxHash,
                    derivedTxHash);
            }
        }
    }
}
