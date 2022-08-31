#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tx;
using static Libplanet.Blocks.BlockMarshaler;

namespace Libplanet.Blockchain
{
    public partial class BlockChain<T>
    {
        /// <summary>
        /// <para>
        /// Proposes a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </para>
        /// <para>
        /// All unprovided and/or <c>null</c> arguments are reassigned accordingly and redirected
        /// to a overloaded method with non-nullable parameters.  By default, a policy adhering
        /// block is produced with current timestamp and appended immediately to the chain.
        /// </para>
        /// </summary>
        /// <param name="proposer">
        /// The proposer's <see cref="PublicKey"/> that proposes the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when proposing started.</param>
        /// <param name="maxBlockBytes">The maximum number of bytes a block can have.
        /// See also <see cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>.</param>
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
            DateTimeOffset? timestamp = null,
            long? maxBlockBytes = null,
            int? maxTransactions = null,
            int? maxTransactionsPerSigner = null,
            IComparer<Transaction<T>> txPriority = null,
            BlockCommit? lastCommit = null) =>
#pragma warning disable SA1118
            ProposeBlock(
                proposer: proposer,
                timestamp: timestamp ?? DateTimeOffset.UtcNow,
                maxBlockBytes: maxBlockBytes
                               ?? Policy.GetMaxBlockBytes(Count),
                maxTransactions: maxTransactions
                                 ?? Policy.GetMaxTransactionsPerBlock(Count),
                maxTransactionsPerSigner: maxTransactionsPerSigner
                                          ?? Policy.GetMaxTransactionsPerSignerPerBlock(Count),
                txPriority: txPriority,
                lastCommit: lastCommit);
#pragma warning restore SA1118

