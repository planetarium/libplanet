using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
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

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void Append()
        {
            (Address[] addresses, Transaction<DumbAction>[] txs) =
                MakeFixturesForAppendTests();
            var genesis = _blockChain.Genesis;

            Assert.Equal(1, _blockChain.Count);
            Assert.Empty(_renderer.ActionRecords);
            Assert.Empty(_renderer.BlockRecords);
            var block1 = TestUtils.MineNext(
                    genesis,
                    miner: addresses[4],
                    difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                    blockInterval: TimeSpan.FromSeconds(10))
                .AttachStateRootHash(_fx.StateStore, _policy.BlockAction);
            _blockChain.Append(block1);
            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                txs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).AttachStateRootHash(_fx.StateStore, _policy.BlockAction);
            _blockChain.Append(block2);

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
        }

        [Fact]
        public void AppendThrowsInvalidBlockBytesLengthException()
        {
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
                heavyTxs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            );
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
            PrivateKey signer = null;
            int nonce = 0;
            int maxTxs = _blockChain.Policy.MaxTransactionsPerBlock;
            var manyTxs = new List<Transaction<DumbAction>>();
            for (int i = 0; i <= maxTxs; i++)
            {
                Transaction<DumbAction> heavyTx = _fx.MakeTransaction(
                    nonce: nonce,
                    privateKey: signer);
                manyTxs.Add(heavyTx);
            }

            Assert.True(manyTxs.Count > maxTxs);

            var block1 = TestUtils.MineNext(
                _blockChain.Genesis,
                manyTxs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            );
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

            var block = TestUtils.MineNext(
                genesis,
                difficulty: 1024,
                blockInterval: TimeSpan.FromSeconds(10));
            Assert.Throws<ArgumentException>(() =>
                _blockChain.Append(
                    block,
                    DateTimeOffset.UtcNow,
                    evaluateActions: false,
                    renderBlocks: true,
                    renderActions: true
                )
            );
            Assert.False(_blockChain.ContainsBlock(block.Hash));
            Assert.Empty(_renderer.ActionRecords);

            _blockChain.Append(
                block,
                DateTimeOffset.UtcNow,
                evaluateActions: false,
                renderBlocks: true,
                renderActions: false
            );
            Assert.Equal(block, _blockChain.Tip);
            Assert.False(_blockChain.StateStore.ContainsBlockStates(block.Hash));
            Assert.Empty(_renderer.ActionRecords);
        }

        [Fact]
        public async Task AppendWhenActionEvaluationFailed()
        {
            var policy = new NullPolicy<ThrowException>();
            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            var renderer = new RecordingActionRenderer<ThrowException>();
            BlockChain<ThrowException> blockChain =
                TestUtils.MakeBlockChain(policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new ThrowException { ThrowOnExecution = true };
            blockChain.MakeTransaction(privateKey, new[] { action });

            renderer.ResetRecords();
            await blockChain.MineBlock(_fx.Address1);

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

            bool IsSignerValid(Transaction<DumbAction> tx, BlockChain<DumbAction> chain)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress);
            }

            var policy = new BlockPolicy<DumbAction>(doesTransactionFollowPolicy: IsSignerValid);
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
                    new[] { validTx },
                    miner: miner,
                    difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                    blockInterval: TimeSpan.FromSeconds(10)
                ).AttachStateRootHash(blockChain.StateStore, policy.BlockAction);

                blockChain.Append(block1);

                Block<DumbAction> block2 = TestUtils.MineNext(
                    block1,
                    new[] { invalidTx },
                    miner: miner,
                    difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                    blockInterval: TimeSpan.FromSeconds(10)
                ).AttachStateRootHash(blockChain.StateStore, policy.BlockAction);

                Assert.Throws<TxViolatingBlockPolicyException>(() => blockChain.Append(block2));
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
                    miner: addresses[4],
                    difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                    blockInterval: TimeSpan.FromSeconds(10))
                .AttachStateRootHash(_fx.StateStore, _policy.BlockAction);
            _blockChain.Append(block1);
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            StageTransactions(txs);

            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block2 = TestUtils.MineNext(
                block1,
                ImmutableHashSet<Transaction<DumbAction>>.Empty.Add(txs[0]),
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).AttachStateRootHash(_fx.StateStore, _policy.BlockAction);
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
                ImmutableHashSet<Transaction<DumbAction>>.Empty.Add(txs[1]),
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain),
                blockInterval: TimeSpan.FromSeconds(10)
            ).AttachStateRootHash(_fx.StateStore, _policy.BlockAction);
            _blockChain.Append(block3);
            Assert.Empty(_blockChain.GetStagedTransactionIds());
        }

        [Fact]
        public void AppendValidatesBlock()
        {
            var blockChain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(
                    new InvalidBlockDifficultyException(string.Empty)),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);
            Assert.Throws<InvalidBlockDifficultyException>(
                () => blockChain.Append(_fx.Block1));
        }

        [Fact]
        public async Task AppendWithdrawTxsWithExpiredNoncesFromStage()
        {
            var signerA = new PrivateKey();
            var signerB = new PrivateKey();
            HashDigest<SHA256> genesis = _blockChain.Genesis.Hash;
            DumbAction[] emptyActions = new DumbAction[0];
            Transaction<DumbAction>
                txA0 = Transaction<DumbAction>.Create(0, signerA, genesis, emptyActions),
                txA1 = Transaction<DumbAction>.Create(1, signerA, genesis, emptyActions);
            _blockChain.StageTransaction(txA0);
            _blockChain.StageTransaction(txA1);
            Block<DumbAction> block = await _blockChain.MineBlock(
                signerA.ToAddress(),
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
