using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
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
                default(HashDigest<SHA256>),
                new List<DumbAction>());

            _blockChain.StageTransaction(tx1);
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            Assert.Throws<InvalidTxGenesisHashException>(() => _blockChain.StageTransaction(tx2));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
            Assert.Throws<InvalidTxGenesisHashException>(() => _blockChain.StageTransaction(tx3));
            Assert.Equal(1, _blockChain.GetStagedTransactionIds().Count);
        }

        [Fact]
        public async Task TransactionsWithTxsShouldNotBeStaged()
        {
            var key = new PrivateKey();
            Transaction<DumbAction> txWithValidNonce = _fx.MakeTransaction(
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty,
                privateKey: key
            );
            _blockChain.StageTransaction(txWithValidNonce);
            await _blockChain.MineBlock(default);
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain));

            Transaction<DumbAction> txWithInvalidNonce = _fx.MakeTransaction(
                new DumbAction[0],
                ImmutableHashSet<Address>.Empty,
                nonce: txWithValidNonce.Nonce,
                privateKey: key
            );
            _blockChain.StageTransaction(txWithInvalidNonce);
            Assert.Empty(_blockChain.StagePolicy.Iterate(_blockChain));
            Assert.True(_blockChain.StagePolicy.Ignores(_blockChain, txWithInvalidNonce.Id));
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

            _blockChain.UnstageTransaction(_fx.Transaction1);
            _blockChain.UnstageTransaction(_fx.Transaction2);

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
