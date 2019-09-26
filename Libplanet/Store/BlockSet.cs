using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public class BlockSet<T> : BaseIndex<HashDigest<SHA256>, Block<T>>
        where T : IAction, new()
    {
        public BlockSet(IStore store)
            : base(store)
        {
        }

        public override ICollection<HashDigest<SHA256>> Keys =>
            Store.IterateBlockHashes().ToList();

        public override ICollection<Block<T>> Values =>
            Store.IterateBlockHashes()
                .Select(Store.GetBlock<T>)
                .ToList();

        public override int Count => (int)Store.CountBlocks();

        public override bool IsReadOnly => false;

        public override Block<T> this[HashDigest<SHA256> key]
        {
            get
            {
                Block<T> block = Store.GetBlock<T>(key);
                if (block is null)
                {
                    throw new KeyNotFoundException(
                        $"The given hash[{key}] was not found in this set."
                    );
                }

                Trace.Assert(block.Hash.Equals(key));
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
            }
        }

        public override bool Contains(
            KeyValuePair<HashDigest<SHA256>, Block<T>> item)
        {
            return Store.IterateBlockHashes().Contains(item.Key);
        }

        public override bool ContainsKey(HashDigest<SHA256> key)
        {
            return Store.GetBlock<T>(key) is Block<T>;
        }

        public override bool Remove(HashDigest<SHA256> key)
        {
            return Store.DeleteBlock(key);
        }
    }
}
