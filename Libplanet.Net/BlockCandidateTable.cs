using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Net
{
    /// <summary>
    /// <para>
    /// A class for storing downloaded <see cref="Block{T}"/>s as <see cref="Dictionary{K, V}"/>.
    /// A <see cref="BlockHeader"/> is used as a key for storing downloading context.
    /// </para>
    /// <para>
    /// This is designed to be exception free.
    /// </para>
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class BlockCandidateTable<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<BlockHeader, List<(Block<T>, BlockCommit)>> _table;

        public BlockCandidateTable()
        {
            _table = new ConcurrentDictionary
                <BlockHeader, List<(Block<T>, BlockCommit)>>();
        }

        public long Count
        {
            get => _table.Count;
        }

        /// <summary>
        /// <para>
        /// Adds given <paramref name="blocks"/> to the table.
        /// </para>
        /// <para>
        /// The internal table is only updated if a given pair satisfy all of the following:
        /// <list type="bullet">
        ///     <item><description>
        ///         The internal dictionary does not already contain <paramref name="blockHeader"/>
        ///         as its key.
        ///     </description></item>
        ///     <item><description>
        ///         Given <paramref name="blocks"/> is non-empty.
        ///     </description></item>
        ///     <item><description>
        ///         Given <paramref name="blocks"/> are consecutive in the sense that indices
        ///         are unique consecutive and every <see cref="Block{T}.PreviousHash"/> match
        ///         the <see cref="Block{T}.Hash"/> of the previous <see cref="Block{T}"/>.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="blockHeader">The header of the <see cref="BlockChain{T}"/>'s
        /// tip at the time of downloading the blocks.</param>
        /// <param name="blocks">The list of downloaded tuples of a <see cref="Block{T}"/>
        /// and its <see cref="BlockCommit"/>.</param>
        public void Add(BlockHeader blockHeader, IEnumerable<(Block<T>, BlockCommit)> blocks)
        {
            if (_table.ContainsKey(blockHeader))
            {
                Log.Debug(
                    "Given blocks will not be added as the table already contains " +
                    "blockheader #{Index} {BlockHash} as a key",
                    blockHeader.Index,
                    blockHeader.Hash);
                return;
            }

            List<(Block<T>, BlockCommit)> sorted =
                blocks.OrderBy(block => block.Item1.Index).ToList();
            if (!sorted.Any())
            {
                Log.Debug(
                    "Given blocks associated with blockheader #{Index} {BlockHash} will " +
                    "not be added to the table as an empty set of blocks is not allowed",
                    blockHeader.Index,
                    blockHeader.Hash);
                return;
            }
            else if (!sorted
                         .Zip(
                             sorted.Skip(1),
                             (prev, next) =>
                                 prev.Item1.Index + 1 == next.Item1.Index &&
                                 prev.Item1.Hash.Equals(next.Item1.PreviousHash))
                         .All(pred => pred))
            {
                Log.Debug(
                    "Given blocks associated with blockheader #{Index} {BlockHash} will " +
                    "not be added as given blocks are not consecutive",
                    blockHeader.Index,
                    blockHeader.Hash);
                return;
            }

            _table.TryAdd(blockHeader, sorted);
        }

        /// <summary>
        /// Get the <see cref="Block{T}"/>s which are in the table by <see cref="BlockHeader"/>.
        /// </summary>
        /// <param name="thisRoundTip">Canonical <see cref="BlockChain{T}"/>'s
        /// tip of this round.</param>
        /// <returns>A <see cref="List{T}"/> of <see cref="Block{T}"/>s with associated
        /// <see cref="BlockCommit"/>s by
        /// <paramref name="thisRoundTip"/> if found, otherwise <see langword="null"/>.
        /// The result is guaranteed to be non-empty and consecutive sorted by
        /// <see cref="Block{T}.Index"/>.
        /// </returns>
        /// <seealso cref="Add"/>
        public List<(Block<T>, BlockCommit)>? GetCurrentRoundCandidate(
            BlockHeader thisRoundTip)
        {
            return _table.TryGetValue(thisRoundTip, out var blocks)
                ? blocks
                : null;
        }

        public bool TryRemove(BlockHeader header)
        {
            return _table.TryRemove(header, out _);
        }

        public void Cleanup(Func<IBlockExcerpt, bool> predicate)
        {
            foreach (var blockHeader in _table.Keys)
            {
                if (!predicate(blockHeader))
                {
                    TryRemove(blockHeader);
                }
            }
        }
    }
}
