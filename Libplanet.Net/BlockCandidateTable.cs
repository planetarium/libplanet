using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
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
        private readonly ConcurrentDictionary<BlockHeader, Branch<T>> _table;

        public BlockCandidateTable()
        {
            _table = new ConcurrentDictionary<BlockHeader, Branch<T>>();
        }

        public long Count
        {
            get => _table.Count;
        }

        /// <summary>
        /// <para>
        /// Adds given <paramref name="branch"/> to the table.
        /// </para>
        /// <para>
        /// The internal table is only updated if it does not already contain
        /// <paramref name="blockHeader"/> as its key.
        /// </para>
        /// </summary>
        /// <param name="blockHeader">This is the header of the <see cref="BlockChain{T}"/>
        /// tip at the time of downloading the blocks.</param>
        /// <param name="branch">The list of downloaded <see cref="Block{T}"/>s.</param>
        public void Add(BlockHeader blockHeader, Branch<T> branch)
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

            _table.TryAdd(blockHeader, branch);
        }

        /// <summary>
        /// Get the <see cref="Block{T}"/>s which are in the table by <see cref="BlockHeader"/>.
        /// </summary>
        /// <param name="thisRoundTip">Canonical <see cref="BlockChain{T}"/>'s
        /// tip of this round.</param>
        /// <returns>A <see cref="List{T}"/> of <see cref="Block{T}"/>s associated with
        /// <paramref name="thisRoundTip"/> if found, otherwise <see langword="null"/>.
        /// The result is guaranteed to be non-empty and consecutive sorted by
        /// <see cref="Block{T}.Index"/>.
        /// </returns>
        /// <seealso cref="Add"/>
        public Branch<T>? GetCurrentRoundCandidate(
            BlockHeader thisRoundTip)
        {
            return _table.TryGetValue(thisRoundTip, out var branch)
                ? branch
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
