#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// Mine the genesis block of the blockchain.
        /// </summary>
        /// <param name="customActions">List of custom actions
        /// will be included in the genesis block.
        /// If it's null, it will be replaced with <see cref="ImmutableArray{T}.Empty"/>
        /// as default.</param>
        /// <param name="systemActions">System action that will be included in the genesis block.
        /// If it's null, no system action will be added.
        /// as default.</param>
        /// <param name="privateKey">A private key to sign the transaction and the genesis block.
        /// If it's null, it will use new private key as default.</param>
        /// <param name="timestamp">The timestamp of the genesis block. If it's null, it will
        /// use <see cref="DateTimeOffset.UtcNow"/> as default.</param>
        /// <param name="blockAction">A block action to execute and be rendered for every block.
        /// It must match to <see cref="BlockPolicy{T}.BlockAction"/> of <see cref="Policy"/>.
        /// </param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.
        /// Treat no <see cref="Currency"/> as native token if the argument omitted.</param>
        /// <returns>The genesis block mined with parameters.</returns>
        // FIXME: This method should take a IBlockPolicy<T> instead of params blockAction and
        // nativeTokenPredicate.  (Or at least there should be such an overload.)
        public static Block<T> ProposeGenesisBlock(
            IEnumerable<T> customActions = null,
            IEnumerable<IAction> systemActions = null,
            PrivateKey privateKey = null,
            DateTimeOffset? timestamp = null,
            IAction blockAction = null,
            Predicate<Currency> nativeTokenPredicate = null)
        {
            privateKey ??= new PrivateKey();
            customActions ??= ImmutableArray<T>.Empty;
            systemActions ??= ImmutableArray<IAction>.Empty;
            int nonce = 0;
            Transaction<T>[] transactions =
            {
                Transaction<T>.Create(
                    nonce, privateKey, null, customActions, timestamp: timestamp),
            };
            foreach (var systemAction in systemActions)
            {
                nonce += 1;
                transactions = transactions.Concat(
                    new Transaction<T>[]
                    {
                        Transaction<T>.Create(
                            nonce, privateKey, null, systemAction, timestamp: timestamp),
                    }).ToArray();
            }

            transactions = transactions.OrderBy(tx => tx.Id).ToArray();

            BlockContent<T> content = new BlockContent<T>(
                new BlockMetadata(
                    index: 0L,
                    timestamp: timestamp ?? DateTimeOffset.UtcNow,
                    publicKey: privateKey.PublicKey,
                    previousHash: null,
                    txHash: BlockContent<T>.DeriveTxHash(transactions),
                    lastCommit: null),
                transactions: transactions);

            PreEvaluationBlock<T> preEval = content.Propose();
            IReadOnlyList<ActionEvaluation> evals = EvaluateGenesis(
                preEval, blockAction, nativeTokenPredicate);
            return preEval.Sign(
                privateKey,
                DetermineGenesisStateRootHash(
                    preEval, blockAction, nativeTokenPredicate, out _));
        }

        /// <summary>
        /// <para>
        /// Proposes a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </para>
        /// <para>
        /// All unprovided and/or <see langword="null"/> arguments are reassigned accordingly
        /// and redirected to a overloaded method with non-nullable parameters.  By default,
        /// a policy adhering block is produced with current timestamp and appended immediately
        /// to the chain.
        /// </para>
        /// </summary>
        /// <param name="proposer">
        /// The proposer's <see cref="PublicKey"/> that proposes the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when proposing started.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <param name="lastCommit"><see cref="BlockCommit"/> of previous <see cref="Block{T}"/>.
        /// </param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is proposed.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while proposing.</exception>
        public Block<T> ProposeBlock(
            PrivateKey proposer,
            DateTimeOffset? timestamp = null,
            IComparer<Transaction<T>> txPriority = null,
            BlockCommit lastCommit = null) =>
            ProposeBlock(
                proposer: proposer,
                timestamp: timestamp ?? DateTimeOffset.UtcNow,
                maxTransactionsBytes: Policy.GetMaxTransactionsBytes(Count),
                maxTransactions: Policy.GetMaxTransactionsPerBlock(Count),
                maxTransactionsPerSigner: Policy.GetMaxTransactionsPerSignerPerBlock(Count),
                txPriority: txPriority,
                lastCommit: lastCommit);

        /// <summary>
        /// Proposes a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="proposer">
        /// The proposer's <see cref="PublicKey"/> that proposes the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when proposing started.</param>
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
        /// <param name="lastCommit"><see cref="BlockCommit"/> of previous <see cref="Block{T}"/>.
        /// </param>
        /// <returns>An awaitable task with a <see cref="Block{T}"/> that is proposed.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while proposing.</exception>
        public Block<T> ProposeBlock(
            PrivateKey proposer,
            DateTimeOffset timestamp,
            long maxTransactionsBytes,
            int maxTransactions,
            int maxTransactionsPerSigner,
            IComparer<Transaction<T>> txPriority = null,
            BlockCommit lastCommit = null)
        {
            long index = Count;
            BlockHash? prevHash = Store.IndexBlockHash(Id, index - 1);

            int sessionId = new System.Random().Next();
            int processId = Process.GetCurrentProcess().Id;
            _logger.Debug(
                "{SessionId}/{ProcessId}: Starting to propose block #{Index} with " +
                "previous hash {PreviousHash}...",
                sessionId,
                processId,
                index,
                prevHash);

            ImmutableList<Transaction<T>> transactionsToPropose;
            try
            {
                transactionsToPropose = GatherTransactionsToPropose(
                    maxTransactionsBytes: maxTransactionsBytes,
                    maxTransactions: maxTransactions,
                    maxTransactionsPerSigner: maxTransactionsPerSigner,
                    minTransactions: Policy.GetMinTransactionsPerBlock(index),
                    txPriority: txPriority);
            }
            catch (InvalidOperationException ioe)
            {
                throw new OperationCanceledException(
                    "Failed to gather transactions to propose.",
                    ioe);
            }

            _logger.Verbose(
                "{SessionId}/{ProcessId}: Propose block #{Index} will include " +
                "{TxCount} transactions",
                sessionId,
                processId,
                index,
                transactionsToPropose.Count);

            // FIXME: Should use automated public constructor.
            // Manual internal constructor is used purely for testing custom timestamps.
            var transactions = transactionsToPropose.OrderBy(tx => tx.Id).ToList();
            var blockContent = new BlockContent<T>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: index,
                    timestamp: timestamp,
                    miner: proposer.ToAddress(),
                    publicKey: proposer.PublicKey,
                    previousHash: prevHash,
                    txHash: BlockContent<T>.DeriveTxHash(transactions),
                    lastCommit: lastCommit),
                transactions: transactions);
            PreEvaluationBlock<T> preEval = blockContent.Propose();
            Block<T> block = ProposeBlock(proposer, preEval);
            _logger.Debug(
                "{SessionId}/{ProcessId}: Mined block #{Index} {Hash} " +
                "with previous hash {PreviousHash}",
                sessionId,
                processId,
                block.Index,
                block.Hash,
                block.PreviousHash);

            return block;
        }

        internal Block<T> ProposeBlock(
            PrivateKey proposer,
            PreEvaluationBlock<T> preEvaluationBlock) => preEvaluationBlock.Sign(
                proposer,
                DetermineBlockStateRootHash(preEvaluationBlock, out _));

        /// <summary>
        /// Gathers <see cref="Transaction{T}"/>s for proposing a <see cref="Block{T}"/> for
        /// index <pararef name="index"/>.  Gathered <see cref="Transaction{T}"/>s are
        /// guaranteed to satisified the following <see cref="Transaction{T}"/> related
        /// policies:
        /// <list type="bullet">
        ///     <item><description>
        ///         <see cref="BlockPolicy{T}.GetMaxTransactionsBytes"/>
        ///     </description></item>
        ///     <item><description>
        ///         <see cref="BlockPolicy{T}.GetMaxTransactionsPerBlock"/>
        ///     </description></item>
        ///     <item><description>
        ///         <see cref="BlockPolicy{T}.GetMaxTransactionsPerSignerPerBlock"/>
        ///     </description></item>
        ///     <item><description>
        ///         <see cref="BlockPolicy{T}.GetMinTransactionsPerBlock"/>
        ///     </description></item>
        /// </list>
        /// </summary>
        /// <param name="index">The index of the <see cref="Block{T}"/> to propose.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>An <see cref="ImmutableList"/> of <see cref="Transaction{T}"/>s
        /// to propose.</returns>
        /// <exception cref="InvalidOperationException">Thrown when not all policies
        /// can be satisfied.</exception>
        internal ImmutableList<Transaction<T>> GatherTransactionsToPropose(
            long index,
            IComparer<Transaction<T>> txPriority = null) =>
            GatherTransactionsToPropose(
                Policy.GetMaxTransactionsBytes(index),
                Policy.GetMaxTransactionsPerBlock(index),
                Policy.GetMaxTransactionsPerSignerPerBlock(index),
                Policy.GetMinTransactionsPerBlock(index),
                txPriority);

        /// <summary>
        /// Gathers <see cref="Transaction{T}"/>s for proposing a next block
        /// from the current set of staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="maxTransactionsBytes">The maximum number of bytes a block can have.</param>
        /// <param name="maxTransactions">The maximum number of <see cref="Transaction{T}"/>s
        /// allowed.</param>
        /// <param name="maxTransactionsPerSigner">The maximum number of
        /// <see cref="Transaction{T}"/>s with the same signer allowed.</param>
        /// <param name="minTransactions">The minimum number of <see cref="Transaction{T}"/>s
        /// allowed.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>An <see cref="ImmutableList"/> of <see cref="Transaction{T}"/>s with its
        /// count not exceeding <paramref name="maxTransactions"/> and the number of
        /// <see cref="Transaction{T}"/>s in the list for each signer not exceeding
        /// <paramref name="maxTransactionsPerSigner"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when not all policies
        /// can be satisfied.</exception>
        internal ImmutableList<Transaction<T>> GatherTransactionsToPropose(
            long maxTransactionsBytes,
            int maxTransactions,
            int maxTransactionsPerSigner,
            int minTransactions,
            IComparer<Transaction<T>> txPriority = null)
        {
            long index = Count;
            ImmutableList<Transaction<T>> stagedTransactions = ListStagedTransactions(txPriority);
            _logger.Information(
                "Gathering transactions to mine for block #{Index} from {TxCount} " +
                "staged transactions...",
                index,
                stagedTransactions.Count);

            var transactions = new List<Transaction<T>>();

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

                if (transactions.Count >= maxTransactions)
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
                    transactions.Add(tx);
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

            if (transactions.Count < minTransactions)
            {
                throw new InvalidOperationException(
                    $"Only gathered {transactions.Count} transactions where " +
                    $"the minimal number of transactions to propose is {minTransactions}.");
            }

            _logger.Information(
                "Gathered total of {TransactionsToMineCount} transactions to mine for " +
                "block #{Index} from {StagedTransactionsCount} staged transactions",
                transactions.Count,
                index,
                stagedTransactions.Count);
            return transactions.ToImmutableList();
        }
    }
}
