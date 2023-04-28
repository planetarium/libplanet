using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blockchain.Renderers.Debug;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Action;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using Serilog;
using Serilog.Events;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.Common.Action.ThrowException;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Blockchain
{
    public partial class BlockChainTest : IDisposable
    {
        private readonly ILogger _logger;
        private StoreFixture _fx;
        private BlockPolicy<DumbAction> _policy;
        private BlockChain<DumbAction> _blockChain;
        private ValidatingActionRenderer<DumbAction> _renderer;
        private Block _validNext;
        private IStagePolicy<DumbAction> _stagePolicy;

        public BlockChainTest(ITestOutputHelper output)
        {
            Log.Logger = _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext<BlockChainTest>();

            _policy = new BlockPolicy<DumbAction>(
                blockAction: new MinerReward(1),
                getMaxTransactionsBytes: _ => 50 * 1024);
            _stagePolicy = new VolatileStagePolicy<DumbAction>();
            _fx = GetStoreFixture(_policy.BlockAction);
            _renderer = new ValidatingActionRenderer<DumbAction>();
            _blockChain = BlockChain<DumbAction>.Create(
                _policy,
                _stagePolicy,
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock,
                renderers: new[] { new LoggedActionRenderer<DumbAction>(_renderer, Log.Logger) }
            );
            _renderer.BlockChain = _blockChain;
            _renderer.ResetRecords();

            _validNext = _blockChain.EvaluateAndSign(
                new BlockContent(
                    new BlockMetadata(
                        protocolVersion: BlockMetadata.CurrentProtocolVersion,
                        index: 1,
                        timestamp: _fx.GenesisBlock.Timestamp.AddSeconds(1),
                        miner: _fx.Proposer.PublicKey.ToAddress(),
                        publicKey: _fx.Proposer.PublicKey,
                        previousHash: _fx.GenesisBlock.Hash,
                        txHash: null,
                        lastCommit: null)).Propose(),
                _fx.Proposer);
        }

        public void Dispose()
        {
            _fx.Dispose();
        }

        [SkippableFact]
        public void ValidatorSet()
        {
            var validatorSet = _blockChain.GetValidatorSet();
            _logger.Debug(
                "GenesisBlock is {Hash}, Transactions: {Txs}",
                _blockChain.Genesis,
                _blockChain.Genesis.Transactions);
            var transactions = _blockChain.Genesis.Transactions.ToList();
            Assert.Equal(TestUtils.ValidatorSet.TotalCount, validatorSet.TotalCount);
        }

        [SkippableFact]
        public void CanFindBlockByIndex()
        {
            var genesis = _blockChain.Genesis;
            Assert.Equal(genesis, _blockChain[0]);

            Block block = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(block, TestUtils.CreateBlockCommit(block));
            Assert.Equal(block, _blockChain[1]);
        }

        [SkippableFact]
        public void CanonicalId()
        {
            var chain1 = _blockChain;
            var key = new PrivateKey();
            Block block1 = chain1.ProposeBlock(key);
            chain1.Append(block1, CreateBlockCommit(block1));
            Block block2 = chain1.ProposeBlock(key, CreateBlockCommit(chain1.Tip));
            chain1.Append(block2, CreateBlockCommit(block2));
            Assert.Equal(chain1.Id, _fx.Store.GetCanonicalChainId());
            var chain2 = chain1.Fork(chain1.Tip.Hash);
            Block block3 = chain2.ProposeBlock(key, CreateBlockCommit(chain1.Tip));
            chain2.Append(block3, CreateBlockCommit(block3));
            Assert.Equal(chain1.Id, _fx.Store.GetCanonicalChainId());

            var z = new BlockChain<DumbAction>(
                new BlockPolicy<DumbAction>(new MinerReward(1)),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock
            );

            Assert.Equal(chain1.Id, z.Id);
        }

        [SkippableFact]
        public void BlockHashes()
        {
            var key = new PrivateKey();
            var genesis = _blockChain.Genesis;

            Assert.Single(_blockChain.BlockHashes);

            Block b1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b1, CreateBlockCommit(b1));
            Assert.Equal(new[] { genesis.Hash, b1.Hash }, _blockChain.BlockHashes);

            Block b2 = _blockChain.ProposeBlock(
                key, CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b2, CreateBlockCommit(b2));
            Assert.Equal(
                new[] { genesis.Hash, b1.Hash, b2.Hash },
                _blockChain.BlockHashes
            );

            Block b3 = _blockChain.ProposeBlock(
                key, CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b3, CreateBlockCommit(b3));
            Assert.Equal(
                new[] { genesis.Hash, b1.Hash, b2.Hash, b3.Hash },
                _blockChain.BlockHashes
            );
        }

        [SkippableFact]
        public void ProcessActions()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            BlockChain<PolymorphicAction<BaseAction>> chain = MakeBlockChain(
                new BlockPolicy<PolymorphicAction<BaseAction>>(),
                store,
                stateStore
            );
            Block genesisBlock = chain.Genesis;

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
            var tx1 = Transaction.Create<PolymorphicAction<BaseAction>>(
                0,
                new PrivateKey(),
                genesisBlock.Hash,
                actions1
            );

            chain.StageTransaction(tx1);
            Block block1 = chain.ProposeBlock(new PrivateKey());
            chain.Append(block1, CreateBlockCommit(block1));
            IValue state = chain.GetState(_fx.Address1);
            Assert.NotNull(state);

            var result = BattleResult.FromBencodex((Bencodex.Types.Dictionary)state);
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
            var tx2 = Transaction.Create<PolymorphicAction<BaseAction>>(
                0,
                new PrivateKey(),
                genesisBlock.Hash,
                actions2
            );

            chain.StageTransaction(tx2);
            Block block2 = chain.ProposeBlock(
                new PrivateKey(), CreateBlockCommit(chain.Tip));
            chain.Append(block2, CreateBlockCommit(block2));

            state = chain.GetState(_fx.Address1);
            result = BattleResult.FromBencodex((Bencodex.Types.Dictionary)state);
            Assert.Contains("bow", result.UsedWeapons);

            var tx3 = Transaction.Create<PolymorphicAction<BaseAction>>(
                0,
                new PrivateKey(),
                genesisBlock.Hash,
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
            Block block3 = chain.ProposeBlock(
                new PrivateKey(), CreateBlockCommit(chain.Tip));
            chain.StageTransaction(tx3);
            chain.Append(block3, CreateBlockCommit(block3));
            state = chain.GetState(_fx.Address1);

            Assert.NotNull(state);
        }

        [SkippableFact]
        public void ActionRenderersHaveDistinctContexts()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var generatedRandomValueLogs = new List<int>();
            IActionRenderer<DumbAction>[] renderers = Enumerable.Range(0, 2).Select(i =>
                new LoggedActionRenderer<DumbAction>(
                    new AnonymousActionRenderer<DumbAction>
                    {
                        ActionRenderer = (act, context, nextStates) =>
                            // Consuming the random state through IRandom.Next() should not
                            // affect contexts passed to other action renderers.
                            generatedRandomValueLogs.Add(context.Random.Next()),
                    },
                    Log.Logger.ForContext("RendererIndex", i)
                )
            ).ToArray();
            BlockChain<DumbAction> blockChain = MakeBlockChain(
                policy,
                store,
                stateStore,
                renderers: renderers
            );
            var privateKey = new PrivateKey();
            var action = new DumbAction(default, string.Empty);
            var actions = new[] { action };
            blockChain.MakeTransaction(privateKey, actions);
            Block block = blockChain.ProposeBlock(new PrivateKey());

            generatedRandomValueLogs.Clear();
            Assert.Empty(generatedRandomValueLogs);
            blockChain.Append(block, CreateBlockCommit(block));
            Assert.Equal(2, generatedRandomValueLogs.Count);
            Assert.Equal(generatedRandomValueLogs[0], generatedRandomValueLogs[1]);
        }

        [SkippableFact]
        public void RenderActionsAfterBlockIsRendered()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var recordingRenderer = new RecordingActionRenderer<DumbAction>();
            var renderer = new LoggedActionRenderer<DumbAction>(recordingRenderer, Log.Logger);
            BlockChain<DumbAction> blockChain =
                MakeBlockChain(policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new DumbAction(default, string.Empty);
            var actions = new[] { action };
            blockChain.MakeTransaction(privateKey, actions);
            recordingRenderer.ResetRecords();
            Block prevBlock = blockChain.Tip;
            Block block = blockChain.ProposeBlock(new PrivateKey());
            blockChain.Append(block, CreateBlockCommit(block));

            Assert.Equal(2, blockChain.Count);
            IReadOnlyList<RenderRecord<DumbAction>.BlockEvent> blockLogs =
                recordingRenderer.BlockRecords;
            Assert.Equal(2, blockLogs.Count);
            IReadOnlyList<RenderRecord<DumbAction>.ActionBase> actionLogs =
                recordingRenderer.ActionRecords;
            Assert.Single(actions);
            Assert.Equal(prevBlock, blockLogs[0].OldTip);
            Assert.Equal(block, blockLogs[0].NewTip);
            Assert.Equal(0, blockLogs[0].Index);
            Assert.Equal(1, actionLogs[0].Index);
            Assert.Equal(action, actionLogs[0].Action);
            Assert.Equal(prevBlock, blockLogs[1].OldTip);
            Assert.Equal(block, blockLogs[1].NewTip);
            Assert.Equal(2, blockLogs[1].Index);
        }

        [SkippableFact]
        public void RenderActionsAfterAppendComplete()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());

            IActionRenderer<DumbAction> renderer = new AnonymousActionRenderer<DumbAction>
            {
                ActionRenderer = (a, __, nextStates) =>
                {
                    if (!(a is Initialize))
                    {
                        throw new SomeException("thrown by renderer");
                    }
                },
            };
            renderer = new LoggedActionRenderer<DumbAction>(renderer, Log.Logger);
            BlockChain<DumbAction> blockChain =
                MakeBlockChain(policy, store, stateStore, renderers: new[] { renderer });
            var privateKey = new PrivateKey();

            var action = new DumbAction(default, string.Empty);
            var actions = new[] { action };
            blockChain.MakeTransaction(privateKey, actions);
            Block block = blockChain.ProposeBlock(new PrivateKey());

            SomeException e = Assert.Throws<SomeException>(
                () => blockChain.Append(block, CreateBlockCommit(block)));
            Assert.Equal("thrown by renderer", e.Message);
            Assert.Equal(2, blockChain.Count);
        }

        [SkippableFact]
        public void FindNextHashes()
        {
            var key = new PrivateKey();
            long? offsetIndex;
            IReadOnlyList<BlockHash> hashes;

            _blockChain.FindNextHashes(
                new BlockLocator(new BlockHash[] { _blockChain.Genesis.Hash }))
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Single(hashes);
            Assert.Equal(_blockChain.Genesis.Hash, hashes.First());
            var block0 = _blockChain.Genesis;
            var block1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block1, CreateBlockCommit(block1));
            var block2 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            var block3 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            _blockChain.FindNextHashes(new BlockLocator(new[] { block0.Hash }))
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(0, offsetIndex);
            Assert.Equal(new[] { block0.Hash, block1.Hash, block2.Hash, block3.Hash }, hashes);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block1.Hash, block0.Hash }))
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(1, offsetIndex);
            Assert.Equal(new[] { block1.Hash, block2.Hash, block3.Hash }, hashes);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block0.Hash }), stop: block2.Hash)
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(0, offsetIndex);
            Assert.Equal(new[] { block0.Hash, block1.Hash, block2.Hash }, hashes);

            _blockChain.FindNextHashes(new BlockLocator(new[] { block0.Hash }), count: 2)
                .Deconstruct(out offsetIndex, out hashes);
            Assert.Equal(0, offsetIndex);
            Assert.Equal(new[] { block0.Hash, block1.Hash }, hashes);
        }

        [SkippableFact]
        public void FindNextHashesAfterFork()
        {
            var key = new PrivateKey();

            Block block = _blockChain.ProposeBlock(key);
            _blockChain.Append(block, CreateBlockCommit(block));
            Block block2 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            Block block3 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            BlockChain<DumbAction> forked = _blockChain.Fork(_blockChain.Genesis.Hash);
            Block forkedBlock = forked.ProposeBlock(key);
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

            Block block1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(block1, CreateBlockCommit(block1));
            Block block2 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            Block block3 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            BlockChain<DumbAction> forked = _blockChain.Fork(block2.Hash);

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
            var workspace = _blockChain.Fork(_blockChain.Genesis.Hash);
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
                    key, lastCommit: CreateBlockCommit(_blockChain.Tip));
                _blockChain.Append(block, CreateBlockCommit(block));
            }

            Block newBlock = _blockChain.EvaluateAndSign(
                ProposeNext(genesis, miner: key.PublicKey), key);

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
            (_, _, BlockChain<DumbAction> chain) =
                MakeIncompleteBlockStates(fx.Store, fx.StateStore);
            BlockChain<DumbAction> forked = chain.Fork(chain[5].Hash);
            Assert.Equal(chain[5], forked.Tip);
            Assert.Equal(6, forked.Count);
        }

        [SkippableFact]
        public void StateAfterForkingAndAddingExistingBlock()
        {
            var miner = new PrivateKey();
            var signer = new PrivateKey();
            var address = signer.ToAddress();
            var actions1 = new[] { new DumbAction(address, "foo") };
            var actions2 = new[] { new DumbAction(address, "bar") };

            _blockChain.MakeTransaction(signer, actions1);
            var b1 = _blockChain.ProposeBlock(miner);
            _blockChain.Append(b1, CreateBlockCommit(b1));

            _blockChain.MakeTransaction(signer, actions2);
            var b2 = _blockChain.ProposeBlock(
                miner, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b2, CreateBlockCommit(b2));
            var state = _blockChain.GetState(address);

            Assert.Equal((Text)"foo,bar", state);

            var forked = _blockChain.Fork(b1.Hash);
            state = forked.GetState(address);
            Assert.Equal((Text)"foo", state);

            forked.Append(b2, CreateBlockCommit(b2));
            state = forked.GetState(address);
            Assert.Equal((Text)"foo,bar", state);
        }

        [SkippableFact]
        public void ForkShouldSkipExecuteAndRenderGenesis()
        {
            var miner = new PrivateKey();
            var action = new DumbAction(_fx.Address1, "genesis");

            using (IStore store = new MemoryStore())
            using (var stateStore = new TrieStateStore(new MemoryKeyValueStore()))
            {
                var genesis = ProposeGenesisBlock<DumbAction>(
                    ProposeGenesis<DumbAction>(
                        GenesisProposer.PublicKey,
                        transactions: new[]
                        {
                            Transaction.Create<DumbAction>(
                                nonce: 0,
                                privateKey: new PrivateKey(),
                                genesisHash: null,
                                actions: new[] { action },
                                updatedAddresses: ImmutableHashSet.Create(_fx.Address1),
                                timestamp: DateTimeOffset.UtcNow
                            ),
                        }),
                    privateKey: GenesisProposer,
                    blockAction: _policy.BlockAction,
                    nativeTokenPredicate: _policy.NativeTokens.Contains);

                store.PutBlock(genesis);
                var renderer = new RecordingActionRenderer<DumbAction>();
                var blockChain = BlockChain<DumbAction>.Create(
                    _policy,
                    new VolatileStagePolicy<DumbAction>(),
                    store,
                    stateStore,
                    genesis,
                    renderers: new[] { renderer }
                );

                // Creation does not render anything
                Assert.Equal(0, renderer.ActionRecords.Count);
                Assert.Equal(0, renderer.BlockRecords.Count);

                Block block1 = blockChain.ProposeBlock(miner);
                blockChain.Append(block1, CreateBlockCommit(block1));
                Block block2 = blockChain.ProposeBlock(
                    miner, lastCommit: CreateBlockCommit(blockChain.Tip));
                blockChain.Append(block2, CreateBlockCommit(block2));

                int blockRecordsBeforeFork = renderer.BlockRecords.Count;

                blockChain.Fork(blockChain.Tip.Hash);

                Assert.Equal(0, renderer.ActionRecords.Count(r => r.Action is DumbAction));
                Assert.Equal(blockRecordsBeforeFork, renderer.BlockRecords.Count);
            }
        }

        [SkippableFact]
        public void DetectInvalidTxNonce()
        {
            var privateKey = new PrivateKey();
            var actions = new[] { new DumbAction(_fx.Address1, "foo") };

            var genesis = _blockChain.Genesis;

            Transaction[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
            };

            Block b1 = _blockChain.ProposeBlock(
                _fx.Proposer, txsA.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b1, TestUtils.CreateBlockCommit(b1));

            Block b2 = _blockChain.ProposeBlock(
                _fx.Proposer, txsA.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            Assert.Throws<InvalidTxNonceException>(() =>
                _blockChain.Append(b2, CreateBlockCommit(b2)));

            Transaction[] txsB =
            {
                _fx.MakeTransaction(
                    actions,
                    nonce: 1,
                    privateKey: privateKey),
            };
            b2 = _blockChain.ProposeBlock(
                _fx.Proposer, txsB.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b2, CreateBlockCommit(b2));
        }

        [SkippableFact]
        public void ForkTxNonce()
        {
            // An active account, so that its some recent transactions became "stale" due to a fork.
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();

            // An inactive account, so that it has no recent transactions but only an old
            // transaction, so that its all transactions are stale-proof (stale-resistant).
            var lessActivePrivateKey = new PrivateKey();
            Address lessActiveAddress = lessActivePrivateKey.ToAddress();

            var actions = new[] { new DumbAction(address, "foo") };

            var genesis = _blockChain.Genesis;

            Transaction[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
                _fx.MakeTransaction(privateKey: lessActivePrivateKey),
            };

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Block b1 = _blockChain.ProposeBlock(
                _fx.Proposer, txsA.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
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
                _fx.Proposer, txsB.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b2, CreateBlockCommit(b2));

            Assert.Equal(2, _blockChain.GetNextTxNonce(address));

            BlockChain<DumbAction> forked = _blockChain.Fork(b1.Hash);
            Assert.Equal(1, forked.GetNextTxNonce(address));
            Assert.Equal(1, forked.GetNextTxNonce(lessActiveAddress));
        }

        [SkippableFact]
        public void GetBlockLocator()
        {
            var key = new PrivateKey();
            List<Block> blocks = new List<Block>();
            foreach (var i in Enumerable.Range(0, 10))
            {
                var block = _blockChain.ProposeBlock(
                    key,
                    lastCommit: CreateBlockCommit(_blockChain.Tip));
                _blockChain.Append(block, CreateBlockCommit(block));
                blocks.Add(block);
            }

            BlockLocator actual = _blockChain.GetBlockLocator(threshold: 3);
            BlockLocator expected = new BlockLocator(new[]
            {
                blocks[9].Hash,
                blocks[8].Hash,
                blocks[7].Hash,
                blocks[6].Hash,
                blocks[5].Hash,
                blocks[3].Hash,
                _blockChain.Genesis.Hash,
            });

            Assert.Equal(expected, actual);
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
            var minerAddress = miner.ToAddress();

            Block block1 = _blockChain.ProposeBlock(
                miner, txs1.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block1, CreateBlockCommit(block1));

            PrivateKey privateKey = new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            BlockHash tipHash = _blockChain.Tip.Hash;
            BlockChain<DumbAction> fork = _blockChain.Fork(tipHash);

            Transaction[][] txsA =
            {
                new[] // block #2
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
                new[] // block #3
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

            foreach (Transaction[] txs in txsA)
            {
                Block b = _blockChain.ProposeBlock(
                    miner, txs.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
                _blockChain.Append(b, CreateBlockCommit(b));
            }

            Transaction[] txsB =
            {
                // block #2'
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

            Block forkTip = fork.ProposeBlock(
                miner, txsB.ToImmutableList(), CreateBlockCommit(fork.Tip));
            fork.Append(forkTip, CreateBlockCommit(forkTip), render: true);

            Guid previousChainId = _blockChain.Id;
            _renderer.ResetRecords();
            _blockChain.Swap(fork, render)();   // #3 -> #2 -> #1 -> #2'

            Assert.Empty(_blockChain.Store.IterateIndexes(previousChainId));
            Assert.Empty(_blockChain.Store.ListTxNonces(previousChainId));

            RenderRecord<DumbAction>.BlockBase[] blockLevelRenders = _renderer.Records
                .OfType<RenderRecord<DumbAction>.BlockBase>()
                .ToArray();

            RenderRecord<DumbAction>.ActionBase[] actionRenders = _renderer.ActionRecords
                .Where(r => r.Action is DumbAction)
                .ToArray();
            DumbAction[] actions = actionRenders.Select(r => (DumbAction)r.Action).ToArray();

            int actionsCountA = txsA.Sum(
                a => a.Sum(tx => tx.Actions.Count)
            );
            int actionsCountB = txsB.Sum(tx => tx.Actions.Count);

            int totalBlockCount = (int)_blockChain.Tip.Index + 1;

            if (render)
            {
                Assert.Equal(2, blockLevelRenders.Length);
                Assert.IsType<RenderRecord<DumbAction>.BlockEvent>(blockLevelRenders[0]);
                Assert.True(blockLevelRenders[0].Begin);
                Assert.IsType<RenderRecord<DumbAction>.BlockEvent>(blockLevelRenders[1]);
                Assert.True(blockLevelRenders[1].End);

                Assert.True(blockLevelRenders[0].Index < actionRenders[0].Index);
                Assert.True(blockLevelRenders[0].Index < actionRenders.First(r => r.Render).Index);
                Assert.True(actionRenders.Last().Index < blockLevelRenders[1].Index);

                Assert.Equal(actionsCountB, actionRenders.Length);
                Assert.Equal(0, actionRenders.Count(r => r.Unrender));
                Assert.True(actionRenders.All(r => r.Render));

                Assert.Equal("fork-foo", actions[0].Item);
                Assert.Equal("fork-bar", actions[1].Item);
                Assert.Equal("fork-baz", actions[2].Item);

                RenderRecord<DumbAction>.ActionBase[] blockActionRenders = _renderer.ActionRecords
                    .Where(r => r.Action is MinerReward)
                    .ToArray();

                // except genesis block.
                Assert.Equal(
                    (Integer)(totalBlockCount - 1),
                    (Integer)_blockChain.GetState(minerAddress)
                );
                Assert.Single(blockActionRenders); // #1 -> #2'
                Assert.True(blockActionRenders.All(r => r.Render));
            }
            else
            {
                Assert.Empty(actionRenders);
            }
        }

        [SkippableFact]
        public void GetBlockCommit()
        {
            // Note: Getting BlockCommit from PoW block test is not present.
            // Requesting blockCommit of genesis block returns null.
            Assert.Null(_blockChain.GetBlockCommit(0));
            Assert.Null(_blockChain.GetBlockCommit(_blockChain.Genesis.Hash));

            // BlockCommit is put to store when block is appended.
            Block block1 = _blockChain.ProposeBlock(new PrivateKey());
            BlockCommit blockCommit1 = CreateBlockCommit(block1);
            _blockChain.Append(block1, blockCommit1);
            Assert.Equal(blockCommit1, _blockChain.GetBlockCommit(block1.Index));
            Assert.Equal(blockCommit1, _blockChain.GetBlockCommit(block1.Hash));

            // BlockCommit is retrieved from lastCommit.
            Block block2 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(_blockChain.Tip));
            BlockCommit blockCommit2 = CreateBlockCommit(block2);
            _blockChain.Append(block2, blockCommit2);

            // These are different due to timestamps on votes.
            Assert.NotEqual(blockCommit1, _blockChain.GetBlockCommit(block1.Index));
            Assert.Equal(block2.LastCommit, _blockChain.GetBlockCommit(block1.Index));
            Assert.Equal(block2.LastCommit, _blockChain.GetBlockCommit(block1.Hash));
        }

        [SkippableFact]
        public void GetBlockCommitAfterFork()
        {
            Block block1 = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(block1, CreateBlockCommit(block1));
            Block block2 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(block1));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            Block block3 = _blockChain.ProposeBlock(
                new PrivateKey(),
                lastCommit: CreateBlockCommit(block2));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            var forked = _blockChain.Fork(block2.Hash);
            Assert.NotNull(forked.GetBlockCommit(forked.Tip.Index));
            Assert.Equal(
                forked.GetBlockCommit(forked.Tip.Index),
                block3.LastCommit);
        }

        [SkippableFact]
        public void CleanupBlockCommitStore()
        {
            BlockCommit blockCommit1 = CreateBlockCommit(
                new BlockHash(GetRandomBytes(BlockHash.Size)), 1, 0);
            BlockCommit blockCommit2 = CreateBlockCommit(
                new BlockHash(GetRandomBytes(BlockHash.Size)), 2, 0);
            BlockCommit blockCommit3 = CreateBlockCommit(
                new BlockHash(GetRandomBytes(BlockHash.Size)), 3, 0);

            _blockChain.Store.PutBlockCommit(blockCommit1);
            _blockChain.Store.PutBlockCommit(blockCommit2);
            _blockChain.Store.PutBlockCommit(blockCommit3);
            _blockChain.CleanupBlockCommitStore(blockCommit3.Height);

            Assert.Null(_blockChain.Store.GetBlockCommit(blockCommit1.BlockHash));
            Assert.Null(_blockChain.Store.GetBlockCommit(blockCommit2.BlockHash));
            Assert.Equal(blockCommit3, _blockChain.Store.GetBlockCommit(blockCommit3.BlockHash));
        }

        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void SwapForSameTip(bool render)
        {
            BlockChain<DumbAction> fork = _blockChain.Fork(_blockChain.Tip.Hash);
            IReadOnlyList<RenderRecord<DumbAction>> prevRecords = _renderer.Records;
            _blockChain.Swap(fork, render: render)();

            // Render methods should be invoked if and only if the tip changes
            Assert.Equal(prevRecords, _renderer.Records);
        }

        [SkippableTheory]
        [InlineData(true)]
        [InlineData(false)]
        public void ReorgIsUnableToHeterogenousChain(bool render)
        {
            using (var fx2 = new MemoryStoreFixture(_policy.BlockAction))
            {
                Block genesis2 = ProposeGenesisBlock<DumbAction>(
                    ProposeGenesis<DumbAction>(
                        timestamp: DateTimeOffset.UtcNow,
                        proposer: GenesisProposer.PublicKey),
                    privateKey: GenesisProposer,
                    blockAction: _policy.BlockAction,
                    nativeTokenPredicate: _policy.NativeTokens.Contains);
                var chain2 = BlockChain<DumbAction>.Create(
                    _policy,
                    _stagePolicy,
                    fx2.Store,
                    fx2.StateStore,
                    genesis2
                );
                var key = new PrivateKey();
                for (int i = 0; i < 5; i++)
                {
                    Block block1 = _blockChain.ProposeBlock(
                        key, lastCommit: CreateBlockCommit(_blockChain.Tip));
                    _blockChain.Append(block1, CreateBlockCommit(block1));

                    Block block2 = chain2.ProposeBlock(
                        key, lastCommit: CreateBlockCommit(chain2.Tip));
                    chain2.Append(block2, CreateBlockCommit(block2));
                }

                Log.Logger.CompareBothChains(
                    LogEventLevel.Debug,
                    nameof(_blockChain),
                    _blockChain,
                    nameof(chain2),
                    chain2
                );

                Assert.Throws<InvalidGenesisBlockException>(() =>
                    _blockChain.Swap(chain2, render)()
                );
            }
        }

        [SkippableFact]
        public void GetStatesOnCreatingBlockChain()
        {
            bool invoked = false;
            var policy = new NullPolicyForGetStatesOnCreatingBlockChain<DumbAction>(
                c =>
                {
                    // ReSharper disable AccessToModifiedClosure
                    // The following method calls should not throw any exceptions:
                    invoked = true;
                    // ReSharper restore AccessToModifiedClosure
                });
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Block genesisWithTx = ProposeGenesisBlock<DumbAction>(
                ProposeGenesis<DumbAction>(
                    GenesisProposer.PublicKey,
                    new[]
                    {
                        Transaction.Create<DumbAction>(
                            0,
                            new PrivateKey(),
                            null,
                            Array.Empty<DumbAction>()
                        ),
                    }),
                GenesisProposer,
                policy.BlockAction,
                policy.NativeTokens.Contains);
            var chain = BlockChain<DumbAction>.Create(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisWithTx
            );
            Assert.False(invoked);
        }

        // This is a regression test for:
        // https://github.com/planetarium/libplanet/issues/189#issuecomment-482443607.
        [SkippableFact]
        public void GetStateOnlyDrillsDownUntilRequestedAddressesAreFound()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var tracker = new StoreTracker(_fx.Store);
            var chain = new BlockChain<DumbAction>(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                tracker,
                _fx.StateStore,
                _fx.GenesisBlock
            );

            Block b = chain.Genesis;
            Address[] addresses = new Address[30];
            for (int i = 0; i < addresses.Length; ++i)
            {
                var privateKey = new PrivateKey();
                Address address = privateKey.ToAddress();
                addresses[i] = address;
                DumbAction[] actions =
                {
                    new DumbAction(address, "foo"),
                    new DumbAction(i < 1 ? address : addresses[i - 1], "bar"),
                };
                Transaction[] txs =
                {
                    Transaction.Create<DumbAction>(0, privateKey, chain.Genesis.Hash, actions),
                };
                b = chain.ProposeBlock(
                    _fx.Proposer, txs.ToImmutableList(), CreateBlockCommit(chain.Tip));
                chain.Append(b, CreateBlockCommit(b));
            }

            tracker.ClearLogs();
            int testingDepth = addresses.Length / 2;
            Address[] targetAddresses = Enumerable.Range(
                testingDepth,
                Math.Min(10, addresses.Length - testingDepth - 1)
            ).Select(i => addresses[i]).ToArray();

            Assert.All(chain.GetStates(targetAddresses), Assert.NotNull);

            var callCount = tracker.Logs.Where(
                trackLog => trackLog.Method == "GetBlockStates"
            ).Select(trackLog => trackLog.Params).Count();
            Assert.True(testingDepth >= callCount);
        }

        [SkippableFact]
        public void GetStateReturnsEarlyForNonexistentAccount()
        {
            var blockPolicy = new NullBlockPolicy<DumbAction>();
            var tracker = new StoreTracker(_fx.Store);
            var chain = new BlockChain<DumbAction>(
                blockPolicy,
                new VolatileStagePolicy<DumbAction>(),
                tracker,
                _fx.StateStore,
                _fx.GenesisBlock
            );

            Block b = chain.Genesis;
            for (int i = 0; i < 20; ++i)
            {
                b = chain.ProposeBlock(_fx.Proposer, CreateBlockCommit(chain.Tip));
                chain.Append(b, CreateBlockCommit(b));
            }

            tracker.ClearLogs();
            Address nonexistent = new PrivateKey().ToAddress();
            IValue result = chain.GetState(nonexistent);
            Assert.Null(result);
            var callCount = tracker.Logs.Where(
                trackLog => trackLog.Method == "GetBlockStates"
            ).Select(trackLog => trackLog.Params).Count();
            Assert.True(
                callCount <= 1,
                $"GetBlocksStates() was called {callCount} times"
            );
        }

        [SkippableFact]
        public void GetStateReturnsValidStateAfterFork()
        {
            var privateKey = new PrivateKey();
            var store = new MemoryStore();
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());
            var chain = MakeBlockChain(
                new NullBlockPolicy<DumbAction>(),
                store,
                stateStore,
                new[] { new DumbAction(_fx.Address1, "item0.0", idempotent: true) });
            Assert.Equal("item0.0", (Text)chain.GetState(_fx.Address1));

            chain.MakeTransaction(
                privateKey,
                new[] { new DumbAction(_fx.Address1, "item1.0"), }
            );
            Block block = chain.ProposeBlock(new PrivateKey());

            chain.Append(block, CreateBlockCommit(block));
            Assert.Equal(
                new IValue[] { (Text)"item0.0,item1.0" },
                chain.GetStates(new[] { _fx.Address1 })
            );
            Assert.Equal("item0.0,item1.0", (Text)chain.GetState(_fx.Address1));

            var forked = chain.Fork(chain.Tip.Hash);
            Assert.Equal(2, forked.Count);
            Assert.Equal(
                new IValue[] { (Text)"item0.0,item1.0" },
                forked.GetStates(new[] { _fx.Address1 })
            );
            Assert.Equal("item0.0,item1.0", (Text)forked.GetState(_fx.Address1));
        }

        [SkippableFact]
        public void GetStateReturnsLatestStatesWhenMultipleAddresses()
        {
            var privateKeys = Enumerable.Range(1, 10).Select(_ => new PrivateKey()).ToList();
            var addresses = privateKeys.Select(AddressExtensions.ToAddress).ToList();
            var chain = new BlockChain<DumbAction>(
                new NullBlockPolicy<DumbAction>(),
                new VolatileStagePolicy<DumbAction>(),
                _fx.Store,
                _fx.StateStore,
                _fx.GenesisBlock);

            Assert.All(chain.GetStates(addresses), Assert.Null);
            foreach (var address in addresses)
            {
                Assert.Null(chain.GetState(address));
            }

            var privateKeysAndAddresses10 = privateKeys.Zip(addresses, (k, a) => (k, a));
            foreach (var (key, address) in privateKeysAndAddresses10)
            {
                chain.MakeTransaction(key, new[] { new DumbAction(address, "1") });
            }

            Block block1 = chain.ProposeBlock(
                privateKeys[0], lastCommit: CreateBlockCommit(chain.Tip));

            chain.Append(block1, CreateBlockCommit(block1));

            Assert.All(chain.GetStates(addresses), v => Assert.Equal((Text)"1", v));
            foreach (var address in addresses)
            {
                Assert.Equal((Text)"1", chain.GetState(address));
            }

            chain.MakeTransaction(privateKeys[0], new[] { new DumbAction(addresses[0], "2") });
            Block block2 = chain.ProposeBlock(
                privateKeys[0], lastCommit: CreateBlockCommit(chain.Tip));
            chain.Append(block2, CreateBlockCommit(block2));
            Assert.Equal((Text)"1,2", chain.GetState(addresses[0]));
            Assert.All(
                chain.GetStates(addresses.Skip(1).ToArray()),
                v => Assert.Equal((Text)"1", v)
            );
        }

        [SkippableFact]
        public void FindBranchPoint()
        {
            var key = new PrivateKey();
            Block b1 = _blockChain.ProposeBlock(key);
            _blockChain.Append(b1, CreateBlockCommit(b1));
            Block b2 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b2, CreateBlockCommit(b2));
            Block b3 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b3, CreateBlockCommit(b3));
            Block b4 = _blockChain.ProposeBlock(
                key, lastCommit: CreateBlockCommit(_blockChain.Tip));
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
                var emptyChain = BlockChain<DumbAction>.Create(
                    _blockChain.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    emptyFx.Store,
                    emptyFx.StateStore,
                    emptyFx.GenesisBlock);
                var fork = BlockChain<DumbAction>.Create(
                    _blockChain.Policy,
                    new VolatileStagePolicy<DumbAction>(),
                    forkFx.Store,
                    forkFx.StateStore,
                    forkFx.GenesisBlock);
                fork.Append(b1, CreateBlockCommit(b1));
                fork.Append(b2, CreateBlockCommit(b2));
                Block b5 = fork.ProposeBlock(
                    key, lastCommit: CreateBlockCommit(fork.Tip));
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

        [SkippableFact]
        public void GetNextTxNonce()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(_fx.Address1, "foo") };
            var genesis = _blockChain.Genesis;

            Assert.Equal(0, _blockChain.GetNextTxNonce(address));

            Transaction[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
            };

            Block b1 = _blockChain.ProposeBlock(
                _fx.Proposer, txsA.ToImmutableList(), CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(b1, CreateBlockCommit(b1));

            Assert.Equal(1, _blockChain.GetNextTxNonce(address));

            Transaction[] txsB =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 2),
            };

            StageTransactions(txsB);

            Assert.Equal(3, _blockChain.GetNextTxNonce(address));

            Transaction[] txsC =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 3),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 3),
            };
            StageTransactions(txsC);

            Assert.Equal(4, _blockChain.GetNextTxNonce(address));

            Transaction[] txsD =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 5),
            };
            StageTransactions(txsD);

            Assert.Equal(4, _blockChain.GetNextTxNonce(address));

            Transaction[] txsE =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 4),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 5),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 7),
            };
            StageTransactions(txsE);

            foreach (var tx in _blockChain.StagePolicy.Iterate(_blockChain))
            {
                _logger.Fatal(
                    "{Id}; {Signer}; {Nonce}; {Timestamp}",
                    tx.Id,
                    tx.Signer,
                    tx.Nonce,
                    tx.Timestamp);
            }

            Assert.Equal(6, _blockChain.GetNextTxNonce(address));
        }

        [SkippableFact]
        public void GetNextTxNonceWithStaleTx()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            Transaction[] txs =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };

            StageTransactions(txs);
            Block block = _blockChain.ProposeBlock(privateKey);
            _blockChain.Append(block, CreateBlockCommit(block));

            Transaction[] staleTxs =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            StageTransactions(staleTxs);

            Assert.Equal(2, _blockChain.GetNextTxNonce(address));

            _blockChain.MakeTransaction(privateKey, actions);
            Assert.Equal(3, _blockChain.GetNextTxNonce(address));

            _blockChain.MakeTransaction(privateKey, actions);
            Assert.Equal(4, _blockChain.GetNextTxNonce(address));
        }

        [SkippableFact]
        public void ValidateTxNonces()
        {
            var privateKey = new PrivateKey();
            var actions = new[] { new DumbAction(_fx.Address1, string.Empty) };

            var genesis = _blockChain.Genesis;

            Block ProposeNext(
                Block block,
                IReadOnlyList<Transaction> txs
            ) =>
                _blockChain.EvaluateAndSign(
                    TestUtils.ProposeNext(
                        block,
                        txs,
                        blockInterval: TimeSpan.FromSeconds(10),
                        miner: _fx.Proposer.PublicKey,
                        lastCommit: CreateBlockCommit(block)),
                    _fx.Proposer);

            Transaction[] txsA =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 0),
            };
            Block b1 = ProposeNext(genesis, txsA);
            _blockChain.Append(b1, CreateBlockCommit(b1));

            Transaction[] txsB =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 2),
            };
            Block b2 = ProposeNext(b1, txsB);
            _blockChain.Append(b2, CreateBlockCommit(b2));

            // Invalid if nonce is too low
            Transaction[] txsC =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 1),
            };
            Block b3a = ProposeNext(b2, txsC);
            Assert.Throws<InvalidTxNonceException>(() =>
                _blockChain.Append(b3a, CreateBlockCommit(b3a)));

            // Invalid if nonce is too high
            Transaction[] txsD =
            {
                _fx.MakeTransaction(actions, privateKey: privateKey, nonce: 4),
            };
            Block b3b = ProposeNext(b2, txsD);
            Assert.Throws<InvalidTxNonceException>(() =>
                _blockChain.Append(b3b, CreateBlockCommit(b3b)));
        }

        [SkippableFact]
        public void MakeTransactionWithSystemAction()
        {
            var foo = Currency.Uncapped("FOO", 2, minters: null);
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var action = new Transfer(address, foo * 10);

            _blockChain.MakeTransaction(privateKey, actions: new IAction[] { action });
            _blockChain.MakeTransaction(privateKey, actions: new IAction[] { action });

            List<Transaction> txs = _stagePolicy
                .Iterate(_blockChain)
                .OrderBy(tx => tx.Nonce)
                .ToList();

            Assert.Equal(2, txs.Count);

            var transaction = txs[0];
            Assert.Equal(0, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(action.PlainValue, transaction.Actions[0]);

            transaction = txs[1];
            Assert.Equal(1, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(action.PlainValue, transaction.Actions[0]);
        }

        [SkippableFact]
        public void MakeTransactionWithCustomActions()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            _blockChain.MakeTransaction(privateKey, actions);
            _blockChain.MakeTransaction(privateKey, actions);

            List<Transaction> txs = _stagePolicy
                .Iterate(_blockChain)
                .OrderBy(tx => tx.Nonce)
                .ToList();

            Assert.Equal(2, txs.Count);

            var transaction = txs[0];
            Assert.Equal(0, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(actions.Select(action => action.PlainValue), transaction.Actions);

            transaction = txs[1];
            Assert.Equal(1, transaction.Nonce);
            Assert.Equal(address, transaction.Signer);
            Assert.Equal(actions.Select(action => action.PlainValue), transaction.Actions);
        }

        [SkippableFact]
        public async Task MakeTransactionConcurrency()
        {
            var privateKey = new PrivateKey();
            Address address = privateKey.ToAddress();
            var actions = new[] { new DumbAction(address, "foo") };

            var tasks = Enumerable.Range(0, 10)
                .Select(_ => Task.Run(() => _blockChain.MakeTransaction(privateKey, actions)));

            await Task.WhenAll(tasks);

            var txIds = _blockChain.GetStagedTransactionIds();

            var nonces = txIds
                .Select(id => _stagePolicy.Get(_blockChain, id)
                    ?? _blockChain.GetTransaction(id))
                .Select(tx => tx.Nonce)
                .OrderBy(nonce => nonce)
                .ToArray();

            Assert.Equal(
                nonces,
                new long[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
            );
        }

        [SkippableFact]
        public void BlockActionWithMultipleAddress()
        {
            var miner0 = _blockChain.Genesis.Miner;
            var miner1 = new PrivateKey();
            var miner2 = new PrivateKey();
            var rewardRecordAddress = MinerReward.RewardRecordAddress;

            Block block1 = _blockChain.ProposeBlock(
                miner1, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block1, CreateBlockCommit(block1));
            Block block2 = _blockChain.ProposeBlock(
                miner1, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block2, CreateBlockCommit(block2));
            Block block3 = _blockChain.ProposeBlock(
                miner2, lastCommit: CreateBlockCommit(_blockChain.Tip));
            _blockChain.Append(block3, CreateBlockCommit(block3));

            IValue miner1state = _blockChain.GetState(miner1.ToAddress());
            IValue miner2state = _blockChain.GetState(miner2.ToAddress());
            IValue rewardState = _blockChain.GetState(rewardRecordAddress);

            AssertBencodexEqual((Integer)2, miner1state);
            AssertBencodexEqual((Integer)1, miner2state);

            AssertBencodexEqual(
                (Text)$"{miner0},{miner1.ToAddress()},{miner1.ToAddress()},{miner2.ToAddress()}",
                rewardState
            );
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
        /// contains a transaction with an action that mutates one account
        /// state except for the genesis block.  All transactions in the fixture
        /// are signed by one private key (its address goes to the first item
        /// of the returned triple).  The most important thing is that
        /// overall blocks in the fixture look like:</para>
        ///
        /// <code>
        ///  Index   UpdatedAddresses   States in Store
        /// ------- ------------------ -----------------
        ///      0                      Absent
        ///      1   addresses[0]       Absent
        ///      2   addresses[1]       Absent
        ///      3   addresses[2]       Absent
        ///      4   addresses[3]       Present
        ///      5   addresses[4]       Absent
        ///      6   addresses[0]       Absent
        ///      7   addresses[1]       Present
        ///      8   addresses[2]       Absent
        ///      9   addresses[3]       Absent
        ///     10   addresses[4]       Absent
        /// </code>
        /// </summary>
        /// <param name="store">store.</param>
        /// <param name="stateStore">State Store.</param>
        /// <param name="renderer">Renderer.</param>
        /// <returns>Tuple of addresses and chain.</returns>
        internal static (Address, Address[] Addresses, BlockChain<DumbAction> Chain)
            MakeIncompleteBlockStates(
                IStore store,
                IStateStore stateStore,
                IRenderer<DumbAction> renderer = null
            )
        {
            List<int> presentIndices = new List<int>() { 4, 7 };
            List<Block> presentBlocks = new List<Block>();

            IBlockPolicy<DumbAction> blockPolicy = new NullBlockPolicy<DumbAction>();
            store = new StoreTracker(store);
            Guid chainId = Guid.NewGuid();
            Block genesisBlock = ProposeGenesisBlock<DumbAction>(
                ProposeGenesis<DumbAction>(GenesisProposer.PublicKey),
                GenesisProposer,
                blockPolicy.BlockAction,
                blockPolicy.NativeTokens.Contains);
            var chainStates = new BlockChainStates(store, stateStore);
            var actionEvaluator = new ActionEvaluator(
                _ => blockPolicy.BlockAction,
                blockChainStates: chainStates,
                trieGetter: hash =>
                    stateStore.GetStateRoot(store.GetBlockDigest(hash)?.StateRootHash),
                genesisHash: genesisBlock.Hash,
                nativeTokenPredicate: blockPolicy.NativeTokens.Contains,
                actionTypeLoader: StaticActionLoader.Create<DumbAction>(),
                feeCalculator: null
            );
            var chain = BlockChain<DumbAction>.Create(
                blockPolicy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisBlock,
                renderers: renderer is null ? null : new[] { renderer },
                blockChainStates: chainStates,
                actionEvaluator: actionEvaluator);
            var privateKey = new PrivateKey();
            Address signer = privateKey.ToAddress();

            void BuildIndex(Guid id, Block block)
            {
                foreach (Transaction tx in block.Transactions)
                {
                    store.IncreaseTxNonce(id, tx.Signer);
                }

                store.AppendIndex(id, block.Hash);
            }

            // Build a store with incomplete states
            Block b = chain.Genesis;
            AccountStateGetter nullAccountStateGetter = (address) => null;
            AccountBalanceGetter nullAccountBalanceGetter =
                (address, currency) => new FungibleAssetValue(currency);
            TotalSupplyGetter nullTotalSupplyGetter = currency =>
            {
                if (!currency.TotalSupplyTrackable)
                {
                    throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
                }

                return currency * 0;
            };
            ValidatorSetGetter nullValidatorSetGetter = () => new ValidatorSet();
            IAccountStateDelta previousStates = AccountStateDeltaImpl.ChooseVersion(
                b.ProtocolVersion,
                nullAccountStateGetter,
                nullAccountBalanceGetter,
                nullTotalSupplyGetter,
                nullValidatorSetGetter,
                b.Miner);
            ActionEvaluation[] evals =
                actionEvaluator.EvaluateBlock(b, previousStates).ToArray();
            IImmutableDictionary<Address, IValue> dirty = evals.GetDirtyStates();
            IImmutableDictionary<(Address, Currency), FungibleAssetValue> balances =
                evals.GetDirtyBalances();
            IImmutableDictionary<Currency, FungibleAssetValue> totalSupplies
                = evals.GetDirtyTotalSupplies();
            const int accountsCount = 5;
            Address[] addresses = Enumerable.Repeat<object>(null, accountsCount)
                .Select(_ => new PrivateKey().ToAddress())
                .ToArray();
            for (int i = 0; i < 2; ++i)
            {
                for (int j = 0; j < accountsCount; ++j)
                {
                    int index = i * accountsCount + j;
                    Transaction tx = Transaction.Create<DumbAction>(
                        store.GetTxNonce(chain.Id, signer),
                        privateKey,
                        chain.Genesis.Hash,
                        new[] { new DumbAction(addresses[j], index.ToString()) }
                    );
                    b = chain.EvaluateAndSign(
                        ProposeNext(
                            b,
                            new[] { tx },
                            blockInterval: TimeSpan.FromSeconds(10),
                            miner: GenesisProposer.PublicKey,
                            lastCommit: CreateBlockCommit(b)),
                        GenesisProposer);
                    previousStates = AccountStateDeltaImpl.ChooseVersion(
                        b.ProtocolVersion,
                        addrs => addrs.Select(dirty.GetValueOrDefault).ToArray(),
                        (address, currency) => balances.GetValueOrDefault((address, currency)),
                        currency =>
                        {
                            if (!currency.TotalSupplyTrackable)
                            {
                                throw TotalSupplyNotTrackableException.WithDefaultMessage(currency);
                            }

                            return totalSupplies.TryGetValue(currency, out var totalSupply)
                                ? totalSupply
                                : currency * 0;
                        },
                        () => new ValidatorSet(),
                        b.Miner);

                    dirty = actionEvaluator.EvaluateBlock(b, previousStates).GetDirtyStates();
                    Assert.NotEmpty(dirty);
                    store.PutBlock(b);
                    BuildIndex(chain.Id, b);
                    Assert.Equal(b, chain[b.Hash]);
                    if (presentIndices.Contains((int)b.Index))
                    {
                        presentBlocks.Add(b);
                    }
                }
            }

            stateStore.PruneStates(
                ImmutableHashSet<HashDigest<SHA256>>.Empty
                    .Add(presentBlocks[0].StateRootHash)
                    .Add(presentBlocks[1].StateRootHash)
            );

            return (signer, addresses, chain);
        }

        /// <summary>
        /// Configures the store fixture that every test in this class depends on.
        /// Subclasses should override this.
        /// </summary>
        /// <param name="blockAction">The block action to use.</param>
        /// <returns>The store fixture that every test in this class depends on.</returns>
        protected virtual StoreFixture GetStoreFixture(IAction blockAction) =>
            new MemoryStoreFixture(blockAction: blockAction);

        private (Address[], Transaction[]) MakeFixturesForAppendTests(
            PrivateKey privateKey = null,
            DateTimeOffset epoch = default,
            PrivateKey[] keys = null
        )
        {
            Address[] addresses = keys is PrivateKey[] ks
                ? ks.Select(AddressExtensions.ToAddress).ToArray()
                : new[]
                {
                    _fx.Address1,
                    _fx.Address2,
                    _fx.Address3,
                    _fx.Address4,
                    _fx.Address5,
                };

            if (addresses.Length != 5)
            {
                throw new ArgumentException("The number of keys must 5.", nameof(keys));
            }

            privateKey = privateKey ?? new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            Transaction[] txs =
            {
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[0], "foo"),
                        new DumbAction(addresses[1], "bar"),
                    },
                    timestamp: epoch,
                    nonce: 0,
                    updatedAddresses: new[] { addresses[0], addresses[1] }.ToImmutableHashSet(),
                    privateKey: privateKey),
                _fx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[2], "baz"),
                        new DumbAction(addresses[3], "qux"),
                    },
                    timestamp: epoch.AddSeconds(5),
                    nonce: 1,
                    updatedAddresses: new[] { addresses[2], addresses[3] }.ToImmutableHashSet(),
                    privateKey: privateKey),
            };

            return (addresses, txs);
        }

        [SkippableFact]
        private void TipChanged()
        {
            var genesis = _blockChain.Genesis;

            _renderer.ResetRecords();

            Assert.Empty(_renderer.BlockRecords);
            Block block = _blockChain.ProposeBlock(new PrivateKey());
            _blockChain.Append(block, CreateBlockCommit(block));
            IReadOnlyList<RenderRecord<DumbAction>.BlockEvent> records = _renderer.BlockRecords;
            Assert.Equal(2, records.Count);
            foreach (RenderRecord<DumbAction>.BlockEvent record in records)
            {
                Assert.Equal(genesis, record.OldTip);
                Assert.Equal(block, record.NewTip);
                Assert.Equal(1, record.NewTip.Index);
            }

            _renderer.ResetRecords();
            Assert.Throws<InvalidBlockIndexException>(
                () => _blockChain.Append(block, CreateBlockCommit(block)));
            Assert.Empty(_renderer.BlockRecords);
        }

        [SkippableFact]
        private void CreateWithGenesisBlock()
        {
            var storeFixture = new MemoryStoreFixture();
            var policy = new NullBlockPolicy<DumbAction>();

            var addresses = ImmutableList<Address>.Empty
                .Add(storeFixture.Address1)
                .Add(storeFixture.Address2)
                .Add(storeFixture.Address3);

            var validatorPrivKey = new PrivateKey();

            var privateKey = new PrivateKey();
            var systemActions = new IAction[]
            {
                new Initialize(
                    states: ImmutableDictionary.Create<Address, IValue>(),
                    validatorSet: new ValidatorSet(
                        new List<Validator>
                        {
                            new Validator(validatorPrivKey.PublicKey, BigInteger.One),
                        }
                    )
                ),
            };

            var customActions =
                addresses
                    .Select((address, index) => new DumbAction(address, index.ToString()))
                    .ToArray();

            var systemTxs = systemActions
                .Select((systemAction, i) => Transaction.Create<DumbAction>(
                    nonce: i,
                    privateKey: privateKey,
                    genesisHash: null,
                    actions: new IAction[] { systemAction }))
                .ToArray();
            var customTxs = new[]
            {
                Transaction.Create<DumbAction>(
                    nonce: systemTxs.Length,
                    privateKey: privateKey,
                    genesisHash: null,
                    actions: customActions,
                    updatedAddresses: addresses.ToImmutableHashSet()
                ),
            };
            var txs = systemTxs.Concat(customTxs).ToImmutableList();
            BlockChain<DumbAction> blockChain = BlockChain<DumbAction>.Create(
                    policy,
                    new VolatileStagePolicy<DumbAction>(),
                    storeFixture.Store,
                    storeFixture.StateStore,
                    BlockChain<DumbAction>.ProposeGenesisBlock(
                        privateKey: privateKey, transactions: txs));

            var validator = blockChain.GetValidatorSet()[0];
            Assert.Equal(validatorPrivKey.PublicKey, validator.PublicKey);
            Assert.Equal(BigInteger.One, validator.Power);
            Assert.Equal(
                addresses,
                blockChain.Genesis.Transactions.Single(
                    tx => !(tx.Actions is null) &&
                        tx.Actions.All(a => !Registry.IsSystemAction(a))).UpdatedAddresses);

            var states = addresses.Select(address => blockChain.GetState(address))
                .ToArray();
            for (int i = 0; i < states.Length; ++i)
            {
                Assert.Equal((Text)states[i], i.ToString());
            }
        }

        [SkippableFact]
        private void ConstructWithUnexpectedGenesisBlock()
        {
            var policy = new NullBlockPolicy<DumbAction>();
            var stagePolicy = new VolatileStagePolicy<DumbAction>();
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var genesisBlockA = BlockChain<DumbAction>.ProposeGenesisBlock();
            var genesisBlockB = BlockChain<DumbAction>.ProposeGenesisBlock();

            var blockChain = BlockChain<DumbAction>.Create(
                policy,
                stagePolicy,
                store,
                stateStore,
                genesisBlockA);

            Assert.Throws<InvalidGenesisBlockException>(() =>
            {
                var blockchain = new BlockChain<DumbAction>(
                    policy,
                    stagePolicy,
                    store,
                    stateStore,
                    genesisBlockB);
            });
        }

        [SkippableFact]
        private void FilterLowerNonceTxAfterStaging()
        {
            var privateKey = new PrivateKey();
            var txsA = Enumerable.Range(0, 3)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsA);
            Block b1 = _blockChain.ProposeBlock(privateKey);
            _blockChain.Append(b1, CreateBlockCommit(b1));
            Assert.Equal(
                txsA,
                ActionEvaluator.OrderTxsForEvaluation(
                    b1.ProtocolVersion,
                    b1.Transactions,
                    b1.PreEvaluationHash.ByteArray
                )
            );

            var txsB = Enumerable.Range(0, 4)
                .Select(nonce => _fx.MakeTransaction(
                    nonce: nonce, privateKey: privateKey, timestamp: DateTimeOffset.Now))
                .ToArray();
            StageTransactions(txsB);

            // Stage only txs having higher or equal with nonce than expected nonce.
            Assert.Single(_blockChain.GetStagedTransactionIds());
            Assert.Single(_blockChain.StagePolicy.Iterate(_blockChain, filtered: true));
            Assert.Equal(4, _blockChain.StagePolicy.Iterate(_blockChain, filtered: false).Count());
        }

        [SkippableFact]
        private void CheckIfTxPolicyExceptionHasInnerException()
        {
            var policy = new NullPolicyButTxPolicyAlwaysThrows<DumbAction>(
                x =>
                {
                    // ReSharper disable AccessToModifiedClosure
                    // The following method calls should not throw any exceptions:
                    x?.GetStates(new[] { default(Address) });
                    x?.GetState(default);
                    // ReSharper restore AccessToModifiedClosure
                });
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var genesisTx = Transaction.Create<DumbAction>(
                0,
                new PrivateKey(),
                null,
                List.Empty);
            var genesisWithTx = ProposeGenesisBlock<DumbAction>(
                ProposeGenesis<DumbAction>(GenesisProposer.PublicKey, new[] { genesisTx }),
                privateKey: GenesisProposer,
                blockAction: policy.BlockAction,
                nativeTokenPredicate: policy.NativeTokens.Contains);

            var chain = BlockChain<DumbAction>.Create(
                policy,
                new VolatileStagePolicy<DumbAction>(),
                store,
                stateStore,
                genesisWithTx);

            var blockTx = Transaction.Create<DumbAction>(
                0,
                new PrivateKey(),
                null,
                Array.Empty<DumbAction>());
            var block = ProposeNextBlock(chain.Genesis, GenesisProposer, new[] { blockTx });

            var e = Assert.Throws<TxPolicyViolationException>(
                () => chain.Append(block, CreateBlockCommit(block)));
            Assert.NotNull(e.InnerException);
        }

        [SkippableFact]
        private void ValidateNextBlockCommitOnValidatorSetChange()
        {
            var storeFixture = new MemoryStoreFixture();
            var policy = new NullBlockPolicy<SetValidator>();

            var addresses = ImmutableList<Address>.Empty
                .Add(storeFixture.Address1)
                .Add(storeFixture.Address2)
                .Add(storeFixture.Address3);

            var newValidatorPrivKey = new PrivateKey();
            var newValidators = ValidatorPrivateKeys.Append(newValidatorPrivKey);
            var initialValidatorSet = new ValidatorSet(
                ValidatorPrivateKeys.Select(
                    pk => new Validator(pk.PublicKey, BigInteger.One)
                ).ToList()
            );
            var systemActions = new[]
            {
                new Initialize(
                    validatorSet: initialValidatorSet,
                    states: ImmutableDictionary.Create<Address, IValue>()
                ),
            };
            var privateKey = new PrivateKey();
            var txs = systemActions
                .Select((systemAction, i) => Transaction.Create<SetValidator>(
                    nonce: i,
                    privateKey: privateKey,
                    genesisHash: null,
                    actions: new IAction[] { systemAction }))
                .ToImmutableList();

            BlockChain<SetValidator> blockChain =
                BlockChain<SetValidator>.Create(
                    policy,
                    new VolatileStagePolicy<SetValidator>(),
                    storeFixture.Store,
                    storeFixture.StateStore,
                    BlockChain<SetValidator>.ProposeGenesisBlock(
                        privateKey: privateKey, transactions: txs));

            blockChain.MakeTransaction(
                new PrivateKey(),
                new[]
                {
                    new SetValidator(new Validator(newValidatorPrivKey.PublicKey, BigInteger.One)),
                }
            );
            var newBlock = blockChain.ProposeBlock(new PrivateKey());
            var newBlockCommit = new BlockCommit(
                newBlock.Index, 0, newBlock.Hash, ValidatorPrivateKeys.Select(
                    pk => new VoteMetadata(
                        newBlock.Index,
                        0,
                        newBlock.Hash,
                        DateTimeOffset.UtcNow,
                        pk.PublicKey,
                        VoteFlag.PreCommit).Sign(pk))
                .OrderBy(vote => vote.ValidatorPublicKey.ToAddress())
                .ToImmutableArray());
            blockChain.Append(newBlock, newBlockCommit);

            blockChain.MakeTransaction(
                new PrivateKey(),
                new[]
                {
                    new SetValidator(new Validator(new PrivateKey().PublicKey, BigInteger.One)),
                }
            );
            var nextBlock = blockChain.ProposeBlock(
                new PrivateKey(), lastCommit: newBlockCommit);
            var nextBlockCommit = new BlockCommit(
                nextBlock.Index, 0, nextBlock.Hash, newValidators.Select(
                    pk => new VoteMetadata(
                        nextBlock.Index,
                        0,
                        nextBlock.Hash,
                        DateTimeOffset.UtcNow,
                        pk.PublicKey,
                        VoteFlag.PreCommit).Sign(pk))
                .OrderBy(vote => vote.ValidatorPublicKey.ToAddress())
                .ToImmutableArray());
            blockChain.Append(nextBlock, nextBlockCommit);

            blockChain.MakeTransaction(
                new PrivateKey(),
                new[]
                {
                    new SetValidator(new Validator(new PrivateKey().PublicKey, BigInteger.One)),
                }
            );
            var invalidCommitBlock = blockChain.ProposeBlock(
                new PrivateKey(), lastCommit: nextBlockCommit);

            Assert.Throws<InvalidBlockCommitException>(
                () => blockChain.Append(
                    invalidCommitBlock,
                    new BlockCommit(
                        invalidCommitBlock.Index, 0, invalidCommitBlock.Hash, newValidators.Select(
                            pk => new VoteMetadata(
                                invalidCommitBlock.Index,
                                0,
                                invalidCommitBlock.Hash,
                                DateTimeOffset.UtcNow,
                                pk.PublicKey,
                                VoteFlag.PreCommit).Sign(pk)).ToImmutableArray())));

            Assert.Equal(
                blockChain.GetValidatorSet(blockChain[0].Hash),
                new ValidatorSet(
                    ValidatorPrivateKeys.Select(
                        pk => new Validator(pk.PublicKey, BigInteger.One)).ToList()));

            Assert.Equal(
                blockChain.GetValidatorSet(blockChain[1].Hash),
                new ValidatorSet(
                    newValidators.Select(
                        pk => new Validator(pk.PublicKey, BigInteger.One)).ToList()));
        }

        private class
            NullPolicyButTxPolicyAlwaysThrows<T> : NullPolicyForGetStatesOnCreatingBlockChain<
                T>
            where T : IAction, new()
        {
            public NullPolicyButTxPolicyAlwaysThrows(
                Action<BlockChain<T>> hook)
                : base(hook)
            {
            }

            public override TxPolicyViolationException ValidateNextBlockTx(
                BlockChain<T> blockChain,
                Transaction transaction
            )
            {
                _hook(blockChain);
                return new TxPolicyViolationException("Test Message", transaction.Id);
            }
        }

        private class NullPolicyForGetStatesOnCreatingBlockChain<T> : NullBlockPolicy<T>
            where T : IAction, new()
        {
            protected readonly Action<BlockChain<T>> _hook;

            public NullPolicyForGetStatesOnCreatingBlockChain(
                Action<BlockChain<T>> hook
            )
            {
                _hook = hook;
            }

            public override TxPolicyViolationException ValidateNextBlockTx(
                BlockChain<T> blockChain,
                Transaction transaction
            )
            {
                _hook(blockChain);
                return base.ValidateNextBlockTx(blockChain, transaction);
            }

            public override BlockPolicyViolationException ValidateNextBlock(
                BlockChain<T> blocks,
                Block nextBlock
            )
            {
                _hook(blocks);
                return base.ValidateNextBlock(blocks, nextBlock);
            }
        }
    }
}
