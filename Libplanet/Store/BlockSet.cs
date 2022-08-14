using System;
using System.Collections.Generic;
using System.Linq;
using Caching;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public class BlockSet<T> : BaseIndex<BlockHash, Block<T>>
        where T : IAction, new()
    {
        private readonly LRUCache<BlockHash, Block<T>> _cache;

        public BlockSet(IStore store, int cacheSize = 4096)
            : base(store)
        {
            _cache = new LRUCache<BlockHash, Block<T>>(cacheSize, Math.Max(cacheSize / 64, 8));
        }

        public override ICollection<BlockHash> Keys =>
            Store.IterateBlockHashes().ToList();

        public override ICollection<Block<T>> Values =>
            Store.IterateBlockHashes()
                .Select(GetBlock)
                .Where(block => block is { })
                .Select(block => block!)
                .ToList();

        public override int Count => (int)Store.CountBlocks();

        public override bool IsReadOnly => false;

        public override Block<T> this[BlockHash key]
        {
            get
            {
                Block<T>? block = GetBlock(key);
                if (block is null)
                {
                    throw new KeyNotFoundException(
                        $"The given hash[{key}] was not found in this set."
                    );
                }

                if (!block.Hash.Equals(key))
                {
                    throw new InvalidBlockHashException(
                        $"The given hash[{key}] was not equal to actual[{block.Hash}].");
                }

                return block;
            }

            set
            {
                if (!value.Hash.Equals(key))
                {
                    throw new InvalidBlockHashException(
                        $"{value}.hash does not match to {key}");
                }

                value.ValidateTimestamp();
                Store.PutBlock(value);
                _cache.AddReplace(value.Hash, value);
            }
        }

        public override bool Contains(KeyValuePair<BlockHash, Block<T>> item) =>
            Store.ContainsBlock(item.Key);

        public override bool ContainsKey(BlockHash key) =>
            Store.ContainsBlock(key);

        public override bool Remove(BlockHash key)
        {
            bool deleted = Store.DeleteBlock(key);

            _cache.Remove(key);

            return deleted;
        }

        private Block<T>? GetBlock(BlockHash key)
        {
            if (_cache.TryGet(key, out Block<T> cached))
            {
                if (Store.ContainsBlock(key))
                {
                    return cached;
                }
                else
                {
                    // The cached block had been deleted on Store...
                    _cache.Remove(key);
                }
            }

            Block<T> fetched = Store.GetBlock<T>(key);
            if (fetched is { })
            {
                _cache.AddReplace(key, fetched);
            }

            return fetched;
        }
    }
}
