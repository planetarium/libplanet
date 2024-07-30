using System;
using System.Collections.Generic;
using System.Linq;
using GraphQL.Types;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Indexing;
using Libplanet.Explorer.Interfaces;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;

namespace Libplanet.Explorer.Queries
{
    public class ExplorerQuery : ObjectGraphType
    {
        private static IBlockChainContext? _chainContext;

        public ExplorerQuery(IBlockChainContext chainContext)
        {
            _chainContext = chainContext;
            Field<BlockQuery>("blockQuery", resolve: context => new { });
            Field<TransactionQuery>("transactionQuery", resolve: context => new { });
            Field<EvidenceQuery>("evidenceQuery", resolve: context => new { });
            Field<StateQuery>("stateQuery", resolve: context => chainContext.BlockChain);
            Field<NonNullGraphType<NodeStateType>>("nodeState", resolve: context => chainContext);
            Field<HelperQuery>("helperQuery", resolve: context => new { });
            Field<RawStateQuery>("rawStateQuery", resolve: context => chainContext.BlockChain);

            Name = "ExplorerQuery";
        }

        private static IBlockChainContext ChainContext => _chainContext!;

        private static BlockChain Chain => ChainContext.BlockChain;

        private static IStore Store => ChainContext.Store;

        private static IBlockChainIndex Index => ChainContext.Index;

        internal static IEnumerable<Block> ListBlocks(
            bool desc,
            long offset,
            long? limit,
            bool excludeEmptyTxs,
            Address? miner)
        {
            Block tip = Chain.Tip;
            long tipIndex = tip.Index;
            IStore store = ChainContext.Store;

            var blocks = ListBlocks(
                Chain,
                desc ? tipIndex - offset - (limit ?? 100) : offset,
                limit ?? 100);
            return desc ? blocks.OrderByDescending(x => x.Index)
                : blocks.OrderBy(x => x.Index);
        }

        internal static IEnumerable<Transaction> ListTransactions(
            Address? signer, bool desc, long offset, int? limit)
        {
            Block tip = Chain.Tip;
            long tipIndex = tip.Index;

            if (offset < 0)
            {
                offset = tipIndex + offset + 1;
            }

            if (tipIndex < offset || offset < 0)
            {
                return new List<Transaction>();
            }

            List<Transaction> result = new List<Transaction>();
            const int batchSize = 3;

            while (result.Count < (limit ?? 100))
            {
                var blocks = ListBlocks(
                    Chain,
                    desc ? tipIndex - offset - batchSize : offset,
                    batchSize);
                var transactions = blocks
                    .SelectMany(x => x.Transactions)
                    .Where(x => IsValidTransaction(x, signer));
                var delta = (limit ?? 100) - result.Count;
                if (delta <= 0)
                {
                    break;
                }

                result.AddRange(transactions.Take(delta));
                offset += batchSize;
            }

            return result;
        }

        internal static IEnumerable<Transaction> ListStagedTransactions(
            Address? signer, bool desc, int offset, int? limit)
        {
            if (offset < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(offset),
                    $"{nameof(ListStagedTransactions)} doesn't support negative offset.");
            }

            var stagedTxs = Chain.StagePolicy.Iterate(Chain)
                .Where(tx => IsValidTransaction(tx, signer))
                .Skip(offset);

            stagedTxs = desc ? stagedTxs.OrderByDescending(tx => tx.Timestamp)
                : stagedTxs.OrderBy(tx => tx.Timestamp);

            stagedTxs = stagedTxs.TakeWhile((tx, index) => limit is null || index < limit);

            return stagedTxs;
        }

        internal static IEnumerable<EvidenceBase> ListPendingEvidence(
            bool desc, int offset, int? limit)
        {
            if (offset < 0)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(offset),
                    $"{nameof(ListPendingEvidence)} doesn't support negative offset.");
            }

            var blockChain = Chain;
            var comparer = desc ? EvidenceIdComparer.Descending : EvidenceIdComparer.Ascending;
            var evidence = blockChain.GetPendingEvidence()
                                      .Skip(offset)
                                      .Take(limit ?? int.MaxValue)
                                      .OrderBy(ev => ev.Id, comparer);

            return evidence;
        }

        internal static IEnumerable<EvidenceBase> ListCommitEvidence(
            BlockHash? blockHash, bool desc, int offset, int? limit)
        {
            var blockChain = Chain;
            var block = blockHash != null ? blockChain[blockHash.Value] : blockChain.Tip;
            var comparer = desc ? EvidenceIdComparer.Descending : EvidenceIdComparer.Ascending;
            var evidence = block.Evidence
                                 .Skip(offset)
                                 .Take(limit ?? int.MaxValue)
                                 .OrderBy(ev => ev.Id, comparer);

            return evidence;
        }

        internal static Block? GetBlockByHash(BlockHash hash) => Store.GetBlock(hash);

        internal static Block GetBlockByIndex(long index) => Chain[index];

        internal static Transaction GetTransaction(TxId id) => Chain.GetTransaction(id);

        internal static EvidenceBase GetEvidence(EvidenceId id) => Chain.GetCommittedEvidence(id);

        private static Block? GetNextBlock(Block block, bool desc)
        {
            if (desc && block.PreviousHash is { } prev)
            {
                return Chain[prev];
            }
            else if (!desc && block != Chain.Tip)
            {
                return Chain[block.Index + 1];
            }

            return null;
        }

        private static IEnumerable<Block> ListBlocks(BlockChain chain, long from, long limit)
        {
            if (chain.Tip.Index < from)
            {
                return new List<Block>();
            }

            var count = (int)Math.Min(limit, chain.Tip.Index - from + 1);
            var blocks = Enumerable.Range(0, count)
                .Select(offset => chain[from + offset])
                .OrderBy(block => block.Index);

            return blocks;
        }

        private static bool IsValidTransaction(
            Transaction tx,
            Address? signer)
        {
            if (signer is { } signerVal)
            {
                return tx.Signer.Equals(signerVal);
            }

            return true;
        }
    }
}
