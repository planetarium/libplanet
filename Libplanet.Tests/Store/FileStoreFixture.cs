using System;
using System.Collections.Generic;
using System.IO;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;

namespace Libplanet.Tests.Store
{
    public class FileStoreFixture : IDisposable
    {
        public FileStoreFixture()
        {
            string postfix = Guid.NewGuid().ToString();
            Path = System.IO.Path.Combine(
                System.IO.Path.GetTempPath(), $"filestore_test_{postfix}");
            Store = new FileStore(Path);
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

            Block1 = TestUtils.MineGenesis<BaseAction>();
            Block2 = TestUtils.MineNext(Block1);
            Block3 = TestUtils.MineNext(Block2);

            Transaction1 = MakeTransaction();
            Transaction2 = MakeTransaction();
        }

        public string Path { get; }

        public FileStore Store { get; }

        public string StoreNamespace { get; }

        public Address Address1 { get; }

        public Address Address2 { get; }

        public TxId TxId1 { get; }

        public TxId TxId2 { get; }

        public TxId TxId3 { get; }

        public HashDigest<SHA256> Hash1 { get; }

        public HashDigest<SHA256> Hash2 { get; }

        public HashDigest<SHA256> Hash3 { get; }

        public Block<BaseAction> Block1 { get; }

        public Block<BaseAction> Block2 { get; }

        public Block<BaseAction> Block3 { get; }

        public Transaction<BaseAction> Transaction1 { get; }

        public Transaction<BaseAction> Transaction2 { get; }

        public void Dispose()
        {
            if (Directory.Exists(Path))
            {
                Directory.Delete(Path, true);
            }
        }

        private Transaction<BaseAction> MakeTransaction()
        {
            var privateKey = new PrivateKey();
            Address recipient = privateKey.PublicKey.ToAddress();
            var timestamp = new DateTimeOffset(2018, 11, 21, 0, 0, 0, TimeSpan.Zero);
            return Transaction<BaseAction>.Make(
                privateKey,
                recipient,
                new List<BaseAction>(),
                timestamp
            );
        }
    }
}
