using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void ProposeBlock()
        {
            Func<long, long> getMaxTransactionsBytes = _blockChain.Policy.GetMaxTransactionsBytes;
            Assert.Equal(1, _blockChain.Count);
            AssertBencodexEqual((Text)$"{GenesisMiner.ToAddress()}", _blockChain.GetState(default));

            var minerA = new PrivateKey();
            Block<DumbAction> block = _blockChain.ProposeBlock(minerA);
            _blockChain.Append(block, CreateBlockCommit(block));
            Assert.True(_blockChain.ContainsBlock(block.Hash));
            Assert.Equal(2, _blockChain.Count);
            Assert.True(
                block.MarshalBlock().EncodingLength <= getMaxTransactionsBytes(block.Index));
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()}",
                _blockChain.GetState(default)
            );

            var minerB = new PrivateKey();
            Block<DumbAction> anotherBlock = _blockChain.ProposeBlock(
                minerB,
                lastCommit: CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            _blockChain.Append(anotherBlock, CreateBlockCommit(anotherBlock));
            Assert.True(_blockChain.ContainsBlock(anotherBlock.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(
                anotherBlock.MarshalBlock().EncodingLength <=
                    getMaxTransactionsBytes(anotherBlock.Index));
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()},{minerB.ToAddress()}",
                _blockChain.GetState(default)
            );

            Block<DumbAction> block3 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            Assert.False(_blockChain.ContainsBlock(block3.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(
                block3.MarshalBlock().EncodingLength <= getMaxTransactionsBytes(block3.Index));
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()},{minerB.ToAddress()}",
                _blockChain.GetState(default)
            );

            // Tests if ProposeBlock() method automatically fits the number of transactions
            // according to the right size.
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

            Block<DumbAction> block4 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            Assert.False(_blockChain.ContainsBlock(block4.Hash));
            _logger.Debug(
                $"{nameof(block4)}: {0} bytes",
                block4.MarshalBlock().EncodingLength
            );
            _logger.Debug(
                $"{nameof(getMaxTransactionsBytes)}({nameof(block4)}.{nameof(block4.Index)}) = {0}",
                getMaxTransactionsBytes(block4.Index)
            );
            Assert.True(
                block4.MarshalBlock().EncodingLength <= getMaxTransactionsBytes(block4.Index));
            Assert.Equal(3, block4.Transactions.Count());
            AssertBencodexEqual(
                (Text)$"{GenesisMiner.ToAddress()},{minerA.ToAddress()},{minerB.ToAddress()}",
                _blockChain.GetState(default)
            );
        }

        [Fact]
        public void ProposeBlockWithPendingTxs()
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

            Block<DumbAction> block = _blockChain.ProposeBlock(keyA);
            _blockChain.Append(block, CreateBlockCommit(block));

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
        public void ProposeBlockWithPolicyViolationTx()
        {
            var validKey = new PrivateKey();
            var invalidKey = new PrivateKey();

            TxPolicyViolationException IsSignerValid(
                BlockChain<DumbAction> chain, Transaction<DumbAction> tx)
            {
                var validAddress = validKey.PublicKey.ToAddress();
                return tx.Signer.Equals(validAddress)
                    ? null
                    : new TxPolicyViolationException("invalid signer", tx.Id);
            }

            var policy = new BlockPolicy<DumbAction>(
                validateNextBlockTx: IsSignerValid,
                getValidatorSet: idx => TestUtils.ValidatorSet);
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
                var block = blockChain.ProposeBlock(miner);
                blockChain.Append(block, CreateBlockCommit(block));

                var txs = block.Transactions.ToHashSet();

                Assert.Contains(validTx, txs);
                Assert.DoesNotContain(invalidTx, txs);

                Assert.Empty(blockChain.GetStagedTransactionIds());
            }
        }

        [Fact]
        public void ProposeBlockWithReverseNonces()
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
            Block<DumbAction> block = _blockChain.ProposeBlock(
                new PrivateKey());
            Assert.Equal(txs.Length, block.Transactions.Count());
        }

        [Fact]
        public void ProposeBlockWithLowerNonces()
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
            Block<DumbAction> block1 = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(block1, CreateBlockCommit(block1));

            // Trying to propose with lower nonce (0) than expected.
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
            Block<DumbAction> block2 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            _blockChain.Append(block2, CreateBlockCommit(block2));

            Assert.Empty(block2.Transactions);
            Assert.Empty(_blockChain.ListStagedTransactions());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));
        }

        [Fact]
        public void ProposeBlockWithBlockAction()
        {
            var privateKey1 = new PrivateKey();
            var address1 = privateKey1.ToAddress();

            var privateKey2 = new PrivateKey();
            var address2 = privateKey2.ToAddress();

            var blockAction = new DumbAction(address1, "foo");
            BlockPolicy<DumbAction> policy = new BlockPolicy<DumbAction>(
                blockAction, getValidatorSet: _ => TestUtils.ValidatorSet);

            var blockChain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);

            blockChain.MakeTransaction(privateKey2, new[] { new DumbAction(address2, "baz") });
            var block = blockChain.ProposeBlock(
                privateKey1, lastCommit: CreateBlockCommit(_blockChain.Tip));
            blockChain.Append(block, CreateBlockCommit(block));

            var state1 = blockChain.GetState(address1);
            var state2 = blockChain.GetState(address2);

            Assert.Equal(0, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo", state1);
            Assert.Equal((Text)"baz", state2);

            blockChain.MakeTransaction(privateKey1, new[] { new DumbAction(address1, "bar") });
            block = blockChain.ProposeBlock(
                privateKey1, lastCommit: CreateBlockCommit(_blockChain.Tip));
            blockChain.Append(block, CreateBlockCommit(block));

            state1 = blockChain.GetState(address1);
            state2 = blockChain.GetState(address2);

            Assert.Equal(1, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo,bar,foo", state1);
            Assert.Equal((Text)"baz", state2);
        }

        [Fact]
        public void ProposeBlockWithTxPriority()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            Address a = keyA.ToAddress(); // Rank 0
            Address b = keyB.ToAddress(); // Rank 1
            Address c = keyC.ToAddress(); // Rank 2
            int Rank(Address address) => address.Equals(a) ? 0 : address.Equals(b) ? 1 : 2;
            Transaction<DumbAction>[] txsA = Enumerable.Range(0, 50)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyA))
                .ToArray();
            Transaction<DumbAction>[] txsB = Enumerable.Range(0, 60)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyB))
                .ToArray();
            Transaction<DumbAction>[] txsC = Enumerable.Range(0, 40)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyC))
                .ToArray();

            var random = new Random();
            Transaction<DumbAction>[] txs =
                txsA.Concat(txsB).Concat(txsC).Shuffle(random).ToArray();
            StageTransactions(txs);
            Assert.Equal(txs.Length, _blockChain.ListStagedTransactions().Count);

            IComparer<Transaction<DumbAction>> txPriority =
                Comparer<Transaction<DumbAction>>.Create((tx1, tx2) =>
                    Rank(tx1.Signer).CompareTo(Rank(tx2.Signer)));
            Block<DumbAction> block = _blockChain.ProposeBlock(
                new PrivateKey(),
                txPriority: txPriority);
            Assert.Equal(100, block.Transactions.Count);
            Assert.Equal(
                txsA.Concat(txsB.Take(50)).Select(tx => tx.Id).ToHashSet(),
                block.Transactions.Select(tx => tx.Id).ToHashSet());
        }

        [Fact]
        public void ProposeBlockWithLastCommit()
        {
            var keys = Enumerable.Range(0, 3).Select(_ => new PrivateKey()).ToList();
            var votes = keys.Select(key => new VoteMetadata(
                _blockChain.Tip.Index,
                0,
                _blockChain.Tip.Hash,
                DateTimeOffset.UtcNow,
                key.PublicKey,
                VoteFlag.PreCommit).Sign(key)).ToImmutableArray();
            var blockCommit = new BlockCommit(
                _blockChain.Tip.Index, 0, _blockChain.Tip.Hash, votes);
            Block<DumbAction> block = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: blockCommit);

            Assert.NotNull(block.LastCommit);
            AssertBytesEqual(block.LastCommit.ByteArray, blockCommit.ByteArray);
        }

        [Fact]
        public void IgnoreLowerNonceTxsAndPropose()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsA);
            Block<DumbAction> b1 = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(b1, CreateBlockCommit(b1));
            Assert.Equal(
                txsA,
                ActionEvaluator<DumbAction>.OrderTxsForEvaluation(
                    b1.ProtocolVersion,
                    b1.Transactions,
                    b1.PreEvaluationHash.ByteArray
                )
            );

            var txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsB);

            // Propose only txs having higher or equal with nonce than expected nonce.
            Block<DumbAction> b2 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(b1));
            Assert.Single(b2.Transactions);
            Assert.Contains(txsB[3], b2.Transactions);
        }

        [Fact]
        public void IgnoreDuplicatedNonceTxs()
        {
            var privateKey = new PrivateKey();
            var txs = Enumerable.Range(0, 3)
                .Select(_ => _fx.MakeTransaction(
                    nonce: 0,
                    privateKey: privateKey,
                    timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txs);
            Block<DumbAction> b = _blockChain.ProposeBlock(privateKey);
            _blockChain.Append(b, CreateBlockCommit(b));

            Assert.Single(b.Transactions);
            Assert.Contains(b.Transactions.Single(), txs);
        }

        [Fact]
        public void GatherTransactionsToPropose()
        {
            // TODO: We test more properties of GatherTransactionsToMine() method:
            //       - if transactions are cut off if they exceed GetMaxTransactionsBytes()
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
                _blockChain.GatherTransactionsToPropose(1024 * 1024, 5, 3);
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
            gathered = _blockChain.GatherTransactionsToPropose(1024 * 1024, 8, 3, txPriority);
            Assert.Equal(
                txsA.Concat(txsB.Take(3)).Concat(txsC).Select(tx => tx.Id).ToArray(),
                gathered.Select(tx => tx.Id).ToArray()
            );
        }
    }
}
