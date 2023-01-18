#nullable disable
using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Store
{
    public interface IStore : IDisposable
    {
        /// <summary>
        /// Lists chain IDs containing at least a single block.
        /// </summary>
        /// <returns>Chain IDs with at least a single block.</returns>
        IEnumerable<Guid> ListChainIds();

        /// <summary>
        /// Deletes an index, tx nonces, and state references in the given
        /// <paramref name="chainId"/>.
        /// It also deletes chain itself.  If there is no such <paramref name="chainId"/> it
        /// does nothing.
        /// </summary>
        /// <param name="chainId">The ID of chain to delete.</param>
        /// <remarks>This does not delete blocks or transactions that belong to the index of
        /// the <paramref name="chainId"/>, but only the index, tx nonces, and state references.
        /// </remarks>
        void DeleteChainId(Guid chainId);

        /// <summary>
        /// Gets the ID of the current canonical chain.
        /// </summary>
        /// <returns>The ID of the current canonical chain.  Maybe <see langword="null"/>.</returns>
        /// <seealso cref="SetCanonicalChainId(Guid)"/>
        Guid? GetCanonicalChainId();

        /// <summary>
        /// Sets the canonical chain.
        /// </summary>
        /// <param name="chainId">The ID of a new canonical chain.</param>
        /// <seealso cref="GetCanonicalChainId()"/>
        void SetCanonicalChainId(Guid chainId);

        long CountIndex(Guid chainId);

        /// <summary>
        /// Lists all block hashes in <paramref name="chainId"/>.
        /// </summary>
        /// <param name="chainId">The chain ID of the index that contains block hashes to
        /// iterate.</param>
        /// <param name="offset">The starting point to return block hashes.</param>
        /// <param name="limit">The maximum number of block hashes to get.</param>
        /// <returns>Block hashes in the index of the <paramref name="chainId"/>, in ascending
        /// order; the genesis block goes first, and the tip block goes last.</returns>
        IEnumerable<BlockHash> IterateIndexes(Guid chainId, int offset = 0, int? limit = null);

        /// <summary>
        /// Determines the block hash by its <paramref name="index"/>.
        /// </summary>
        /// <param name="chainId">The chain ID of the index that contains the block.</param>
        /// <param name="index">The index of the block to query its hash.  Negative indices mean
        /// the offset from the end.  For example, -1 means the topmost block.</param>
        /// <returns>The block hash of the index in the chain.  If there is no such index,
        /// it returns <see langword="null"/>.</returns>
        BlockHash? IndexBlockHash(Guid chainId, long index);

        /// <summary>
        /// Appends a block to a chain.
        /// </summary>
        /// <param name="chainId">The ID of a chain to append a block to.</param>
        /// <param name="hash">The hash of a block to append.  Assumes the block is already put
        /// into the store.</param>
        /// <returns>The index of the appended block.</returns>
        long AppendIndex(Guid chainId, BlockHash hash);

        /// <summary>
        /// Forks block indexes from
        /// <paramref name="sourceChainId"/> to
        /// <paramref name="destinationChainId"/>.
        /// </summary>
        /// <param name="sourceChainId">The chain ID of block indexes to
        /// fork.</param>
        /// <param name="destinationChainId">The chain ID of destination
        /// block indexes.</param>
        /// <param name="branchpoint">The branchpoint <see cref="Block{T}"/> to fork.</param>
        /// <seealso cref="IterateIndexes(Guid, int, int?)"/>
        /// <seealso cref="AppendIndex(Guid, BlockHash)"/>
        void ForkBlockIndexes(Guid sourceChainId, Guid destinationChainId, BlockHash branchpoint);

        Transaction<T> GetTransaction<T>(TxId txid)
            where T : IAction, new();

        /// <summary>
        /// Puts a given <see cref="Transaction{T}"/> to the store.  If the same transaction
        /// already exists in the store it does nothing.
        /// </summary>
        /// <param name="tx">A transaction to put into the store.</param>
        /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
        /// to <see cref="Transaction{T}"/>'s type parameter.</typeparam>
        void PutTransaction<T>(Transaction<T> tx)
            where T : IAction, new();

        /// <summary>
        /// Lists all block hashes in the store, regardless of their belonging chains.
        /// </summary>
        /// <returns>All block hashes in the store.</returns>
        IEnumerable<BlockHash> IterateBlockHashes();

        /// <summary>
        /// Gets the corresponding stored <see cref="Block{T}"/> to the given
        /// <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to find.</param>
        /// <returns>A found block, or <see langword="null"/> if no block having such
        /// <paramref name="blockHash"/> is stored.</returns>
        /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
        /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
        // FIXME: We need to get rid of <T> and let this method be agnostic about Block<T>,
        // which is too high-level abstraction for IStore.
        Block<T> GetBlock<T>(BlockHash blockHash)
            where T : IAction, new();

        /// <summary>
        /// Gets a stored block's <see cref="Block{T}.Index"/> by its <see cref="Block{T}.Hash"/>.
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to find.</param>
        /// <remarks>
        /// It provides only limited information, but can be called without any type parameter
        /// unlike <see cref="GetBlock{T}"/>.
        /// </remarks>
        /// <returns>A found block's <see cref="Block{T}.Index"/>, or <see langword="null"/> if
        /// no block having such <paramref name="blockHash"/> is stored.</returns>
        long? GetBlockIndex(BlockHash blockHash);

        /// <summary>
        /// Gets the corresponding stored <see cref="BlockDigest"/> to the given
        /// <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash"><see cref="Block{T}.Hash"/> to find.</param>
        /// <returns>A found <see cref="BlockDigest"/>, or <see langword="null"/> if no block
        /// having such <paramref name="blockHash"/> is stored.</returns>
        BlockDigest? GetBlockDigest(BlockHash blockHash);

        /// <summary>
        /// Puts the given <paramref name="block"/> in to the store.
        /// If the same block already exists in the store it does nothing.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to put into the store.
        /// </param>
        /// <typeparam name="T">An <see cref="IAction"/> class used with
        /// <paramref name="block"/>.</typeparam>
        void PutBlock<T>(Block<T> block)
            where T : IAction, new();

        /// <summary>
        /// Removes a block from the store.
        /// </summary>
        /// <param name="blockHash">The hash of a block to remove.</param>
        /// <returns><see langword="false"/> if such block does not exist. Otherwise
        /// <see langword="true"/>.</returns>
        bool DeleteBlock(BlockHash blockHash);

        /// <summary>
        /// Determines whether the <see cref="IStore"/> contains <see cref="Block{T}"/>
        /// the specified <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="blockHash">The <see cref="HashDigest{T}"/> of the <see cref="Block{T}"/> to
        /// check if it is in the <see cref="IStore"/>.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="IStore"/> contains <see cref="Block{T}"/> with
        /// the specified <paramref name="blockHash"/>; otherwise, <see langword="false"/>.
        /// </returns>
        bool ContainsBlock(BlockHash blockHash);

        /// <summary>
        /// Records the given <paramref name="txSuccess"/>.
        /// </summary>
        /// <remarks>If there is already the record for the same <see cref="TxExecution.BlockHash"/>
        /// and <see cref="TxExecution.TxId"/>, the record is silently overwritten.</remarks>
        /// <param name="txSuccess">The successful transaction execution summary to record.
        /// Must not be <see langword="null"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="txSuccess"/> is
        /// <see langword="null"/>.</exception>
        /// <seealso cref="PutTxExecution(Libplanet.Tx.TxFailure)"/>
        /// <seealso cref="GetTxExecution(BlockHash, TxId)"/>
        void PutTxExecution(TxSuccess txSuccess);

        /// <summary>
        /// Records the given <paramref name="txFailure"/>.
        /// </summary>
        /// <remarks>If there is already the record for the same <see cref="TxExecution.BlockHash"/>
        /// and <see cref="TxExecution.TxId"/>, the record is silently overwritten.</remarks>
        /// <param name="txFailure">The failed transaction execution summary to record.
        /// Must not be <see langword="null"/>.</param>
        /// <exception cref="ArgumentNullException">Thrown when <paramref name="txFailure"/> is
        /// <see langword="null"/>.</exception>
        /// <seealso cref="PutTxExecution(Libplanet.Tx.TxSuccess)"/>
        /// <seealso cref="GetTxExecution(BlockHash, TxId)"/>
        void PutTxExecution(TxFailure txFailure);

        /// <summary>
        /// Retrieves the recorded transaction execution summary.
        /// </summary>
        /// <param name="blockHash">The <see cref="Block{T}.Hash"/> of the recorded transaction
        /// execution to retrieve.</param>
        /// <param name="txid">The <see cref="Transaction{T}.Id"/> of the recorded transaction
        /// execution to retrieve.</param>
        /// <returns>The recorded transaction execution summary.  If it has been never recorded
        /// <see langword="null"/> is returned instead.</returns>
        /// <seealso cref="PutTxExecution(Libplanet.Tx.TxFailure)"/>
        /// <seealso cref="PutTxExecution(Libplanet.Tx.TxSuccess)"/>
        TxExecution GetTxExecution(BlockHash blockHash, TxId txid);

        /// <summary>
        /// Records a index for given pair <paramref name="txId"/> and <paramref name="blockHash"/>.
        /// If there exist a record for <paramref name="txId"/> already,
        /// it overwrites the record silently.
        /// </summary>
        /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/>.</param>
        /// <param name="blockHash">The <see cref="BlockHash"/> of the <see cref="Block{T}"/>.
        /// </param>
        void PutTxIdBlockHashIndex(TxId txId, BlockHash blockHash);

        /// <summary>
        /// Retrieves the <see cref="BlockHash"/> indexed by the <paramref name="txId"/>.
        /// </summary>
        /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/>.</param>
        /// <returns><see cref="BlockHash"/> if the index exists. Otherwise
        /// <see langword="null"/>.</returns>
        BlockHash? GetFirstTxIdBlockHashIndex(TxId txId);

        /// <summary>
        /// Retrieves <see cref="BlockHash"/>es indexed by the <paramref name="txId"/>.
        /// </summary>
        /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/>.</param>
        /// <returns><see cref="BlockHash"/>es if the index exists.</returns>
        IEnumerable<BlockHash> IterateTxIdBlockHashIndex(TxId txId);

        /// <summary>
        /// Deletes the index for the <paramref name="txId"/> and <paramref name="blockHash"/>.
        /// </summary>
        /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/>.</param>
        /// <param name="blockHash">The <see cref="BlockHash"/>
        /// of the <see cref="Block{T}"/>.</param>.
        void DeleteTxIdBlockHashIndex(TxId txId, BlockHash blockHash);

        /// <summary>
        /// Lists all <see cref="Address"/>es that have ever signed <see cref="Transaction{T}"/>,
        /// and their corresponding <see cref="Transaction{T}"/> nonces.
        /// </summary>
        /// <param name="chainId">The ID of the chain to list <see cref="Address"/>es and their
        /// <see cref="Transaction{T}"/> nonces.</param>
        /// <returns>Pairs of an <see cref="Address"/> and its tx nonce.  All nonces are greater
        /// than 0.  (If there are underlying entries having zero nonces these must be hidden.)
        /// </returns>
        /// <seealso cref="GetTxNonce(Guid, Address)"/>
        IEnumerable<KeyValuePair<Address, long>> ListTxNonces(Guid chainId);

        /// <summary>
        /// Gets <see cref="Transaction{T}"/> nonce of the
        /// <paramref name="address"/>.
        /// </summary>
        /// <param name="chainId">The ID of the chain to get <see cref="Transaction{T}"/> nonce.
        /// </param>
        /// <param name="address">The <see cref="Address"/> to get
        /// <see cref="Transaction{T}"/> nonce.
        /// </param>
        /// <returns>A <see cref="Transaction{T}"/> nonce. If there is no
        /// previous <see cref="Transaction{T}"/>, return 0.</returns>
        /// <seealso cref="IncreaseTxNonce(Guid, Address, long)"/>
        long GetTxNonce(Guid chainId, Address address);

        /// <summary>
        /// Increases (or decreases if a negative <paramref name="delta"/> is given)
        /// the tx nonce counter for <paramref name="signer"/>.
        /// </summary>
        /// <param name="chainId">The ID of the chain to increase
        /// <see cref="Transaction{T}"/> nonce.</param>
        /// <param name="signer">The address of the account to increase tx nonce.</param>
        /// <param name="delta">How many to increase the counter.  A negative number decreases
        /// the counter.  1 by default.</param>
        /// <seealso cref="GetTxNonce(Guid, Address)"/>
        void IncreaseTxNonce(Guid chainId, Address signer, long delta = 1);

        /// <summary>
        /// Determines whether the <see cref="IStore"/> contains <see cref="Transaction{T}"/>
        /// the specified <paramref name="txId"/>.
        /// </summary>
        /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/>
        /// to check if it is in the <see cref="IStore"/>.</param>
        /// <returns>
        /// <see langword="true"/> if the <see cref="IStore"/> contains <see cref="Transaction{T}"/>
        /// with the specified <paramref name="txId"/>; otherwise, <see langword="false"/>.
        /// </returns>
        bool ContainsTransaction(TxId txId);

        long CountBlocks();

        /// <summary>
        /// Forks <see cref="Transaction{T}"/> <see cref="Transaction{T}.Nonce"/>s from
        /// <paramref name="sourceChainId"/> to
        /// <paramref name="destinationChainId"/>.
        /// </summary>
        /// <param name="sourceChainId">The chain <see cref="BlockChain{T}.Id"/> of
        /// <see cref="Transaction{T}"/> <see cref="Transaction{T}.Nonce"/>s to fork.</param>
        /// <param name="destinationChainId">The chain <see cref="BlockChain{T}.Id"/> of destination
        /// <see cref="Transaction{T}"/> <see cref="Transaction{T}.Nonce"/>s.</param>
        void ForkTxNonces(Guid sourceChainId, Guid destinationChainId);

        /// <summary>
        /// Delete all non-canonical chains.
        /// </summary>
        /// <param name="noopWithoutCanon">
        /// Flag to determine whether the function throws exception
        /// when the canonical chain is not assigned.  <see langword="false"/> by default.
        /// If it set to <see langword="true"/>, does not throw exception when
        /// there is no canonical chain.
        /// Otherwise, throws <see cref="InvalidOperationException"/> when
        /// there is no canonical chain.
        /// </param>
        /// <exception cref="InvalidOperationException">
        /// Thrown when there is no canonical chain and
        /// <paramref name="noopWithoutCanon"/> is false.
        /// </exception>
        void PruneOutdatedChains(bool noopWithoutCanon = false);
    }
}
