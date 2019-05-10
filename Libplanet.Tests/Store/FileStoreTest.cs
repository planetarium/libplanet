using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class FileStoreTest : IDisposable
    {
        private readonly FileStoreFixture _fx;
        private readonly string _ns;

        public FileStoreTest()
        {
            _fx = new FileStoreFixture();
            _ns = _fx.StoreNamespace;
        }

        [Fact]
        public void ListNamespaces()
        {
            Assert.Empty(_fx.Store.ListNamespaces());

            _fx.Store.PutBlock(_fx.Block1);
            _fx.Store.AppendIndex(_ns, _fx.Block1.Hash);
            Assert.Equal(
                new[] { _ns }.ToImmutableHashSet(),
                _fx.Store.ListNamespaces().ToImmutableHashSet()
            );

            _fx.Store.AppendIndex("asdf", _fx.Block1.Hash);
            Assert.Equal(
                new[] { _ns, "asdf" }.ToImmutableHashSet(),
                _fx.Store.ListNamespaces().ToImmutableHashSet()
            );
        }

        [Fact]
        public void CanReturnTransactionPath()
        {
            Assert.Equal(
                Path.Combine(_fx.Path, "tx", "45a2", "2187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"),
                _fx.Store.GetTransactionPath(_fx.TxId1)
            );
        }

        [Fact]
        public void CanReturnBlockPath()
        {
            Assert.Equal(
                Path.Combine(_fx.Path, "blocks", "45a2", "2187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"),
                _fx.Store.GetBlockPath(_fx.Hash1)
            );
        }

        [Fact]
        public void ReturnStagedTransactionPath()
        {
            Assert.Equal(
                Path.Combine(_fx.Path, "stage", "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"),
                _fx.Store.GetStagedTransactionPath(_fx.TxId1)
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
                Path.Combine(_fx.Path, "states", "45a2", "2187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"),
                _fx.Store.GetStatesPath(hash)
            );
        }

        [Fact]
        public void GetStateReferencePath()
        {
            string expected = Path.Combine(
                _fx.Path,
                "stateref",
                _ns,
                "45a2",
                "2187e2D8850bb357886958bC3E8560929ccc");
            string actual = _fx.Store.GetStateReferencePath(
                _ns,
                _fx.Address1);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void StoreBlock()
        {
            Assert.Empty(_fx.Store.IterateBlockHashes());
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block1.Hash));
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block3.Hash));
            Assert.False(_fx.Store.DeleteBlock(_fx.Block1.Hash));

            _fx.Store.PutBlock(_fx.Block1);
            Assert.Equal(1, _fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    _fx.Block1.Hash,
                },
                _fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Equal(
                _fx.Block1,
                _fx.Store.GetBlock<DumbAction>(_fx.Block1.Hash));
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block3.Hash));

            _fx.Store.PutBlock(_fx.Block2);
            Assert.Equal(2, _fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    _fx.Block1.Hash,
                    _fx.Block2.Hash,
                },
                _fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Equal(
                _fx.Block1,
                _fx.Store.GetBlock<DumbAction>(_fx.Block1.Hash));
            Assert.Equal(
                _fx.Block2,
                _fx.Store.GetBlock<DumbAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block3.Hash));

            Assert.True(_fx.Store.DeleteBlock(_fx.Block1.Hash));
            Assert.Equal(1, _fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    _fx.Block2.Hash,
                },
                _fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block1.Hash));
            Assert.Equal(
                _fx.Block2,
                _fx.Store.GetBlock<DumbAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<DumbAction>(_fx.Block3.Hash));
        }

        [Fact]
        public void StoreTx()
        {
            Assert.Equal(0, _fx.Store.CountTransactions());
            Assert.Empty(_fx.Store.IterateTransactionIds());
            Assert.Null(_fx.Store.GetTransaction<DumbAction>(_fx.Transaction1.Id));
            Assert.Null(_fx.Store.GetTransaction<DumbAction>(_fx.Transaction2.Id));
            Assert.False(_fx.Store.DeleteTransaction(_fx.Transaction1.Id));

            _fx.Store.PutTransaction(_fx.Transaction1);
            Assert.Equal(1, _fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    _fx.Transaction1.Id,
                },
                _fx.Store.IterateTransactionIds()
            );
            Assert.Equal(
                _fx.Transaction1,
                _fx.Store.GetTransaction<DumbAction>(_fx.Transaction1.Id)
            );
            Assert.Null(_fx.Store.GetTransaction<DumbAction>(_fx.Transaction2.Id));

            _fx.Store.PutTransaction(_fx.Transaction2);
            Assert.Equal(2, _fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    _fx.Transaction1.Id,
                    _fx.Transaction2.Id,
                },
                _fx.Store.IterateTransactionIds().ToHashSet()
            );
            Assert.Equal(
                _fx.Transaction1,
                _fx.Store.GetTransaction<DumbAction>(_fx.Transaction1.Id)
            );
            Assert.Equal(
                _fx.Transaction2,
                _fx.Store.GetTransaction<DumbAction>(_fx.Transaction2.Id));

            Assert.True(_fx.Store.DeleteTransaction(_fx.Transaction1.Id));
            Assert.Equal(1, _fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    _fx.Transaction2.Id,
                },
                _fx.Store.IterateTransactionIds()
            );
            Assert.Null(_fx.Store.GetTransaction<DumbAction>(_fx.Transaction1.Id));
            Assert.Equal(
                _fx.Transaction2,
                _fx.Store.GetTransaction<DumbAction>(_fx.Transaction2.Id)
            );
        }

        [Fact]
        public void StoreIndex()
        {
            Assert.Equal(0, _fx.Store.CountIndex(_ns));
            Assert.Empty(_fx.Store.IterateIndex(_ns));
            Assert.Null(_fx.Store.IndexBlockHash(_ns, 0));
            Assert.Null(_fx.Store.IndexBlockHash(_ns, -1));

            Assert.Equal(0, _fx.Store.AppendIndex(_ns, _fx.Hash1));
            Assert.Equal(1, _fx.Store.CountIndex(_ns));
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    _fx.Hash1,
                },
                _fx.Store.IterateIndex(_ns));
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(_ns, 0));
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(_ns, -1));

            Assert.Equal(1, _fx.Store.AppendIndex(_ns, _fx.Hash2));
            Assert.Equal(2, _fx.Store.CountIndex(_ns));
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    _fx.Hash1,
                    _fx.Hash2,
                },
                _fx.Store.IterateIndex(_ns));
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(_ns, 0));
            Assert.Equal(_fx.Hash2, _fx.Store.IndexBlockHash(_ns, 1));
            Assert.Equal(_fx.Hash2, _fx.Store.IndexBlockHash(_ns, -1));
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(_ns, -2));
        }

        [Fact]
        public void StoreStage()
        {
            _fx.Store.PutTransaction(_fx.Transaction1);
            _fx.Store.PutTransaction(_fx.Transaction2);
            Assert.Empty(_fx.Store.IterateStagedTransactionIds());

            _fx.Store.StageTransactionIds(
                new HashSet<TxId>()
                {
                    _fx.Transaction1.Id,
                    _fx.Transaction2.Id,
                });
            Assert.Equal(
                new HashSet<TxId>()
                {
                    _fx.Transaction1.Id,
                    _fx.Transaction2.Id,
                },
                _fx.Store.IterateStagedTransactionIds().ToHashSet());

            _fx.Store.UnstageTransactionIds(
                new HashSet<TxId>
                {
                    _fx.Transaction1.Id,
                });
            Assert.Equal(
                new HashSet<TxId>()
                {
                    _fx.Transaction2.Id,
                },
                _fx.Store.IterateStagedTransactionIds().ToHashSet());
        }

        [Fact]
        public void StoreBlockState()
        {
            Assert.Empty(_fx.Store.GetBlockStates(_fx.Hash1));
            AddressStateMap states = new AddressStateMap(
                new Dictionary<Address, object>()
                {
                    [_fx.Address1] = new Dictionary<string, int>()
                    {
                        { "a", 1 },
                    },
                    [_fx.Address2] = new Dictionary<string, int>()
                    {
                        { "b", 2 },
                    },
                }.ToImmutableDictionary()
            );
            _fx.Store.SetBlockStates(_fx.Hash1, states);

            AddressStateMap actual = _fx.Store.GetBlockStates(_fx.Hash1);
            Assert.Equal(states[_fx.Address1], actual[_fx.Address1]);
            Assert.Equal(states[_fx.Address2], actual[_fx.Address2]);
        }

        [Fact]
        public void CanDeleteIndex()
        {
            Assert.False(_fx.Store.DeleteIndex(_ns, _fx.Hash1));
            _fx.Store.AppendIndex(_ns, _fx.Hash1);
            Assert.NotEmpty(_fx.Store.IterateIndex(_ns));
            Assert.True(_fx.Store.DeleteIndex(_ns, _fx.Hash1));
            Assert.Empty(_fx.Store.IterateIndex(_ns));
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

            string path = _fx.Store.GetStateReferencePath(_ns, address);
            var stateReferenceFile = new FileInfo(path);
            Assert.False(stateReferenceFile.Exists);

            foreach (Block<DumbAction> block in blocks)
            {
                var updatedAddresses = new HashSet<Address> { address };
                _fx.Store.StoreStateReference(
                    _ns, updatedAddresses.ToImmutableHashSet(), block);
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

        [Fact]
        public void LookupStateReference()
        {
            Address address = _fx.Address1;
            Block<DumbAction> prevBlock = _fx.Block3;

            Assert.Null(_fx.Store.LookupStateReference(_ns, address, prevBlock));

            Transaction<DumbAction> transaction = _fx.MakeTransaction(
                new List<DumbAction>(),
                new HashSet<Address> { address }.ToImmutableHashSet());

            Block<DumbAction> block = TestUtils.MineNext(
                prevBlock,
                new[] { transaction });

            var updatedAddresses = new HashSet<Address> { address };
            _fx.Store.StoreStateReference(
                _ns, updatedAddresses.ToImmutableHashSet(), block);

            Assert.Equal(
                block.Hash,
                _fx.Store.LookupStateReference(_ns, address, block));
            Assert.Null(_fx.Store.LookupStateReference(_ns, address, prevBlock));
        }

        [Fact]
        public void ForkStateReferences()
        {
            Address address = _fx.Address1;
            Block<DumbAction> prevBlock = _fx.Block3;
            const string targetNamespace = "dummy";

            Transaction<DumbAction> transaction = _fx.MakeTransaction(
                new List<DumbAction>(),
                new HashSet<Address> { address }.ToImmutableHashSet());

            var txs = new[] { transaction };
            var blocks = new List<Block<DumbAction>>
            {
                TestUtils.MineNext(prevBlock, txs),
            };
            blocks.Add(TestUtils.MineNext(blocks[0], txs));
            blocks.Add(TestUtils.MineNext(blocks[1], txs));

            foreach (Block<DumbAction> block in blocks)
            {
                var updatedAddresses = new HashSet<Address> { address };
                _fx.Store.StoreStateReference(
                    _ns, updatedAddresses.ToImmutableHashSet(), block);
            }

            var branchPoint = blocks[0];
            var addressesToStrip = blocks
                .SkipWhile(b => b.Index <= branchPoint.Index)
                .SelectMany(b => b.Transactions)
                .SelectMany(tx => tx.UpdatedAddresses)
                .ToImmutableHashSet();

            _fx.Store.ForkStateReferences(
                _ns,
                targetNamespace,
                branchPoint,
                addressesToStrip);

            Assert.Equal(
                blocks[2].Hash,
                _fx.Store.LookupStateReference(_ns, address, blocks[2]));
            Assert.Equal(
                    blocks[0].Hash,
                    _fx.Store.LookupStateReference(targetNamespace, address, blocks[2]));
        }

        [Fact]
        public void ForkStateReferencesDirectoryNotFound()
        {
            var targetNamespace = "dummy";
            Address address = _fx.Address1;

            _fx.Store.ForkStateReferences(
                _ns,
                targetNamespace,
                _fx.Block1,
                ImmutableHashSet<Address>.Empty);

            Assert.Throws<DirectoryNotFoundException>(() =>
                _fx.Store.ForkStateReferences(
                    _ns,
                    targetNamespace,
                    _fx.Block1,
                    new HashSet<Address> { address }.ToImmutableHashSet()));
        }

        public void Dispose()
        {
            _fx.Dispose();
        }
    }
}
