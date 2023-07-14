using System;
using System.Collections.Generic;
using System.Linq;
using Caching;
using Libplanet.Common.Types.Blocks;

namespace Libplanet.Store
{
    public class BlockSet : BaseIndex<BlockHash, Block>
    {
        private readonly LRUCache<BlockHash, Block> _cache;

        public BlockSet(IStore store, int cacheSize = 4096)
            : base(store)
        {
            _cache = new LRUCache<BlockHash, Block>(cacheSize, Math.Max(cacheSize / 64, 8));
        }

        public override ICollection<BlockHash> Keys =>
            Store.IterateBlockHashes().ToList();

        public override ICollection<Block> Values =>
            Store.IterateBlockHashes()
                .Select(GetBlock)
                .Where(block => block is { })
                .Select(block => block!)
                .ToList();

        public override int Count => (int)Store.CountBlocks();

        public override bool IsReadOnly => false;

        public override Block this[BlockHash key]
        {
            get
            {
                Block? block = GetBlock(key);
                if (block is null)
                {
                    throw new KeyNotFoundException(
                        $"The given hash[{key}] was not found in this set."
                    );
                }

                if (block.ProtocolVersion <= BlockMetadata.PoWProtocolVersion)
                {
                    // Skip verifying BlockHash of PoW blocks due to change of the block structure.
                    // If verification is required, use older version of LibPlanet(<0.43).
                }
                else if (!block.Hash.Equals(key))
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

        public override bool Contains(KeyValuePair<BlockHash, Block> item) =>
            Store.ContainsBlock(item.Key);

        public override bool ContainsKey(BlockHash key) =>
            Store.ContainsBlock(key);

        public override bool Remove(BlockHash key)
        {
            bool deleted = Store.DeleteBlock(key);

            _cache.Remove(key);

            return deleted;
        }

        private Block? GetBlock(BlockHash key)
        {
            if (_cache.TryGet(key, out Block cached))
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

            Block fetched = Store.GetBlock(key);
            if (fetched is { })
            {
                _cache.AddReplace(key, fetched);
            }

            return fetched;
        }
    }
}
