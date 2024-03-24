using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Action;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableFact]
        public void StageTransaction()
        {
            var txs = new HashSet<Transaction>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain));

            StageTransactions(txs);
            Assert.Equal(txs, _blockChain.StagePolicy.Iterate(_blockChain).ToHashSet());
        }

        [SkippableFact]
        public void StageTransactionWithDifferentGenesis()
        {
            Transaction tx1 = Transaction.Create(
                0,
                new PrivateKey(),
                _blockChain.Genesis.Hash,
                new List<DumbAction>().ToPlainValues());
            Transaction tx2 = Transaction.Create(
                0,
                new PrivateKey(),
                null,
                new List<DumbAction>().ToPlainValues());
            Transaction tx3 = Transaction.Create(
                0,
                new PrivateKey(),
                default(BlockHash),
                new List<DumbAction>().ToPlainValues());

            Assert.True(_blockChain.StageTransaction(tx1));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            Assert.Throws<InvalidTxGenesisHashException>(() => _blockChain.StageTransaction(tx2));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            Assert.Throws<InvalidTxGenesisHashException>(() => _blockChain.StageTransaction(tx3));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
        }

        [SkippableFact]
        public void TransactionsWithDuplicatedNonce()
        {
            var key = new PrivateKey();

            Transaction tx_0_0 = _fx.MakeTransaction(
                Array.Empty<DumbAction>(),
                nonce: 0,
                privateKey: key
            );
            Transaction tx_0_1 = _fx.MakeTransaction(
                Array.Empty<DumbAction>(),
                nonce: 0,
                privateKey: key
            );
            Transaction tx_1_0 = _fx.MakeTransaction(
                Array.Empty<DumbAction>(),
                nonce: 1,
                privateKey: key
            );
            Transaction tx_1_1 = _fx.MakeTransaction(
                Array.Empty<DumbAction>(),
                nonce: 1,
                privateKey: key
            );

            // stage tx_0_0 -> mine tx_0_0 -> stage tx_0_1
            Assert.True(_blockChain.StageTransaction(tx_0_0));
            var block = _blockChain.ProposeBlock(key);
            _blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));
            // should still able to stage a low nonce tx
            Assert.True(_blockChain.StageTransaction(tx_0_1));
            // tx_0_1 is still staged, just filtered.
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.NotEmpty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: false));

            // stage tx_1_0 -> stage tx_1_1 -> mine tx_1_0 or tx_1_1
            Assert.True(_blockChain.StageTransaction(tx_1_0));
            Assert.True(_blockChain.StageTransaction(tx_1_1));
            var txIds = new List<TxId>() { tx_1_0.Id, tx_1_1.Id };
            Assert.Equal(2, _blockChain.GetStagedTransactionIds().Count);
            Assert.Equal(
                txIds.OrderBy(id => id),
                _blockChain.GetStagedTransactionIds().OrderBy(id => id)
            );
            block = _blockChain.ProposeBlock(
                key,
                TestUtils.CreateBlockCommit(_blockChain.Tip),
                TestUtils.CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(
                block,
                TestUtils.CreateBlockCommit(block));
            // tx_0_1 and tx_1_x should be still staged, just filtered
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Equal(2, _blockChain.StagePolicy.Iterate(_blockChain, filtered: false).Count());
        }

        [SkippableFact]
        public void UnstageTransaction()
        {
            Transaction[] txs = { _fx.Transaction1, _fx.Transaction2 };
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            StageTransactions(txs);

            HashSet<TxId> txIds = txs.Select(tx => tx.Id).ToHashSet();
            HashSet<TxId> stagedTxIds = _blockChain.GetStagedTransactionIds().ToHashSet();

            Assert.Equal(txIds, stagedTxIds);

            Assert.True(_blockChain.UnstageTransaction(_fx.Transaction1));
            Assert.True(_blockChain.UnstageTransaction(_fx.Transaction2));

            Assert.Empty(_blockChain.GetStagedTransactionIds());
        }

        private void StageTransactions(IEnumerable<Transaction> txs)
        {
            foreach (Transaction tx in txs)
            {
                _blockChain.StageTransaction(tx);
            }
        }
    }
}
