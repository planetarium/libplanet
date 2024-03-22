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
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Serilog;
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
                keys[4],
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(keys[4]).Proof);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.NotNull(_blockChain.GetBlockCommit(block1.Hash));
            Block block2 = _blockChain.ProposeBlock(
                keys[4],
                txs.ToImmutableList(),
                lastCommit: TestUtils.CreateBlockCommit(block1),
                proof: new LotMetadata(block1.Index + 1, 0, block1.Proof)
                    .Prove(keys[4]).Proof);
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
            Assert.Equal("bar", actions[1].Item);
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
            Assert.Equal("baz", actions[2].Item);
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
            Assert.Equal("qux", actions[3].Item);
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
                    .GetWorldState()
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
                var inputAccount = _blockChain
                    .GetWorldState(Assert.IsType<HashDigest<SHA256>>(e.InputState))
                    .GetAccountState(ReservedAddresses.LegacyAccount);
                var outputAccount = _blockChain
                    .GetWorldState(Assert.IsType<HashDigest<SHA256>>(e.OutputState))
                    .GetAccountState(ReservedAddresses.LegacyAccount);
                var accountDiff = AccountDiff.Create(inputAccount, outputAccount);
                Assert.Empty(accountDiff.FungibleAssetValueDiffs);
            }

            var pk = new PrivateKey();
            Transaction tx1Transfer = _fx.MakeTransaction(
                new[]
                {
                    new DumbAction(pk.Address, "foo", pk.Address, addresses[1], 10),
                    new DumbAction(addresses[0], "bar", pk.Address, addresses[2], 20),
                },
                nonce: 0,
                privateKey: pk
            );
            Transaction tx2Error = _fx.MakeTransaction(
                new[]
                {
                    // As it tries to transfer a negative value, it throws
                    // ArgumentOutOfRangeException:
                    new DumbAction(pk.Address, "foo", addresses[0], addresses[1], -5),
                },
                nonce: 1,
                privateKey: pk
            );
            Transaction tx3Transfer = _fx.MakeTransaction(
                new[]
                {
                    new DumbAction(pk.Address, "foo", pk.Address, addresses[1], 5),
                },
                nonce: 2,
                privateKey: pk
            );
            Block block3 = _blockChain.ProposeBlock(
                keys[4],
                new[] { tx1Transfer, tx2Error, tx3Transfer }.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(keys[4]).Proof);
            _blockChain.Append(block3, TestUtils.CreateBlockCommit(block3));
            var txExecution1 = getTxExecution(block3.Hash, tx1Transfer.Id);
            _logger.Verbose(nameof(txExecution1) + " = {@TxExecution}", txExecution1);
            Assert.False(txExecution1.Fail);
            var inputAccount1 = _blockChain.GetWorldState(
                Assert.IsType<HashDigest<SHA256>>(txExecution1.InputState))
                    .GetAccountState(ReservedAddresses.LegacyAccount);
            var outputAccount1 = _blockChain.GetWorldState(
                Assert.IsType<HashDigest<SHA256>>(txExecution1.OutputState))
                    .GetAccountState(ReservedAddresses.LegacyAccount);
            var accountDiff1 = AccountDiff.Create(inputAccount1, outputAccount1);

            Assert.Equal(
                (new Address[] { addresses[0], pk.Address }).ToImmutableHashSet(),
                accountDiff1.StateDiffs.Select(kv => kv.Key).ToImmutableHashSet());
            Assert.Equal(
                (new Address[] { addresses[1], addresses[2], pk.Address })
                    .ToImmutableHashSet(),
                accountDiff1.FungibleAssetValueDiffs.Select(kv => kv.Key.Item1)
                    .ToImmutableHashSet());
            Assert.Equal(
                new Text("foo"),
                outputAccount1.GetState(pk.Address));
            Assert.Equal(
                new Text("foo,bar"),
                outputAccount1.GetState(addresses[0]));
            Assert.Equal(
                DumbAction.DumbCurrency * -30,
                outputAccount1.GetBalance(pk.Address, DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 10,
                outputAccount1.GetBalance(addresses[1], DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 20,
                outputAccount1.GetBalance(addresses[2], DumbAction.DumbCurrency));

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
            var outputAccount3 = _blockChain.GetWorldState(
                Assert.IsType<HashDigest<SHA256>>(txExecution3.OutputState))
                    .GetAccountState(ReservedAddresses.LegacyAccount);
            Assert.Equal(
                DumbAction.DumbCurrency * -35,
                outputAccount3.GetBalance(pk.Address, DumbAction.DumbCurrency));
            Assert.Equal(
                DumbAction.DumbCurrency * 15,
                outputAccount3.GetBalance(addresses[1], DumbAction.DumbCurrency));
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
            var action1 = new DumbModernAction(address1, "foo");
            var action2 = new DumbModernAction(address2, "bar");
            var tx1 = Transaction.Create(0, miner, genesis.Hash, new[] { action1 }.ToPlainValues());
            var tx2 = Transaction.Create(1, miner, genesis.Hash, new[] { action2 }.ToPlainValues());
            var block1 = _blockChain.ProposeBlock(
                miner,
                new[] { tx1 }.ToImmutableList(),
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(miner).Proof);
            var commit1 = TestUtils.CreateBlockCommit(block1);
            _blockChain.Append(block1, commit1);
            var world1 = _blockChain.GetWorldState();
            Assert.False(world1.Legacy);
            Assert.Equal(
                (Text)"foo",
                world1.GetAccountState(DumbModernAction.DumbModernAddress).GetState(address1));
            var block2 = _blockChain.ProposeBlock(
                miner,
                new[] { tx2 }.ToImmutableList(),
                commit1,
                new LotMetadata(block1.Index + 1, 0, block1.Proof)
                    .Prove(miner).Proof);
            _blockChain.Append(block2, TestUtils.CreateBlockCommit(block2));
            var world2 = _blockChain.GetWorldState();
            Assert.False(world2.Legacy);
            Assert.Equal(
                (Text)"bar",
                world2.GetAccountState(DumbModernAction.DumbModernAddress).GetState(address2));
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(miner).Proof);
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
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(miner).Proof);
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
                        _ => policy.BlockAction,
                        stateStore: fx.StateStore,
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));

                var validTx = blockChain.MakeTransaction(validKey, Array.Empty<DumbAction>());
                var invalidTx = blockChain.MakeTransaction(invalidKey, Array.Empty<DumbAction>());

                var miner = new PrivateKey();

                Block block1 = blockChain.ProposeBlock(
                    miner,
                    new[] { validTx }.ToImmutableList(),
                    TestUtils.CreateBlockCommit(blockChain.Tip),
                    new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                        .Prove(miner).Proof);
                blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));

                Block block2 = blockChain.ProposeBlock(
                    miner,
                    new[] { invalidTx }.ToImmutableList(),
                    TestUtils.CreateBlockCommit(blockChain.Tip),
                    new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                        .Prove(miner).Proof);
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(privateKey).Proof);
            _blockChain.Append(block1, TestUtils.CreateBlockCommit(block1));
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            StageTransactions(txs);
            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);

            // Tx with nonce 0 is mined.
            Block block2 = _blockChain.ProposeBlock(
                privateKey,
                ImmutableList<Transaction>.Empty.Add(txs[0]),
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(privateKey).Proof);
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(privateKey).Proof);
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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(privateKey).Proof);

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
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(privateKey).Proof);

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
                            dummy.Address, "foo", dummy.Address, dummy.Address, 10),
                    }.ToPlainValues()),
                txA1 = Transaction.Create(
                    1,
                    signer,
                    genesis,
                    new DumbAction[]
                    {
                        new DumbAction(
                            dummy.Address, "bar", dummy.Address, dummy.Address, 20),
                    }.ToPlainValues());
            _blockChain.StageTransaction(txA0);
            _blockChain.StageTransaction(txA1);
            Block block = _blockChain.ProposeBlock(miner);
            IReadOnlyList<ICommittedActionEvaluation> actionEvaluations =
                _blockChain.EvaluateBlock(block);
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
                    actions: Array.Empty<DumbAction>().ToPlainValues()),
                invalidTx,
                Transaction.Create(
                    nonce: 2,
                    privateKey: txSigner,
                    genesisHash: _blockChain.Genesis.Hash,
                    actions: Array.Empty<DumbAction>().ToPlainValues()),
            }.OrderBy(tx => tx.Id);

            var metadata = new BlockMetadata(
                index: 1L,
                timestamp: DateTimeOffset.UtcNow,
                publicKey: _fx.Proposer.PublicKey,
                previousHash: _blockChain.Genesis.Hash,
                txHash: BlockContent.DeriveTxHash(txs),
                lastCommit: null,
                proof: null);
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

        [SkippableFact]
        public void DoesNotMigrateStateWithoutAction()
        {
            var policy = new BlockPolicy(
                blockAction: null,
                getMaxTransactionsBytes: _ => 50 * 1024);
            var stagePolicy = new VolatileStagePolicy();
            var fx = GetStoreFixture(policy.BlockAction);
            var renderer = new ValidatingActionRenderer();
            var actionEvaluator = new ActionEvaluator(
                _ => policy.BlockAction,
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
            PreEvaluationBlock preEvalGenesis = new BlockContent(
                new BlockMetadata(
                    protocolVersion: BlockMetadata.LegacyStateVersion,
                    index: 0L,
                    timestamp: DateTimeOffset.UtcNow,
                    miner: fx.Proposer.Address,
                    publicKey: fx.Proposer.PublicKey,
                    previousHash: null,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null,
                    proof: null),
                transactions: txs).Propose();
            var genesis = preEvalGenesis.Sign(
                fx.Proposer,
                BlockChain.DetermineGenesisStateRootHash(actionEvaluator, preEvalGenesis, out _));
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
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(fx.Proposer).Proof);
            blockChain.Append(emptyBlock, TestUtils.CreateBlockCommit(emptyBlock));
            Assert.True(blockChain.GetWorldState().Legacy);
        }
    }
}
