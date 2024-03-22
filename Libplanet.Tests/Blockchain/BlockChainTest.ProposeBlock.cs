using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Crypto;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;
using Random = System.Random;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableFact]
        public void ProposeBlock()
        {
            Func<long, long> getMaxTransactionsBytes = _blockChain.Policy.GetMaxTransactionsBytes;
            Assert.Equal(1, _blockChain.Count);
            AssertBencodexEqual(
                (Text)$"{GenesisProposer.Address}",
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(default));

            var proposerA = new PrivateKey();
            Block block = _blockChain.ProposeBlock(proposerA);
            _blockChain.Append(block, CreateBlockCommit(block));
            Assert.True(_blockChain.ContainsBlock(block.Hash));
            Assert.Equal(2, _blockChain.Count);
            Assert.True(
                block.MarshalBlock().EncodingLength <= getMaxTransactionsBytes(block.Index));
            AssertBencodexEqual(
                (Text)$"{GenesisProposer.Address},{proposerA.Address}",
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(default)
            );

            var proposerB = new PrivateKey();
            Block anotherBlock = _blockChain.ProposeBlock(
                proposerB,
                CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            _blockChain.Append(anotherBlock, CreateBlockCommit(anotherBlock));
            Assert.True(_blockChain.ContainsBlock(anotherBlock.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(
                anotherBlock.MarshalBlock().EncodingLength <=
                    getMaxTransactionsBytes(anotherBlock.Index));
            Text expected = new Text(
                $"{GenesisProposer.Address},{proposerA.Address},{proposerB.Address}");
            AssertBencodexEqual(
                expected,
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(default)
            );

            Block block3 = _blockChain.ProposeBlock(
                new PrivateKey(),
                CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            Assert.False(_blockChain.ContainsBlock(block3.Hash));
            Assert.Equal(3, _blockChain.Count);
            Assert.True(
                block3.MarshalBlock().EncodingLength <= getMaxTransactionsBytes(block3.Index));
            expected = new Text(
                $"{GenesisProposer.Address},{proposerA.Address},{proposerB.Address}");
            AssertBencodexEqual(
                expected,
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(default)
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

                Transaction heavyTx = _fx.MakeTransaction(
                    manyActions,
                    nonce: nonce,
                    privateKey: signer);
                _blockChain.StageTransaction(heavyTx);
            }

            Block block4 = _blockChain.ProposeBlock(
                new PrivateKey(),
                CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
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
            Assert.Equal(4, block4.Transactions.Count());
            expected = new Text(
                $"{GenesisProposer.Address},{proposerA.Address},{proposerB.Address}");
            AssertBencodexEqual(
                expected,
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(default)
            );
        }

        [SkippableFact]
        public void CanProposeInvalidGenesisBlock()
        {
            using (var fx = new MemoryStoreFixture())
            {
                var policy = new BlockPolicy();
                var actionEvaluator = new ActionEvaluator(
                    _ => policy.BlockAction,
                    fx.StateStore,
                    new SingleActionLoader(typeof(DumbAction)));
                var genesis = BlockChain.ProposeGenesisBlock(
                    actionEvaluator,
                    new PrivateKey(),
                    new[]
                    {
                        Transaction.Create(
                            5,  // Invalid nonce,
                            new PrivateKey(),
                            null,
                            actions: new[]
                            {
                                new DumbAction(new PrivateKey().Address, "foo"),
                            }.ToPlainValues()),
                    }.ToImmutableList());
                Assert.Throws<InvalidTxNonceException>(() => BlockChain.Create(
                    policy,
                    new VolatileStagePolicy(),
                    fx.Store,
                    fx.StateStore,
                    genesis,
                    actionEvaluator));
            }
        }

        [SkippableFact]
        public void CanProposeInvalidBlock()
        {
            using (var fx = new MemoryStoreFixture())
            {
                var policy = new BlockPolicy();
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
                var txs = new[]
                {
                    Transaction.Create(
                        5,  // Invalid nonce
                        new PrivateKey(),
                        _blockChain.Genesis.Hash,
                        new[]
                        {
                            new DumbAction(new PrivateKey().Address, "foo"),
                        }.ToPlainValues()),
                }.ToImmutableList();

                var block = blockChain.ProposeBlock(new PrivateKey(), txs, null, null);
                Assert.Throws<InvalidTxNonceException>(
                    () => blockChain.Append(block, CreateBlockCommit(block)));
            }
        }

        [SkippableFact]
        public void ProposeBlockWithPendingTxs()
        {
            var keys = new[] { new PrivateKey(), new PrivateKey(), new PrivateKey() };
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            var keyD = new PrivateKey();
            var keyE = new PrivateKey();
            var addrA = keyA.Address;
            var addrB = keyB.Address;
            var addrC = keyC.Address;
            var addrD = keyD.Address;
            var addrE = keyE.Address;

            var txs = new[]
            {
                Transaction.Create(
                    0,
                    keys[0],
                    _blockChain.Genesis.Hash,
                    new[]
                    {
                        new DumbAction(addrA, "1a"),
                        new DumbAction(addrB, "1b"),
                    }.ToPlainValues()
                ),
                Transaction.Create(
                    1,
                    keys[0],
                    _blockChain.Genesis.Hash,
                    new[]
                    {
                        new DumbAction(addrC, "2a"),
                        new DumbAction(addrD, "2b"),
                    }.ToPlainValues()
                ),

                // pending txs1
                Transaction.Create(
                    1,
                    keys[1],
                    _blockChain.Genesis.Hash,
                    new[]
                    {
                        new DumbAction(addrE, "3a"),
                        new DumbAction(addrA, "3b"),
                    }.ToPlainValues()
                ),
                Transaction.Create(
                    2,
                    keys[1],
                    _blockChain.Genesis.Hash,
                    new[]
                    {
                        new DumbAction(addrB, "4a"),
                        new DumbAction(addrC, "4b"),
                    }.ToPlainValues()
                ),

                // pending txs2
                Transaction.Create(
                    0,
                    keys[2],
                    _blockChain.Genesis.Hash,
                    new[]
                    {
                        new DumbAction(addrD, "5a"),
                        new DumbAction(addrE, "5b"),
                    }.ToPlainValues()
                ),
                Transaction.Create(
                    2,
                    keys[2],
                    _blockChain.Genesis.Hash,
                    new[]
                    {
                        new DumbAction(addrA, "6a"),
                        new DumbAction(addrB, "6b"),
                    }.ToPlainValues()
                ),
            };

            StageTransactions(txs);

            Assert.Null(_blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(addrA));
            Assert.Null(_blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(addrB));
            Assert.Null(_blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(addrC));
            Assert.Null(_blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(addrD));
            Assert.Null(_blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(addrE));

            foreach (Transaction tx in txs)
            {
                Assert.Null(_blockChain.GetTxExecution(_blockChain.Genesis.Hash, tx.Id));
            }

            Block block = _blockChain.ProposeBlock(keyA);
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

            Assert.Equal(
                new Integer(1),
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(addrA));
            Assert.Equal(
                new Text("1b"),
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(addrB));
            Assert.Equal(
                new Text("2a"),
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(addrC));
            Assert.IsType<Text>(
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(addrD));
            Assert.Equal(
                new HashSet<string> { "2b", "5a" },
                ((string)(Text)_blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(addrD)).Split(new[] { ',' }).ToHashSet()
            );
            Assert.Equal(
                new Text("5b"),
                _blockChain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(addrE));

            foreach (Transaction tx in new[] { txs[0], txs[1], txs[4] })
            {
                TxExecution txx = _blockChain.GetTxExecution(block.Hash, tx.Id);
                _logger.Debug(
                    nameof(_blockChain.GetTxExecution) + "({Hash}, {Id}) = {TxExecution}",
                    block.Hash,
                    tx.Id,
                    txx
                );
                Assert.False(txx.Fail);
                Assert.Equal(block.Hash, txx.BlockHash);
                Assert.Equal(tx.Id, txx.TxId);
                Assert.Null(_blockChain.GetTxExecution(_blockChain.Genesis.Hash, tx.Id));
            }
        }

        [SkippableFact]
        public void ProposeBlockWithPolicyViolationTx()
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

                var validTx = blockChain.MakeTransaction(validKey, new DumbAction[] { });
                var invalidTx = blockChain.MakeTransaction(invalidKey, new DumbAction[] { });

                var proposer = new PrivateKey();
                var block = blockChain.ProposeBlock(proposer);
                blockChain.Append(block, CreateBlockCommit(block));

                var txs = block.Transactions.ToHashSet();

                Assert.Contains(validTx, txs);
                Assert.DoesNotContain(invalidTx, txs);

                Assert.Empty(blockChain.GetStagedTransactionIds());
            }
        }

        [SkippableFact]
        public void ProposeBlockWithReverseNonces()
        {
            var key = new PrivateKey();
            var txs = new[]
            {
                Transaction.Create(
                    2,
                    key,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()
                ),
                Transaction.Create(
                    1,
                    key,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()
                ),
                Transaction.Create(
                    0,
                    key,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()
                ),
            };
            StageTransactions(txs);
            Block block = _blockChain.ProposeBlock(new PrivateKey());
            Assert.Equal(txs.Length, block.Transactions.Count());
        }

        [SkippableFact]
        public void ProposeBlockWithLowerNonces()
        {
            var key = new PrivateKey();
            StageTransactions(
                new[]
                {
                    Transaction.Create(
                        0,
                        key,
                        _blockChain.Genesis.Hash,
                        Array.Empty<DumbAction>().ToPlainValues()
                    ),
                }
            );
            Block block1 = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(block1, CreateBlockCommit(block1));

            // Trying to propose with lower nonce (0) than expected.
            StageTransactions(
                new[]
                {
                    Transaction.Create(
                        0,
                        key,
                        _blockChain.Genesis.Hash,
                        Array.Empty<DumbAction>().ToPlainValues()
                    ),
                }
            );
            Block block2 = _blockChain.ProposeBlock(
                new PrivateKey(),
                CreateBlockCommit(_blockChain.Tip.Hash, _blockChain.Tip.Index, 0));
            _blockChain.Append(block2, CreateBlockCommit(block2));

            Assert.Empty(block2.Transactions);
            Assert.Empty(_blockChain.ListStagedTransactions());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));
        }

        [SkippableFact]
        public void ProposeBlockWithBlockAction()
        {
            var privateKey1 = new PrivateKey();
            var address1 = privateKey1.Address;

            var privateKey2 = new PrivateKey();
            var address2 = privateKey2.Address;

            var blockAction = new DumbAction(address1, "foo");
            var policy = new BlockPolicy(blockAction);
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

            blockChain.MakeTransaction(privateKey2, new[] { new DumbAction(address2, "baz") });
            var block = blockChain.ProposeBlock(privateKey1, CreateBlockCommit(_blockChain.Tip));
            blockChain.Append(block, CreateBlockCommit(block));

            var state1 = blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address1);
            var state2 = blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address2);

            Assert.Equal(0, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo", state1);
            Assert.Equal((Text)"baz", state2);

            blockChain.MakeTransaction(privateKey1, new[] { new DumbAction(address1, "bar") });
            block = blockChain.ProposeBlock(privateKey1, CreateBlockCommit(_blockChain.Tip));
            blockChain.Append(block, CreateBlockCommit(block));

            state1 = blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address1);
            state2 = blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address2);

            Assert.Equal(1, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal((Text)"foo,bar,foo", state1);
            Assert.Equal((Text)"baz", state2);
        }

        [SkippableFact]
        public void ProposeBlockWithTxPriority()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            Address a = keyA.Address; // Rank 0
            Address b = keyB.Address; // Rank 1
            Address c = keyC.Address; // Rank 2
            int Rank(Address address) => address.Equals(a) ? 0 : address.Equals(b) ? 1 : 2;
            Transaction[] txsA = Enumerable.Range(0, 50)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyA))
                .ToArray();
            Transaction[] txsB = Enumerable.Range(0, 60)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyB))
                .ToArray();
            Transaction[] txsC = Enumerable.Range(0, 40)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyC))
                .ToArray();

            var random = new Random();
            Transaction[] txs =
                txsA.Concat(txsB).Concat(txsC).Shuffle(random).ToArray();
            StageTransactions(txs);
            Assert.Equal(txs.Length, _blockChain.ListStagedTransactions().Count);

            IComparer<Transaction> txPriority =
                Comparer<Transaction>.Create((tx1, tx2) =>
                    Rank(tx1.Signer).CompareTo(Rank(tx2.Signer)));
            Block block = _blockChain.ProposeBlock(
                new PrivateKey(),
                txPriority: txPriority);
            Assert.Equal(100, block.Transactions.Count);
            Assert.Equal(
                txsA.Concat(txsB.Take(50)).Select(tx => tx.Id).ToHashSet(),
                block.Transactions.Select(tx => tx.Id).ToHashSet());
        }

        [SkippableFact]
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
            Block block = _blockChain.ProposeBlock(new PrivateKey(), blockCommit);

            Assert.NotNull(block.LastCommit);
            Assert.Equal(block.LastCommit, blockCommit);
        }

        [SkippableFact]
        public void IgnoreLowerNonceTxsAndPropose()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            var txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsA);
            Block b1 = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(b1, CreateBlockCommit(b1));
            Assert.Equal(
                txsA,
                ActionEvaluator.OrderTxsForEvaluation(
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
            Block b2 = _blockChain.ProposeBlock(
                new PrivateKey(), CreateBlockCommit(b1));
            Assert.Single(b2.Transactions);
            Assert.Contains(txsB[3], b2.Transactions);
        }

        [SkippableFact]
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
            Block b = _blockChain.ProposeBlock(privateKey);
            _blockChain.Append(b, CreateBlockCommit(b));

            Assert.Single(b.Transactions);
            Assert.Contains(b.Transactions.Single(), txs);
        }

        [SkippableFact]
        public void GatherTransactionsToPropose()
        {
            // TODO: We test more properties of GatherTransactionsToPropose() method:
            //       - if transactions are cut off if they exceed GetMaxTransactionsBytes()
            //       - if transactions with already consumed nonces are excluded
            //       - if transactions with greater nonces than unconsumed nonces are excluded
            //       - if transactions are cut off if the process exceeds the timeout (4 sec)
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var keyC = new PrivateKey();
            Address a = keyA.Address;
            Address b = keyB.Address;
            Address c = keyC.Address;
            _logger.Verbose("Address {Name}: {Address}", nameof(a), a);
            _logger.Verbose("Address {Name}: {Address}", nameof(b), b);
            _logger.Verbose("Address {Name}: {Address}", nameof(c), c);

            Transaction[] txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyA))
                .ToArray();
            Transaction[] txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyB))
                .ToArray();
            Transaction[] txsC = Enumerable.Range(0, 2)
                .Select(nonce => _fx.MakeTransaction(nonce: nonce, privateKey: keyC))
                .ToArray();
            var random = new Random();
            Transaction[] txs =
                txsA.Concat(txsB).Concat(txsC).Shuffle(random).ToArray();
            Assert.Empty(_blockChain.ListStagedTransactions());
            StageTransactions(txs);

            // Test if minTransactions and minTransactionsPerSigner work:
            ImmutableList<Transaction> gathered =
                _blockChain.GatherTransactionsToPropose(1024 * 1024, 5, 3, 0);
            Assert.Equal(5, gathered.Count);
            var expectedNonces = new Dictionary<Address, long> { [a] = 0, [b] = 0, [c] = 0 };
            foreach (Transaction tx in gathered)
            {
                long expectedNonce = expectedNonces[tx.Signer];
                Assert.True(expectedNonce < 3);
                Assert.Equal(expectedNonce, tx.Nonce);
                expectedNonces[tx.Signer] = expectedNonce + 1;
            }

            // Test if txPriority works:
            IComparer<Transaction> txPriority =
                Comparer<Transaction>.Create((tx1, tx2) =>
                {
                    int rank1 = tx1.Signer.Equals(a) ? 0 : (tx1.Signer.Equals(b) ? 1 : 2);
                    int rank2 = tx2.Signer.Equals(a) ? 0 : (tx2.Signer.Equals(b) ? 1 : 2);
                    return rank1.CompareTo(rank2);
                });
            gathered = _blockChain.GatherTransactionsToPropose(1024 * 1024, 8, 3, 0, txPriority);
            Assert.Equal(
                txsA.Concat(txsB.Take(3)).Concat(txsC).Select(tx => tx.Id).ToArray(),
                gathered.Select(tx => tx.Id).ToArray()
            );
        }

        [SkippableFact]
        public void MarkTransactionsToIgnoreWhileProposing()
        {
            var keyA = new PrivateKey();
            var keyB = new PrivateKey();
            var unsignedInvalidTx = new UnsignedTx(
                new TxInvoice(
                    _blockChain.Genesis.Hash,
                    DateTimeOffset.UtcNow,
                    new TxActionList((IValue)List.Empty.Add(new Text("Foo")))), // Invalid action
                new TxSigningMetadata(keyB.PublicKey, 1));
            var txWithInvalidAction = new Transaction(
                unsignedInvalidTx, unsignedInvalidTx.CreateSignature(keyB)
            );
            Transaction txWithInvalidNonce = Transaction.Create(
                2, keyB, _blockChain.Genesis.Hash, Array.Empty<DumbAction>().ToPlainValues()
            );
            var txs = new[]
            {
                Transaction.Create(
                    0,
                    keyA,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()),
                Transaction.Create(
                    1,
                    keyA,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()),
                Transaction.Create(
                    2,
                    keyA,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()),
                Transaction.Create(
                    0,
                    keyB,
                    _blockChain.Genesis.Hash,
                    Array.Empty<DumbAction>().ToPlainValues()),
                txWithInvalidAction,
                txWithInvalidNonce,
            };

            // Invalid txs can be staged.
            StageTransactions(txs);
            Assert.Equal(txs.Length, _blockChain.ListStagedTransactions().Count);

            var block = _blockChain.ProposeBlock(
                new PrivateKey(), CreateBlockCommit(_blockChain.Tip));

            Assert.DoesNotContain(txWithInvalidNonce, block.Transactions);
            Assert.DoesNotContain(txWithInvalidAction, block.Transactions);

            // txWithInvalidAction is marked ignored and removed
            Assert.Equal(txs.Length - 1, _blockChain.ListStagedTransactions().Count);
            Assert.True(_blockChain.StagePolicy.Ignores(_blockChain, txWithInvalidAction.Id));
        }
    }
}
