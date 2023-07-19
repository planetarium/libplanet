using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Blockchain;
using Libplanet.Types.Blocks;
using Serilog;

namespace Libplanet.Net
{
    /// <summary>
    /// <para>
    /// A class for storing downloaded <see cref="Block"/>s as <see cref="Dictionary{K, V}"/>.
    /// A <see cref="BlockHeader"/> is used as a key for storing downloading context.
    /// </para>
    /// <para>
    /// This is designed to be exception free.
    /// </para>
    /// </summary>
    public class BlockCandidateTable
    {
        private readonly ILogger _logger;
        private readonly ConcurrentDictionary<BlockHeader, Branch> _table;

        public BlockCandidateTable()
        {
            _logger = Log
                .ForContext<BlockCandidateTable>()
                .ForContext("Source", nameof(BlockCandidateTable));
            _table = new ConcurrentDictionary<BlockHeader, Branch>();
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
        /// <param name="blockHeader">The header of the <see cref="BlockChain"/>'s
        /// tip at the time of downloading the blocks.</param>
        /// <param name="branch">The list of downloaded <see cref="Block"/>s and
        /// its <see cref="BlockCommit"/>s.</param>
        public void Add(BlockHeader blockHeader, Branch branch)
        {
            if (_table.ContainsKey(blockHeader))
            {
                var root = branch.Blocks.First().Item1;
                var tip = branch.Blocks.Last().Item1;
                _logger.Debug(
                    "Given branch with root #{RootIndex} {RootHash} and " +
                    "tip #{TipIndex} {TipHash} will not be added as the table already contains " +
                    "blockheader #{Index} {BlockHash} as its key",
                    root.Index,
                    root.Hash,
                    tip.Index,
                    tip.Hash,
                    blockHeader.Index,
                    blockHeader.Hash);
                return;
            }

            _table.TryAdd(blockHeader, branch);
            _logger
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "CandidateTableCount")
                .Information(
                    "There are {Count} branches in {ClassName}",
                    _table.Count,
                    nameof(BlockCandidateTable));
        }

        /// <summary>
        /// Get the <see cref="Block"/>s which are in the table by <see cref="BlockHeader"/>.
        /// </summary>
        /// <param name="thisRoundTip">Canonical <see cref="BlockChain"/>'s
        /// tip of this round.</param>
        /// <returns>A <see cref="List{T}"/> of <see cref="Block"/>s with associated
        /// <see cref="BlockCommit"/>s by
        /// <paramref name="thisRoundTip"/> if found, otherwise <see langword="null"/>.
        /// The result is guaranteed to be non-empty and consecutive sorted by
        /// <see cref="Block.Index"/>.
        /// </returns>
        /// <seealso cref="Add"/>
        public Branch? GetCurrentRoundCandidate(
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

            _logger
                .ForContext("Tag", "Metric")
                .ForContext("Subtag", "CandidateTableCount")
                .Information(
                    "There are {Count} branches in {ClassName}",
                    _table.Count,
                    nameof(BlockCandidateTable));
        }
    }
}
