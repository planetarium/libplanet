using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// A class representing a consecutive list of <see cref="Block{T}"/>s.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class Branch<T>
        where T : IAction, new()
    {
        /// <summary>
        /// Initializes a new instance of <see cref="Branch{T}"/> from <paramref name="blocks"/>.
        /// </summary>
        /// <param name="blocks">An enumerable of <see cref="Block{T}"/>es to convert from.</param>
        /// <exception cref="ArgumentException">Thrown for failing to satisfy any of the following:
        /// <list type="bullet">
        ///     <item><description>
        ///         Given <paramref name="blocks"/> is non-empty.
        ///     </description></item>
        ///     <item><description>
        ///         Given <paramref name="blocks"/> are consecutive in the sense that indices
        ///         are unique, consecutive, and every <see cref="Block{T}.PreviousHash"/> match
        ///         the <see cref="Block{T}.Hash"/> of the previous <see cref="Block{T}"/>.
        ///     </description></item>
        /// </list>
        /// </exception>
        public Branch(IEnumerable<Block<T>> blocks)
        {
            ImmutableArray<Block<T>> sorted =
                blocks.OrderBy(block => block.Index).ToImmutableArray();
            if (!sorted.Any())
            {
                throw new ArgumentException(
                    $"Given {nameof(blocks)} must not be empty.", nameof(blocks));
            }
            else if (!sorted
                .Zip(sorted.Skip(1), (prev, next) =>
                    prev.Index + 1 == next.Index && prev.Hash.Equals(next.PreviousHash))
                .All(pred => pred))
            {
                throw new ArgumentException(
                    $"Given {nameof(blocks)} must be consecutive.", nameof(blocks));
            }

            Blocks = sorted;
        }

        /// <summary>
        /// An <see cref="ImmutableArray{T}"/> of <see cref="Block{T}"/>s guarenteed to satisfy
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
        ///         are unique, consecutive, and every <see cref="Block{T}.PreviousHash"/> match
        ///         the <see cref="Block{T}.Hash"/> of the previous <see cref="Block{T}"/>.
        ///     </description></item>
        /// </list>
        /// </summary>
        public ImmutableArray<Block<T>> Blocks { get; }
    }
}
