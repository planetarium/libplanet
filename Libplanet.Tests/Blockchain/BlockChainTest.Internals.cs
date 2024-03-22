using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Xunit;
using static Libplanet.Action.State.KeyConverters;
using static Libplanet.Tests.TestUtils;

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
                    Array.Empty<DumbAction>().ToPlainValues(),
                    null,
                    null,
                    ts ?? DateTimeOffset.UtcNow);

            PrivateKey a = new PrivateKey();
            PrivateKey b = new PrivateKey();
            PrivateKey c = new PrivateKey();
            PrivateKey d = new PrivateKey();
            PrivateKey e = new PrivateKey();
            List<Address> signers = new List<Address>()
            {
                a.Address, b.Address, c.Address, d.Address, e.Address,
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
                (tx1, tx2) => tx1.Signer.Equals(a.Address) ? -1 : 1
            );
            stagedTransactions = _blockChain.ListStagedTransactions(priority);

            foreach (var tx in stagedTransactions.Take(3))
            {
                Assert.True(tx.Signer.Equals(a.Address));
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
                _fx.Proposer,
                txs.ToImmutableList(),
                CreateBlockCommit(_blockChain.Tip),
                new LotMetadata(_blockChain.Tip.Index + 1, 0, _blockChain.Tip.Proof)
                    .Prove(_fx.Proposer).Proof);
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

            IValue legacyStateRootRaw = _fx.StateStore.GetStateRoot(block1.StateRootHash)
                .Get(ToStateKey(ReservedAddresses.LegacyAccount));
            Assert.NotNull(legacyStateRootRaw);
            var legacyStateRoot =
                new HashDigest<SHA256>(((Binary)legacyStateRootRaw).ByteArray);
            foreach (KeyValuePair<Address, IValue> pair in expectedStates)
            {
                AssertBencodexEqual(
                    pair.Value,
                    _fx.StateStore
                        .GetStateRoot(legacyStateRoot)
                        .Get(new[] { ToStateKey(pair.Key) })[0]
                );
            }
        }

        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void UpdateTxExecutions(bool getTxExecutionViaStore)
        {
            void AssertTxExecutionEqual(TxExecution expected, TxExecution actual)
            {
                Assert.Equal(expected.Fail, actual.Fail);
                Assert.Equal(expected.TxId, actual.TxId);
                Assert.Equal(expected.BlockHash, actual.BlockHash);
                Assert.Equal(expected.InputState, actual.InputState);
                Assert.Equal(expected.OutputState, actual.OutputState);
                Assert.Equal(expected.ExceptionNames, actual.ExceptionNames);
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
            var inputA = new TxExecution(
                _fx.Hash1,
                _fx.TxId1,
                false,
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new List<string>() { string.Empty });
            var inputB = new TxExecution(
                _fx.Hash1,
                _fx.TxId2,
                true,
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new List<string>() { "AnExceptionName" });
            var inputC = new TxExecution(
                _fx.Hash2,
                _fx.TxId1,
                true,
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new HashDigest<SHA256>(TestUtils.GetRandomBytes(HashDigest<SHA256>.Size)),
                new List<string>() { "AnotherExceptionName", "YetAnotherExceptionName" });
            _blockChain.UpdateTxExecutions(new TxExecution[] { inputA, inputB, inputC });

            AssertTxExecutionEqual(inputA, getTxExecution(_fx.Hash1, _fx.TxId1));
            AssertTxExecutionEqual(inputB, getTxExecution(_fx.Hash1, _fx.TxId2));
            AssertTxExecutionEqual(inputC, getTxExecution(_fx.Hash2, _fx.TxId1));
            Assert.Null(getTxExecution(_fx.Hash2, _fx.TxId2));
        }
    }
}
