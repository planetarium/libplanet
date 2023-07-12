using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class representing a consecutive list of <see cref="Block"/>s.
    /// </summary>
    public class Branch
    {
        /// <summary>
        /// Initializes a new instance of <see cref="Branch"/> from <paramref name="blocks"/>.
        /// </summary>
        /// <param name="blocks">An enumerable of <see cref="Block"/> and
        /// <see cref="BlockCommit"/> pairs to convert from.</param>
        /// <exception cref="ArgumentException">Thrown for failing to satisfy any of the following:
        /// <list type="bullet">
        ///     <item><description>
        ///         Given <paramref name="blocks"/> is non-empty.
        ///     </description></item>
        ///     <item><description>
        ///         Given <paramref name="blocks"/> are consecutive in the sense that indices
        ///         are unique, consecutive, and every <see cref="Block.PreviousHash"/> match
        ///         the <see cref="Block.Hash"/> of the previous <see cref="Block"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        public Branch(IEnumerable<(Block, BlockCommit)> blocks)
        {
            ImmutableArray<(Block, BlockCommit)> sorted =
                blocks.OrderBy(block => block.Item1.Index).ToImmutableArray();
            if (!sorted.Any())
            {
                throw new ArgumentException(
                    $"Given {nameof(blocks)} must not be empty.", nameof(blocks));
            }
            else if (!sorted
                         .Zip(
                             sorted.Skip(1),
                             (prev, next) =>
                                 prev.Item1.Index + 1 == next.Item1.Index &&
                                 prev.Item1.Hash.Equals(next.Item1.PreviousHash))
                         .All(pred => pred))
            {
                throw new ArgumentException(
                    $"Given {nameof(blocks)} must be consecutive.",
                    nameof(blocks));
            }

            Blocks = sorted;
        }

        /// <summary>
        /// An <see cref="ImmutableArray{T}"/> of <see cref="Block"/> and
        /// <see cref="BlockCommit"/> pairs guaranteed to satisfy
        /// the following properties:
        /// <list type="bullet">
        ///     <item><description>
        ///         The collection is non-empty.
        ///     </description></item>
        ///     <item><description>
        ///         The collection is sorted by index.
        ///     </description></item>
        ///     <item><description>
        ///         The elements are consecutive in the sense that indices
        ///         are unique, consecutive, and every <see cref="Block.PreviousHash"/> match
        ///         the <see cref="Block.Hash"/> of the previous <see cref="Block"/>.
        ///     </description></item>
        /// </list>
        /// </summary>
        public ImmutableArray<(Block, BlockCommit)> Blocks { get; }
    }
}
