using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Explorer.Indexing;

/// <summary>
/// An interface that provides indexing to Libplanet.Explorer.
/// </summary>
public interface IBlockChainIndex
{
    /// <summary>
    /// The height and the <see cref="BlockHash"/> of the most recently indexed
    /// <see cref="Block{T}"/>.
    /// </summary>
    /// <exception cref="IndexOutOfRangeException">Thrown if the index is empty.</exception>
    (long Index, BlockHash Hash) Tip { get; }

    /// <inheritdoc cref="IndexToBlockHash"/>
    BlockHash this[long index] => IndexToBlockHash(index);

    /// <inheritdoc cref="GetBlockHashesByRange"/>
    IEnumerable<BlockHash> this[Range indexRange] =>
        GetBlockHashesByRange(indexRange).Select(tuple => tuple.Hash);

    /// <summary>
    /// Get the height and the <see cref="BlockHash"/> of the most recently indexed
    /// <see cref="Block{T}"/>.
    /// </summary>
    /// <returns>A <see cref="ValueTuple{Long,BlockHash}"/> that contains the height and the
    /// <see cref="BlockHash"/> of the most recently indexed <see cref="Block{T}"/>.</returns>
    /// <exception cref="IndexOutOfRangeException">Thrown if the index is empty.</exception>
    Task<(long Index, BlockHash Hash)> GetTipAsync();

    /// <summary>
    /// Get the indexed height of the <see cref="Block{T}"/> with the given <paramref name="hash"/>.
    /// </summary>
    /// <param name="hash">The <see cref="BlockHash"/> of the desired indexed
    /// <see cref="Block{T}"/>.</param>
    /// <returns>The height of the block with the <paramref name="hash"/>.</returns>
    /// <exception cref="IndexOutOfRangeException">Thrown if the <see cref="Block{T}"/> with the
    /// given <paramref name="hash"/> is not indexed yet.</exception>
    long BlockHashToIndex(BlockHash hash);

    /// <inheritdoc cref="BlockHashToIndex"/>
    Task<long> BlockHashToIndexAsync(BlockHash hash);

    /// <summary>
    /// Gets the indexed <see cref="BlockHash"/> of the <see cref="Block{T}"/> at
    /// <paramref name="index"/> height.
    /// </summary>
    /// <param name="index">The height of the desired indexed <see cref="Block{T}"/>.</param>
    /// <returns>The indexed <see cref="BlockHash"/> of the <see cref="Block{T}"/> at
    /// <paramref name="index"/> height.</returns>
    /// <exception cref="IndexOutOfRangeException">Thrown if the index does not contain the
    /// <see cref="Block{T}"/> at the given <paramref name="index"/>.</exception>
    BlockHash IndexToBlockHash(long index);

    /// <inheritdoc cref="IndexToBlockHash"/>
    Task<BlockHash> IndexToBlockHashAsync(long index);

    /// <summary>
    /// Get the height and the <see cref="BlockHash"/> of the indexed <see cref="Block{T}"/>s in the
    /// given <paramref name="indexRange"/>.
    /// </summary>
    /// <param name="indexRange">The range of <see cref="Block{T}"/> height to look up.</param>
    /// <param name="desc">Whether to look up the index in the descending order.</param>
    /// <param name="producer">The producer of the block, if filtering by the producer is desired.
    /// </param>
    /// <returns>The height and the <see cref="BlockHash"/> of the indexed <see cref="Block{T}"/>s
    /// in the given <paramref name="indexRange"/>.</returns>
    /// <exception cref="IndexOutOfRangeException">Thrown if the given range exceeds the block
    /// count.</exception>
    IEnumerable<(long Index, BlockHash Hash)> GetBlockHashesByRange(
        Range indexRange, bool desc = false, Address? producer = null);

    /// <inheritdoc cref="GetBlockHashesByRange"/>
    IAsyncEnumerable<(long Index, BlockHash Hash)> GetBlockHashesByRangeAsync(
        Range indexRange, bool desc = false, Address? producer = null);

    /// <summary>
    /// Get the height and the <see cref="BlockHash"/> of the indexed <see cref="Block{T}"/>s
    /// starting at <paramref name="fromHeight"/>, at most <paramref name="maxCount"/>.
    /// </summary>
    /// <param name="fromHeight">The starting height.</param>
    /// <param name="maxCount">The upper limit of <see cref="Block{T}"/>s to look up.</param>
    /// <param name="desc">Whether to look up the index in the descending order.</param>
    /// <param name="producer">The producer of the block, if filtering by the producer is desired.
    /// </param>
    /// <returns>The height and the <see cref="BlockHash"/> of the indexed <see cref="Block{T}"/>s
    /// starting at <paramref name="fromHeight"/> and at most <paramref name="maxCount"/>.
    /// </returns>
    IEnumerable<(long Index, BlockHash Hash)> GetBlockHashesFromIndex(
        int? fromHeight = null, int? maxCount = null, bool desc = false, Address? producer = null);

    /// <inheritdoc cref="GetBlockHashesFromIndex"/>
    IAsyncEnumerable<(long Index, BlockHash Hash)> GetBlockHashesFromIndexAsync(
        int? fromHeight = null, int? maxCount = null, bool desc = false, Address? producer = null);

