using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;

namespace Libplanet.Tx
{
    /// <summary>
    /// Useful extension methods for <see cref="ITxExcerpt"/>.
    /// </summary>
    public static class TxExcerptExtensions
    {
        /// <summary>
        /// Validates if <paramref name="transactions"/> has valid nonces.
        /// It assumes all given <paramref name="transactions"/> belong to a block together.
        /// </summary>
        /// <param name="transactions">A list of transactions.  Their order does not matter.</param>
        /// <param name="blockIndex">The index of the block that transactions will belong to.
        /// It's only used for exception messages.</param>
        /// <typeparam name="T">A transaction type.</typeparam>
        /// <exception cref="InvalidTxNonceException">Thrown when the same tx nonce is used by
        /// a signer twice or more, or a tx nonce is used without its previous nonce by a signer.
        /// Note that this validates only a block's intrinsic integrity between its transactions,
        /// but does not guarantee integrity between blocks.  Such validation needs to be conducted
        /// by <see cref="Blockchain.BlockChain{T}"/>.</exception>
        /// <exception cref="InvalidTxGenesisHashException">Thrown when transactions to set have
        /// inconsistent genesis hashes.</exception>
        // FIXME: Needs a unit tests.  See also BlockContentTest.Transactions* tests.
        public static void ValidateTxNonces<T>(this IEnumerable<T> transactions, long blockIndex)
            where T : ITxExcerpt
        {
            IEnumerable<IGrouping<Address, T>> signerTxs =
                transactions.OrderBy(tx => tx.Nonce).GroupBy(tx => tx.Signer);
            BlockHash? genesisHash = null;
            foreach (IGrouping<Address, T> txs in signerTxs)
            {
                long lastNonce = -1L;
                foreach (T tx in txs)
                {
                    long nonce = tx.Nonce;
                    if (lastNonce >= 0 && lastNonce + 1 != nonce)
                    {
                        Address s = tx.Signer;
                        string msg = nonce <= lastNonce
                            ? $"The signer {s}'s nonce {nonce} was already consumed before."
                            : $"The signer {s}'s nonce {lastNonce} has to be added first.";
                        throw new InvalidTxNonceException(msg, tx.Id, lastNonce + 1, tx.Nonce);
                    }

                    if (genesisHash is { } g && !tx.GenesisHash.Equals(g))
                    {
                        throw new InvalidTxGenesisHashException(
                            $"Transactions in the block #{blockIndex} are inconsistent.",
                            tx.Id,
                            g,
                            tx.GenesisHash
                        );
                    }

                    lastNonce = nonce;
                    genesisHash = tx.GenesisHash;
                }
            }
        }
    }
}
