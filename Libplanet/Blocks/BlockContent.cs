#nullable enable
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
    /// partly changed fields, use <see cref="Clone()"/> method and property setters on a copy
    /// instead.</remarks>
    public sealed class BlockContent<T> : BlockMetadata, ICloneable
        where T : IAction, new()
    {
        private IReadOnlyList<Transaction<T>> _transactions = ImmutableArray<Transaction<T>>.Empty;

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance filled with the given
        /// <paramref name="metadata"/>'s contents and <paramref name="transactions"/>.
        /// </summary>
        /// <param name="metadata">The <see cref="BlockMetadata"/> to copy.</param>
        /// <param name="transactions">The transactions to include in the block.</param>
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
        /// <paramref name="metadata"/>'s <see cref="BlockMetadata.TxHash"/> is inconsistent with
        /// <paramref name="transactions"/>.</exception>
        public BlockContent(BlockMetadata metadata, IEnumerable<Transaction<T>> transactions)
        {
            ProtocolVersion = metadata.ProtocolVersion;
            Index = metadata.Index;
            Timestamp = metadata.Timestamp;
            Miner = metadata.Miner;
            Difficulty = metadata.Difficulty;
            TotalDifficulty = metadata.TotalDifficulty;
            PreviousHash = metadata.PreviousHash;
            Transactions = transactions.ToImmutableArray();
            TxHash = metadata.TxHash;
        }

        /// <summary>
        /// Creates a new <see cref="BlockContent{T}"/> instance filled with the given
        /// <paramref name="metadata"/>'s contents and zero transactions.
        /// </summary>
        /// <param name="metadata">The <see cref="BlockMetadata"/> to copy.</param>
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
        /// <paramref name="metadata"/>'s <see cref="BlockMetadata.TxHash"/> is not <c>null</c>.
        /// </exception>
        public BlockContent(BlockMetadata metadata)
            : this(metadata, Enumerable.Empty<Transaction<T>>())
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
                            throw new InvalidTxNonceException(tx.Id, lastNonce + 1, tx.Nonce, msg);
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
                base.TxHash = Block<T>.CalculateTxHashes(_transactions);
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
        /// Makes a copy of the <see cref="BlockContent{T}"/> instance.
        /// </summary>
        /// <returns>A copy of the instance.</returns>
        public new BlockContent<T> Clone() =>
            (BlockContent<T>)MemberwiseClone();

        /// <inheritdoc cref="ICloneable.Clone"/>
        object ICloneable.Clone() => Clone();

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
    }
}