    /// <summary>
    /// Get the <see cref="TxId"/> of the indexed <see cref="Transaction{T}"/>s starting at
    /// <paramref name="fromNonce"/> that was signed by the <paramref name="signer"/>, at most
    /// <paramref name="maxCount"/>.
    /// </summary>
    /// <param name="signer">The signer of the <see cref="Transaction{T}"/>.</param>
    /// <param name="fromNonce">The tx nonce to start from (inclusive).</param>
    /// <param name="maxCount">The upper limit of <see cref="TxId"/>s to return.</param>
    /// <param name="desc">Whether to look up the <see cref="TxId"/>s in the descending order.
    /// </param>
    /// <returns>The <see cref="TxId"/> of the indexed <see cref="Transaction{T}"/>s signed by
    /// the <paramref name="signer"/> starting at <paramref name="fromNonce"/> and at most
    /// <paramref name="maxCount"/>.</returns>
    IEnumerable<TxId> GetSignedTxIdsByAddress(
            Address signer, int? fromNonce = null, int? maxCount = null, bool desc = false);

    /// <inheritdoc cref="GetSignedTxIdsByAddress"/>
    IAsyncEnumerable<TxId> GetSignedTxIdsByAddressAsync(
        Address signer, int? fromNonce = null, int? maxCount = null, bool desc = false);

    /// <summary>
    /// Get the <see cref="BlockHash"/> of the indexed <see cref="Block{T}"/> that contains the
    /// <see cref="Transaction{T}"/> with the <paramref name="txId"/>.
    /// </summary>
    /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/> to look up the
    /// containing <see cref="Block{T}"/>.</param>
    /// <returns>The <see cref="BlockHash"/> of the indexed <see cref="Block{T}"/> that contains the
    /// <see cref="Transaction{T}"/> with the <paramref name="txId"/>.</returns>
    /// <exception cref="IndexOutOfRangeException">Thrown if the <paramref name="txId"/> does not
    /// exist in the index.</exception>
    BlockHash GetContainedBlockHashByTxId(TxId txId);

    /// <inheritdoc cref="GetContainedBlockHashByTxId"/>
    Task<BlockHash> GetContainedBlockHashByTxIdAsync(TxId txId);

    /// <summary>
    /// Attempt to get the <see cref="BlockHash"/> of the indexed block that contains the
    /// <see cref="Transaction{T}"/> with the <paramref name="txId"/>, and return whether if the
    /// lookup was successful.
    /// </summary>
    /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/> to find the
    /// containing <see cref="Block{T}"/>.</param>
    /// <param name="containedBlock">The <see cref="BlockHash"/> of the indexed block that contains
    /// the <see cref="Transaction{T}"/> with the <paramref name="txId"/>, if it exists.</param>
    /// <returns>Whether the retrieval was successful.</returns>
    bool TryGetContainedBlockHashById(TxId txId, out BlockHash containedBlock);

    /// <summary>
    /// Attempt to get the <see cref="BlockHash"/> of the indexed block that contains the
    /// <see cref="Transaction{T}"/> with the <paramref name="txId"/>, and return the retrieved
    /// <see cref="BlockHash"/> if it exists, or <c>null</c> if it does not.
    /// </summary>
    /// <param name="txId">The <see cref="TxId"/> of the <see cref="Transaction{T}"/> to find the
    /// containing <see cref="Block{T}"/>.</param>
    /// <returns>The <see cref="BlockHash"/> of the block containing the
    /// <see cref="Transaction{T}"/> with the <paramref name="txId"/> if it exists, or <c>null</c>
    /// if it does not.</returns>
    Task<BlockHash?> TryGetContainedBlockHashByIdAsync(TxId txId);

    /// <summary>
    /// Get the last tx nonce of the <paramref name="address"/> that was indexed.
    /// </summary>
    /// <param name="address">The address to retrieve the tx nonce.</param>
    /// <returns>The last tx nonce of the <paramref name="address"/> that was indexed.</returns>
    /// <remarks>This method does not return the tx nonces of <see cref="Transaction{T}"/>s that
    /// are currently staged.</remarks>
    long? GetLastNonceByAddress(Address address);

    /// <inheritdoc cref="GetLastNonceByAddress"/>
    Task<long?> GetLastNonceByAddressAsync(Address address);

    /// <summary>
    /// Index the metadata of a <see cref="Block{T}"/> corresponding to the given
    /// <paramref name="blockDigest"/>.
    /// </summary>
    /// <param name="blockDigest">The block digest object to index.</param>
    /// <param name="txs">An <see cref="IEnumerable{T}"/> containing the <see cref="ITransaction"/>
    /// instances corresponding to <see cref="BlockDigest.TxIds"/> of given
    /// <paramref name="blockDigest"/>.</param>
    /// <param name="token">A token to mark the cancellation of processing.</param>
    /// <returns>A <see cref="Task"/> that represents this asynchronous method.</returns>
    /// <exception cref="IndexMismatchException">Thrown if the index already has seen a block in
    /// the height of the given block, but the hash of the indexed block and the given block is
    /// different.</exception>
    internal Task IndexAsync(
        BlockDigest blockDigest, IEnumerable<ITransaction> txs, CancellationToken token);

    internal Task SynchronizeForeverAsync<T>(
        IStore store, TimeSpan pollInterval, CancellationToken stoppingToken)
        where T : IAction, new();

    internal Task SynchronizeAsync<T>(IStore store, CancellationToken stoppingToken)
        where T : IAction, new();
}
