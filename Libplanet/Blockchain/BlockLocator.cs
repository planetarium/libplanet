using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blocks;

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
        /// Creates a new instance of <see cref="BlockLocator"/> with an indexer
        /// function, sampling after <paramref name="sampleAfter"/> number of
        /// <see cref="Block{T}"/>s.
        /// </para>
        /// <para>
        /// This collects all <see cref="BlockHash"/>es corresponding to indices inductively
        /// defined by:
        /// <list type="bullet">
        ///   <item><description>
        ///     <c>i_0 = startIndex</c>
        ///   </description></item>
        ///   <item><description>
        ///     <c>i_k = max(i_(k - 1) - 1, 0)</c> for <c>0 &lt; k</c> and  <c>k &lt;= s</c>
        ///   </description></item>
        ///   <item><description>
        ///     <c>i_k = max(i_(k - 1) - 2^(k - 1 - s), 0)</c> for <c>0 &lt; k</c>
        ///     and <c>s &lt; k</c>
        ///   </description></item>
        /// </list>
        /// where <c>s = max(sampleAfter, 0)</c> and the sequence terminates after index <c>i_k</c>
        /// reaches zero or the <see cref="BlockHash"/> returned by
        /// <paramref name="indexToBlockHash"/> for <c>i_k</c> is <see langword="null"/>,
        /// in which case the <see cref="BlockHash"/> corresponding to index <c>0</c>
        /// (presumably a <see cref="BlockHash"/> of the genesis <see cref="Block{T}"/>)
        /// is added at the end.
        /// </para>
        /// </summary>
        /// <param name="startIndex">The starting index.</param>
        /// <param name="indexToBlockHash">The function that converts an index to a
        /// <see cref="BlockHash"/>.  This can be <see langword="null"/> which indicates
        /// a missing <see cref="Block{T}"/> at the index.  Any value from <c>0</c> to
        /// <paramref name="startIndex"/> may be used as an argument to call this function.</param>
        /// <param name="sampleAfter">The number of consecutive blocks to include before sampling.
        /// </param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when <paramref name="startIndex"/>
        /// is negative.</exception>
        /// <exception cref="ArgumentException">Thrown when either <see cref="BlockHash"/> returned
        /// by <paramref name="indexToBlockHash"/> for index <c>0</c> is <see langword="null"/>.
        /// </exception>
        /// <returns>
        /// An instance of <see cref="BlockLocator"/> created with given arguments.
        /// </returns>
        /// <remarks>
        /// Returned <see cref="BlockLocator"/> created by this factory method is guaranteed
        /// to have the <see cref="BlockHash"/> corresponding to index <c>0</c>.
        /// </remarks>
        public static BlockLocator Create(
            long startIndex,
            Func<long, BlockHash?> indexToBlockHash,
            long sampleAfter = 10)
        {
            if (startIndex < 0)
            {
                throw new ArgumentOutOfRangeException(
                    $"Given {nameof(startIndex)} cannot be negative: {startIndex}",
                    nameof(startIndex));
            }

            BlockHash genesisHash = indexToBlockHash(0) ??
                throw new ArgumentException(
                    $"Given {nameof(indexToBlockHash)} should not be null at zero index.",
                    nameof(indexToBlockHash));
            var hashes = new List<BlockHash>();

            foreach (long index in GetEnumeratedIndices(startIndex, sampleAfter))
            {
                if (indexToBlockHash(index) is { } hash)
                {
                    hashes.Add(hash);
                }
                else
                {
                    hashes.Add(genesisHash);
                    break;
                }
            }

            return new BlockLocator(hashes);
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

        private static IEnumerable<long> GetEnumeratedIndices(long startIndex, long sampleAfter)
        {
            long currentIndex = startIndex;
            long step = 1;
            while (currentIndex > 0)
            {
                yield return currentIndex;
                currentIndex = Math.Max(currentIndex - step, 0);
                step = startIndex - currentIndex <= sampleAfter ? step : step * 2;
            }

            yield return currentIndex;
        }
    }
}
