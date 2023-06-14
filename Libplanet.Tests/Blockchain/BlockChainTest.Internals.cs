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
using Xunit;
using static Libplanet.Tests.TestUtils;
using FAV = Libplanet.Assets.FungibleAssetValue;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableFact]
        public void ListStagedTransactions()
        {
            Skip.IfNot(
                Environment.GetEnvironmentVariable("XUNIT_UNITY_RUNNER") is null,
                "This test causes timeout"
            );

            Transaction MkTx(PrivateKey key, long nonce, DateTimeOffset? ts = null) =>
                Transaction.Create(
                    nonce,
                    key,
                    _blockChain.Genesis.Hash,
                    new DumbAction[0],
                    null,
                    null,
                    null,
                    ts ?? DateTimeOffset.UtcNow
                );

            PrivateKey a = new PrivateKey();
            PrivateKey b = new PrivateKey();
            PrivateKey c = new PrivateKey();
            PrivateKey d = new PrivateKey();
            PrivateKey e = new PrivateKey();
            List<Address> signers = new List<Address>()
            {
                a.ToAddress(), b.ToAddress(), c.ToAddress(), d.ToAddress(), e.ToAddress(),
            };

            // A normal case and corner cases:
            // A. Normal case (3 txs: 0, 1, 2)
            // B. Nonces are out of order (2 txs: 1, 0)
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

            ImmutableList<Transaction> stagedTransactions =
                _blockChain.ListStagedTransactions();

            // List is ordered by nonce.
            foreach (var signer in signers)
            {
                var signerTxs = stagedTransactions
                    .Where(tx => tx.Signer.Equals(signer))
                    .ToImmutableList();
                Assert.Equal(signerTxs, signerTxs.OrderBy(tx => tx.Nonce));
            }

            // A is prioritized over B, C, D, E:
            IComparer<Transaction> priority = Comparer<Transaction>.Create(
                (tx1, tx2) => tx1.Signer.Equals(a.ToAddress()) ? -1 : 1
            );
            stagedTransactions = _blockChain.ListStagedTransactions(priority);

            foreach (var tx in stagedTransactions.Take(3))
            {
                Assert.True(tx.Signer.Equals(a.ToAddress()));
            }

            // List is ordered by nonce.
            foreach (var signer in signers)
            {
                var signerTxs = stagedTransactions
                    .Where(tx => tx.Signer.Equals(signer))
                    .ToImmutableList();
                Assert.Equal(signerTxs, signerTxs.OrderBy(tx => tx.Nonce));
            }
        }

        [SkippableFact]
        public void ExecuteActions()
        {
            (var addresses, Transaction[] txs) =
                MakeFixturesForAppendTests();
            var genesis = _blockChain.Genesis;

            Block block1 = _blockChain.ProposeBlock(
                _fx.Proposer, txs.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block1, CreateBlockCommit(block1), render: true);

            var minerAddress = genesis.Miner;

            var expectedStates = new Dictionary<Address, IValue>
            {
                { addresses[0], (Text)"foo" },
                { addresses[1], (Text)"bar" },
                { addresses[2], (Text)"baz" },
                { addresses[3], (Text)"qux" },
                { minerAddress, (Integer)2 },
                { MinerReward.RewardRecordAddress, (Text)$"{minerAddress},{minerAddress}" },
            };

            foreach (KeyValuePair<Address, IValue> pair in expectedStates)
            {
                AssertBencodexEqual(
                    pair.Value,
                    _fx.StateStore.GetStates(
                        block1.StateRootHash,
                        new[] { KeyConverters.ToStateKey(pair.Key) }
                    )[0]
                );
            }
        }

        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void UpdateTxExecutions(bool getTxExecutionViaStore)
        {
            void AssertTxSuccessesEqual(TxSuccess expected, TxExecution actual)
            {
                Assert.IsType<TxSuccess>(actual);
                var success = (TxSuccess)actual;
                Assert.Equal(expected.TxId, success.TxId);
                Assert.Equal(expected.BlockHash, success.BlockHash);
                Assert.Equal(expected.UpdatedStates, success.UpdatedStates);
                Assert.Equal(expected.FungibleAssetsDelta, success.FungibleAssetsDelta);
                Assert.Equal(expected.UpdatedFungibleAssets, success.UpdatedFungibleAssets);
            }

            void AssertTxFailuresEqual(TxFailure expected, TxExecution actual)
            {
                Assert.IsType<TxFailure>(actual);
                var failure = (TxFailure)actual;
                Assert.Equal(expected.TxId, failure.TxId);
                Assert.Equal(expected.BlockHash, failure.BlockHash);
                Assert.Equal(expected.ExceptionName, failure.ExceptionName);
                Assert.Equal(expected.ExceptionMetadata, failure.ExceptionMetadata);
            }

            Func<BlockHash, TxId, TxExecution> getTxExecution
                = getTxExecutionViaStore
                ? (Func<BlockHash, TxId, TxExecution>)_blockChain.Store.GetTxExecution
                : _blockChain.GetTxExecution;

            Assert.Null(getTxExecution(_fx.Hash1, _fx.TxId1));
            Assert.Null(getTxExecution(_fx.Hash1, _fx.TxId2));
            Assert.Null(getTxExecution(_fx.Hash2, _fx.TxId1));
            Assert.Null(getTxExecution(_fx.Hash2, _fx.TxId2));

            var random = new System.Random();
            var inputA = new TxSuccess(
                _fx.Hash1,
                _fx.TxId1,
                null,
                ImmutableDictionary<Address, IValue>.Empty.Add(
                    random.NextAddress(),
                    (Text)"state value"
                ),
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        random.NextAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty.Add(
                            DumbAction.DumbCurrency,
                            DumbAction.DumbCurrency * 5
                        )
                    ),
                ImmutableDictionary<Address, IImmutableDictionary<Currency, FAV>>.Empty
                    .Add(
                        random.NextAddress(),
                        ImmutableDictionary<Currency, FAV>.Empty.Add(
                            DumbAction.DumbCurrency,
                            DumbAction.DumbCurrency * 10
                        )
                    )
            );
            var inputB = new TxFailure(
                _fx.Hash1,
                _fx.TxId2,
                null,
                "AnExceptionName",
                Dictionary.Empty.Add("foo", 1).Add("bar", "baz")
            );
            var inputC = new TxFailure(
                _fx.Hash2,
                _fx.TxId1,
                null,
                "AnotherExceptionName",
                null
            );
            _blockChain.UpdateTxExecutions(new TxExecution[] { inputA, inputB, inputC });

            AssertTxSuccessesEqual(inputA, getTxExecution(_fx.Hash1, _fx.TxId1));
            AssertTxFailuresEqual(inputB, getTxExecution(_fx.Hash1, _fx.TxId2));
            AssertTxFailuresEqual(inputC, getTxExecution(_fx.Hash2, _fx.TxId1));
            Assert.Null(getTxExecution(_fx.Hash2, _fx.TxId2));
        }
    }
}
