using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Xunit;

namespace Libplanet.Tests.Blockchain
{
    public class BlockChainTest : IDisposable
    {
        private StoreFixture _fx;
        private BlockChain<DumbAction> _blockChain;

        public BlockChainTest()
        {
            _fx = new LiteDBStoreFixture(memory: true);
            _blockChain = new BlockChain<DumbAction>(
                new BlockPolicy<DumbAction>(new MinerReward(1)),
                _fx.Store
            );
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [Fact]
        public async void CanMineBlock()
        {
            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);
            block.Validate(DateTimeOffset.UtcNow);
            Assert.Contains(block, _blockChain);

            Block<DumbAction> anotherBlock = await _blockChain.MineBlock(_fx.Address2);
            anotherBlock.Validate(DateTimeOffset.UtcNow);
            Assert.Contains(anotherBlock, _blockChain);
        }

        [Fact]
        public async void MineBlockWithPendingTxs()
        {
            var keys = new[]
            {
                new PrivateKey(),
                new PrivateKey(),
                new PrivateKey(),
            };

            var txs = new[]
            {
                Transaction<DumbAction>.Create(
                    0,
                    keys[0],
                    new DumbAction[] { }),
                Transaction<DumbAction>.Create(
                    1,
                    keys[0],
                    new DumbAction[] { }),

                // pending txs1
                Transaction<DumbAction>.Create(
                    1,
                    keys[1],
                    new DumbAction[] { }),
                Transaction<DumbAction>.Create(
                    2,
                    keys[1],
                    new DumbAction[] { }),

                // pending txs2
                Transaction<DumbAction>.Create(
                    0,
                    keys[2],
                    new DumbAction[] { }),
                Transaction<DumbAction>.Create(
                    2,
                    keys[2],
                    new DumbAction[] { }),
            };

            _blockChain.StageTransactions(txs.ToImmutableHashSet());
            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);
            Assert.Contains(block, _blockChain);
            Assert.Contains(txs[0], block.Transactions);
            Assert.Contains(txs[1], block.Transactions);
            Assert.DoesNotContain(txs[2], block.Transactions);
            Assert.DoesNotContain(txs[3], block.Transactions);
            Assert.Contains(txs[4], block.Transactions);
            Assert.DoesNotContain(txs[5], block.Transactions);
            IImmutableSet<TxId> txIds = _blockChain.GetStagedTransactionIds();
            Assert.Contains(txs[2].Id, txIds);
            Assert.Contains(txs[3].Id, txIds);
        }

        [Fact]
        public async void CanFindBlockByIndex()
        {
            // use assignment to snooze compiler error (CS0201)
            Assert.Throws<ArgumentOutOfRangeException>(() => { var x = _blockChain[0]; });
            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(block, _blockChain[0]);

            Block<DumbAction> anotherBlock = await _blockChain.MineBlock(_fx.Address2);
            Assert.Equal(anotherBlock, _blockChain[1]);
        }

        [Fact]
        public async void CanonicalId()
        {
            var x = _blockChain;
            await x.MineBlock(_fx.Address1);
            await x.MineBlock(_fx.Address1);
            Assert.Equal(x.Id, _fx.Store.GetCanonicalChainId());
            var y = x.Fork(x.Tip.Hash);
            await y.MineBlock(_fx.Address1);
            Assert.Equal(x.Id, _fx.Store.GetCanonicalChainId());

            var z = new BlockChain<DumbAction>(
                new BlockPolicy<DumbAction>(new MinerReward(1)),
                _fx.Store
            );

            Assert.Equal(x.Id, z.Id);
        }

        [Fact]
        public async void Enumerate()
        {
            Assert.Empty(_blockChain);
            Assert.Empty(_blockChain.BlockHashes);

            Block<DumbAction> genesis = await _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(new Block<DumbAction>[] { genesis }, _blockChain);
            Assert.Equal(new HashDigest<SHA256>[] { genesis.Hash }, _blockChain.BlockHashes);

            Block<DumbAction> b1 = await _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(new Block<DumbAction>[] { genesis, b1 }, _blockChain);
            Assert.Equal(
                new HashDigest<SHA256>[] { genesis.Hash, b1.Hash },
                _blockChain.BlockHashes
            );

            Block<DumbAction> b2 = await _blockChain.MineBlock(_fx.Address1);
            Assert.Equal(new Block<DumbAction>[] { genesis, b1, b2 }, _blockChain);
            Assert.Equal(
                new HashDigest<SHA256>[] { genesis.Hash, b1.Hash, b2.Hash },
                _blockChain.BlockHashes
            );
        }

        [Fact]
        public void StageTransactions()
        {
            var txs = new HashSet<Transaction<DumbAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            Assert.Empty(txs.Where(tx => _blockChain.Contains(tx.Id)));

            _blockChain.StageTransactions(txs.ToImmutableHashSet());
            Assert.Equal(
                txs,
                txs.Where(tx => _blockChain.Contains(tx.Id)).ToHashSet());
        }

        [Fact]
        public void UnstageTransactions()
        {
            Assert.Empty(_blockChain.GetStagedTransactionIds());
            var txs = new HashSet<Transaction<DumbAction>>()
            {
                _fx.Transaction1,
                _fx.Transaction2,
            };
            _blockChain.StageTransactions(txs.ToImmutableHashSet());
            HashSet<TxId> txIds = txs.Select(tx => tx.Id).ToHashSet();
            HashSet<TxId> stagedTxIds = _blockChain.GetStagedTransactionIds().ToHashSet();
            Assert.Equal(txIds, stagedTxIds);
            _blockChain.UnstageTransactions(txs);
            Assert.Empty(_blockChain.GetStagedTransactionIds());
        }

        [Fact]
        public async void ProcessActions()
        {
            var actions1 = new List<PolymorphicAction<BaseAction>>
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
                0,
                new PrivateKey(),
                actions1
            );

