using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Blocks;
using Serilog;

namespace Libplanet.Net
{
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

        public SortedList<long, Block<T>> GetCurrentRoundCandidate(
            BlockHeader thisRoundTip)
        {
            return _blocks.TryGetValue(thisRoundTip, out var blocks)
                ? blocks
                : null;
        }

        public bool TryRemove(BlockHeader header, out SortedList<long, Block<T>> blocks)
        {
            return _blocks.TryRemove(header, out blocks);
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
