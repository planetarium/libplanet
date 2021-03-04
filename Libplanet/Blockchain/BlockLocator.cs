#nullable enable
using System;
using System.Collections;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    internal class BlockLocator : IEnumerable<BlockHash>
    {
        private readonly IEnumerable<BlockHash> _impl;

        public BlockLocator(
            Func<long, BlockHash?> indexBlockHash,
            Func<BlockHash, long> indexByBlockHash,
            int sampleAfter = 10
        )
        {
            BlockHash? current = indexBlockHash(-1);
            long step = 1;
            var hashes = new List<BlockHash>();
            while (current is { } hash)
            {
                hashes.Add(hash);
                long currentBlockIndex = indexByBlockHash(hash);

                if (currentBlockIndex == 0)
                {
                    break;
                }

                long nextIndex = Math.Max(currentBlockIndex - step, 0);
                current = indexBlockHash(nextIndex);

                if (hashes.Count >= sampleAfter)
                {
                    step *= 2;
                }
            }

            _impl = hashes;
        }

        public BlockLocator(IEnumerable<BlockHash> hashes)
        {
            _impl = hashes;
        }

        public IEnumerator<BlockHash> GetEnumerator()
        {
            return _impl.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return _impl.GetEnumerator();
        }
    }
}
