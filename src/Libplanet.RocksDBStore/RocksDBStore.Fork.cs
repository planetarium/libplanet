using System;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using RocksDbSharp;

namespace Libplanet.RocksDBStore
{
    public partial class RocksDBStore
    {
        /// <summary>
        /// Forks block indexes from <paramref name="sourceChainId"/> to
        /// <paramref name="destinationChainId"/>.
        /// </summary>
        /// <param name="sourceChainId">The chain ID of block indexes to fork.</param>
        /// <param name="destinationChainId">The chain ID of destination block indexes.</param>
        /// <param name="branchpoint">The branchpoint <see cref="Block"/> to fork.</param>
        /// <seealso cref="IterateIndexes(Guid, int, int?)"/>
        /// <seealso cref="AppendIndex(Guid, BlockHash)"/>
        public void ForkBlockIndexes(
            Guid sourceChainId,
            Guid destinationChainId,
            BlockHash branchpoint
        )
        {
            BlockHash[] bottoms = IterateIndexes(sourceChainId, 0, 1, true).ToArray();
            BlockHash? genesisHash = bottoms.Any() ? bottoms[0] : (BlockHash?)null;

            if (genesisHash is null || branchpoint.Equals(genesisHash))
            {
                return;
            }

            using var batch = new WriteBatch();
            foreach (Iterator k in IterateDb(_chainDb, IndexKey(destinationChainId)))
            {
                batch.Delete(k.Key());
            }

            if (!(GetBlockIndex(branchpoint) is { } bpIndex))
            {
                return;
            }

            _chainDb.Write(batch);

            // Do fork from previous chain instead current if it's available and same as current.
            if (GetPreviousChainInfo(sourceChainId) is { } chainInfo &&
                chainInfo.Item2 == bpIndex)
            {
                ForkBlockIndexes(chainInfo.Item1, destinationChainId, branchpoint);
                return;
            }

            _chainDb.Put(PreviousChainIdKey(destinationChainId), sourceChainId.ToByteArray());
            _chainDb.Put(
                PreviousChainIndexKey(destinationChainId),
                RocksDBStoreBitConverter.GetBytes(bpIndex)
            );
            _chainDb.Put(
                IndexCountKey(destinationChainId),
                RocksDBStoreBitConverter.GetBytes(bpIndex + 1)
            );

            _chainDb.Put(ChainIdKey(destinationChainId), destinationChainId.ToByteArray());
            AddFork(sourceChainId, destinationChainId);
        }

        /// <summary>
        /// Forks <see cref="Transaction"/> <see cref="Transaction.Nonce"/>s from
        /// <paramref name="sourceChainId"/> to <paramref name="destinationChainId"/>.
        /// </summary>
        /// <param name="sourceChainId">The chain <see cref="BlockChain.Id"/> of
        /// <see cref="Transaction"/> <see cref="Transaction.Nonce"/>s to fork.</param>
        /// <param name="destinationChainId">The chain <see cref="BlockChain.Id"/> of destination
        /// <see cref="Transaction"/> <see cref="Transaction.Nonce"/>s.</param>
        public void ForkTxNonces(Guid sourceChainId, Guid destinationChainId)
        {
            var writeBatch = new WriteBatch();
            bool exist = false;
            try
            {
                byte[] prefix = TxNonceKey(sourceChainId);
                foreach (Iterator it in IterateDb(_chainDb, prefix))
                {
                    exist = true;
                    Address address = new Address(it.Key().Skip(prefix.Length).ToArray());
                    writeBatch.Put(TxNonceKey(destinationChainId, address), it.Value());
                    if (writeBatch.Count() >= ForkWriteBatchSize)
                    {
                        _chainDb.Write(writeBatch);
                        writeBatch.Dispose();
                        writeBatch = new WriteBatch();
                    }
                }
            }
            catch (Exception e)
            {
                LogUnexpectedException(nameof(ForkTxNonces), e);
                throw;
            }
            finally
            {
                if (exist)
                {
                    _chainDb.Write(writeBatch);
                    writeBatch.Dispose();
                }
            }
        }
    }
}
