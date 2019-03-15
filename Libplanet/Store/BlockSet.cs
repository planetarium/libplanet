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
        where T : IAction
    {
        public BlockSet(IStore store, string @namespace)
            : base(store, @namespace)
        {
        }

        public override ICollection<HashDigest<SHA256>> Keys
        {
            get
            {
                return Store.IterateBlockHashes(StoreNamespace).ToList();
            }
        }

        public override ICollection<Block<T>> Values
        {
            get
            {
                return Store.IterateBlockHashes(StoreNamespace)
                    .Select(h => Store.GetBlock<T>(StoreNamespace, h))
                    .OfType<Block<T>>()
                    .ToList();
            }
        }

        public override int Count => Store.CountBlocks(StoreNamespace);

        public override bool IsReadOnly => false;

        public override Block<T> this[HashDigest<SHA256> key]
        {
            get
            {
                Block<T> block = Store.GetBlock<T>(StoreNamespace, key);
                if (block == null)
                {
                    throw new KeyNotFoundException();
                }

                Trace.Assert(block.Hash == key);
                block.Validate(DateTimeOffset.UtcNow);
                return block;
            }

            set
            {
                if (value.Hash != key)
                {
                    throw new InvalidBlockHashException(
                        $"{value}.hash does not match to {key}");
                }

                value.Validate(DateTimeOffset.UtcNow);
                Store.PutBlock(StoreNamespace, value);
            }
        }

        public override bool Remove(HashDigest<SHA256> key)
        {
            return Store.DeleteBlock(StoreNamespace, key);
        }
    }
}
