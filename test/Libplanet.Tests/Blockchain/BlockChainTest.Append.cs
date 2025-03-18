using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Sys;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;
using Serilog;
using Xunit;

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
                keys[4],
                txs.ToImmutableList(),
                lastCommit: TestUtils.CreateBlockCommit(block1),
                evidence: ImmutableArray<EvidenceBase>.Empty);
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
            Assert.Equal("foo", actions[0].Append?.Item);
            Assert.Equal(2, renders[0].Context.BlockIndex);
            Assert.Equal(
                new IValue[] { null, null, null, null, (Integer)1 },
                addresses.Select(_blockChain
                    .GetWorldState(renders[0].Context.PreviousState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", null, null, null, (Integer)1 },
                addresses.Select(_blockChain
                    .GetWorldState(renders[0].NextState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState)
            );
            Assert.Equal("bar", actions[1].Append?.Item);
            Assert.Equal(2, renders[1].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(_blockChain
                    .GetWorldState(renders[0].NextState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState),
                addresses.Select(_blockChain
                    .GetWorldState(renders[1].Context.PreviousState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", (Text)"bar", null, null, (Integer)1 },
                addresses.Select(
                    _blockChain.GetWorldState(renders[1].NextState)
                        .GetAccountState(ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal("baz", actions[2].Append?.Item);
            Assert.Equal(2, renders[2].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(
                    _blockChain.GetWorldState(renders[1].NextState)
                        .GetAccountState(ReservedAddresses.LegacyAccount).GetState),
                addresses.Select(
                    _blockChain.GetWorldState(renders[2].Context.PreviousState)
                        .GetAccountState(ReservedAddresses.LegacyAccount).GetState)
            );
            Assert.Equal(
                new IValue[] { (Text)"foo", (Text)"bar", (Text)"baz", null, (Integer)1 },
                addresses.Select(
                    _blockChain
                        .GetWorldState(renders[2].NextState)
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState)
            );
            Assert.Equal("qux", actions[3].Append?.Item);
            Assert.Equal(2, renders[3].Context.BlockIndex);
            Assert.Equal(
                addresses.Select(
                    _blockChain
                        .GetWorldState(renders[2].NextState)
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState),
                addresses.Select(
                    _blockChain
                        .GetWorldState(renders[3].Context.PreviousState)
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState)
            );
            Assert.Equal(
                new IValue[]
                {
                    (Text)"foo", (Text)"bar", (Text)"baz", (Text)"qux", (Integer)1,
                },
                _blockChain
                    .GetWorldState(renders[3].NextState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetStates(addresses)
            );

            Address minerAddress = addresses[4];
            RenderRecord.ActionSuccess[] blockRenders = _renderer.ActionSuccessRecords
                .Where(r => TestUtils.IsMinerReward(r.Action))
                .ToArray();

            Assert.Equal(
                (Integer)2,
                (Integer)_blockChain
                    .GetNextWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(minerAddress));
            Assert.Equal(2, blockRenders.Length);
            Assert.True(blockRenders.All(r => r.Render));
            Assert.Equal(1, blockRenders[0].Context.BlockIndex);
            Assert.Equal(2, blockRenders[1].Context.BlockIndex);

            Assert.Equal(
                (Integer)1,
                (Integer)_blockChain
                    .GetWorldState(blockRenders[0].NextState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(minerAddress)
            );
            Assert.Equal(
                (Integer)1,
                (Integer)_blockChain
                    .GetWorldState(blockRenders[1].Context.PreviousState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(minerAddress)
            );
            Assert.Equal(
                (Integer)2,
                (Integer)_blockChain
                    .GetWorldState(blockRenders[1].NextState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(minerAddress)
            );

            foreach (Transaction tx in txs)
            {
                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(block1.Hash, tx.Id));

                TxExecution e = getTxExecution(block2.Hash, tx.Id);
                Assert.False(e.Fail);
                Assert.Equal(block2.Hash, e.BlockHash);
                Assert.Equal(tx.Id, e.TxId);
            }

            TxExecution txe = getTxExecution(block2.Hash, txs[0].Id);
            var outputWorld = _blockChain
                .GetWorldState(Assert.IsType<HashDigest<SHA256>>(txe.OutputState));
            Assert.Equal(
                DumbAction.DumbCurrency * 100,
                outputWorld.GetBalance(addresses[0], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 100,
                outputWorld.GetBalance(addresses[1], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 200,
                outputWorld.GetTotalSupply(DumbAction.DumbCurrency));
            txe = getTxExecution(block2.Hash, txs[1].Id);
            outputWorld = _blockChain
                .GetWorldState(Assert.IsType<HashDigest<SHA256>>(txe.OutputState));
            Assert.Equal(
                DumbAction.DumbCurrency * 100,
                outputWorld.GetBalance(addresses[2], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 100,
                outputWorld.GetBalance(addresses[3], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 400,
                outputWorld.GetTotalSupply(DumbAction.DumbCurrency));

            var pk = new PrivateKey();
            Transaction tx1Transfer = _fx.MakeTransaction(
                new[]
                {
                    DumbAction.Create((pk.Address, "foo"), (addresses[0], addresses[1], 10)),
                    DumbAction.Create((addresses[0], "bar"), (addresses[0], addresses[2], 20)),
                },
                nonce: 0,
                privateKey: pk
            );
            Transaction tx2Error = _fx.MakeTransaction(
                new[]
                {
                    // As it tries to transfer a negative value, it throws
                    // ArgumentOutOfRangeException:
                    DumbAction.Create((pk.Address, "foo"), (addresses[0], addresses[1], -5)),
                },
                nonce: 1,
                privateKey: pk
            );
            Transaction tx3Transfer = _fx.MakeTransaction(
                new[]
                {
                    DumbAction.Create((pk.Address, "foo"), (addresses[0], addresses[1], 5)),
                },
                nonce: 2,
                privateKey: pk
            );
            Block block3 = _blockChain.ProposeBlock(
                keys[4],
                new[] { tx1Transfer, tx2Error, tx3Transfer }.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            var txExecution1 = getTxExecution(block3.Hash, tx1Transfer.Id);
            _logger.Verbose(nameof(txExecution1) + " = {@TxExecution}", txExecution1);
            Assert.False(txExecution1.Fail);
            var inputAccount1 = _blockChain.GetWorldState(
                Assert.IsType<HashDigest<SHA256>>(txExecution1.InputState))
                    .GetAccountState(ReservedAddresses.LegacyAccount);
            var outputWorld1 = _blockChain.GetWorldState(
                Assert.IsType<HashDigest<SHA256>>(txExecution1.OutputState));
            var outputAccount1 = outputWorld1
                    .GetAccountState(ReservedAddresses.LegacyAccount);
            var accountDiff1 = AccountDiff.Create(inputAccount1, outputAccount1);

            Assert.Equal(
                (new Address[] { addresses[0], pk.Address }).ToImmutableHashSet(),
                accountDiff1.StateDiffs.Select(kv => kv.Key).ToImmutableHashSet());
            Assert.Equal(
                new Text("foo"),
                outputAccount1.GetState(pk.Address));
            Assert.Equal(
                new Text("foo,bar"),
                outputAccount1.GetState(addresses[0]));
            Assert.Equal(
                DumbAction.DumbCurrency * 0,
                outputWorld1.GetBalance(pk.Address, DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 70,
                outputWorld1.GetBalance(addresses[0], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 110,
                outputWorld1.GetBalance(addresses[1], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 120,
                outputWorld1.GetBalance(addresses[2], DumbAction.DumbCurrency));

            var txExecution2 = getTxExecution(block3.Hash, tx2Error.Id);
            _logger.Verbose(nameof(txExecution2) + " = {@TxExecution}", txExecution2);
            Assert.True(txExecution2.Fail);
            Assert.Equal(block3.Hash, txExecution2.BlockHash);
            Assert.Equal(tx2Error.Id, txExecution2.TxId);
            Assert.Contains(
                $"{nameof(System)}.{nameof(ArgumentOutOfRangeException)}",
                txExecution2.ExceptionNames);

            var txExecution3 = getTxExecution(block3.Hash, tx3Transfer.Id);
            _logger.Verbose(nameof(txExecution3) + " = {@TxExecution}", txExecution3);
            Assert.False(txExecution3.Fail);
            var outputWorld3 = _blockChain.GetWorldState(
                Assert.IsType<HashDigest<SHA256>>(txExecution3.OutputState));
            Assert.Equal(
                DumbAction.DumbCurrency * 0,
                outputWorld3.GetBalance(pk.Address, DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 65,
                outputWorld3.GetBalance(addresses[0], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 115,
                outputWorld3.GetBalance(addresses[1], DumbAction.DumbCurrency));
        }

        [SkippableFact]
        public void AppendModern()
        {
            _blockChain = TestUtils.MakeBlockChain(
                new NullBlockPolicy(),
                new MemoryStore(),
                new TrieStateStore(new MemoryKeyValueStore()),
                new SingleActionLoader(typeof(DumbModernAction)));
            var genesis = _blockChain.Genesis;
            var address1 = new Address(TestUtils.GetRandomBytes(20));
            var address2 = new Address(TestUtils.GetRandomBytes(20));
            var miner = new PrivateKey();
            var action1 = DumbModernAction.Create((address1, "foo"));
            var action2 = DumbModernAction.Create((address2, "bar"));
            var tx1 = Transaction.Create(0, miner, genesis.Hash, new[] { action1 }.ToPlainValues());
            var tx2 = Transaction.Create(1, miner, genesis.Hash, new[] { action2 }.ToPlainValues());
            var block1 = _blockChain.ProposeBlock(
                miner,
                new[] { tx1 }.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
            var commit1 = TestUtils.CreateBlockCommit(block1);
            _blockChain.Append(block1, commit1);
            var world1 = _blockChain.GetNextWorldState();
            Assert.False(world1.Legacy);
            Assert.Equal(
                (Text)"foo",
                world1.GetAccountState(DumbModernAction.DumbModernAddress).GetState(address1));
            var block2 = _blockChain.ProposeBlock(
                miner,
                new[] { tx2 }.ToImmutableList(),
                commit1,
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            var world2 = _blockChain.GetNextWorldState();
            Assert.False(world2.Legacy);
            Assert.Equal(
                (Text)"bar",
                world2.GetAccountState(DumbModernAction.DumbModernAddress).GetState(address2));
        }

        [SkippableFact]
        public void AppendFailDueToInvalidBytesLength()
        {
            DumbAction[] manyActions =
                Enumerable.Repeat(DumbAction.Create((default, "_")), 200).ToArray();
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
            Assert.Equal(manyTxs.Count, block.Transactions.Count);

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
            var actionLoader = new SingleActionLoader(typeof(ThrowException));
            var renderer = new RecordingActionRenderer();
            BlockChain blockChain =
                TestUtils.MakeBlockChain(
                    policy, store, stateStore, actionLoader, renderers: new[] { renderer });
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
                var validAddress = validKey.Address;
                return tx.Signer.Equals(validAddress) || tx.Signer.Equals(_fx.Proposer.Address)
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
                        policy.PolicyActionsRegistry,
                        stateStore: fx.StateStore,
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));

                var validTx = blockChain.MakeTransaction(validKey, Array.Empty<DumbAction>());
                var invalidTx = blockChain.MakeTransaction(invalidKey, Array.Empty<DumbAction>());

                var miner = new PrivateKey();

                Block block1 = blockChain.ProposeBlock(
                    miner,
                    new[] { validTx }.ToImmutableList(),
                    TestUtils.CreateBlockCommit(blockChain.Tip),
                    ImmutableArray<EvidenceBase>.Empty);
                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

                Block block2 = blockChain.ProposeBlock(
                    miner,
                    new[] { invalidTx }.ToImmutableList(),
                    TestUtils.CreateBlockCommit(blockChain.Tip),
                    ImmutableArray<EvidenceBase>.Empty);
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);

            // Two txs with nonce 1 are staged.
            var actions = new[] { DumbAction.Create((addresses[0], "foobar")) };
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));
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
                    policy.PolicyActionsRegistry,
                    _fx.StateStore,
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
        public void DoesNotMigrateStateWithoutAction()
        {
            var policy = new BlockPolicy(
                new PolicyActionsRegistry(),
                getMaxTransactionsBytes: _ => 50 * 1024);
            var stagePolicy = new VolatileStagePolicy();
            var fx = GetStoreFixture(policy.PolicyActionsRegistry);
            var renderer = new ValidatingActionRenderer();
            var actionEvaluator = new ActionEvaluator(
                policy.PolicyActionsRegistry,
                stateStore: fx.StateStore,
                actionTypeLoader: new SingleActionLoader(typeof(DumbAction)));

            var txs = new[]
            {
                Transaction.Create(
                    0,
                    fx.Proposer,
                    null,
                    actions: new IAction[]
                    {
                        new Initialize(
                            validatorSet: TestUtils.ValidatorSet,
                            states: ImmutableDictionary.Create<Address, IValue>()),
                    }.ToPlainValues(),
                    timestamp: DateTimeOffset.UtcNow),
            };
            var evs = Array.Empty<EvidenceBase>();
            PreEvaluationBlock preEvalGenesis = new BlockContent(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.WorldStateProtocolVersion - 1,
                    index: 0L,
                    timestamp: DateTimeOffset.UtcNow,
                    miner: fx.Proposer.Address,
                    publicKey: fx.Proposer.PublicKey,
                    previousHash: default,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null,
                    evidenceHash: null),
                transactions: txs,
                evidence: evs).Propose();
            var genesis = preEvalGenesis.Sign(
                fx.Proposer,
                actionEvaluator.Evaluate(preEvalGenesis, default).Last().OutputState);
            var blockChain = BlockChain.Create(
                policy,
                stagePolicy,
                fx.Store,
                fx.StateStore,
                genesis,
                actionEvaluator,
                renderers: new[] { new LoggedActionRenderer(renderer, Log.Logger) });
            Assert.True(blockChain.GetWorldState().Legacy);
            var emptyBlock = blockChain.ProposeBlock(
                fx.Proposer,
                ImmutableList<Transaction>.Empty,
                TestUtils.CreateBlockCommit(blockChain.Tip),
                ImmutableArray<EvidenceBase>.Empty);
            blockChain.Append(emptyBlock, TestUtils.CreateBlockCommit(emptyBlock));
            Assert.True(blockChain.GetNextWorldState(emptyBlock.Hash).Legacy);
            Assert.Equal<byte>(
                blockChain.GetWorldState(genesis.StateRootHash).Trie.Hash.ByteArray,
                blockChain.GetNextWorldState(emptyBlock.Hash).Trie.Hash.ByteArray);
        }

        [Fact]
        public void AppendSRHPostponeBPVBump()
        {
            var beforePostponeBPV = BlockMetadata.SlothProtocolVersion - 1;
            var policy = new NullBlockPolicy();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var actionLoader = new SingleActionLoader(typeof(DumbAction));
            var actionEvaluator = new ActionEvaluator(
                policy.PolicyActionsRegistry,
                stateStore,
                actionLoader);

            var preGenesis = TestUtils.ProposeGenesis(
                proposer: TestUtils.GenesisProposer.PublicKey,
                protocolVersion: beforePostponeBPV);
            var genesis = preGenesis.Sign(
                TestUtils.GenesisProposer,
                actionEvaluator.Evaluate(preGenesis, default).Last().OutputState);
            Assert.Equal(beforePostponeBPV, genesis.ProtocolVersion);

            var blockChain = TestUtils.MakeBlockChain(
                policy,
                store,
                stateStore,
                actionLoader,
                genesisBlock: genesis);

            // Append block before state root hash postpone
            var miner = new PrivateKey();
            var action = DumbAction.Create((new Address(TestUtils.GetRandomBytes(20)), "foo"));
            var tx = Transaction.Create(0, miner, genesis.Hash, new[] { action }.ToPlainValues());
            var preBlockBeforeBump = TestUtils.ProposeNext(
                genesis,
                new[] { tx }.ToImmutableList(),
                miner.PublicKey,
                protocolVersion: beforePostponeBPV);
            var blockBeforeBump = preBlockBeforeBump.Sign(
                miner,
                actionEvaluator.Evaluate(
                    preBlockBeforeBump, genesis.StateRootHash).Last().OutputState);
            Assert.Equal(beforePostponeBPV, blockBeforeBump.ProtocolVersion);
            var commitBeforeBump = TestUtils.CreateBlockCommit(blockBeforeBump);
            blockChain.Append(blockBeforeBump, commitBeforeBump);

            // Append block after state root hash postpone - previous block is not bumped
            action = DumbAction.Create((new Address(TestUtils.GetRandomBytes(20)), "bar"));
            tx = Transaction.Create(1, miner, genesis.Hash, new[] { action }.ToPlainValues());
            var blockAfterBump1 = blockChain.ProposeBlock(
                miner,
                new[] { tx }.ToImmutableList(),
                commitBeforeBump,
                evidence: ImmutableArray<EvidenceBase>.Empty);
            Assert.Equal(
                BlockMetadata.CurrentProtocolVersion,
                blockAfterBump1.ProtocolVersion);
            var commitAfterBump1 = TestUtils.CreateBlockCommit(blockAfterBump1);
            blockChain.Append(blockAfterBump1, commitAfterBump1);
            Assert.Equal(blockBeforeBump.StateRootHash, blockAfterBump1.StateRootHash);

            // Append block after state root hash postpone - previous block is bumped
            action = DumbAction.Create((new Address(TestUtils.GetRandomBytes(20)), "baz"));
            tx = Transaction.Create(2, miner, genesis.Hash, new[] { action }.ToPlainValues());
            var blockAfterBump2 = blockChain.ProposeBlock(
                miner,
                new[] { tx }.ToImmutableList(),
                commitAfterBump1,
                evidence: ImmutableArray<EvidenceBase>.Empty);
            Assert.Equal(
                BlockMetadata.CurrentProtocolVersion,
                blockAfterBump2.ProtocolVersion);
            var commitAfterBump2 = TestUtils.CreateBlockCommit(blockAfterBump2);
            blockChain.Append(blockAfterBump2, commitAfterBump2);
            Assert.Equal(
                actionEvaluator.Evaluate(
                    blockAfterBump1, blockAfterBump1.StateRootHash).Last().OutputState,
                blockAfterBump2.StateRootHash);
        }
    }
}
