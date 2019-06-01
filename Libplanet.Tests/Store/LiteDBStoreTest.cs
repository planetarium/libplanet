using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class LiteDBStoreTest : IDisposable
    {
        private readonly LiteDBStoreFixture _fx;
        private readonly string _ns;

        public LiteDBStoreTest()
        {
            _fx = new LiteDBStoreFixture();
            _ns = _fx.StoreNamespace;
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
                new List<HashDigest<SHA256>>
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
                new HashSet<TxId>
                {
                    _fx.Transaction1.Id,
                    _fx.Transaction2.Id,
                });
            Assert.Equal(
                new HashSet<TxId>
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
                new Dictionary<Address, object>
                {
                    [_fx.Address1] = new Dictionary<string, int>
                    {
                        { "a", 1 },
                    },
                    [_fx.Address2] = new Dictionary<string, int>
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
        public void DeleteIndex()
        {
            Assert.False(_fx.Store.DeleteIndex(_ns, _fx.Hash1));
            _fx.Store.AppendIndex(_ns, _fx.Hash1);
            Assert.NotEmpty(_fx.Store.IterateIndex(_ns));
            Assert.True(_fx.Store.DeleteIndex(_ns, _fx.Hash1));
            Assert.Empty(_fx.Store.IterateIndex(_ns));
        }

        [Fact]
        public void TxNonce()
        {
            Assert.Equal(0, _fx.Store.GetTxNonce(_ns, _fx.Transaction1.Signer));
            Assert.Equal(0, _fx.Store.GetTxNonce(_ns, _fx.Transaction2.Signer));

            Block<DumbAction> block1 = TestUtils.MineNext(
                TestUtils.MineGenesis<DumbAction>(),
                new[] { _fx.Transaction1 });
            _fx.Store.IncreaseTxNonce(_ns, block1);

            Assert.Equal(1, _fx.Store.GetTxNonce(_ns, _fx.Transaction1.Signer));
            Assert.Equal(0, _fx.Store.GetTxNonce(_ns, _fx.Transaction2.Signer));

            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                new[] { _fx.Transaction2 });
            _fx.Store.IncreaseTxNonce(_ns, block2);

            Assert.Equal(1, _fx.Store.GetTxNonce(_ns, _fx.Transaction1.Signer));
            Assert.Equal(1, _fx.Store.GetTxNonce(_ns, _fx.Transaction2.Signer));
        }

        [Fact]
        public void StateReference()
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
            var addressesToStrip = new[] { address }.ToImmutableHashSet();

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

        public void Dispose()
        {
            _fx?.Dispose();
        }
    }
}
