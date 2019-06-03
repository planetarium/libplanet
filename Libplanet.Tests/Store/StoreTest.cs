using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Store
{
    public abstract class StoreTest
    {
        protected StoreFixture Fx { get; set; }

        [Fact]
        public void ListNamespaces()
        {
            Assert.Empty(Fx.Store.ListNamespaces());

            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.AppendIndex(Fx.StoreNamespace, Fx.Block1.Hash);
            Assert.Equal(
                new[] { Fx.StoreNamespace }.ToImmutableHashSet(),
                Fx.Store.ListNamespaces().ToImmutableHashSet()
            );

            Fx.Store.AppendIndex("asdf", Fx.Block1.Hash);
            Assert.Equal(
                new[] { Fx.StoreNamespace, "asdf" }.ToImmutableHashSet(),
                Fx.Store.ListNamespaces().ToImmutableHashSet()
            );
        }

        [Fact]
        public void StoreBlock()
        {
            Assert.Empty(Fx.Store.IterateBlockHashes());
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));
            Assert.False(Fx.Store.DeleteBlock(Fx.Block1.Hash));

            Fx.Store.PutBlock(Fx.Block1);
            Assert.Equal(1, Fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    Fx.Block1.Hash,
                },
                Fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Equal(
                Fx.Block1,
                Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));

            Fx.Store.PutBlock(Fx.Block2);
            Assert.Equal(2, Fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                },
                Fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Equal(
                Fx.Block1,
                Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Equal(
                Fx.Block2,
                Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));

            Assert.True(Fx.Store.DeleteBlock(Fx.Block1.Hash));
            Assert.Equal(1, Fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<HashDigest<SHA256>>
                {
                    Fx.Block2.Hash,
                },
                Fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Equal(
                Fx.Block2,
                Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));
        }

        [Fact]
        public void StoreTx()
        {
            Assert.Equal(0, Fx.Store.CountTransactions());
            Assert.Empty(Fx.Store.IterateTransactionIds());
            Assert.Null(Fx.Store.GetTransaction<DumbAction>(Fx.Transaction1.Id));
            Assert.Null(Fx.Store.GetTransaction<DumbAction>(Fx.Transaction2.Id));
            Assert.False(Fx.Store.DeleteTransaction(Fx.Transaction1.Id));

            Fx.Store.PutTransaction(Fx.Transaction1);
            Assert.Equal(1, Fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    Fx.Transaction1.Id,
                },
                Fx.Store.IterateTransactionIds()
            );
            Assert.Equal(
                Fx.Transaction1,
                Fx.Store.GetTransaction<DumbAction>(Fx.Transaction1.Id)
            );
            Assert.Null(Fx.Store.GetTransaction<DumbAction>(Fx.Transaction2.Id));

            Fx.Store.PutTransaction(Fx.Transaction2);
            Assert.Equal(2, Fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    Fx.Transaction1.Id,
                    Fx.Transaction2.Id,
                },
                Fx.Store.IterateTransactionIds().ToHashSet()
            );
            Assert.Equal(
                Fx.Transaction1,
                Fx.Store.GetTransaction<DumbAction>(Fx.Transaction1.Id)
            );
            Assert.Equal(
                Fx.Transaction2,
                Fx.Store.GetTransaction<DumbAction>(Fx.Transaction2.Id));

            Assert.True(Fx.Store.DeleteTransaction(Fx.Transaction1.Id));
            Assert.Equal(1, Fx.Store.CountTransactions());
            Assert.Equal(
                new HashSet<TxId>
                {
                    Fx.Transaction2.Id,
                },
                Fx.Store.IterateTransactionIds()
            );
            Assert.Null(Fx.Store.GetTransaction<DumbAction>(Fx.Transaction1.Id));
            Assert.Equal(
                Fx.Transaction2,
                Fx.Store.GetTransaction<DumbAction>(Fx.Transaction2.Id)
            );
        }

        [Fact]
        public void StoreIndex()
        {
            Assert.Equal(0, Fx.Store.CountIndex(Fx.StoreNamespace));
            Assert.Empty(Fx.Store.IterateIndex(Fx.StoreNamespace));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreNamespace, 0));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreNamespace, -1));

            Assert.Equal(0, Fx.Store.AppendIndex(Fx.StoreNamespace, Fx.Hash1));
            Assert.Equal(1, Fx.Store.CountIndex(Fx.StoreNamespace));
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    Fx.Hash1,
                },
                Fx.Store.IterateIndex(Fx.StoreNamespace));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreNamespace, 0));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreNamespace, -1));

            Assert.Equal(1, Fx.Store.AppendIndex(Fx.StoreNamespace, Fx.Hash2));
            Assert.Equal(2, Fx.Store.CountIndex(Fx.StoreNamespace));
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    Fx.Hash1,
                    Fx.Hash2,
                },
                Fx.Store.IterateIndex(Fx.StoreNamespace));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreNamespace, 0));
            Assert.Equal(Fx.Hash2, Fx.Store.IndexBlockHash(Fx.StoreNamespace, 1));
            Assert.Equal(Fx.Hash2, Fx.Store.IndexBlockHash(Fx.StoreNamespace, -1));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreNamespace, -2));
        }

        [Fact]
        public void DeleteIndex()
        {
            Assert.False(Fx.Store.DeleteIndex(Fx.StoreNamespace, Fx.Hash1));
            Fx.Store.AppendIndex(Fx.StoreNamespace, Fx.Hash1);
            Assert.NotEmpty(Fx.Store.IterateIndex(Fx.StoreNamespace));
            Assert.True(Fx.Store.DeleteIndex(Fx.StoreNamespace, Fx.Hash1));
            Assert.Empty(Fx.Store.IterateIndex(Fx.StoreNamespace));
        }

        [Fact]
        public void LookupStateReference()
        {
            Address address = Fx.Address1;
            Block<DumbAction> prevBlock = Fx.Block3;

            Assert.Null(Fx.Store.LookupStateReference(Fx.StoreNamespace, address, prevBlock));

            Transaction<DumbAction> transaction = Fx.MakeTransaction(
                new List<DumbAction>(),
                new HashSet<Address> { address }.ToImmutableHashSet());

            Block<DumbAction> block = TestUtils.MineNext(
                prevBlock,
                new[] { transaction });

            var updatedAddresses = new HashSet<Address> { address };
            Fx.Store.StoreStateReference(
                Fx.StoreNamespace, updatedAddresses.ToImmutableHashSet(), block);

            Assert.Equal(
                block.Hash,
                Fx.Store.LookupStateReference(Fx.StoreNamespace, address, block));
            Assert.Null(Fx.Store.LookupStateReference(Fx.StoreNamespace, address, prevBlock));
        }

        [Fact]
        public void ForkStateReferences()
        {
            Address address = Fx.Address1;
            Block<DumbAction> prevBlock = Fx.Block3;
            const string targetNamespace = "dummy";

            Transaction<DumbAction> transaction = Fx.MakeTransaction(
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
                Fx.Store.StoreStateReference(
                    Fx.StoreNamespace, updatedAddresses.ToImmutableHashSet(), block);
            }

            var branchPoint = blocks[0];
            var addressesToStrip = new[] { address }.ToImmutableHashSet();

            Fx.Store.ForkStateReferences(
                Fx.StoreNamespace,
                targetNamespace,
                branchPoint,
                addressesToStrip);

            Assert.Equal(
                blocks[2].Hash,
                Fx.Store.LookupStateReference(Fx.StoreNamespace, address, blocks[2]));
            Assert.Equal(
                    blocks[0].Hash,
                    Fx.Store.LookupStateReference(targetNamespace, address, blocks[2]));
        }

        [Fact]
        public void ForkStateReferencesNamespaceNotFound()
        {
            var targetNamespace = "dummy";
            Address address = Fx.Address1;

            Assert.Throws<NamespaceNotFoundException>(() =>
                Fx.Store.ForkStateReferences(
                    Fx.StoreNamespace,
                    targetNamespace,
                    Fx.Block1,
                    new HashSet<Address> { address }.ToImmutableHashSet()));
        }

        [Fact]
        public void StoreStage()
        {
            Fx.Store.PutTransaction(Fx.Transaction1);
            Fx.Store.PutTransaction(Fx.Transaction2);
            Assert.Empty(Fx.Store.IterateStagedTransactionIds());

            Fx.Store.StageTransactionIds(
                new HashSet<TxId>()
                {
                    Fx.Transaction1.Id,
                    Fx.Transaction2.Id,
                });
            Assert.Equal(
                new HashSet<TxId>()
                {
                    Fx.Transaction1.Id,
                    Fx.Transaction2.Id,
                },
                Fx.Store.IterateStagedTransactionIds().ToHashSet());

            Fx.Store.UnstageTransactionIds(
                new HashSet<TxId>
                {
                    Fx.Transaction1.Id,
                });
            Assert.Equal(
                new HashSet<TxId>()
                {
                    Fx.Transaction2.Id,
                },
                Fx.Store.IterateStagedTransactionIds().ToHashSet());
        }

        [Fact]
        public void StoreBlockState()
        {
            Assert.Empty(Fx.Store.GetBlockStates(Fx.Hash1));
            AddressStateMap states = new AddressStateMap(
                new Dictionary<Address, object>()
                {
                    [Fx.Address1] = new Dictionary<string, int>()
                    {
                        { "a", 1 },
                    },
                    [Fx.Address2] = new Dictionary<string, int>()
                    {
                        { "b", 2 },
                    },
                }.ToImmutableDictionary()
            );
            Fx.Store.SetBlockStates(Fx.Hash1, states);

            AddressStateMap actual = Fx.Store.GetBlockStates(Fx.Hash1);
            Assert.Equal(states[Fx.Address1], actual[Fx.Address1]);
            Assert.Equal(states[Fx.Address2], actual[Fx.Address2]);
        }

        [Fact]
        public void TxNonce()
        {
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer));

            Block<DumbAction> block1 = TestUtils.MineNext(
                TestUtils.MineGenesis<DumbAction>(),
                new[] { Fx.Transaction1 });
            Fx.Store.IncreaseTxNonce(Fx.StoreNamespace, block1);

            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer));

            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                new[] { Fx.Transaction2 });
            Fx.Store.IncreaseTxNonce(Fx.StoreNamespace, block2);

            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer));
        }
    }
}
