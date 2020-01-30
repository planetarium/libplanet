using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tx;
using LiteDB;
using FileMode = LiteDB.FileMode;

namespace Libplanet.Explorer.Store
{
    public class RichStore : DefaultStore
    {
        private const string TxRefCollectionName = "block_ref";
        private const string SignerRefCollectionName = "signer_ref";
        private const string UpdatedAddressRefCollectionName = "updated_address_ref";

        private readonly MemoryStream _memoryStream;
        private readonly LiteDatabase _db;

        /// <inheritdoc cref="DefaultStore"/>
        public RichStore(
            string path,
            bool compress = false,
            bool journal = true,
            int indexCacheSize = 50000,
            int blockCacheSize = 512,
            int txCacheSize = 1024,
            int statesCacheSize = 10000,
            bool flush = true,
            bool readOnly = false)
            : base(
                path,
                compress,
                journal,
                indexCacheSize,
                blockCacheSize,
                txCacheSize,
                statesCacheSize,
                flush,
                readOnly)
        {
            if (path is null)
            {
                _memoryStream = new MemoryStream();
                _db = new LiteDatabase(_memoryStream);
            }
            else
            {
                var connectionString = new ConnectionString
                {
                    Filename = Path.Combine(path, "ext.ldb"),
                    Journal = journal,
                    CacheSize = indexCacheSize,
                    Flush = flush,
                };

                if (readOnly)
                {
                    connectionString.Mode = FileMode.ReadOnly;
                }
                else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX) &&
                         Type.GetType("Mono.Runtime") is null)
                {
                    // macOS + .NETCore doesn't support shared lock.
                    connectionString.Mode = FileMode.Exclusive;
                }

                _db = new LiteDatabase(connectionString);
            }
        }

        public override void PutBlock<T>(Block<T> block)
        {
            base.PutBlock(block);
            foreach (var tx in block.Transactions)
            {
                StoreTxReferences(tx.Id, block.Hash);
                StoreSignerReferences(tx.Id, tx.Timestamp, tx.Signer);
                foreach (var updatedAddress in tx.UpdatedAddresses)
                {
                    StoreUpdatedAddressReferences(tx.Id, tx.Timestamp, updatedAddress);
                }
            }
        }

        public void StoreTxReferences(TxId txId, HashDigest<SHA256> blockHash)
        {
            var collection = TxRefCollection();
            collection.Upsert(new TxRefDoc { TxId = txId, BlockHash = blockHash });
            Console.WriteLine(
                $"{nameof(StoreTxReferences)} | {txId.ToHex()} - {blockHash.ToString()}");
        }

        public IEnumerable<HashDigest<SHA256>> IterateTxReferences(TxId txId)
        {
            var collection = TxRefCollection();
            var query = Query.EQ(nameof(TxRefDoc.TxId), txId.ToByteArray());
            foreach (var doc in collection.Find(query))
            {
                yield return doc.BlockHash;
            }
        }

        public void StoreSignerReferences(TxId txId, DateTimeOffset timestamp, Address signer)
        {
            var collection = SignerRefCollection();
            collection.Upsert(new AddressRefDoc
            {
                Address = signer, Timestamp = timestamp, TxId = txId,
            });
            Console.WriteLine(
                $"{nameof(StoreSignerReferences)} | {txId.ToHex()} - {signer.ToHex()}");
        }

        public IEnumerable<TxId> IterateSignerReferences(Address signer, bool desc)
        {
            var collection = SignerRefCollection();
            var order = desc ? Query.Descending : Query.Ascending;
            var addressString = signer.ToHex().ToLowerInvariant();
            var query = Query.And(
                Query.EQ(nameof(AddressRefDoc.AddressString), addressString),
                Query.All(nameof(AddressRefDoc.Timestamp), order)
            );
            foreach (var doc in collection.Find(query))
            {
                yield return doc.TxId;
            }
        }

        public void StoreUpdatedAddressReferences(
            TxId txId,
            DateTimeOffset timestamp,
            Address updatedAddress)
        {
            var collection = UpdatedAddressRefCollection();
            collection.Upsert(new AddressRefDoc
            {
                Address = updatedAddress, Timestamp = timestamp, TxId = txId,
            });
            Console.WriteLine(
                $"{nameof(StoreUpdatedAddressReferences)} | {txId.ToHex()} - " +
                $"{updatedAddress.ToHex()}");
        }

        public IEnumerable<TxId> IterateUpdatedAddressReferences(
            Address updatedAddress,
            bool desc)
        {
            var collection = UpdatedAddressRefCollection();
            var order = desc ? Query.Descending : Query.Ascending;
            var addressString = updatedAddress.ToHex().ToLowerInvariant();
            var query = Query.And(
                Query.EQ(nameof(AddressRefDoc.AddressString), addressString),
                Query.All(nameof(AddressRefDoc.Timestamp), order)
            );
            foreach (var doc in collection.Find(query))
            {
                yield return doc.TxId;
            }
        }

        private LiteCollection<TxRefDoc> TxRefCollection() =>
            _db.GetCollection<TxRefDoc>(TxRefCollectionName);

        private LiteCollection<AddressRefDoc> SignerRefCollection() =>
            _db.GetCollection<AddressRefDoc>(SignerRefCollectionName);

        private LiteCollection<AddressRefDoc> UpdatedAddressRefCollection() =>
            _db.GetCollection<AddressRefDoc>(UpdatedAddressRefCollectionName);
    }
}
