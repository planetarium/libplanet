using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Tx;

namespace Libplanet.Explorer.Queries
{
    public class Query<T> : ObjectGraphType
        where T : IAction, new()
    {
        private static BlockChain<T> _chain;

        public Query(BlockChain<T> chain)
        {
            Field<BlockQuery<T>>("blockQuery", resolve: context => new { });
            Field<TransactionQuery<T>>("transactionQuery", resolve: context => new { });

            _chain = chain;
            Name = "Query";
        }

        internal static IEnumerable<Block<T>> ListBlocks(
            bool desc,
            long offset,
            long? limit,
            bool excludeEmptyTxs)
        {
            Block<T> tip = _chain.Tip;
            long tipIndex = tip.Index;

            if (offset < 0)
            {
                offset = tipIndex + offset + 1;
            }

            if (tipIndex < offset || offset < 0)
            {
                yield break;
            }

            Block<T> block = desc ? _chain[tipIndex - offset] : _chain[offset];

            while (limit is null || limit > 0)
            {
                if (!excludeEmptyTxs || block.Transactions.Any())
                {
                    limit--;
                    yield return block;
                }

                block = GetNextBlock(block, desc);

                if (block is null)
                {
                    break;
                }
            }
        }

        internal static IEnumerable<Transaction<T>> ListTransactions(
            Address? signer, Address? involved, bool desc, long offset, int? limit)
        {
            Block<T> tip = _chain.Tip;
            long tipIndex = tip?.Index ?? -1;

            if (offset < 0)
            {
                offset = tipIndex + offset + 1;
            }

            if (tipIndex < offset || offset < 0)
            {
                yield break;
            }

            Block<T> block = _chain[desc ? tipIndex - offset : offset];

            while (!(block is null) && (limit is null || limit > 0))
            {
                foreach (var tx in desc ? block.Transactions.Reverse() : block.Transactions)
                {
                    if (IsValidTransacion(tx, signer, involved))
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

        internal static Block<T> GetBlock(HashDigest<SHA256> hash)
        {
            return _chain[hash];
        }

        internal static Transaction<T> GetTransaction(TxId id)
        {
            return _chain.GetTransaction(id);
        }

        private static Block<T> GetNextBlock(Block<T> block, bool desc)
        {
            if (desc && block.PreviousHash is HashDigest<SHA256> prev)
            {
                return _chain[prev];
            }
            else if (!desc && block != _chain.Tip)
            {
                return _chain[block.Index + 1];
            }

            return null;
        }

        private static bool IsValidTransacion(
            Transaction<T> tx,
            Address? signer,
            Address? involved)
        {
            if (involved is null && signer is null)
            {
                return true;
            }
            else if (!(signer is null))
            {
                return tx.Signer.Equals(signer.Value);
            }
            else
            {
                return tx.UpdatedAddresses.Contains(involved.Value);
            }
        }
    }
}
