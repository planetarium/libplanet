using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Serilog;
using Xunit;
using FAV = Libplanet.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void ListStagedTransactions()
        {
            Transaction<DumbAction> MkTx(PrivateKey key, long nonce, DateTimeOffset? ts = null) =>
                Transaction<DumbAction>.Create(
                    nonce,
                    key,
                    _blockChain.Genesis.Hash,
                    new DumbAction[0],
                    null,
                    ts ?? DateTimeOffset.UtcNow
                );

            PrivateKey a = new PrivateKey();
            PrivateKey b = new PrivateKey();
            PrivateKey c = new PrivateKey();
            PrivateKey d = new PrivateKey();
            PrivateKey e = new PrivateKey();

            // A normal case and corner cases:
            // A. Normal case (3 txs: 0, 1, 2)
            // B. Nonces are out of order (2 tsx: 1, 0)
            // C. Smaller nonces have later timestamps (2 txs: 0 (later), 1)
            // D. Some nonce numbers are missed out (3 txs: 0, 1, 3)
            // E. Reused nonces (4 txs: 0, 1, 1, 2)
            _blockChain.MakeTransaction(a, new DumbAction[0]);

            DateTimeOffset currentTime = DateTimeOffset.UtcNow;
            _blockChain.StageTransaction(MkTx(b, 1, currentTime + TimeSpan.FromHours(1)));

            _blockChain.StageTransaction(MkTx(c, 0, DateTimeOffset.UtcNow + TimeSpan.FromHours(1)));

            _blockChain.StageTransaction(MkTx(d, 0, DateTimeOffset.UtcNow));

            _blockChain.StageTransaction(MkTx(e, 0, DateTimeOffset.UtcNow));

            _blockChain.MakeTransaction(a, new DumbAction[0]);

            _blockChain.StageTransaction(MkTx(b, 0, currentTime));

            _blockChain.StageTransaction(MkTx(c, 1, DateTimeOffset.UtcNow));

            _blockChain.StageTransaction(MkTx(d, 1, DateTimeOffset.UtcNow));

            _blockChain.StageTransaction(MkTx(e, 1, DateTimeOffset.UtcNow));

            _blockChain.StageTransaction(MkTx(d, 3, DateTimeOffset.UtcNow));

            _blockChain.StageTransaction(MkTx(e, 1, DateTimeOffset.UtcNow));
            _blockChain.StageTransaction(MkTx(e, 2, DateTimeOffset.UtcNow));

            _blockChain.MakeTransaction(a, new DumbAction[0]);

            ImmutableArray<Transaction<DumbAction>> stagedTransactions =
                _blockChain.ListStagedTransactions();
            (Address Signer, long Nonce)[] actual =
                stagedTransactions.Select(tx => (tx.Signer, tx.Nonce)).ToArray();
            (Address Signer, long Nonce)[] expected =
            {
                (a.ToAddress(), 0),
                (b.ToAddress(), 0),
                (c.ToAddress(), 0),
                (d.ToAddress(), 0),
                (e.ToAddress(), 0),
                (a.ToAddress(), 1),
                (b.ToAddress(), 1),
                (c.ToAddress(), 1),
                (d.ToAddress(), 1),
                (e.ToAddress(), 1),
                (d.ToAddress(), 3),
                (e.ToAddress(), 1),
                (e.ToAddress(), 2),
                (a.ToAddress(), 2),
            };

            var signerMap = new Dictionary<Address, char>()
            {
                [a.ToAddress()] = 'A',
                [b.ToAddress()] = 'B',
                [c.ToAddress()] = 'C',
                [d.ToAddress()] = 'D',
                [e.ToAddress()] = 'E',
            };

            Log.Logger.Debug("Expected vs Actual");
            foreach ((var ex, var ac) in expected.Zip(actual, (e_, a_) => (e_, a_)))
            {
                Log.Logger.Debug(
                    "{0} {1} != {2} {3}",
                    signerMap[ex.Signer],
                    ex.Nonce,
                    signerMap[ac.Signer],
                    ac.Nonce
                );
            }

            Assert.Equal(expected, actual);
        }

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void ExecuteActions(bool getTxExecutionViaStore)
        {
            Func<BlockHash, TxId, TxExecution> getTxExecution
                = getTxExecutionViaStore
                ? (Func<BlockHash, TxId, TxExecution>)_blockChain.Store.GetTxExecution
                : _blockChain.GetTxExecution;

            (var addresses, Transaction<DumbAction>[] txs) =
                MakeFixturesForAppendTests();
            var genesis = _blockChain.Genesis;

            Block<DumbAction> block1 = TestUtils.MineNext(
                genesis,
                txs,
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
            ).AttachStateRootHash(_fx.StateStore, _policy.BlockAction);

            _blockChain.Append(
                block1,
                DateTimeOffset.UtcNow,
                evaluateActions: false,
                renderBlocks: true,
                renderActions: false
            );

            foreach (Transaction<DumbAction> tx in txs)
            {
                Assert.Null(getTxExecution(block1.Hash, tx.Id));
                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(_fx.Hash3, tx.Id));
            }

            var minerAddress = genesis.Miner.GetValueOrDefault();

            var expectedStates = new Dictionary<Address, IValue>
            {
                { addresses[0], (Text)"foo" },
                { addresses[1], (Text)"bar" },
                { addresses[2], (Text)"baz" },
                { addresses[3], (Text)"qux" },
                { minerAddress, (Integer)2 },
                { MinerReward.RewardRecordAddress, (Text)$"{minerAddress},{minerAddress}" },
            };

            _blockChain.ExecuteActions(block1);
            foreach (KeyValuePair<Address, IValue> pair in expectedStates)
            {
                Assert.Equal(
                    pair.Value,
                    _fx.StateStore.GetState(KeyConverters.ToStateKey(pair.Key), block1.Hash));
            }

            foreach (Transaction<DumbAction> tx in txs)
            {
                var e = getTxExecution(block1.Hash, tx.Id);
                Assert.IsType<TxSuccess>(e);
                var s = (TxSuccess)e;
                Assert.Equal(block1.Hash, s.BlockHash);
                Assert.Equal(tx.Id, s.TxId);
                Assert.Equal(tx.UpdatedAddresses, s.UpdatedAddresses);
                Assert.Equal(
                    tx.UpdatedAddresses.ToImmutableDictionary(
                        address => address,
                        address => expectedStates[address]
                    ),
                    s.UpdatedStates
                );
                Assert.Empty(s.FungibleAssetsDelta);
                Assert.Empty(s.UpdatedFungibleAssets);

                Assert.Null(getTxExecution(genesis.Hash, tx.Id));
                Assert.Null(getTxExecution(_fx.Hash3, tx.Id));
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
            Block<DumbAction> block2 = TestUtils.MineNext(
                genesis,
                new[] { tx1Transfer, tx2Error, tx3Transfer },
                difficulty: _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
            ).AttachStateRootHash(_fx.StateStore, _policy.BlockAction);
            _blockChain.ExecuteActions(block2);
            var txExecution1 = getTxExecution(block2.Hash, tx1Transfer.Id);
            Assert.IsType<TxSuccess>(txExecution1);
            var txSuccess1 = (TxSuccess)txExecution1;
            Assert.Equal(
                addresses.Take(3).Append(pk.ToAddress()).ToImmutableHashSet(),
                txSuccess1.UpdatedAddresses
            );
            Assert.Equal(
                ImmutableDictionary<Address, IValue>.Empty
                    .Add(pk.ToAddress(), (Text)"foo")
                    .Add(addresses[0], (Text)"bar"),
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
            var txExecution2 = getTxExecution(block2.Hash, tx2Error.Id);
            Assert.IsType<TxFailure>(txExecution2);
            var txFailure = (TxFailure)txExecution2;
            Assert.Equal(block2.Hash, txFailure.BlockHash);
            Assert.Equal(tx2Error.Id, txFailure.TxId);
            Assert.Equal(
                $"{nameof(System)}.{nameof(ArgumentOutOfRangeException)}",
                txFailure.ExceptionName
            );
            Assert.Equal(
                Dictionary.Empty.Add("parameterName", "value"),
                txFailure.ExceptionMetadata
            );
            var txExecution3 = getTxExecution(block2.Hash, tx3Transfer.Id);
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
    }
}
