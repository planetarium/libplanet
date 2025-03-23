#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Common.Extensions;
using Libplanet.Store;
using Libplanet.Types.Blocks;
using RocksDbSharp;

namespace Libplanet.RocksDBStore
{
    public partial class RocksDBStore : BaseStore
    {
        /// <inheritdoc cref="IStore.PruneOutdatedChains"/>
        public override void PruneOutdatedChains(bool noopWithoutCanon = false)
        {
            if (!(GetCanonicalChainId() is { } ccid))
            {
                if (noopWithoutCanon)
                {
                    return;
                }

                throw new InvalidOperationException("Canonical chain ID is not assigned.");
            }

            using var batch = new WriteBatch();

            // Copy indexes from previous chains.
            // TxNonce is not copied because it is copied during .ForkTxNonces().
            long index = 0;
            foreach (var hash in IterateIndexesForPrune(ccid))
            {
                batch.Put(
                    IndexKey(ccid, RocksDBStoreBitConverter.GetBytes(index)),
                    hash.ToByteArray());

                if (batch.Count() > 10000)
                {
                    _chainDb.Write(batch);
                    batch.Clear();
                }

                index++;
            }

            _chainDb.Write(batch);
            batch.Clear();

            batch.Delete(PreviousChainIdKey(ccid));
            batch.Delete(PreviousChainIndexKey(ccid));
            batch.Delete(DeletedChainKey(ccid));
            _chainDb.Write(batch);
            batch.Clear();

            int guidLength = ccid.ToByteArray().Length;
            using Iterator it = _chainDb.NewIterator();
            for (it.SeekToFirst();
                 it.Valid();
                 it.Next())
            {
                if (it.Key().StartsWith(CanonicalChainIdIdKey))
                {
                    continue;
                }

                try
                {
                    var id = new Guid(it.Key().Skip(1).Take(guidLength).ToArray());
                    if (id.Equals(ccid))
                    {
                        continue;
                    }

                    batch.Delete(it.Key());
                }
                catch (Exception)
                {
                    // Key is corrupted, delete.
                    batch.Delete(it.Key());
                }

                if (batch.Count() > 10000)
                {
                    _chainDb.Write(batch);
                    batch.Clear();
                }
            }

            _chainDb.Write(batch);
            batch.Clear();
        }

        private IEnumerable<BlockHash> IterateIndexesForPrune(Guid chainId)
        {
            Stack<(Guid Id, long Count)> chainInfos =
                new Stack<(Guid Id, long Count)>();

            chainInfos.Push((chainId, CountIndex(chainId)));
            while (GetPreviousChainInfo(chainInfos.Peek().Id) is { } chainInfo)
            {
                chainInfos.Push(chainInfo);
            }

            List<BlockHash> hashes = new List<BlockHash>();

            while (chainInfos.Count > 0)
            {
                var chainInfo = chainInfos.Pop();

                foreach ((BlockHash hash, int i) in
                    IterateIndexesInnerForPrune(chainInfo.Id).Select((hash, i) => (hash, i)))
                {
                    if (i == 0)
                    {
                        BlockDigest digest = GetBlockDigest(hash);

                        // NOTE: This means there is a gap between two chain ids.
                        if (digest.Index > hashes.Count)
                        {
                            throw new InvalidOperationException(
                                $"Next block is expected to be of index #{hashes.Count} but " +
                                $"got #{digest.Index} {digest.Hash}.");
                        }

                        // NOTE: This means there is an overlap between two chain ids.
                        // The newer one should overwrite the old.
                        if (digest.Index < hashes.Count)
                        {
                            // NOTE: Make sure it can be overwritten by checking continuity.
                            if (digest.PreviousHash is { } previousHash)
                            {
                                BlockHash targetHash = hashes[(int)digest.Index - 1];
                                if (!previousHash.Equals(targetHash))
                                {
                                    throw new InvalidOperationException(
                                        $"The previous hash {previousHash} of a retrieved " +
                                        $"block #{digest.Index} {digest.Hash} " +
                                        $"does not match the one iterated so far {targetHash}");
                                }
                            }

                            // NOTE: Truncate the iterated list so far.
                            _logger.Debug(
                                "Truncating hashes iterated so far from " +
                                "{IteratedCount} to {TargetCount}",
                                hashes.Count,
                                digest.Index);
                            hashes.RemoveRange(
                                (int)digest.Index, (int)(hashes.Count - digest.Index));
                        }
                    }

                    // NOTE: We assume non-first hashes are sequential for a chain id.
                    hashes.Add(hash);
                }
            }

            BlockHash lastHash = hashes.Last();
            BlockDigest lastDigest = GetBlockDigest(lastHash);

            if (lastDigest.Index != hashes.Count - 1)
            {
                throw new InvalidOperationException(
                    $"The last iterated block is #{lastDigest.Index} {lastDigest.Hash} when " +
                    $"its expected index is {hashes.Count}");
            }

            return hashes;
        }

        private IEnumerable<BlockHash> IterateIndexesInnerForPrune(Guid chainId)
        {
            byte[] prefix = Concat(IndexKeyPrefix, chainId.ToByteArray());
            foreach (Iterator it in IterateDb(_chainDb, prefix))
            {
                byte[] value = it.Value();
                yield return new BlockHash(value);
            }
        }
    }
}
