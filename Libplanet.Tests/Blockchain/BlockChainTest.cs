using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Xml.Schema;
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
        private BlockChain<DumbAction> _blockChain;

        public BlockChainTest()
        {
            _fx = new FileStoreFixture();
            _blockChain = new BlockChain<DumbAction>(
                new BlockPolicy<DumbAction>(),
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
            Block<DumbAction> block = _blockChain.MineBlock(_fx.Address1);
            block.Validate(DateTimeOffset.UtcNow);
            Assert.Contains(block, _blockChain);

            Block<DumbAction> anotherBlock = _blockChain.MineBlock(_fx.Address2);
            anotherBlock.Validate(DateTimeOffset.UtcNow);
            Assert.Contains(anotherBlock, _blockChain);
        }

        [Fact]
        public void CanFindBlockByIndex()
        {
            // use assignment to snooze compiler error (CS0201)
            Assert.Throws<IndexOutOfRangeException>(() => { var x = _blockChain[0]; });
            Block<DumbAction> block = _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(block, _blockChain[0]);

            Block<DumbAction> anotherBlock = _blockChain.MineBlock(_fx.Address2);
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
            var txs = new HashSet<Transaction<DumbAction>>()
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
            var actions1 = new List<PolymorphicAction<BaseAction>>()
            {
                new Attack
                {
                    Weapon = "sword",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
                new Attack
                {
                    Weapon = "sword",
                    Target = "orc",
                    TargetAddress = _fx.Address1,
                },
                new Attack
                {
                    Weapon = "staff",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
            };
            var tx1 = Transaction<PolymorphicAction<BaseAction>>.Create(
                new PrivateKey(),
                actions1
            );

            var chain = new BlockChain<PolymorphicAction<BaseAction>>(
                new BlockPolicy<PolymorphicAction<BaseAction>>(),
                _fx.Store
            );
            chain.StageTransactions(
                new HashSet<Transaction<PolymorphicAction<BaseAction>>> { tx1 }
            );
            var lastBlock = chain.MineBlock(_fx.Address1);

            AddressStateMap states = chain.GetStates(
                new List<Address> { _fx.Address1 }
            );
            Assert.NotEmpty(states);

            var result = (BattleResult)states[_fx.Address1];
            Assert.Contains("sword", result.UsedWeapons);
            Assert.Contains("staff", result.UsedWeapons);
            Assert.Contains("orc", result.Targets);
            Assert.Contains("goblin", result.Targets);

            PolymorphicAction<BaseAction>[] actions2 =
            {
                new Attack
                {
                    Weapon = "bow",
                    Target = "goblin",
                    TargetAddress = _fx.Address1,
                },
            };
            var tx2 = Transaction<PolymorphicAction<BaseAction>>.Create(
                new PrivateKey(),
                actions2
            );

            chain.StageTransactions(
                new HashSet<Transaction<PolymorphicAction<BaseAction>>> { tx2 }
            );
            chain.MineBlock(_fx.Address1);

            states = chain.GetStates(new List<Address> { _fx.Address1 });
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

            BlockChain<DumbAction> forked = _blockChain.Fork(block2.Hash);

            Assert.Equal(new[] { block1, block2, block3 }, _blockChain);
            Assert.Equal(new[] { block1, block2 }, forked);
        }

        [Fact]
        public void CanGetBlockLocator()
        {
            List<Block<DumbAction>> blocks = Enumerable.Range(0, 10)
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

        // This is a regression test for:
        // https://github.com/planetarium/libplanet/issues/189#issuecomment-482443607.
        [Fact]
        public void GetStatesOnlyDrillsDownUntilRequestedAddressesAreFound()
        {
            var tracker = new StoreTracker(_fx.Store);
            var chain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(),
                tracker
            );

            Block<DumbAction> b = TestUtils.MineGenesis<DumbAction>();
            chain.Append(b);
            Address[] addresses = new Address[30];
            for (int i = 0; i < addresses.Length; ++i)
            {
                var privateKey = new PrivateKey();
                Address address = privateKey.PublicKey.ToAddress();
                addresses[i] = address;
                DumbAction[] actions =
                {
                    new DumbAction(address, "foo"),
                    new DumbAction(i < 1 ? address : addresses[i - 1], "bar"),
                };
                Transaction<DumbAction>[] txs =
                {
                    Transaction<DumbAction>.Create(privateKey, actions),
                };
                b = TestUtils.MineNext(b, txs);
                chain.Append(b);
            }

            tracker.ClearLogs();
            int testingDepth = addresses.Length / 2;
            Address[] targetAddresses = Enumerable.Range(
                testingDepth,
                Math.Min(10, addresses.Length - testingDepth - 1)
            ).Select(i => addresses[i]).ToArray();
            AddressStateMap result = chain.GetStates(targetAddresses);
            foreach (Address targetAddress in targetAddresses)
            {
                Assert.True(result.ContainsKey(targetAddress));
            }

            var callCount = tracker.Logs.Where(
                triple => triple.Item1.Equals("GetBlockStates")
            ).Select(triple => triple.Item2).Count();
            Assert.True(testingDepth >= callCount);
        }

        [Fact]
        public void EvaluateActions()
        {
            PrivateKey fromPrivateKey = new PrivateKey();
            Address fromAddress = fromPrivateKey.PublicKey.ToAddress();
            long blockIndex = 0;

            TestEvaluateAction action = new TestEvaluateAction();
            var tx1 = Transaction<TestEvaluateAction>.Create(
                fromPrivateKey,
                new[] { action }
            );

            var chain = new BlockChain<TestEvaluateAction>(
                new BlockPolicy<TestEvaluateAction>(),
                _fx.Store
            );
            chain.StageTransactions(
                new HashSet<Transaction<TestEvaluateAction>> { tx1 }
            );
            chain.MineBlock(_fx.Address1);
            var states = chain.GetStates(new[]
            {
                TestEvaluateAction.SignerKey,
                TestEvaluateAction.MinerKey,
                TestEvaluateAction.BlockIndexKey,
            });

            Assert.Equal(
                states[TestEvaluateAction.SignerKey],
                fromAddress.ToHex()
            );
            Assert.Equal(
                states[TestEvaluateAction.MinerKey],
                _fx.Address1.ToHex());
            Assert.Equal(states[TestEvaluateAction.BlockIndexKey], blockIndex);
        }

        private sealed class NullPolicy<T> : IBlockPolicy<T>
            where T : IAction, new()
        {
            public int GetNextBlockDifficulty(IEnumerable<Block<T>> blocks) =>
                blocks.Any() ? 1 : 0;

            public InvalidBlockException ValidateBlocks(
                IEnumerable<Block<T>> blocks,
                DateTimeOffset currentTime
            ) => null;
        }

        private sealed class TestEvaluateAction : IAction
        {
            public static readonly Address SignerKey =
                new PrivateKey().PublicKey.ToAddress();

            public static readonly Address MinerKey =
                new PrivateKey().PublicKey.ToAddress();

            public static readonly Address BlockIndexKey =
                new PrivateKey().PublicKey.ToAddress();

            public TestEvaluateAction()
            {
            }

            public IImmutableDictionary<string, object> PlainValue =>
                new Dictionary<string, object>().ToImmutableDictionary();

            public void LoadPlainValue(
                IImmutableDictionary<string, object> plainValue)
            {
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates
                    .SetState(SignerKey, context.Signer.ToHex())
                    .SetState(MinerKey, context.Miner.ToHex())
                    .SetState(BlockIndexKey, context.BlockIndex);
            }
        }
    }
}