            var chain = new BlockChain<PolymorphicAction<BaseAction>>(
                new BlockPolicy<PolymorphicAction<BaseAction>>(),
                _fx.Store
            );
            chain.StageTransactions(
                ImmutableHashSet<Transaction<PolymorphicAction<BaseAction>>>.Empty.Add(tx1)
            );
            await chain.MineBlock(_fx.Address1);

            AddressStateMap states = chain.GetState(_fx.Address1);
            Assert.NotEmpty(states);

            var result = BattleResult.FromBencodex((Dictionary)states[_fx.Address1]);
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
                0,
                new PrivateKey(),
                actions2
            );

            chain.StageTransactions(
                ImmutableHashSet<Transaction<PolymorphicAction<BaseAction>>>.Empty.Add(tx2)
            );
            await chain.MineBlock(_fx.Address1);

            states = chain.GetState(_fx.Address1);
            result = BattleResult.FromBencodex((Dictionary)states[_fx.Address1]);
            Assert.Contains("bow", result.UsedWeapons);

            var tx3 = Transaction<PolymorphicAction<BaseAction>>.Create(
                0,
                new PrivateKey(),
                new List<PolymorphicAction<BaseAction>>
                {
                    new Attack
                    {
                        Weapon = "sword",
                        Target = "orc",
                        TargetAddress = _fx.Address1,
                    },
                }
            );
            chain.StageTransactions(
                ImmutableHashSet<Transaction<PolymorphicAction<BaseAction>>>.Empty.Add(tx3)
            );
            await chain.MineBlock(_fx.Address1);
            states = chain.GetState(_fx.Address1);

            Assert.NotEmpty(states);
        }

        [Fact]
        public void Append()
        {
            DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

            (Address[] addresses, Block<DumbAction>[] blocks) = MakeFixturesForAppendTests();

            Assert.Empty(_blockChain);
            Assert.Empty(MinerReward.RenderRecords.Value);
            try
            {
                _blockChain.Append(blocks[0]);
                Assert.Contains(blocks[0], _blockChain);
                Assert.Equal(new[] { blocks[0] }, _blockChain.ToArray());
                Assert.NotNull(_blockChain.Store.GetBlockStates(blocks[0].Hash));
                Assert.Empty(DumbAction.RenderRecords.Value);

                _blockChain.Append(blocks[1]);
                Assert.Contains(blocks[1], _blockChain);
                Assert.Equal(blocks, _blockChain.ToArray());
                Assert.NotNull(_blockChain.Store.GetBlockStates(blocks[1].Hash));
                var renders = DumbAction.RenderRecords.Value;
                var actions = renders.Select(r => (DumbAction)r.Action).ToArray();
                Assert.Equal(4, renders.Count);
                Assert.True(renders.All(r => r.Render));
                Assert.Equal("foo", actions[0].Item);
                Assert.Equal(1, renders[0].Context.BlockIndex);
                Assert.Equal(
                    new IValue[] { null, null, null, null, (Integer)1 },
                    addresses.Select(renders[0].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new IValue[] { (Text)"foo", null, null, null, (Integer)1 },
                    addresses.Select(renders[0].NextStates.GetState)
                );
                Assert.Equal("bar", actions[1].Item);
                Assert.Equal(1, renders[1].Context.BlockIndex);
                Assert.Equal(
                    addresses.Select(renders[0].NextStates.GetState),
                    addresses.Select(renders[1].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new IValue[] { (Text)"foo", (Text)"bar", null, null, (Integer)1 },
                    addresses.Select(renders[1].NextStates.GetState)
                );
                Assert.Equal("baz", actions[2].Item);
                Assert.Equal(1, renders[2].Context.BlockIndex);
                Assert.Equal(
                    addresses.Select(renders[1].NextStates.GetState),
                    addresses.Select(renders[2].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new IValue[] { (Text)"foo", (Text)"bar", (Text)"baz", null, (Integer)1 },
                    addresses.Select(renders[2].NextStates.GetState)
                );
                Assert.Equal("qux", actions[3].Item);
                Assert.Equal(1, renders[3].Context.BlockIndex);
                Assert.Equal(
                    addresses.Select(renders[2].NextStates.GetState),
                    addresses.Select(renders[3].Context.PreviousStates.GetState)
                );
                Assert.Equal(
                    new IValue[] { (Text)"foo", (Text)"bar", (Text)"baz", (Text)"qux", (Integer)1 },
                    addresses.Select(renders[3].NextStates.GetState)
                );

                var minerAddress = addresses[4];
                var blockRenders = MinerReward.RenderRecords.Value;

                Assert.Equal(
                    2,
                    (Integer)_blockChain.GetState(minerAddress)[minerAddress]);
                Assert.Equal(2, blockRenders.Count);
                Assert.True(blockRenders.All(r => r.Render));
                Assert.Equal(0, blockRenders[0].Context.BlockIndex);
                Assert.Equal(1, blockRenders[1].Context.BlockIndex);

                Assert.Equal(
                    1,
                    (Integer)blockRenders[0].NextStates.GetState(minerAddress));
                Assert.Equal(
                    1,
                    (Integer)blockRenders[1].Context.PreviousStates.GetState(minerAddress));
                Assert.Equal(
                    2,
                    (Integer)blockRenders[1].NextStates.GetState(minerAddress));
            }
            finally
            {
                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        [Fact]
        public void AppendWithoutEvaluateActions()
        {
            DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

            (_, Block<DumbAction>[] blocks) = MakeFixturesForAppendTests();

            try
            {
                Assert.Throws<ArgumentException>(() =>
                    _blockChain.Append(
                        blocks[0],
                        DateTimeOffset.UtcNow,
                        evaluateActions: false,
                        renderActions: true
                    )
                );
                Assert.DoesNotContain(blocks[0], _blockChain);
                Assert.Empty(DumbAction.RenderRecords.Value);

                _blockChain.Append(
                    blocks[0],
                    DateTimeOffset.UtcNow,
                    evaluateActions: false,
                    renderActions: false
                );
                Assert.Equal(blocks[0], _blockChain.Tip);
                Assert.Null(_blockChain.Store.GetBlockStates(blocks[0].Hash));
                Assert.Empty(DumbAction.RenderRecords.Value);
            }
            finally
            {
                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        [Fact]
        public async Task AppendWhenActionEvaluationFailed()
        {
            var policy = new NullPolicy<ThrowException>();
            var blockChain = new BlockChain<ThrowException>(policy, _fx.Store);
            var privateKey = new PrivateKey();

            var action = new ThrowException { ThrowOnExecution = true };
            var actions = new[] { action };
            Transaction<ThrowException> tx = blockChain.MakeTransaction(privateKey, actions);

            UnexpectedlyTerminatedActionException e =
            await Assert.ThrowsAsync<UnexpectedlyTerminatedActionException>(async () =>
                await blockChain.MineBlock(_fx.Address1));
            Assert.IsType<ThrowException.SomeException>(e.InnerException);

            Assert.Empty(blockChain);
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
        public void ExecuteActions()
        {
            (var addresses, Block<DumbAction>[] blocks) = MakeFixturesForAppendTests();
            _blockChain.Append(blocks[0]);
            _blockChain.Append(
                blocks[1],
                DateTimeOffset.UtcNow,
                evaluateActions: false,
                renderActions: false
            );

            var expectedStates = new Dictionary<Address, IValue>
            {
                { addresses[0], (Text)"foo" },
                { addresses[1], (Text)"bar" },
                { addresses[2], (Text)"baz" },
                { addresses[3], (Text)"qux" },
                { addresses[4], (Integer)2 },
                { MinerReward.RewardRecordAddress, (Text)$"{addresses[4]},{addresses[4]}" },
            };

            _blockChain.ExecuteActions(blocks[1], true);
            Assert.Equal(
                expectedStates.ToImmutableDictionary(),
                _blockChain.Store.GetBlockStates(blocks[1].Hash)
            );
        }

        [Fact]
        public async void FindNextHashes()
        {
            Assert.Empty(_blockChain.FindNextHashes(
                new BlockLocator(new HashDigest<SHA256>[] { })
                ));
            _blockChain.Append(_fx.Block1);
            var block0 = _fx.Block1;
            var block1 = await _blockChain.MineBlock(_fx.Address1);
            var block2 = await _blockChain.MineBlock(_fx.Address1);
            var block3 = await _blockChain.MineBlock(_fx.Address1);

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
        public async void FindNextHashesAfterFork()
        {
            await _blockChain.MineBlock(_fx.Address1);
            await _blockChain.MineBlock(_fx.Address1);
            await _blockChain.MineBlock(_fx.Address1);

            BlockChain<DumbAction> forked = _blockChain.Fork(_blockChain[0].Hash);
            await forked.MineBlock(_fx.Address1);

            BlockLocator locator = _blockChain.GetBlockLocator();
            IEnumerable<HashDigest<SHA256>> hashes = forked.FindNextHashes(locator);

            Assert.Equal(new[] { forked[0].Hash, forked[1].Hash }, hashes);
        }

        [Fact]
        public async void Fork()
        {
            var block1 = await _blockChain.MineBlock(_fx.Address1);
            var block2 = await _blockChain.MineBlock(_fx.Address1);
            var block3 = await _blockChain.MineBlock(_fx.Address1);

            BlockChain<DumbAction> forked = _blockChain.Fork(block2.Hash);

            Assert.Equal(new[] { block1, block2, block3 }, _blockChain);
            Assert.Equal(new[] { block1, block2 }, forked);
        }

        [Fact]
        public void ForkChainWithIncompleteBlockStates()
        {
            (_, _, BlockChain<DumbAction> chain) = MakeIncompleteBlockStates();
            BlockChain<DumbAction> forked = chain.Fork(chain[5].Hash);
            Assert.Equal(chain.Take(6), forked);
        }

        [Fact]
        public void ForkStateReferences()
        {
            Address addr1 = new PrivateKey().PublicKey.ToAddress();
            Address addr2 = new PrivateKey().PublicKey.ToAddress();

            var actions1 = new[] { new DumbAction(addr1, "foo") };
            var actions2 = new[] { new DumbAction(addr2, "bar") };

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions1),
            };
            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(actions2),
            };
            Transaction<DumbAction>[] txsC =
            {
                _fx.MakeTransaction(actions2),
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

            Block<DumbAction> b3 = TestUtils.MineNext(
                b2,
                txsC,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b3);

            // Fork from genesis and append two empty blocks.
            BlockChain<DumbAction> forked = _blockChain.Fork(genesis.Hash);
            Guid fId = forked.Id;
            Block<DumbAction> fb1 = TestUtils.MineNext(genesis, difficulty: b1.Difficulty);
            Block<DumbAction> fb2 = TestUtils.MineNext(fb1, difficulty: b2.Difficulty);
            forked.Append(fb1);
            forked.Append(fb2);

            Assert.Null(
                forked.Store.LookupStateReference(fId, addr1, forked.Tip));
            Assert.Null(
                forked.Store.LookupStateReference(fId, addr2, forked.Tip));

            // Fork from b1 and append a empty block.
            forked = _blockChain.Fork(b1.Hash);
            fId = forked.Id;
            fb2 = TestUtils.MineNext(b1, difficulty: b2.Difficulty);
            forked.Append(fb2);

            Assert.Equal(
                Tuple.Create(b1.Hash, b1.Index),
                forked.Store.LookupStateReference(fId, addr1, forked.Tip));
            Assert.Null(
                forked.Store.LookupStateReference(fId, addr2, forked.Tip));

            // Fork from b2.
            forked = _blockChain.Fork(b2.Hash);
            fId = forked.Id;

            Assert.Equal(
                Tuple.Create(b1.Hash, b1.Index),
                forked.Store.LookupStateReference(fId, addr1, forked.Tip));
            Assert.Equal(
                Tuple.Create(b2.Hash, b2.Index),
                forked.Store.LookupStateReference(fId, addr2, forked.Tip));
        }

        [Fact]
        public void DetectInvalidTxNonce()
        {
            var privateKey = new PrivateKey();
            var actions = new[] { new DumbAction(_fx.Address1, "foo") };

            Block<DumbAction> genesis = TestUtils.MineGenesis<DumbAction>();
            _blockChain.Append(genesis);

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
            };

            Block<DumbAction> b1 = TestUtils.MineNext(
                genesis,
                txsA,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b1);

            Block<DumbAction> b2 = TestUtils.MineNext(
                b1,
                txsA,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            Assert.Throws<InvalidTxNonceException>(() =>
                _blockChain.Append(b2));

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(
                    actions,
                    nonce: 1,
                    privateKey: privateKey),
            };
            b2 = TestUtils.MineNext(
                b1,
                txsB,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b2);
        }

        [Fact]
        public void ForkTxNonce()
        {
            // An active account, so that its some recent transactions became "stale" due to a fork.
            var privateKey = new PrivateKey();
            Address address = privateKey.PublicKey.ToAddress();

            // An inactive account, so that it has no recent transactions but only an old
            // transaction, so that its all transactions are stale-proof (stale-resistant).
            var lessActivePrivateKey = new PrivateKey();
            Address lessActiveAddress = lessActivePrivateKey.PublicKey.ToAddress();

            var actions = new[] { new DumbAction(address, "foo") };

            Block<DumbAction> genesis = TestUtils.MineGenesis<DumbAction>();
            _blockChain.Append(genesis);

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
                _fx.MakeTransaction(privateKey: lessActivePrivateKey),
            };

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Block<DumbAction> b1 = TestUtils.MineNext(
                genesis,
                txsA,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));

            _blockChain.Append(b1);

            Assert.Equal(1, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(
                    actions,
                    nonce: 1,
                    privateKey: privateKey),
            };
            Block<DumbAction> b2 = TestUtils.MineNext(
                b1,
                txsB,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b2);

            Assert.Equal(2, _blockChain.GetNextTxNonce(address));

            BlockChain<DumbAction> forked = _blockChain.Fork(b1.Hash);
            Assert.Equal(1, forked.GetNextTxNonce(address));
            Assert.Equal(1, forked.GetNextTxNonce(lessActiveAddress));
        }

        [Fact]
        public async void CanGetBlockLocator()
        {
            List<Block<DumbAction>> blocks = new List<Block<DumbAction>>();
            foreach (var i in Enumerable.Range(0, 10))
            {
                var block = await _blockChain.MineBlock(_fx.Address1);
                blocks.Add(block);
            }

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

        [Theory]
        [InlineData(true)]
        [InlineData(false)]
        public void Swap(bool render)
        {
            (var addresses, Block<DumbAction>[] blocks) = MakeFixturesForAppendTests();
            foreach (Block<DumbAction> block in blocks)
            {
                _blockChain.Append(block);
            }

            PrivateKey privateKey = new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            BlockChain<DumbAction> fork =
                _blockChain.Fork(_blockChain.Tip.Hash);

            Transaction<DumbAction>[][] txsA =
            {
                new[]
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[0], "foo"),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 2,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[1], "bar"),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(3),
                        nonce: 3,
                        privateKey: privateKey),
                },
                new[]
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[2], "baz"),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 4,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            new DumbAction(addresses[3], "qux"),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(4),
                        nonce: 5,
                        privateKey: privateKey),
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
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[0], "fork-foo"),
                    },
                    timestamp: DateTimeOffset.MinValue,
                    nonce: 2,
                    privateKey: privateKey),
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[1], "fork-bar"),
                        new DumbAction(addresses[2], "fork-baz"),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(2),
                    nonce: 3,
                    privateKey: privateKey),
            };

            try
            {
                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;

                Block<DumbAction> forkTip = TestUtils.MineNext(
                    fork.Tip,
                    txsB,
                    null,
                    _blockChain.Policy.GetNextBlockDifficulty(_blockChain)
                );
                fork.Append(
                    forkTip,
                    DateTimeOffset.UtcNow,
                    evaluateActions: true,
                    renderActions: false
                );

                Guid previousChainId = _blockChain.Id;
                _blockChain.Swap(fork, render);

                Assert.Empty(_blockChain.Store.IterateIndexes(previousChainId));
                Assert.Empty(_blockChain.Store.ListAddresses(previousChainId));
                Assert.Empty(_blockChain.Store.ListTxNonces(previousChainId));

                var renders = DumbAction.RenderRecords.Value;
                var actions = renders.Select(r => (DumbAction)r.Action).ToArray();

                int actionsCountA = txsA.Sum(
                    a => a.Sum(tx => tx.Actions.Count)
                );
                int actionsCountB = txsB.Sum(tx => tx.Actions.Count);

                int totalBlockCount = (int)_blockChain[-1].Index + 1;
                int unRenderBlockCount = 2;

                if (render)
                {
                    Assert.Equal(actionsCountB + actionsCountA, renders.Count);
                    Assert.True(renders.Take(actionsCountA).All(r => r.Unrender));
                    Assert.True(renders.Skip(actionsCountA).All(r => r.Render));

                    Assert.Equal("qux", actions[0].Item);
                    Assert.Equal("baz", actions[1].Item);
                    Assert.Equal("bar", actions[2].Item);
                    Assert.Equal("foo", actions[3].Item);
                    Assert.Equal("fork-foo", actions[4].Item);
                    Assert.Equal("fork-bar", actions[5].Item);
                    Assert.Equal("fork-baz", actions[6].Item);

                    var minerAddress = addresses[4];
                    var blockRenders = MinerReward.RenderRecords.Value;

                    Assert.Equal(
                        totalBlockCount,
                        (Integer)_blockChain.GetState(minerAddress)[minerAddress]);
                    Assert.Equal(totalBlockCount, blockRenders.Count);
                    Assert.True(blockRenders.Take(unRenderBlockCount).All(r => r.Unrender));
                    Assert.True(blockRenders.Skip(unRenderBlockCount).All(r => r.Render));
                }
                else
                {
                    Assert.Empty(renders);
                }
            }
            finally
            {
                DumbAction.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
                MinerReward.RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }
        }

        // This is a regression test for:
        // https://github.com/planetarium/libplanet/issues/189#issuecomment-482443607.
        [Fact]
        public void GetStateOnlyDrillsDownUntilRequestedAddressesAreFound()
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
                    Transaction<DumbAction>.Create(0, privateKey, actions),
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

            foreach (Address targetAddress in targetAddresses)
            {
                AddressStateMap result = chain.GetState(targetAddress);

                string message =
                $"The result dictionary ({result.Keys}) does not " +
                $"cover the requested address ({targetAddress}).";

                Assert.True(result.ContainsKey(targetAddress), message);
            }

            var callCount = tracker.Logs.Where(
                triple => triple.Item1.Equals("GetBlockStates")
            ).Select(triple => triple.Item2).Count();
            Assert.True(testingDepth >= callCount);
        }

        [Fact]
        public void GetStateReturnsEarlyForNonexistentAccount()
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
            AddressStateMap result = chain.GetState(nonexistent);
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
        public void GetStateThrowsIncompleteBlockStatesException()
        {
            (_, Address[] addresses, BlockChain<DumbAction> chain) =
                MakeIncompleteBlockStates();

            // As the store has the states for the tip (latest block),
            // it shouldn't throw an exception.
            Address lastAddress = addresses.Last();
            AddressStateMap states = chain.GetState(lastAddress);
            Assert.NotEmpty(states);
            Assert.Equal("9", states[lastAddress].ToString());

            // As the store lacks the states for blocks other than the tip,
            // the following GetState() calls should throw an exception.
            foreach (Address addr in addresses.Take(addresses.Length - 1))
            {
                Assert.Throws<IncompleteBlockStatesException>(() =>
                    chain.GetState(addr)
                );
            }
        }

        [Fact]
        public void GetStateWithCompletingStates()
        {
            (Address signer, Address[] addresses, BlockChain<DumbAction> chain)
                = MakeIncompleteBlockStates();
            Block<DumbAction>[] blocks = chain.ToArray();
            StoreTracker store = (StoreTracker)chain.Store;

            HashDigest<SHA256>[] ListStateReferences(Address address)
            {
                Block<DumbAction> block = chain.Tip;
                List<HashDigest<SHA256>> refs = new List<HashDigest<SHA256>>();

                while (true)
                {
                    Tuple<HashDigest<SHA256>, long> sr =
                        store.LookupStateReference(chain.Id, address, block);
                    if (sr?.Item1 is HashDigest<SHA256> reference)
                    {
                        refs.Add(reference);
                        block = chain[reference];
                        if (block.PreviousHash is HashDigest<SHA256> prev)
                        {
                            block = chain[prev];
                            continue;
                        }
                    }

                    break;
                }

                return refs.ToArray();
            }

            IImmutableDictionary<Address, HashDigest<SHA256>[]> stateRefs =
                addresses.Select(a =>
                    new KeyValuePair<Address, HashDigest<SHA256>[]>(
                        a,
                        ListStateReferences(a)
                    )
                ).ToImmutableDictionary();
            long txNonce = store.GetTxNonce(chain.Id, signer);

            store.ClearLogs();
            chain.GetState(addresses.Last(), completeStates: true);

            Assert.Empty(
                store.Logs.Where(l => l.Item1 == "StoreStateReference")
            );
            foreach (Block<DumbAction> block in blocks.Take(blocks.Length - 1))
            {
                Assert.Null(store.GetBlockStates(block.Hash));
            }

            store.ClearLogs();
            chain.GetState(addresses[0], completeStates: true);

            foreach (Block<DumbAction> block in blocks)
            {
                Assert.NotNull(store.GetBlockStates(block.Hash));
            }

            // Calculating and filling states should not affect state references
            // or tx nonce.
            Assert.Equal(txNonce, store.GetTxNonce(chain.Id, signer));
            foreach (Address address in addresses)
            {
                Assert.Equal(stateRefs[address], ListStateReferences(address));
            }
        }

        [Fact]
        public async void GetStateReturnsLatestStatesWhenMultipleAddresses()
        {
            var privateKeys = Enumerable.Range(1, 10).Select(_ => new PrivateKey()).ToList();
            var addresses = privateKeys.Select(k => k.PublicKey.ToAddress()).ToList();
            var chain = new BlockChain<DumbAction>(new NullPolicy<DumbAction>(), _fx.Store);

            foreach (var address in addresses)
            {
                var states = chain.GetState(address);
                Assert.Equal(new AddressStateMap(), states);
            }

            var privateKeysAndAddresses10 = privateKeys.Zip(addresses, (k, a) => (k, a));
            foreach (var (key, address) in privateKeysAndAddresses10)
            {
                chain.MakeTransaction(key, new[] { new DumbAction(address, "1") });
            }

            await chain.MineBlock(addresses[0]);

            foreach (var address in addresses)
            {
                Assert.Equal("1", chain.GetState(address)[address].ToString());
            }

            chain.MakeTransaction(privateKeys[0], new[] { new DumbAction(addresses[0], "2") });
            await chain.MineBlock(addresses[0]);
            Assert.Equal("1,2", chain.GetState(addresses[0])[addresses[0]].ToString());
        }

        [Fact]
        public async void FindBranchPoint()
        {
            Block<DumbAction> b0 = await _blockChain.MineBlock(_fx.Address1);
            Block<DumbAction> b1 = await _blockChain.MineBlock(_fx.Address1);
            Block<DumbAction> b2 = await _blockChain.MineBlock(_fx.Address1);
            Block<DumbAction> b3 = await _blockChain.MineBlock(_fx.Address1);
            Block<DumbAction> b4 = await _blockChain.MineBlock(_fx.Address1);

            var emptyLocator = new BlockLocator(new HashDigest<SHA256>[0]);
            var locator = new BlockLocator(new[] { b4.Hash, b3.Hash, b1.Hash });

            using (var emptyFx = new LiteDBStoreFixture(memory: true))
            using (var forkFx = new LiteDBStoreFixture(memory: true))
            {
                var emptyChain = new BlockChain<DumbAction>(_blockChain.Policy, emptyFx.Store);
                var fork = new BlockChain<DumbAction>(_blockChain.Policy, forkFx.Store);
                fork.Append(b0);
                fork.Append(b1);
                fork.Append(b2);
                await fork.MineBlock(_fx.Address1);

                Assert.Null(emptyChain.FindBranchPoint(emptyLocator));
                Assert.Null(emptyChain.FindBranchPoint(locator));

                Assert.Null(_blockChain.FindBranchPoint(emptyLocator));
                Assert.Equal(b4.Hash, _blockChain.FindBranchPoint(locator));

                Assert.Null(fork.FindBranchPoint(emptyLocator));
                Assert.Equal(b1.Hash, fork.FindBranchPoint(locator));
            }
        }

        [Fact]
        public async void EvaluateActions()
        {
            PrivateKey fromPrivateKey = new PrivateKey();
            Address fromAddress = fromPrivateKey.PublicKey.ToAddress();
            long blockIndex = 0;

            TestEvaluateAction action = new TestEvaluateAction();
            var tx1 = Transaction<TestEvaluateAction>.Create(
                0,
                fromPrivateKey,
                new[] { action }
            );

            var chain = new BlockChain<TestEvaluateAction>(
                new BlockPolicy<TestEvaluateAction>(),
                _fx.Store
            );
            chain.StageTransactions(
                ImmutableHashSet<Transaction<TestEvaluateAction>>.Empty.Add(tx1)
            );
            await chain.MineBlock(_fx.Address1);

            Assert.Equal(
                chain.GetState(TestEvaluateAction.SignerKey)[TestEvaluateAction.SignerKey]
                    .ToString(),
                fromAddress.ToHex()
            );
            Assert.Equal(
                chain.GetState(TestEvaluateAction.MinerKey)[TestEvaluateAction.MinerKey].ToString(),
                _fx.Address1.ToHex());
            var state =
                chain.GetState(TestEvaluateAction.BlockIndexKey)[TestEvaluateAction.BlockIndexKey];
            Assert.Equal(
                (long)((Integer)state).Value,
                blockIndex);
        }

        [Fact]
        public void GetNextTxNonce()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.PublicKey.ToAddress();
            var actions = new[] { new DumbAction(_fx.Address1, "foo") };

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Block<DumbAction> genesis = TestUtils.MineGenesis<DumbAction>();
            _blockChain.Append(genesis);

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
            };

            Block<DumbAction> b1 = TestUtils.MineNext(
                genesis,
                txsA,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(_blockChain));
            _blockChain.Append(b1);

            Assert.Equal(1, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 2),
            };

            _blockChain.StageTransactions(txsB.ToImmutableHashSet());

            Assert.Equal(3, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsC =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 3),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 3),
            };
            _blockChain.StageTransactions(txsC.ToImmutableHashSet());

            Assert.Equal(4, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsD =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 5),
            };
            _blockChain.StageTransactions(txsD.ToImmutableHashSet());

            Assert.Equal(4, _blockChain.GetNextTxNonce(address));

            Transaction<DumbAction>[] txsE =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 4),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 5),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 7),
            };
            _blockChain.StageTransactions(txsE.ToImmutableHashSet());

            Assert.Equal(6, _blockChain.GetNextTxNonce(address));
        }

        [Fact]
        public void ValidateTxNonces()
        {
            var privateKey = new PrivateKey();
            var actions = new[] { new DumbAction(_fx.Address1, string.Empty) };

            Block<DumbAction> genesis = TestUtils.MineGenesis<DumbAction>();
            _blockChain.Append(genesis);

            Transaction<DumbAction>[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
            };
            Block<DumbAction> b1 = TestUtils.MineNext(genesis, txsA, difficulty: 1024);
            _blockChain.Append(b1);

            Transaction<DumbAction>[] txsB =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 2),
            };
            Block<DumbAction> b2 = TestUtils.MineNext(b1, txsB, difficulty: 1024);
            _blockChain.Append(b2);

            // Invalid if nonce is too low
            Transaction<DumbAction>[] txsC =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            Block<DumbAction> b3a = TestUtils.MineNext(b2, txsC, difficulty: 1024);
            Assert.Throws<InvalidTxNonceException>(() => _blockChain.Append(b3a));

            // Invalid if nonce is too high
            Transaction<DumbAction>[] txsD =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 4),
            };
            Block<DumbAction> b3b = TestUtils.MineNext(b2, txsD, difficulty: 1024);
            Assert.Throws<InvalidTxNonceException>(() => _blockChain.Append(b3b));
        }

        [Fact]
        public void MakeTransaction()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.PublicKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            _blockChain.MakeTransaction(privateKey, actions);
            _blockChain.MakeTransaction(privateKey, actions);

            List<Transaction<DumbAction>> txs = _blockChain.Store
                .IterateStagedTransactionIds()
                .Select(_blockChain.Store.GetTransaction<DumbAction>)
                .OrderBy(tx => tx.Nonce)
                .ToList();

            Assert.Equal(2, txs.Count());

            var transaction = txs[0];
            Assert.Equal(0, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(actions, transaction.Actions);

            transaction = txs[1];
            Assert.Equal(1, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(actions, transaction.Actions);
        }

        [Fact]
        public async void MineBlockWithBlockAction()
        {
            var privateKey1 = new PrivateKey();
            var address1 = privateKey1.PublicKey.ToAddress();

            var privateKey2 = new PrivateKey();
            var address2 = privateKey2.PublicKey.ToAddress();

            var blockAction = new DumbAction(address1, "foo");
            BlockPolicy<DumbAction> policy = new BlockPolicy<DumbAction>(blockAction);

            var blockChain = new BlockChain<DumbAction>(policy, _fx.Store);

            blockChain.MakeTransaction(privateKey2, new[] { new DumbAction(address2, "baz") });
            await blockChain.MineBlock(address1);

            var states1 = blockChain.GetState(address1)[address1];
            var states2 = blockChain.GetState(address2)[address2];

            Assert.Equal(0, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal("foo", states1.ToString());
            Assert.Equal("baz", states2.ToString());

            blockChain.MakeTransaction(privateKey1, new[] { new DumbAction(address1, "bar") });
            await blockChain.MineBlock(address1);

            states1 = blockChain.GetState(address1)[address1];
            states2 = blockChain.GetState(address2)[address2];

            Assert.Equal(1, blockChain.GetNextTxNonce(address1));
            Assert.Equal(1, blockChain.GetNextTxNonce(address2));
            Assert.Equal("foo,bar,foo", states1.ToString());
            Assert.Equal("baz", states2.ToString());
        }

        [Fact]
        public void EvaluateBlockAction()
        {
            (var addresses, Block<DumbAction>[] blocks) = MakeFixturesForAppendTests();
            _blockChain.Append(
                blocks[0],
                DateTimeOffset.UtcNow,
                evaluateActions: false,
                renderActions: false);

            var miner = addresses[4];
            var blockActionEvaluation = _blockChain.EvaluateBlockAction(blocks[0], null);
            Assert.Equal(_blockChain.Policy.BlockAction, blockActionEvaluation.Action);
            Assert.Equal(1, (Integer)blockActionEvaluation.OutputStates.GetState(miner));

            _blockChain.ExecuteActions(blocks[0], true);
            _blockChain.Append(
                blocks[1],
                DateTimeOffset.UtcNow,
                evaluateActions: false,
                renderActions: false);

            var txEvaluations = blocks[1].EvaluateActionsPerTx(a =>
                    _blockChain.GetState(a, blocks[1].PreviousHash).GetValueOrDefault(a))
                .Select(te => te.Item2).ToList();
            blockActionEvaluation = _blockChain.EvaluateBlockAction(blocks[1], txEvaluations);

            Assert.Equal(2, (Integer)blockActionEvaluation.OutputStates.GetState(miner));
        }

        [Fact]
        public async void BlockActionWithMultipleAddress()
        {
            var miner1 = _fx.Address1;
            var miner2 = _fx.Address2;
            var rewardRecordAddress = MinerReward.RewardRecordAddress;

            await _blockChain.MineBlock(miner1);
            await _blockChain.MineBlock(miner1);
            await _blockChain.MineBlock(miner2);

            AddressStateMap miner1states = _blockChain.GetState(miner1);
            AddressStateMap miner2states = _blockChain.GetState(miner2);
            AddressStateMap rewardStates = _blockChain.GetState(rewardRecordAddress);

            int reward1 = (int)((Integer)miner1states[miner1]).Value;
            int reward2 = (int)((Integer)miner2states[miner2]).Value;
            string rewardRecord = rewardStates[rewardRecordAddress].ToString();

            Assert.Equal(2, reward1);
            Assert.Equal(1, reward2);

            Assert.Equal($"{miner1},{miner1},{miner2}", rewardRecord);
        }

        /// <summary>
        /// Builds a fixture that has incomplete states for blocks other
        /// than the tip, to test <c>GetState()</c> method's
        /// <c>completeStates: true</c> option and
        /// <see cref="IncompleteBlockStatesException"/>.
        ///
        /// <para>The fixture this makes has total 5 addresses (i.e., accounts;
        /// these go to the second item of the returned triple) and 11 blocks
        /// (these go to the third item of the returned triple). Every block
        /// contains a transaction within an action that mutates one account
        /// state except for the genesis block.  All transactions in the fixture
        /// are signed by one private key (its address goes to the first item
        /// of the returned triple).  The most important thing is that
        /// these blocks all lack its states except for the last block (tip).
        /// Overall blocks in the fixture look like:</para>
        ///
        /// <code>
        ///  Index   UpdatedAddresses   States in Store
        /// ------- ------------------ -----------------
        ///      0                      Absent
        ///      1   addresses[0]       Absent
        ///      2   addresses[1]       Absent
        ///      3   addresses[2]       Absent
        ///      4   addresses[3]       Absent
        ///      5   addresses[4]       Absent
        ///      6   addresses[0]       Absent
        ///      7   addresses[1]       Absent
        ///      8   addresses[2]       Absent
        ///      9   addresses[3]       Absent
        ///     10   addresses[4]       Present
        /// </code>
        /// </summary>
        private (Address, Address[] addresses, BlockChain<DumbAction> chain)
            MakeIncompleteBlockStates()
        {
            IStore store = new StoreTracker(_fx.Store);
            Guid chainId = Guid.NewGuid();
            var chain = new BlockChain<DumbAction>(
                new NullPolicy<DumbAction>(),
                store,
                chainId
            );
            var privateKey = new PrivateKey();
            Address signer = privateKey.PublicKey.ToAddress();

            IImmutableDictionary<Address, IValue> GetDirty(
                IEnumerable<ActionEvaluation> evaluations) =>
                evaluations.Select(
                    a => a.OutputStates
                ).Aggregate(
                    ImmutableDictionary<Address, IValue>.Empty,
                    (x, y) => x.SetItems(y.GetUpdatedStates())
                );

            void BuildIndex(Guid id, Block<DumbAction> block)
            {
                foreach (Transaction<DumbAction> tx in block.Transactions)
                {
                    store.IncreaseTxNonce(id, tx.Signer);
                }

                store.AppendIndex(id, block.Hash);
            }

            // Build the store has incomplete states
            Block<DumbAction> b = TestUtils.MineGenesis<DumbAction>();
            store.PutBlock(b);
            BuildIndex(chainId, b);
            IImmutableDictionary<Address, IValue> dirty =
                GetDirty(b.Evaluate(DateTimeOffset.UtcNow, _ => null));
            const int accountsCount = 5;
            Address[] addresses = Enumerable.Repeat<object>(null, accountsCount)
                .Select(_ => new PrivateKey().PublicKey.ToAddress())
                .ToArray();
            for (int i = 0; i < 2; ++i)
            {
                for (int j = 0; j < accountsCount; ++j)
                {
                    int index = i * accountsCount + j;
                    Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                        store.GetTxNonce(chainId, signer),
                        privateKey,
                        new[] { new DumbAction(addresses[j], index.ToString()) }
                    );
                    b = TestUtils.MineNext(b, new[] { tx });
                    dirty = GetDirty(
                        b.Evaluate(
                            DateTimeOffset.UtcNow,
                            dirty.GetValueOrDefault
                        )
                    );
                    Assert.NotEmpty(dirty);
                    store.PutBlock(b);
                    store.StoreStateReference(
                        chainId,
                        dirty.Keys.ToImmutableHashSet(),
                        b.Hash,
                        b.Index
                    );
                    BuildIndex(chainId, b);
                }
            }

            store.SetBlockStates(b.Hash, new AddressStateMap(dirty));

            return (signer, addresses, chain);
        }

        private (Address[], Block<DumbAction>[]) MakeFixturesForAppendTests()
        {
            Address[] addresses =
            {
                _fx.Address1,
                _fx.Address2,
                _fx.Address3,
                _fx.Address4,
                _fx.Address5,
            };
            Block<DumbAction> b0 = TestUtils.MineGenesis<DumbAction>(addresses[4]);

            PrivateKey privateKey = new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            Transaction<DumbAction>[] txs =
            {
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[0], "foo"),
                        new DumbAction(addresses[1], "bar"),
                    },
                    timestamp: DateTimeOffset.MinValue,
                    nonce: 0,
                    privateKey: privateKey),
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[2], "baz"),
                        new DumbAction(addresses[3], "qux"),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(5),
                    nonce: 1,
                    privateKey: privateKey),
            };
            Block<DumbAction> b1 = TestUtils.MineNext(
                b0,
                txs,
                null,
                _blockChain.Policy.GetNextBlockDifficulty(
                    _blockChain.ToImmutableList().Add(b0)
                )
            );

            return (addresses, new[] { b0, b1 });
        }

        [Fact]
        private async void TipChanged()
        {
            bool called = false;
            long? prevTipIndex = null;
            HashDigest<SHA256>? prevTipHash = null;
            long tipIndex = -1;
            HashDigest<SHA256> tipHash;

            void TipChangedHandler(object target, BlockChain<DumbAction>.TipChangedEventArgs args)
            {
                called = true;
                prevTipIndex = args.PreviousIndex;
                prevTipHash = args.PreviousHash;
                tipIndex = args.Index;
                tipHash = args.Hash;
            }

            _blockChain.TipChanged += TipChangedHandler;
            // Mine block
            called = false;
            Block<DumbAction> block = await _blockChain.MineBlock(_fx.Address1);
            Assert.True(called);
            Assert.Null(prevTipHash);
            Assert.Null(prevTipIndex);
            Assert.Equal(block.Hash, tipHash);
            Assert.Equal(0, tipIndex);
            Assert.Equal(block.Hash, tipHash);
            called = false;
            Assert.Throws<InvalidBlockIndexException>(() => _blockChain.Append(block));
            Assert.False(called);

            // TODO: Add test cases for swap
        }

        [Fact]
        private async void AbortMining()
        {
            Block<DumbAction> genesis = await _blockChain.MineBlock(_fx.Address1);
            // This test makes 2 different policies even it's abnormal
            // because to make a mining task run forever just for testing.
            var policy1 = new NullPolicy<DumbAction>(difficulty: 1);
            var policy2 = new NullPolicy<DumbAction>(difficulty: -1);
            StoreFixture fx1 = new LiteDBStoreFixture();
            StoreFixture fx2 = new LiteDBStoreFixture();
            var chain1 = new BlockChain<DumbAction>(policy1, fx1.Store);
            var chain2 = new BlockChain<DumbAction>(policy2, fx2.Store);

            chain1.Append(genesis);
            chain2.Append(genesis);

            bool called = false;
            long? prevTipIndex = null;
            HashDigest<SHA256>? prevTipHash = null;
            long tipIndex = -1;
            HashDigest<SHA256> tipHash;
            void TipChangedHandler(object target, BlockChain<DumbAction>.TipChangedEventArgs args)
            {
                called = true;
                prevTipIndex = args.PreviousIndex;
                prevTipHash = args.PreviousHash;
                tipIndex = args.Index;
                tipHash = args.Hash;
            }

            try
            {
                Block<DumbAction> block = await chain1.MineBlock(fx1.Address1);
                chain2.TipChanged += TipChangedHandler;

                Task miningTask = chain2.MineBlock(fx2.Address1);

                chain2.Append(block);
                Assert.True(called);
                Assert.Equal(0, prevTipIndex);
                Assert.Equal(genesis.Hash, prevTipHash);
                Assert.Equal(1, tipIndex);
                Assert.Equal(block.Hash, tipHash);
                await Task.Delay(100);
                Assert.True(miningTask.IsCanceled);
            }
            finally
            {
                fx1.Dispose();
                fx2.Dispose();
            }
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

            public IValue PlainValue =>
                default(Dictionary);

            public void LoadPlainValue(
                IValue plainValue)
            {
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates
                    .SetState(SignerKey, (Text)context.Signer.ToHex())
                    .SetState(MinerKey, (Text)context.Miner.ToHex())
                    .SetState(BlockIndexKey, (Integer)context.BlockIndex);
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
