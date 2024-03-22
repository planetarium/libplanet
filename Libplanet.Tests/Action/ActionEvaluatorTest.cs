using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Loader;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Blocks;
using Libplanet.Tests.Fixtures;
using Libplanet.Tests.Store;
using Libplanet.Tests.Tx;
using Libplanet.Types.Assets;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Libplanet.Types.Tx;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Action.State.KeyConverters;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Action
{
    public class ActionEvaluatorTest
    {
        private readonly ILogger _logger;
        private readonly ITestOutputHelper _output;
        private readonly BlockPolicy _policy;
        private readonly StoreFixture _storeFx;
        private readonly TxFixture _txFx;

        public ActionEvaluatorTest(ITestOutputHelper output)
        {
            Log.Logger = _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext<ActionEvaluatorTest>();

            _output = output;
            _policy = new BlockPolicy(
                blockAction: new MinerReward(1),
                getMaxTransactionsBytes: _ => 50 * 1024);
            _storeFx = new MemoryStoreFixture(_policy.BlockAction);
            _txFx = new TxFixture(null);
        }

        [Fact]
        public void Idempotent()
        {
            // NOTE: This test checks that blocks can be evaluated idempotently. Also it checks
            // the action results in pre-evaluation step and in evaluation step are equal.
            const int repeatCount = 2;
            var signer = new PrivateKey();
            var timestamp = DateTimeOffset.UtcNow;
            var txAddress = signer.Address;
            var txs = new[]
            {
                Transaction.Create(
                    nonce: 0,
                    privateKey: signer,
                    genesisHash: null,
                    actions: new[] { new RandomAction(txAddress), }.ToPlainValues()),
            };
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var noStateRootBlock = new BlockContent(
                new BlockMetadata(
                    protocolVersion: Block.CurrentProtocolVersion,
                    index: 0,
                    timestamp: timestamp,
                    miner: GenesisProposer.Address,
                    publicKey: GenesisProposer.PublicKey,
                    previousHash: null,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null,
                    proof: null),
                transactions: txs).Propose();
            var actionEvaluator = new ActionEvaluator(
                _ => null,
                stateStore,
                new SingleActionLoader(typeof(RandomAction)));
            Block stateRootBlock = noStateRootBlock.Sign(
                GenesisProposer,
                BlockChain.DetermineGenesisStateRootHash(
                    actionEvaluator,
                    noStateRootBlock,
                    out IReadOnlyList<ICommittedActionEvaluation> evals));
            var generatedRandomNumbers = new List<int>();

            AssertPreEvaluationBlocksEqual(stateRootBlock, noStateRootBlock);

            for (int i = 0; i < repeatCount; ++i)
            {
                var actionEvaluations = actionEvaluator.Evaluate(noStateRootBlock, null);
                generatedRandomNumbers.Add(
                    (Integer)new WorldBaseState(
                        stateStore.GetStateRoot(actionEvaluations[0].OutputState), stateStore)
                            .GetAccountState(ReservedAddresses.LegacyAccount)
                            .GetState(txAddress));
                actionEvaluations = actionEvaluator.Evaluate(stateRootBlock, null);
                generatedRandomNumbers.Add(
                    (Integer)new WorldBaseState(
                        stateStore.GetStateRoot(actionEvaluations[0].OutputState), stateStore)
                            .GetAccountState(ReservedAddresses.LegacyAccount)
                            .GetState(txAddress));
            }

            for (int i = 1; i < generatedRandomNumbers.Count; ++i)
            {
                Assert.Equal(generatedRandomNumbers[0], generatedRandomNumbers[i]);
            }
        }

        [Fact]
        public void Evaluate()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            long blockIndex = 1;

            var action = new EvaluateTestAction()
            {
                BlockIndexKey = new PrivateKey().Address,
                MinerKey = new PrivateKey().Address,
                SignerKey = new PrivateKey().Address,
            };

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: new BlockPolicy(),
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(EvaluateTestAction)));
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);
            chain.Append(block, CreateBlockCommit(block));

            var evaluations = chain.ActionEvaluator.Evaluate(
                chain.Tip, chain.Store.GetStateRootHash(chain.Tip.PreviousHash));

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.Null(evaluations.Single().Exception);
            Assert.Equal(
                chain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(action.SignerKey),
                (Text)address.ToHex());
            Assert.Equal(
                chain
                    .GetWorldState()
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetState(action.MinerKey),
                (Text)miner.Address.ToHex());
            var state = chain
                .GetWorldState()
                .GetAccountState(ReservedAddresses.LegacyAccount)
                .GetState(action.BlockIndexKey);
            Assert.Equal((long)(Integer)state, blockIndex);
        }

        [Fact]
        public void EvaluateWithException()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;

            var action = new ThrowException { ThrowOnExecution = true };

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: new BlockPolicy(),
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(ThrowException)));
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());

            chain.StageTransaction(tx);
            Block block = chain.ProposeBlock(new PrivateKey());
            chain.Append(block, CreateBlockCommit(block));
            var evaluations = chain.ActionEvaluator.Evaluate(
                chain.Tip, chain.Store.GetStateRootHash(chain.Tip.PreviousHash));

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.NotNull(evaluations.Single().Exception);
            Assert.IsType<UnexpectedlyTerminatedActionException>(
                evaluations.Single().Exception);
            Assert.IsType<ThrowException.SomeException>(
                evaluations.Single().Exception.InnerException);
        }

        [Fact]
        public void EvaluateWithCriticalException()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;

            var action = new ThrowException
            {
                ThrowOnExecution = true,
                Deterministic = false,
            };

            var store = new MemoryStore();
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());
            var (chain, actionEvaluator) =
                TestUtils.MakeBlockChainAndActionEvaluator(
                    policy: new BlockPolicy(),
                    store: store,
                    stateStore: stateStore,
                    actionLoader: new SingleActionLoader(typeof(ThrowException)));
            var genesis = chain.Genesis;
            // Evaluation is run with rehearsal true to get updated addresses on tx creation.
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: genesis.Hash,
                actions: new[] { action }.ToPlainValues());
            var txs = new Transaction[] { tx };
            PreEvaluationBlock block = new BlockContent(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: new PrivateKey().PublicKey,
                    previousHash: genesis.Hash,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null,
                    proof: null),
                transactions: txs).Propose();
            IWorld previousState = actionEvaluator.PrepareInitialDelta(genesis.StateRootHash);

            Assert.Throws<OutOfMemoryException>(
                () => actionEvaluator.EvaluateTx(
                    blockHeader: block,
                    tx: tx,
                    previousState: previousState).ToList());
            Assert.Throws<OutOfMemoryException>(
                () => chain.ActionEvaluator.Evaluate(
                    block, chain.Store.GetStateRootHash(block.PreviousHash)).ToList());
        }

        [Fact]
        public void EvaluateTxs()
        {
            DumbAction MakeAction(Address address, char identifier, Address? transferTo = null)
            {
                return new DumbAction(
                    targetAddress: address,
                    item: identifier.ToString(),
                    recordRandom: true,
                    transfer: transferTo is Address to
                        ? Tuple.Create<Address, Address, BigInteger>(address, to, 5)
                        : null);
            }

            Address[] addresses =
            {
                _txFx.Address1,
                _txFx.Address2,
                _txFx.Address3,
                _txFx.Address4,
                _txFx.Address5,
            };

            Block genesis = ProposeGenesisBlock(TestUtils.GenesisProposer);
            var actionEvaluator = new ActionEvaluator(
                policyBlockActionGetter: _ => null,
                stateStore: new TrieStateStore(new MemoryKeyValueStore()),
                actionTypeLoader: new SingleActionLoader(typeof(DumbAction)));

            Transaction[] block1Txs =
            {
                new Transaction(
                    new UnsignedTx(
                        new TxInvoice(
                            genesisHash: genesis.Hash,
                            updatedAddresses: new[]
                            {
                                addresses[0],
                                addresses[1],
                            }.ToImmutableHashSet(),
                            timestamp: DateTimeOffset.MinValue.AddSeconds(2),
                            actions: new TxActionList(new[]
                            {
                                MakeAction(addresses[0], 'A', addresses[1]),
                                MakeAction(addresses[1], 'B', addresses[2]),
                            }.ToPlainValues()),
                            maxGasPrice: null,
                            gasLimit: null),
                        new TxSigningMetadata(_txFx.PrivateKey1.PublicKey, 0)),
                    _txFx.PrivateKey1),
                new Transaction(
                    new UnsignedTx(
                        new TxInvoice(
                            genesisHash: genesis.Hash,
                            updatedAddresses: ImmutableHashSet<Address>.Empty,
                            timestamp: DateTimeOffset.MinValue.AddSeconds(4),
                            actions: new TxActionList(new[]
                            {
                                MakeAction(addresses[2], 'C', addresses[3]),
                            }.ToPlainValues()),
                            maxGasPrice: null,
                            gasLimit: null),
                        new TxSigningMetadata(_txFx.PrivateKey2.PublicKey, 0)),
                    _txFx.PrivateKey2),
                new Transaction(
                    new UnsignedTx(
                        new TxInvoice(
                            genesisHash: genesis.Hash,
                            updatedAddresses: ImmutableHashSet<Address>.Empty,
                            timestamp: DateTimeOffset.MinValue.AddSeconds(7),
                            actions: TxActionList.Empty,
                            maxGasPrice: null,
                            gasLimit: null),
                        new TxSigningMetadata(_txFx.PrivateKey3.PublicKey, 0)),
                    _txFx.PrivateKey3),
            };
            foreach ((var tx, var i) in block1Txs.Zip(
                Enumerable.Range(0, block1Txs.Length), (x, y) => (x, y)))
            {
                _logger.Debug("{0}[{1}] = {2}", nameof(block1Txs), i, tx.Id);
            }

            Block block1 = ProposeNextBlock(
                genesis,
                GenesisProposer,
                block1Txs);
            IWorld previousState = actionEvaluator.PrepareInitialDelta(null);
            var evals = actionEvaluator.EvaluateBlock(
                block1,
                previousState).ToImmutableArray();
            int randomValue = 0;
            // Once the BlockMetadata.CurrentProtocolVersion gets bumped, expectations may also
            // have to be updated, since the order may change due to different PreEvaluationHash.
            (int TxIdx, int ActionIdx, string[] UpdatedStates, Address Signer)[] expectations =
            {
                (1, 0, new[] { null, null, "C", null, null }, _txFx.Address2),
                (0, 0, new[] { "A", null, "C", null, null }, _txFx.Address1),
                (0, 1, new[] { "A", "B", "C", null, null }, _txFx.Address1),
            };
            Assert.Equal(expectations.Length, evals.Length);
            foreach (var (expect, eval) in expectations.Zip(evals, (x, y) => (x, y)))
            {
                Assert.Equal(block1Txs[expect.TxIdx].Id, eval.InputContext.TxId);
                Assert.Equal(
                    block1Txs[expect.TxIdx].Actions[expect.ActionIdx],
                    eval.Action.PlainValue);
                Assert.Equal(expect.Signer, eval.InputContext.Signer);
                Assert.Equal(GenesisProposer.Address, eval.InputContext.Miner);
                Assert.Equal(block1.Index, eval.InputContext.BlockIndex);
                randomValue = eval.InputContext.GetRandom().Next();
                Assert.Equal(
                    (Integer)eval.OutputState
                        .GetAccount(ReservedAddresses.LegacyAccount)
                        .GetState(DumbAction.RandomRecordsAddress),
                    (Integer)randomValue);
                Assert.Equal(
                    expect.UpdatedStates,
                    addresses.Select(
                        eval.OutputState.GetAccount(ReservedAddresses.LegacyAccount).GetState)
                        .Select(x => x is Text t ? t.Value : null));
            }

            previousState = actionEvaluator.PrepareInitialDelta(null);
            ActionEvaluation[] evals1 =
                actionEvaluator.EvaluateBlock(block1, previousState).ToArray();
            var dirty1 = evals1.Last().OutputState.Trie
                .Diff(evals1.First().InputContext.PreviousState.Trie)
                .ToDictionary(kv => kv.Path, kv => kv.SourceValue);
            Assert.Equal((Text)"A", dirty1[ToStateKey(addresses[0])]);
            Assert.Equal((Text)"B", dirty1[ToStateKey(addresses[1])]);
            Assert.Equal((Text)"C", dirty1[ToStateKey(addresses[2])]);
            Assert.Equal(
                (Integer)randomValue,
                dirty1[ToStateKey(DumbAction.RandomRecordsAddress)]);
            Assert.Equal(
                (Integer)new FungibleAssetValue(DumbAction.DumbCurrency, -5, 0).RawValue,
                dirty1[ToFungibleAssetKey(addresses[0], DumbAction.DumbCurrency)]);
            Assert.Equal(
                (Integer)new FungibleAssetValue(DumbAction.DumbCurrency).RawValue,
                dirty1[ToFungibleAssetKey(addresses[1], DumbAction.DumbCurrency)]);
            Assert.Equal(
                (Integer)new FungibleAssetValue(DumbAction.DumbCurrency).RawValue,
                dirty1[ToFungibleAssetKey(addresses[2], DumbAction.DumbCurrency)]);
            Assert.Equal(
                (Integer)new FungibleAssetValue(DumbAction.DumbCurrency, 5, 0).RawValue,
                dirty1[ToFungibleAssetKey(addresses[3], DumbAction.DumbCurrency)]);

            Transaction[] block2Txs =
            {
                // Note that these timestamps in themselves does not have any meanings but are
                // only arbitrary.  These purpose to make their evaluation order in a block
                // equal to the order we (the test) intend:
                new Transaction(
                    new UnsignedTx(
                        new TxInvoice(
                            genesisHash: genesis.Hash,
                            updatedAddresses: new[] { addresses[0] }.ToImmutableHashSet(),
                            timestamp: DateTimeOffset.MinValue.AddSeconds(1),
                            actions: new TxActionList(new[]
                            {
                                MakeAction(addresses[0], 'D'),
                            }.ToPlainValues()),
                            maxGasPrice: null,
                            gasLimit: null),
                        new TxSigningMetadata(_txFx.PrivateKey1.PublicKey, 0)),
                    _txFx.PrivateKey1),
                new Transaction(
                    new UnsignedTx(
                        new TxInvoice(
                            genesisHash: genesis.Hash,
                            updatedAddresses: new[] { addresses[3] }.ToImmutableHashSet(),
                            timestamp: DateTimeOffset.MinValue.AddSeconds(2),
                            actions: new TxActionList(new[]
                            {
                                MakeAction(addresses[3], 'E'),
                            }.ToPlainValues()),
                            maxGasPrice: null,
                            gasLimit: null),
                        new TxSigningMetadata(_txFx.PrivateKey2.PublicKey, 0)),
                    _txFx.PrivateKey2),
                new Transaction(
                    new UnsignedTx(
                        new TxInvoice(
                            genesisHash: genesis.Hash,
                            updatedAddresses: new[] { addresses[4] }.ToImmutableHashSet(),
                            timestamp: DateTimeOffset.MinValue.AddSeconds(4),
                            actions: new TxActionList(new[]
                            {
                                new DumbAction(
                                    addresses[4],
                                    "RecordRehearsal",
                                    transferFrom: addresses[0],
                                    transferTo: addresses[4],
                                    transferAmount: 8,
                                    recordRandom: true),
                            }.ToPlainValues()),
                            maxGasPrice: null,
                            gasLimit: null),
                        new TxSigningMetadata(_txFx.PrivateKey3.PublicKey, 0)),
                    _txFx.PrivateKey3),
            };
            foreach ((var tx, var i) in block2Txs.Zip(
                Enumerable.Range(0, block2Txs.Length), (x, y) => (x, y)))
            {
                _logger.Debug("{0}[{1}] = {2}", nameof(block2Txs), i, tx.Id);
            }

            // Same as above, use the same timestamp of last commit for each to get a deterministic
            // test result.
            Block block2 = ProposeNextBlock(
                block1,
                GenesisProposer,
                block2Txs,
                lastCommit: CreateBlockCommit(block1, true));

            // Forcefully reset to null delta
            previousState = evals1.Last().OutputState;
            evals = actionEvaluator.EvaluateBlock(
                block2,
                previousState).ToImmutableArray();

            // Once the BlockMetadata.CurrentProtocolVersion gets bumped, expectations may also
            // have to be updated, since the order may change due to different PreEvaluationHash.
            expectations = new[]
            {
                (1, 0, new[] { "A", "B", "C", "E", null }, _txFx.Address2),
                (0, 0, new[] { "A,D", "B", "C", "E", null }, _txFx.Address1),
                (2, 0, new[] { "A,D", "B", "C", "E", "RecordRehearsal" }, _txFx.Address3),
            };
            Assert.Equal(expectations.Length, evals.Length);
            foreach (var (expect, eval) in expectations.Zip(evals, (x, y) => (x, y)))
            {
                List<string> updatedStates = addresses
                    .Select(eval.OutputState.GetAccount(ReservedAddresses.LegacyAccount).GetState)
                    .Select(x => x is Text t ? t.Value : null)
                    .ToList();
                Assert.Equal(expect.UpdatedStates, updatedStates);
                Assert.Equal(block2Txs[expect.TxIdx].Id, eval.InputContext.TxId);
                Assert.Equal(
                    block2Txs[expect.TxIdx].Actions[expect.Item2],
                    eval.Action.PlainValue);
                Assert.Equal(expect.Signer, eval.InputContext.Signer);
                Assert.Equal(GenesisProposer.Address, eval.InputContext.Miner);
                Assert.Equal(block2.Index, eval.InputContext.BlockIndex);
                Assert.Null(eval.Exception);
                randomValue = eval.InputContext.GetRandom().Next();
                Assert.Equal(
                    eval.OutputState
                        .GetAccount(ReservedAddresses.LegacyAccount)
                        .GetState(DumbAction.RandomRecordsAddress),
                    (Integer)randomValue);
            }

            previousState = evals1.Last().OutputState;
            var evals2 = actionEvaluator.EvaluateBlock(block2, previousState).ToArray();
            var dirty2 = evals2.Last().OutputState.Trie
                .Diff(evals2.First().InputContext.PreviousState.Trie)
                .ToDictionary(kv => kv.Path, kv => kv.SourceValue);
            Assert.Equal((Text)"A,D", dirty2[ToStateKey(addresses[0])]);
            Assert.Equal((Text)"E", dirty2[ToStateKey(addresses[3])]);
            Assert.Equal((Text)"RecordRehearsal", dirty2[ToStateKey(addresses[4])]);
            Assert.Equal((Integer)randomValue, dirty2[ToStateKey(DumbAction.RandomRecordsAddress)]);
        }

        [Fact]
        public void EvaluateTx()
        {
            PrivateKey[] keys = { new PrivateKey(), new PrivateKey(), new PrivateKey() };
            Address[] addresses = keys.Select(key => key.Address).ToArray();
            DumbAction[] actions =
            {
                new DumbAction(
                    targetAddress: addresses[0],
                    item: "0",
                    transferFrom: addresses[0],
                    transferTo: addresses[1],
                    transferAmount: 5,
                    recordRandom: true),
                new DumbAction(
                    targetAddress: addresses[1],
                    item: "1",
                    transferFrom: addresses[2],
                    transferTo: addresses[1],
                    transferAmount: 10,
                    recordRandom: true),
                new DumbAction(
                    targetAddress: addresses[0],
                    item: "2",
                    transferFrom: addresses[1],
                    transferTo: addresses[0],
                    transferAmount: 10,
                    recordRandom: true),
                new DumbAction(addresses[2], "R", recordRandom: true),
            };
            var tx =
                Transaction.Create(0, _txFx.PrivateKey1, null, actions.ToPlainValues());
            var txs = new Transaction[] { tx };
            var block = new BlockContent(
                new BlockMetadata(
                    index: 1L,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: keys[0].PublicKey,
                    previousHash: default(BlockHash),
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: null,
                    proof: null),
                transactions: txs).Propose();
            var actionEvaluator = new ActionEvaluator(
                policyBlockActionGetter: _ => null,
                stateStore: new TrieStateStore(new MemoryKeyValueStore()),
                actionTypeLoader: new SingleActionLoader(typeof(DumbAction)));

            IWorld previousState = actionEvaluator.PrepareInitialDelta(null);
            var evaluations = actionEvaluator.EvaluateTx(
                blockHeader: block,
                tx: tx,
                previousState: previousState).ToImmutableArray();

            Assert.Equal(actions.Length, evaluations.Length);
            string[][] expectedStates =
            {
                new[] { "0", null, null },
                new[] { "0", "1", null },
                new[] { "0,2", "1", null },
                new[] { "0,2", "1", "R" },
            };
            BigInteger[][] expectedBalances =
            {
                new BigInteger[] { -5, 5, 0 },
                new BigInteger[] { -5, 15, -10 },
                new BigInteger[] { 5, 5, -10 },
                new BigInteger[] { 5, 5, -10 },
            };

            Currency currency = DumbAction.DumbCurrency;
            IValue[] initStates = new IValue[3];
            BigInteger[] initBalances = new BigInteger[3];
            for (int i = 0; i < evaluations.Length; i++)
            {
                IActionEvaluation eval = evaluations[i];
                Assert.Equal(actions[i].PlainValue, eval.Action);
                Assert.Equal(_txFx.Address1, eval.InputContext.Signer);
                Assert.Equal(tx.Id, eval.InputContext.TxId);
                Assert.Equal(addresses[0], eval.InputContext.Miner);
                Assert.Equal(1, eval.InputContext.BlockIndex);
                Assert.Equal(
                    (Integer)eval.OutputState
                        .GetAccount(ReservedAddresses.LegacyAccount)
                        .GetState(DumbAction.RandomRecordsAddress),
                    (Integer)eval.InputContext.GetRandom().Next());
                IActionEvaluation prevEval = i > 0 ? evaluations[i - 1] : null;
                Assert.Equal(
                    prevEval is null
                        ? initStates
                        : addresses.Select(
                            prevEval.OutputState
                                .GetAccount(ReservedAddresses.LegacyAccount)
                                .GetState),
                    addresses.Select(
                        eval.InputContext.PreviousState
                            .GetAccount(ReservedAddresses.LegacyAccount)
                            .GetState));
                Assert.Equal(
                    expectedStates[i],
                    addresses.Select(eval.OutputState
                        .GetAccount(ReservedAddresses.LegacyAccount)
                        .GetState)
                        .Select(x => x is Text t ? t.Value : null));
                Assert.Equal(
                    prevEval is null
                        ? initBalances
                        : addresses.Select(a =>
                            prevEval.OutputState
                                .GetAccount(ReservedAddresses.LegacyAccount)
                                .GetBalance(a, currency).RawValue),
                    addresses.Select(
                        a => eval.InputContext.PreviousState
                                .GetAccount(ReservedAddresses.LegacyAccount)
                                .GetBalance(a, currency).RawValue));
                Assert.Equal(
                    expectedBalances[i],
                    addresses.Select(a => eval.OutputState
                        .GetAccount(ReservedAddresses.LegacyAccount)
                        .GetBalance(a, currency).RawValue));
            }

            previousState = actionEvaluator.PrepareInitialDelta(null);
            IWorld delta = actionEvaluator.EvaluateTx(
                blockHeader: block,
                tx: tx,
                previousState: previousState).Last().OutputState;
            Assert.Empty(evaluations[3].OutputState.Trie.Diff(delta.Trie));
        }

        [Fact]
        public void EvaluateTxResultThrowingException()
        {
            var action = new ThrowException { ThrowOnExecution = true };
            var tx = Transaction.Create(
                0,
                _txFx.PrivateKey1,
                null,
                new[] { action }.ToPlainValues(),
                null,
                null,
                DateTimeOffset.UtcNow);
            var txs = new Transaction[] { tx };
            var hash = new BlockHash(GetRandomBytes(BlockHash.Size));
            var actionEvaluator = new ActionEvaluator(
                policyBlockActionGetter: _ => null,
                stateStore: new TrieStateStore(new MemoryKeyValueStore()),
                actionTypeLoader: new SingleActionLoader(typeof(ThrowException))
            );
            var block = new BlockContent(
                new BlockMetadata(
                    index: 123,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: GenesisProposer.PublicKey,
                    previousHash: hash,
                    txHash: BlockContent.DeriveTxHash(txs),
                    lastCommit: CreateBlockCommit(hash, 122, 0),
                    proof: new LotMetadata(123L, 0, null).Prove(GenesisProposer).Proof),
                transactions: txs).Propose();
            IWorld previousState = actionEvaluator.PrepareInitialDelta(null);
            var nextState = actionEvaluator.EvaluateTx(
                blockHeader: block,
                tx: tx,
                previousState: previousState).Last().OutputState;

            Assert.Empty(nextState.Trie.Diff(previousState.Trie));
        }

        [Fact]
        public void EvaluateActions()
        {
            IntegerSet fx = new IntegerSet(new[] { 5, 10 });

            // txA: ((5 + 1) * 2) + 3 = 15
            (Transaction txA, var deltaA) = fx.Sign(
                0,
                Arithmetic.Add(1),
                Arithmetic.Mul(2),
                Arithmetic.Add(3));

            Block blockA = fx.Propose();
            fx.Append(blockA);
            ActionEvaluation[] evalsA = ActionEvaluator.EvaluateActions(
                blockHeader: blockA,
                tx: txA,
                previousState: fx.CreateWorld(blockA.PreviousHash),
                actions: txA.Actions
                    .Select(action => (IAction)ToAction<Arithmetic>(action))
                    .ToImmutableArray(),
                stateStore: fx.StateStore).ToArray();

            Assert.Equal(evalsA.Length, deltaA.Count - 1);
            Assert.Equal(
                new Integer(15),
                evalsA.Last().OutputState
                    .GetAccount(ReservedAddresses.LegacyAccount).GetState(txA.Signer));

            for (int i = 0; i < evalsA.Length; i++)
            {
                IActionEvaluation eval = evalsA[i];
                IActionContext context = eval.InputContext;
                IWorld prevState = context.PreviousState;
                IWorld outputState = eval.OutputState;
                _logger.Debug("evalsA[{0}] = {1}", i, eval);
                _logger.Debug("txA.Actions[{0}] = {1}", i, txA.Actions[i]);

                Assert.Equal(txA.Actions[i], eval.Action);
                Assert.Equal(txA.Id, context.TxId);
                Assert.Equal(blockA.Miner, context.Miner);
                Assert.Equal(blockA.Index, context.BlockIndex);
                Assert.Equal(txA.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(
                    (Integer)deltaA[i].Value,
                    prevState.GetAccount(ReservedAddresses.LegacyAccount).GetState(txA.Signer));
                Assert.Equal(
                    ToStateKey(txA.Signer),
                    Assert.Single(
                        outputState.GetAccount(ReservedAddresses.LegacyAccount).Trie.Diff(
                            prevState.GetAccount(ReservedAddresses.LegacyAccount).Trie))
                    .Path);
                Assert.Equal(
                    (Integer)deltaA[i + 1].Value,
                    outputState.GetAccount(ReservedAddresses.LegacyAccount).GetState(txA.Signer));
                Assert.Null(eval.Exception);
            }

            // txB: error(10 - 3) + -1 =
            //           (10 - 3) + -1 = 6  (error() does nothing)
            (Transaction txB, var deltaB) = fx.Sign(
                1,
                Arithmetic.Sub(3),
                new Arithmetic(),
                Arithmetic.Add(-1));

            Block blockB = fx.Propose();
            fx.Append(blockB);
            ActionEvaluation[] evalsB = ActionEvaluator.EvaluateActions(
                blockHeader: blockB,
                tx: txB,
                previousState: fx.CreateWorld(blockB.PreviousHash),
                actions: txB.Actions
                    .Select(action => (IAction)ToAction<Arithmetic>(action))
                    .ToImmutableArray(),
                stateStore: fx.StateStore).ToArray();

            Assert.Equal(evalsB.Length, deltaB.Count - 1);
            Assert.Equal(
                new Integer(6),
                evalsB.Last().OutputState
                    .GetAccount(ReservedAddresses.LegacyAccount).GetState(txB.Signer));

            for (int i = 0; i < evalsB.Length; i++)
            {
                IActionEvaluation eval = evalsB[i];
                IActionContext context = eval.InputContext;
                IWorld prevState = context.PreviousState;
                IWorld outputState = eval.OutputState;

                _logger.Debug("evalsB[{0}] = {@1}", i, eval);
                _logger.Debug("txB.Actions[{0}] = {@1}", i, txB.Actions[i]);

                Assert.Equal(txB.Actions[i], eval.Action);
                Assert.Equal(txB.Id, context.TxId);
                Assert.Equal(blockB.Miner, context.Miner);
                Assert.Equal(blockB.Index, context.BlockIndex);
                Assert.Equal(txB.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(
                    (Integer)deltaB[i].Value,
                    prevState.GetAccount(ReservedAddresses.LegacyAccount).GetState(txB.Signer));
                Assert.Equal(
                    (Integer)deltaB[i + 1].Value,
                    outputState.GetAccount(ReservedAddresses.LegacyAccount).GetState(txB.Signer));
                if (i == 1)
                {
                    Assert.Empty(outputState.Trie.Diff(prevState.Trie));
                    Assert.IsType<UnexpectedlyTerminatedActionException>(eval.Exception);
                    Assert.IsType<InvalidOperationException>(eval.Exception.InnerException);
                }
                else
                {
                    Assert.Equal(
                        ToStateKey(txB.Signer),
                        Assert.Single(
                            outputState.GetAccount(ReservedAddresses.LegacyAccount).Trie.Diff(
                                prevState.GetAccount(ReservedAddresses.LegacyAccount).Trie))
                        .Path);
                    Assert.Null(eval.Exception);
                }
            }
        }

        [Fact]
        public void EvaluatePolicyBlockAction()
        {
            var (chain, actionEvaluator) = MakeBlockChainAndActionEvaluator(
                policy: _policy,
                store: _storeFx.Store,
                stateStore: _storeFx.StateStore,
                actionLoader: new SingleActionLoader(typeof(DumbAction)),
                genesisBlock: _storeFx.GenesisBlock,
                privateKey: ChainPrivateKey);
            (_, Transaction[] txs) = MakeFixturesForAppendTests();
            var genesis = chain.Genesis;
            var block = chain.ProposeBlock(
                GenesisProposer,
                txs.ToImmutableList(),
                CreateBlockCommit(chain.Tip),
                new LotMetadata(1L, 0, null).Prove(GenesisProposer).Proof);

            IWorld previousState = actionEvaluator.PrepareInitialDelta(null);
            var evaluation = actionEvaluator.EvaluatePolicyBlockAction(genesis, previousState);

            Assert.Equal(chain.Policy.BlockAction, evaluation.Action);
            Assert.Equal(
                (Integer)1,
                (Integer)evaluation.OutputState
                    .GetAccount(ReservedAddresses.LegacyAccount).GetState(genesis.Miner));
            Assert.True(evaluation.InputContext.BlockAction);

            previousState = evaluation.OutputState;
            evaluation = actionEvaluator.EvaluatePolicyBlockAction(block, previousState);

            Assert.Equal(chain.Policy.BlockAction, evaluation.Action);
            Assert.Equal(
                (Integer)2,
                (Integer)evaluation.OutputState
                    .GetAccount(ReservedAddresses.LegacyAccount).GetState(block.Miner));
            Assert.True(evaluation.InputContext.BlockAction);

            chain.Append(block, CreateBlockCommit(block), render: true);
            previousState = actionEvaluator.PrepareInitialDelta(genesis.StateRootHash);
            var txEvaluations = actionEvaluator.EvaluateBlock(
                block,
                previousState).ToList();
            previousState = txEvaluations.Last().OutputState;
            evaluation = actionEvaluator.EvaluatePolicyBlockAction(block, previousState);

            Assert.Equal(
                (Integer)2,
                (Integer)evaluation.OutputState
                    .GetAccount(ReservedAddresses.LegacyAccount).GetState(block.Miner));
        }

        [Theory]
        [ClassData(typeof(OrderTxsForEvaluationData))]
        public void OrderTxsForEvaluation(
            int protocolVersion,
            List<string> originalAddresses,
            List<string> orderedAddresses)
        {
            const int numSigners = 5;
            const int numTxsPerSigner = 3;
            var epoch = DateTimeOffset.FromUnixTimeSeconds(0);

            TxFixture txFx = new BlockFixture().TxFixture;
            ImmutableArray<PrivateKey> signers = ImmutableArray.Create(
                txFx.PrivateKey1,
                txFx.PrivateKey2,
                txFx.PrivateKey3,
                txFx.PrivateKey4,
                txFx.PrivateKey5
            );
            ImmutableArray<ImmutableArray<int>> noncesPerSigner = ImmutableArray.Create(
                ImmutableArray.Create(0, 2, 1),
                ImmutableArray.Create(1, 0, 2),
                ImmutableArray.Create(1, 2, 0),
                ImmutableArray.Create(2, 0, 1),
                ImmutableArray.Create(2, 1, 0)
            );
            // Unix Epoch used for hard coded timestamp.
            ImmutableArray<Transaction> txs =
                signers.Zip(noncesPerSigner, (signer, nonces) => (signer, nonces))
                    .SelectMany(
                        signerNoncesPair => signerNoncesPair.nonces,
                        (signerNoncesPair, nonce) => (signerNoncesPair.signer, nonce))
                    .Select(signerNoncePair =>
                    {
                        Address targetAddress = signerNoncePair.signer.Address;
                        return new Transaction(
                            new UnsignedTx(
                                new TxInvoice(
                                    genesisHash: null,
                                    updatedAddresses: ImmutableHashSet.Create(targetAddress),
                                    timestamp: epoch,
                                    actions: new TxActionList(new[]
                                    {
                                        new RandomAction(signerNoncePair.signer.Address),
                                    }.ToPlainValues()),
                                    maxGasPrice: null,
                                    gasLimit: null),
                                new TxSigningMetadata(
                                    signerNoncePair.signer.PublicKey,
                                    signerNoncePair.nonce)),
                            signerNoncePair.signer);
                    }).ToImmutableArray();

            // Rearrange transactions so that transactions are not grouped by signers
            // while keeping the hard coded mixed order nonces above.
            txs = txs
                .Where((tx, i) => i % numTxsPerSigner == 0)
                .Concat(txs.Where((tx, i) => i % numTxsPerSigner != 0)).ToImmutableArray();

            // FIXME: Invalid length for PreEvaluationHash.
            byte[] preEvaluationHashBytes =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };

            // Sanity check.
            Assert.True(originalAddresses.SequenceEqual(
                signers.Select(signer => signer.Address.ToString())));

            var orderedTxs = ActionEvaluator.OrderTxsForEvaluation(
                protocolVersion: protocolVersion,
                txs: txs,
                preEvaluationHashBytes: preEvaluationHashBytes.ToImmutableArray()
            ).ToImmutableArray();

            // Check signers are grouped together.
            for (int i = 0; i < numSigners; i++)
            {
                var signerTxs = orderedTxs.Skip(i * numTxsPerSigner).Take(numTxsPerSigner);
                Assert.True(signerTxs.Select(tx => tx.Signer).Distinct().Count() == 1);
            }

            // Check nonces are ordered.
            foreach (var signer in signers)
            {
                var signerTxs = orderedTxs.Where(tx => tx.Signer == signer.Address);
                Assert.Equal(signerTxs.OrderBy(tx => tx.Nonce).ToArray(), signerTxs.ToArray());
            }

            // Check according to spec.
            Assert.True(orderedAddresses.SequenceEqual(
                orderedTxs
                    .Where((tx, i) => i % numTxsPerSigner == 0)
                    .Select(tx => tx.Signer.ToString())));
        }

        [Fact]
        public void TotalUpdatedFungibleAssets()
        {
            var privateKeys = Enumerable.Range(0, 3).Select(_ => new PrivateKey()).ToList();
            var gas = Currency.Uncapped("GAS", 0, null);

            var gasFillActions = privateKeys.Select(pk => new UseGasAction()
            {
                GasUsage = 0,
                Memo = "Refill",
                MintValue = gas * 100,
                Receiver = pk.Address,
            });

            var (chain, actionEvaluator) = MakeBlockChainAndActionEvaluator(
                policy: _policy,
                store: _storeFx.Store,
                stateStore: _storeFx.StateStore,
                actionLoader: new SingleActionLoader(typeof(UseGasAction)),
                actions: gasFillActions,
                privateKey: ChainPrivateKey);
            var addresses = privateKeys.Select(privateKey => privateKey.Address).ToList();

            // Only addresses[0] and addresses[1] are able to mint
            var currency = Currency.Uncapped(
                "FOO", 0, addresses.Take(2).ToImmutableHashSet());

            var useGasActions = privateKeys.Select(pk => new UseGasAction()
            {
                GasUsage = 1,
                Memo = "Use",
                MintValue = currency * 1,
                Receiver = pk.Address,
            }).ToList();

            var txs = privateKeys.Select((privateKey, i) =>
                Transaction.Create(
                    0,
                    privateKey,
                    chain.Genesis.Hash,
                    new[] { useGasActions[i] }.ToPlainValues(),
                    FungibleAssetValue.FromRawValue(gas, 1),
                    2))
                .ToList();

            var genesis = chain.Genesis;
            var block = chain.ProposeBlock(
                GenesisProposer,
                txs.ToImmutableList(),
                CreateBlockCommit(chain.Tip),
                new LotMetadata(chain.Tip.Index + 1, 0, null).Prove(GenesisProposer).Proof);

            var evals = actionEvaluator.EvaluateBlock(
                block,
                new World(chain.GetWorldState(block.PreviousHash)));

            // Does not include policy block action
            Assert.Equal(3, evals.Count());
            var latest = evals.Last().OutputState;

            // Only addresses[0] and addresses[1] succeeded in minting
            Assert.Equal(
                2,
                latest
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .TotalUpdatedFungibleAssets
                    .Count(updated => updated.Item2.Equals(currency)));
            Assert.Equal(
                4,
                latest
                    .GetAccount(ReservedAddresses.LegacyAccount)
                    .TotalUpdatedFungibleAssets
                    .Count(updated => updated.Item2.Equals(gas)));
            Assert.Contains(
                (addresses[0], currency),
                latest
                    .GetAccount(ReservedAddresses.LegacyAccount).TotalUpdatedFungibleAssets);
            Assert.Contains(
                (addresses[1], currency),
                latest.GetAccount(ReservedAddresses.LegacyAccount).TotalUpdatedFungibleAssets);
            Assert.DoesNotContain(
                (addresses[2], currency),
                latest.GetAccount(ReservedAddresses.LegacyAccount).TotalUpdatedFungibleAssets);
        }

        [Fact]
        public void EvaluateActionAndCollectFee()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            Currency foo = Currency.Uncapped(
                "FOO",
                18,
                null
            );

            var freeGasAction = new UseGasAction()
            {
                GasUsage = 0,
                Memo = "FREE",
                MintValue = FungibleAssetValue.FromRawValue(foo, 10),
                Receiver = address,
            };

            var payGasAction = new UseGasAction()
            {
                GasUsage = 1,
                Memo = "CHARGE",
            };

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: new BlockPolicy(),
                actions: new[] { freeGasAction, },
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(UseGasAction)));
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                maxGasPrice: FungibleAssetValue.FromRawValue(foo, 1),
                gasLimit: 2,
                actions: new[]
                {
                    payGasAction,
                }.ToPlainValues());

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);

            var evaluations = chain.ActionEvaluator.Evaluate(
                block, chain.Store.GetStateRootHash(block.PreviousHash));

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.Null(evaluations.Single().Exception);
            Assert.Equal(
                FungibleAssetValue.FromRawValue(foo, 9),
                chain
                    .GetWorldState(evaluations.Single().OutputState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetBalance(address, foo));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(foo, 1),
                chain
                    .GetWorldState(evaluations.Single().OutputState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetBalance(miner.Address, foo));
        }

        [Fact]
        public void EvaluateThrowingExceedGasLimit()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            Currency foo = Currency.Uncapped(
                "FOO",
                18,
                null
            );

            var freeGasAction = new UseGasAction()
            {
                GasUsage = 0,
                Memo = "FREE",
                MintValue = FungibleAssetValue.FromRawValue(foo, 10),
                Receiver = address,
            };

            var payGasAction = new UseGasAction()
            {
                GasUsage = 10,
                Memo = "CHARGE",
            };

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: new BlockPolicy(),
                actions: new[]
                {
                    freeGasAction,
                },
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(UseGasAction)));
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                maxGasPrice: FungibleAssetValue.FromRawValue(foo, 1),
                gasLimit: 5,
                actions: new[]
                {
                    payGasAction,
                }.ToPlainValues());

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);

            var evaluations = chain.ActionEvaluator.Evaluate(
                block,
                chain.Store.GetStateRootHash(block.PreviousHash));

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.NotNull(evaluations.Single().Exception);
            Assert.NotNull(evaluations.Single().Exception?.InnerException);
            Assert.Equal(
                typeof(GasLimitExceededException),
                evaluations.Single().Exception?.InnerException?.GetType());
            Assert.Equal(
                FungibleAssetValue.FromRawValue(foo, 5),
                chain.GetWorldState(evaluations.Single().OutputState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetBalance(address, foo));
            Assert.Equal(
                FungibleAssetValue.FromRawValue(foo, 5),
                chain.GetWorldState(evaluations.Single().OutputState)
                    .GetAccountState(ReservedAddresses.LegacyAccount)
                    .GetBalance(miner.Address, foo));
        }

        [Fact]
        public void EvaluateThrowingInsufficientBalanceForGasFee()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.Address;
            Currency foo = Currency.Uncapped(
                "FOO",
                18,
                null
            );

            var freeGasAction = new UseGasAction()
            {
                GasUsage = 0,
                Memo = "FREE",
                MintValue = FungibleAssetValue.FromRawValue(foo, 10),
                Receiver = address,
            };

            var payGasAction = new UseGasAction()
            {
                GasUsage = 2,
                Memo = "CHARGE",
            };

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain(
                policy: new BlockPolicy(),
                actions: new[]
                {
                    freeGasAction,
                },
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(UseGasAction)));
            var tx = Transaction.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                maxGasPrice: FungibleAssetValue.FromRawValue(foo, 10),
                gasLimit: 5,
                actions: new[]
                {
                    payGasAction,
                }.ToPlainValues());

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            Block block = chain.ProposeBlock(miner);

            var evaluations = chain.ActionEvaluator.Evaluate(
                block, chain.Store.GetStateRootHash(block.PreviousHash));

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.NotNull(evaluations.Single().Exception);
            Assert.NotNull(evaluations.Single().Exception?.InnerException);
            Assert.Equal(
                typeof(InsufficientBalanceException),
                evaluations.Single().Exception?.InnerException?.GetType());
         }

        [Fact]
        public void GenerateRandomSeed()
        {
            byte[] preEvaluationHashBytes =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            byte[] signature =
            {
                0x30, 0x44, 0x02, 0x20, 0x2f, 0x2d, 0xbe, 0x5a, 0x91, 0x65, 0x59, 0xde, 0xdb,
                0xe8, 0xd8, 0x4f, 0xa9, 0x20, 0xe2, 0x01, 0x29, 0x4d, 0x4f, 0x40, 0xea, 0x1e,
                0x97, 0x44, 0x1f, 0xbf, 0xa2, 0x5c, 0x8b, 0xd0, 0x0e, 0x23, 0x02, 0x20, 0x3c,
                0x06, 0x02, 0x1f, 0xb8, 0x3f, 0x67, 0x49, 0x92, 0x3c, 0x07, 0x59, 0x67, 0x96,
                0xa8, 0x63, 0x04, 0xb0, 0xc3, 0xfe, 0xbb, 0x6c, 0x7a, 0x7b, 0x58, 0x58, 0xe9,
                0x7d, 0x37, 0x67, 0xe1, 0xe9,
            };

            int seed = ActionEvaluator.GenerateRandomSeed(preEvaluationHashBytes, signature, 0);
            Assert.Equal(353767086, seed);
            seed = ActionEvaluator.GenerateRandomSeed(preEvaluationHashBytes, signature, 1);
            Assert.Equal(353767087, seed);
        }

        [Fact]
        public void CheckRandomSeedInAction()
        {
            IntegerSet fx = new IntegerSet(new[] { 5, 10 });

            // txA: ((5 + 1) * 2) + 3 = 15
            (Transaction txA, var deltaA) = fx.Sign(
                0,
                Arithmetic.Add(1),
                Arithmetic.Mul(2),
                Arithmetic.Add(3));

            Block blockA = fx.Propose();
            ActionEvaluation[] evalsA = ActionEvaluator.EvaluateActions(
                blockHeader: blockA,
                tx: txA,
                previousState: fx.CreateWorld(blockA.PreviousHash),
                actions: txA.Actions
                    .Select(action => (IAction)ToAction<Arithmetic>(action))
                    .ToImmutableArray(),
                stateStore: fx.StateStore).ToArray();

            byte[] preEvaluationHashBytes = blockA.PreEvaluationHash.ToByteArray();
            int[] randomSeeds = Enumerable
                .Range(0, txA.Actions.Count)
                .Select(offset => ActionEvaluator.GenerateRandomSeed(
                    preEvaluationHashBytes,
                    txA.Signature,
                    offset))
                .ToArray();

            for (int i = 0; i < evalsA.Length; i++)
            {
                IActionEvaluation eval = evalsA[i];
                IActionContext context = eval.InputContext;
                Assert.Equal(randomSeeds[i], context.RandomSeed);
            }
        }

        [Fact]
        public void MigrateStates()
        {
            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            Log.Debug("Test Start.");
            var chain = MakeBlockChain(
                policy: new BlockPolicy(),
                store: store,
                stateStore: stateStore,
                actionLoader: new SingleActionLoader(typeof(ModernAction)),
                protocolVersion: BlockMetadata.LegacyStateVersion);
            Assert.True(chain.GetWorldState().Legacy);
            var miner = new PrivateKey();
            var preEval1 = TestUtils.ProposeNext(
                chain.Tip,
                miner: miner.PublicKey,
                protocolVersion: BlockMetadata.LegacyStateVersion);
            var block1 = chain.EvaluateAndSign(preEval1, miner);
            var blockCommit = CreateBlockCommit(block1);
            chain.Append(block1, blockCommit);
            Log.Debug("Is World Legacy?");
            Assert.True(chain.GetWorldState().Legacy);

            // A block that doesn't touch any state does not migrate its state.
            var block2 = chain.ProposeBlock(miner, blockCommit);
            blockCommit = CreateBlockCommit(block2);
            chain.Append(block2, blockCommit);
            Log.Debug("Is World Legacy?");
            Assert.True(chain.GetWorldState().Legacy);

            // Check if after migration, accounts can be created correctly.
            var action = new ModernAction()
            {
                Memo = "foo",
            };

            var tx = Transaction.Create(
                nonce: 0,
                privateKey: miner,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action }.ToPlainValues());

            chain.StageTransaction(tx);
            var block3 = chain.ProposeBlock(miner, blockCommit);
            chain.Append(block3, CreateBlockCommit(block3));
            Assert.False(chain.GetWorldState().Legacy);
            var accountStateRoot = stateStore.GetStateRoot(block3.StateRootHash)
                .Get(KeyConverters.ToStateKey(ModernAction.AccountAddress));
            Assert.NotNull(accountStateRoot);
            var accountTrie = stateStore.GetStateRoot(new HashDigest<SHA256>(accountStateRoot));
            Assert.Equal(
                (Text)"foo",
                accountTrie.Get(KeyConverters.ToStateKey(ModernAction.Address)));
        }

        private (Address[], Transaction[]) MakeFixturesForAppendTests(
            PrivateKey privateKey = null,
            DateTimeOffset epoch = default)
        {
            Address[] addresses =
            {
                _storeFx.Address1,
                _storeFx.Address2,
                _storeFx.Address3,
                _storeFx.Address4,
                _storeFx.Address5,
            };

            privateKey = privateKey ?? new PrivateKey(new byte[]
            {
                0xa8, 0x21, 0xc7, 0xc2, 0x08, 0xa9, 0x1e, 0x53, 0xbb, 0xb2,
                0x71, 0x15, 0xf4, 0x23, 0x5d, 0x82, 0x33, 0x44, 0xd1, 0x16,
                0x82, 0x04, 0x13, 0xb6, 0x30, 0xe7, 0x96, 0x4f, 0x22, 0xe0,
                0xec, 0xe0,
            });

            Transaction[] txs =
            {
                _storeFx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[0], "foo"),
                        new DumbAction(addresses[1], "bar"),
                    },
                    timestamp: epoch,
                    nonce: 0,
                    privateKey: privateKey),
                _storeFx.MakeTransaction(
                    new[]
                    {
                        new DumbAction(addresses[2], "baz"),
                        new DumbAction(addresses[3], "qux"),
                    },
                    timestamp: epoch.AddSeconds(5),
                    nonce: 1,
                    privateKey: privateKey),
            };

            return (addresses, txs);
        }

        private sealed class EvaluateTestAction : IAction
        {
            public Address SignerKey { get; set; }

            public Address MinerKey { get; set; }

            public Address BlockIndexKey { get; set; }

            public IValue PlainValue => new List(
                SignerKey.Bencoded,
                MinerKey.Bencoded,
                BlockIndexKey.Bencoded);

            public void LoadPlainValue(IValue plainValue)
            {
                 var asList = (List)plainValue;
                 SignerKey = new Address(asList[0]);
                 MinerKey = new Address(asList[1]);
                 BlockIndexKey = new Address(asList[2]);
            }

            public IWorld Execute(IActionContext context) =>
                context.PreviousState
                    .SetAccount(
                        ReservedAddresses.LegacyAccount,
                        context.PreviousState.GetAccount(ReservedAddresses.LegacyAccount)
                            .SetState(SignerKey, (Text)context.Signer.ToHex())
                            .SetState(MinerKey, (Text)context.Miner.ToHex())
                            .SetState(BlockIndexKey, (Integer)context.BlockIndex));
        }

        private sealed class ModernAction : IAction
        {
            public static readonly Address AccountAddress
                = new Address("1230000000000000000000000000000000000000");

            public static readonly Address Address
                = new Address("1234000000000000000000000000000000000000");

            public string Memo { get; set; }

            public IValue PlainValue => new List((Text)Memo);

            public void LoadPlainValue(IValue plainValue)
            {
                var asList = (List)plainValue;
                Memo = ((Text)asList[0]).Value;
            }

            public IWorld Execute(IActionContext context)
            {
                return context.PreviousState
                    .SetAccount(
                        AccountAddress,
                        context.PreviousState.GetAccount(AccountAddress)
                            .SetState(Address, (Text)Memo));
            }
        }

        private sealed class UseGasAction : IAction
        {
            public long GasUsage { get; set; }

            public string Memo { get; set; }

            public FungibleAssetValue? MintValue { get; set; }

            public Address? Receiver { get; set; }

            public IValue PlainValue => new List(
                (Integer)GasUsage,
                (Text)Memo,
                MintValue is null ? (IValue)default(Null) : MintValue.Value.Serialize(),
                Receiver is null ? (IValue)default(Null) : (IValue)(Binary)Receiver.Value.ByteArray
                );

            public void LoadPlainValue(IValue plainValue)
            {
                var asList = (List)plainValue;
                GasUsage = (Bencodex.Types.Integer)asList[0];
                Memo = (Text)asList[1];
                if (!(asList[2] is Bencodex.Types.Null))
                {
                    MintValue = new FungibleAssetValue(asList[2]);
                }

                if (!(asList[3] is Bencodex.Types.Null))
                {
                    Receiver = new Address(asList[3]);
                }
            }

            public IWorld Execute(IActionContext context)
            {
                context.UseGas(GasUsage);
                var state = context.PreviousState
                    .SetAccount(
                        ReservedAddresses.LegacyAccount,
                        context.PreviousState.GetAccount(ReservedAddresses.LegacyAccount)
                            .SetState(context.Signer, (Text)Memo));
                if (!(Receiver is null) && !(MintValue is null))
                {
                    state = state.SetAccount(
                        ReservedAddresses.LegacyAccount,
                        state.GetAccount(ReservedAddresses.LegacyAccount)
                            .MintAsset(context, Receiver.Value, MintValue.Value));
                }

                return state;
            }
        }

        private sealed class MintAction : IAction
        {
            public Currency Currency { get; set; }

            public IValue PlainValue => Currency.Serialize();

            public void LoadPlainValue(IValue plainValue)
            {
                Currency = new Currency(plainValue);
            }

            public IWorld Execute(IActionContext context) =>
                context.PreviousState.SetAccount(
                    ReservedAddresses.LegacyAccount,
                    context.PreviousState.GetAccount(ReservedAddresses.LegacyAccount)
                        .MintAsset(
                            context, context.Signer, FungibleAssetValue.FromRawValue(Currency, 1)));
        }
    }

#pragma warning disable SA1402 // File may only contain a single type
    internal class OrderTxsForEvaluationData : IEnumerable<object[]>
    {
        // For fixture sanity.
        public List<string> OriginalAddresses = new List<string>
        {
            "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
            "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
            "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
            "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
            "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
        };

        // Spec for protocol version < 3.
        public List<string> OrderedAddressesV0 = new List<string>
        {
            "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
            "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
            "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
            "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
            "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
        };

        // Spec for protocol version >= 3.
        public List<string> OrderedAddressesV3 = new List<string>
        {
            "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
            "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
            "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
            "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
            "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
        };

        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[]
            {
                0,
                OriginalAddresses,
                OrderedAddressesV0,
            };
            yield return new object[]
            {
                3,
                OriginalAddresses,
                OrderedAddressesV3,
            };
            yield return new object[]
            {
                BlockMetadata.CurrentProtocolVersion,
                OriginalAddresses,
                OrderedAddressesV3,
            };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
#pragma warning restore SA1402
}
