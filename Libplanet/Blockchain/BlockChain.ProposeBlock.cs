#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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
        /// <para>
        /// Propose a genesis block for creating a <see cref="BlockChain{T}"/>.
        /// </para>
        /// <para>
        /// Note that a genesis <see cref="Block{T}"/> produced may not be suitable as
        /// a genesis for <see cref="BlockChain{T}.Create"/> if given
        /// <paramref name="transactions"/> is invalid.
        /// </para>
        /// <para>
        /// Make sure that the nonces for <paramref name="transactions"/> are correct and
        /// each <see cref="Transaction{T}.GenesisHash"/> is set to <see langword="null"/>.
        /// </para>
        /// </summary>
        /// <param name="privateKey">A private key to sign the transaction and the genesis block.
        /// If it's null, it will use new private key as default.</param>
        /// <param name="transactions">A list of <see cref="Transaction{T}"/>s to include
        /// in the genesis <see cref="Block{T}"/>.</param>
        /// <param name="timestamp">The timestamp of the genesis block.  If it's null, it will
        /// use <see cref="DateTimeOffset.UtcNow"/> as default.</param>
        /// <param name="blockAction">A block action to execute and be rendered for every block.
        /// It must match to <see cref="BlockPolicy{T}.BlockAction"/> of <see cref="Policy"/>.
        /// </param>
        /// <param name="nativeTokenPredicate">A predicate function to determine whether
        /// the specified <see cref="Currency"/> is a native token defined by chain's
        /// <see cref="Libplanet.Blockchain.Policies.IBlockPolicy{T}.NativeTokens"/> or not.
        /// Treat no <see cref="Currency"/> as native token if the argument omitted.</param>
        /// <returns>A genesis <see cref="Block{T}"/> proposed with given parameters.</returns>
        /// <seealso cref="BlockChain{T}.Create"/>
        // FIXME: This method should take a IBlockPolicy<T> instead of params blockAction and
        // nativeTokenPredicate.  (Or at least there should be such an overload.)
        public static Block<T> ProposeGenesisBlock(
            PrivateKey privateKey = null,
            ImmutableList<Transaction<T>> transactions = null,
            DateTimeOffset? timestamp = null,
            IAction blockAction = null,
            Predicate<Currency> nativeTokenPredicate = null)
        {
            privateKey ??= new PrivateKey();
            transactions = transactions is { } txs
                ? txs.OrderBy(tx => tx.Id).ToImmutableList()
                : ImmutableList<Transaction<T>>.Empty;

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
        /// By default, if successful, a policy adhering <see cref="Block{T}"/> is produced with
        /// current timestamp that can be appeneded to the current chain.
        /// </para>
        /// </summary>
        /// <param name="proposer">The proposer's <see cref="PublicKey"/> that proposes the block.
        /// </param>
        /// <param name="lastCommit">The <see cref="BlockCommit"/> evidence of the previous
        /// <see cref="Block{T}"/>.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>A <see cref="Block{T}"/> that is proposed.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain{T}.Tip"/> is changed while proposing.</exception>
        public Block<T> ProposeBlock(
            PrivateKey proposer,
            BlockCommit lastCommit = null,
            IComparer<Transaction<T>> txPriority = null)
        {
            long index = Count;
            BlockHash? prevHash = Store.IndexBlockHash(Id, index - 1);

            _logger.Debug(
                "Starting to propose block #{Index} with previous hash {PreviousHash}...",
                index,
                prevHash);

            ImmutableList<Transaction<T>> transactions;
            try
            {
                transactions = GatherTransactionsToPropose(index, txPriority);
            }
            catch (InvalidOperationException ioe)
            {
                throw new OperationCanceledException(
                    $"Failed to gather transactions to propose for block #{index}.",
                    ioe);
            }

            var block = ProposeBlock(
                proposer,
                transactions,
                lastCommit);
            _logger.Debug(
                "Proposed block #{Index} {Hash} with previous hash {PreviousHash}",
                block.Index,
                block.Hash,
                block.PreviousHash);

            return block;
        }

        /// <summary>
        /// <para>
        /// Proposes a next <see cref="Block{T}"/> using a specified
        /// list of <see cref="Transaction{T}"/>s.
        /// </para>
        /// <para>
        /// Unlike <see cref="ProposeBlock(PrivateKey, BlockCommit, IComparer{Transaction{T}})"/>,
        /// this may result in a <see cref="Block{T}"/> that does not conform to the
        /// <see cref="Policy"/>.
        /// </para>
        /// </summary>
        /// <param name="proposer">The proposer's <see cref="PublicKey"/> that proposes the block.
        /// </param>
        /// <param name="transactions">The list of <see cref="Transaction{T}"/>s to include.</param>
        /// <param name="lastCommit">The <see cref="BlockCommit"/> evidence of the previous
        /// <see cref="Block{T}"/>.</param>
        /// <returns>A <see cref="Block{T}"/> that is proposed.</returns>
        internal Block<T> ProposeBlock(
            PrivateKey proposer,
            ImmutableList<Transaction<T>> transactions,
            BlockCommit lastCommit)
        {
            long index = Count;
            BlockHash? prevHash = Store.IndexBlockHash(Id, index - 1);

            // FIXME: Should use automated public constructor.
            // Manual internal constructor is used purely for testing custom timestamps.
            var orderedTransactions = transactions.OrderBy(tx => tx.Id).ToList();
            var blockContent = new BlockContent<T>(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: index,
                    timestamp: DateTimeOffset.UtcNow,
                    miner: proposer.ToAddress(),
                    publicKey: proposer.PublicKey,
                    previousHash: prevHash,
                    txHash: BlockContent<T>.DeriveTxHash(orderedTransactions),
                    lastCommit: lastCommit),
                transactions: orderedTransactions);
            var preEval = blockContent.Propose();
            return ProposeBlock(proposer, preEval);
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
                "Gathering transactions to propose for block #{Index} from {TxCount} " +
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
            var toProposeCounts = new Dictionary<Address, int>();

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
                    toProposeCounts[tx.Signer] = 0;
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
                    else if (toProposeCounts[tx.Signer] >= maxTransactionsPerSigner)
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
                        "to be proposed",
                        i,
                        stagedTransactions.Count,
                        tx.Id);
                    transactions.Add(tx);
                    nextNonces[tx.Signer] += 1;
                    toProposeCounts[tx.Signer] += 1;
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
                        "transactions will be proposed later");
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
                "Gathered total of {TransactionsCount} transactions to propose for " +
                "block #{Index} from {StagedTransactionsCount} staged transactions",
                transactions.Count,
                index,
                stagedTransactions.Count);
            return transactions.ToImmutableList();
        }
    }
}
