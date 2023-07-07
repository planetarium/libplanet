using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.State;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Mocks;
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
            var txid = new System.Random().NextTxId();
            Address address = new PrivateKey().ToAddress();
            var evaluation = new ActionEvaluation(
                new DumbAction(address, "item"),
                new ActionContext(
                    address,
                    txid,
                    address,
                    1,
                    Block.CurrentProtocolVersion,
                    AccountStateDelta.Create(MockAccountState.Empty),
                    123,
                    0,
                    false
                ),
                AccountStateDelta.Create(
                    MockAccountState.Empty
                        .SetState(address, (Text)"item"))
            );
            var action = (DumbAction)evaluation.Action;

            Assert.Equal(address, action.TargetAddress);
            Assert.Equal("item", action.Item);
            Assert.Equal(address, evaluation.InputContext.Signer);
            Assert.Equal(txid, evaluation.InputContext.TxId);
            Assert.Equal(address, evaluation.InputContext.Miner);
            Assert.Equal(1, evaluation.InputContext.BlockIndex);
            Assert.Null(
                evaluation.InputContext.PreviousState.GetState(address)
            );
            Assert.Equal(
                (Text)"item",
                evaluation.OutputState.GetState(address)
            );
        }
    }
}
