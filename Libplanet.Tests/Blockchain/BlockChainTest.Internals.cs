using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
using Serilog;
using Xunit;

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
    }
}
