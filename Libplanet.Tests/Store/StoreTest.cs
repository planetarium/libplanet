using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
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
        public void DeleteNamespace()
        {
            Block<DumbAction> block1 = TestUtils.MineNext(
                TestUtils.MineGenesis<DumbAction>(),
                new[] { Fx.Transaction1 });
            Fx.Store.AppendIndex(Fx.StoreNamespace, block1.Hash);
            Fx.Store.AppendIndex("asdf", block1.Hash);
            Address[] addresses = Enumerable.Repeat<object>(null, 8)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();
            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                addresses.Take(3).ToImmutableHashSet(),
                block1.Hash,
                block1.Index
            );
            Fx.Store.IncreaseTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer);

            Fx.Store.DeleteNamespace(Fx.StoreNamespace);

            Assert.Equal(
                new[] { "asdf" }.ToImmutableHashSet(),
                Fx.Store.ListNamespaces().ToImmutableHashSet()
            );
            Assert.Empty(Fx.Store.ListAddresses(Fx.StoreNamespace).ToArray());
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
        }

        [Fact]
        public void CanonicalNamespace()
        {
            Assert.Null(Fx.Store.GetCanonicalNamespace());
            Assert.Throws<ArgumentNullException>(() => Fx.Store.SetCanonicalNamespace(null));
            Fx.Store.SetCanonicalNamespace("foo");
            Assert.Equal("foo", Fx.Store.GetCanonicalNamespace());
            Fx.Store.SetCanonicalNamespace("bar");
            Assert.Equal("bar", Fx.Store.GetCanonicalNamespace());
        }

        [Fact]
        public void ListAddresses()
        {
            Assert.Empty(Fx.Store.ListAddresses(Fx.StoreNamespace).ToArray());

            Address[] addresses = Enumerable.Repeat<object>(null, 8)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();
            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                addresses.Take(3).ToImmutableHashSet(),
                Fx.Block1.Hash,
                Fx.Block1.Index
            );
            Assert.Equal(
                addresses.Take(3).ToImmutableHashSet(),
                Fx.Store.ListAddresses(Fx.StoreNamespace).ToImmutableHashSet()
            );
            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                addresses.Skip(2).Take(3).ToImmutableHashSet(),
                Fx.Block2.Hash,
                Fx.Block2.Index
            );
            Assert.Equal(
                addresses.Take(5).ToImmutableHashSet(),
                Fx.Store.ListAddresses(Fx.StoreNamespace).ToImmutableHashSet()
            );
            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                addresses.Skip(5).Take(3).ToImmutableHashSet(),
                Fx.Block3.Hash,
                Fx.Block3.Index
            );
            Assert.Equal(
                addresses.ToImmutableHashSet(),
                Fx.Store.ListAddresses(Fx.StoreNamespace).ToImmutableHashSet()
            );
        }

        [Fact]
        public void StoreBlock()
        {
            Assert.Empty(Fx.Store.IterateBlockHashes());
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block3.Hash));
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
            Assert.Equal(Fx.Block1.Index, Fx.Store.GetBlockIndex(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block3.Hash));

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
            Assert.Equal(Fx.Block1.Index, Fx.Store.GetBlockIndex(Fx.Block1.Hash));
            Assert.Equal(Fx.Block2.Index, Fx.Store.GetBlockIndex(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block3.Hash));

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
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block1.Hash));
            Assert.Equal(Fx.Block2.Index, Fx.Store.GetBlockIndex(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block3.Hash));
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
        public void IterateIndex()
        {
            var ns = Fx.StoreNamespace;
            var store = Fx.Store;

            store.AppendIndex(ns, Fx.Hash1);
            store.AppendIndex(ns, Fx.Hash2);
            store.AppendIndex(ns, Fx.Hash3);

            var indexes = store.IterateIndex(ns).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndex(ns, 1).ToArray();
            Assert.Equal(new[] { Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndex(ns, 2).ToArray();
            Assert.Equal(new[] { Fx.Hash3 }, indexes);

            indexes = store.IterateIndex(ns, 3).ToArray();
            Assert.Equal(new HashDigest<SHA256>[] { }, indexes);

            indexes = store.IterateIndex(ns, 4).ToArray();
            Assert.Equal(new HashDigest<SHA256>[] { }, indexes);

            indexes = store.IterateIndex(ns, limit: 0).ToArray();
            Assert.Equal(new HashDigest<SHA256>[] { }, indexes);

            indexes = store.IterateIndex(ns, limit: 1).ToArray();
            Assert.Equal(new[] { Fx.Hash1 }, indexes);

            indexes = store.IterateIndex(ns, limit: 2).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2 }, indexes);

            indexes = store.IterateIndex(ns, limit: 3).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndex(ns, limit: 4).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndex(ns, 1, 1).ToArray();
            Assert.Equal(new[] { Fx.Hash2 }, indexes);
        }

        [Fact]
        public void IterateStateReferences()
        {
            Address address = this.Fx.Address1;

            Transaction<DumbAction> tx4 = Fx.MakeTransaction(
                new DumbAction[] { new DumbAction(address, "foo") }
            );
            Block<DumbAction> block4 = TestUtils.MineNext(Fx.Block3, new[] { tx4 });

            Transaction<DumbAction> tx5 = Fx.MakeTransaction(
                new DumbAction[] { new DumbAction(address, "bar") }
            );
            Block<DumbAction> block5 = TestUtils.MineNext(block4, new[] { tx5 });

            Assert.Empty(this.Fx.Store.IterateStateReferences(this.Fx.StoreNamespace, address));

            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                tx4.UpdatedAddresses,
                block4.Hash,
                block4.Index
            );
            Assert.Equal(
                new[] { Tuple.Create(block4.Hash, block4.Index) },
                this.Fx.Store.IterateStateReferences(this.Fx.StoreNamespace, address)
            );

            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                tx5.UpdatedAddresses,
                block5.Hash,
                block5.Index
            );
            Assert.Equal(
                new[]
                {
                    Tuple.Create(block5.Hash, block5.Index),
                    Tuple.Create(block4.Hash, block4.Index),
                },
                this.Fx.Store.IterateStateReferences(this.Fx.StoreNamespace, address)
            );
        }

        [InlineData(0)]
        [InlineData(1)]
        [InlineData(2)]
        [Theory]
        public void ForkStateReferences(int branchPointIndex)
        {
            Address address1 = Fx.Address1;
            Address address2 = Fx.Address2;
            Block<DumbAction> prevBlock = Fx.Block3;
            const string targetNamespace = "dummy";

            Transaction<DumbAction> tx1 = Fx.MakeTransaction(
                new List<DumbAction>(),
                new HashSet<Address> { address1 }.ToImmutableHashSet());

            Transaction<DumbAction> tx2 = Fx.MakeTransaction(
                new List<DumbAction>(),
                new HashSet<Address> { address2 }.ToImmutableHashSet());

            var txs1 = new[] { tx1 };
            var blocks = new List<Block<DumbAction>>
            {
                TestUtils.MineNext(prevBlock, txs1),
            };
            blocks.Add(TestUtils.MineNext(blocks[0], txs1));
            blocks.Add(TestUtils.MineNext(blocks[1], txs1));

            HashSet<Address> updatedAddresses;
            foreach (Block<DumbAction> block in blocks)
            {
                updatedAddresses = new HashSet<Address> { address1 };
                Fx.Store.StoreStateReference(
                    Fx.StoreNamespace,
                    updatedAddresses.ToImmutableHashSet(),
                    block.Hash,
                    block.Index
                );
            }

            var txs2 = new[] { tx2 };
            blocks.Add(TestUtils.MineNext(blocks[2], txs2));

            updatedAddresses = new HashSet<Address> { address2 };
            Fx.Store.StoreStateReference(
                Fx.StoreNamespace,
                updatedAddresses.ToImmutableHashSet(),
                blocks[3].Hash,
                blocks[3].Index
            );

            var branchPoint = blocks[branchPointIndex];
            var addressesToStrip = new[] { address1, address2 }.ToImmutableHashSet();

            Fx.Store.ForkStateReferences(
                Fx.StoreNamespace,
                targetNamespace,
                branchPoint,
                addressesToStrip);

            var actual = Fx.Store.LookupStateReference(
                Fx.StoreNamespace,
                address1,
                blocks[3]);

            Assert.Equal(
                Tuple.Create(blocks[2].Hash, blocks[2].Index),
                Fx.Store.LookupStateReference(Fx.StoreNamespace, address1, blocks[3]));
            Assert.Equal(
                Tuple.Create(blocks[3].Hash, blocks[3].Index),
                Fx.Store.LookupStateReference(Fx.StoreNamespace, address2, blocks[3]));
            Assert.Equal(
                    Tuple.Create(blocks[branchPointIndex].Hash, blocks[branchPointIndex].Index),
                    Fx.Store.LookupStateReference(targetNamespace, address1, blocks[3]));
            Assert.Null(
                    Fx.Store.LookupStateReference(targetNamespace, address2, blocks[3]));
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

            var txIds = new HashSet<TxId>()
            {
                Fx.Transaction1.Id,
                Fx.Transaction2.Id,
            };

            Dictionary<TxId, bool> toStage = txIds.ToDictionary(txId => txId, _ => true);

            Fx.Store.StageTransactionIds(toStage);
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
        public void StoreStageOnce()
        {
            Fx.Store.PutTransaction(Fx.Transaction1);
            Fx.Store.PutTransaction(Fx.Transaction2);

            var txIds = new HashSet<TxId>()
            {
                Fx.Transaction1.Id,
                Fx.Transaction2.Id,
            };

            Dictionary<TxId, bool> toStage = txIds.ToDictionary(txId => txId, _ => true);

            Fx.Store.StageTransactionIds(toStage);
            Fx.Store.StageTransactionIds(
                new Dictionary<TxId, bool> { { Fx.Transaction1.Id, true } });

            Assert.Equal(
                new[] { Fx.Transaction1.Id, Fx.Transaction2.Id }.OrderBy(txId => txId.ToHex()),
                Fx.Store.IterateStagedTransactionIds(false).OrderBy(txId => txId.ToHex()));
        }

        [Fact]
        public void IterateStagedTransactionIdsToBroadcast()
        {
            var toStage = new Dictionary<TxId, bool>
            {
                { Fx.Transaction1.Id, false },
                { Fx.Transaction2.Id, true },
            };
            Fx.Store.StageTransactionIds(toStage);

            Assert.Equal(
                new HashSet<TxId> { Fx.Transaction2.Id, },
                Fx.Store.IterateStagedTransactionIds(true).ToHashSet());

            Fx.Store.UnstageTransactionIds(new HashSet<TxId> { Fx.Transaction2.Id });

            Assert.Equal(
                new HashSet<TxId>(),
                Fx.Store.IterateStagedTransactionIds(true).ToHashSet());
        }

        [Fact]
        public void BlockState()
        {
            Assert.Null(Fx.Store.GetBlockStates(Fx.Hash1));
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

            Fx.Store.IncreaseTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer);
            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer));
            Assert.Equal(
                new Dictionary<Address, long>
                {
                    [Fx.Transaction1.Signer] = 1,
                },
                Fx.Store.ListTxNonces(Fx.StoreNamespace).ToDictionary(p => p.Key, p => p.Value)
            );

            Fx.Store.IncreaseTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer, 5);
            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
            Assert.Equal(5, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer));
            Assert.Equal(
                new Dictionary<Address, long>
                {
                    [Fx.Transaction1.Signer] = 1,
                    [Fx.Transaction2.Signer] = 5,
                },
                Fx.Store.ListTxNonces(Fx.StoreNamespace).ToDictionary(p => p.Key, p => p.Value)
            );

            Fx.Store.IncreaseTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer, 2);
            Assert.Equal(3, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction1.Signer));
            Assert.Equal(5, Fx.Store.GetTxNonce(Fx.StoreNamespace, Fx.Transaction2.Signer));
            Assert.Equal(
                new Dictionary<Address, long>
                {
                    [Fx.Transaction1.Signer] = 3,
                    [Fx.Transaction2.Signer] = 5,
                },
                Fx.Store.ListTxNonces(Fx.StoreNamespace).ToDictionary(p => p.Key, p => p.Value)
            );
        }

        [Fact]
        public void IndexBlockHashReturnNull()
        {
            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.AppendIndex(Fx.StoreNamespace, Fx.Block1.Hash);
            Assert.Equal(1, Fx.Store.CountIndex(Fx.StoreNamespace));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreNamespace, 2));
        }

        [Fact]
        public void TxAtomicity()
        {
            Transaction<AtomicityTestAction> MakeTx(
                System.Random random,
                MD5 md5,
                PrivateKey key,
                int txNonce
            )
            {
                byte[] arbitraryBytes = new byte[20];
                random.NextBytes(arbitraryBytes);
                byte[] digest = md5.ComputeHash(arbitraryBytes);
                var action = new AtomicityTestAction
                {
                    ArbitraryBytes = arbitraryBytes.ToImmutableArray(),
                    Md5Digest = digest.ToImmutableArray(),
                };
                return Transaction<AtomicityTestAction>.Create(
                    txNonce,
                    key,
                    new[] { action },
                    ImmutableHashSet<Address>.Empty,
                    DateTimeOffset.UtcNow
                );
            }

            const int taskCount = 5;
            const int txCount = 30;
            var md5Hasher = MD5.Create();
            Transaction<AtomicityTestAction> commonTx = MakeTx(
                new System.Random(),
                md5Hasher,
                new PrivateKey(),
                0
            );
            Task[] tasks = new Task[taskCount];
            for (int i = 0; i < taskCount; i++)
            {
                var task = new Task(() =>
                {
                    PrivateKey key = new PrivateKey();
                    var random = new System.Random();
                    var md5 = MD5.Create();
                    Transaction<AtomicityTestAction> tx;
                    for (int j = 0; j < 50; j++)
                    {
                        Fx.Store.PutTransaction(commonTx);
                    }

                    for (int j = 0; j < txCount; j++)
                    {
                        tx = MakeTx(random, md5, key, j + 1);
                        Fx.Store.PutTransaction(tx);
                    }
                });
                task.Start();
                tasks[i] = task;
            }

            Task.WaitAll(tasks);

            Assert.Equal(1 + (taskCount * txCount), Fx.Store.CountTransactions());
            foreach (TxId txid in Fx.Store.IterateTransactionIds())
            {
                var tx = Fx.Store.GetTransaction<AtomicityTestAction>(txid);
                tx.Validate();
                Assert.Single(tx.Actions);
                AtomicityTestAction action = tx.Actions[0];
                Assert.Equal(
                    md5Hasher.ComputeHash(action.ArbitraryBytes.ToBuilder().ToArray()),
                    action.Md5Digest.ToBuilder().ToArray()
                );
            }
        }

        private class AtomicityTestAction : IAction
        {
            public ImmutableArray<byte> ArbitraryBytes { get; set; }

            public ImmutableArray<byte> Md5Digest { get; set; }

            public IImmutableDictionary<string, object> PlainValue =>
                new Dictionary<string, object>
                {
                    { "bytes", ArbitraryBytes.ToBuilder().ToArray() },
                    { "md5", Md5Digest.ToBuilder().ToArray() },
                }.ToImmutableDictionary();

            public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
            {
                ArbitraryBytes = (plainValue["bytes"] as byte[]).ToImmutableArray();
                Md5Digest = (plainValue["md5"] as byte[]).ToImmutableArray();
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates;
            }

            public void Render(IActionContext context, IAccountStateDelta nextStates)
            {
            }

            public void Unrender(IActionContext context, IAccountStateDelta nextStates)
            {
            }
        }
    }
}
