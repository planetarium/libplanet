#nullable enable
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
    /// A class which table data structure that stores <see cref="Block{T}"/>s
    /// received from <see cref="Peer"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match
    /// to <see cref="Block{T}"/>'s type parameter.</typeparam>
    public class BlockCandidateTable<T>
        where T : IAction, new()
    {
        private readonly ConcurrentDictionary<BlockHeader, SortedList<long, Block<T>>> _blocks;

        public BlockCandidateTable()
        {
            _blocks = new ConcurrentDictionary<BlockHeader, SortedList<long, Block<T>>>();
        }

        public long Count
        {
            get => _blocks.Count;
        }

        public bool Any() => !_blocks.IsEmpty;

        /// <summary>
        /// Adds a <see cref="Block{T}"/>s to the table.
        /// </summary>
        /// <param name="blockHeader">This is the header of the <see cref="BlockChain{T}"/>
        /// tip at the time of downloading the blocks.</param>
        /// <param name="blocks">List of downloaded <see cref="Block{T}"/>.</param>
        public void Add(BlockHeader blockHeader, IEnumerable<Block<T>> blocks)
        {
            if (_blocks.ContainsKey(blockHeader))
            {
                return;
            }

            try
            {
                var sortedBlocks =
                    new SortedList<long, Block<T>>(blocks.ToDictionary(i => i.Index));
                _blocks.TryAdd(blockHeader, sortedBlocks);
            }
            catch (ArgumentException e)
            {
                Log.Debug(
                    "Among the previous blocks of BlockHeader " +
                    "#{Index} {BlockHash}, there is a block with the wrong index. " +
                    "InnerMessage: {InnerMessage}",
                    blockHeader.Index,
                    blockHeader.Hash,
                    e.Message);
            }
        }

        /// <summary>
        /// Get the <see cref="Block{T}"/>s which are in the table.
        /// </summary>
        /// <param name="thisRoundTip">Canonical <see cref="BlockChain{T}"/>'s
        /// tip of this round.</param>
        /// <returns><see cref="Block{T}"/>s by <paramref name="thisRoundTip"/>.</returns>
        public SortedList<long, Block<T>>? GetCurrentRoundCandidate(
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
                    _blocks.TryRemove(blockHeader, out _);
                }
            }
        }
    }
}
