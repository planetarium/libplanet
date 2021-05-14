using System;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Fixtures;
using Libplanet.Tx;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class ActionEvaluationTest
    {
        private readonly ILogger _logger;

        public ActionEvaluationTest(ITestOutputHelper output)
        {
            Log.Logger = _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext<ActionEvaluationTest>();
        }

        [Fact]
        public void Constructor()
        {
            var random = new System.Random();
            var txid = random.NextTxId();
            Address address = new PrivateKey().ToAddress();
            var blockHash = new BlockHash(random.NextBytes(HashDigest<SHA256>.Size));
            var evaluation = new ActionEvaluation(
                new DumbAction(address, "item"),
                new ActionContext(
                    address,
                    txid,
                    address,
                    blockHash,
                    1,
                    new AccountStateDeltaImpl(
                        _ => null,
                        (_, c) => new FungibleAssetValue(c),
                        address
                    ),
                    123,
                    false
                ),
                new AccountStateDeltaImpl(
                    a => a.Equals(address) ? (Text)"item" : null,
                    (_, c) => new FungibleAssetValue(c),
                    address
                )
            );
            var action = (DumbAction)evaluation.Action;

            Assert.Equal(address, action.TargetAddress);
            Assert.Equal("item", action.Item);
            Assert.Equal(address, evaluation.InputContext.Signer);
            Assert.Equal(txid, evaluation.InputContext.TxId);
            Assert.Equal(address, evaluation.InputContext.Miner);
            Assert.Equal(blockHash, evaluation.InputContext.BlockHash);
            Assert.Equal(1, evaluation.InputContext.BlockIndex);
            Assert.Null(
                evaluation.InputContext.PreviousStates.GetState(address)
            );
            Assert.Equal(
                (Text)"item",
                evaluation.OutputStates.GetState(address)
            );
        }

        [Theory]
        [InlineData(false)]
        [InlineData(true)]
        public async Task EvaluateActionsGradually(bool rehearsal)
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
            ActionEvaluation[] evalsA = ActionEvaluation.EvaluateActionsGradually(
                blockA.Hash,
                blockIndex: blockA.Index,
                txid: a.Id,
                previousStates: fx.CreateAccountStateDelta(0, blockA.PreviousHash),
                minerAddress: blockA.Miner ?? default,
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
                Assert.Equal(blockA.Hash, context.BlockHash);
                Assert.Equal(blockA.Index, context.BlockIndex);
                Assert.Equal(
                    deltaA[i].RootHash,
                    context.PreviousStateRootHash
                );
                Assert.Equal(a.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(rehearsal, context.Rehearsal);
                IAccountStateDelta prevStates = context.PreviousStates;
                Assert.Equal(
                    i > 0 ? new[] { a.Signer } : new Address[0],
                    prevStates.UpdatedAddresses
                );
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
                Arithmetic.Add(-1)
            );

            Block<Arithmetic> blockB = await fx.Mine();
            ActionEvaluation[] evalsB = ActionEvaluation.EvaluateActionsGradually(
                blockB.Hash,
                blockIndex: blockB.Index,
                txid: b.Id,
                previousStates: fx.CreateAccountStateDelta(0, blockB.PreviousHash),
                minerAddress: blockB.Miner ?? default,
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
                Assert.Equal(blockB.Hash, context.BlockHash);
                Assert.Equal(blockB.Index, context.BlockIndex);
                Assert.Equal(
                    deltaB[i].RootHash,
                    context.PreviousStateRootHash
                );
                Assert.Equal(b.Signer, context.Signer);
                Assert.False(context.BlockAction);
                Assert.Equal(rehearsal, context.Rehearsal);
                IAccountStateDelta prevStates = context.PreviousStates;
                Assert.Equal(
                    i > 0 ? new[] { b.Signer } : new Address[0],
                    prevStates.UpdatedAddresses
                );
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
