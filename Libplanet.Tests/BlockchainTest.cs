using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests
{
    public class BlockchainTest : IDisposable
    {
        private FileStoreFixture _fx;
        private Blockchain<BaseAction> _blockchain;

        public BlockchainTest()
        {
            _fx = new FileStoreFixture();
            _blockchain = new Blockchain<BaseAction>(_fx.Store);
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public void CanMineBlock()
        {
            Block<BaseAction> block = _blockchain.MineBlock(_fx.Address1);
            block.Validate();
            Assert.Contains(block, _blockchain);

            Block<BaseAction> anotherBlock = _blockchain.MineBlock(_fx.Address2);
            anotherBlock.Validate();
            Assert.Contains(anotherBlock, _blockchain);
        }

        [Fact]
        public void CanFindBlockByIndex()
        {
            // use assignment to snooze compiler error (CS0201)
            Assert.Throws<IndexOutOfRangeException>(() => { var x = _blockchain[0]; });
            Block<BaseAction> block = _blockchain.MineBlock(_fx.Address1);
            Assert.Equal(block, _blockchain[0]);

            Block<BaseAction> anotherBlock = _blockchain.MineBlock(_fx.Address2);
            Assert.Equal(anotherBlock, _blockchain[1]);
        }

        [Fact]
        public void CanIterate()
        {
            Assert.Empty(_blockchain);
            _blockchain.MineBlock(_fx.Address1);

            Assert.NotEmpty(_blockchain);
        }

        [Fact]
        public void CanStateTransactions()
        {
            Assert.Empty(_blockchain.Transactions);
            var txs = new HashSet<Transaction<BaseAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            _blockchain.StageTransactions(txs);
            Assert.Equal(
                txs,
                _blockchain.Transactions.Values.ToHashSet()
            );
        }

        [Fact]
        public void CanProcessActions()
        {
            var actions = new List<BaseAction>()
            {
                new Attack()
                {
                    Weapon = "sword",
                    Target = "goblin",
                },
                new Attack()
                {
                    Weapon = "sword",
                    Target = "orc",
                },
                new Attack()
                {
                    Weapon = "staff",
                    Target = "goblin",
                },
            };
            Transaction<BaseAction> tx = Transaction<BaseAction>.Make(
                new PrivateKey(),
                _fx.Address1,
                actions,
                DateTime.UtcNow
            );

            _blockchain.StageTransactions(new HashSet<Transaction<BaseAction>> { tx });
            _blockchain.MineBlock(_fx.Address1);

            AddressStateMap states = _blockchain.GetStates(new List<Address> { _fx.Address1 });
            Assert.NotEmpty(states);

            var result = (BattleResult)states[_fx.Address1];
            Assert.Contains("sword", result.UsedWeapons);
            Assert.Contains("staff", result.UsedWeapons);
            Assert.Contains("orc", result.Targets);
            Assert.Contains("goblin", result.Targets);
        }

        [Fact]
        public void CanAppendBlock()
        {
            Assert.Empty(_blockchain.Blocks);
            _blockchain.Append(_fx.Block1);
            Assert.Contains(_fx.Block1, _blockchain);
        }

        [Fact]
        public void CanStoreAddresses()
        {
            Assert.Empty(_blockchain.Addresses);
            var txs = new HashSet<Transaction<BaseAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            _blockchain.StageTransactions(txs);
            _blockchain.MineBlock(_fx.Address1);

            Assert.NotEmpty(_blockchain.Addresses);
            Assert.Contains(_fx.Transaction1, _blockchain.Addresses[_fx.Transaction1.Recipient]);
            Assert.DoesNotContain(_fx.Transaction2, _blockchain.Addresses[_fx.Transaction1.Recipient]);
        }
    }
}
