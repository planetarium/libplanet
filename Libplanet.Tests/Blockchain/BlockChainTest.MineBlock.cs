using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public async void MineBlock()
        {
            Func<long, int> getMaxBlockBytes = _blockChain.Policy.GetMaxBlockBytes;
            Assert.Equal(1, _blockChain.Count);
            Assert.Equal((Text)$"{TestUtils.GenesisMinerAddress}", _blockChain.GetState(default));

            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);
            block.Validate(DateTimeOffset.UtcNow);
            Assert.True(_blockChain.ContainsBlock(block.Hash));
            Assert.Equal(2, _blockChain.Count);
            Assert.True(block.BytesLength <= getMaxBlockBytes(block.Index));
            Assert.Equal(
                (Text)$"{TestUtils.GenesisMinerAddress},{_fx.Address1}",
                _blockChain.GetState(default)
            );

            Block<DumbAction> anotherBlock = await _blockChain.MineBlock(_fx.Address2);
            anotherBlock.Validate(DateTimeOffset.UtcNow);
            Assert.True(_blockChain.ContainsBlock(anotherBlock.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(anotherBlock.BytesLength <= getMaxBlockBytes(anotherBlock.Index));
            Assert.Equal(
                (Text)$"{TestUtils.GenesisMinerAddress},{_fx.Address1},{_fx.Address2}",
                _blockChain.GetState(default)
            );

            Block<DumbAction> block3 = await _blockChain.MineBlock(_fx.Address3, append: false);
            block3.Validate(DateTimeOffset.UtcNow);
            Assert.False(_blockChain.ContainsBlock(block3.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(block3.BytesLength <= getMaxBlockBytes(block3.Index));
            Assert.Equal(
                (Text)$"{TestUtils.GenesisMinerAddress},{_fx.Address1},{_fx.Address2}",
                _blockChain.GetState(default)
            );

            // Tests if MineBlock() method automatically fits the number of transactions according
            // to the right size.
            DumbAction[] manyActions =
                Enumerable.Repeat(new DumbAction(default, "_"), 200).ToArray();
            PrivateKey signer = null;
            int nonce = 0;
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
                _blockChain.StageTransaction(heavyTx);
            }

            Block<DumbAction> block4 = await _blockChain.MineBlock(_fx.Address3, append: false);
            block4.Validate(DateTimeOffset.UtcNow);
            Assert.False(_blockChain.ContainsBlock(block4.Hash));
            _logger.Debug(
                $"{nameof(block4)}.{nameof(block4.BytesLength)} = {0}",
                block4.BytesLength
            );
            _logger.Debug(
                $"{nameof(getMaxBlockBytes)}({nameof(block4)}.{nameof(block4.Index)}) = {0}",
                getMaxBlockBytes(block4.Index)
            );
            Assert.True(block4.BytesLength <= getMaxBlockBytes(block4.Index));
            Assert.Equal(3, block4.Transactions.Count());
            Assert.Equal(
                (Text)$"{TestUtils.GenesisMinerAddress},{_fx.Address1},{_fx.Address2}",
                _blockChain.GetState(default)
            );
        }

        [Fact]
        public async void MineBlockWithTxBatchSize()
        {
            List<PrivateKey> privateKeys = Enumerable.Range(0, 3)
                .Select(_ => new PrivateKey()).ToList();
            Assert.Equal(1, _blockChain.Count);
            _blockChain.MakeTransaction(privateKeys[0], new DumbAction[0]);
            _blockChain.MakeTransaction(privateKeys[0], new DumbAction[0]);
            _blockChain.MakeTransaction(privateKeys[0], new DumbAction[0]);
            _blockChain.MakeTransaction(privateKeys[1], new DumbAction[0]);
            _blockChain.MakeTransaction(privateKeys[1], new DumbAction[0]);
            _blockChain.MakeTransaction(privateKeys[2], new DumbAction[0]);

            Block<DumbAction> block =
                await _blockChain.MineBlock(_fx.Address1, maxTransactions: 1);
            block.Validate(DateTimeOffset.UtcNow);
            Assert.Single(block.Transactions);
            Assert.Equal(5, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block2 = await _blockChain.MineBlock(
                _fx.Address2, DateTimeOffset.UtcNow, maxTransactions: 2);
            block2.Validate(DateTimeOffset.UtcNow);
            Assert.Equal(2, block2.Transactions.Count());
            Assert.Equal(3, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block3 = await _blockChain.MineBlock(
                _fx.Address3, append: false, maxTransactions: 4);
            block3.Validate(DateTimeOffset.UtcNow);
            Assert.Equal(3, block3.Transactions.Count());
            Assert.Equal(3, _blockChain.GetStagedTransactionIds().Count);

            _blockChain.Append(block3);
            Assert.Equal(0, _blockChain.GetStagedTransactionIds().Count);
        }

        [Fact]
        public async void MineBlockWithPendingTxs()
        {
            var keys = new[] { new PrivateKey(), new PrivateKey(), new PrivateKey() };

            var txs = new[]
            {
                Transaction<DumbAction>.Create(
                    0,
                    keys[0],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(_fx.Address1, "1a"), new DumbAction(_fx.Address2, "1b") }
                ),
                Transaction<DumbAction>.Create(
                    1,
                    keys[0],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(_fx.Address3, "2a"), new DumbAction(_fx.Address4, "2b") }
                ),

                // pending txs1
                Transaction<DumbAction>.Create(
                    1,
                    keys[1],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(_fx.Address5, "3a"), new DumbAction(_fx.Address1, "3b") }
                ),
                Transaction<DumbAction>.Create(
                    2,
                    keys[1],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(_fx.Address2, "4a"), new DumbAction(_fx.Address3, "4b") }
                ),

                // pending txs2
                Transaction<DumbAction>.Create(
                    0,
                    keys[2],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(_fx.Address4, "5a"), new DumbAction(_fx.Address5, "5b") }
                ),
                Transaction<DumbAction>.Create(
                    2,
                    keys[2],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(_fx.Address1, "6a"), new DumbAction(_fx.Address2, "6b") }
                ),
            };

            StageTransactions(txs);

            Assert.Null(_blockChain.GetState(_fx.Address1));
            Assert.Null(_blockChain.GetState(_fx.Address2));
            Assert.Null(_blockChain.GetState(_fx.Address3));
            Assert.Null(_blockChain.GetState(_fx.Address4));
            Assert.Null(_blockChain.GetState(_fx.Address5));

            foreach (Transaction<DumbAction> tx in txs)
            {
                Assert.Null(_blockChain.GetTxExecution(_blockChain.Genesis.Hash, tx.Id));
            }

            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);

            Assert.True(_blockChain.ContainsBlock(block.Hash));
            Assert.Contains(txs[0], block.Transactions);
            Assert.Contains(txs[1], block.Transactions);
            Assert.DoesNotContain(txs[2], block.Transactions);
            Assert.DoesNotContain(txs[3], block.Transactions);
            Assert.Contains(txs[4], block.Transactions);
            Assert.DoesNotContain(txs[5], block.Transactions);
            IImmutableSet<TxId> txIds = _blockChain.GetStagedTransactionIds();
            Assert.Contains(txs[2].Id, txIds);
            Assert.Contains(txs[3].Id, txIds);

            Assert.Equal(new Integer(1), _blockChain.GetState(_fx.Address1));
            Assert.Equal(new Text("1b"), _blockChain.GetState(_fx.Address2));
            Assert.Equal(new Text("2a"), _blockChain.GetState(_fx.Address3));
            Assert.IsType<Text>(_blockChain.GetState(_fx.Address4));
            Assert.Equal(
                new HashSet<string> { "2b", "5a" },
                ((string)(Text)_blockChain.GetState(_fx.Address4)).Split(new[] { ',' }).ToHashSet()
            );
            Assert.Equal(new Text("5b"), _blockChain.GetState(_fx.Address5));

            foreach (Transaction<DumbAction> tx in new[] { txs[0], txs[1], txs[4] })
            {
                TxExecution txx = _blockChain.GetTxExecution(block.Hash, tx.Id);
                _logger.Debug(
                    nameof(_blockChain.GetTxExecution) + "({Hash}, {Id}) = {TxExecution}",
                    block.Hash,
                    tx.Id,
                    txx
                );
                Assert.IsType<TxSuccess>(txx);
                Assert.Equal(block.Hash, txx.BlockHash);
                Assert.Equal(tx.Id, txx.TxId);
                Assert.Null(_blockChain.GetTxExecution(_blockChain.Genesis.Hash, tx.Id));
            }
        }

        [Fact]
        public async void MineBlockWithPolicyViolationTx()
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
                var block = await blockChain.MineBlock(miner);

                var txs = block.Transactions.ToHashSet();

                Assert.Contains(validTx, txs);
                Assert.DoesNotContain(invalidTx, txs);

                Assert.Empty(blockChain.GetStagedTransactionIds());
            }
        }

        [Theory]
        [InlineData(3)]
        [InlineData(2)]
        [InlineData(1)]
        public async void MineBlockWithReverseNonces(int maxTxs)
        {
            var key = new PrivateKey();
            var txs = new[]
            {
                Transaction<DumbAction>.Create(
                    2,
                    key,
                    _blockChain.Genesis.Hash,
                    new DumbAction[0]
                ),
                Transaction<DumbAction>.Create(
                    1,
                    key,
                    _blockChain.Genesis.Hash,
                    new DumbAction[0]
                ),
                Transaction<DumbAction>.Create(
                    0,
                    key,
                    _blockChain.Genesis.Hash,
                    new DumbAction[0]
                ),
            };
            StageTransactions(txs);
            Block<DumbAction> block = await _blockChain.MineBlock(
                _fx.Address1,
                maxTransactions: maxTxs
            );
            Assert.Equal(maxTxs, block.Transactions.Count());
        }

        [Fact]
        public async Task MineBlockWithLowerNonces()
        {
            var key = new PrivateKey();
            StageTransactions(
                new[]
                {
                    Transaction<DumbAction>.Create(
                        0,
                        key,
                        _blockChain.Genesis.Hash,
                        new DumbAction[0]
                    ),
                }
            );
            await _blockChain.MineBlock(_fx.Address1);

            // Trying to mine with lower nonce (0) than expected.
            StageTransactions(
                new[]
                {
                    Transaction<DumbAction>.Create(
                        0,
                        key,
                        _blockChain.Genesis.Hash,
                        new DumbAction[0]
                    ),
                }
            );
            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);

            Assert.Empty(block.Transactions);
            Assert.Empty(_blockChain.ListStagedTransactions());
        }

        [Fact]
        public async void MineBlockWithBlockAction()
        {
            var privateKey1 = new PrivateKey();
            var address1 = privateKey1.ToAddress();

            var privateKey2 = new PrivateKey();
            var address2 = privateKey2.ToAddress();

            var blockAction = new DumbAction(address1, "foo");
            BlockPolicy<DumbAction> policy = new BlockPolicy<DumbAction>(blockAction);

            var blockChain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);

            blockChain.MakeTransaction(privateKey2, new[] { new DumbAction(address2, "baz") });
            await blockChain.MineBlock(address1);

            var state1 = blockChain.GetState(address1);
            var state2 = blockChain.GetState(address2);

            Assert.Equal(0, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo", state1);
            Assert.Equal((Text)"baz", state2);

            blockChain.MakeTransaction(privateKey1, new[] { new DumbAction(address1, "bar") });
            await blockChain.MineBlock(address1);

            state1 = blockChain.GetState(address1);
            state2 = blockChain.GetState(address2);

            Assert.Equal(1, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo,bar,foo", state1);
            Assert.Equal((Text)"baz", state2);
        }

        [Fact]
        private async void AbortMining()
        {
            // This test makes 2 different policies even it's abnormal
            // because to make a mining task run forever just for testing.
            var policy1 = new NullPolicy<DumbAction>(difficulty: 1);
            var policy2 = new NullPolicy<DumbAction>(difficulty: -1);
            StoreFixture fx1 = new DefaultStoreFixture(blockAction: policy1.BlockAction);
            StoreFixture fx2 = new DefaultStoreFixture(blockAction: policy2.BlockAction);
            var chain1 = new BlockChain<DumbAction>(
                policy1,
                new VolatileStagePolicy<DumbAction>(),
                fx1.Store,
                fx1.StateStore,
                fx1.GenesisBlock);
            var renderer2 = new RecordingActionRenderer<DumbAction>();
            var chain2 = new BlockChain<DumbAction>(
                policy2,
                new VolatileStagePolicy<DumbAction>(),
                fx2.Store,
                fx1.StateStore,
                fx2.GenesisBlock,
                renderers: new[] { renderer2 });
            Block<DumbAction> genesis = fx1.GenesisBlock;

            try
            {
                Block<DumbAction> block = await chain1.MineBlock(fx1.Address1);
                renderer2.ResetRecords();

                Task miningTask = chain2.MineBlock(fx2.Address1);
                chain2.Append(block);

                IReadOnlyList<RenderRecord<DumbAction>.Block> records = renderer2.BlockRecords;
                Assert.Equal(2, records.Count);
                foreach (RenderRecord<DumbAction>.Block record in records)
                {
                    Assert.Equal(genesis, record.OldTip);
                    Assert.Equal(block, record.NewTip);
                }

                await Task.Delay(100);
                Assert.True(miningTask.IsCanceled);
            }
            finally
            {
                fx1.Dispose();
                fx2.Dispose();
            }
        }

        [Fact]
        private async Task IgnoreLowerNonceTxsAndMine()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsA);
            Block<DumbAction> b1 = await _blockChain.MineBlock(address);
            Assert.Equal(txsA, b1.Transactions);

            var txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsB);

            // Mine only txs having higher or equal with nonce than expected nonce.
            Block<DumbAction> b2 = await _blockChain.MineBlock(address);
            Assert.Single(b2.Transactions);
            Assert.Contains(txsB[3], b2.Transactions);
        }
    }
}
