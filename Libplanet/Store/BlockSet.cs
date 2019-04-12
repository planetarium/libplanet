using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tx;

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

                byte[] prevMask;
                if (value.PreviousHash is HashDigest<SHA256> prevHash)
                {
                    if (Store.GetAddressesMask(prevHash) is Address maskAddr)
                    {
                        prevMask = maskAddr.ToByteArray();
                    }
                    else
                    {
                        // If there is no mask for the previous hash
                        // (the store made in the older versions of Libplanet
                        // may lack mask files), make the mask to match to
                        // all possible addresses.
                        prevMask = Enumerable.Repeat((byte)0xff, Address.Size)
                            .ToArray();
                    }
                }
                else
                {
                    prevMask = new byte[Address.Size];
                }

                // Create a next mask.
                var mask = new BitArray(prevMask);
                foreach (Transaction<T> tx in value.Transactions)
                {
                    foreach (Address address in tx.UpdatedAddresses)
                    {
                        // BitArray.Or() manipulates itself.
                        mask.Or(new BitArray(address.ToByteArray()));
                    }
                }

                var maskBuffer = new byte[Address.Size];
                mask.CopyTo(maskBuffer, 0);
                Store.PutBlock(value, new Address(maskBuffer));
            }
        }

        public override bool Remove(HashDigest<SHA256> key)
        {
            return Store.DeleteBlock(key);
        }
    }
}
