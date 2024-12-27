using System;
using System.Collections.Generic;
using System.Linq;
using GraphQL.Types;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
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

        internal static IEnumerable<Block> ListBlocks(
            bool desc,
            long offset,
            long? limit)
        {
            Block tip = Chain.Tip;
            long tipIndex = tip.Index;

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
                yield break;
            }

            Block? block = Chain[desc ? tipIndex - offset : offset];
            while (block is not null && limit is null or > 0)
            {
                foreach (var tx in desc ? block.Transactions.Reverse() : block.Transactions)
                {
                    if (IsValidTransaction(tx, signer))
                    {
                        yield return tx;
                        limit--;
                        if (limit <= 0)
                        {
                            break;
                        }
                    }
                }

                block = GetNextBlock(block, desc);
            }
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

        internal static IEnumerable<EvidenceBase> ListPendingEvidence()
        {
            var blockChain = Chain;
            return blockChain.GetPendingEvidence();
        }

        internal static IEnumerable<EvidenceBase> ListCommitEvidence(BlockHash blockHash)
        {
            var blockChain = Chain;
            var block = blockChain[blockHash];
            return block.Evidence;
        }

        internal static IEnumerable<EvidenceBase> ListCommitEvidence(long index)
        {
            var blockChain = Chain;
            var block = blockChain[index];
            return block.Evidence;
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
