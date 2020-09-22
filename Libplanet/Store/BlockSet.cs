using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using LruCacheNet;

namespace Libplanet.Store
{
    public class BlockSet<T> : BaseIndex<HashDigest<SHA256>, Block<T>>
        where T : IAction, new()
    {
        // FIXME it should be configurable
        private const int DefaultCacheSize = 4096;
        private readonly LruCache<HashDigest<SHA256>, Block<T>> _cache;

        public BlockSet(IStore store)
            : base(store)
        {
            _cache = new LruCache<HashDigest<SHA256>, Block<T>>(DefaultCacheSize);
        }

        public override ICollection<HashDigest<SHA256>> Keys =>
            Store.IterateBlockHashes().ToList();

        public override ICollection<Block<T>> Values =>
            Store.IterateBlockHashes()
                .Select(GetBlock)
                .ToList();

        public override int Count => (int)Store.CountBlocks();

        public override bool IsReadOnly => false;

        public override Block<T> this[HashDigest<SHA256> key]
        {
            get
            {
                Block<T> block = GetBlock(key);
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

                value.Validate(DateTimeOffset.UtcNow);
                Store.PutBlock(value);
                _cache.Add(value.Hash, value);
            }
        }

        public override bool Contains(
            KeyValuePair<HashDigest<SHA256>, Block<T>> item)
        {
            return Store.ContainsBlock(item.Key);
        }

        public override bool ContainsKey(HashDigest<SHA256> key)
        {
            return Store.ContainsBlock(key);
        }

        public override bool Remove(HashDigest<SHA256> key)
        {
            bool deleted = Store.DeleteBlock(key);

            if (deleted)
            {
                _cache.Remove(key);
            }

            return deleted;
        }

        private Block<T> GetBlock(HashDigest<SHA256> key)
        {
            if (_cache.TryGetValue(key, out Block<T> cached))
            {
                return cached;
            }

            Block<T> fetched = Store.GetBlock<T>(key);
            if (!(fetched is null))
            {
                _cache.Add(key, fetched);
            }

            return fetched;
        }
    }
}
