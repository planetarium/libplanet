using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading;
using Libplanet.Action;
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
        /// <exception cref="InvalidTxPublicKeyException">Thrown when any tx signer is not derived
        /// from its its public key.</exception>
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
            : base(metadata)
        {
            Transactions = transactions.ToImmutableArray();
            TxHash = metadata.TxHash;
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance filled with the given
        /// <paramref name="metadata"/>'s contents and zero transactions.
        /// </summary>
        /// <param name="metadata">The <see cref="IBlockMetadata"/> to copy.</param>
        /// <exception cref="InvalidBlockProtocolVersionException">Thrown when
        /// the <paramref name="metadata"/>'s to set is <see cref="IBlockMetadata.ProtocolVersion"/>
        /// is less than 0, or greater than <see cref="BlockMetadata.CurrentProtocolVersion"/>,
        /// the latest known protocol version.</exception>
        /// <exception cref="InvalidBlockIndexException">Thrown when the value to set is negative.
        /// </exception>
        /// <exception cref="InvalidBlockDifficultyException">Thrown when the value to set is
        ///  is negative.</exception>
        /// <exception cref="InvalidBlockTotalDifficultyException">Thrown when
        /// the <paramref name="metadata"/>'s <see cref="IBlockMetadata.TotalDifficulty"/> is less
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
        /// <exception cref="InvalidBlockTxHashException">Thrown when the given
        /// <paramref name="metadata"/>'s <see cref="IBlockMetadata.TxHash"/> is not <c>null</c>.
        /// </exception>
        public BlockContent(IBlockMetadata metadata)
            : this(metadata, Enumerable.Empty<Transaction<T>>())
        {
        }

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
        /// <paramref name="content"/>'s <see cref="IBlockMetadata.TxHash"/> is not consistent with
        /// its <see cref="IBlockContent{T}.Transactions"/>.</exception>
        public BlockContent(IBlockContent<T> content)
            : this(content, content.Transactions)
        {
        }

        /// <summary>
        /// Creates a new empty <see cref="BlockContent{T}"/> instance.
        /// </summary>
        public BlockContent()
        {
        }

        /// <summary>
        /// Transactions belonging to the block.
        /// </summary>
        /// <remarks>This is always ordered by <see cref="Transaction{T}.Id"/>.
        /// <para>When <see cref="Transactions"/> is updated, <see cref="TxHash"/> is also updated
        /// together.</para></remarks>
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
        public IReadOnlyList<Transaction<T>> Transactions
        {
            get => _transactions;
            set
            {
                IEnumerable<IGrouping<Address, Transaction<T>>> signerTxs =
                    value.OrderBy(tx => tx.Nonce).GroupBy(tx => tx.Signer);
                BlockHash? genesisHash = null;
                foreach (IGrouping<Address, Transaction<T>> txs in signerTxs)
                {
                    long lastNonce = -1L;
                    foreach (Transaction<T> tx in txs)
                    {
                        // FIXME: Transaction<T> should disallow illegal states to be represented
                        // as its instances.  https://github.com/planetarium/libplanet/issues/1164
                        tx.Validate();

                        long nonce = tx.Nonce;
                        if (lastNonce >= 0 && lastNonce + 1 != nonce)
                        {
                            Address s = tx.Signer;
                            string msg = nonce <= lastNonce
                                ? $"The signer {s}'s nonce {nonce} was already consumed before."
                                : $"The signer {s}'s nonce {lastNonce} has to be added first.";
                            throw new InvalidTxNonceException(
                                tx.Id,
                                lastNonce + 1,
                                tx.Nonce,
                                msg,
                                null);
                        }

                        if (genesisHash is { } g && !tx.GenesisHash.Equals(g))
                        {
                            throw new InvalidTxGenesisHashException(
                                tx.Id,
                                g,
                                tx.GenesisHash,
                                $"Transactions in the block #{Index} are inconsistent."
                            );
                        }

                        lastNonce = nonce;
                        genesisHash = tx.GenesisHash;
                    }
                }

                _transactions = value.OrderBy(tx => tx.Id).ToImmutableArray();
                base.TxHash = DeriveTxHash(_transactions);
            }
        }

        /// <summary>
        /// The hash of all transactions in the block.  This is <c>null</c> if the block has no
        /// transactions.
        /// </summary>
        /// <exception cref="InvalidBlockTxHashException">Thrown when the <see cref="TxHash"/> is
        /// inconsistent with <see cref="Transactions"/>.</exception>
        // FIXME: Remove Block<T>.CalculateTxHashes() method, and move the logic behind it to here.
        public override HashDigest<SHA256>? TxHash
        {
            get => base.TxHash;
            set
            {
                HashDigest<SHA256>? prevValue = TxHash;
                if (prevValue is { } prev)
                {
                    if (!(value is { } v))
                    {
                        string msg =
                            $"As the block #{Index} has transactions, " +
                            $"its {nameof(TxHash)} must not be null.";
                        throw new InvalidBlockTxHashException(msg, value, prev);
                    }
                    else if (!v.Equals(prev))
                    {
                        throw new InvalidBlockTxHashException(
                            $"The block #{Index}'s {nameof(TxHash)} is invalid.",
                            value,
                            prev
                        );
                    }
                }
                else if (value is { })
                {
                    string msg =
                        $"As the block #{Index} has no transactions, " +
                        $"its {nameof(TxHash)} must be null.";
                    throw new InvalidBlockTxHashException(msg, value, prevValue);
                }
            }
        }

        /// <summary>
        /// Mines the PoW (proof-of-work) nonce satisfying the block
        /// <see cref="BlockMetadata.Difficulty"/>, and returns a valid
        /// <see cref="PreEvaluationBlock{T}"/> instance.
        /// </summary>
        /// <param name="hashAlgorithm">The hash algorithm to use for calculating pre-evaluation
        /// hash.</param>
        /// <param name="cancellationToken">An optional cancellation token used to propagate signal
        /// that this operation should be cancelled.</param>
        /// <returns>A <see cref="PreEvaluationBlock{T}"/> instance with a valid proof-of-work.
        /// </returns>
        /// <exception cref="OperationCanceledException">Thrown when the specified
        /// <paramref name="cancellationToken"/> received a cancellation request.</exception>
        public PreEvaluationBlock<T> Mine(
            HashAlgorithmType hashAlgorithm,
            CancellationToken cancellationToken = default
        ) =>
            new PreEvaluationBlock<T>(
                this,
                hashAlgorithm,
                MineNonce(hashAlgorithm, cancellationToken)
            );

        /// <summary>
        /// Derives <see cref="TxHash"/> from the given <paramref name="transactions"/>.
        /// </summary>
        /// <param name="transactions">The transactions to derive <see cref="TxHash"/> from.
        /// This must be ordered by <see cref="Transaction{T}.Id"/>.</param>
        /// <returns>The derived <see cref="TxHash"/>.</returns>
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
    }
}
