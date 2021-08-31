using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s,
        /// and then <see cref="Append(Block{T}, StateCompleterSet{T}?)"/> it to the chain
        /// (unless the <paramref name="append"/> option is turned off).
        /// </summary>
        /// <param name="miner">The <see cref="Address"/> of miner that mined the block.</param>
        /// <param name="append">Whether to <see cref="Append(Block{T}, StateCompleterSet{T}?)"/>
        /// the mined block.  Turned on by default.</param>
        /// <param name="maxTransactions">The maximum number of transactions that a block can
        /// accept.  See also <see cref="IBlockPolicy{T}.MaxTransactionsPerBlock"/>.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public Task<Block<T>> MineBlock(
            Address miner,
            bool append = true,
            int? maxTransactions = null,
            CancellationToken cancellationToken = default
        ) =>
            MineBlock(miner, DateTimeOffset.UtcNow, append, maxTransactions, cancellationToken);

#pragma warning disable MEN003
        /// <summary>
        /// Mines a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s,
        /// and then <see cref="Append(Block{T}, StateCompleterSet{T}?)"/> it to the chain
        /// (unless the <paramref name="append"/> option is turned off).
        /// </summary>
        /// <param name="miner">The <see cref="Address"/> of miner that mined the block.</param>
        /// <param name="currentTime">The <see cref="DateTimeOffset"/> when mining started.</param>
        /// <param name="append">Whether to <see cref="Append(Block{T}, StateCompleterSet{T}?)"/>
        /// the mined block.  Turned on by default.</param>
        /// <param name="maxTransactions">The maximum number of transactions that a block can
        /// accept.  See also <see cref="IBlockPolicy{T}.MaxTransactionsPerBlock"/>.</param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is mined.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while mining.</exception>
        public async Task<Block<T>> MineBlock(
            Address miner,
            DateTimeOffset currentTime,
            bool append = true,
            int? maxTransactions = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            using var cts = new CancellationTokenSource();
            using CancellationTokenSource cancellationTokenSource =
                CancellationTokenSource.CreateLinkedTokenSource(cancellationToken, cts.Token);
            void WatchTip(object target, (Block<T> OldTip, Block<T> NewTip) tip) => cts.Cancel();
            TipChanged += WatchTip;

            maxTransactions = Math.Min(
                maxTransactions ?? Policy.MaxTransactionsPerBlock,
                Policy.MaxTransactionsPerBlock);

            long index = Store.CountIndex(Id);
            long difficulty = Policy.GetNextBlockDifficulty(this);
            BlockHash? prevHash = Store.IndexBlockHash(Id, index - 1);

            int sessionId = new System.Random().Next();
            int procId = Process.GetCurrentProcess().Id;
            _logger.Debug(
                "Start to mine a block #{Index} [difficulty: {Difficulty}; prev: {prevHash}; " +
                "session: {SessionId}; proc: {ProcessId}]... ",
                index,
                difficulty,
                prevHash,
                sessionId,
                procId
            );

            HashAlgorithmType hashAlgorithm = Policy.GetHashAlgorithm(index);

            ImmutableArray<Transaction<T>> stagedTransactions = ListStagedTransactions();
            _logger.Debug(
                "There are {Transactions} staged transactions.",
                stagedTransactions.Length
            );

            var transactionsToMine = new List<Transaction<T>>();
            int i = 0;

            // FIXME: The tx collection timeout should be configurable.
            DateTimeOffset timeout = DateTimeOffset.UtcNow + TimeSpan.FromSeconds(4);

            // Makes an empty block to estimate the length of bytes without transactions.
            var estimatedBytes = new Block<T>(
                index: index,
                difficulty: difficulty,
                totalDifficulty: Tip.TotalDifficulty,
                nonce: default,
                miner: miner,
                previousHash: prevHash,
                timestamp: currentTime,
                transactions: new Transaction<T>[0],
                hashAlgorithm: hashAlgorithm
            ).BytesLength;
            int maxBlockBytes = Math.Max(Policy.GetMaxBlockBytes(index), 1);
            var skippedSigners = new HashSet<Address>();
            var storedNonces = new Dictionary<Address, long>();
            var nextNonces = new Dictionary<Address, long>();

            foreach (Transaction<T> tx in stagedTransactions)
            {
                // We don't care about nonce ordering here because `.ListStagedTransactions()`
                // returns already ordered transactions by its nonce.
                if (!storedNonces.ContainsKey(tx.Signer))
                {
                    storedNonces[tx.Signer] = Store.GetTxNonce(Id, tx.Signer);
                }

                if (nextNonces.TryGetValue(tx.Signer, out long prevNonce))
                {
                    nextNonces[tx.Signer] = prevNonce + 1;
                }
                else
                {
                    nextNonces[tx.Signer] = storedNonces[tx.Signer] + 1;
                }

                _logger.Verbose(
                    "Preparing mining a block #{Index}; validating a tx {Index}/{Total} " +
                    "{Transaction}...",
                    index,
                    ++i,
                    stagedTransactions.Length,
                    tx.Id
                );

                if (transactionsToMine.Count >= maxTransactions)
                {
                    _logger.Information(
                        "Not all staged transactions will be included in a block #{Index} to " +
                        "be mined by {Miner}, because it reaches the maximum number of " +
                        "acceptable transactions: {MaxTransactions}",
                        index,
                        miner,
                        maxTransactions
                    );
                    break;
                }

                if (!Policy.DoesTransactionFollowsPolicy(tx, this))
                {
                    _logger.Debug(
                        "Unstage the tx {Index}/{Total} {Transaction} as it doesn't follow policy.",
                        i,
                        stagedTransactions.Length,
                        tx.Id
                    );
                    UnstageTransaction(tx);
                    continue;
                }

                if (storedNonces[tx.Signer] <= tx.Nonce && tx.Nonce < nextNonces[tx.Signer])
                {
                    if (estimatedBytes + tx.BytesLength > maxBlockBytes)
                    {
                        // Once someone's tx is excluded from a block, their later txs are also all
                        // excluded in the block, because later nonces become invalid.
                        skippedSigners.Add(tx.Signer);
                        _logger.Information(
                            "The {Signer}'s transactions after the nonce #{Nonce} will be " +
                            "excluded in a block #{Index} to be mined by {Miner}, because it " +
                            "takes too long bytes.",
                            tx.Signer,
                            tx.Nonce,
                            index,
                            miner
                        );
                        continue;
                    }

                    transactionsToMine.Add(tx);
                    estimatedBytes += tx.BytesLength;
                }
                else if (tx.Nonce < storedNonces[tx.Signer])
                {
                    _logger.Debug(
                        "Tx {Index}/{Total} {Transaction} has a lower nonce than expected: " +
                        "{Nonce} ({Signer})." +
                        "it will be discarded.",
                        i,
                        stagedTransactions.Length,
                        tx.Id,
                        tx.Nonce,
                        tx.Signer
                    );
                    UnstageTransaction(tx);
                }
                else
                {
                    _logger.Debug(
                        "Tx {Index}/{Total} {Transaction} has a higher nonce than expected: " +
                        "{Nonce} ({Signer}).  " +
                        "It will be included by a block mined later.",
                        i,
                        stagedTransactions.Length,
                        tx.Id,
                        tx.Nonce,
                        tx.Signer
                    );
                }

                if (timeout < DateTimeOffset.UtcNow)
                {
                    _logger.Debug(
                        "Reached the time limit to collect staged transactions; other staged " +
                        "transactions will be mined later."
                    );
                    break;
                }
            }

            _logger.Verbose(
                "A block #{Index} to be mined by {Miner} will include {Transactions} " +
                "transactions out of {StagedTransactions} staged transactions.",
                index,
                miner,
                transactionsToMine.Count,
                stagedTransactions.Length
            );

            Block<T> block;
            try
            {
                block = await Task.Run(
                    () => Block<T>.Mine(
                        index: index,
                        hashAlgorithm: hashAlgorithm,
                        difficulty: difficulty,
                        previousTotalDifficulty: Tip.TotalDifficulty,
                        miner: miner,
                        previousHash: prevHash,
                        timestamp: currentTime,
                        transactions: transactionsToMine,
                        cancellationToken: cancellationTokenSource.Token),
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

            IReadOnlyList<ActionEvaluation> actionEvaluations = ActionEvaluator.Evaluate(
                block, StateCompleterSet<T>.Recalculate);

            if (StateStore is TrieStateStore trieStateStore)
            {
                _rwlock.EnterWriteLock();
                try
                {
                    SetStates(block, actionEvaluations);
                    block = new Block<T>(block, trieStateStore.GetRootHash(block.Hash));

                    // it's needed because `block.Hash` was updated with the state root hash.
                    // FIXME: we need a method for calculating the state root hash without
                    // `.SetStates()`.
                    SetStates(block, actionEvaluations);
                }
                finally
                {
                    _rwlock.ExitWriteLock();
                }
            }
            else
            {
                // We need to re-execute it.
                actionEvaluations = null;
            }

            _logger.Debug(
                "Mined a block #{Index} [difficulty: {Difficulty}; prev: {prevHash}; " +
                "session: {SessionId}; proc: {ProcessId}].",
                index,
                difficulty,
                prevHash,
                sessionId,
                procId
            );

            if (append)
            {
                Append(
                    block,
                    currentTime,
                    evaluateActions: true,
                    renderBlocks: true,
                    renderActions: true,
                    actionEvaluations: actionEvaluations
                );

                _logger.Debug(
                    "Appended a block #{Index} [difficulty: {Difficulty}; prev: {prevHash}; " +
                    "session: {SessionId}; proc: {ProcessId}].",
                    index,
                    difficulty,
                    prevHash,
                    sessionId,
                    procId
                );
            }

            return block;
        }
#pragma warning restore MEN003
    }
}