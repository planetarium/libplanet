using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Tx;
using static Libplanet.Blocks.BlockMarshaler;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// <para>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </para>
        /// <para>
        /// All unprovided and/or <c>null</c> arguments are reassigned accordingly and redirected
        /// to a overloaded method with non-nullable parameters.  By default, a policy adhering
        /// block is produced with current timestamp and appended immediately to the chain.
        /// </para>
        /// </summary>
        /// <param name="miner">The <see cref="Address"/> of the miner that mines the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="append">Whether to append the mined block immediately after mining.</param>
        /// <param name="maxTransactions">The maximum number of transactions that a block can
        /// accept.  See also <see cref="IBlockPolicy{T}.GetMaxTransactionsPerBlock(long)"/>
        /// method.</param>
        /// <param name="maxTransactionsPerSigner">The maximum number of transactions
        /// that a block can accept per signer.  See also
        /// <see cref="IBlockPolicy{T}.GetMaxTransactionsPerSignerPerBlock(long)"/>.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public async Task<Block<T>> MineBlock(
            Address miner,
            DateTimeOffset? timestamp = null,
            bool? append = null,
            int? maxTransactions = null,
            int? maxTransactionsPerSigner = null,
            IComparer<Transaction<T>> txPriority = null,
            CancellationToken? cancellationToken = null) =>
#pragma warning disable SA1118
                await MineBlock(
                    miner: miner,
                    timestamp: timestamp ?? DateTimeOffset.UtcNow,
                    append: append ?? true,
                    maxTransactions: maxTransactions ??
                        Policy.GetMaxTransactionsPerBlock(Count),
                    maxTransactionsPerSigner: maxTransactionsPerSigner
                        ?? Policy.GetMaxTransactionsPerSignerPerBlock(Count),
                    txPriority: txPriority,
                    cancellationToken: cancellationToken ?? default(CancellationToken));
