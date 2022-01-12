using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [Fact]
        public void StageTransaction()
        {
            var txs = new HashSet<Transaction<DumbAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain));

            StageTransactions(txs);
            Assert.Equal(txs, _blockChain.StagePolicy.Iterate(_blockChain).ToHashSet());
        }

        [Fact]
        public void StageTransactionWithDifferentGenesis()
        {
            Transaction<DumbAction> tx1 = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                _blockChain.Genesis.Hash,
                new List<DumbAction>());
            Transaction<DumbAction> tx2 = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                null,
                new List<DumbAction>());
            Transaction<DumbAction> tx3 = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                default(BlockHash),
                new List<DumbAction>());

            Assert.True(_blockChain.StageTransaction(tx1));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            Assert.Throws<InvalidTxGenesisHashException>(() => _blockChain.StageTransaction(tx2));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            Assert.Throws<InvalidTxGenesisHashException>(() => _blockChain.StageTransaction(tx3));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
        }

        [Fact]
        public async Task TransactionsWithDuplicatedNonce()
        {
            var key = new PrivateKey();

            Transaction<DumbAction> tx_0_0 = _fx.MakeTransaction(
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty,
                nonce: 0,
                privateKey: key
            );
            Transaction<DumbAction> tx_0_1 = _fx.MakeTransaction(
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty,
                nonce: 0,
                privateKey: key
            );
            Transaction<DumbAction> tx_1_0 = _fx.MakeTransaction(
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty,
                nonce: 1,
                privateKey: key
            );
            Transaction<DumbAction> tx_1_1 = _fx.MakeTransaction(
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty,
                nonce: 1,
                privateKey: key
            );

            // stage tx_0_0 -> mine tx_0_0 -> stage tx_0_1
            Assert.True(_blockChain.StageTransaction(tx_0_0));
            await _blockChain.MineBlock(key);
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
            await _blockChain.MineBlock(key);
            // tx_0_1 and tx_1_x should be still staged, just filtered
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Equal(2, _blockChain.StagePolicy.Iterate(_blockChain, filtered: false).Count());
        }

        [Fact]
        public void UnstageTransaction()
        {
            Transaction<DumbAction>[] txs = { _fx.Transaction1, _fx.Transaction2 };
            Assert.Empty(_blockChain.GetStagedTransactionIds());

            StageTransactions(txs);

            HashSet<TxId> txIds = txs.Select(tx => tx.Id).ToHashSet();
            HashSet<TxId> stagedTxIds = _blockChain.GetStagedTransactionIds().ToHashSet();

            Assert.Equal(txIds, stagedTxIds);

            Assert.True(_blockChain.UnstageTransaction(_fx.Transaction1));
            Assert.True(_blockChain.UnstageTransaction(_fx.Transaction2));

            Assert.Empty(_blockChain.GetStagedTransactionIds());
        }

        private void StageTransactions(IEnumerable<Transaction<DumbAction>> txs)
        {
            foreach (Transaction<DumbAction> tx in txs)
            {
                _blockChain.StageTransaction(tx);
            }
        }
    }
}
