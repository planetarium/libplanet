using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
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
        private readonly StoreFixture _storeFx;
        private readonly TxFixture _txFx;

        private BlockPolicy<DumbAction> _policy;

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
            Address address = signer.ToAddress();
            var timestamp = DateTimeOffset.UtcNow;
            var txs = new[]
            {
                Transaction<RandomAction>.Create(
                    0,
                    signer,
                    null,
                    new[] { new RandomAction(address), }),
            };
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            Block<RandomAction> noStateRootBlock = TestUtils.MineGenesis(
                timestamp: timestamp,
                transactions: txs);
            Block<RandomAction> stateRootBlock = TestUtils.MineGenesis(
                timestamp: timestamp,
                transactions: txs).AttachStateRootHash(stateStore, null);
            var actionEvaluator =
                new ActionEvaluator<RandomAction>(
                    policyBlockAction: null,
                    stateGetter: ActionEvaluator<RandomAction>.NullStateGetter,
                    balanceGetter: ActionEvaluator<RandomAction>.NullBalanceGetter,
                    trieGetter: null);
            var generatedRandomNumbers = new List<int>();

            Assert.NotEqual(stateRootBlock.Hash, noStateRootBlock.Hash);
            Assert.Equal(stateRootBlock.PreEvaluationHash, noStateRootBlock.PreEvaluationHash);

            for (int i = 0; i < repeatCount; ++i)
            {
                var actionEvaluations = actionEvaluator.Evaluate(
                    noStateRootBlock,
                    StateCompleterSet<RandomAction>.Reject);
                generatedRandomNumbers.Add(
                    (Integer)actionEvaluations[0].OutputStates.GetState(address));
                actionEvaluations = actionEvaluator.Evaluate(
                    stateRootBlock,
                    StateCompleterSet<RandomAction>.Reject);
                generatedRandomNumbers.Add(
                    (Integer)actionEvaluations[0].OutputStates.GetState(address));
            }

            for (int i = 1; i < generatedRandomNumbers.Count; ++i)
            {
                Assert.Equal(generatedRandomNumbers[0], generatedRandomNumbers[i]);
            }
        }

        [Fact]
        public async void Evaluate()
        {
            PrivateKey fromPrivateKey = new PrivateKey();
            Address fromAddress = fromPrivateKey.ToAddress();
            long blockIndex = 1;

            TestEvaluateAction action = new TestEvaluateAction();

            var store = new DefaultStore(null);
            var stateStore =
                new TrieStateStore(new MemoryKeyValueStore(), new MemoryKeyValueStore());
            var chain = TestUtils.MakeBlockChain<TestEvaluateAction>(
                new BlockPolicy<TestEvaluateAction>(),
                store,
                stateStore
            );
            var tx1 = Transaction<TestEvaluateAction>.Create(
                0,
                fromPrivateKey,
                chain.Genesis.Hash,
                new[] { action }
            );

            chain.StageTransaction(tx1);
            await chain.MineBlock(_storeFx.Address1);

            var actionEvaluation = chain.ActionEvaluator.Evaluate(
                chain.Tip,
                StateCompleterSet<TestEvaluateAction>.Recalculate);
            Assert.False(actionEvaluation[0].InputContext.BlockAction);

            Assert.Equal(
                chain.GetState(TestEvaluateAction.SignerKey),
                (Text)fromAddress.ToHex()
            );
            Assert.Equal(
                chain.GetState(TestEvaluateAction.MinerKey),
                (Text)_storeFx.Address1.ToHex());
            var state = chain.GetState(TestEvaluateAction.BlockIndexKey);
            Assert.Equal((long)(Integer)state, blockIndex);
        }

        [Fact]
        public void EvaluateTxGradually()
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
            ActionEvaluator<DumbAction> actionEvaluator = new ActionEvaluator<DumbAction>(
                policyBlockAction: null,
                stateGetter: ActionEvaluator<DumbAction>.NullStateGetter,
                balanceGetter: ActionEvaluator<DumbAction>.NullBalanceGetter,
                trieGetter: null);

            Transaction<DumbAction> tx =
                Transaction<DumbAction>.Create(0, _txFx.PrivateKey1, null, actions);
            foreach (bool rehearsal in new[] { false, true })
            {
                DumbAction.RehearsalRecords.Value =
                    ImmutableList<(Address, string)>.Empty;
                var evaluations = actionEvaluator.EvaluateTxGradually(
                    tx,
                    default,
                    1,
                    new AccountStateDeltaImpl(
                        address => null,
                        (a, c) => new FungibleAssetValue(c),
                        tx.Signer),
                    addresses[0],
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
                    tx,
                    default,
                    1,
                    new AccountStateDeltaImpl(
                        ActionEvaluator<DumbAction>.NullAccountStateGetter,
                        ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                        tx.Signer),
                    addresses[0],
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
                stateGetter: ActionEvaluator<ThrowException>.NullStateGetter,
                balanceGetter: ActionEvaluator<ThrowException>.NullBalanceGetter,
                trieGetter: null);
            var nextStates = actionEvaluator.EvaluateTxResult(
                tx,
                preEvaluationHash: hash,
                blockIndex: 123,
                previousStates: new AccountStateDeltaImpl(
                    ActionEvaluator<ThrowException>.NullAccountStateGetter,
                    ActionEvaluator<ThrowException>.NullAccountBalanceGetter,
                    tx.Signer),
                miner: GenesisMinerAddress,
                rehearsal: false);

            Assert.Empty(nextStates.GetUpdatedStates());
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public async Task EvaluateGradually(bool rehearsal)
        {
            var fx = new IntegerSet(new[] { 5, 10 });

            // a: ((5 + 1) * 2) + 3 = 15
            (Transaction<Arithmetic> a, var deltaA) = fx.Sign(
                0,
                Arithmetic.Add(1),
                Arithmetic.Mul(2),
                Arithmetic.Add(3)
            );

            Block<Arithmetic> blockA = await fx.Mine();
            ActionEvaluation[] evalsA = ActionEvaluator<DumbAction>.EvaluateGradually(
                blockA.Hash,
                blockIndex: blockA.Index,
                txid: a.Id,
                previousStates: fx.CreateAccountStateDelta(0, blockA.PreviousHash),
                miner: blockA.Miner ?? default,
                signer: a.Signer,
                signature: a.Signature,
                actions: a.Actions.ToImmutableArray<IAction>(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: fx.GetTrie(blockA.PreviousHash),
                blockAction: false).ToArray();

            Assert.Equal(evalsA.Length, deltaA.Count - 1);
            for (int i = 0; i < evalsA.Length; i++)
            {
                ActionEvaluation eval = evalsA[i];
                _logger.Debug("evalsA[{0}] = {1}", i, eval);
                _logger.Debug("a.Actions[{0}] = {1}", i, a.Actions[i]);
                Assert.Equal(a.Actions[i], eval.Action);
                IActionContext context = eval.InputContext;
                Assert.Equal(a.Id, context.TxId);
                Assert.Equal(blockA.Miner, context.Miner);
                Assert.Equal(blockA.Index, context.BlockIndex);
                Assert.Equal(
                    deltaA[i].RootHash,
                    context.PreviousStateRootHash);
                Assert.Equal(a.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(rehearsal, context.Rehearsal);
                IAccountStateDelta prevStates = context.PreviousStates;
                Assert.Equal(
                    i > 0 ? new[] { a.Signer } : new Address[0],
                    prevStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaA[i].Value, prevStates.GetState(a.Signer));
                IAccountStateDelta outputStates = eval.OutputStates;
                Assert.Equal(new[] { a.Signer }, outputStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaA[i + 1].Value, outputStates.GetState(a.Signer));
                Assert.Null(eval.Exception);
            }

            // b: error(10 - 3) + -3 =
            //         (10 - 3)      = 7  (only input of error() is left)
            (Transaction<Arithmetic> b, var deltaB) = fx.Sign(
                1,
                Arithmetic.Sub(3),
                new Arithmetic(),
                Arithmetic.Add(-1));

            Block<Arithmetic> blockB = await fx.Mine();
            ActionEvaluation[] evalsB = ActionEvaluator<DumbAction>.EvaluateGradually(
                blockB.Hash,
                blockIndex: blockB.Index,
                txid: b.Id,
                previousStates: fx.CreateAccountStateDelta(0, blockB.PreviousHash),
                miner: blockB.Miner ?? default,
                signer: b.Signer,
                signature: b.Signature,
                actions: b.Actions.ToImmutableArray<IAction>(),
                rehearsal: rehearsal,
                previousBlockStatesTrie: fx.GetTrie(blockB.PreviousHash),
                blockAction: false).ToArray();

            Assert.Equal(evalsB.Length, deltaB.Count - 1);
            for (int i = 0; i < evalsB.Length; i++)
            {
                ActionEvaluation eval = evalsB[i];
                _logger.Debug("evalsB[{0}] = {@1}", i, eval);
                _logger.Debug("b.Actions[{0}] = {@1}", i, b.Actions[i]);
                Assert.Equal(b.Actions[i], eval.Action);
                IActionContext context = eval.InputContext;
                Assert.Equal(b.Id, context.TxId);
                Assert.Equal(blockB.Miner, context.Miner);
                Assert.Equal(blockB.Index, context.BlockIndex);
                Assert.Equal(
                    deltaB[i].RootHash,
                    context.PreviousStateRootHash);
                Assert.Equal(b.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(rehearsal, context.Rehearsal);
                IAccountStateDelta prevStates = context.PreviousStates;
                Assert.Equal(
                    i > 0 ? new[] { b.Signer } : new Address[0],
                    prevStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaB[i].Value, prevStates.GetState(b.Signer));
                IAccountStateDelta outputStates = eval.OutputStates;
                Assert.Equal(new[] { b.Signer }, outputStates.UpdatedAddresses);
                Assert.Equal((Integer)deltaB[i + 1].Value, outputStates.GetState(b.Signer));
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

        private sealed class TestEvaluateAction : IAction
        {
            public static readonly Address SignerKey = new PrivateKey().ToAddress();
            public static readonly Address MinerKey = new PrivateKey().ToAddress();
            public static readonly Address BlockIndexKey = new PrivateKey().ToAddress();

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
