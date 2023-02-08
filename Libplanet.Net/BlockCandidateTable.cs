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
        private readonly ConcurrentDictionary<BlockHeader, List<Block<T>>> _blocks;

        public BlockCandidateTable()
        {
            _blocks = new ConcurrentDictionary<BlockHeader, List<Block<T>>>();
        }

        public long Count
        {
            get => _blocks.Count;
        }

        /// <summary>
        /// <para>
        /// Adds given <paramref name="blocks"/> to the table.
        /// </para>
        /// <para>
        /// The internal table is only updated if a given pair satisfy both of the following:
        /// <list type="bullet">
        ///     <item><description>
        ///         Given <paramref name="blocks"/> is non-empty.
        ///     </description></item>
        ///     <item><description>
        ///         Given <paramref name="blocks"/> have unique indices.
        ///     </description></item>
        ///     <item><description>
        ///         The internal dictionary does not already contain <paramref name="blockHeader"/>
        ///         as its key.
        ///     </description></item>
        /// </list>
        /// </para>
        /// </summary>
        /// <param name="blockHeader">This is the header of the <see cref="BlockChain{T}"/>
        /// tip at the time of downloading the blocks.</param>
        /// <param name="blocks">The list of downloaded <see cref="Block{T}"/>s.</param>
        public void Add(BlockHeader blockHeader, IEnumerable<Block<T>> blocks)
        {
            if (_blocks.ContainsKey(blockHeader))
            {
                Log.Debug(
                    "Given blocks will not be added as the table already contains " +
                    "blockheader #{Index} {BlockHash} as a key",
                    blockHeader.Index,
                    blockHeader.Hash);
                return;
            }
            else if (!blocks.Any())
            {
                Log.Debug(
                    "Given blocks will not be added as empty set of blocks is not allowed");
                return;
            }
            else if (blocks.GroupBy(block => block.Index).Count() != blocks.Count())
            {
                Log.Debug(
                    "Given blocks will not be added as given blocks have duplicate indices");
                return;
            }

            _blocks.TryAdd(blockHeader, blocks.OrderBy(block => block.Index).ToList());
        }

        /// <summary>
        /// Get the <see cref="Block{T}"/>s which are in the table by <see cref="BlockHeader"/>.
        /// </summary>
        /// <param name="thisRoundTip">Canonical <see cref="BlockChain{T}"/>'s
        /// tip of this round.</param>
        /// <returns>A <see cref="List{T}"/> of <see cref="Block{T}"/>s associated with
        /// <paramref name="thisRoundTip"/> if found, otherwise <see langword="null"/>.
        /// The result is guaranteed to be non-empty and sorted by <see cref="Block{T}.Index"/>.
        /// </returns>
        public List<Block<T>>? GetCurrentRoundCandidate(
            BlockHeader thisRoundTip)
        {
            return _blocks.TryGetValue(thisRoundTip, out var blocks)
                ? blocks
                : null;
        }

        public bool TryRemove(BlockHeader header)
        {
            return _blocks.TryRemove(header, out _);
        }

        public void Cleanup(Func<IBlockExcerpt, bool> predicate)
        {
            foreach (var blockHeader in _blocks.Keys)
            {
                if (!predicate(blockHeader))
                {
                    TryRemove(blockHeader);
                }
            }
        }
    }
}