        /// <summary>
        /// Proposes a next <see cref="Block{T}"/> using staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="proposer">
        /// The proposer's <see cref="PublicKey"/> that proposes the block.</param>
        /// <param name="timestamp">The <see cref="DateTimeOffset"/> when proposing started.</param>
        /// <param name="maxBlockBytes">The maximum number of bytes a block can have.
        /// See also <see cref="IBlockPolicy{T}.GetMaxBlockBytes(long)"/>.</param>
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
            long maxBlockBytes,
            int maxTransactions,
            int maxTransactionsPerSigner,
            IComparer<Transaction<T>> txPriority = null,
            BlockCommit? lastCommit = null)
        {
            long index = Count;
            long difficulty = 1L;
            BlockHash? prevHash = index > 0 ? Store.IndexBlockHash(Id, index - 1) : null;

            int sessionId = new System.Random().Next();
            int processId = Process.GetCurrentProcess().Id;
            _logger.Debug(
                "{SessionId}/{ProcessId}: Starting to propose block #{Index} with " +
                "difficulty {Difficulty} and previous hash {PreviousHash}...",
                sessionId,
                processId,
                index,
                difficulty,
                prevHash);

            // TODO: Should validate LastCommit somewhere?
            var metadata = new BlockMetadata
            {
                Index = index,
                PublicKey = proposer.PublicKey,
                PreviousHash = prevHash,
                Timestamp = timestamp,
                LastCommit = lastCommit,
            };

            var transactionsToMine = GatherTransactionsToPropose(
                metadata,
                maxBlockBytes: maxBlockBytes,
                maxTransactions: maxTransactions,
                maxTransactionsPerSigner: maxTransactionsPerSigner,
                txPriority: txPriority
            );

            if (transactionsToMine.Count < Policy.GetMinTransactionsPerBlock(index))
            {
                throw new OperationCanceledException(
                    $"Proposal operation canceled due to insufficient number of " +
                    $"gathered transactions to mine for the requirement of " +
                    $"{Policy.GetMinTransactionsPerBlock(index)} " +
                    $"given by the policy: {transactionsToMine.Count}");
            }

            _logger.Verbose(
                "{SessionId}/{ProcessId}: Propose block #{Index} will include " +
                "{TxCount} transactions.",
                sessionId,
                processId,
                index,
                transactionsToMine.Count);

            var blockContent = new BlockContent<T>(metadata) { Transactions = transactionsToMine };
            PreEvaluationBlock<T> preEval;

            preEval = blockContent.Propose();

            (Block<T> block, IReadOnlyList<ActionEvaluation> actionEvaluations) =
                preEval.EvaluateActions(proposer, this);
            IEnumerable<TxExecution> txExecutions = MakeTxExecutions(block, actionEvaluations);
            UpdateTxExecutions(txExecutions);

            _logger.Debug(
                "{SessionId}/{ProcessId}: Mined block #{Index} {Hash} " +
                "with previous hash {PreviousHash}.",
                sessionId,
                processId,
                block.Index,
                block.Hash,
                block.PreviousHash);

            return block;
        }

        /// <summary>
        /// Gathers <see cref="Transaction{T}"/>s for proposing a next block
        /// from the current set of staged <see cref="Transaction{T}"/>s.
        /// </summary>
        /// <param name="metadata">The metadata of the block to be mined.</param>
        /// <param name="maxBlockBytes">The maximum number of bytes a block can have.</param>
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
        internal ImmutableList<Transaction<T>> GatherTransactionsToPropose(
            BlockMetadata metadata,
            long maxBlockBytes,
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

            int digestSize = BlockMetadata.HashAlgorithmType.DigestSize;

            // Makes an empty block payload to estimate the length of bytes without transactions.
            // FIXME: We'd better to estimate only transactions rather than the whole block.
            var dumbSig = metadata.PublicKey is null
                ? (ImmutableArray<byte>?)null
                : ImmutableArray.Create(new byte[71]);
            Bencodex.Types.Dictionary marshaledEmptyBlock = MarshalBlock(
                marshaledBlockHeader: MarshalBlockHeader(
                    marshaledPreEvaluatedBlockHeader: MarshalPreEvaluationBlockHeader(
                        marshaledMetadata: MarshalBlockMetadata(metadata),
                        preEvaluationHash: new HashDigest<SHA256>(new byte[digestSize])
                    ),
                    stateRootHash: default,
                    signature: dumbSig,
                    hash: default
                ),
                marshaledTransactions: BlockMarshaler.MarshalTransactions(
                    Array.Empty<Transaction<T>>()
                )
            );
            Dictionary estimatedEncoding = marshaledEmptyBlock;

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
                            "Ignoring tx {Iter}/{Total} {TxId} as it does not follow policy.",
                            i,
                            stagedTransactions.Count,
                            tx.Id);
                        StagePolicy.Ignore(this, tx.Id);
                        continue;
                    }

                    Dictionary txAddedBlockEncoding =
                        AppendTxToMarshaledBlock(estimatedEncoding, tx);
                    if (txAddedBlockEncoding.EncodingLength > maxBlockBytes)
                    {
                        _logger.Debug(
                            "Ignoring tx {Iter}/{Total} {TxId} due to the maximum size " +
                            "allowed for a block: {CurrentEstimate}/{MaximumBlockBytes}",
                            i,
                            stagedTransactions.Count,
                            tx.Id,
                            txAddedBlockEncoding.EncodingLength,
                            maxBlockBytes);
                        continue;
                    }

                    if (toMineCounts[tx.Signer] >= maxTransactionsPerSigner)
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
                        "to be mined.",
                        i,
                        stagedTransactions.Count,
                        tx.Id);
                    transactionsToMine.Add(tx);
                    nextNonces[tx.Signer] += 1;
                    toMineCounts[tx.Signer] += 1;
                    estimatedEncoding = txAddedBlockEncoding;
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
                        "transactions will be mined later.");
                    break;
                }
            }

            _logger.Information(
                "Gathered total of {TransactionsToMineCount} transactions to mine for " +
                "block #{Index} from {StagedTransactionsCount} staged transactions.",
                transactionsToMine.Count,
                index,
                stagedTransactions.Count);
            return transactionsToMine.ToImmutableList();
        }
    }
}