#pragma warning restore SA1118

        /// <summary>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="miner">The <see cref="Address"/> of the miner that mines the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="append">Whether to append the mined block immediately after mining.</param>
        /// <param name="maxTransactions">The maximum number of transactions that a block can
        /// accept.  See also <see cref="IBlockPolicy{T}.GetMaxTransactionsPerBlock(long)"/>
        /// method.</param>
        /// <param name="maxTransactionsPerSigner">The maximum number of transactions
        /// that a block can accept per signer.  See also
        /// <see cref="IBlockPolicy{T}.GetMaxTransactionsPerSignerPerBlock(long)"/>.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public async Task<Block<T>> MineBlock(
            Address miner,
            DateTimeOffset timestamp,
            bool append,
            int maxTransactions,
            int maxTransactionsPerSigner,
            IComparer<Transaction<T>> txPriority = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            using var cts = new CancellationTokenSource();
            using CancellationTokenSource cancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);

            void WatchTip(object target, (Block<T> OldTip, Block<T> NewTip) tip)
            {
                try
                {
                    cts.Cancel();
                }
                catch (ObjectDisposedException)
                {
                    // Ignore if mining was already finished.
                }
            }

            TipChanged += WatchTip;

            long index = Count;
            long difficulty = Policy.GetNextBlockDifficulty(this);
            BlockHash? prevHash = index > 0 ? Store.IndexBlockHash(Id, index - 1) : null;

            int sessionId = new System.Random().Next();
            int processId = Process.GetCurrentProcess().Id;
            _logger.Debug(
                "{SessionId}/{ProcessId}: Starting to mine block #{Index} with " +
                "difficulty {Difficulty} and previous hash {PreviousHash}...",
                sessionId,
                processId,
                index,
                difficulty,
                prevHash);

            HashAlgorithmType hashAlgorithm = Policy.GetHashAlgorithm(index);

            var metadata = new BlockMetadata
            {
                Index = index,
                Difficulty = difficulty,
                TotalDifficulty = Tip.TotalDifficulty + difficulty,
                Miner = miner,
                PreviousHash = prevHash,
                Timestamp = timestamp,
            };

            var transactionsToMine = GatherTransactionsToMine(
                metadata,
                maxTransactions: maxTransactions,
                maxTransactionsPerSigner: maxTransactionsPerSigner,
                txPriority: txPriority
            );

            _logger.Verbose(
                "{SessionId}/{ProcessId}: Mined block #{Index} will include " +
                "{TransactionsCount} transactions.",
                sessionId,
                processId,
                index,
                transactionsToMine.Count);

            var blockContent = new BlockContent<T>(metadata) { Transactions = transactionsToMine };
            PreEvaluationBlock<T> preEval;
            try
            {
                preEval = await Task.Run(
                    () => blockContent.Mine(hashAlgorithm, cancellationTokenSource.Token),
                    cancellationTokenSource.Token
                );
            }
            catch (OperationCanceledException)
            {
                if (cts.IsCancellationRequested)
                {
                    throw new OperationCanceledException(
                        "Mining canceled due to change of tip index.");
                }

                throw new OperationCanceledException(cancellationToken);
            }
            finally
            {
                TipChanged -= WatchTip;
            }

            (Block<T> block, IReadOnlyList<ActionEvaluation> actionEvaluations) =
                preEval.EvaluateActions(this);

            _logger.Debug(
                "{SessionId}/{ProcessId}: Mined block #{Index} {Hash} " +
                "with difficulty {Difficulty} and previous hash {PreviousHash}.",
                sessionId,
                processId,
                block.Index,
                block.Hash,
                block.Difficulty,
                block.PreviousHash);

            if (append)
            {
                Append(
                    block,
                    evaluateActions: true,
                    renderBlocks: true,
                    renderActions: true,
                    actionEvaluations: actionEvaluations);
            }

            return block;
        }

        /// <summary>
        /// Gathers <see cref="Transaction{T}"/>s for mining a next block
        /// from the current set of staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="metadata">The metadata of the block to be mined.</param>
        /// <param name="maxTransactions">The maximum number of <see cref="Transaction{T}"/>s
        /// allowed.</param>
        /// <param name="maxTransactionsPerSigner">The maximum number of
        /// <see cref="Transaction{T}"/>s with the same signer allowed.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>An <see cref="ImmutableList"/> of <see cref="Transaction{T}"/>s with its
        /// count not exceeding <paramref name="maxTransactions"/> and the number of
        /// <see cref="Transaction{T}"/>s in the list for each signer not exceeding
        /// <paramref name="maxTransactionsPerSigner"/>.</returns>
        internal ImmutableList<Transaction<T>> GatherTransactionsToMine(
            BlockMetadata metadata,
            int maxTransactions,
            int maxTransactionsPerSigner,
            IComparer<Transaction<T>> txPriority = null
        )
        {
            long index = Count;
            ImmutableList<Transaction<T>> stagedTransactions = ListStagedTransactions(txPriority);
            _logger.Information(
                "Gathering transactions to mine for block #{Index} from {TransactionsCount} " +
                "staged transactions...",
                index,
                stagedTransactions.Count);

            var transactionsToMine = new List<Transaction<T>>();

            // FIXME: The tx collection timeout should be configurable.
            DateTimeOffset timeout = DateTimeOffset.UtcNow + TimeSpan.FromSeconds(4);

            HashAlgorithmType hashAlgorithm = Policy.GetHashAlgorithm(index);

            // Makes an empty block payload to estimate the length of bytes without transactions.
            Bencodex.Types.Dictionary marshaledEmptyBlock = MarshalBlock(
                marshaledBlockHeader: MarshalBlockHeader(
                    marshaledPreEvaluatedBlockHeader: MarshalPreEvaluationBlockHeader(
                        marshaledMetadata: MarshalBlockMetadata(metadata),
                        nonce: default,
                        preEvaluationHash: new byte[hashAlgorithm.DigestSize].ToImmutableArray()
                    ),
                    stateRootHash: default,
                    hash: default
                ),
                marshaledTransactions: BlockMarshaler.MarshalTransactions(
                    Array.Empty<Transaction<T>>()
                )
            );
            var codec = new Codec();
            byte[] emptyBlockPayload = codec.Encode(marshaledEmptyBlock);
            int estimatedBytes = emptyBlockPayload.Length;
            int maxBlockBytes = Policy.GetMaxBlockBytes(index);

            var storedNonces = new Dictionary<Address, long>();
            var nextNonces = new Dictionary<Address, long>();
            var toMineCounts = new Dictionary<Address, int>();

            foreach (
                (Transaction<T> tx, int i) in stagedTransactions.Select((val, idx) => (val, idx)))
            {
                _logger.Verbose(
                    "Validating tx {Iter}/{Total} {Transaction} to include in block #{Index}...",
                    i,
                    stagedTransactions.Count,
                    tx.Id,
                    index);

                // We don't care about nonce ordering here because `.ListStagedTransactions()`
                // returns already ordered transactions by its nonce.
                if (!storedNonces.ContainsKey(tx.Signer))
                {
                    storedNonces[tx.Signer] = Store.GetTxNonce(Id, tx.Signer);
                    nextNonces[tx.Signer] = storedNonces[tx.Signer];
                    toMineCounts[tx.Signer] = 0;
                }

                if (transactionsToMine.Count >= maxTransactions)
                {
                    _logger.Information(
                        "Ignoring tx {Iter}/{Total} {Transaction} and the rest of the " +
                        "staged transactions due to the maximum number of " +
                        "transactions per block allowed hsa been reached: {Max}",
                        i,
                        stagedTransactions.Count,
                        tx.Id,
                        maxTransactions);
                    break;
                }

                if (Policy.ValidateNextBlockTx(this, tx) is { } tpve)
                {
                    _logger.Debug(
                        "Unstaging tx {Iter}/{Total} {Transaction} as it does not follow policy.",
                        i,
                        stagedTransactions.Count,
                        tx.Id);
                    UnstageTransaction(tx);
                    continue;
                }

                if (storedNonces[tx.Signer] <= tx.Nonce && tx.Nonce == nextNonces[tx.Signer])
                {
                    if (estimatedBytes + tx.BytesLength > maxBlockBytes)
                    {
                        _logger.Debug(
                            "Ignoring tx {Iter}/{Total} {Transaction} due to the maximum size " +
                            "allowed for a block: {CurrentEstimate}/{MaximumBlockBytes}",
                            i,
                            stagedTransactions.Count,
                            tx.Id,
                            estimatedBytes,
                            maxBlockBytes);
                        continue;
                    }

                    if (toMineCounts[tx.Signer] >= maxTransactionsPerSigner)
                    {
                        _logger.Debug(
                            "Ignoring tx {Iter}/{Total} {Transaction} due to the maximum number " +
                            "of transactions allowed per single signer per block " +
                            "has been reached: {Max}",
                            i,
                            stagedTransactions.Count,
                            tx.Id,
                            maxTransactionsPerSigner);
                        continue;
                    }

                    _logger.Verbose(
                        "Adding tx {Iter}/{Total} {Transaction} to the list of transactions " +
                        "to be mined.",
                        i,
                        stagedTransactions.Count,
                        tx.Id);
                    transactionsToMine.Add(tx);
                    nextNonces[tx.Signer] += 1;
                    toMineCounts[tx.Signer] += 1;
                    estimatedBytes += tx.BytesLength;
                }
                else if (tx.Nonce < storedNonces[tx.Signer])
                {
                    _logger.Debug(
                        "Discarding tx {Iter}/{Total} {Transaction} by {Signer} " +
                        "as it has lower nonce than the stored nonce: {Nonce}",
                        i,
                        stagedTransactions.Count,
                        tx.Id,
                        tx.Signer,
                        tx.Nonce);
                    UnstageTransaction(tx);
                }
                else
                {
                    _logger.Debug(
                        "Ignoring tx {Iter}/{Total} {Transaction} by {Signer} " +
                        "as it has higher nonce than expected: {Nonce}" +
                        i,
                        stagedTransactions.Count,
                        tx.Id,
                        tx.Signer,
                        tx.Nonce);
                }

                if (timeout < DateTimeOffset.UtcNow)
                {
                    _logger.Debug(
                        "Reached the time limit to collect staged transactions; other staged " +
                        "transactions will be mined later.");
                    break;
                }
            }

            if (transactionsToMine.Count < Policy.GetMinTransactionsPerBlock(index))
            {
                throw new BlockInsufficientTxsException(
                    transactionsToMine.Count,
                    Policy.GetMinTransactionsPerBlock(index),
                    "Below Minimum Transactions");
            }

            _logger.Information(
                "Gathered total of {TransactionsToMineCount} transactions to mine for " +
                "block #{Index} from {StagedTransactionsCount} staged transactions.",
                index,
                transactionsToMine.Count,
                stagedTransactions.Count);
            return transactionsToMine.ToImmutableList();
        }
    }
}
