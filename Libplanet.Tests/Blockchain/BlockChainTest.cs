using System;
using System.Collections.Async;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public class BlockChainTest : IDisposable
    {
        private FileStoreFixture _fx;
        private BlockChain<BaseAction> _blockChain;

        public BlockChainTest()
        {
            _fx = new FileStoreFixture();
            _blockChain = new BlockChain<BaseAction>(
                new BlockPolicy<BaseAction>(),
                _fx.Store
            );
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public async Task CanMineBlock()
        {
            Block<BaseAction> block = await _blockChain.MineBlock(_fx.Address1);
            block.Validate();
            Assert.Contains(block, _blockChain);

            Block<BaseAction> anotherBlock = await _blockChain.MineBlock(_fx.Address2);
            anotherBlock.Validate();
            Assert.Contains(anotherBlock, _blockChain);
        }

        [Fact]
        public async Task CanFindBlockByIndex()
        {
            // use assignment to snooze compiler error (CS0201)
            Assert.Throws<IndexOutOfRangeException>(() => { var x = _blockChain[0]; });
            Block<BaseAction> block = await _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(block, _blockChain[0]);

            Block<BaseAction> anotherBlock = await _blockChain.MineBlock(_fx.Address2);
            Assert.Equal(anotherBlock, _blockChain[1]);
        }

        [Fact]
        public void CanIterate()
        {
            Assert.Empty(_blockChain);
            _blockChain.MineBlock(_fx.Address1);

            Assert.NotEmpty(_blockChain);
        }

        [Fact]
        public void CanStateTransactions()
        {
            Assert.Empty(_blockChain.Transactions);
            var txs = new HashSet<Transaction<BaseAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            _blockChain.StageTransactions(txs);
            Assert.Equal(
                txs,
                _blockChain.Transactions.Values.ToHashSet()
            );
        }

        [Fact]
        public async Task CanProcessActions()
        {
            var actions1 = new List<BaseAction>()
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
            Transaction<BaseAction> tx1 = Transaction<BaseAction>.Make(
                new PrivateKey(),
                _fx.Address1,
                actions1,
                DateTime.UtcNow
            );

            _blockChain.StageTransactions(new HashSet<Transaction<BaseAction>> { tx1 });
            await _blockChain.MineBlock(_fx.Address1);

            AddressStateMap states = await _blockChain.GetStates(new List<Address> { _fx.Address1 });
            Assert.NotEmpty(states);

            var result = (BattleResult)states[_fx.Address1];
            Assert.Contains("sword", result.UsedWeapons);
            Assert.Contains("staff", result.UsedWeapons);
            Assert.Contains("orc", result.Targets);
            Assert.Contains("goblin", result.Targets);

            var actions2 = new List<BaseAction>()
            {
                new Attack()
                {
                    Weapon = "bow",
                    Target = "goblin",
                },
            };
            Transaction<BaseAction> tx2 = Transaction<BaseAction>.Make(
                new PrivateKey(),
                _fx.Address1,
                actions2,
                DateTime.UtcNow
            );

            _blockChain.StageTransactions(new HashSet<Transaction<BaseAction>> { tx2 });
            await _blockChain.MineBlock(_fx.Address1);

            states = await _blockChain.GetStates(new List<Address> { _fx.Address1 });
            result = (BattleResult)states[_fx.Address1];
            Assert.Contains("bow", result.UsedWeapons);
        }

        [Fact]
        public void CanAppendBlock()
        {
            Assert.Empty(_blockChain.Blocks);
            _blockChain.Append(_fx.Block1);
            Assert.Contains(_fx.Block1, _blockChain);
        }

        [Fact]
        public void CanStoreAddresses()
        {
            Assert.Empty(_blockChain.Addresses);
            var txs = new HashSet<Transaction<BaseAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            _blockChain.StageTransactions(txs);
            _blockChain.MineBlock(_fx.Address1);

            Assert.NotEmpty(_blockChain.Addresses);
            Assert.Contains(_fx.Transaction1, _blockChain.Addresses[_fx.Transaction1.Recipient]);
            Assert.DoesNotContain(_fx.Transaction2, _blockChain.Addresses[_fx.Transaction1.Recipient]);
        }

        [Fact]
        public async Task CanFindNextHashes()
        {
            await _blockChain.Append(_fx.Block1);
            var block0 = _fx.Block1;
            var block1 = await _blockChain.MineBlock(_fx.Address1);
            var block2 = await _blockChain.MineBlock(_fx.Address1);
            var block3 = await _blockChain.MineBlock(_fx.Address1);

            Assert.Equal(
                new[] { block0.Hash, block1.Hash, block2.Hash, block3.Hash, },
                await _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block0.Hash })).ToArrayAsync());
            Assert.Equal(
                new[] { block1.Hash, block2.Hash, block3.Hash },
                await _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block1.Hash, block0.Hash })).ToArrayAsync());
            Assert.Equal(
                new[] { block0.Hash, block1.Hash, block2.Hash },
                await _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block0.Hash }),
                    stop: block2.Hash).ToArrayAsync());
            Assert.Equal(
                new[] { block0.Hash, block1.Hash },
                await _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block0.Hash }),
                    count: 2).ToArrayAsync());
        }

        [Fact]
        public async Task CanDeleteAfter()
        {
            var block1 = await _blockChain.MineBlock(_fx.Address1);
            var block2 = await _blockChain.MineBlock(_fx.Address1);
            var block3 = await _blockChain.MineBlock(_fx.Address1);

            await _blockChain.DeleteAfter(block2.Hash);

            Assert.Equal(new[] { block1, block2 }, _blockChain);
        }

        [Fact]
        public async Task CanGetBlockLocator()
        {
            List<Block<BaseAction>> blocks = (await Task.WhenAll(
                Enumerable.Range(0, 10)
                    .Select(_ => _blockChain.MineBlock(_fx.Address1))
            )).ToList();

            BlockLocator actual = await _blockChain.GetBlockLocator(threshold: 2);
            BlockLocator expected = new BlockLocator(new[]
            {
                blocks[9].Hash,
                blocks[8].Hash,
                blocks[7].Hash,
                blocks[6].Hash,
                blocks[4].Hash,
                blocks[0].Hash,
            });

            Assert.Equal(expected, actual);
        }
    }
}
