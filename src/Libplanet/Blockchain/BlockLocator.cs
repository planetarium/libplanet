using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Types.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class that contains <see cref="BlockHash"/>es for a series of blocks.
    /// </summary>
    public class BlockLocator : IEnumerable<BlockHash>
    {
        private readonly List<BlockHash> _impl;

        /// <summary>
        /// Initializes a new instance of <see cref="BlockLocator"/> from <paramref name="hashes"/>.
        /// </summary>
        /// <param name="hashes">Enumerable of <see cref="BlockHash"/>es to convert from.</param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="hashes"/> is empty.
        /// </exception>
        public BlockLocator(IEnumerable<BlockHash> hashes)
        {
            _impl = hashes.Any()
                ? hashes.ToList()
                : throw new ArgumentException(
                    $"Given {nameof(hashes)} cannot be empty.", nameof(hashes));
        }

        /// <summary>
        /// <para>
        /// Creates a new instance of <see cref="BlockLocator"/>.
        /// </para>
        /// </summary>
        /// <param name="genesisHash">The <see cref="BlockHash"/> of the genesis.</param>
        /// <param name="tipHash">The <see cref="BlockHash"/> of the tip.</param>
        /// <returns>
        /// An instance of <see cref="BlockLocator"/> created with given arguments.
        /// </returns>
        public static BlockLocator Create(BlockHash genesisHash, BlockHash tipHash) =>
            genesisHash.Equals(tipHash)
                ? new BlockLocator(new[] { genesisHash })
                : new BlockLocator(new[] { tipHash, genesisHash });

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
