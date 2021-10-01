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
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tests.Store.Trie;
using Libplanet.Tx;
using Xunit;
using FAV = Libplanet.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void Append(bool getTxExecutionViaStore)
        {
            Func<BlockHash, TxId, TxExecution> getTxExecution
                = getTxExecutionViaStore
                ? (Func<BlockHash, TxId, TxExecution>)_blockChain.Store.GetTxExecution
                : _blockChain.GetTxExecution;

            PrivateKey[] keys = Enumerable.Repeat(0, 5).Select(_ => new PrivateKey()).ToArray();
            (Address[] addresses, Transaction<DumbAction>[] txs) =
                MakeFixturesForAppendTests(keys: keys);
            var genesis = _blockChain.Genesis;

            Assert.Equal(1, _blockChain.Count);
            Assert.Empty(_renderer.ActionRecords);
            Assert.Empty(_renderer.BlockRecords);
            var block1 = TestUtils.MineNext(
                genesis,
                _blockChain.Policy.GetHashAlgorithm,
                miner: keys[4].PublicKey,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            _blockChain.Append(block1);
            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                _blockChain.Policy.GetHashAlgorithm,
                txs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            foreach (Transaction<DumbAction> tx in txs)
            {
                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(block1.Hash, tx.Id));
                Assert.Null(getTxExecution(block2.Hash, tx.Id));
            }

            foreach (var tx in txs)
            {
                Assert.Null(_fx.Store.GetFirstTxIdBlockHashIndex(tx.Id));
            }

            _blockChain.Append(block2);

            foreach (var tx in txs)
            {
                Assert.True(_fx.Store.GetFirstTxIdBlockHashIndex(tx.Id)?.Equals(block2.Hash));
            }

            Assert.True(_blockChain.ContainsBlock(block2.Hash));

            RenderRecord<DumbAction>.ActionSuccess[] renders = _renderer.ActionSuccessRecords
                .Where(r => r.Action is DumbAction)
                .ToArray();
            DumbAction[] actions = renders.Select(r => (DumbAction)r.Action).ToArray();
            Assert.Equal(4, renders.Length);
            Assert.True(renders.All(r => r.Render));
            Assert.Equal("foo", actions[0].Item);
            Assert.Equal(2, renders[0].Context.BlockIndex);
            Assert.Equal(
                new IValue[] { null, null, null, null, (Integer)1 },
                addresses.Select(renders[0].Context.PreviousStates.GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", null, null, null, (Integer)1 },
                addresses.Select(renders[0].NextStates.GetState)
            );
            Assert.Equal("bar", actions[1].Item);
            Assert.Equal(2, renders[1].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(renders[0].NextStates.GetState),
                addresses.Select(renders[1].Context.PreviousStates.GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", (Text)"bar", null, null, (Integer)1 },
                addresses.Select(renders[1].NextStates.GetState)
            );
            Assert.Equal("baz", actions[2].Item);
            Assert.Equal(2, renders[2].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(renders[1].NextStates.GetState),
                addresses.Select(renders[2].Context.PreviousStates.GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", (Text)"bar", (Text)"baz", null, (Integer)1 },
                addresses.Select(renders[2].NextStates.GetState)
            );
            Assert.Equal("qux", actions[3].Item);
            Assert.Equal(2, renders[3].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(renders[2].NextStates.GetState),
                addresses.Select(renders[3].Context.PreviousStates.GetState)
            );
            Assert.Equal(
                new IValue[]
                {
                    (Text)"foo", (Text)"bar", (Text)"baz", (Text)"qux", (Integer)1,
                },
                addresses.Select(renders[3].NextStates.GetState)
            );

            Address minerAddress = addresses[4];
            RenderRecord<DumbAction>.ActionSuccess[] blockRenders = _renderer.ActionSuccessRecords
                .Where(r => r.Action is MinerReward)
                .ToArray();

            Assert.Equal((Integer)2, (Integer)_blockChain.GetState(minerAddress));
            Assert.Equal(2, blockRenders.Length);
            Assert.True(blockRenders.All(r => r.Render));
            Assert.Equal(1, blockRenders[0].Context.BlockIndex);
            Assert.Equal(2, blockRenders[1].Context.BlockIndex);

            Assert.Equal(
                (Integer)1,
                (Integer)blockRenders[0].NextStates.GetState(minerAddress)
            );
            Assert.Equal(
                (Integer)1,
                (Integer)blockRenders[1].Context.PreviousStates.GetState(minerAddress)
            );
            Assert.Equal(
                (Integer)2,
                (Integer)blockRenders[1].NextStates.GetState(minerAddress)
            );

            foreach (Transaction<DumbAction> tx in txs)
            {
                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(block1.Hash, tx.Id));

                TxExecution e = getTxExecution(block2.Hash, tx.Id);
                Assert.IsType<TxSuccess>(e);
                var s = (TxSuccess)e;
                Assert.Equal(block2.Hash, s.BlockHash);
                Assert.Equal(tx.Id, s.TxId);
                Assert.Equal(tx.UpdatedAddresses, s.UpdatedAddresses);
                Assert.Equal(
                    tx.UpdatedAddresses.ToImmutableDictionary(
                        address => address,
                        address => _blockChain.GetState(address)
                    ),
                    s.UpdatedStates
                );
                Assert.Empty(s.FungibleAssetsDelta);
                Assert.Empty(s.UpdatedFungibleAssets);
            }

            var pk = new PrivateKey();
            Transaction<DumbAction> tx1Transfer = _fx.MakeTransaction(
                new[]
                {
                    new DumbAction(pk.ToAddress(), "foo", pk.ToAddress(), addresses[1], 10),
                    new DumbAction(addresses[0], "bar", pk.ToAddress(), addresses[2], 20),
                },
                nonce: 0,
                privateKey: pk
            );
            Transaction<DumbAction> tx2Error = _fx.MakeTransaction(
                new[]
                {
                    // As it tries to transfer a negative value, it throws
                    // ArgumentOutOfRangeException:
                    new DumbAction(pk.ToAddress(), "foo", addresses[0], addresses[1], -5),
                },
                nonce: 1,
                privateKey: pk
            );
            Transaction<DumbAction> tx3Transfer = _fx.MakeTransaction(
                new[]
                {
                    new DumbAction(pk.ToAddress(), "foo", pk.ToAddress(), addresses[1], 5),
                },
                nonce: 2,
                privateKey: pk
            );
            Block<DumbAction> block3 = TestUtils.MineNext(
                block2,
                _blockChain.Policy.GetHashAlgorithm,
                new[] { tx1Transfer, tx2Error, tx3Transfer },
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
            ).Evaluate(_blockChain);
            _blockChain.Append(block3);
            var txExecution1 = getTxExecution(block3.Hash, tx1Transfer.Id);
            _logger.Verbose(nameof(txExecution1) + " = {@TxExecution}", txExecution1);
            Assert.IsType<TxSuccess>(txExecution1);
            var txSuccess1 = (TxSuccess)txExecution1;
            Assert.Equal(
                addresses.Take(3).Append(pk.ToAddress()).ToImmutableHashSet(),
                txSuccess1.UpdatedAddresses
            );
            Assert.Equal(
                ImmutableDictionary<Address, IValue>.Empty
                    .Add(pk.ToAddress(), (Text)"foo")
                    .Add(addresses[0], (Text)"foo,bar"),
                txSuccess1.UpdatedStates
            );
            Assert.Equal(
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        pk.ToAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * -30)
                    )
                    .Add(
                        addresses[1],
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * 10)
                    )
                    .Add(
                        addresses[2],
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * 20)
                    ),
                txSuccess1.UpdatedFungibleAssets
            );
            Assert.Equal(
                txSuccess1.FungibleAssetsDelta,
                txSuccess1.UpdatedFungibleAssets
            );
            var txExecution2 = getTxExecution(block3.Hash, tx2Error.Id);
            _logger.Verbose(nameof(txExecution2) + " = {@TxExecution}", txExecution2);
            Assert.IsType<TxFailure>(txExecution2);
            var txFailure = (TxFailure)txExecution2;
            Assert.Equal(block3.Hash, txFailure.BlockHash);
            Assert.Equal(tx2Error.Id, txFailure.TxId);
            Assert.Equal(
                $"{nameof(System)}.{nameof(ArgumentOutOfRangeException)}",
                txFailure.ExceptionName
            );
            Assert.Equal(
                Dictionary.Empty.Add("parameterName", "value"),
                txFailure.ExceptionMetadata
            );
            var txExecution3 = getTxExecution(block3.Hash, tx3Transfer.Id);
            _logger.Verbose(nameof(txExecution3) + " = {@TxExecution}", txExecution3);
            Assert.IsType<TxSuccess>(txExecution3);
            var txSuccess3 = (TxSuccess)txExecution3;
            Assert.Equal(
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        pk.ToAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * -5)
                    )
                    .Add(
                        addresses[1],
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * 5)
                    ),
                txSuccess3.FungibleAssetsDelta
            );
            Assert.Equal(
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        pk.ToAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * -35)
                    )
                    .Add(
                        addresses[1],
                        ImmutableDictionary<Currency, FAV>.Empty
                            .Add(DumbAction.DumbCurrency, DumbAction.DumbCurrency * 15)
                    ),
                txSuccess3.UpdatedFungibleAssets
            );
        }

        [Fact]
        public void AppendThrowsInvalidBlockBytesLengthException()
        {
            HashAlgorithmType hashAlgorithm = HashAlgorithmType.Of<SHA256>();
            DumbAction[] manyActions =
                Enumerable.Repeat(new DumbAction(default, "_"), 200).ToArray();
            PrivateKey signer = null;
            int nonce = 0;
            var heavyTxs = new List<Transaction<DumbAction>>();
            for (int i = 0; i < 100; i++)
            {
                if (i % 25 == 0)
                {
                    nonce = 0;
                    signer = new PrivateKey();
                }

                Transaction<DumbAction> heavyTx = _fx.MakeTransaction(
                    manyActions,
                    nonce: nonce,
                    privateKey: signer);
                heavyTxs.Add(heavyTx);
                nonce += 1;
            }

            var block1 = TestUtils.MineNext(
                _blockChain.Genesis,
                _blockChain.Policy.GetHashAlgorithm,
                heavyTxs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            int maxBytes = _blockChain.Policy.GetMaxBlockBytes(block1.Index);
            Assert.True(block1.BytesLength > maxBytes);

            var e = Assert.Throws<InvalidBlockBytesLengthException>(() =>
                _blockChain.Append(block1)
            );
            Assert.Equal(maxBytes, e.MaxBlockBytesLength);
            Assert.Equal(block1.BytesLength, e.BlockBytesLength);
        }

        [Fact]
        public void AppendThrowsBlockExceedingTransactionsException()
        {
            HashAlgorithmType hashAlgorithm = HashAlgorithmType.Of<SHA256>();
            PrivateKey signer = null;
            int nonce = 0;
            int maxTxs = _blockChain.Policy.GetMaxTransactionsPerBlock(1);
            var manyTxs = new List<Transaction<DumbAction>>();
            for (int i = 0; i <= maxTxs; i++)
            {
                Transaction<DumbAction> heavyTx = _fx.MakeTransaction(
                    nonce: nonce,
                    privateKey: signer);
                manyTxs.Add(heavyTx);
            }

            Assert.True(manyTxs.Count > maxTxs);

            Block<DumbAction> block1 = TestUtils.MineNext(
                _blockChain.Genesis,
                _blockChain.Policy.GetHashAlgorithm,
                manyTxs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            Assert.Equal(manyTxs.Count, block1.Transactions.Count());

            var e = Assert.Throws<BlockExceedingTransactionsException>(() =>
                _blockChain.Append(block1)
            );
            Assert.IsAssignableFrom<InvalidBlockException>(e);
            Assert.Equal(maxTxs, e.MaxTransactionsPerBlock);
            Assert.Equal(manyTxs.Count, e.ActualTransactions);
        }

        [Fact]
        public void AppendWithoutEvaluateActions()
        {
            (_, Transaction<DumbAction>[] txs) =
                MakeFixturesForAppendTests();
            var genesis = _blockChain.Genesis;

            Block<DumbAction> block = TestUtils.MineNext(
                genesis,
                _blockChain.Policy.GetHashAlgorithm,
                difficulty: 1024,
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            Assert.Throws<ArgumentException>(() =>
                _blockChain.Append(
                    block,
                    evaluateActions: false,
                    renderBlocks: true,
                    renderActions: true
                )
            );
            Assert.False(_blockChain.ContainsBlock(block.Hash));
            Assert.Empty(_renderer.ActionRecords);

            _blockChain.Append(
                block,
                evaluateActions: false,
                renderBlocks: true,
                renderActions: false
            );
            Assert.Equal(block, _blockChain.Tip);
            Assert.Empty(_renderer.ActionRecords);
        }

        [Fact]
        public async Task AppendWhenActionEvaluationFailed()
        {
            var policy = new NullPolicy<ThrowException>();
            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());
            var renderer = new RecordingActionRenderer<ThrowException>();
            BlockChain<ThrowException> blockChain =
                TestUtils.MakeBlockChain(policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new ThrowException { ThrowOnExecution = true };
            blockChain.MakeTransaction(privateKey, new[] { action });

            renderer.ResetRecords();
            await blockChain.MineBlock(new PrivateKey().PublicKey);

            Assert.Equal(2, blockChain.Count);
            Assert.Empty(renderer.ActionSuccessRecords);
            Assert.Single(renderer.ActionErrorRecords);
            RenderRecord<ThrowException>.ActionError errorRecord = renderer.ActionErrorRecords[0];
            Assert.Same(action, errorRecord.Action);
            Assert.IsType<UnexpectedlyTerminatedActionException>(errorRecord.Exception);
            Assert.IsType<ThrowException.SomeException>(errorRecord.Exception.InnerException);
        }

        [Fact]
        public void AppendBlockWithPolicyViolationTx()
        {
            var validKey = new PrivateKey();
            var invalidKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException(tx.Id, "invalid signer");
            }

            var policy = new BlockPolicy<DumbAction>(validateNextBlockTx: IsSignerValid);
            using (var fx = new DefaultStoreFixture())
            {
                var blockChain = new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    fx.Store,
                    fx.StateStore,
                    fx.GenesisBlock);

                var validTx = blockChain.MakeTransaction(validKey, new DumbAction[] { });
                var invalidTx = blockChain.MakeTransaction(invalidKey, new DumbAction[] { });

                var miner = new PrivateKey().PublicKey.ToAddress();

                Block<DumbAction> block1 = TestUtils.MineNext(
                    fx.GenesisBlock,
                    policy.GetHashAlgorithm,
                    new[] { validTx },
                    difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                    blockInterval: TimeSpan.FromSeconds(10)
                ).Evaluate(blockChain);

                blockChain.Append(block1);

                Block<DumbAction> block2 = TestUtils.MineNext(
                    block1,
                    policy.GetHashAlgorithm,
                    new[] { invalidTx },
                    difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                    blockInterval: TimeSpan.FromSeconds(10)
                ).Evaluate(blockChain);

                Assert.Throws<TxPolicyViolationException>(() => blockChain.Append(block2));
            }
        }

        [Fact]
        public void UnstageAfterAppendComplete()
        {
            PrivateKey privateKey = new PrivateKey();
            (Address[] addresses, Transaction<DumbAction>[] txs) =
                MakeFixturesForAppendTests(privateKey, epoch: DateTimeOffset.UtcNow);
            var genesis = _blockChain.Genesis;

            Block<DumbAction> block1 = TestUtils.MineNext(
                genesis,
                _blockChain.Policy.GetHashAlgorithm,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            _blockChain.Append(block1);
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            StageTransactions(txs);

            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                _blockChain.Policy.GetHashAlgorithm,
                ImmutableArray<Transaction<DumbAction>>.Empty.Add(txs[0]),
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            _blockChain.Append(block2);
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            StageTransactions(txs);
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);

            var actions = new[] { new DumbAction(addresses[0], "foobar") };
            Transaction<DumbAction>[] txs2 =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            StageTransactions(txs2);
            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block3 = TestUtils.MineNext(
                block2,
                _blockChain.Policy.GetHashAlgorithm,
                ImmutableArray<Transaction<DumbAction>>.Empty.Add(txs[1]),
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).Evaluate(_blockChain);
            _blockChain.Append(block3);
            Assert.Empty(_blockChain.GetStagedTransactionIds());
        }

        [Fact]
        public void AppendValidatesBlock()
        {
            var blockChain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(
                    new BlockPolicyViolationException(string.Empty)),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
            Assert.Throws<BlockPolicyViolationException>(
                () => blockChain.Append(_fx.Block1));
        }

        [Fact]
        public async Task AppendWithdrawTxsWithExpiredNoncesFromStage()
        {
            var signerA = new PrivateKey();
            var signerB = new PrivateKey();
            BlockHash genesis = _blockChain.Genesis.Hash;
            DumbAction[] emptyActions = new DumbAction[0];
            Transaction<DumbAction>
                txA0 = Transaction<DumbAction>.Create(0, signerA, genesis, emptyActions),
                txA1 = Transaction<DumbAction>.Create(1, signerA, genesis, emptyActions);
            _blockChain.StageTransaction(txA0);
            _blockChain.StageTransaction(txA1);
            Block<DumbAction> block = await _blockChain.MineBlock(
                signerA.PublicKey,
                DateTimeOffset.UtcNow,
                append: false
            );

            Transaction<DumbAction>
                txA2 = Transaction<DumbAction>.Create(2, signerA, genesis, emptyActions),
                txA0_ = Transaction<DumbAction>.Create(0, signerA, genesis, emptyActions),
                txA1_ = Transaction<DumbAction>.Create(1, signerA, genesis, emptyActions),
                txB0 = Transaction<DumbAction>.Create(1, signerB, genesis, emptyActions),
                txB1 = Transaction<DumbAction>.Create(1, signerB, genesis, emptyActions),
                txB2 = Transaction<DumbAction>.Create(2, signerB, genesis, emptyActions),
                txB0_ = Transaction<DumbAction>.Create(1, signerB, genesis, emptyActions),
                txB1_ = Transaction<DumbAction>.Create(1, signerB, genesis, emptyActions);
            _blockChain.StageTransaction(txA2);
            _blockChain.StageTransaction(txA0_);
            _blockChain.StageTransaction(txA1_);
            _blockChain.StageTransaction(txB0);
            _blockChain.StageTransaction(txB1);
            _blockChain.StageTransaction(txB2);
            _blockChain.StageTransaction(txB0_);
            _blockChain.StageTransaction(txB1_);
            Assert.Equal(
                new Transaction<DumbAction>[]
                {
                    txA0, txA1, txA2, txA0_, txA1_, txB0, txB1, txB2, txB0_, txB1_,
                }.Select(tx => tx.Id).ToImmutableHashSet(),
                _blockChain.GetStagedTransactionIds()
            );

            _blockChain.Append(block);
            Assert.Equal(
                new Transaction<DumbAction>[]
                {
                    txA2, txB0, txB1, txB2, txB0_, txB1_,
                }.Select(tx => tx.Id).ToImmutableHashSet(),
                _blockChain.GetStagedTransactionIds()
            );
        }
    }
}
