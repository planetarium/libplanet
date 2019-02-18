using System.Collections.Async;
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
        public BlockSet(IStore store)
            : base(store)
        {
        }

        public override ICollection<HashDigest<SHA256>> Keys
        {
            get
            {
                return Store.IterateBlockHashes().ToListAsync().Result;
            }
        }

        public override ICollection<Block<T>> Values
        {
            get
            {
                return Store.IterateBlockHashes()
                    .Select(h => Store.GetBlock<T>(h))
                    .OfType<Block<T>>()
                    .ToListAsync()
                    .Result;
            }
        }

        public override int Count => Store.CountBlocks().Result;

        public override bool IsReadOnly => false;

        public override Block<T> this[HashDigest<SHA256> key]
        {
            get
            {
                Block<T> block = Store.GetBlock<T>(key).Result;
                if (block == null)
                {
                    throw new KeyNotFoundException();
                }

                Trace.Assert(block.Hash == key);
                block.Validate();
                return block;
            }

            set
            {
                if (value.Hash != key)
                {
                    throw new InvalidBlockHashException(
                        $"{value}.hash does not match to {key}");
                }

                value.Validate();
                Store.PutBlock(value);
            }
        }

        public override bool Remove(HashDigest<SHA256> key)
        {
            return Store.DeleteBlock(key).Result;
        }
    }
}
