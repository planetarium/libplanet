using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
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
        public void CanMineBlock()
        {
            Block<BaseAction> block = _blockChain.MineBlock(_fx.Address1);
            block.Validate();
            Assert.Contains(block, _blockChain);

            Block<BaseAction> anotherBlock = _blockChain.MineBlock(_fx.Address2);
            anotherBlock.Validate();
            Assert.Contains(anotherBlock, _blockChain);
        }

        [Fact]
        public void CanFindBlockByIndex()
        {
            // use assignment to snooze compiler error (CS0201)
            Assert.Throws<IndexOutOfRangeException>(() => { var x = _blockChain[0]; });
            Block<BaseAction> block = _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(block, _blockChain[0]);

            Block<BaseAction> anotherBlock = _blockChain.MineBlock(_fx.Address2);
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
        public void ProcessActions()
        {
            var actions1 = new List<BaseAction>()
            {
                new Attack()
                {
                    Weapon = "sword",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
                new Attack()
                {
                    Weapon = "sword",
                    Target = "orc",
                    TargetAddress = _fx.Address1,
                },
                new Attack()
                {
                    Weapon = "staff",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
            };
            Transaction<BaseAction> tx1 = Transaction<BaseAction>.Make(
                new PrivateKey(),
                ImmutableHashSet.Create(_fx.Address1),
                actions1,
                DateTimeOffset.UtcNow
            );

            _blockChain.StageTransactions(new HashSet<Transaction<BaseAction>> { tx1 });
            var lastBlock = _blockChain.MineBlock(_fx.Address1);

            AddressStateMap states = _blockChain.GetStates(new List<Address> { _fx.Address1 });
            Assert.NotEmpty(states);

            var result = (BattleResult)states[_fx.Address1];
            Assert.Contains("sword", result.UsedWeapons);
            Assert.Contains("staff", result.UsedWeapons);
            Assert.Contains("orc", result.Targets);
            Assert.Contains("goblin", result.Targets);

            IAccountStateView view =
                _blockChain.GetAccountStateView(lastBlock.Hash);
            Assert.Equal(result, view.GetAccountState(_fx.Address1));
            Assert.Null(view.GetAccountState(_fx.Address2));

            BaseAction[] actions2 =
            {
                new Attack()
                {
                    Weapon = "bow",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
            };
            Transaction<BaseAction> tx2 = Transaction<BaseAction>.Make(
                new PrivateKey(),
                ImmutableHashSet.Create(_fx.Address1),
                actions2,
                DateTimeOffset.UtcNow
            );

            _blockChain.StageTransactions(new HashSet<Transaction<BaseAction>> { tx2 });
            lastBlock = _blockChain.MineBlock(_fx.Address1);

            states = _blockChain.GetStates(new List<Address> { _fx.Address1 });
            result = (BattleResult)states[_fx.Address1];
            Assert.Contains("bow", result.UsedWeapons);

            view = _blockChain.GetAccountStateView(lastBlock.Hash);
            Assert.Equal(result, view.GetAccountState(_fx.Address1));
            Assert.Null(view.GetAccountState(_fx.Address2));
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
                _fx.MakeTransaction(
                    new[]
                    {
                        new Attack
                        {
                            Weapon = "sword",
                            Target = "goblin",
                            TargetAddress = _fx.Address1,
                        },
                    },
                    new[] { _fx.Address1 }.ToImmutableHashSet()
                ),
            };
            _blockChain.StageTransactions(txs);
            _blockChain.MineBlock(_fx.Address1);

            Assert.Contains(_fx.Address1, _blockChain.Addresses);
            foreach (Address a in _fx.Transaction1.UpdatedAddresses)
            {
                Assert.Contains(_fx.Transaction1, _blockChain.Addresses[a]);
                Assert.DoesNotContain(
                    _fx.Transaction2,
                    _blockChain.Addresses[a]
                );
            }
        }

        [Fact]
        public void CanFindNextHashes()
        {
            _blockChain.Append(_fx.Block1);
            var block0 = _fx.Block1;
            var block1 = _blockChain.MineBlock(_fx.Address1);
            var block2 = _blockChain.MineBlock(_fx.Address1);
            var block3 = _blockChain.MineBlock(_fx.Address1);

            Assert.Equal(
                new[] { block0.Hash, block1.Hash, block2.Hash, block3.Hash, },
                _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block0.Hash })));
            Assert.Equal(
                new[] { block1.Hash, block2.Hash, block3.Hash },
                _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block1.Hash, block0.Hash })));
            Assert.Equal(
                new[] { block0.Hash, block1.Hash, block2.Hash },
                _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block0.Hash }),
                    stop: block2.Hash));
            Assert.Equal(
                new[] { block0.Hash, block1.Hash },
                _blockChain.FindNextHashes(
                    new BlockLocator(new[] { block0.Hash }),
                    count: 2));
        }

        [Fact]
        public void CanFork()
        {
            var block1 = _blockChain.MineBlock(_fx.Address1);
            var block2 = _blockChain.MineBlock(_fx.Address1);
            var block3 = _blockChain.MineBlock(_fx.Address1);

            BlockChain<BaseAction> forked = _blockChain.Fork(block2.Hash);

            Assert.Equal(new[] { block1, block2, block3 }, _blockChain);
            Assert.Equal(new[] { block1, block2 }, forked);
        }

        [Fact]
        public void CanGetBlockLocator()
        {
            List<Block<BaseAction>> blocks = Enumerable.Range(0, 10)
                .Select(_ => _blockChain.MineBlock(_fx.Address1))
                .ToList();

            BlockLocator actual = _blockChain.GetBlockLocator(threshold: 2);
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

        [Fact]
        public void EvaluateActions()
        {
            PrivateKey fromPrivateKey = new PrivateKey();
            Address fromAddress = fromPrivateKey.PublicKey.ToAddress();
            long blockIndex = 0;

            TestEvaluateAction action = new TestEvaluateAction();
            Transaction<BaseAction> tx1 = Transaction<BaseAction>.Make(
                fromPrivateKey,
                new[]
                {
                    TestEvaluateAction.SignerKey,
                    TestEvaluateAction.BlockIndexKey,
                }.ToImmutableHashSet(),
                new[] { action },
                DateTimeOffset.UtcNow
            );

            _blockChain.StageTransactions(new HashSet<Transaction<BaseAction>> { tx1 });
            _blockChain.MineBlock(_fx.Address1);
            var states = _blockChain.GetStates(new[]
            {
                TestEvaluateAction.SignerKey,
                TestEvaluateAction.BlockIndexKey,
            });

            Assert.Equal(
                states[TestEvaluateAction.SignerKey],
                fromAddress.ToHex()
            );
            Assert.Equal(states[TestEvaluateAction.BlockIndexKey], blockIndex);
        }

        [ActionType("test")]
        private class TestEvaluateAction : BaseAction
        {
            public static readonly Address SignerKey =
                new PrivateKey().PublicKey.ToAddress();

            public static readonly Address BlockIndexKey =
                new PrivateKey().PublicKey.ToAddress();

            public override IImmutableDictionary<string, object> PlainValue =>
                new Dictionary<string, object>().ToImmutableDictionary();

            public override void LoadPlainValue(
                IImmutableDictionary<string, object> plainValue)
            {
            }

            public override IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates
                    .SetState(SignerKey, context.Signer.ToHex())
                    .SetState(BlockIndexKey, context.BlockIndex);
            }
        }
    }
}
