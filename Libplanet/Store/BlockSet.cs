using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Store
{
    public class BlockSet<TTxAction, TBlockAction>
        : BaseIndex<HashDigest<SHA256>, Block<TTxAction, TBlockAction>>
        where TTxAction : IAction, new()
        where TBlockAction : IAction, new()
    {
        public BlockSet(IStore store)
            : base(store)
        {
        }

        public override ICollection<HashDigest<SHA256>> Keys =>
            Store.IterateBlockHashes().ToList();

        public override ICollection<Block<TTxAction, TBlockAction>> Values =>
            Store.IterateBlockHashes()
                .Select(Store.GetBlock<TTxAction, TBlockAction>)
                .ToList();

        public override int Count => (int)Store.CountBlocks();

        public override bool IsReadOnly => false;

        public override Block<TTxAction, TBlockAction> this[HashDigest<SHA256> key]
        {
            get
            {
                Block<TTxAction, TBlockAction> block = Store.GetBlock<TTxAction, TBlockAction>(key);
                if (block == null)
                {
                    throw new KeyNotFoundException();
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
            KeyValuePair<HashDigest<SHA256>, Block<TTxAction, TBlockAction>> item)
        {
            return Store.IterateBlockHashes().Contains(item.Key);
        }

        public override bool Remove(HashDigest<SHA256> key)
        {
            return Store.DeleteBlock(key);
        }
    }
}
