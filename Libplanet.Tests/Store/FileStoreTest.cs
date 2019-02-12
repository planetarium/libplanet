using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public class FileStoreTest : IDisposable
    {
        private readonly FileStoreFixture _fx;

        public FileStoreTest()
        {
            _fx = new FileStoreFixture();
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
        public void CanReturnStagedTransactionPath()
        {
            Assert.Equal(
                Path.Combine(_fx.Path, "stage", "45a22187e2d8850bb357886958bc3e8560929ccc886958bc3e8560929ccc9ccc"),
                _fx.Store.GetStagedTransactionPath(_fx.TxId1)
            );
        }

        [Fact]
        public void CanReturnAddressPath()
        {
            Assert.Equal(
                Path.Combine(_fx.Path, "addr", "45a2", "2187e2D8850bb357886958bC3E8560929ccc"),
                _fx.Store.GetAddressPath(_fx.Address1)
            );
        }

        [Fact]
        public void CanReturnStatesPath()
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
        public void CanStoreBlock()
        {
            Assert.Empty(_fx.Store.IterateBlockHashes());
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block1.Hash));
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block3.Hash));
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
                _fx.Store.GetBlock<BaseAction>(_fx.Block1.Hash));
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block3.Hash));

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
                _fx.Store.GetBlock<BaseAction>(_fx.Block1.Hash));
            Assert.Equal(
                _fx.Block2,
                _fx.Store.GetBlock<BaseAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block3.Hash));

            Assert.True(_fx.Store.DeleteBlock(_fx.Block1.Hash));
            Assert.Equal(1, _fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    _fx.Block2.Hash,
                },
                _fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block1.Hash));
            Assert.Equal(
                _fx.Block2,
                _fx.Store.GetBlock<BaseAction>(_fx.Block2.Hash));
            Assert.Null(_fx.Store.GetBlock<BaseAction>(_fx.Block3.Hash));
        }

        [Fact]
        public void CanStoreTx()
        {
            Assert.Equal(0, _fx.Store.CountTransactions());
            Assert.Empty(_fx.Store.IterateTransactionIds());
            Assert.Null(_fx.Store.GetTransaction<BaseAction>(_fx.Transaction1.Id));
            Assert.Null(_fx.Store.GetTransaction<BaseAction>(_fx.Transaction2.Id));
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
                _fx.Store.GetTransaction<BaseAction>(_fx.Transaction1.Id)
            );
            Assert.Null(_fx.Store.GetTransaction<BaseAction>(_fx.Transaction2.Id));

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
                _fx.Store.GetTransaction<BaseAction>(_fx.Transaction1.Id)
            );
            Assert.Equal(
                _fx.Transaction2,
                _fx.Store.GetTransaction<BaseAction>(_fx.Transaction2.Id));

            Assert.True(_fx.Store.DeleteTransaction(_fx.Transaction1.Id));
            Assert.Equal(1, _fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    _fx.Transaction2.Id,
                },
                _fx.Store.IterateTransactionIds()
            );
            Assert.Null(_fx.Store.GetTransaction<BaseAction>(_fx.Transaction1.Id));
            Assert.Equal(
                _fx.Transaction2,
                _fx.Store.GetTransaction<BaseAction>(_fx.Transaction2.Id)
            );
        }

        [Fact]
        public void CanStoreIndex()
        {
            Assert.Equal(0u, _fx.Store.CountIndex());
            Assert.Empty(_fx.Store.IterateIndex());
            Assert.Null(_fx.Store.IndexBlockHash(0));
            Assert.Null(_fx.Store.IndexBlockHash(-1));

            Assert.Equal(0, _fx.Store.AppendIndex(_fx.Hash1));
            Assert.Equal(1u, _fx.Store.CountIndex());
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    _fx.Hash1,
                },
                _fx.Store.IterateIndex());
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(0));
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(-1));

            Assert.Equal(1, _fx.Store.AppendIndex(_fx.Hash2));
            Assert.Equal(2u, _fx.Store.CountIndex());
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    _fx.Hash1,
                    _fx.Hash2,
                },
                _fx.Store.IterateIndex());
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(0));
            Assert.Equal(_fx.Hash2, _fx.Store.IndexBlockHash(1));
            Assert.Equal(_fx.Hash2, _fx.Store.IndexBlockHash(-1));
            Assert.Equal(_fx.Hash1, _fx.Store.IndexBlockHash(-2));
        }

        [Fact]
        public void CanStoreStage()
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
        public void CanStoreAddress()
        {
            Assert.Equal(0, _fx.Store.CountAddresses());
            Assert.Empty(_fx.Store.IterateAddresses());
            Assert.Empty(_fx.Store.GetAddressTransactionIds(_fx.Address1));
            Assert.Empty(_fx.Store.GetAddressTransactionIds(_fx.Address2));

            // Add TxId1 to Address1
            Assert.Equal(
                0,
                _fx.Store.AppendAddressTransactionId(_fx.Address1, _fx.TxId1));
            Assert.Equal(1, _fx.Store.CountAddresses());
            Assert.Equal(
                new List<Address>() { _fx.Address1 },
                _fx.Store.IterateAddresses());
            Assert.Equal(
                new List<TxId>() { _fx.TxId1 },
                _fx.Store.GetAddressTransactionIds(_fx.Address1));
            Assert.Empty(_fx.Store.GetAddressTransactionIds(_fx.Address2));

            // Add TxId2 to Address1
            Assert.Equal(
                1,
                _fx.Store.AppendAddressTransactionId(_fx.Address1, _fx.TxId2));
            Assert.Equal(1, _fx.Store.CountAddresses());
            Assert.Equal(
                new List<Address>() { _fx.Address1 },
                _fx.Store.IterateAddresses());
            Assert.Equal(
                new List<TxId>() { _fx.TxId1, _fx.TxId2 },
                _fx.Store.GetAddressTransactionIds(_fx.Address1));
            Assert.Empty(_fx.Store.GetAddressTransactionIds(_fx.Address2));

            // Add TxId3 to Address2
            Assert.Equal(
                0,
                _fx.Store.AppendAddressTransactionId(_fx.Address2, _fx.TxId3));
            Assert.Equal(2, _fx.Store.CountAddresses());
            Assert.Equal(
                new List<Address>() { _fx.Address1, _fx.Address2 },
                _fx.Store.IterateAddresses());
            Assert.Equal(
                new List<TxId>() { _fx.TxId1, _fx.TxId2 },
                _fx.Store.GetAddressTransactionIds(_fx.Address1));
            Assert.Equal(
                new List<TxId>() { _fx.TxId3 },
                _fx.Store.GetAddressTransactionIds(_fx.Address2));
        }

        [Fact]
        public void CanStoreBlockState()
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
            Assert.False(_fx.Store.DeleteIndex(_fx.Hash1));
            _fx.Store.AppendIndex(_fx.Hash1);
            Assert.NotEmpty(_fx.Store.IterateIndex());
            Assert.True(_fx.Store.DeleteIndex(_fx.Hash1));
            Assert.Empty(_fx.Store.IterateIndex());
        }

        public void Dispose()
        {
            _fx.Dispose();
        }
    }
}
