using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;

namespace Libplanet.Tests.Store
{
    public abstract class StoreFixture
    {
        public StoreFixture()
        {
            StoreNamespace = Guid.NewGuid().ToString();

            Address1 = new Address(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            });
            Address2 = new Address(new byte[]
            {
                0x55, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xdd,
            });
            TxId1 = new TxId(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc,
            });
            TxId2 = new TxId(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xdd,
            });
            TxId3 = new TxId(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xee,
            });
            Hash1 = new HashDigest<SHA256>(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc,
            });
            Hash2 = new HashDigest<SHA256>(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xdd,
            });
            Hash3 = new HashDigest<SHA256>(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xee,
            });

            Block1 = TestUtils.MineGenesis<DumbAction, DumbAction>();
            Block2 = TestUtils.MineNext(Block1);
            Block3 = TestUtils.MineNext(Block2);

            Transaction1 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
            Transaction2 = MakeTransaction(new List<DumbAction>(), ImmutableHashSet<Address>.Empty);
        }

        public string StoreNamespace { get; }

        public Address Address1 { get; }

        public Address Address2 { get; }

        public TxId TxId1 { get; }

        public TxId TxId2 { get; }

        public TxId TxId3 { get; }

        public HashDigest<SHA256> Hash1 { get; }

        public HashDigest<SHA256> Hash2 { get; }

        public HashDigest<SHA256> Hash3 { get; }

        public Block<DumbAction, DumbAction> Block1 { get; }

        public Block<DumbAction, DumbAction> Block2 { get; }

        public Block<DumbAction, DumbAction> Block3 { get; }

        public Transaction<DumbAction> Transaction1 { get; }

        public Transaction<DumbAction> Transaction2 { get; }

        public IStore Store { get; set; }

        public Transaction<DumbAction> MakeTransaction(
            IEnumerable<DumbAction> actions = null,
            ImmutableHashSet<Address> updatedAddresses = null,
            long nonce = 0,
            PrivateKey privateKey = null
        )
        {
            privateKey = privateKey ?? new PrivateKey();
            var timestamp =
                new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            return Transaction<DumbAction>.Create(
                nonce,
                privateKey,
                actions ?? new DumbAction[0],
                updatedAddresses,
                timestamp
            );
        }
    }
}
