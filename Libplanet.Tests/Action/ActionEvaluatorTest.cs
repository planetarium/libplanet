using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
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
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tests.Store;
using Libplanet.Tests.Store.Trie;
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

            _policy = new BlockPolicy<DumbAction>(new MinerReward(1), maxBlockBytes: 50 * 1024);
            _storeFx = new DefaultStoreFixture(memory: true, blockAction: _policy.BlockAction);
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
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            HashAlgorithmGetter hashAlgorithmGetter = _ => HashAlgorithmType.Of<SHA256>();
            var noStateRootBlock = TestUtils.MineGenesis(
                hashAlgorithmGetter: hashAlgorithmGetter,
                timestamp: timestamp,
                transactions: txs);
            var stateRootBlock = TestUtils.MineGenesis(
                hashAlgorithmGetter: hashAlgorithmGetter,
                timestamp: timestamp,
                transactions: txs).AttachStateRootHash(hashAlgorithmGetter, stateStore, null);
            var actionEvaluator =
                new ActionEvaluator<RandomAction>(
                    hashAlgorithmGetter: _ => HashAlgorithmType.Of<SHA256>(),
                    policyBlockAction: null,
                    stateGetter: ActionEvaluator<RandomAction>.NullStateGetter,
                    balanceGetter: ActionEvaluator<RandomAction>.NullBalanceGetter,
                    trieGetter: null);
            var generatedRandomNumbers = new List<int>();

            Assert.NotEqual(stateRootBlock.Hash, noStateRootBlock.Hash);
            AssertBytesEqual(stateRootBlock.PreEvaluationHash, noStateRootBlock.PreEvaluationHash);

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

            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
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
            await chain.MineBlock(_storeFx.Address1);

            var evaluations = chain.ActionEvaluator.Evaluate(
                chain.Tip,
                StateCompleterSet<EvaluateTestAction>.Recalculate);

            Assert.False(evaluations[0].InputContext.BlockAction);
            Assert.Single(evaluations);
            Assert.Null(evaluations.Single().Exception);
            Assert.Equal(chain.GetState(action.SignerKey), (Text)address.ToHex());
            Assert.Equal(chain.GetState(action.MinerKey), (Text)_storeFx.Address1.ToHex());
            var state = chain.GetState(action.BlockIndexKey);
            Assert.Equal((long)(Integer)state, blockIndex);
        }

        [Fact]
        public async void EvaluateWithException()
        {
            var privateKey = new PrivateKey();
            var address = privateKey.ToAddress();

            var action = new ThrowException { ThrowOnRehearsal = false, ThrowOnExecution = true };

            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
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
            await chain.MineBlock(_storeFx.Address1);
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

            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
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
            var block = Block<ThrowException>.Mine(
                index: 1,
                hashAlgorithm: HashAlgorithmType.Of<SHA256>(),
                difficulty: 1,
                previousTotalDifficulty: genesis.TotalDifficulty,
                miner: _storeFx.Address1,
                previousHash: genesis.Hash,
                timestamp: DateTimeOffset.UtcNow,
                transactions: ImmutableArray.Create(tx));
            IAccountStateDelta previousStates = genesis.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner.GetValueOrDefault());

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

        [SuppressMessage(
            "Microsoft.StyleCop.CSharp.ReadabilityRules",
            "SA1118",
            Justification = "Long array literals should be multiline.")]
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
            Block<DumbAction> genesis = MineGenesis<DumbAction>(hashAlgoGetter);
            ActionEvaluator<DumbAction> actionEvaluator = new ActionEvaluator<DumbAction>(
                hashAlgorithmGetter: _ => HashAlgorithmType.Of<SHA256>(),
                policyBlockAction: null,
                stateGetter: ActionEvaluator<DumbAction>.NullStateGetter,
                balanceGetter: ActionEvaluator<DumbAction>.NullBalanceGetter,
                trieGetter: null);
            IAccountStateDelta previousStates = genesis.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    genesis.Miner.GetValueOrDefault());
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
                    timestamp: DateTimeOffset.MinValue.AddSeconds(1)),
                Transaction<DumbAction>.Create(
                    nonce: 0,
                    privateKey: _txFx.PrivateKey2,
                    genesisHash: genesis.Hash,
                    actions: new[] { MakeAction(addresses[2], 'C', addresses[3]) },
                    timestamp: DateTimeOffset.MinValue.AddSeconds(2)),
                Transaction<DumbAction>.Create(
                    nonce: 0,
                    privateKey: _txFx.PrivateKey3,
                    genesisHash: genesis.Hash,
                    actions: new DumbAction[0],
                    timestamp: DateTimeOffset.MinValue.AddSeconds(8)),
            };
            int i = 0;
            foreach (Transaction<DumbAction> tx in block1Txs)
            {
                _logger.Debug("{0}[{1}] = {2}", nameof(block1Txs), i, tx.Id);
            }

            Block<DumbAction> block1 = MineNext(genesis, hashAlgoGetter, block1Txs, new byte[] { });
            previousStates = block1.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner.GetValueOrDefault());
            var evals = actionEvaluator.EvaluateTxs(
                block1,
                previousStates).ToImmutableArray();
            int randomValue = 0;
            (int, int, string[], Address)[] expectations =
            {
                (1, 0, new[] { null, null, "C", null, null }, _txFx.Address2),
                (0, 0, new[] { "A", null, "C", null, null }, _txFx.Address1),
                (0, 1, new[] { "A", "B", "C", null, null }, _txFx.Address1),
            };
            Assert.Equal(expectations.Length, evals.Length);
            foreach (var (expect, eval) in expectations.Zip(evals, (x, y) => (x, y)))
            {
                Assert.Equal(block1Txs[expect.Item1].Id, eval.InputContext.TxId);
                Assert.Equal(block1Txs[expect.Item1].Actions[expect.Item2], eval.Action);
                Assert.Equal(expect.Item4, eval.InputContext.Signer);
                Assert.Equal(GenesisMinerAddress, eval.InputContext.Miner);
                Assert.Equal(block1.Index, eval.InputContext.BlockIndex);
                Assert.False(eval.InputContext.Rehearsal);
                randomValue = eval.InputContext.Random.Next();
                Assert.Equal(
                    (Integer)eval.OutputStates.GetState(
                        DumbAction.RandomRecordsAddress),
                    (Integer)randomValue);
                Assert.Equal(
                    expect.Item3,
                    addresses.Select(eval.OutputStates.GetState)
                        .Select(x => x is Text t ? t.Value : null));
            }

            previousStates = block1.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    ActionEvaluator<DumbAction>.NullAccountStateGetter,
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block1.Miner.GetValueOrDefault());
            ActionEvaluation[] evals1 = actionEvaluator.EvaluateBlock(
                block1,
                DateTimeOffset.UtcNow,
                previousStates).ToArray();
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
                    timestamp: DateTimeOffset.MinValue.AddSeconds(5)),
            };
            i = 0;
            foreach (Transaction<DumbAction> tx in block2Txs)
            {
                _logger.Debug("{0}[{1}] = {2}", nameof(block2Txs), i, tx.Id);
            }

            Block<DumbAction> block2 = MineNext(block1, hashAlgoGetter, block2Txs, new byte[] { });
            AccountStateGetter accountStateGetter = dirty1.GetValueOrDefault;
            AccountBalanceGetter accountBalanceGetter = (address, currency)
                => balances1.TryGetValue((address, currency), out FungibleAssetValue v)
                    ? v
                    : new FungibleAssetValue(currency);
            previousStates = block2.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner.GetValueOrDefault());
            evals = actionEvaluator.EvaluateTxs(
                block2,
                previousStates).ToImmutableArray();
            expectations = new[]
            {
                (0, 0, new[] { "A,D", "B", "C", null, null }, _txFx.Address1),
                (1, 0, new[] { "A,D", "B", "C", "E", null }, _txFx.Address2),
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
                Assert.Equal(block2Txs[expect.Item1].Id, eval.InputContext.TxId);
                Assert.Equal(block2Txs[expect.Item1].Actions[expect.Item2], eval.Action);
                Assert.Equal(expect.Item4, eval.InputContext.Signer);
                Assert.Equal(GenesisMinerAddress, eval.InputContext.Miner);
                Assert.Equal(block2.Index, eval.InputContext.BlockIndex);
                Assert.False(eval.InputContext.Rehearsal);
                Assert.Null(eval.Exception);
                Assert.Equal(
                    expect.Item3,
                    addresses
                        .Select(eval.OutputStates.GetState)
                        .Select(x => x is Text t ? t.Value : null));
                randomValue = eval.InputContext.Random.Next();
                Assert.Equal(
                    eval.OutputStates.GetState(
                        DumbAction.RandomRecordsAddress),
                    (Integer)randomValue);
            }

            accountStateGetter = dirty1.GetValueOrDefault;
            accountBalanceGetter = (address, currency) => balances1.TryGetValue(
                (address, currency), out FungibleAssetValue value)
                    ? value
                    : new FungibleAssetValue(currency);
            previousStates = block2.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    accountStateGetter,
                    accountBalanceGetter,
                    block2.Miner.GetValueOrDefault());
            var evals2 = actionEvaluator.EvaluateBlock(
                block2,
                DateTimeOffset.UtcNow,
                previousStates).ToArray();
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
            Address[] addresses =
            {
                new PrivateKey().ToAddress(),
                new PrivateKey().ToAddress(),
                new PrivateKey().ToAddress(),
            };
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
            var block = new Block<DumbAction>(
                index: 1,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: addresses[0],
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: ImmutableArray.Create(tx),
                hashAlgorithm: HashAlgorithmType.Of<SHA256>()
            );
            var actionEvaluator = new ActionEvaluator<DumbAction>(
                hashAlgorithmGetter: _ => HashAlgorithmType.Of<SHA256>(),
                policyBlockAction: null,
                stateGetter: ActionEvaluator<DumbAction>.NullStateGetter,
                balanceGetter: ActionEvaluator<DumbAction>.NullBalanceGetter,
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
        public void EvaluateBlockWithInvalidTxUpdatedAddresses()
        {
            HashAlgorithmGetter hashAlgorithmGetter = _ => HashAlgorithmType.Of<SHA256>();
            ImmutableArray<IValue> rawActions =
                _txFx.TxWithActions
                    .ToRawTransaction(false).Actions.ToImmutableArray();
            Block<PolymorphicAction<BaseAction>> genesis =
                TestUtils.MineGenesis<PolymorphicAction<BaseAction>>(hashAlgorithmGetter);
            RawTransaction rawTxWithoutSig = new RawTransaction(
                0,
                _txFx.Address1.ByteArray,
                genesis.Hash.ByteArray,
                ImmutableArray<ImmutableArray<byte>>.Empty,
                _txFx.PublicKey1.Format(false).ToImmutableArray(),
                DateTimeOffset.UtcNow.ToString(
                    "yyyy-MM-ddTHH:mm:ss.ffffffZ",
                    CultureInfo.InvariantCulture),
                rawActions,
                ImmutableArray<byte>.Empty);
            byte[] sig = _txFx.PrivateKey1.Sign(
                new Transaction<PolymorphicAction<BaseAction>>(
                    rawTxWithoutSig).Serialize(false));
            var invalidTx = new Transaction<PolymorphicAction<BaseAction>>(
                new RawTransaction(
                    0,
                    rawTxWithoutSig.Signer,
                    rawTxWithoutSig.GenesisHash,
                    rawTxWithoutSig.UpdatedAddresses,
                    rawTxWithoutSig.PublicKey,
                    rawTxWithoutSig.Timestamp,
                    rawTxWithoutSig.Actions,
                    sig.ToImmutableArray()));
            Block<PolymorphicAction<BaseAction>> invalidBlock = TestUtils.MineNext(
                previousBlock: genesis,
                hashAlgorithmGetter: hashAlgorithmGetter,
                txs: new List<Transaction<PolymorphicAction<BaseAction>>> { invalidTx });

            var actionEvaluator = new ActionEvaluator<PolymorphicAction<BaseAction>>(
                hashAlgorithmGetter: _ => HashAlgorithmType.Of<SHA256>(),
                policyBlockAction: null,
                stateGetter: ActionEvaluator<PolymorphicAction<BaseAction>>.NullStateGetter,
                balanceGetter: ActionEvaluator<PolymorphicAction<BaseAction>>.NullBalanceGetter,
                trieGetter: null);
            AccountStateGetter nullAccountStateGetter = (address) => null;
            AccountBalanceGetter nullAccountBalanceGetter =
                (address, currency) => new FungibleAssetValue(currency);
            IAccountStateDelta previousStates = invalidBlock.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    nullAccountStateGetter,
                    nullAccountBalanceGetter,
                    invalidBlock.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    nullAccountStateGetter,
                    nullAccountBalanceGetter,
                    invalidBlock.Miner.GetValueOrDefault());

            Assert.Throws<InvalidTxUpdatedAddressesException>(() =>
                actionEvaluator.EvaluateBlock(
                    invalidBlock,
                    DateTimeOffset.UtcNow,
                    previousStates).ToList());
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
                hashAlgorithmGetter: _ => HashAlgorithmType.Of<SHA256>(),
                policyBlockAction: null,
                stateGetter: ActionEvaluator<ThrowException>.NullStateGetter,
                balanceGetter: ActionEvaluator<ThrowException>.NullBalanceGetter,
                trieGetter: null);
            var block = new Block<ThrowException>(
                index: 123,
                difficulty: 0,
                totalDifficulty: 0,
                nonce: new Nonce(new byte[0]),
                miner: GenesisMinerAddress,
                previousHash: null,
                timestamp: DateTimeOffset.UtcNow,
                transactions: ImmutableArray.Create(tx),
                hashAlgorithm: HashAlgorithmType.Of<SHA256>()
            );
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
                miner: blockA.Miner ?? default,
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
                miner: blockB.Miner ?? default,
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
            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain<DumbAction>(
                policy: _policy,
                store: _storeFx.Store,
                stateStore: _storeFx.StateStore,
                genesisBlock: _storeFx.GenesisBlock);
            (var addresses, Transaction<DumbAction>[] txs) =
                MakeFixturesForAppendTests();
            var genesis = chain.Genesis;
            var block = TestUtils.MineNext(
                genesis,
                _policy.GetHashAlgorithm,
                txs,
                difficulty: chain.Policy.GetNextBlockDifficulty(chain)
            ).AttachStateRootHash(_policy.GetHashAlgorithm, chain.StateStore, _policy.BlockAction);
            var stateCompleterSet = StateCompleterSet<DumbAction>.Recalculate;

            AccountStateGetter accountStateGetter =
                ActionEvaluator<DumbAction>.NullAccountStateGetter;
            AccountBalanceGetter accountBalanceGetter =
                ActionEvaluator<DumbAction>.NullAccountBalanceGetter;
            IAccountStateDelta previousStates = block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    accountStateGetter,
                    accountBalanceGetter,
                    genesis.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    accountStateGetter,
                    accountBalanceGetter,
                    genesis.Miner.GetValueOrDefault());
            var evaluation = chain.ActionEvaluator.EvaluatePolicyBlockAction(
                genesis,
                previousStates,
                null);

            Assert.Equal(chain.Policy.BlockAction, evaluation.Action);
            Assert.Equal(
                (Integer)1,
                (Integer)evaluation.OutputStates.GetState(genesis.Miner.GetValueOrDefault()));
            Assert.True(evaluation.InputContext.BlockAction);

            accountStateGetter = address => chain.GetState(
                address,
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
                    accountStateGetter, accountBalanceGetter, block.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    accountStateGetter, accountBalanceGetter, block.Miner.GetValueOrDefault());
            evaluation = chain.ActionEvaluator.EvaluatePolicyBlockAction(
                block,
                previousStates,
                null);

            Assert.Equal(chain.Policy.BlockAction, evaluation.Action);
            Assert.Equal(
                (Integer)2,
                (Integer)evaluation.OutputStates.GetState(block.Miner.GetValueOrDefault()));
            Assert.True(evaluation.InputContext.BlockAction);

            chain.ExecuteActions(block);
            chain.Append(
                block,
                DateTimeOffset.UtcNow,
                evaluateActions: false,
                renderBlocks: true,
                renderActions: false);
            previousStates = block.ProtocolVersion > 0
                ? new AccountStateDeltaImpl(
                    address => chain.GetState(address, block.PreviousHash),
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block.Miner.GetValueOrDefault())
                : new AccountStateDeltaImplV0(
                    address => chain.GetState(address, block.PreviousHash),
                    ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                    block.Miner.GetValueOrDefault());
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
                (Integer)evaluation.OutputStates.GetState(block.Miner.GetValueOrDefault()));
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

            public IValue PlainValue => default(Dictionary);

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
