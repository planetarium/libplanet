using System;
using System.Collections;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class that contains the hashes for a series of blocks.
    /// </summary>
    public class BlockLocator : IEnumerable<BlockHash>
    {
        private readonly IEnumerable<BlockHash> _impl;

        /// <summary>
        /// Initializes a new instance of <see cref="BlockLocator"/> with a set of indexer
        /// functions, sampling after <paramref name="sampleAfter"/> number of blocks.
        /// </summary>
        /// <param name="indexBlockHash">A function that converts an index to a
        /// <see cref="BlockHash"/>.</param>
        /// <param name="indexByBlockHash">A function that converts a <see cref="BlockHash"/> to its
        /// index.</param>
        /// <param name="sampleAfter">The number of consequent blocks to include before sampling.
        /// </param>
        public BlockLocator(
            Func<long, BlockHash?> indexBlockHash,
            Func<BlockHash, long> indexByBlockHash,
            int sampleAfter = 10
        )
            : this(
                indexBlockHash(-1),
                indexBlockHash,
                indexByBlockHash,
                sampleAfter
            )
        {
        }

        /// <summary>
        /// Initializes a new instance of <see cref="BlockLocator"/> from <paramref name="hashes"/>.
        /// </summary>
        /// <param name="hashes">Enumerable of <see cref="BlockHash"/>es to convert from.</param>
        public BlockLocator(IEnumerable<BlockHash> hashes)
        {
            _impl = hashes;
        }

        internal BlockLocator(
            BlockHash? tipHash,
            Func<long, BlockHash?> indexBlockHash,
            Func<BlockHash, long> indexByBlockHash,
            int sampleAfter
        )
        {
            BlockHash? current = tipHash;
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

        /// <summary>
        /// Gets the enumerator.
        /// </summary>
        /// <returns>The enumerator.</returns>
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
