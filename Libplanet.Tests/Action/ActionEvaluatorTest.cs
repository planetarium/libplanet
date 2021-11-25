using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Store.Trie;
using Libplanet.Tests.Blocks;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tests.Store;
using Libplanet.Tests.Tx;
using Libplanet.Tx;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Action
{
    public class ActionEvaluatorTest
    {
        private readonly ILogger _logger;
        private readonly ITestOutputHelper _output;
        private readonly BlockPolicy<DumbAction> _policy;
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
            _policy = new BlockPolicy<DumbAction>(
                blockAction: new MinerReward(1),
                getMaxBlockBytes: _ => 50 * 1024);
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
            var txAddress = signer.ToAddress();
            var txs = new[]
            {
                Transaction<RandomAction>.Create(
                    nonce: 0,
                    privateKey: signer,
                    genesisHash: null,
                    actions: new[] { new RandomAction(txAddress), }),
            };
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            HashAlgorithmGetter hashAlgorithmGetter = _ => HashAlgorithmType.Of<SHA256>();
            PreEvaluationBlock<RandomAction> noStateRootBlock = MineGenesis(
                hashAlgorithmGetter: hashAlgorithmGetter,
                miner: GenesisMiner.PublicKey,
                timestamp: timestamp,
                transactions: txs
            );
            Block<RandomAction> stateRootBlock =
                noStateRootBlock.Evaluate(GenesisMiner, null, stateStore);
            var actionEvaluator =
                new ActionEvaluator<RandomAction>(
                    policyBlockAction: null,
                    blockChainStates: NullChainStates<RandomAction>.Instance,
                    trieGetter: null);
            var generatedRandomNumbers = new List<int>();

            AssertPreEvaluationBlocksEqual(stateRootBlock, noStateRootBlock);

            for (int i = 0; i < repeatCount; ++i)
            {
                var actionEvaluations = actionEvaluator.Evaluate(
                    noStateRootBlock,
                    StateCompleterSet<RandomAction>.Reject);
                generatedRandomNumbers.Add(
                    (Integer)actionEvaluations[0].OutputStates.GetState(txAddress));
                actionEvaluations = actionEvaluator.Evaluate(
                    stateRootBlock,
                    StateCompleterSet<RandomAction>.Reject);
                generatedRandomNumbers.Add(
                    (Integer)actionEvaluations[0].OutputStates.GetState(txAddress));
            }

            for (int i = 1; i < generatedRandomNumbers.Count; ++i)
            {
                Assert.Equal(generatedRandomNumbers[0], generatedRandomNumbers[i]);
            }
        }

        [Fact]
        public async void Evaluate()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();
            long blockIndex = 1;

            var action = new EvaluateTestAction();

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain<EvaluateTestAction>(
                policy: new BlockPolicy<EvaluateTestAction>(),
                store: store,
                stateStore: stateStore);
            var tx = Transaction<EvaluateTestAction>.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action });

            chain.StageTransaction(tx);
            var miner = new PrivateKey();
            await chain.MineBlock(miner);

            var evaluations = chain.ActionEvaluator.Evaluate(
                chain.Tip,
                StateCompleterSet<EvaluateTestAction>.Recalculate);

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.Null(evaluations.Single().Exception);
            Assert.Equal(chain.GetState(action.SignerKey), (Text)address.ToHex());
            Assert.Equal(chain.GetState(action.MinerKey), (Text)miner.ToAddress().ToHex());
            var state = chain.GetState(action.BlockIndexKey);
            Assert.Equal((long)(Integer)state, blockIndex);
        }

        [Fact]
        public async void EvaluateWithException()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();

            var action = new ThrowException { ThrowOnRehearsal = false, ThrowOnExecution = true };

            var store = new MemoryStore();
            var stateStore = new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain<ThrowException>(
                policy: new BlockPolicy<ThrowException>(),
                store: store,
                stateStore: stateStore);
            var tx = Transaction<ThrowException>.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: chain.Genesis.Hash,
                actions: new[] { action });

            chain.StageTransaction(tx);
            await chain.MineBlock(new PrivateKey());
            var evaluations = chain.ActionEvaluator.Evaluate(
                chain.Tip,
                StateCompleterSet<ThrowException>.Recalculate);

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
            var address = privateKey.ToAddress();

            var action = new ThrowException
            {
                ThrowOnRehearsal = false,
                ThrowOnExecution = true,
                ExceptionTypeToThrow = typeof(OutOfMemoryException),
            };

            var store = new MemoryStore();
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain<ThrowException>(
                policy: new BlockPolicy<ThrowException>(),
                store: store,
                stateStore: stateStore);
            var genesis = chain.Genesis;
            // Evaluation is run with rehearsal true to get updated addresses on tx creation.
            var tx = Transaction<ThrowException>.Create(
                nonce: 0,
                privateKey: privateKey,
                genesisHash: genesis.Hash,
                actions: new[] { action });
            PreEvaluationBlock<ThrowException> block = new BlockContent<ThrowException>
            {
                Index = 1,
                Difficulty = 1,
                TotalDifficulty = genesis.TotalDifficulty + 1,
                PublicKey = new PrivateKey().PublicKey,
                PreviousHash = genesis.Hash,
                Timestamp = DateTimeOffset.UtcNow,
                Transactions = ImmutableArray.Create(tx),
            }.Mine(HashAlgorithmType.Of<SHA256>());
            IAccountStateDelta previousStates = genesis.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner)
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner);

            // ToList() is required for realization.
            chain.ActionEvaluator.EvaluateTx(
                block: block,
                tx: tx,
                previousStates: previousStates,
                rehearsal: true).ToList();
            Assert.Throws<OutOfMemoryException>(
                () => chain.ActionEvaluator.EvaluateTx(
                    block: block,
                    tx: tx,
                    previousStates: previousStates,
                    rehearsal: false).ToList());
            Assert.Throws<OutOfMemoryException>(
                () => chain.ActionEvaluator.Evaluate(
                    block: block,
                    stateCompleterSet: StateCompleterSet<ThrowException>.Recalculate).ToList());
        }

        [Fact]
        public void EvaluateTxs()
        {
            DumbAction MakeAction(Address address, char identifier, Address? transferTo = null)
            {
                return new DumbAction(
                    targetAddress: address,
                    item: identifier.ToString(),
                    recordRehearsal: false,
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
            HashAlgorithmType hashAlgorithm = HashAlgorithmType.Of<SHA256>();
            HashAlgorithmGetter hashAlgoGetter = _ => hashAlgorithm;
            Block<DumbAction> genesis = MineGenesisBlock<DumbAction>(
                hashAlgoGetter,
                TestUtils.GenesisMiner
            );
            ActionEvaluator<DumbAction> actionEvaluator = new ActionEvaluator<DumbAction>(
                policyBlockAction: null,
                blockChainStates: NullChainStates<DumbAction>.Instance,
                trieGetter: null);
            IAccountStateDelta previousStates = genesis.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner)
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner);
            Assert.Empty(
                actionEvaluator.EvaluateTxs(
                    block: genesis,
                    previousStates: previousStates));

            Transaction<DumbAction>[] block1Txs =
            {
                Transaction<DumbAction>.Create(
                    nonce: 0,
                    privateKey: _txFx.PrivateKey1,
                    genesisHash: genesis.Hash,
                    actions: new[]
                    {
                        MakeAction(addresses[0], 'A', addresses[1]),
                        MakeAction(addresses[1], 'B', addresses[2]),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(2)),
                Transaction<DumbAction>.Create(
                    nonce: 0,
                    privateKey: _txFx.PrivateKey2,
                    genesisHash: genesis.Hash,
                    actions: new[] { MakeAction(addresses[2], 'C', addresses[3]) },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(4)),
                Transaction<DumbAction>.Create(
                    nonce: 0,
                    privateKey: _txFx.PrivateKey3,
                    genesisHash: genesis.Hash,
                    actions: new DumbAction[0],
                    timestamp: DateTimeOffset.MinValue.AddSeconds(7)),
            };
            foreach ((var tx, var i) in block1Txs.Zip(
                Enumerable.Range(0, block1Txs.Count()), (x, y) => (x, y)))
            {
                _logger.Debug("{0}[{1}] = {2}", nameof(block1Txs), i, tx.Id);
            }

            Block<DumbAction> block1 = MineNextBlock(
                genesis,
                hashAlgoGetter,
                GenesisMiner,
                block1Txs,
                new byte[] { }
            );
            previousStates = block1.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner)
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner);
            var evals = actionEvaluator.EvaluateTxs(
                block1,
                previousStates).ToImmutableArray();
            int randomValue = 0;
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
                Assert.Equal(block1Txs[expect.TxIdx].Actions[expect.ActionIdx], eval.Action);
                Assert.Equal(expect.Signer, eval.InputContext.Signer);
                Assert.Equal(GenesisMiner.ToAddress(), eval.InputContext.Miner);
                Assert.Equal(block1.Index, eval.InputContext.BlockIndex);
                Assert.False(eval.InputContext.Rehearsal);
                randomValue = eval.InputContext.Random.Next();
                Assert.Equal(
                    (Integer)eval.OutputStates.GetState(
                        DumbAction.RandomRecordsAddress),
                    (Integer)randomValue);
                Assert.Equal(
                    expect.UpdatedStates,
                    addresses.Select(eval.OutputStates.GetState)
                        .Select(x => x is Text t ? t.Value : null));
            }

            previousStates = block1.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner)
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner);
            ActionEvaluation[] evals1 =
                actionEvaluator.EvaluateBlock(block1, previousStates).ToArray();
            IImmutableDictionary<Address, IValue> dirty1 = evals1.GetDirtyStates();
            IImmutableDictionary<(Address, Currency), FungibleAssetValue> balances1 =
                evals1.GetDirtyBalances();
            Assert.Equal(
                new Dictionary<Address, IValue>
                {
                    [addresses[0]] = (Text)"A",
                    [addresses[1]] = (Text)"B",
                    [addresses[2]] = (Text)"C",
                    [DumbAction.RandomRecordsAddress] = (Integer)randomValue,
                }.ToImmutableDictionary(),
                dirty1);
            Assert.Equal(
                new Dictionary<(Address, Currency), FungibleAssetValue>
                {
                    [(addresses[0], DumbAction.DumbCurrency)] =
                        new FungibleAssetValue(DumbAction.DumbCurrency, -5, 0),
                    [(addresses[1], DumbAction.DumbCurrency)] =
                        new FungibleAssetValue(DumbAction.DumbCurrency),
                    [(addresses[2], DumbAction.DumbCurrency)] =
                        new FungibleAssetValue(DumbAction.DumbCurrency),
                    [(addresses[3], DumbAction.DumbCurrency)] =
                        new FungibleAssetValue(DumbAction.DumbCurrency, 5, 0),
                }.ToImmutableDictionary(),
                balances1);

            Transaction<DumbAction>[] block2Txs =
            {
                // Note that these timestamps in themselves does not have any meanings but are
                // only arbitrary.  These purpose to make their evaluation order in a block
                // equal to the order we (the test) intend:
                Transaction<DumbAction>.Create(
                    0,
                    _txFx.PrivateKey1,
                    genesis.Hash,
                    new[] { MakeAction(addresses[0], 'D') },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(1)),
                Transaction<DumbAction>.Create(
                    0,
                    _txFx.PrivateKey2,
                    genesis.Hash,
                    new[] { MakeAction(addresses[3], 'E') },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(3)),
                Transaction<DumbAction>.Create(
                    0,
                    _txFx.PrivateKey3,
                    genesis.Hash,
                    new[]
                    {
                        new DumbAction(
                            addresses[4],
                            "RecordRehearsal",
                            transferFrom: addresses[0],
                            transferTo: addresses[4],
                            transferAmount: 8,
                            recordRehearsal: true,
                            recordRandom: true),
                    },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(6)),
            };
            foreach ((var tx, var i) in block2Txs.Zip(
                Enumerable.Range(0, block2Txs.Count()), (x, y) => (x, y)))
            {
                _logger.Debug("{0}[{1}] = {2}", nameof(block2Txs), i, tx.Id);
            }

            Block<DumbAction> block2 = MineNextBlock(
                block1,
                hashAlgoGetter,
                GenesisMiner,
                block2Txs,
                new byte[] { }
            );
            AccountStateGetter accountStateGetter = addrs =>
                addrs.Select(dirty1.GetValueOrDefault).ToArray();
            AccountBalanceGetter accountBalanceGetter = (address, currency)
                => balances1.TryGetValue((address, currency), out FungibleAssetValue v)
                    ? v
                    : new FungibleAssetValue(currency);
            previousStates = block2.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner)
                : new AccountStateDeltaImplV0(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner);
            evals = actionEvaluator.EvaluateTxs(
                block2,
                previousStates).ToImmutableArray();

            expectations = new[]
            {
                (1, 0, new[] { "A", "B", "C", "E", null }, _txFx.Address2),
                (0, 0, new[] { "A,D", "B", "C", "E", null }, _txFx.Address1),
                (
                    2,
                    0,
                    new[] { "A,D", "B", "C", "E", "RecordRehearsal:False" },
                    _txFx.Address3
                ),
            };
            Assert.Equal(expectations.Length, evals.Length);
            foreach (var (expect, eval) in expectations.Zip(evals, (x, y) => (x, y)))
            {
                Assert.Equal(block2Txs[expect.TxIdx].Id, eval.InputContext.TxId);
                Assert.Equal(block2Txs[expect.TxIdx].Actions[expect.Item2], eval.Action);
                Assert.Equal(expect.Signer, eval.InputContext.Signer);
                Assert.Equal(GenesisMiner.ToAddress(), eval.InputContext.Miner);
                Assert.Equal(block2.Index, eval.InputContext.BlockIndex);
                Assert.False(eval.InputContext.Rehearsal);
                Assert.Null(eval.Exception);
                Assert.Equal(
                    expect.UpdatedStates,
                    addresses
                        .Select(eval.OutputStates.GetState)
                        .Select(x => x is Text t ? t.Value : null));
                randomValue = eval.InputContext.Random.Next();
                Assert.Equal(
                    eval.OutputStates.GetState(
                        DumbAction.RandomRecordsAddress),
                    (Integer)randomValue);
            }

            accountStateGetter = addrs =>
                addrs.Select(dirty1.GetValueOrDefault).ToArray();
            accountBalanceGetter = (address, currency) => balances1.TryGetValue(
                (address, currency), out FungibleAssetValue value)
                    ? value
                    : new FungibleAssetValue(currency);
            previousStates = block2.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner)
                : new AccountStateDeltaImplV0(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner);
            var evals2 = actionEvaluator.EvaluateBlock(block2, previousStates).ToArray();
            IImmutableDictionary<Address, IValue> dirty2 = evals2.GetDirtyStates();
            IImmutableDictionary<(Address, Currency), FungibleAssetValue> balances2 =
                evals2.GetDirtyBalances();
            Assert.Equal(
                new Dictionary<Address, IValue>
                {
                    [addresses[0]] = (Text)"A,D",
                    [addresses[3]] = (Text)"E",
                    [addresses[4]] = (Text)"RecordRehearsal:False",
                    [DumbAction.RandomRecordsAddress] = (Integer)randomValue,
                }.ToImmutableDictionary(),
                dirty2);
        }

        [Fact]
        public void EvaluateTx()
        {
            PrivateKey[] keys = { new PrivateKey(), new PrivateKey(), new PrivateKey() };
            Address[] addresses = keys.Select(AddressExtensions.ToAddress).ToArray();
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
                new DumbAction(addresses[2], "R", true, recordRandom: true),
            };
            var tx =
                Transaction<DumbAction>.Create(0, _txFx.PrivateKey1, null, actions);
            var block = new BlockContent<DumbAction>
            {
                Index = 1,
                Difficulty = 1,
                TotalDifficulty = 1,
                PublicKey = keys[0].PublicKey,
                PreviousHash = default(BlockHash),
                Transactions = ImmutableArray.Create(tx),
            }.Mine(HashAlgorithmType.Of<SHA256>());
            var actionEvaluator = new ActionEvaluator<DumbAction>(
                policyBlockAction: null,
                blockChainStates: NullChainStates<DumbAction>.Instance,
                trieGetter: null);

            foreach (bool rehearsal in new[] { false, true })
            {
                DumbAction.RehearsalRecords.Value =
                    ImmutableList<(Address, string)>.Empty;
                var evaluations = actionEvaluator.EvaluateTx(
                    block: block,
                    tx: tx,
                    previousStates: new AccountStateDeltaImpl(
                        ActionEvaluator<DumbAction>.NullAccountStateGetter,
                        ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                        tx.Signer),
                    rehearsal: rehearsal).ToImmutableArray();

                Assert.Equal(actions.Length, evaluations.Length);
                string[][] expectedStates =
                {
                    new[] { "0", null, null },
                    new[] { "0", "1", null },
                    new[] { "0,2", "1", null },
                    new[] { "0,2", "1", $"R:{rehearsal}" },
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
                    ActionEvaluation eval = evaluations[i];
                    Assert.Equal(actions[i], eval.Action);
                    Assert.Equal(_txFx.Address1, eval.InputContext.Signer);
                    Assert.Equal(tx.Id, eval.InputContext.TxId);
                    Assert.Equal(addresses[0], eval.InputContext.Miner);
                    Assert.Equal(1, eval.InputContext.BlockIndex);
                    Assert.Equal(rehearsal, eval.InputContext.Rehearsal);
                    Assert.Equal(
                        (Integer)eval.OutputStates.GetState(
                            DumbAction.RandomRecordsAddress),
                        (Integer)eval.InputContext.Random.Next());
                    ActionEvaluation prevEval = i > 0 ? evaluations[i - 1] : null;
                    Assert.Equal(
                        prevEval is null
                            ? initStates
                            : addresses.Select(prevEval.OutputStates.GetState),
                        addresses.Select(eval.InputContext.PreviousStates.GetState));
                    Assert.Equal(
                        expectedStates[i],
                        addresses.Select(eval.OutputStates.GetState)
                            .Select(x => x is Text t ? t.Value : null));
                    Assert.Equal(
                        prevEval is null
                            ? initBalances
                            : addresses.Select(a =>
                                prevEval.OutputStates.GetBalance(a, currency).RawValue),
                        addresses.Select(
                            a => eval.InputContext.PreviousStates
                                    .GetBalance(a, currency).RawValue));
                    Assert.Equal(
                        expectedBalances[i],
                        addresses.Select(a => eval.OutputStates.GetBalance(a, currency).RawValue));
                }

                if (rehearsal)
                {
                    Assert.Contains(
                        (addresses[2], "R"),
                        DumbAction.RehearsalRecords.Value);
                }
                else
                {
                    Assert.DoesNotContain(
                        (addresses[2], "R"),
                        DumbAction.RehearsalRecords.Value);
                }

                DumbAction.RehearsalRecords.Value =
                    ImmutableList<(Address, string)>.Empty;
                IAccountStateDelta delta = actionEvaluator.EvaluateTxResult(
                    block: block,
                    tx: tx,
                    previousStates: new AccountStateDeltaImpl(
                        ActionEvaluator<DumbAction>.NullAccountStateGetter,
                        ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                        tx.Signer),
                    rehearsal: rehearsal);
                Assert.Equal(
                    evaluations[3].OutputStates.GetUpdatedStates(),
                    delta.GetUpdatedStates());

                if (rehearsal)
                {
                    Assert.Contains(
                        (addresses[2], "R"),
                        DumbAction.RehearsalRecords.Value);
                }
                else
                {
                    Assert.DoesNotContain(
                        (addresses[2], "R"),
                        DumbAction.RehearsalRecords.Value);
                }
            }
        }

        [Fact]
        public void EvaluateTxResultThrowingException()
        {
            var action = new ThrowException { ThrowOnRehearsal = false, ThrowOnExecution = true };
            Transaction<ThrowException> tx = Transaction<ThrowException>.Create(
                0,
                _txFx.PrivateKey1,
                null,
                new[] { action },
                ImmutableHashSet<Address>.Empty,
                DateTimeOffset.UtcNow);
            var hash = new BlockHash(GetRandomBytes(32));
            var actionEvaluator = new ActionEvaluator<ThrowException>(
                policyBlockAction: null,
                blockChainStates: NullChainStates<ThrowException>.Instance,
                trieGetter: null);
            var block = new BlockContent<ThrowException>
            {
                Index = 123,
                Difficulty = 1,
                TotalDifficulty = 1,
                PublicKey = GenesisMiner.PublicKey,
                PreviousHash = default(BlockHash),
                Transactions = ImmutableArray.Create(tx),
            }.Mine(HashAlgorithmType.Of<SHA256>());
            var nextStates = actionEvaluator.EvaluateTxResult(
                block: block,
                tx: tx,
                previousStates: new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    tx.Signer),
                rehearsal: false);

            Assert.Empty(nextStates.GetUpdatedStates());
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public async Task EvaluateActions(bool rehearsal)
        {
            IntegerSet fx = new IntegerSet(new[] { 5, 10 });

            // txA: ((5 + 1) * 2) + 3 = 15
            (Transaction<Arithmetic> txA, var deltaA) = fx.Sign(
                0,
                Arithmetic.Add(1),
                Arithmetic.Mul(2),
                Arithmetic.Add(3));

            Block<Arithmetic> blockA = await fx.Mine();
            ActionEvaluation[] evalsA = ActionEvaluator<DumbAction>.EvaluateActions(
                blockA.PreEvaluationHash,
                blockIndex: blockA.Index,
                txid: txA.Id,
                previousStates: fx.CreateAccountStateDelta(0, blockA.PreviousHash),
                miner: blockA.Miner,
                signer: txA.Signer,
                signature: txA.Signature,
                actions: txA.Actions.ToImmutableArray<IAction>(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: fx.GetTrie(blockA.PreviousHash),
                blockAction: false).ToArray();

            Assert.Equal(evalsA.Length, deltaA.Count - 1);
            for (int i = 0; i < evalsA.Length; i++)
            {
                ActionEvaluation eval = evalsA[i];
                IActionContext context = eval.InputContext;
                IAccountStateDelta prevStates = context.PreviousStates;
                IAccountStateDelta outputStates = eval.OutputStates;
                _logger.Debug("evalsA[{0}] = {1}", i, eval);
                _logger.Debug("txA.Actions[{0}] = {1}", i, txA.Actions[i]);

                Assert.Equal(txA.Actions[i], eval.Action);
                Assert.Equal(txA.Id, context.TxId);
                Assert.Equal(blockA.Miner, context.Miner);
                Assert.Equal(blockA.Index, context.BlockIndex);
                Assert.Equal(deltaA[i].RootHash, context.PreviousStateRootHash);
                Assert.Equal(txA.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(rehearsal, context.Rehearsal);
                Assert.Equal(
                    i > 0 ? new[] { txA.Signer } : new Address[0],
                    prevStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaA[i].Value, prevStates.GetState(txA.Signer));
                Assert.Equal(new[] { txA.Signer }, outputStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaA[i + 1].Value, outputStates.GetState(txA.Signer));
                Assert.Null(eval.Exception);
            }

            // txB: error(10 - 3) + -3 =
            //           (10 - 3)      = 7  (only input of error() is left)
            (Transaction<Arithmetic> txB, var deltaB) = fx.Sign(
                1,
                Arithmetic.Sub(3),
                new Arithmetic(),
                Arithmetic.Add(-1));

            Block<Arithmetic> blockB = await fx.Mine();
            ActionEvaluation[] evalsB = ActionEvaluator<DumbAction>.EvaluateActions(
                blockB.PreEvaluationHash,
                blockIndex: blockB.Index,
                txid: txB.Id,
                previousStates: fx.CreateAccountStateDelta(0, blockB.PreviousHash),
                miner: blockB.Miner,
                signer: txB.Signer,
                signature: txB.Signature,
                actions: txB.Actions.ToImmutableArray<IAction>(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: fx.GetTrie(blockB.PreviousHash),
                blockAction: false).ToArray();

            Assert.Equal(evalsB.Length, deltaB.Count - 1);

            for (int i = 0; i < evalsB.Length; i++)
            {
                ActionEvaluation eval = evalsB[i];
                IActionContext context = eval.InputContext;
                IAccountStateDelta prevStates = context.PreviousStates;
                IAccountStateDelta outputStates = eval.OutputStates;

                _logger.Debug("evalsB[{0}] = {@1}", i, eval);
                _logger.Debug("txB.Actions[{0}] = {@1}", i, txB.Actions[i]);

                Assert.Equal(txB.Actions[i], eval.Action);
                Assert.Equal(txB.Id, context.TxId);
                Assert.Equal(blockB.Miner, context.Miner);
                Assert.Equal(blockB.Index, context.BlockIndex);
                Assert.Equal(deltaB[i].RootHash, context.PreviousStateRootHash);
                Assert.Equal(txB.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(rehearsal, context.Rehearsal);
                Assert.Equal(
                    i > 0 ? new[] { txB.Signer } : new Address[0],
                    prevStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaB[i].Value, prevStates.GetState(txB.Signer));
                Assert.Equal(new[] { txB.Signer }, outputStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaB[i + 1].Value, outputStates.GetState(txB.Signer));
                if (i == 1)
                {
                    Assert.IsType<UnexpectedlyTerminatedActionException>(eval.Exception);
                    Assert.IsType<InvalidOperationException>(eval.Exception.InnerException);
                }
                else
                {
                    Assert.Null(eval.Exception);
                }
            }
        }

        [Fact]
        public void EvaluatePolicyBlockAction()
        {
            var chain = MakeBlockChain(
                policy: _policy,
                store: _storeFx.Store,
                stateStore: _storeFx.StateStore,
                genesisBlock: _storeFx.GenesisBlock,
                privateKey: ChainPrivateKey);
            (_, Transaction<DumbAction>[] txs) = MakeFixturesForAppendTests();
            var genesis = chain.Genesis;
            var block = MineNext(
                genesis,
                _policy.GetHashAlgorithm,
                txs,
                miner: GenesisMiner.PublicKey,
                difficulty: chain.Policy.GetNextBlockDifficulty(chain)
            ).Evaluate(GenesisMiner, chain);
            var stateCompleterSet = StateCompleterSet<DumbAction>.Recalculate;

            AccountStateGetter accountStateGetter =
                ActionEvaluator<DumbAction>.NullAccountStateGetter;
            AccountBalanceGetter accountBalanceGetter =
                ActionEvaluator<DumbAction>.NullAccountBalanceGetter;
            IAccountStateDelta previousStates = block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter,
                    accountBalanceGetter,
                    genesis.Miner)
                : new AccountStateDeltaImplV0(
                    accountStateGetter,
                    accountBalanceGetter,
                    genesis.Miner);
            var evaluation = chain.ActionEvaluator.EvaluatePolicyBlockAction(
                genesis,
                previousStates,
                null);

            Assert.Equal(chain.Policy.BlockAction, evaluation.Action);
            Assert.Equal(
                (Integer)1,
                (Integer)evaluation.OutputStates.GetState(genesis.Miner));
            Assert.True(evaluation.InputContext.BlockAction);

            accountStateGetter = addresses => chain.GetStates(
                addresses,
                block.PreviousHash,
                stateCompleterSet.StateCompleter);
            accountBalanceGetter =
                (address, currency) => chain.GetBalance(
                    address,
                    currency,
                    block.PreviousHash,
                    stateCompleterSet.FungibleAssetStateCompleter);
            previousStates = block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter, accountBalanceGetter, block.Miner)
                : new AccountStateDeltaImplV0(
                    accountStateGetter, accountBalanceGetter, block.Miner);
            evaluation = chain.ActionEvaluator.EvaluatePolicyBlockAction(
                block,
                previousStates,
                null);

            Assert.Equal(chain.Policy.BlockAction, evaluation.Action);
            Assert.Equal(
                (Integer)2,
                (Integer)evaluation.OutputStates.GetState(block.Miner));
            Assert.True(evaluation.InputContext.BlockAction);

            chain.ExecuteActions(block);
            chain.Append(
                block,
                evaluateActions: false,
                renderBlocks: true,
                renderActions: false);
            previousStates = block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    addresses => chain.GetStates(addresses, block.PreviousHash),
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block.Miner)
                : new AccountStateDeltaImplV0(
                    addresses => chain.GetStates(addresses, block.PreviousHash),
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block.Miner);
            var txEvaluations = chain.ActionEvaluator.EvaluateTxs(
                block,
                previousStates).ToList();
            previousStates = txEvaluations.Last().OutputStates;
            evaluation = chain.ActionEvaluator.EvaluatePolicyBlockAction(
                block,
                previousStates,
                null);

            Assert.Equal(
                (Integer)2,
                (Integer)evaluation.OutputStates.GetState(block.Miner));
        }

        [Fact]
        public void OrderTxsForEvaluation()
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
            ImmutableArray<Transaction<RandomAction>> txs =
                signers.Zip(noncesPerSigner, (signer, nonces) => (signer, nonces))
                    .SelectMany(
                        signerNoncesPair => signerNoncesPair.nonces,
                        (signerNoncesPair, nonce) => (signerNoncesPair.signer, nonce))
                    .Select(signerNoncePair => Transaction<RandomAction>.Create(
                        nonce: signerNoncePair.nonce,
                        privateKey: signerNoncePair.signer,
                        genesisHash: null,
                        actions: new[] { new RandomAction(signerNoncePair.signer.ToAddress()) },
                        timestamp: epoch)).ToImmutableArray();
            // Rearrange transactions so that transactions are not grouped by signers
            // while keeping the hard coded mixed order nonces above.
            txs = txs
                .Where((tx, i) => i % numTxsPerSigner == 0)
                .Concat(txs.Where((tx, i) => i % numTxsPerSigner != 0)).ToImmutableArray();
            byte[] preEvaluationHashBytes =
            {
                0x45, 0xa2, 0x21, 0x87, 0xe2, 0xd8, 0x85, 0x0b, 0xb3, 0x57,
                0x88, 0x69, 0x58, 0xbc, 0x3e, 0x85, 0x60, 0x92, 0x9c, 0xcc,
            };
            ImmutableArray<byte> preEvaluationHash = preEvaluationHashBytes.ToImmutableArray();

            string[] originalAddresses =
            {
                "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
                "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
            };
            // Sanity check.
            Assert.True(originalAddresses.SequenceEqual(
                signers.Select(signer => signer.ToAddress().ToString())));

            // Make sure to cover every case *and* the currently running protocol does not break.
            int[] protocolVersions = { 0, 3, BlockMetadata.CurrentProtocolVersion };
            foreach (int protocolVersion in protocolVersions)
            {
                var orderedTxs = ActionEvaluator<RandomAction>.OrderTxsForEvaluation(
                    protocolVersion: protocolVersion,
                    txs: txs,
                    preEvaluationHash: preEvaluationHash
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
                    var signerTxs = orderedTxs.Where(tx => tx.Signer == signer.ToAddress());
                    Assert.Equal(signerTxs.OrderBy(tx => tx.Nonce).ToArray(), signerTxs.ToArray());
                }

                List<string> orderedAddresses;
                if (protocolVersion >= 3)
                {
                    // Spec for protocol version >= 3.
                    orderedAddresses = new List<string>
                    {
                        "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                        "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
                        "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
                        "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                        "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                    };
                }
                else
                {
                    // Spec for protocol version < 3.
                    orderedAddresses = new List<string>
                    {
                        "0x921Ba81C0be280C8A2faed79E14aD2a098874759",
                        "0x1d2B31bF9A2CA71051f8c66E1C783Ae70EF32798",
                        "0xB0ea0018Ab647418FA81c384194C9167e6A3C925",
                        "0xfcbfa4977B2Fc7A608E4Bd2F6F0D6b27C0a4cd13",
                        "0xc2A86014073D662a4a9bFCF9CB54263dfa4F5cBc",
                    };
                }

                // Check according to spec.
                Assert.True(orderedAddresses.SequenceEqual(
                    orderedTxs
                        .Where((tx, i) => i % numTxsPerSigner == 0)
                        .Select(tx => tx.Signer.ToString())));
            }
        }

        private (Address[], Transaction<DumbAction>[]) MakeFixturesForAppendTests(
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

            Transaction<DumbAction>[] txs =
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
            public readonly Address SignerKey = new PrivateKey().ToAddress();
            public readonly Address MinerKey = new PrivateKey().ToAddress();
            public readonly Address BlockIndexKey = new PrivateKey().ToAddress();

            public IValue PlainValue => Dictionary.Empty;

            public void LoadPlainValue(IValue plainValue)
            {
            }

            public IAccountStateDelta Execute(IActionContext context) =>
                context.PreviousStates
                    .SetState(SignerKey, (Text)context.Signer.ToHex())
                    .SetState(MinerKey, (Text)context.Miner.ToHex())
                    .SetState(BlockIndexKey, (Integer)context.BlockIndex);
        }
    }
}
