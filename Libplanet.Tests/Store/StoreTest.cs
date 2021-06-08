using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Blockchain;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using FAV = Libplanet.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Store
{
    public abstract class StoreTest
    {
        private ILogger _logger = null;

        protected abstract ITestOutputHelper TestOutputHelper { get; }

        protected abstract StoreFixture Fx { get; }

        protected abstract Func<StoreFixture> FxConstructor { get; }

        protected ILogger Logger => _logger ?? (
            _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .WriteTo.TestOutput(TestOutputHelper)
                .CreateLogger()
                .ForContext(this.GetType()));

        [SkippableFact]
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

        [SkippableFact]
        public void ListChainIdAfterForkAndDelete()
        {
            var chainA = Guid.NewGuid();
            var chainB = Guid.NewGuid();

            Fx.Store.PutBlock(Fx.GenesisBlock);
            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.PutBlock(Fx.Block2);

            Fx.Store.AppendIndex(chainA, Fx.GenesisBlock.Hash);
            Fx.Store.AppendIndex(chainA, Fx.Block1.Hash);
            Fx.Store.ForkBlockIndexes(chainA, chainB, Fx.Block1.Hash);
            Fx.Store.AppendIndex(chainB, Fx.Block2.Hash);

            Fx.Store.DeleteChainId(chainA);

            Assert.Equal(
                new[] { chainB }.ToImmutableHashSet(),
                Fx.Store.ListChainIds().ToImmutableHashSet()
            );
        }

        [SkippableFact]
        public void DeleteChainId()
        {
            Block<DumbAction> block1 = TestUtils.MineNext(
                TestUtils.MineGenesis<DumbAction>(),
                new[] { Fx.Transaction1 });
            Fx.Store.AppendIndex(Fx.StoreChainId, block1.Hash);
            Guid arbitraryChainId = Guid.NewGuid();
            Fx.Store.AppendIndex(arbitraryChainId, block1.Hash);
            Fx.Store.IncreaseTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer);

            Fx.Store.DeleteChainId(Fx.StoreChainId);

            Assert.Equal(
                new[] { arbitraryChainId }.ToImmutableHashSet(),
                Fx.Store.ListChainIds().ToImmutableHashSet()
            );
            Assert.Equal(0, Fx.Store.GetTxNonce(Fx.StoreChainId, Fx.Transaction1.Signer));
        }

        [SkippableFact]
        public void DeleteChainIdIsIdempotent()
        {
            Assert.Empty(Fx.Store.ListChainIds());
            Fx.Store.DeleteChainId(Guid.NewGuid());
            Assert.Empty(Fx.Store.ListChainIds());
        }

        [SkippableFact]
        public void DeleteChainIdWithForks()
        {
            IStore store = Fx.Store;
            Guid chainA = Guid.NewGuid();
            Guid chainB = Guid.NewGuid();
            Guid chainC = Guid.NewGuid();

            // We need `Block<T>`s because `IStore` can't retrive index(long) by block hash without
            // actual block...
            store.PutBlock(Fx.GenesisBlock);
            store.PutBlock(Fx.Block1);
            store.PutBlock(Fx.Block2);
            store.PutBlock(Fx.Block3);

            store.AppendIndex(chainA, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainB, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainC, Fx.GenesisBlock.Hash);

            store.AppendIndex(chainA, Fx.Block1.Hash);
            store.ForkBlockIndexes(chainA, chainB, Fx.Block1.Hash);
            store.AppendIndex(chainB, Fx.Block2.Hash);
            store.ForkBlockIndexes(chainB, chainC, Fx.Block2.Hash);
            store.AppendIndex(chainC, Fx.Block3.Hash);

            // Deleting chainA doesn't effect chainB, chainC
            store.DeleteChainId(chainA);

            Assert.Empty(store.IterateIndexes(chainA));
            Assert.Null(store.IndexBlockHash(chainA, 0));
            Assert.Null(store.IndexBlockHash(chainA, 1));

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                },
                store.IterateIndexes(chainB)
            );
            Assert.Equal(Fx.GenesisBlock.Hash, store.IndexBlockHash(chainB, 0));
            Assert.Equal(Fx.Block1.Hash, store.IndexBlockHash(chainB, 1));
            Assert.Equal(Fx.Block2.Hash, store.IndexBlockHash(chainB, 2));

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                    Fx.Block3.Hash,
                },
                store.IterateIndexes(chainC)
            );
            Assert.Equal(Fx.GenesisBlock.Hash, store.IndexBlockHash(chainC, 0));
            Assert.Equal(Fx.Block1.Hash, store.IndexBlockHash(chainC, 1));
            Assert.Equal(Fx.Block2.Hash, store.IndexBlockHash(chainC, 2));
            Assert.Equal(Fx.Block3.Hash, store.IndexBlockHash(chainC, 3));

            // Deleting chainB doesn't effect chainC
            store.DeleteChainId(chainB);

            Assert.Empty(store.IterateIndexes(chainA));
            Assert.Null(store.IndexBlockHash(chainA, 0));
            Assert.Null(store.IndexBlockHash(chainA, 1));

            Assert.Empty(store.IterateIndexes(chainB));
            Assert.Null(store.IndexBlockHash(chainB, 0));
            Assert.Null(store.IndexBlockHash(chainB, 1));
            Assert.Null(store.IndexBlockHash(chainB, 2));

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                    Fx.Block3.Hash,
                },
                store.IterateIndexes(chainC)
            );
            Assert.Equal(Fx.GenesisBlock.Hash, store.IndexBlockHash(chainC, 0));
            Assert.Equal(Fx.Block1.Hash, store.IndexBlockHash(chainC, 1));
            Assert.Equal(Fx.Block2.Hash, store.IndexBlockHash(chainC, 2));
            Assert.Equal(Fx.Block3.Hash, store.IndexBlockHash(chainC, 3));

            store.DeleteChainId(chainC);

            Assert.Empty(store.IterateIndexes(chainA));
            Assert.Empty(store.IterateIndexes(chainB));
            Assert.Empty(store.IterateIndexes(chainC));
            Assert.Null(store.IndexBlockHash(chainC, 0));
            Assert.Null(store.IndexBlockHash(chainC, 1));
            Assert.Null(store.IndexBlockHash(chainC, 2));
            Assert.Null(store.IndexBlockHash(chainC, 3));
        }

        [SkippableFact]
        public void DeleteChainIdWithForksReverse()
        {
            IStore store = Fx.Store;
            Guid chainA = Guid.NewGuid();
            Guid chainB = Guid.NewGuid();
            Guid chainC = Guid.NewGuid();

            // We need `Block<T>`s because `IStore` can't retrive index(long) by block hash without
            // actual block...
            store.PutBlock(Fx.GenesisBlock);
            store.PutBlock(Fx.Block1);
            store.PutBlock(Fx.Block2);
            store.PutBlock(Fx.Block3);

            store.AppendIndex(chainA, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainB, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainC, Fx.GenesisBlock.Hash);

            store.AppendIndex(chainA, Fx.Block1.Hash);
            store.ForkBlockIndexes(chainA, chainB, Fx.Block1.Hash);
            store.AppendIndex(chainB, Fx.Block2.Hash);
            store.ForkBlockIndexes(chainB, chainC, Fx.Block2.Hash);
            store.AppendIndex(chainC, Fx.Block3.Hash);

            store.DeleteChainId(chainC);

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                },
                store.IterateIndexes(chainA)
            );
            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                },
                store.IterateIndexes(chainB)
            );
            Assert.Empty(store.IterateIndexes(chainC));

            store.DeleteChainId(chainB);

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                },
                store.IterateIndexes(chainA)
            );
            Assert.Empty(store.IterateIndexes(chainB));
            Assert.Empty(store.IterateIndexes(chainC));

            store.DeleteChainId(chainA);
            Assert.Empty(store.IterateIndexes(chainA));
            Assert.Empty(store.IterateIndexes(chainB));
            Assert.Empty(store.IterateIndexes(chainC));
        }

        [SkippableFact]
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

        [SkippableFact]
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
            Assert.False(Fx.Store.ContainsBlock(Fx.Block1.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block2.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block3.Hash));

            Fx.Store.PutBlock(Fx.Block1);
            Assert.Equal(1, Fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<BlockHash> { Fx.Block1.Hash },
                Fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Equal(
                Fx.Block1,
                Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));
            Assert.Equal(Fx.Block1.Index, Fx.Store.GetBlockIndex(Fx.Block1.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block3.Hash));
            Assert.True(Fx.Store.ContainsBlock(Fx.Block1.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block2.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block3.Hash));

            Fx.Store.PutBlock(Fx.Block2);
            Assert.Equal(2, Fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<BlockHash> { Fx.Block1.Hash, Fx.Block2.Hash },
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
            Assert.True(Fx.Store.ContainsBlock(Fx.Block1.Hash));
            Assert.True(Fx.Store.ContainsBlock(Fx.Block2.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block3.Hash));

            Assert.True(Fx.Store.DeleteBlock(Fx.Block1.Hash));
            Assert.Equal(1, Fx.Store.CountBlocks());
            Assert.Equal(
                new HashSet<BlockHash> { Fx.Block2.Hash },
                Fx.Store.IterateBlockHashes().ToHashSet());
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block1.Hash));
            Assert.Equal(
                Fx.Block2,
                Fx.Store.GetBlock<DumbAction>(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlock<DumbAction>(Fx.Block3.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block1.Hash));
            Assert.Equal(Fx.Block2.Index, Fx.Store.GetBlockIndex(Fx.Block2.Hash));
            Assert.Null(Fx.Store.GetBlockIndex(Fx.Block3.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block1.Hash));
            Assert.True(Fx.Store.ContainsBlock(Fx.Block2.Hash));
            Assert.False(Fx.Store.ContainsBlock(Fx.Block3.Hash));
        }

        [SkippableFact]
        public void TxExecution()
        {
            void AssertTxSuccessesEqual(TxSuccess expected, TxExecution actual)
            {
                Assert.IsType<TxSuccess>(actual);
                var success = (TxSuccess)actual;
                Assert.Equal(expected.TxId, success.TxId);
                Assert.Equal(expected.BlockHash, success.BlockHash);
                Assert.Equal(expected.UpdatedStates, success.UpdatedStates);
                Assert.Equal(expected.FungibleAssetsDelta, success.FungibleAssetsDelta);
                Assert.Equal(expected.UpdatedFungibleAssets, success.UpdatedFungibleAssets);
            }

            void AssertTxFailuresEqual(TxFailure expected, TxExecution actual)
            {
                Assert.IsType<TxFailure>(actual);
                var failure = (TxFailure)actual;
                Assert.Equal(expected.TxId, failure.TxId);
                Assert.Equal(expected.BlockHash, failure.BlockHash);
                Assert.Equal(expected.ExceptionName, failure.ExceptionName);
                Assert.Equal(expected.ExceptionMetadata, failure.ExceptionMetadata);
            }

            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId1));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId2));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId1));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId2));

            var random = new System.Random();
            var inputA = new TxSuccess(
                Fx.Hash1,
                Fx.TxId1,
                ImmutableDictionary<Address, IValue>.Empty.Add(
                    random.NextAddress(),
                    (Text)"state value"
                ),
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        random.NextAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty.Add(
                            DumbAction.DumbCurrency,
                            DumbAction.DumbCurrency * 5
                        )
                    ),
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        random.NextAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty.Add(
                            DumbAction.DumbCurrency,
                            DumbAction.DumbCurrency * 10
                        )
                    )
            );
            Fx.Store.PutTxExecution(inputA);

            AssertTxSuccessesEqual(inputA, Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId1));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId2));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId1));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId2));

            var inputB = new TxFailure(
                Fx.Hash1,
                Fx.TxId2,
                "AnExceptionName",
                Dictionary.Empty.Add("foo", 1).Add("bar", "baz")
            );
            Fx.Store.PutTxExecution(inputB);

            AssertTxSuccessesEqual(inputA, Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId1));
            AssertTxFailuresEqual(inputB, Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId2));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId1));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId2));

            var inputC = new TxFailure(
                Fx.Hash2,
                Fx.TxId1,
                "AnotherExceptionName",
                null
            );
            Fx.Store.PutTxExecution(inputC);

            AssertTxSuccessesEqual(inputA, Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId1));
            AssertTxFailuresEqual(inputB, Fx.Store.GetTxExecution(Fx.Hash1, Fx.TxId2));
            AssertTxFailuresEqual(inputC, Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId1));
            Assert.Null(Fx.Store.GetTxExecution(Fx.Hash2, Fx.TxId2));
        }

        [SkippableFact]
        public void TxIdBlockHashIndex()
        {
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId1));
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId2));
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId3));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId1));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId2));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId3));

            Fx.Store.PutTxIdBlockHashIndex(Fx.TxId1, Fx.Hash1);
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId2));
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId3));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId2));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId3));

            Fx.Store.PutTxIdBlockHashIndex(Fx.TxId2, Fx.Hash2);
            Fx.Store.PutTxIdBlockHashIndex(Fx.TxId3, Fx.Hash3);

            Assert.True(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId1)?.Equals(Fx.Hash1));
            Assert.True(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId2)?.Equals(Fx.Hash2));
            Assert.True(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId3)?.Equals(Fx.Hash3));
            Assert.True(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId1));
            Assert.True(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId2));
            Assert.True(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId3));

            Fx.Store.PutTxIdBlockHashIndex(Fx.TxId1, Fx.Hash3);
            Fx.Store.PutTxIdBlockHashIndex(Fx.TxId2, Fx.Hash3);
            Fx.Store.PutTxIdBlockHashIndex(Fx.TxId3, Fx.Hash1);
            Assert.True(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId1)?.Equals(Fx.Hash3));
            Assert.True(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId2)?.Equals(Fx.Hash3));
            Assert.True(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId3)?.Equals(Fx.Hash1));

            Fx.Store.DeleteTxIdBlockHashIndex(Fx.TxId1);
            Fx.Store.DeleteTxIdBlockHashIndex(Fx.TxId2);
            Fx.Store.DeleteTxIdBlockHashIndex(Fx.TxId3);

            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId1));
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId2));
            Assert.Null(Fx.Store.GetTxIdBlockHashIndex(Fx.TxId3));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId1));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId2));
            Assert.False(Fx.Store.HasTxIdBlockHashIndex(Fx.TxId3));
        }

        [SkippableFact]
        public void BlockPerceivedTime()
        {
            Assert.Null(Fx.Store.GetBlockPerceivedTime(Fx.Hash1));
            Assert.Null(Fx.Store.GetBlockPerceivedTime(Fx.Hash2));

            DateTimeOffset time1 = DateTimeOffset.FromUnixTimeSeconds(1609426800);
            DateTimeOffset time2 = DateTimeOffset.FromUnixTimeSeconds(1612254976);
            DateTimeOffset time3 = DateTimeOffset.FromUnixTimeSeconds(1612432420);

            Fx.Store.SetBlockPerceivedTime(Fx.Hash1, time1);
            Assert.Equal(time1, Fx.Store.GetBlockPerceivedTime(Fx.Hash1));
            Assert.Null(Fx.Store.GetBlockPerceivedTime(Fx.Hash2));

            Fx.Store.SetBlockPerceivedTime(Fx.Hash1, time2);
            Assert.Equal(time2, Fx.Store.GetBlockPerceivedTime(Fx.Hash1));
            Assert.Null(Fx.Store.GetBlockPerceivedTime(Fx.Hash2));

            Fx.Store.SetBlockPerceivedTime(Fx.Hash2, time3);
            Assert.Equal(time2, Fx.Store.GetBlockPerceivedTime(Fx.Hash1));
            Assert.Equal(time3, Fx.Store.GetBlockPerceivedTime(Fx.Hash2));
        }

        [SkippableFact]
        public void StoreTx()
        {
            Assert.Equal(0, Fx.Store.CountTransactions());
            Assert.Empty(Fx.Store.IterateTransactionIds());
            Assert.Null(Fx.Store.GetTransaction<DumbAction>(Fx.Transaction1.Id));
            Assert.Null(Fx.Store.GetTransaction<DumbAction>(Fx.Transaction2.Id));
            Assert.False(Fx.Store.DeleteTransaction(Fx.Transaction1.Id));
            Assert.False(Fx.Store.ContainsTransaction(Fx.Transaction1.Id));
            Assert.False(Fx.Store.ContainsTransaction(Fx.Transaction2.Id));

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
            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction1.Id));
            Assert.False(Fx.Store.ContainsTransaction(Fx.Transaction2.Id));

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
            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction1.Id));
            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction2.Id));

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
            Assert.False(Fx.Store.ContainsTransaction(Fx.Transaction1.Id));
            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction2.Id));
        }

        [SkippableFact]
        public void StoreIndex()
        {
            Assert.Equal(0, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Empty(Fx.Store.IterateIndexes(Fx.StoreChainId));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreChainId, 0));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreChainId, -1));

            Assert.Equal(0, Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Hash1));
            Assert.Equal(1, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Equal(
                new List<BlockHash> { Fx.Hash1 },
                Fx.Store.IterateIndexes(Fx.StoreChainId));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, 0));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, -1));

            Assert.Equal(1, Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Hash2));
            Assert.Equal(2, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Equal(
                new List<BlockHash> { Fx.Hash1, Fx.Hash2 },
                Fx.Store.IterateIndexes(Fx.StoreChainId));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, 0));
            Assert.Equal(Fx.Hash2, Fx.Store.IndexBlockHash(Fx.StoreChainId, 1));
            Assert.Equal(Fx.Hash2, Fx.Store.IndexBlockHash(Fx.StoreChainId, -1));
            Assert.Equal(Fx.Hash1, Fx.Store.IndexBlockHash(Fx.StoreChainId, -2));
        }

        [SkippableFact]
        public void IterateIndexes()
        {
            var ns = Fx.StoreChainId;
            var store = Fx.Store;

            store.AppendIndex(ns, Fx.Hash1);
            store.AppendIndex(ns, Fx.Hash2);
            store.AppendIndex(ns, Fx.Hash3);

            var indexes = store.IterateIndexes(ns).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndexes(ns, 1).ToArray();
            Assert.Equal(new[] { Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndexes(ns, 2).ToArray();
            Assert.Equal(new[] { Fx.Hash3 }, indexes);

            indexes = store.IterateIndexes(ns, 3).ToArray();
            Assert.Equal(new BlockHash[0], indexes);

            indexes = store.IterateIndexes(ns, 4).ToArray();
            Assert.Equal(new BlockHash[0], indexes);

            indexes = store.IterateIndexes(ns, limit: 0).ToArray();
            Assert.Equal(new BlockHash[0], indexes);

            indexes = store.IterateIndexes(ns, limit: 1).ToArray();
            Assert.Equal(new[] { Fx.Hash1 }, indexes);

            indexes = store.IterateIndexes(ns, limit: 2).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2 }, indexes);

            indexes = store.IterateIndexes(ns, limit: 3).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndexes(ns, limit: 4).ToArray();
            Assert.Equal(new[] { Fx.Hash1, Fx.Hash2, Fx.Hash3 }, indexes);

            indexes = store.IterateIndexes(ns, 1, 1).ToArray();
            Assert.Equal(new[] { Fx.Hash2 }, indexes);
        }

        [SkippableFact]
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

        [SkippableFact]
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

        [SkippableFact]
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

        [SkippableFact]
        public void ListTxNonces()
        {
            var chainId1 = Guid.NewGuid();
            var chainId2 = Guid.NewGuid();

            Address address1 = Fx.Address1;
            Address address2 = Fx.Address2;

            Assert.Empty(Fx.Store.ListTxNonces(chainId1));
            Assert.Empty(Fx.Store.ListTxNonces(chainId2));

            Fx.Store.IncreaseTxNonce(chainId1, address1);
            Assert.Equal(
                new Dictionary<Address, long> { [address1] = 1, },
                Fx.Store.ListTxNonces(chainId1));

            Fx.Store.IncreaseTxNonce(chainId2, address2);
            Assert.Equal(
                new Dictionary<Address, long> { [address2] = 1, },
                Fx.Store.ListTxNonces(chainId2));

            Fx.Store.IncreaseTxNonce(chainId1, address1);
            Fx.Store.IncreaseTxNonce(chainId1, address2);
            Assert.Equal(
                new Dictionary<Address, long> { [address1] = 2, [address2] = 1, },
                Fx.Store.ListTxNonces(chainId1));

            Fx.Store.IncreaseTxNonce(chainId2, address1);
            Fx.Store.IncreaseTxNonce(chainId2, address2);
            Assert.Equal(
                new Dictionary<Address, long> { [address1] = 1, [address2] = 2, },
                Fx.Store.ListTxNonces(chainId2));
        }

        [SkippableFact]
        public void IndexBlockHashReturnNull()
        {
            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.AppendIndex(Fx.StoreChainId, Fx.Block1.Hash);
            Assert.Equal(1, Fx.Store.CountIndex(Fx.StoreChainId));
            Assert.Null(Fx.Store.IndexBlockHash(Fx.StoreChainId, 2));
        }

        [SkippableFact]
        public void ContainsBlockWithoutCache()
        {
            Fx.Store.PutBlock(Fx.Block1);
            Fx.Store.PutBlock(Fx.Block2);
            Fx.Store.PutBlock(Fx.Block3);

            Assert.True(Fx.Store.ContainsBlock(Fx.Block1.Hash));
            Assert.True(Fx.Store.ContainsBlock(Fx.Block2.Hash));
            Assert.True(Fx.Store.ContainsBlock(Fx.Block3.Hash));
        }

        [SkippableFact]
        public void ContainsTransactionWithoutCache()
        {
            Fx.Store.PutTransaction(Fx.Transaction1);
            Fx.Store.PutTransaction(Fx.Transaction2);
            Fx.Store.PutTransaction(Fx.Transaction3);

            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction1.Id));
            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction2.Id));
            Assert.True(Fx.Store.ContainsTransaction(Fx.Transaction3.Id));
        }

        [SkippableFact]
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
                    null,
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

            try
            {
                Task.WaitAll(tasks);
            }
            catch (AggregateException e)
            {
                foreach (Exception innerException in e.InnerExceptions)
                {
                    TestOutputHelper.WriteLine(innerException.ToString());
                }

                throw;
            }

            Assert.Equal(1 + (taskCount * txCount), Fx.Store.CountTransactions());
            foreach (TxId txid in Fx.Store.IterateTransactionIds())
            {
                var tx = Fx.Store.GetTransaction<AtomicityTestAction>(txid);
                tx.Validate();
                Assert.Single(tx.Actions);
                AtomicityTestAction action = tx.Actions[0];
                Assert.Equal(
                    md5Hasher.ComputeHash(action.ArbitraryBytes.ToArray()),
                    action.Md5Digest.ToArray()
                );
            }
        }

        [SkippableFact]
        public void ForkBlockIndex()
        {
            IStore store = Fx.Store;
            Guid chainA = Guid.NewGuid();
            Guid chainB = Guid.NewGuid();
            Guid chainC = Guid.NewGuid();

            // We need `Block<T>`s because `IStore` can't retrive index(long) by block hash without
            // actual block...
            store.PutBlock(Fx.GenesisBlock);
            store.PutBlock(Fx.Block1);
            store.PutBlock(Fx.Block2);
            store.PutBlock(Fx.Block3);

            store.AppendIndex(chainA, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainB, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainC, Fx.GenesisBlock.Hash);

            store.AppendIndex(chainA, Fx.Block1.Hash);
            store.ForkBlockIndexes(chainA, chainB, Fx.Block1.Hash);
            store.AppendIndex(chainB, Fx.Block2.Hash);

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                },
                store.IterateIndexes(chainA)
            );
            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                },
                store.IterateIndexes(chainB)
            );

            store.ForkBlockIndexes(chainB, chainC, Fx.Block2.Hash);
            store.AppendIndex(chainC, Fx.Block3.Hash);

            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                },
                store.IterateIndexes(chainA)
            );
            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                },
                store.IterateIndexes(chainB)
            );
            Assert.Equal(
                new[]
                {
                    Fx.GenesisBlock.Hash,
                    Fx.Block1.Hash,
                    Fx.Block2.Hash,
                    Fx.Block3.Hash,
                },
                store.IterateIndexes(chainC)
            );

            Assert.Equal(Fx.Block1.Hash, store.IndexBlockHash(chainA, 1));
            Assert.Equal(Fx.Block1.Hash, store.IndexBlockHash(chainB, 1));
            Assert.Equal(Fx.Block1.Hash, store.IndexBlockHash(chainC, 1));
            Assert.Equal(Fx.Block2.Hash, store.IndexBlockHash(chainB, 2));
            Assert.Equal(Fx.Block2.Hash, store.IndexBlockHash(chainC, 2));
            Assert.Equal(Fx.Block3.Hash, store.IndexBlockHash(chainC, 3));
        }

        [SkippableFact]
        public void ForkWithBranch()
        {
            IStore store = Fx.Store;
            Guid chainA = Guid.NewGuid();
            Guid chainB = Guid.NewGuid();

            // We need `Block<T>`s because `IStore` can't retrive index(long) by block hash without
            // actual block...
            Block<DumbAction> anotherBlock3 = TestUtils.MineNext(Fx.Block2);
            store.PutBlock(Fx.GenesisBlock);
            store.PutBlock(Fx.Block1);
            store.PutBlock(Fx.Block2);
            store.PutBlock(Fx.Block3);
            store.PutBlock(anotherBlock3);

            store.AppendIndex(chainA, Fx.GenesisBlock.Hash);
            store.AppendIndex(chainA, Fx.Block1.Hash);
            store.AppendIndex(chainA, Fx.Block2.Hash);
            store.AppendIndex(chainA, Fx.Block3.Hash);

            store.ForkBlockIndexes(chainA, chainB, Fx.Block2.Hash);
            store.AppendIndex(chainB, anotherBlock3.Hash);

            Assert.Equal(
                new[]
                {
                    Fx.Block2.Hash,
                    anotherBlock3.Hash,
                },
                store.IterateIndexes(chainB, 2, 2)
            );
            Assert.Equal(
                new[]
                {
                    Fx.Block2.Hash,
                    anotherBlock3.Hash,
                },
                store.IterateIndexes(chainB, 2)
            );

            Assert.Equal(
                new[]
                {
                    anotherBlock3.Hash,
                },
                store.IterateIndexes(chainB, 3, 1)
            );

            Assert.Equal(
                new[]
                {
                    anotherBlock3.Hash,
                },
                store.IterateIndexes(chainB, 3)
            );
        }

        [SkippableFact]
        public void Copy()
        {
            using (StoreFixture fx = FxConstructor())
            using (StoreFixture fx2 = FxConstructor())
            {
                IStore s1 = fx.Store, s2 = fx2.Store;
                var blocks = new BlockChain<DumbAction>(
                    new NullPolicy<DumbAction>(),
                    new VolatileStagePolicy<DumbAction>(),
                    s1,
                    fx.StateStore,
                    Fx.GenesisBlock
                );

                // FIXME: Need to add more complex blocks/transactions.
                blocks.Append(Fx.Block1);
                blocks.Append(Fx.Block2);
                blocks.Append(Fx.Block3);

                s1.Copy(to: Fx.Store);
                Fx.Store.Copy(to: s2);

                Assert.Equal(s1.ListChainIds().ToHashSet(), s2.ListChainIds().ToHashSet());
                Assert.Equal(s1.GetCanonicalChainId(), s2.GetCanonicalChainId());
                foreach (Guid chainId in s1.ListChainIds())
                {
                    Assert.Equal(s1.IterateIndexes(chainId), s2.IterateIndexes(chainId));
                    foreach (BlockHash blockHash in s1.IterateIndexes(chainId))
                    {
                        Assert.Equal(
                            s1.GetBlock<DumbAction>(blockHash),
                            s2.GetBlock<DumbAction>(blockHash)
                        );
                    }
                }

                // ArgumentException is thrown if the destination store is not empty.
                Assert.Throws<ArgumentException>(() => Fx.Store.Copy(fx2.Store));
            }
        }

        [SkippableFact]
        public void GetBlock()
        {
            using (StoreFixture fx = FxConstructor())
            {
                Block<DumbAction> genesisBlock = fx.GenesisBlock;
                // NOTE: it depends on that Block<T>.CurrentProtocolVersion is not 0.
                Block<DumbAction> block = TestUtils.MineNext(
                    genesisBlock,
                    protocolVersion: 0);

                fx.Store.PutBlock(block);
                Block<DumbAction> storedBlock = fx.Store.GetBlock<DumbAction>(block.Hash);

                Assert.Equal(block, storedBlock);
            }
        }

        [SkippableFact]
        public void ForkTxNonces()
        {
            IStore store = Fx.Store;
            Guid sourceChainId = Guid.NewGuid();
            Guid destinationChainId = Guid.NewGuid();
            store.IncreaseTxNonce(sourceChainId, Fx.Address1, 1);
            store.IncreaseTxNonce(sourceChainId, Fx.Address2, 2);
            store.IncreaseTxNonce(sourceChainId, Fx.Address3, 3);

            store.ForkTxNonces(sourceChainId, destinationChainId);

            Assert.Equal(1, store.GetTxNonce(destinationChainId, Fx.Address1));
            Assert.Equal(2, store.GetTxNonce(destinationChainId, Fx.Address2));
            Assert.Equal(3, store.GetTxNonce(destinationChainId, Fx.Address3));
        }

        [SkippableFact]
        public void IdempotentDispose()
        {
            if (Fx.Store is IDisposable disposableStore)
            {
#pragma warning disable S3966 // Objects should not be disposed more than once
                disposableStore.Dispose();
                disposableStore.Dispose();
#pragma warning restore S3966 // Objects should not be disposed more than once
            }
        }

        private class AtomicityTestAction : IAction
        {
            public ImmutableArray<byte> ArbitraryBytes { get; set; }

            public ImmutableArray<byte> Md5Digest { get; set; }

            public IValue PlainValue =>
                new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
                {
                    { (Text)"bytes", new Binary(ArbitraryBytes) },
                    { (Text)"md5", new Binary(Md5Digest) },
                });

            public void LoadPlainValue(IValue plainValue)
            {
                LoadPlainValue((Dictionary)plainValue);
            }

            public void LoadPlainValue(Dictionary plainValue)
            {
                ArbitraryBytes = plainValue.GetValue<Binary>("bytes").ByteArray;
                Md5Digest = plainValue.GetValue<Binary>("md5").ByteArray;
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates;
            }
        }
    }
}
