using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Store;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tests.Store.Trie;
using Libplanet.Tx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class ActionEvaluatorTest
    {
        private readonly ILogger _logger;

        public ActionEvaluatorTest(ITestOutputHelper output)
        {
            Log.Logger = _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext<ActionEvaluatorTest>();
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
                blockAction: false
            ).ToArray();

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
                blockAction: false
            ).ToArray();

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
    }
}
