#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// <para>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </para>
        /// <para>
        /// All unprovided and/or <see langword="null"/> arguments are reassigned accordingly
        /// and redirected to a overloaded method with non-nullable parameters.  By default,
        /// a policy adhering block is produced with current timestamp and appended immediately
        /// to the chain.
        /// </para>
        /// </summary>
        /// <param name="miner">The miner's <see cref="PublicKey"/> that mines the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="append">Whether to append the mined block immediately after mining.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public async Task<Block<T>> MineBlock(
            PrivateKey miner,
            DateTimeOffset? timestamp = null,
            bool? append = null,
            IComparer<Transaction<T>> txPriority = null,
            CancellationToken? cancellationToken = null) =>
                await MineBlock(
                    miner: miner,
                    timestamp: timestamp ?? DateTimeOffset.UtcNow,
                    append: append ?? true,
                    maxTransactionsBytes: Policy.GetMaxTransactionsBytes(Count),
                    maxTransactions: Policy.GetMaxTransactionsPerBlock(Count),
                    maxTransactionsPerSigner: Policy.GetMaxTransactionsPerSignerPerBlock(Count),
                    txPriority: txPriority,
                    cancellationToken: cancellationToken ?? default);

        /// <summary>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="miner">The miner's <see cref="PublicKey"/> that mines the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="append">Whether to append the mined block immediately after mining.</param>
        /// <param name="maxTransactionsBytes">The maximum number of bytes a block can have.
        /// See also <see cref="IBlockPolicy{T}.GetMaxTransactionsBytes(long)"/>.</param>
        /// <param name="maxTransactions">The maximum number of transactions that a block can
        /// accept.  See also <see cref="IBlockPolicy{T}.GetMaxTransactionsPerBlock(long)"/>.
        /// </param>
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
        internal async Task<Block<T>> MineBlock(
            PrivateKey miner,
            DateTimeOffset timestamp,
            bool append,
            long maxTransactionsBytes,
            int maxTransactions,
            int maxTransactionsPerSigner,
            IComparer<Transaction<T>> txPriority = null,
            CancellationToken cancellationToken = default)
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

            var transactionsToMine = GatherTransactionsToMine(
                maxTransactionsBytes: maxTransactionsBytes,
                maxTransactions: maxTransactions,
                maxTransactionsPerSigner: maxTransactionsPerSigner,
                txPriority: txPriority
            );

            if (transactionsToMine.Count < Policy.GetMinTransactionsPerBlock(index))
            {
                cts.Cancel();
                throw new OperationCanceledException(
                    $"Mining canceled due to insufficient number of gathered transactions " +
                    $"to mine for the requirement of {Policy.GetMinTransactionsPerBlock(index)} " +
                    $"given by the policy: {transactionsToMine.Count}");
            }

            _logger.Verbose(
                "{SessionId}/{ProcessId}: Mined block #{Index} will include " +
                "{TxCount} transactions",
                sessionId,
                processId,
                index,
                transactionsToMine.Count);

            // FIXME: Should use automated public constructor.
            // Manual internal constructor is used purely for testing custom timestamps.
            var transactions = transactionsToMine.OrderBy(tx => tx.Id).ToList();
            var blockContent = new BlockContent<T>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: index,
                    timestamp: timestamp,
                    miner: miner.ToAddress(),
                    publicKey: miner.PublicKey,
                    difficulty: difficulty,
                    totalDifficulty: Tip.TotalDifficulty + difficulty,
                    previousHash: prevHash,
                    txHash: BlockContent<T>.DeriveTxHash(transactions)),
                transactions: transactions);
            PreEvaluationBlock<T> preEval;

            TipChanged += WatchTip;

            try
            {
                preEval = await Task.Run(
                    () => blockContent.Mine(cancellationTokenSource.Token),
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
                preEval.EvaluateActions(miner, this);
            IEnumerable<TxExecution> txExecutions = MakeTxExecutions(block, actionEvaluations);
            UpdateTxExecutions(txExecutions);

            _logger.Debug(
                "{SessionId}/{ProcessId}: Mined block #{Index} {Hash} " +
                "with difficulty {Difficulty} and previous hash {PreviousHash}",
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
        /// <param name="maxTransactionsBytes">The maximum number of bytes a block can have.</param>
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
            long maxTransactionsBytes,
            int maxTransactions,
            int maxTransactionsPerSigner,
            IComparer<Transaction<T>> txPriority = null
        )
        {
            long index = Count;
            ImmutableList<Transaction<T>> stagedTransactions = ListStagedTransactions(txPriority);
            _logger.Information(
                "Gathering transactions to mine for block #{Index} from {TxCount} " +
                "staged transactions...",
                index,
                stagedTransactions.Count);

            var transactionsToMine = new List<Transaction<T>>();

            // FIXME: The tx collection timeout should be configurable.
            DateTimeOffset timeout = DateTimeOffset.UtcNow + TimeSpan.FromSeconds(4);

            List estimatedEncoding = BlockMarshaler.MarshalTransactions(
                new List<Transaction<T>>());
            var storedNonces = new Dictionary<Address, long>();
            var nextNonces = new Dictionary<Address, long>();
            var toMineCounts = new Dictionary<Address, int>();

            foreach (
                (Transaction<T> tx, int i) in stagedTransactions.Select((val, idx) => (val, idx)))
            {
                _logger.Verbose(
                    "Validating tx {Iter}/{Total} {TxId} to include in block #{Index}...",
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
                        "Ignoring tx {Iter}/{Total} {TxId} and the rest of the " +
                        "staged transactions due to the maximum number of " +
                        "transactions per block allowed hsa been reached: {Max}",
                        i,
                        stagedTransactions.Count,
                        tx.Id,
                        maxTransactions);
                    break;
                }

                if (storedNonces[tx.Signer] <= tx.Nonce && tx.Nonce == nextNonces[tx.Signer])
                {
                    if (Policy.ValidateNextBlockTx(this, tx) is { } tpve)
                    {
                        _logger.Debug(
                            "Ignoring tx {Iter}/{Total} {TxId} as it does not follow policy",
                            i,
                            stagedTransactions.Count,
                            tx.Id);
                        StagePolicy.Ignore(this, tx.Id);
                        continue;
                    }

                    List txAddedEncoding = estimatedEncoding.Add(
                        BlockMarshaler.MarshalTransaction(tx));
                    if (txAddedEncoding.EncodingLength > maxTransactionsBytes)
                    {
                        _logger.Debug(
                            "Ignoring tx {Iter}/{Total} {TxId} due to the maximum size allowed " +
                            "for transactions in a block: {CurrentEstimate}/{MaximumBlockBytes}",
                            i,
                            stagedTransactions.Count,
                            tx.Id,
                            txAddedEncoding.EncodingLength,
                            maxTransactionsBytes);
                        continue;
                    }
                    else if (toMineCounts[tx.Signer] >= maxTransactionsPerSigner)
                    {
                        _logger.Debug(
                            "Ignoring tx {Iter}/{Total} {TxId} due to the maximum number " +
                            "of transactions allowed per single signer per block " +
                            "has been reached: {Max}",
                            i,
                            stagedTransactions.Count,
                            tx.Id,
                            maxTransactionsPerSigner);
                        continue;
                    }

                    _logger.Verbose(
                        "Adding tx {Iter}/{Total} {TxId} to the list of transactions " +
                        "to be mined",
                        i,
                        stagedTransactions.Count,
                        tx.Id);
                    transactionsToMine.Add(tx);
                    nextNonces[tx.Signer] += 1;
                    toMineCounts[tx.Signer] += 1;
                    estimatedEncoding = txAddedEncoding;
                }
                else if (tx.Nonce < storedNonces[tx.Signer])
                {
                    _logger.Debug(
                        "Ignoring tx {Iter}/{Total} {TxId} by {Signer} " +
                        "as it has lower nonce {Actual} than expected nonce {Expected}",
                        i,
                        stagedTransactions.Count,
                        tx.Id,
                        tx.Signer,
                        tx.Nonce,
                        nextNonces[tx.Signer]);
                }
                else
                {
                    _logger.Debug(
                        "Ignoring tx {Iter}/{Total} {TxId} by {Signer} " +
                        "as it has higher nonce {Actual} than expected nonce {Expected}",
                        i,
                        stagedTransactions.Count,
                        tx.Id,
                        tx.Signer,
                        tx.Nonce,
                        nextNonces[tx.Signer]);
                }

                if (timeout < DateTimeOffset.UtcNow)
                {
                    _logger.Debug(
                        "Reached the time limit to collect staged transactions; other staged " +
                        "transactions will be mined later");
                    break;
                }
            }

            _logger.Information(
                "Gathered total of {TransactionsToMineCount} transactions to mine for " +
                "block #{Index} from {StagedTransactionsCount} staged transactions",
                transactionsToMine.Count,
                index,
                stagedTransactions.Count);
            return transactionsToMine.ToImmutableList();
        }
    }
}
