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
        public void ListChainId()
        {
            Assert.Empty(Fx.Store.ListChainIds());

            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Block1.Hash);
            Assert.Equal(
                new[] { Fx.StoreChainId }.ToImmutableHashSet(),
                Fx.Store.ListChainIds().ToImmutableHashSet()
            );

            Guid arbitraryGuid = Guid.NewGuid();
            Fx.Store.AppendIndex(arbitraryGuid, Fx.Block1.Hash);
            Assert.Equal(
                new[] { Fx.StoreChainId, arbitraryGuid }.ToImmutableHashSet(),
                Fx.Store.ListChainIds().ToImmutableHashSet()
            );
        }

        [Fact]
        public void DeleteChainId()
        {
            Block<DumbAction> block1 = TestUtils.MineNext(
                TestUtils.MineGenesis<DumbAction>(),
                new[] { Fx.Transaction1 });
            Fx.Store.AppendIndex(Fx.StoreChainId, block1.Hash);
            Guid arbitraryChainId = Guid.NewGuid();
            Fx.Store.AppendIndex(arbitraryChainId, block1.Hash);
            Address[] addresses = Enumerable.Repeat<object>(null, 8)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                addresses.Take(3).ToImmutableHashSet(),
                block1.Hash,
                block1.Index
            );
            Fx.Store.IncreaseTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer);

            Fx.Store.DeleteChainId(Fx.StoreChainId);

            Assert.Equal(
                new[] { arbitraryChainId }.ToImmutableHashSet(),
                Fx.Store.ListChainIds().ToImmutableHashSet()
            );
            Assert.Empty(Fx.Store.ListAddresses(Fx.StoreChainId).ToArray());
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer));
        }

        [Fact]
        public void CanonicalChainId()
        {
            Assert.Null(Fx.Store.GetCanonicalChainId());
            Guid a = Guid.NewGuid();
            Fx.Store.SetCanonicalChainId(a);
            Assert.Equal(a, Fx.Store.GetCanonicalChainId());
            Guid b = Guid.NewGuid();
            Fx.Store.SetCanonicalChainId(b);
            Assert.Equal(b, Fx.Store.GetCanonicalChainId());
        }

        [Fact]
        public void ListAddresses()
        {
            Assert.Empty(Fx.Store.ListAddresses(Fx.StoreChainId).ToArray());

            Address[] addresses = Enumerable.Repeat<object>(null, 8)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                addresses.Take(3).ToImmutableHashSet(),
                Fx.Block1.Hash,
                Fx.Block1.Index
            );
            Assert.Equal(
                addresses.Take(3).ToImmutableHashSet(),
                Fx.Store.ListAddresses(Fx.StoreChainId).ToImmutableHashSet()
            );
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                addresses.Skip(2).Take(3).ToImmutableHashSet(),
                Fx.Block2.Hash,
                Fx.Block2.Index
            );
            Assert.Equal(
                addresses.Take(5).ToImmutableHashSet(),
                Fx.Store.ListAddresses(Fx.StoreChainId).ToImmutableHashSet()
            );
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                addresses.Skip(5).Take(3).ToImmutableHashSet(),
                Fx.Block3.Hash,
                Fx.Block3.Index
            );
            Assert.Equal(
                addresses.ToImmutableHashSet(),
                Fx.Store.ListAddresses(Fx.StoreChainId).ToImmutableHashSet()
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
            Assert.Equal(0, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Empty(Fx.Store.IterateIndex(Fx.StoreChainId));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreChainId, 0));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreChainId, -1));

            Assert.Equal(0, Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Hash1));
            Assert.Equal(1, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    Fx.Hash1,
                },
                Fx.Store.IterateIndex(Fx.StoreChainId));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, 0));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, -1));

            Assert.Equal(1, Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Hash2));
            Assert.Equal(2, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Equal(
                new List<HashDigest<SHA256>>()
                {
                    Fx.Hash1,
                    Fx.Hash2,
                },
                Fx.Store.IterateIndex(Fx.StoreChainId));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, 0));
            Assert.Equal(Fx.Hash2, Fx.Store.IndexBlockHash(Fx.StoreChainId, 1));
            Assert.Equal(Fx.Hash2, Fx.Store.IndexBlockHash(Fx.StoreChainId, -1));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, -2));
        }

        [Fact]
        public void DeleteIndex()
        {
            Assert.False(Fx.Store.DeleteIndex(Fx.StoreChainId, Fx.Hash1));
            Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Hash1);
            Assert.NotEmpty(Fx.Store.IterateIndex(Fx.StoreChainId));
            Assert.True(Fx.Store.DeleteIndex(Fx.StoreChainId, Fx.Hash1));
            Assert.Empty(Fx.Store.IterateIndex(Fx.StoreChainId));
        }

        [Fact]
        public void IterateIndex()
        {
            var ns = Fx.StoreChainId;
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

            Assert.Empty(this.Fx.Store.IterateStateReferences(this.Fx.StoreChainId, address));

            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                tx4.UpdatedAddresses,
                block4.Hash,
                block4.Index
            );
            Assert.Equal(
                new[] { Tuple.Create(block4.Hash, block4.Index) },
                this.Fx.Store.IterateStateReferences(this.Fx.StoreChainId, address)
            );

            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
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
                this.Fx.Store.IterateStateReferences(this.Fx.StoreChainId, address)
            );
        }

        [Fact]
        public void StoreStateReferenceAllowsDuplication()
        {
            Address address3 = new PrivateKey().PublicKey.ToAddress();
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                new[] { Fx.Address1, Fx.Address2 }.ToImmutableHashSet(),
                Fx.Block1.Hash,
                Fx.Block1.Index
            );
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                new[] { Fx.Address2, address3 }.ToImmutableHashSet(),
                Fx.Block1.Hash,
                Fx.Block1.Index
            );
            var expectedStateRefs = new[]
            {
                new Tuple<HashDigest<SHA256>, long>(Fx.Block1.Hash, Fx.Block1.Index),
            };
            Assert.Equal(
                expectedStateRefs,
                Fx.Store.IterateStateReferences(Fx.StoreChainId, Fx.Address1)
            );
            Assert.Equal(
                expectedStateRefs,
                Fx.Store.IterateStateReferences(Fx.StoreChainId, Fx.Address2)
            );
            Assert.Equal(
                expectedStateRefs,
                Fx.Store.IterateStateReferences(Fx.StoreChainId, address3)
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
            Guid targetChainId = Guid.NewGuid();

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
                    Fx.StoreChainId,
                    updatedAddresses.ToImmutableHashSet(),
                    block.Hash,
                    block.Index
                );
            }

            var txs2 = new[] { tx2 };
            blocks.Add(TestUtils.MineNext(blocks[2], txs2));

            updatedAddresses = new HashSet<Address> { address2 };
            Fx.Store.StoreStateReference(
                Fx.StoreChainId,
                updatedAddresses.ToImmutableHashSet(),
                blocks[3].Hash,
                blocks[3].Index
            );

            var branchPoint = blocks[branchPointIndex];
            var addressesToStrip = new[] { address1, address2 }.ToImmutableHashSet();

            Fx.Store.ForkStateReferences(
                Fx.StoreChainId,
                targetChainId,
                branchPoint);

            var actual = Fx.Store.LookupStateReference(
                Fx.StoreChainId,
                address1,
                blocks[3]);

            Assert.Equal(
                Tuple.Create(blocks[2].Hash, blocks[2].Index),
                Fx.Store.LookupStateReference(Fx.StoreChainId, address1, blocks[3]));
            Assert.Equal(
                Tuple.Create(blocks[3].Hash, blocks[3].Index),
                Fx.Store.LookupStateReference(Fx.StoreChainId, address2, blocks[3]));
            Assert.Equal(
                    Tuple.Create(blocks[branchPointIndex].Hash, blocks[branchPointIndex].Index),
                    Fx.Store.LookupStateReference(targetChainId, address1, blocks[3]));
            Assert.Null(
                    Fx.Store.LookupStateReference(targetChainId, address2, blocks[3]));
        }

        [Fact]
        public void ForkStateReferencesChainIdNotFound()
        {
            var targetChainId = Guid.NewGuid();
            Address address = Fx.Address1;

            Assert.Throws<ChainIdNotFoundException>(() =>
                Fx.Store.ForkStateReferences(Fx.StoreChainId, targetChainId, Fx.Block1)
            );
        }

        [Fact]
        public void StoreStage()
        {
            Fx.Store.PutTransaction(Fx.Transaction1);
            Fx.Store.PutTransaction(Fx.Transaction2);
            Assert.Empty(Fx.Store.IterateStagedTransactionIds());

            var txIds = new HashSet<TxId>
            {
                Fx.Transaction1.Id,
                Fx.Transaction2.Id,
            }.ToImmutableHashSet();

            Fx.Store.StageTransactionIds(txIds);
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

            var txIds = new HashSet<TxId>
            {
                Fx.Transaction1.Id,
                Fx.Transaction2.Id,
            }.ToImmutableHashSet();

            Fx.Store.StageTransactionIds(txIds);
            Fx.Store.StageTransactionIds(ImmutableHashSet<TxId>.Empty.Add(Fx.Transaction1.Id));

            Assert.Equal(
                new[] { Fx.Transaction1.Id, Fx.Transaction2.Id }.OrderBy(txId => txId.ToHex()),
                Fx.Store.IterateStagedTransactionIds().OrderBy(txId => txId.ToHex()));
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
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer));
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction2.Signer));

            Fx.Store.IncreaseTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer);
            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer));
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction2.Signer));
            Assert.Equal(
                new Dictionary<Address, long>
                {
                    [Fx.Transaction1.Signer] = 1,
                },
                Fx.Store.ListTxNonces(Fx.StoreChainId).ToDictionary(p => p.Key, p => p.Value)
            );

            Fx.Store.IncreaseTxNonce(Fx.StoreChainId, Fx.Transaction2.Signer, 5);
            Assert.Equal(1, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer));
            Assert.Equal(5, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction2.Signer));
            Assert.Equal(
                new Dictionary<Address, long>
                {
                    [Fx.Transaction1.Signer] = 1,
                    [Fx.Transaction2.Signer] = 5,
                },
                Fx.Store.ListTxNonces(Fx.StoreChainId).ToDictionary(p => p.Key, p => p.Value)
            );

            Fx.Store.IncreaseTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer, 2);
            Assert.Equal(3, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer));
            Assert.Equal(5, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction2.Signer));
            Assert.Equal(
                new Dictionary<Address, long>
                {
                    [Fx.Transaction1.Signer] = 3,
                    [Fx.Transaction2.Signer] = 5,
                },
                Fx.Store.ListTxNonces(Fx.StoreChainId).ToDictionary(p => p.Key, p => p.Value)
            );
        }

        [Fact]
        public void IndexBlockHashReturnNull()
        {
            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Block1.Hash);
            Assert.Equal(1, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreChainId, 2));
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
