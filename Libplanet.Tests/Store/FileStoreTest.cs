using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class FileStoreTest : StoreTest, IDisposable
    {
        private readonly FileStoreFixture _fx;
        private readonly FileStore _fileStore;

        public FileStoreTest()
        {
            _fx = new FileStoreFixture();
            Fx = _fx;
            _fileStore = (FileStore)_fx.Store;
        }

        [Fact]
        public void ReturnTransactionPath()
        {
            Assert.Equal(
                Path.Combine(
                    _fx.Path,
                    "tx",
                    "45a2",
                    "2187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"
                ),
                _fileStore.GetTransactionPath(_fx.TxId1)
            );
        }

        [Fact]
        public void ReturnBlockPath()
        {
            Assert.Equal(
                Path.Combine(
                    _fx.Path,
                    "blocks",
                    "45a2",
                    "2187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"
                ),
                _fileStore.GetBlockPath(_fx.Hash1)
            );
        }

        [Fact]
        public void ReturnStagedTransactionPath()
        {
            Assert.Equal(
                Path.Combine(
                    _fx.Path,
                    "stage",
                    "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"
                ),
                _fileStore.GetStagedTransactionPath(_fx.TxId1)
            );
        }

        [Fact]
        public void ReturnStatesPath()
        {
            var hash = new HashDigest<SHA256>(new byte[]
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
                0x9c, 0xcc,
            });
            Assert.Equal(
                Path.Combine(
                    _fx.Path,
                    "states",
                    "45a2",
                    "2187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"
                ),
                _fileStore.GetStatesPath(hash)
            );
        }

        [Fact]
        public void GetStateReferencePath()
        {
            string expected = Path.Combine(
                _fx.Path,
                "stateref",
                Fx.StoreNamespace,
                "45a2",
                "2187e2D8850bb357886958bC3E8560929ccc");
            string actual = _fileStore.GetStateReferencePath(
                Fx.StoreNamespace,
                _fx.Address1);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void StoreStateReference()
        {
            Address address = address;
            Block<DumbAction> prevBlock = _fx.Block3;

            Transaction<DumbAction> transaction = _fx.MakeTransaction(
                new List<DumbAction>(),
                new HashSet<Address> { address }.ToImmutableHashSet());
            var txs = new[] { transaction };

            var blocks = new List<Block<DumbAction>>
            {
                TestUtils.MineNext(prevBlock, txs),
            };
            blocks.Add(TestUtils.MineNext(blocks[0], txs));

            string path = _fileStore.GetStateReferencePath(Fx.StoreNamespace, address);
            var stateReferenceFile = new FileInfo(path);
            Assert.False(stateReferenceFile.Exists);

            foreach (Block<DumbAction> block in blocks)
            {
                var updatedAddresses = new HashSet<Address> { address };
                _fx.Store.StoreStateReference(
                    Fx.StoreNamespace, updatedAddresses.ToImmutableHashSet(), block);
            }

            stateReferenceFile = new FileInfo(path);
            Assert.True(stateReferenceFile.Exists);

            using (Stream stream = stateReferenceFile.OpenRead())
            {
                int hashSize = HashDigest<SHA256>.Size;
                int blockInfoSize = hashSize + sizeof(long);
                var buffer = new byte[blockInfoSize];

                foreach (var block in blocks)
                {
                    stream.Read(buffer, 0, blockInfoSize);
                    var blockHash = new HashDigest<SHA256>(
                        buffer.Take(hashSize).ToArray());
                    var blockIndex = BitConverter.ToInt64(buffer, hashSize);

                    Assert.Equal(block.Hash, blockHash);
                    Assert.Equal(block.Index, blockIndex);
                }
            }
        }

        public void Dispose()
        {
            _fx.Dispose();
        }
    }
}
