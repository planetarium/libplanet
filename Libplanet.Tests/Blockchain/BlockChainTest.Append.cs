using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;
using FAV = Libplanet.Types.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void Append(bool getTxExecutionViaStore)
        {
            Func<BlockHash, TxId, TxExecution> getTxExecution
                = getTxExecutionViaStore
                ? (Func<BlockHash, TxId, TxExecution>)_blockChain.Store.GetTxExecution
                : _blockChain.GetTxExecution;

            PrivateKey[] keys = Enumerable.Repeat(0, 5).Select(_ => new PrivateKey()).ToArray();
            (Address[] addresses, Transaction[] txs) =
                MakeFixturesForAppendTests(keys: keys);
            var genesis = _blockChain.Genesis;

            Assert.Equal(1, _blockChain.Count);
            Assert.Empty(_renderer.ActionRecords);
            Assert.Empty(_renderer.BlockRecords);
            var block1 = _blockChain.ProposeBlock(
                keys[4], TestUtils.CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.NotNull(_blockChain.GetBlockCommit(block1.Hash));
            Block block2 = _blockChain.ProposeBlock(
                keys[4], txs.ToImmutableList(), lastCommit: TestUtils.CreateBlockCommit(block1));
            foreach (Transaction tx in txs)
            {
                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(block1.Hash, tx.Id));
                Assert.Null(getTxExecution(block2.Hash, tx.Id));
            }

            foreach (var tx in txs)
            {
                Assert.Null(_fx.Store.GetFirstTxIdBlockHashIndex(tx.Id));
            }

            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));

            foreach (var tx in txs)
            {
                Assert.True(_fx.Store.GetFirstTxIdBlockHashIndex(tx.Id)?.Equals(block2.Hash));
            }

            Assert.True(_blockChain.ContainsBlock(block2.Hash));

            RenderRecord.ActionSuccess[] renders = _renderer.ActionSuccessRecords
                .Where(r => TestUtils.IsDumbAction(r.Action))
                .ToArray();
            DumbAction[] actions = renders.Select(r => TestUtils.ToDumbAction(r.Action)).ToArray();
            Assert.Equal(4, renders.Length);
            Assert.True(renders.All(r => r.Render));
            Assert.Equal("foo", actions[0].Item);
            Assert.Equal(2, renders[0].Context.BlockIndex);
            Assert.Equal(
                new IValue[] { null, null, null, null, (Integer)1 },
                addresses.Select(renders[0].Context.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", null, null, null, (Integer)1 },
                addresses.Select(renders[0].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal("bar", actions[1].Item);
            Assert.Equal(2, renders[1].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(renders[0].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState),
                addresses.Select(renders[1].Context.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", (Text)"bar", null, null, (Integer)1 },
                addresses.Select(renders[1].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal("baz", actions[2].Item);
            Assert.Equal(2, renders[2].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(renders[1].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState),
                addresses.Select(renders[2].Context.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", (Text)"bar", (Text)"baz", null, (Integer)1 },
                addresses.Select(renders[2].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal("qux", actions[3].Item);
            Assert.Equal(2, renders[3].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(renders[2].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState),
                addresses.Select(renders[3].Context.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal(
                new IValue[]
                {
                    (Text)"foo", (Text)"bar", (Text)"baz", (Text)"qux", (Integer)1,
                },
                renders[3].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetStates(addresses)
            );

            Address minerAddress = addresses[4];
            RenderRecord.ActionSuccess[] blockRenders = _renderer.ActionSuccessRecords
                .Where(r => TestUtils.IsMinerReward(r.Action))
                .ToArray();

            Assert.Equal((Integer)2, (Integer)_blockChain.GetWorldState().GetAccount(
                ReservedAddresses.LegacyAccount).GetState(minerAddress));
            Assert.Equal(2, blockRenders.Length);
            Assert.True(blockRenders.All(r => r.Render));
            Assert.Equal(1, blockRenders[0].Context.BlockIndex);
            Assert.Equal(2, blockRenders[1].Context.BlockIndex);

            Assert.Equal(
                (Integer)1,
                (Integer)blockRenders[0].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState(minerAddress)
            );
            Assert.Equal(
                (Integer)1,
                (Integer)blockRenders[1].Context.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState(minerAddress)
            );
            Assert.Equal(
                (Integer)2,
                (Integer)blockRenders[1].NextStates.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState(minerAddress)
            );

            foreach (Transaction tx in txs)
            {
                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(block1.Hash, tx.Id));

                TxExecution e = getTxExecution(block2.Hash, tx.Id);
                Assert.IsType<TxSuccess>(e);
                var s = (TxSuccess)e;
                Assert.Equal(block2.Hash, s.BlockHash);
                Assert.Equal(tx.Id, s.TxId);
                Assert.Empty(s.FungibleAssetsDelta);
                Assert.Empty(s.UpdatedFungibleAssets);
            }

            var pk = new PrivateKey();
            Transaction tx1Transfer = _fx.MakeTransaction(
                new[]
                {
                    new DumbAction(pk.ToAddress(), "foo", pk.ToAddress(), addresses[1], 10),
                    new DumbAction(addresses[0], "bar", pk.ToAddress(), addresses[2], 20),
                },
                nonce: 0,
                privateKey: pk
            );
            Transaction tx2Error = _fx.MakeTransaction(
                new[]
                {
                    // As it tries to transfer a negative value, it throws
                    // ArgumentOutOfRangeException:
                    new DumbAction(pk.ToAddress(), "foo", addresses[0], addresses[1], -5),
                },
                nonce: 1,
                privateKey: pk
            );
            Transaction tx3Transfer = _fx.MakeTransaction(
                new[]
                {
                    new DumbAction(pk.ToAddress(), "foo", pk.ToAddress(), addresses[1], 5),
                },
                nonce: 2,
                privateKey: pk
            );
            Block block3 = _blockChain.ProposeBlock(
                keys[4],
                new[] { tx1Transfer, tx2Error, tx3Transfer }.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
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
            Assert.Null(txFailure.ExceptionMetadata);
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

        [SkippableFact]
        public void AppendFailDueToInvalidBytesLength()
        {
            DumbAction[] manyActions =
                Enumerable.Repeat(new DumbAction(default, "_"), 200).ToArray();
            PrivateKey signer = null;
            int nonce = 0;
            var heavyTxs = new List<Transaction>();
            for (int i = 0; i < 100; i++)
            {
                if (i % 25 == 0)
                {
                    nonce = 0;
                    signer = new PrivateKey();
                }

                Transaction heavyTx = _fx.MakeTransaction(
                    manyActions,
                    nonce: nonce,
                    privateKey: signer);
                heavyTxs.Add(heavyTx);
                nonce += 1;
            }

            var miner = new PrivateKey();
            var block = _blockChain.ProposeBlock(
                miner,
                heavyTxs.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip));
            long maxBytes = _blockChain.Policy.GetMaxTransactionsBytes(block.Index);
            Assert.True(block.MarshalBlock().EncodingLength > maxBytes);

            var e = Assert.Throws<InvalidBlockBytesLengthException>(() =>
                _blockChain.Append(block, TestUtils.CreateBlockCommit(block))
            );
        }

        [SkippableFact]
        public void AppendFailDueToInvalidTxCount()
        {
            int nonce = 0;
            int maxTxs = _blockChain.Policy.GetMaxTransactionsPerBlock(1);
            var manyTxs = new List<Transaction>();
            for (int i = 0; i <= maxTxs; i++)
            {
                Transaction heavyTx = _fx.MakeTransaction(
                    nonce: nonce,
                    privateKey: null);
                manyTxs.Add(heavyTx);
            }

            Assert.True(manyTxs.Count > maxTxs);

            var miner = new PrivateKey();
            Block block = _blockChain.ProposeBlock(
                miner,
                manyTxs.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip));
            Assert.Equal(manyTxs.Count, block.Transactions.Count());

            var e = Assert.Throws<InvalidBlockTxCountException>(() =>
                _blockChain.Append(block, TestUtils.CreateBlockCommit(block))
            );
        }

        [SkippableFact]
        public void AppendWhenActionEvaluationFailed()
        {
            var policy = new NullBlockPolicy();
            var store = new MemoryStore();
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());
            var renderer = new RecordingActionRenderer();
            BlockChain blockChain =
                TestUtils.MakeBlockChain<ThrowException>(
                    policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new ThrowException { ThrowOnExecution = true };
            blockChain.MakeTransaction(privateKey, new[] { action });

            renderer.ResetRecords();
            Block block = blockChain.ProposeBlock(new PrivateKey());
            blockChain.Append(block, TestUtils.CreateBlockCommit(block));

            Assert.Equal(2, blockChain.Count);
            Assert.Empty(renderer.ActionSuccessRecords);
            Assert.Single(renderer.ActionErrorRecords);
            RenderRecord.ActionError errorRecord = renderer.ActionErrorRecords[0];
            Assert.Equal(action.PlainValue, errorRecord.Action);
            Assert.IsType<UnexpectedlyTerminatedActionException>(errorRecord.Exception);
            Assert.IsType<ThrowException.SomeException>(errorRecord.Exception.InnerException);
        }

        [SkippableFact]
        public void AppendBlockWithPolicyViolationTx()
        {
            var validKey = new PrivateKey();
            var invalidKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain chain, Transaction tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress) || tx.Signer.Equals(_fx.Proposer.ToAddress())
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy(validateNextBlockTx: IsSignerValid);
            using (var fx = new MemoryStoreFixture())
            {
                var blockChain = BlockChain.Create(
                    policy,
                    new VolatileStagePolicy(),
                    fx.Store,
                    fx.StateStore,
                    fx.GenesisBlock,
                    new ActionEvaluator(
                        _ => policy.BlockAction,
                        blockChainStates: new BlockChainStates(fx.Store, fx.StateStore),
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));

                var validTx = blockChain.MakeTransaction(validKey, new DumbAction[] { });
                var invalidTx = blockChain.MakeTransaction(invalidKey, new DumbAction[] { });

                var miner = new PrivateKey();

                Block block1 = blockChain.ProposeBlock(
                    miner,
                    new[] { validTx }.ToImmutableList(),
                    TestUtils.CreateBlockCommit(blockChain.Tip));
                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

                Block block2 = blockChain.ProposeBlock(
                    miner,
                    new[] { invalidTx }.ToImmutableList(),
                    TestUtils.CreateBlockCommit(blockChain.Tip));
                Assert.Throws<TxPolicyViolationException>(() => blockChain.Append(
                    block2, TestUtils.CreateBlockCommit(block2)));
            }
        }

        [SkippableFact]
        public void UnstageAfterAppendComplete()
        {
            PrivateKey privateKey = new PrivateKey();
            (Address[] addresses, Transaction[] txs) =
                MakeFixturesForAppendTests(privateKey, epoch: DateTimeOffset.UtcNow);
            var genesis = _blockChain.Genesis;
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            // Mining with empty staged.
            Block block1 = _blockChain.ProposeBlock(
                privateKey,
                TestUtils.CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            StageTransactions(txs);
            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);

            // Tx with nonce 0 is mined.
            Block block2 = _blockChain.ProposeBlock(
                privateKey,
                ImmutableList<Transaction>.Empty.Add(txs[0]),
                TestUtils.CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);

            // Two txs with nonce 1 are staged.
            var actions = new[] { new DumbAction(addresses[0], "foobar") };
            Transaction[] txs2 =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            StageTransactions(txs2);
            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);

            // Unmined tx is left intact in the stage.
            Block block3 = _blockChain.ProposeBlock(
                privateKey,
                ImmutableList<Transaction>.Empty.Add(txs[1]),
                TestUtils.CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));
        }

        [SkippableFact]
        public void DoesNotUnstageOnAppendForForkedChain()
        {
            PrivateKey privateKey = new PrivateKey();
            (_, Transaction[] txs) =
                MakeFixturesForAppendTests(privateKey, epoch: DateTimeOffset.UtcNow);
            var genesis = _blockChain.Genesis;
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            var workspace = _blockChain.Fork(_blockChain.Genesis.Hash);
            Assert.Empty(_blockChain.ListStagedTransactions());

            // Forked chain shares stage policy.
            StageTransactions(txs);
            Assert.Equal(2, _blockChain.StagePolicy.Iterate(_blockChain, filtered: false).Count());
            Assert.Equal(2, workspace.StagePolicy.Iterate(workspace, filtered: false).Count());

            // Mine nonce 0 tx.
            Block block1 = _blockChain.ProposeBlock(
                privateKey,
                ImmutableList<Transaction>.Empty.Add(txs[0]),
                TestUtils.CreateBlockCommit(_blockChain.Tip));

            // Not actually unstaged, but lower nonce is filtered for workspace.
            workspace.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.Equal(2, _blockChain.ListStagedTransactions().Count);
            Assert.Single(workspace.ListStagedTransactions());
            Assert.Equal(2, workspace.StagePolicy.Iterate(workspace, filtered: false).Count());

            // Actually gets unstaged.
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.Single(_blockChain.ListStagedTransactions());
            Assert.Single(workspace.ListStagedTransactions());
            Assert.Single(workspace.StagePolicy.Iterate(workspace, filtered: false));

            // Mine nonce 1 tx.
            Block block2 = _blockChain.ProposeBlock(
                privateKey,
                ImmutableList<Transaction>.Empty.Add(txs[1]),
                TestUtils.CreateBlockCommit(_blockChain.Tip));

            // Actually gets unstaged.
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Empty(_blockChain.ListStagedTransactions());
            Assert.Empty(workspace.ListStagedTransactions());
            Assert.Empty(workspace.StagePolicy.Iterate(workspace, filtered: false));
        }

        [SkippableFact]
        public void AppendValidatesBlock()
        {
            var policy = new NullBlockPolicy(
                    new BlockPolicyViolationException(string.Empty));
            var blockChainStates = new BlockChainStates(_fx.Store, _fx.StateStore);
            var blockChain = new BlockChain(
                policy,
                new VolatileStagePolicy(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                blockChainStates,
                new ActionEvaluator(
                    _ => policy.BlockAction,
                    blockChainStates,
                    new SingleActionLoader(typeof(DumbAction))));
            Assert.Throws<BlockPolicyViolationException>(
                () => blockChain.Append(_fx.Block1, TestUtils.CreateBlockCommit(_fx.Block1)));
        }

        [SkippableFact]
        public void AppendWithdrawTxsWithExpiredNoncesFromStage()
        {
            void AssertTxIdSetEqual(
                IEnumerable<TxId> setOne,
                IEnumerable<TxId> setTwo)
            {
                Assert.Equal(
                    setOne.OrderBy(id => id), setTwo.OrderBy(id => id));
            }

            var signerA = new PrivateKey();
            var signerB = new PrivateKey();
            BlockHash genesis = _blockChain.Genesis.Hash;
            var emptyActions = Array.Empty<IValue>();
            Transaction
                txA0 = Transaction.Create(0, signerA, genesis, emptyActions),
                txA1 = Transaction.Create(1, signerA, genesis, emptyActions);
            _blockChain.StageTransaction(txA0);
            _blockChain.StageTransaction(txA1);
            Block block = _blockChain.ProposeBlock(signerA);

            Transaction
                txA2 = Transaction.Create(2, signerA, genesis, emptyActions),
                txA0_ = Transaction.Create(0, signerA, genesis, emptyActions),
                txA1_ = Transaction.Create(1, signerA, genesis, emptyActions),
                txB0 = Transaction.Create(1, signerB, genesis, emptyActions),
                txB1 = Transaction.Create(1, signerB, genesis, emptyActions),
                txB2 = Transaction.Create(2, signerB, genesis, emptyActions),
                txB0_ = Transaction.Create(1, signerB, genesis, emptyActions),
                txB1_ = Transaction.Create(1, signerB, genesis, emptyActions);
            _blockChain.StageTransaction(txA2);
            _blockChain.StageTransaction(txA0_);
            _blockChain.StageTransaction(txA1_);
            _blockChain.StageTransaction(txB0);
            _blockChain.StageTransaction(txB1);
            _blockChain.StageTransaction(txB2);
            _blockChain.StageTransaction(txB0_);
            _blockChain.StageTransaction(txB1_);
            AssertTxIdSetEqual(
                new Transaction[]
                {
                    txA0, txA1, txA2, txA0_, txA1_, txB0, txB1, txB2, txB0_, txB1_,
                }.Select(tx => tx.Id).ToImmutableHashSet(),
                _blockChain.GetStagedTransactionIds());

            _blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            AssertTxIdSetEqual(
                new Transaction[]
                {
                    txA2, txB0, txB1, txB2, txB0_, txB1_,
                }.Select(tx => tx.Id).ToImmutableHashSet(),
                _blockChain.GetStagedTransactionIds());
            AssertTxIdSetEqual(
                new Transaction[]
                {
                    txA2, txB0, txB1, txB2, txB0_, txB1_,
                }.Select(tx => tx.Id).ToImmutableHashSet(),
                _blockChain.StagePolicy.Iterate(_blockChain, filtered: true).Select(tx => tx.Id));
            AssertTxIdSetEqual(
                new Transaction[]
                {
                    txA2, txA0_, txA1_, txB0, txB1, txB2, txB0_, txB1_,
                }.Select(tx => tx.Id).ToImmutableHashSet(),
                _blockChain.StagePolicy.Iterate(_blockChain, filtered: false).Select(tx => tx.Id));
        }

        [SkippableFact]
        public void CachedActionEvaluationWrittenOnAppend()
        {
            var signer = new PrivateKey();
            var miner = new PrivateKey();
            var dummy = new PrivateKey();
            BlockHash genesis = _blockChain.Genesis.Hash;
            Transaction
                txA0 = Transaction.Create(
                    0,
                    signer,
                    genesis,
                    new DumbAction[]
                    {
                        new DumbAction(
                            dummy.ToAddress(), "foo", dummy.ToAddress(), dummy.ToAddress(), 10),
                    }.ToPlainValues()),
                txA1 = Transaction.Create(
                    1,
                    signer,
                    genesis,
                    new DumbAction[]
                    {
                        new DumbAction(
                            dummy.ToAddress(), "bar", dummy.ToAddress(), dummy.ToAddress(), 20),
                    }.ToPlainValues());
            _blockChain.StageTransaction(txA0);
            _blockChain.StageTransaction(txA1);
            Block block = _blockChain.ProposeBlock(miner);
            IReadOnlyList<IActionEvaluation> actionEvaluations = _blockChain.EvaluateBlock(block);
            Assert.Equal(0L, _blockChain.Tip.Index);
            _blockChain.Append(
                block,
                TestUtils.CreateBlockCommit(block),
                render: true,
                actionEvaluations: actionEvaluations);
            Assert.Equal(1L, _blockChain.Tip.Index);
            Assert.NotNull(_blockChain.GetTxExecution(block.Hash, txA0.Id));
            Assert.NotNull(_blockChain.GetTxExecution(block.Hash, txA1.Id));
        }

        [SkippableFact]
        public void CannotAppendBlockWithInvalidActions()
        {
            var txSigner = new PrivateKey();
            var unsignedInvalidTx = new UnsignedTx(
                new TxInvoice(
                    _blockChain.Genesis.Hash,
                    ImmutableHashSet<Address>.Empty,
                    DateTimeOffset.UtcNow,
                    new TxActionList((IValue)List.Empty.Add(new Text("Foo")))), // Invalid action
                new TxSigningMetadata(txSigner.PublicKey, 1));
            var invalidTx = new Transaction(
                unsignedInvalidTx, unsignedInvalidTx.CreateSignature(txSigner));
            var txs = new[]
            {
                Transaction.Create(
                    nonce: 0,
                    privateKey: txSigner,
                    genesisHash: _blockChain.Genesis.Hash,
                    actions: Array.Empty<DumbAction>().ToPlainValues(),
                    updatedAddresses: ImmutableHashSet<Address>.Empty
                ),
                invalidTx,
                Transaction.Create(
                    nonce: 2,
                    privateKey: txSigner,
                    genesisHash: _blockChain.Genesis.Hash,
                    actions: Array.Empty<DumbAction>().ToPlainValues(),
                    updatedAddresses: ImmutableHashSet<Address>.Empty
                ),
            }.OrderBy(tx => tx.Id);

            var metadata = new BlockMetadata(
                index: 1L,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: _fx.Proposer.PublicKey,
                previousHash: _blockChain.Genesis.Hash,
                txHash: BlockContent.DeriveTxHash(txs),
                lastCommit: null);
            var preEval = new PreEvaluationBlock(
                new PreEvaluationBlockHeader(
                    metadata, metadata.DerivePreEvaluationHash(default)),
                txs);
            var block = preEval.Sign(
                _fx.Proposer, HashDigest<SHA256>.DeriveFrom(TestUtils.GetRandomBytes(1024)));

            Assert.Throws<InvalidActionException>(
                () => _blockChain.Append(block, TestUtils.CreateBlockCommit(block)));
            Assert.Equal(0, _blockChain.Tip.Index);
        }
    }
}
