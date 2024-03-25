#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Blockchain
{
    public partial class BlockChain
    {
        /// <summary>
        /// <para>
        /// Propose a genesis block for creating a <see cref="BlockChain"/>.
        /// </para>
        /// <para>
        /// Note that a genesis <see cref="Block"/> produced may not be suitable as
        /// a genesis for <see cref="BlockChain.Create"/> if given
        /// <paramref name="transactions"/> is invalid.
        /// </para>
        /// <para>
        /// Make sure that the nonces for <paramref name="transactions"/> are correct and
        /// each <see cref="Transaction.GenesisHash"/> is set to <see langword="null"/>.
        /// </para>
        /// </summary>
        /// <param name="actionEvaluator">The <see cref="IActionEvaluator"/> to use to
        /// evaluate the proposed <see cref="Block"/>.</param>
        /// <param name="privateKey">A private key to sign the transaction and the genesis block.
        /// If it's null, it will use new private key as default.</param>
        /// <param name="transactions">A list of <see cref="Transaction"/>s to include
        /// in the genesis <see cref="Block"/>.</param>
        /// <param name="timestamp">The timestamp of the genesis block.  If it's null, it will
        /// use <see cref="DateTimeOffset.UtcNow"/> as default.</param>
        /// <returns>A genesis <see cref="Block"/> proposed with given parameters.</returns>
        /// <seealso cref="BlockChain.Create"/>
        // FIXME: This method should take a IBlockPolicy instead of params blockAction
        // (Or at least there should be such an overload).
        public static Block ProposeGenesisBlock(
            IActionEvaluator actionEvaluator,
            PrivateKey privateKey = null,
            ImmutableList<Transaction> transactions = null,
            DateTimeOffset? timestamp = null)
        {
            privateKey ??= new PrivateKey();
            transactions = transactions is { } txs
                ? txs.OrderBy(tx => tx.Id).ToImmutableList()
                : ImmutableList<Transaction>.Empty;

            BlockContent content = new BlockContent(
                new BlockMetadata(
                    index: 0L,
                    timestamp: timestamp ?? DateTimeOffset.UtcNow,
                    publicKey: privateKey.PublicKey,
                    previousHash: null,
                    txHash: BlockContent.DeriveTxHash(transactions),
                    lastCommit: null,
                    proof: null),
                transactions: transactions);

            PreEvaluationBlock preEval = content.Propose();
            return preEval.Sign(
                privateKey,
                DetermineGenesisStateRootHash(actionEvaluator, preEval, out _));
        }

        /// <summary>
        /// <para>
        /// Proposes a next <see cref="Block"/> using staged <see cref="Transaction"/>s.
        /// </para>
        /// <para>
        /// By default, if successful, a policy adhering <see cref="Block"/> is produced with
        /// current timestamp that can be appended to the current chain.
        /// </para>
        /// </summary>
        /// <param name="proposer">The proposer's <see cref="PublicKey"/> that proposes the block.
        /// </param>
        /// <param name="lastCommit">The <see cref="BlockCommit"/> evidence of the previous
        /// <see cref="Block"/>.</param>
        /// <param name="proof">The <see cref="Proof"/> proved from proposer candidate.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>A <see cref="Block"/> that is proposed.</returns>
        /// <exception cref="OperationCanceledException">Thrown when
        /// <see cref="BlockChain.Tip"/> is changed while proposing.</exception>
        public Block ProposeBlock(
            PrivateKey proposer,
            BlockCommit lastCommit = null,
            Proof? proof = null,
            IComparer<Transaction> txPriority = null)
        {
            long index = Count;
            BlockHash? prevHash = Store.IndexBlockHash(Id, index - 1);

            _logger.Debug(
                "Starting to propose block #{Index} with previous hash {PreviousHash}...",
                index,
                prevHash);

            ImmutableList<Transaction> transactions;
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
                lastCommit,
                proof);
            _logger.Debug(
                "Proposed block #{Index} {Hash} with previous hash {PreviousHash}",
                block.Index,
                block.Hash,
                block.PreviousHash);

            return block;
        }

        /// <summary>
        /// <para>
        /// Proposes a next <see cref="Block"/> using a specified
        /// list of <see cref="Transaction"/>s.
        /// </para>
        /// <para>
        /// Unlike
        /// <see cref="ProposeBlock(PrivateKey, BlockCommit, Proof?, IComparer{Transaction})"/>,
        /// this may result in a <see cref="Block"/> that does not conform to the
        /// <see cref="Policy"/>.
        /// </para>
        /// </summary>
        /// <param name="proposer">The proposer's <see cref="PublicKey"/> that proposes the block.
        /// </param>
        /// <param name="transactions">The list of <see cref="Transaction"/>s to include.</param>
        /// <param name="lastCommit">The <see cref="BlockCommit"/> evidence of the previous
        /// <see cref="Block"/>.</param>
        /// <param name="proof">The <see cref="Proof"/> proved from proposer candidate.</param>
        /// <returns>A <see cref="Block"/> that is proposed.</returns>
        internal Block ProposeBlock(
            PrivateKey proposer,
            ImmutableList<Transaction> transactions,
            BlockCommit lastCommit,
            Proof? proof)
        {
            long index = Count;
            BlockHash? prevHash = Store.IndexBlockHash(Id, index - 1);

            // FIXME: Should use automated public constructor.
            // Manual internal constructor is used purely for testing custom timestamps.
            var orderedTransactions = transactions.OrderBy(tx => tx.Id).ToList();
            var blockContent = new BlockContent(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.CurrentProtocolVersion,
                    index: index,
                    timestamp: DateTimeOffset.UtcNow,
                    miner: proposer.Address,
                    publicKey: proposer.PublicKey,
                    previousHash: prevHash,
                    txHash: BlockContent.DeriveTxHash(orderedTransactions),
                    lastCommit: lastCommit,
                    proof: proof),
                transactions: orderedTransactions);
            var preEval = blockContent.Propose();
            return ProposeBlock(proposer, preEval);
        }

        internal Block ProposeBlock(
            PrivateKey proposer,
            PreEvaluationBlock preEvaluationBlock) => preEvaluationBlock.Sign(
                proposer,
                DetermineBlockStateRootHash(preEvaluationBlock, out _));

        /// <summary>
        /// Gathers <see cref="Transaction"/>s for proposing a <see cref="Block"/> for
        /// index <pararef name="index"/>.  Gathered <see cref="Transaction"/>s are
        /// guaranteed to satisfied the following <see cref="Transaction"/> related
        /// policies:
        /// <list type="bullet">
        ///     <item><description>
        ///         <see cref="BlockPolicy.GetMaxTransactionsBytes"/>
        ///     </description></item>
        ///     <item><description>
        ///         <see cref="BlockPolicy.GetMaxTransactionsPerBlock"/>
        ///     </description></item>
        ///     <item><description>
        ///         <see cref="BlockPolicy.GetMaxTransactionsPerSignerPerBlock"/>
        ///     </description></item>
        ///     <item><description>
        ///         <see cref="BlockPolicy.GetMinTransactionsPerBlock"/>
        ///     </description></item>
        /// </list>
        /// </summary>
        /// <param name="index">The index of the <see cref="Block"/> to propose.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>An <see cref="ImmutableList"/> of <see cref="Transaction"/>s
        /// to propose.</returns>
        /// <exception cref="InvalidOperationException">Thrown when not all policies
        /// can be satisfied.</exception>
        internal ImmutableList<Transaction> GatherTransactionsToPropose(
            long index,
            IComparer<Transaction> txPriority = null) =>
            GatherTransactionsToPropose(
                Policy.GetMaxTransactionsBytes(index),
                Policy.GetMaxTransactionsPerBlock(index),
                Policy.GetMaxTransactionsPerSignerPerBlock(index),
                Policy.GetMinTransactionsPerBlock(index),
                txPriority);

        /// <summary>
        /// Gathers <see cref="Transaction"/>s for proposing a next block
        /// from the current set of staged <see cref="Transaction"/>s.
        /// </summary>
        /// <param name="maxTransactionsBytes">The maximum number of bytes a block can have.</param>
        /// <param name="maxTransactions">The maximum number of <see cref="Transaction"/>s
        /// allowed.</param>
        /// <param name="maxTransactionsPerSigner">The maximum number of
        /// <see cref="Transaction"/>s with the same signer allowed.</param>
        /// <param name="minTransactions">The minimum number of <see cref="Transaction"/>s
        /// allowed.</param>
        /// <param name="txPriority">An optional comparer for give certain transactions to
        /// priority to belong to the block.  No certain priority by default.</param>
        /// <returns>An <see cref="ImmutableList"/> of <see cref="Transaction"/>s with its
        /// count not exceeding <paramref name="maxTransactions"/> and the number of
        /// <see cref="Transaction"/>s in the list for each signer not exceeding
        /// <paramref name="maxTransactionsPerSigner"/>.</returns>
        /// <exception cref="InvalidOperationException">Thrown when not all policies
        /// can be satisfied.</exception>
        internal ImmutableList<Transaction> GatherTransactionsToPropose(
            long maxTransactionsBytes,
            int maxTransactions,
            int maxTransactionsPerSigner,
            int minTransactions,
            IComparer<Transaction> txPriority = null)
        {
            long index = Count;
            ImmutableList<Transaction> stagedTransactions = ListStagedTransactions(txPriority);
            _logger.Information(
                "Gathering transactions to propose for block #{Index} from {TxCount} " +
                "staged transactions...",
                index,
                stagedTransactions.Count);

            var transactions = new List<Transaction>();

            // FIXME: The tx collection timeout should be configurable.
            DateTimeOffset timeout = DateTimeOffset.UtcNow + TimeSpan.FromSeconds(4);

            List estimatedEncoding = BlockMarshaler.MarshalTransactions(
                new List<Transaction>());
            var storedNonces = new Dictionary<Address, long>();
            var nextNonces = new Dictionary<Address, long>();
            var toProposeCounts = new Dictionary<Address, int>();

            foreach (
                (Transaction tx, int i) in stagedTransactions.Select((val, idx) => (val, idx)))
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
                        "transactions per block allowed has been reached: {Max}",
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

                    try
                    {
                        foreach (IValue rawAction in tx.Actions)
                        {
                            _ = ActionEvaluator.ActionLoader.LoadAction(index, rawAction);
                        }
                    }
                    catch (Exception e)
                    {
                        _logger.Error(
                            e,
                            "Failed to load an action in tx; marking tx {TxId} as ignored...",
                            tx.Id);
                        StagePolicy.Ignore(this, tx.Id);
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
