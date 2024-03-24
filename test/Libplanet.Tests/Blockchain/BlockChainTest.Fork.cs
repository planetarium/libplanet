using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Store;
using Libplanet.Types.Blocks;
using Libplanet.Types.Evidence;
using Libplanet.Types.Tx;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest
    {
        [SkippableFact]
        public void ForkTxNonce()
        {
            // An active account, so that its some recent transactions became "stale" due to a fork.
            var privateKey = new PrivateKey();
            Address address = privateKey.Address;

            // An inactive account, so that it has no recent transactions but only an old
            // transaction, so that its all transactions are stale-proof (stale-resistant).
            var lessActivePrivateKey = new PrivateKey();
            Address lessActiveAddress = lessActivePrivateKey.Address;

            var actions = new[] { DumbAction.Create((address, "foo")) };

            var genesis = _blockChain.Genesis;

            Transaction[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
                _fx.MakeTransaction(privateKey: lessActivePrivateKey),
            };

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Block b1 = _blockChain.ProposeBlock(
                _fx.Proposer,
                txsA.ToImmutableList(),
                CreateBlockCommit(_blockChain.Tip),
                CreateZeroRoundProof(_blockChain.Tip, _fx.Proposer),
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(b1, CreateBlockCommit(b1));

            Assert.Equal(1, _blockChain.GetNextTxNonce(address));

            Transaction[] txsB =
            {
                _fx.MakeTransaction(
                    actions,
                    nonce: 1,
                    privateKey: privateKey),
            };
            Block b2 = _blockChain.ProposeBlock(
                _fx.Proposer,
                txsB.ToImmutableList(),
                CreateBlockCommit(_blockChain.Tip),
                CreateZeroRoundProof(_blockChain.Tip, _fx.Proposer),
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(b2, CreateBlockCommit(b2));

            Assert.Equal(2, _blockChain.GetNextTxNonce(address));

            BlockChain forked = _blockChain.Fork(b1.Hash);
            Assert.Equal(1, forked.GetNextTxNonce(address));
            Assert.Equal(1, forked.GetNextTxNonce(lessActiveAddress));
        }

        [SkippableFact]
        public void FindNextHashesAfterFork()
        {
            var key = new PrivateKey();

            Block block = _blockChain.ProposeBlock(
                key,
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(block, CreateBlockCommit(block));
            Block block2 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            Block block3 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            BlockChain forked = _blockChain.Fork(_blockChain.Genesis.Hash);
            Block forkedBlock = forked.ProposeBlock(
                key,
                proof: CreateZeroRoundProof(forked.Tip, key));
            forked.Append(forkedBlock, CreateBlockCommit(forkedBlock));

            BlockLocator locator = _blockChain.GetBlockLocator();
            forked.FindNextHashes(locator)
                .Deconstruct(out long? offset, out IReadOnlyList<BlockHash> hashes);

            Assert.Equal(forked[0].Index, offset);
            Assert.Equal(new[] { forked[0].Hash, forked[1].Hash }, hashes);
        }

        [SkippableFact]
        public void Fork()
        {
            var key = new PrivateKey();

            Block block1 = _blockChain.ProposeBlock(
                key,
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(block1, CreateBlockCommit(block1));
            Block block2 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            Block block3 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            BlockChain forked = _blockChain.Fork(block2.Hash);

            Assert.Equal(
                new[] { block1, block2, block3 },
                new[] { _blockChain[1], _blockChain[2], _blockChain[3] }
            );
            Assert.Equal(4, _blockChain.Count);

            Assert.Equal(
                new[] { block1, block2 },
                new[] { forked[1], forked[2] }
            );
            Assert.Equal(3, forked.Count);
        }

        [SkippableFact]
        public void ForkAndSwapCanonicity()
        {
            // Fork is not canonical.
            var key = new PrivateKey();
            var workspace = _blockChain.Fork(_blockChain.Genesis.Hash);
            var b = workspace.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(workspace.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            workspace.Append(b, CreateBlockCommit(b));
            Assert.True(_blockChain.IsCanonical);
            Assert.False(workspace.IsCanonical);

            // Both are canonical after swap.
            _blockChain.Swap(workspace, false);
            Assert.True(_blockChain.IsCanonical);
            Assert.True(workspace.IsCanonical);
        }

        [SkippableFact]
        public void ForkWithBlockNotExistInChain()
        {
            var key = new PrivateKey();
            var genesis = _blockChain.Genesis;

            for (var i = 0; i < 2; i++)
            {
                Block block = _blockChain.ProposeBlock(
                    key,
                    lastCommit: CreateBlockCommit(_blockChain.Tip),
                    proof: CreateZeroRoundProof(_blockChain.Tip, key));
                _blockChain.Append(block, CreateBlockCommit(block));
            }

            Block newBlock = _blockChain.EvaluateAndSign(
                ProposeNext(
                    genesis,
                    miner: key.PublicKey,
                    proof: CreateZeroRoundProof(_blockChain.Tip, key)), key);

            Assert.Throws<ArgumentException>(() =>
                _blockChain.Fork(newBlock.Hash));

            _blockChain.Store.PutBlock(newBlock);
            Assert.Throws<ArgumentException>(() =>
                _blockChain.Fork(newBlock.Hash));
        }

        [SkippableFact]
        public void ForkChainWithIncompleteBlockStates()
        {
            var fx = new MemoryStoreFixture(_policy.BlockAction);
            (_, _, BlockChain chain) =
                MakeIncompleteBlockStates(fx.Store, fx.StateStore);
            BlockChain forked = chain.Fork(chain[5].Hash);
            Assert.Equal(chain[5], forked.Tip);
            Assert.Equal(6, forked.Count);
        }

        [SkippableFact]
        public void StateAfterForkingAndAddingExistingBlock()
        {
            var miner = new PrivateKey();
            var signer = new PrivateKey();
            var address = signer.Address;
            var actions1 = new[] { DumbAction.Create((address, "foo")) };
            var actions2 = new[] { DumbAction.Create((address, "bar")) };

            _blockChain.MakeTransaction(signer, actions1);
            var b1 = _blockChain.ProposeBlock(
                miner,
                proof: CreateZeroRoundProof(_blockChain.Tip, miner));
            _blockChain.Append(b1, CreateBlockCommit(b1));

            _blockChain.MakeTransaction(signer, actions2);
            var b2 = _blockChain.ProposeBlock(
                miner,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, miner));
            _blockChain.Append(b2, CreateBlockCommit(b2));
            var state = _blockChain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address);

            Assert.Equal((Text)"foo,bar", state);

            var forked = _blockChain.Fork(b1.Hash);
            state = forked
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address);
            Assert.Equal((Text)"foo", state);

            forked.Append(b2, CreateBlockCommit(b2));
            state = forked
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(address);
            Assert.Equal((Text)"foo,bar", state);
        }

        [SkippableFact]
        public void ForkShouldSkipExecuteAndRenderGenesis()
        {
            var miner = new PrivateKey();
            var action = DumbAction.Create((_fx.Address1, "genesis"));

            using (IStore store = new MemoryStore())
            using (var stateStore = new TrieStateStore(new MemoryKeyValueStore()))
            {
                var actionEvaluator = new ActionEvaluator(
                    _ => _policy.BlockAction,
                    stateStore,
                    new SingleActionLoader(typeof(DumbAction)));
                var privateKey = new PrivateKey();
                var genesis = ProposeGenesisBlock(
                    ProposeGenesis(
                        GenesisProposer.PublicKey,
                        transactions: new[]
                        {
                            new Transaction(
                                new UnsignedTx(
                                    new TxInvoice(
                                        genesisHash: null,
                                        updatedAddresses: ImmutableHashSet.Create(_fx.Address1),
                                        timestamp: DateTimeOffset.UtcNow,
                                        actions: new TxActionList(new[] { action }.ToPlainValues()),
                                        maxGasPrice: null,
                                        gasLimit: null),
                                    new TxSigningMetadata(privateKey.PublicKey, 0)),
                                privateKey),
                        }),
                    privateKey: GenesisProposer);

                store.PutBlock(genesis);
                var renderer = new RecordingActionRenderer();
                var blockChain = BlockChain.Create(
                    _policy,
                    new VolatileStagePolicy(),
                    store,
                    stateStore,
                    genesis,
                    new ActionEvaluator(
                        _ => _policy.BlockAction,
                        stateStore: stateStore,
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))),
                    renderers: new[] { renderer }
                );

                // Creation does not render anything
                Assert.Equal(0, renderer.ActionRecords.Count);
                Assert.Equal(0, renderer.BlockRecords.Count);

                Block block1 = blockChain.ProposeBlock(
                    miner,
                    proof: CreateZeroRoundProof(_blockChain.Tip, miner));
                blockChain.Append(block1, CreateBlockCommit(block1));
                Block block2 = blockChain.ProposeBlock(
                    miner,
                    lastCommit: CreateBlockCommit(blockChain.Tip),
                    proof: CreateZeroRoundProof(_blockChain.Tip, miner));
                blockChain.Append(block2, CreateBlockCommit(block2));

                int blockRecordsBeforeFork = renderer.BlockRecords.Count;

                blockChain.Fork(blockChain.Tip.Hash);

                Assert.Equal(0, renderer.ActionRecords.Count(r => IsDumbAction(r.Action)));
                Assert.Equal(blockRecordsBeforeFork, renderer.BlockRecords.Count);
            }
        }

        [SkippableFact]
        public void GetBlockCommitAfterFork()
        {
            var proposer = new PrivateKey();
            Block block1 = _blockChain.ProposeBlock(
                proposer,
                proof: CreateZeroRoundProof(_blockChain.Tip, proposer));
            _blockChain.Append(block1, CreateBlockCommit(block1));
            proposer = new PrivateKey();
            Block block2 = _blockChain.ProposeBlock(
                proposer,
                lastCommit: CreateBlockCommit(block1),
                proof: CreateZeroRoundProof(block1, proposer));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            proposer = new PrivateKey();
            Block block3 = _blockChain.ProposeBlock(
                proposer,
                lastCommit: CreateBlockCommit(block2),
                proof: CreateZeroRoundProof(block2, proposer));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            var forked = _blockChain.Fork(block2.Hash);
            Assert.NotNull(forked.GetBlockCommit(forked.Tip.Index));
            Assert.Equal(
                forked.GetBlockCommit(forked.Tip.Index),
                block3.LastCommit);
        }

        [SkippableFact]
        public void GetStateReturnsValidStateAfterFork()
        {
            var privateKey = new PrivateKey();
            var store = new MemoryStore();
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());
            var actionLoader = new SingleActionLoader(typeof(DumbAction));
            var chain = MakeBlockChain(
                new NullBlockPolicy(),
                store,
                stateStore,
                actionLoader,
                new[] { DumbAction.Create((_fx.Address1, "item0.0")) });
            Assert.Equal(
                "item0.0",
                (Text)chain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(_fx.Address1));

            chain.MakeTransaction(
                privateKey,
                new[] { DumbAction.Create((_fx.Address1, "item1.0")), }
            );
            var proposer = new PrivateKey();
            Block block = chain.ProposeBlock(
                proposer,
                proof: CreateZeroRoundProof(chain.Tip, proposer));

            chain.Append(block, CreateBlockCommit(block));
            Assert.Equal(
                new IValue[] { (Text)"item0.0,item1.0" },
                chain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetStates(new[] { _fx.Address1 })
            );
            Assert.Equal(
                "item0.0,item1.0",
                (Text)chain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(_fx.Address1));

            var forked = chain.Fork(chain.Tip.Hash);
            Assert.Equal(2, forked.Count);
            Assert.Equal(
                new IValue[] { (Text)"item0.0,item1.0" },
                forked
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetStates(new[] { _fx.Address1 })
            );
            Assert.Equal(
                "item0.0,item1.0",
                (Text)forked
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(_fx.Address1));
        }

        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void Swap(bool render)
        {
            Assert.Throws<ArgumentNullException>(() => _blockChain.Swap(null, render)());

            (var addresses, Transaction[] txs1) =
                MakeFixturesForAppendTests();
            var genesis = _blockChain.Genesis;
            var miner = new PrivateKey();
            var minerAddress = miner.Address;

            Block block1 = _blockChain.ProposeBlock(
                miner,
                txs1.ToImmutableList(),
                CreateBlockCommit(_blockChain.Tip),
                CreateZeroRoundProof(_blockChain.Tip, miner),
                ImmutableArray<EvidenceBase>.Empty);
            _blockChain.Append(block1, CreateBlockCommit(block1));

            PrivateKey privateKey = new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            BlockHash tipHash = _blockChain.Tip.Hash;
            BlockChain fork = _blockChain.Fork(tipHash);

            Transaction[][] txsA =
            {
                new[] // block #2
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[0], "2-0")),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 2,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[1], "2-1")),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(3),
                        nonce: 3,
                        privateKey: privateKey),
                },
                new[] // block #3
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[2], "3-0")),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 4,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[3], "3-1")),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(4),
                        nonce: 5,
                        privateKey: privateKey),
                },
            };

            foreach (Transaction[] txs in txsA)
            {
                Block b = _blockChain.ProposeBlock(
                    miner,
                    txs.ToImmutableList(),
                    CreateBlockCommit(_blockChain.Tip),
                    proof: CreateZeroRoundProof(_blockChain.Tip, miner),
                    ImmutableArray<EvidenceBase>.Empty);
                _blockChain.Append(b, CreateBlockCommit(b));
            }

            Transaction[][] txsB =
            {
                new[]
                {
                    // block #2'
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[0], "2'-0")),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 2,
                        privateKey: privateKey),
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[1], "2'-1-0")),
                            DumbAction.Create((addresses[2], "2'-1-1")),
                        },
                        timestamp: DateTimeOffset.MinValue.AddSeconds(2),
                        nonce: 3,
                        privateKey: privateKey),
                },
                new[]
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[0], "3'-0")),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 4,
                        privateKey: privateKey),
                },
                new[]
                {
                    _fx.MakeTransaction(
                        new[]
                        {
                            DumbAction.Create((addresses[0], "4'-0")),
                        },
                        timestamp: DateTimeOffset.MinValue,
                        nonce: 5,
                        privateKey: privateKey),
                },
            };

            foreach (Transaction[] txs in txsB)
            {
                Block b = fork.ProposeBlock(
                    miner,
                    txs.ToImmutableList(),
                    CreateBlockCommit(fork.Tip),
                    CreateZeroRoundProof(fork.Tip, miner),
                    ImmutableArray<EvidenceBase>.Empty);
                fork.Append(b, CreateBlockCommit(b), render: true);
            }

            Guid previousChainId = _blockChain.Id;
            _renderer.ResetRecords();
            _blockChain.Swap(fork, render)();   // #3 -> #2 -> #1 -> #2' -> #3' -> #4'

            Assert.Empty(_blockChain.Store.IterateIndexes(previousChainId));
            Assert.Empty(_blockChain.Store.ListTxNonces(previousChainId));

            RenderRecord.BlockBase[] blockLevelRenders = _renderer.Records
                .OfType<RenderRecord.BlockBase>()
                .ToArray();

            RenderRecord.ActionBase[] actionRenders = _renderer.ActionRecords
                .Where(r => IsDumbAction(r.Action))
                .ToArray();
            DumbAction[] actions = actionRenders.Select(r => ToDumbAction(r.Action)).ToArray();

            int actionsCountA = txsA.Sum(a => a.Sum(tx => tx.Actions.Count));
            int actionsCountB = txsB.Sum(b => b.Sum(tx => tx.Actions.Count));

            int totalBlockCount = (int)_blockChain.Tip.Index + 1;

            if (render)
            {
                Assert.Equal(2, blockLevelRenders.Length);
                Assert.IsType<RenderRecord.BlockEvent>(blockLevelRenders[0]);
                Assert.True(blockLevelRenders[0].Begin);
                Assert.IsType<RenderRecord.BlockEvent>(blockLevelRenders[1]);
                Assert.True(blockLevelRenders[1].End);

                Assert.True(blockLevelRenders[0].Index < actionRenders[0].Index);
                Assert.True(blockLevelRenders[0].Index < actionRenders.First(r => r.Render).Index);
                Assert.True(actionRenders.Last().Index < blockLevelRenders[1].Index);

                Assert.Equal(actionsCountB, actionRenders.Length);
                Assert.Equal(0, actionRenders.Count(r => r.Unrender));
                Assert.True(actionRenders.All(r => r.Render));

                Assert.Equal("2'-0", actions[0].Append?.Item);
                Assert.Equal("2'-1-0", actions[1].Append?.Item);
                Assert.Equal("2'-1-1", actions[2].Append?.Item);
                Assert.Equal("3'-0", actions[3].Append?.Item);
                Assert.Equal("4'-0", actions[4].Append?.Item);

                RenderRecord.ActionBase[] blockActionRenders = _renderer.ActionRecords
                    .Where(r => IsMinerReward(r.Action))
                    .ToArray();

                // except genesis block.
                Assert.Equal(
                    (Integer)(totalBlockCount - 1),
                    (Integer)_blockChain
                        .GetWorldState()
                        .GetAccountState(ReservedAddresses.LegacyAccount)
                        .GetState(minerAddress)
                );
                Assert.Equal(3, blockActionRenders.Length); // #1 -> #2' -> #3' -> #4'
                Assert.True(blockActionRenders.All(r => r.Render));
            }
            else
            {
                Assert.Empty(actionRenders);
            }
        }

        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void CannotSwapForSameHeightTip(bool render)
        {
            BlockChain fork = _blockChain.Fork(_blockChain.Tip.Hash);
            IReadOnlyList<RenderRecord> prevRecords = _renderer.Records;
            Assert.Throws<ArgumentException>(() => _blockChain.Swap(fork, render: render)());

            // Render methods should be invoked if and only if the tip changes
            Assert.Equal(prevRecords, _renderer.Records);
        }

        [SkippableFact]
        public void FindBranchPoint()
        {
            var key = new PrivateKey();
            Block b1 = _blockChain.ProposeBlock(
                key,
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(b1, CreateBlockCommit(b1));
            Block b2 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(b2, CreateBlockCommit(b2));
            Block b3 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(b3, CreateBlockCommit(b3));
            Block b4 = _blockChain.ProposeBlock(
                key,
                lastCommit: CreateBlockCommit(_blockChain.Tip),
                proof: CreateZeroRoundProof(_blockChain.Tip, key));
            _blockChain.Append(b4, CreateBlockCommit(b4));

            Assert.Equal(b1.PreviousHash, _blockChain.Genesis.Hash);

            var emptyLocator = new BlockLocator(new[] { _blockChain.Genesis.Hash });
            var invalidLocator = new BlockLocator(
                new[] { new BlockHash(TestUtils.GetRandomBytes(BlockHash.Size)) });
            var locator = new BlockLocator(
                new[] { b4.Hash, b3.Hash, b1.Hash, _blockChain.Genesis.Hash });

            using (var emptyFx = new MemoryStoreFixture(_policy.BlockAction))
            using (var forkFx = new MemoryStoreFixture(_policy.BlockAction))
            {
                var emptyChain = BlockChain.Create(
                    _blockChain.Policy,
                    new VolatileStagePolicy(),
                    emptyFx.Store,
                    emptyFx.StateStore,
                    emptyFx.GenesisBlock,
                    new ActionEvaluator(
                        _ => _blockChain.Policy.BlockAction,
                        stateStore: emptyFx.StateStore,
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
                var fork = BlockChain.Create(
                    _blockChain.Policy,
                    new VolatileStagePolicy(),
                    forkFx.Store,
                    forkFx.StateStore,
                    forkFx.GenesisBlock,
                    new ActionEvaluator(
                        _ => _blockChain.Policy.BlockAction,
                        stateStore: forkFx.StateStore,
                        actionTypeLoader: new SingleActionLoader(typeof(DumbAction))));
                fork.Append(b1, CreateBlockCommit(b1));
                fork.Append(b2, CreateBlockCommit(b2));
                Block b5 = fork.ProposeBlock(
                    key,
                    lastCommit: CreateBlockCommit(fork.Tip),
                    proof: CreateZeroRoundProof(fork.Tip, key));
                fork.Append(b5, CreateBlockCommit(b5));

                // Testing emptyChain
                Assert.Equal(_blockChain.Genesis.Hash, emptyChain.FindBranchpoint(emptyLocator));
                Assert.Equal(_blockChain.Genesis.Hash, emptyChain.FindBranchpoint(locator));
                Assert.Null(emptyChain.FindBranchpoint(invalidLocator));

                // Testing _blockChain
                Assert.Equal(_blockChain.Genesis.Hash, _blockChain.FindBranchpoint(emptyLocator));
                Assert.Equal(b4.Hash, _blockChain.FindBranchpoint(locator));
                Assert.Null(_blockChain.FindBranchpoint(invalidLocator));

                // Testing fork
                Assert.Equal(_blockChain.Genesis.Hash, fork.FindBranchpoint(emptyLocator));
                Assert.Equal(b1.Hash, fork.FindBranchpoint(locator));
                Assert.Null(_blockChain.FindBranchpoint(invalidLocator));
            }
        }
    }
}
