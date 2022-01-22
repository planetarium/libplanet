using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
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
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using xRetry;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public async Task MineBlock()
        {
            DumbAction[] fewActions =
                Enumerable.Repeat(new DumbAction(default, "_"), 2).ToArray();

            var signingKey = new PrivateKey();
            Transaction<DumbAction> lightTx = _fx.MakeTransaction(
                    fewActions,
                    nonce: 10, // Nonce too high - won't add to block
                    privateKey: signingKey);
            _blockChainMinTx.StageTransaction(lightTx);

            Func<long, long> getMaxBlockBytes = _blockChain.Policy.GetMaxBlockBytes;
            Assert.Equal(1, _blockChain.Count);
            AssertBencodexEqual((Text)$"{GenesisMiner.ToAddress()}", _blockChain.GetState(default));

            var minerA = new PrivateKey();
            Block<DumbAction> block = await _blockChain.MineBlock(minerA);
            Assert.True(_blockChain.ContainsBlock(block.Hash));
            Assert.Equal(2, _blockChain.Count);
            Assert.True(block.MarshalBlock().EncodingLength <= getMaxBlockBytes(block.Index));
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()}",
                _blockChain.GetState(default)
            );

            var minerB = new PrivateKey();
            Block<DumbAction> anotherBlock = await _blockChain.MineBlock(minerB);
            Assert.True(_blockChain.ContainsBlock(anotherBlock.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(
                anotherBlock.MarshalBlock().EncodingLength <= getMaxBlockBytes(anotherBlock.Index)
            );
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()},{minerB.ToAddress()}",
                _blockChain.GetState(default)
            );

            Block<DumbAction> block3 =
                await _blockChain.MineBlock(new PrivateKey(), append: false);
            Assert.False(_blockChain.ContainsBlock(block3.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(block3.MarshalBlock().EncodingLength <= getMaxBlockBytes(block3.Index));
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()},{minerB.ToAddress()}",
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

            Block<DumbAction> block4 =
                await _blockChain.MineBlock(new PrivateKey(), append: false);
            Assert.False(_blockChain.ContainsBlock(block4.Hash));
            _logger.Debug(
                $"{nameof(block4)}: {0} bytes",
                block4.MarshalBlock().EncodingLength
            );
            _logger.Debug(
                $"{nameof(getMaxBlockBytes)}({nameof(block4)}.{nameof(block4.Index)}) = {0}",
                getMaxBlockBytes(block4.Index)
            );
            Assert.True(block4.MarshalBlock().EncodingLength <= getMaxBlockBytes(block4.Index));
            Assert.Equal(3, block4.Transactions.Count());
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()},{minerB.ToAddress()}",
                _blockChain.GetState(default)
            );
        }

        [Fact]
        public async Task MineBlockWithTxBatchSize()
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

            HashAlgorithmType hashAlgorithm = HashAlgorithmType.Of<SHA256>();
            Block<DumbAction> block =
                await _blockChain.MineBlock(privateKeys[0], maxTransactions: 1);
            Assert.Single(block.Transactions);
            Assert.Equal(5, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block2 = await _blockChain.MineBlock(
                privateKeys[1], DateTimeOffset.UtcNow, maxTransactions: 2);
            Assert.Equal(2, block2.Transactions.Count());
            Assert.Equal(3, _blockChain.GetStagedTransactionIds().Count);

            Block<DumbAction> block3 = await _blockChain.MineBlock(
                privateKeys[2], append: false, maxTransactions: 4);
            Assert.Equal(3, block3.Transactions.Count());
            Assert.Equal(3, _blockChain.GetStagedTransactionIds().Count);

            _blockChain.Append(block3);
            Assert.Equal(0, _blockChain.GetStagedTransactionIds().Count);
        }

        [Fact]
        public async Task MineBlockWithInsufficientTxs()
        {
            // Tests if MineBlock() method will throw an exception if less than the minimum
            // transactions are present
            await Assert.ThrowsAsync<OperationCanceledException>(
                async () => await _blockChainMinTx.MineBlock(new PrivateKey())
            );
        }

        [Fact]
        public async Task MineBlockWithPendingTxs()
        {
            var keys = new[] { new PrivateKey(), new PrivateKey(), new PrivateKey() };
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            var keyD = new PrivateKey();
            var keyE = new PrivateKey();
            var addrA = keyA.ToAddress();
            var addrB = keyB.ToAddress();
            var addrC = keyC.ToAddress();
            var addrD = keyD.ToAddress();
            var addrE = keyE.ToAddress();

            var txs = new[]
            {
                Transaction<DumbAction>.Create(
                    0,
                    keys[0],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(addrA, "1a"), new DumbAction(addrB, "1b") }
                ),
                Transaction<DumbAction>.Create(
                    1,
                    keys[0],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(addrC, "2a"), new DumbAction(addrD, "2b") }
                ),

                // pending txs1
                Transaction<DumbAction>.Create(
                    1,
                    keys[1],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(addrE, "3a"), new DumbAction(addrA, "3b") }
                ),
                Transaction<DumbAction>.Create(
                    2,
                    keys[1],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(addrB, "4a"), new DumbAction(addrC, "4b") }
                ),

                // pending txs2
                Transaction<DumbAction>.Create(
                    0,
                    keys[2],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(addrD, "5a"), new DumbAction(addrE, "5b") }
                ),
                Transaction<DumbAction>.Create(
                    2,
                    keys[2],
                    _blockChain.Genesis.Hash,
                    new[] { new DumbAction(addrA, "6a"), new DumbAction(addrB, "6b") }
                ),
            };

            StageTransactions(txs);

            Assert.Null(_blockChain.GetState(addrA));
            Assert.Null(_blockChain.GetState(addrB));
            Assert.Null(_blockChain.GetState(addrC));
            Assert.Null(_blockChain.GetState(addrD));
            Assert.Null(_blockChain.GetState(addrE));

            foreach (Transaction<DumbAction> tx in txs)
            {
                Assert.Null(_blockChain.GetTxExecution(_blockChain.Genesis.Hash, tx.Id));
            }

            Block<DumbAction> block = await _blockChain.MineBlock(keyA);

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

            Assert.Equal(new Integer(1), _blockChain.GetState(addrA));
            Assert.Equal(new Text("1b"), _blockChain.GetState(addrB));
            Assert.Equal(new Text("2a"), _blockChain.GetState(addrC));
            Assert.IsType<Text>(_blockChain.GetState(addrD));
            Assert.Equal(
                new HashSet<string> { "2b", "5a" },
                ((string)(Text)_blockChain.GetState(addrD)).Split(new[] { ',' }).ToHashSet()
            );
            Assert.Equal(new Text("5b"), _blockChain.GetState(addrE));

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
        public async Task MineBlockWithPolicyViolationTx()
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
            using (var fx = new MemoryStoreFixture())
            {
                var blockChain = new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    fx.Store,
                    fx.StateStore,
                    fx.GenesisBlock);

                var validTx = blockChain.MakeTransaction(validKey, new DumbAction[] { });
                var invalidTx = blockChain.MakeTransaction(invalidKey, new DumbAction[] { });

                var miner = new PrivateKey();
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
        public async Task MineBlockWithReverseNonces(int maxTxs)
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
                new PrivateKey(),
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
            await _blockChain.MineBlock(new PrivateKey());

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
            Block<DumbAction> block = await _blockChain.MineBlock(new PrivateKey());

            Assert.Empty(block.Transactions);
            Assert.Empty(_blockChain.ListStagedTransactions());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));
        }

        [Fact]
        public async Task MineBlockWithBlockAction()
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
            await blockChain.MineBlock(privateKey1);

            var state1 = blockChain.GetState(address1);
            var state2 = blockChain.GetState(address2);

            Assert.Equal(0, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo", state1);
            Assert.Equal((Text)"baz", state2);

            blockChain.MakeTransaction(privateKey1, new[] { new DumbAction(address1, "bar") });
            await blockChain.MineBlock(privateKey1);

            state1 = blockChain.GetState(address1);
            state2 = blockChain.GetState(address2);

            Assert.Equal(1, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo,bar,foo", state1);
            Assert.Equal((Text)"baz", state2);
        }

        [Fact]
        public async Task MineBlockWithMaxTransactions()
        {
            Assert.Equal(1, _blockChain.Count);

            const int numKeys = 3;
            const int redundancy = 16;
            const int maxTransactions = 16;

            Random random = new Random();
            List<PrivateKey> privateKeys = Enumerable.Range(0, numKeys)
                .Select(_ => new PrivateKey()).ToList();
            List<PrivateKey> shuffledKeysWithRedundancy = Enumerable.Range(0, numKeys)
                .Select(_ => redundancy)
                .SelectMany(
                    (int count, int index) => Enumerable.Range(0, count).Select(_ => index))
                .OrderBy(_ => random.Next())
                .Select(index => privateKeys[index]).ToList();

            foreach (var key in shuffledKeysWithRedundancy)
            {
                _blockChain.MakeTransaction(key, new DumbAction[0]);
            }

            Assert.True(
                _blockChain.Policy.GetMaxTransactionsPerBlock(_blockChain.Count) > maxTransactions
            );

            // These assume there will be enough time to mine as many transactions as
            // possible.
            Block<DumbAction> block;
            block = await _blockChain.MineBlock(new PrivateKey(), append: false);
            Assert.True(block.Transactions.Count > maxTransactions);
            block = await _blockChain.MineBlock(
                new PrivateKey(), append: false, maxTransactions: maxTransactions);
            Assert.Equal(block.Transactions.Count, maxTransactions);
        }

        [Fact]
        public async Task MineBlockWithMaxTransactionsPerSigner()
        {
            Assert.Equal(1, _blockChain.Count);

            const int numKeys = 3;
            const int redundancy = 16;
            const int maxTransactions = 16;
            const int maxTransactionsPerSigner = 4;

            Random random = new Random();
            List<PrivateKey> privateKeys = Enumerable.Range(0, numKeys)
                .Select(_ => new PrivateKey()).ToList();
            List<PrivateKey> shuffledKeysWithRedundancy = Enumerable.Range(0, numKeys)
                .Select(_ => redundancy)
                .SelectMany(
                    (int count, int index) => Enumerable.Range(0, count).Select(_ => index))
                .OrderBy(_ => random.Next())
                .Select(index => privateKeys[index]).ToList();

            foreach (var key in shuffledKeysWithRedundancy)
            {
                _blockChain.MakeTransaction(key, new DumbAction[0]);
            }

            Assert.True(
                _blockChain.Policy.GetMaxTransactionsPerBlock(_blockChain.Count) > maxTransactions
            );

            // These assume there will be enough time to mine as many transactions as
            // possible.
            Block<DumbAction> block = await _blockChain.MineBlock(
                new PrivateKey(),
                append: false,
                maxTransactions: maxTransactions,
                maxTransactionsPerSigner: maxTransactionsPerSigner);
            foreach (var group in block.Transactions.GroupBy(tx => tx.Signer))
            {
                Assert.Equal(group.Count(), maxTransactionsPerSigner);
            }
        }

        [Fact]
        public async Task MineBlockWithTxPriority()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            Address a = keyA.ToAddress();
            Address b = keyB.ToAddress();
            Address c = keyC.ToAddress();
            _logger.Verbose("Address {Name}: {Address}", nameof(a), a);
            _logger.Verbose("Address {Name}: {Address}", nameof(b), b);
            _logger.Verbose("Address {Name}: {Address}", nameof(c), c);

            Transaction<DumbAction>[] txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyA))
                .ToArray();
            Transaction<DumbAction>[] txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyB))
                .ToArray();
            Transaction<DumbAction>[] txsC = Enumerable.Range(0, 2)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyC))
                .ToArray();
            var random = new Random();
            Transaction<DumbAction>[] txs =
                txsA.Concat(txsB).Concat(txsC).Shuffle(random).ToArray();
            Assert.Empty(_blockChain.ListStagedTransactions());
            StageTransactions(txs);

            IComparer<Transaction<DumbAction>> txPriority =
                Comparer<Transaction<DumbAction>>.Create((tx1, tx2) =>
                {
                    int rank1 = tx1.Signer.Equals(a) ? 0 : (tx1.Signer.Equals(b) ? 1 : 2);
                    int rank2 = tx2.Signer.Equals(a) ? 0 : (tx2.Signer.Equals(b) ? 1 : 2);
                    return rank1.CompareTo(rank2);
                });

            Block<DumbAction> block = await _blockChain.MineBlock(
                new PrivateKey(),
                maxTransactions: 5,
                maxTransactionsPerSigner: 3,
                txPriority: txPriority
            );
            Assert.Equal(5, block.Transactions.Count);
            Assert.Equal(
                txsA.Concat(txsB.Take(2)).Select(tx => tx.Id).ToHashSet(),
                block.Transactions.Select(tx => tx.Id).ToHashSet()
            );
        }

        [RetryFact]
        public async Task AbortMining()
        {
            // Pre-mined genesis 7ae04b6fc0a3410eef40341129b19030ea2e6a0b922e5ae7cc96ab19109495c4:
            var genesisContent = new BlockContent<DumbAction>
            {
                Miner = GenesisMiner.ToAddress(),
                ProtocolVersion = 2,
                PublicKey = GenesisMiner.PublicKey,
                Timestamp = new DateTimeOffset(2018, 11, 29, 0, 0, 0, TimeSpan.Zero),
            };
            var preEvalGenesis = new PreEvaluationBlock<DumbAction>(
                genesisContent,
                HashAlgorithmType.Of<SHA256>(),
                new Nonce(new byte[] { 0x01, 0, 0, 0 })
            );
            var genesis = new Block<DumbAction>(
                preEvalGenesis,
                HashDigest<SHA256>.FromString(
                    "1b16b1df538ba12dc3f97edbb85caa7050d46c148134290feba80f8236c83db9"
                ),
                ByteUtil.ParseHex(
                    "30440220453709513c8ca92d3b90f5dd97ecac9c0f1af4b9aa8553ffe4d1b3f7887746" +
                    "8e02206a484c56b9a7c2b6b7c6b26627714d6e14413dce1f3cc1291d48920d82dacb9f"
                ).ToImmutableArray()
            );

            // Pre-mined block #1 ae44df4319711de80cc711668f56bfde9e5d958cc2296b63056c1b9c3df62d51:
            var block1Content = new BlockContent<DumbAction>
            {
                ProtocolVersion = 2,
                Index = 1,
                Miner = GenesisMiner.ToAddress(),
                PublicKey = GenesisMiner.PublicKey,
                Timestamp = DateTimeOffset.ParseExact(
                    "2021-10-25T07:54:53.512280Z",
                    "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                    CultureInfo.InvariantCulture
                ),
                Difficulty = 100_000_000,
                TotalDifficulty = 100_000_000,
                PreviousHash = genesis.Hash,
            };
            var preEvalBlock1 = new PreEvaluationBlock<DumbAction>(
                block1Content,
                HashAlgorithmType.Of<SHA256>(),
                new Nonce(new byte[] { 0x0a, 0x24, 0xc6, 0x92, 0xde, 0xfa, 0x5c, 0x64, 0xd0, 0x26 })
            );
            var block = new Block<DumbAction>(
                preEvalBlock1,
                HashDigest<SHA256>.FromString(
                    "1b16b1df538ba12dc3f97edbb85caa7050d46c148134290feba80f8236c83db9"
                ),
                ByteUtil.ParseHex(
                    "304502210083898c414d6ab45d380ae56d7f5cc63a6c102354a8c59904942e47a7b3fa9" +
                    "1e2022055ab1c19a11ed980165ce472dac134db580448c5bffb51d0e8dcb4cb5bc71481"
                ).ToImmutableArray()
            );

            var renderer = new RecordingActionRenderer<DumbAction>();
            var policy = new NullBlockPolicy<DumbAction>(difficulty: 100_000_000);
            StoreFixture fx = new MemoryStoreFixture(policy.BlockAction);
            using (fx)
            {
                var chain = new BlockChain<DumbAction>(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    fx.Store,
                    fx.StateStore,
                    genesis,
                    renderers: new[] { renderer }
                );
                renderer.ResetRecords();

                Task miningTask = chain.MineBlock(new PrivateKey());

                // Waits 0.5 seconds for the miningTask to start watching if the tip changes:
                await Task.Delay(500);

                chain.Append(block);

                IReadOnlyList<RenderRecord<DumbAction>.Block> records = renderer.BlockRecords;
                Assert.Equal(2, records.Count);
                foreach (RenderRecord<DumbAction>.Block record in records)
                {
                    Assert.Equal(genesis, record.OldTip);
                    Assert.Equal(block, record.NewTip);
                }

                // Waits about 10 seconds for the task to receive the cancellation signal:
                await AssertThatEventually(() => miningTask.IsCanceled, 10_000);
            }
        }

        [Fact]
        public async Task IgnoreLowerNonceTxsAndMine()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsA);
            Block<DumbAction> b1 = await _blockChain.MineBlock(new PrivateKey());
            Assert.Equal(
                txsA,
                ActionEvaluator<DumbAction>.OrderTxsForEvaluation(
                    b1.ProtocolVersion,
                    b1.Transactions,
                    b1.PreEvaluationHash
                )
            );

            var txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsB);

            // Mine only txs having higher or equal with nonce than expected nonce.
            Block<DumbAction> b2 = await _blockChain.MineBlock(new PrivateKey());
            Assert.Single(b2.Transactions);
            Assert.Contains(txsB[3], b2.Transactions);
        }

        [Fact]
        public async Task IgnoreDuplicatedNonceTxs()
        {
            var privateKey = new PrivateKey();
            var txs = Enumerable.Range(0, 3)
                .Select(_ => _fx.MakeTransaction(
                    nonce: 0,
                    privateKey: privateKey,
                    timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txs);
            Block<DumbAction> b = await _blockChain.MineBlock(privateKey, append: false);
            _blockChain.Append(b);

            Assert.Single(b.Transactions);
            Assert.Contains(b.Transactions.Single(), txs);
        }

        [Fact]
        public void GatherTransactionsToMine()
        {
            // TODO: We test more properties of GatherTransactionsToMine() method:
            //       - if transactions are cut off if they exceed GetMaxBlockBytes()
            //       - if transactions with already consumed nonces are excluded
            //       - if transactions with greater nonces than unconsumed nonces are excluded
            //       - if transactions are cut off if the process exceeds the timeout (4 sec)
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            Address a = keyA.ToAddress();
            Address b = keyB.ToAddress();
            Address c = keyC.ToAddress();
            _logger.Verbose("Address {Name}: {Address}", nameof(a), a);
            _logger.Verbose("Address {Name}: {Address}", nameof(b), b);
            _logger.Verbose("Address {Name}: {Address}", nameof(c), c);

            Transaction<DumbAction>[] txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyA))
                .ToArray();
            Transaction<DumbAction>[] txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyB))
                .ToArray();
            Transaction<DumbAction>[] txsC = Enumerable.Range(0, 2)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyC))
                .ToArray();
            var random = new Random();
            Transaction<DumbAction>[] txs =
                txsA.Concat(txsB).Concat(txsC).Shuffle(random).ToArray();
            Assert.Empty(_blockChain.ListStagedTransactions());
            StageTransactions(txs);

            // Test if minTransactions and minTransactionsPerSigner work:
            ImmutableList<Transaction<DumbAction>> gathered =
                _blockChain.GatherTransactionsToMine(
                    new BlockMetadata(), 1024 * 1024, 5, 3);
            Assert.Equal(5, gathered.Count);
            var expectedNonces = new Dictionary<Address, long> { [a] = 0, [b] = 0, [c] = 0 };
            foreach (Transaction<DumbAction> tx in gathered)
            {
                long expectedNonce = expectedNonces[tx.Signer];
                Assert.True(expectedNonce < 3);
                Assert.Equal(expectedNonce, tx.Nonce);
                expectedNonces[tx.Signer] = expectedNonce + 1;
            }

            // Test if txPriority works:
            IComparer<Transaction<DumbAction>> txPriority =
                Comparer<Transaction<DumbAction>>.Create((tx1, tx2) =>
                {
                    int rank1 = tx1.Signer.Equals(a) ? 0 : (tx1.Signer.Equals(b) ? 1 : 2);
                    int rank2 = tx2.Signer.Equals(a) ? 0 : (tx2.Signer.Equals(b) ? 1 : 2);
                    return rank1.CompareTo(rank2);
                });
            gathered = _blockChain.GatherTransactionsToMine(
                new BlockMetadata(), 1024 * 1024, 8, 3, txPriority);
            Assert.Equal(
                txsA.Concat(txsB.Take(3)).Concat(txsC).Select(tx => tx.Id).ToArray(),
                gathered.Select(tx => tx.Id).ToArray()
            );
        }
    }
}
