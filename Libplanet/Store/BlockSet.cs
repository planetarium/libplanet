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

        public override ICollection<HashDigest<SHA256>> Keys
        {
            get
            {
                return Store.IterateBlockHashes().ToList();
            }
        }

        public override ICollection<Block<T>> Values
        {
            get
            {
                return Store.IterateBlockHashes()
                    .Select(Store.GetBlock<T>)
                    .OfType<Block<T>>()
                    .ToList();
            }
        }

        public override int Count => (int)Store.CountBlocks();

        public override bool IsReadOnly => false;

        public override Block<T> this[HashDigest<SHA256> key]
        {
            get
            {
                Block<T> block = Store.GetBlock<T>(key);
                if (block == null)
                {
                    throw new KeyNotFoundException();
                }

                Trace.Assert(block.Hash.Equals(key));
                block.Validate(DateTimeOffset.UtcNow);
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

        public override bool Remove(HashDigest<SHA256> key)
        {
            return Store.DeleteBlock(key);
        }
    }
}
