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
            Assert.Throws<ArgumentOutOfRangeException>(() => { var x = _blockChain[0]; });
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
        public void StageTransactions()
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
        public void UnstageTransactions()
        {
            Assert.Empty(_blockChain.Transactions);
            var txs = new HashSet<Transaction<DumbAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            _blockChain.StageTransactions(txs);
            HashSet<TxId> txIds = txs.Select(tx => tx.Id).ToHashSet();
            HashSet<TxId> stagedTxIds = _blockChain.Store
                .IterateStagedTransactionIds().ToHashSet();
            Assert.Equal(txIds, stagedTxIds);
            _blockChain.UnstageTransactions(txs);
            Assert.Empty(_blockChain.Store.IterateStagedTransactionIds());
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
        public void Append()
        {
            DumbAction.RenderRecords.Value =
                ImmutableList<DumbAction.RenderRecord>.Empty;

            Address[] addresses = Enumerable.Repeat(0, 4)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();

            Assert.Empty(_blockChain.Blocks);
            try
            {
                Block<DumbAction> b0 = TestUtils.MineGenesis<DumbAction>();
                _blockChain.Append(b0);
                Assert.Contains(b0, _blockChain);
                Assert.Equal(new[] { b0 }, _blockChain.ToArray());
                Assert.Empty(DumbAction.RenderRecords.Value);

                Transaction<DumbAction>[] txs =
                {
                    _fx.MakeTransaction(new[]
                    {
                        new DumbAction(addresses[0], "foo"),
                        new DumbAction(addresses[1], "bar"),
                    }),
                    _fx.MakeTransaction(new[]
                    {
                        new DumbAction(addresses[2], "baz"),
                        new DumbAction(addresses[3], "qux"),
                    }),
                };
                Block<DumbAction> b1 = TestUtils.MineNext(
                    b0,
                    txs,
                    null,
                    _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
                );
                _blockChain.Append(b1);
                Assert.Contains(b1, _blockChain);
                Assert.Equal(new[] { b0, b1 }, _blockChain.ToArray());
                var renders = DumbAction.RenderRecords.Value;
                Assert.Equal(4, renders.Count);
                Assert.True(renders.All(r => r.Render));
                Assert.Equal("foo", renders[0].Action.Item);
                Assert.Equal(1, renders[0].Context.BlockIndex);
                Assert.Equal(
                    new string[] { null, null, null, null },
                    addresses.Select(renders[0].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new[] { "foo", null, null, null },
                    addresses.Select(renders[0].NextStates.GetState)
                );
                Assert.Equal("bar", renders[1].Action.Item);
                Assert.Equal(1, renders[1].Context.BlockIndex);
                Assert.Equal(
                    addresses.Select(renders[0].NextStates.GetState),
                    addresses.Select(renders[1].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new[] { "foo", "bar", null, null },
                    addresses.Select(renders[1].NextStates.GetState)
                );
                Assert.Equal("baz", renders[2].Action.Item);
                Assert.Equal(1, renders[2].Context.BlockIndex);
                Assert.Equal(
                    addresses.Select(renders[1].NextStates.GetState),
                    addresses.Select(renders[2].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new[] { "foo", "bar", "baz", null },
                    addresses.Select(renders[2].NextStates.GetState)
                );
                Assert.Equal("qux", renders[3].Action.Item);
                Assert.Equal(1, renders[3].Context.BlockIndex);
                Assert.Equal(
                    addresses.Select(renders[2].NextStates.GetState),
                    addresses.Select(renders[3].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new[] { "foo", "bar", "baz", "qux" },
                    addresses.Select(renders[3].NextStates.GetState)
                );
            }
            finally
            {
                DumbAction.RenderRecords.Value =
                    ImmutableList<DumbAction.RenderRecord>.Empty;
            }
        }

        [Fact]
        public void AppendValidatesBlock()
        {
            var blockChain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(
                    new InvalidBlockDifficultyException(string.Empty)),
                _fx.Store);
            Assert.Throws<InvalidBlockDifficultyException>(
                () => blockChain.Append(_fx.Block1));
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
        public void ForkStateReferences()
        {
            Address address = new PrivateKey().PublicKey.ToAddress();

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(new[]
                {
                    new DumbAction(address, "foo"),
                }),
            };
            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(new[]
                {
                    new DumbAction(address, "bar"),
                }),
            };

            Block<DumbAction> genesis = TestUtils.MineGenesis<DumbAction>();
            _blockChain.Append(genesis);

            Block<DumbAction> b1 = TestUtils.MineNext(
                genesis,
                txsA,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b1);

            Block<DumbAction> b2 = TestUtils.MineNext(
                b1,
                txsB,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b2);

            BlockChain<DumbAction> forked = _blockChain.Fork(b1.Hash);

            var hash = forked.Store.LookupStateReference(
                forked.Id.ToString(),
                address,
                _blockChain.Tip.Index);

            Assert.Equal(b1.Hash, hash);
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

        [Fact]
        public void Swap()
        {
            // FIXME: Poor man's fixture --- should make a proper fixture.
            Append();

            BlockChain<DumbAction> fork =
                _blockChain.Fork(_blockChain.Tip.Hash);

            Address[] addresses = Enumerable.Repeat(0, 4)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();

            Transaction<DumbAction>[][] txsA =
            {
                new[]
                {
                    _fx.MakeTransaction(new[]
                    {
                        new DumbAction(addresses[0], "foo"),
                    }),
                    _fx.MakeTransaction(new[]
                    {
                        new DumbAction(addresses[1], "bar"),
                    }),
                },
                new[]
                {
                    _fx.MakeTransaction(new[]
                    {
                        new DumbAction(addresses[2], "baz"),
                    }),
                    _fx.MakeTransaction(new[]
                    {
                        new DumbAction(addresses[3], "qux"),
                    }),
                },
            };

            foreach (Transaction<DumbAction>[] txs in txsA)
            {
                Block<DumbAction> b = TestUtils.MineNext(
                    _blockChain.Tip,
                    txs,
                    null,
                    _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
                );
                _blockChain.Append(b);
            }

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(new[]
                {
                    new DumbAction(addresses[0], "fork-foo"),
                }),
                _fx.MakeTransaction(new[]
                {
                    new DumbAction(addresses[1], "fork-bar"),
                    new DumbAction(addresses[2], "fork-baz"),
                }),
            };

            try
            {
                DumbAction.RenderRecords.Value =
                    ImmutableList<DumbAction.RenderRecord>.Empty;

                Block<DumbAction> forkTip = TestUtils.MineNext(
                    fork.Tip,
                    txsB,
                    null,
                    _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
                );
                fork.Append(forkTip, DateTimeOffset.UtcNow, render: false);

                _blockChain.Swap(fork);
                var renders = DumbAction.RenderRecords.Value;

                int actionsCountA = txsA.Sum(
                    a => a.Sum(tx => tx.Actions.Count)
                );
                int actionsCountB = txsB.Sum(tx => tx.Actions.Count);

                Assert.Equal(actionsCountB + actionsCountA, renders.Count);
                Assert.True(renders.Take(actionsCountA).All(r => r.Unrender));
                Assert.True(renders.Skip(actionsCountA).All(r => r.Render));

                Assert.Equal("qux", renders[0].Action.Item);
                Assert.Equal("baz", renders[1].Action.Item);
                Assert.Equal("bar", renders[2].Action.Item);
                Assert.Equal("foo", renders[3].Action.Item);
                Assert.Equal("fork-foo", renders[4].Action.Item);
                Assert.Equal("fork-bar", renders[5].Action.Item);
                Assert.Equal("fork-baz", renders[6].Action.Item);
            }
            finally
            {
                DumbAction.RenderRecords.Value =
                    ImmutableList<DumbAction.RenderRecord>.Empty;
            }
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
            string resultString = string.Join(", ", result.Keys);
            string targetString = string.Join(", ", targetAddresses);
            string message =
                $"The result dictionary ({resultString}) does not " +
                $"cover all requested addresses ({targetString}).";
            foreach (Address targetAddress in targetAddresses)
            {
                Assert.True(result.ContainsKey(targetAddress), message);
            }

            var callCount = tracker.Logs.Where(
                triple => triple.Item1.Equals("GetBlockStates")
            ).Select(triple => triple.Item2).Count();
            Assert.True(testingDepth >= callCount);
        }

        [Fact]
        public void GetStatesReturnsEarlyForNonexistentAccount()
        {
            var tracker = new StoreTracker(_fx.Store);
            var chain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(),
                tracker
            );

            Block<DumbAction> b = TestUtils.MineGenesis<DumbAction>();
            chain.Append(b);
            for (int i = 0; i < 20; ++i)
            {
                b = TestUtils.MineNext(b);
                chain.Append(b);
            }

            tracker.ClearLogs();
            Address nonexistent = new PrivateKey().PublicKey.ToAddress();
            AddressStateMap result = chain.GetStates(new[] { nonexistent });
            Assert.False(result.ContainsKey(nonexistent));
            var callCount = tracker.Logs.Where(
                triple => triple.Item1.Equals("GetBlockStates")
            ).Select(triple => triple.Item2).Count();
            Assert.True(
                callCount <= 1,
                $"GetBlocksStates() was called {callCount} times"
            );
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
            private readonly InvalidBlockException _exceptionToThrow;

            public NullPolicy(InvalidBlockException exceptionToThrow = null)
            {
                _exceptionToThrow = exceptionToThrow;
            }

            public long GetNextBlockDifficulty(IReadOnlyList<Block<T>> blocks) =>
                blocks.Any() ? 1 : 0;

            public InvalidBlockException ValidateNextBlock(
                IReadOnlyList<Block<T>> blocks, Block<T> nextBlock) =>
                _exceptionToThrow;
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

            public void Render(
                IActionContext context,
                IAccountStateDelta nextStates)
            {
            }

            public void Unrender(
                IActionContext context,
                IAccountStateDelta nextStates)
            {
            }
        }
    }
}
