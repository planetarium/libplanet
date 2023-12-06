using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Action.Tests
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
            Address address = new PrivateKey().ToAddress();
            IWorld world = new World(new MockWorldState());
            world = world.SetAccount(
                ReservedAddresses.LegacyAccount,
                world.GetAccount(ReservedAddresses.LegacyAccount).SetState(address, (Text)"item"));
            var txid = new System.Random().NextTxId();
            var evaluation = new ActionEvaluation(
                new DumbAction(address, "item"),
                new ActionContext(
                    address,
                    txid,
                    address,
                    1,
                    Block.CurrentProtocolVersion,
                    new World(new MockWorldState()),
                    123,
                    0,
                    false),
                world
            );
            var action = (DumbAction)evaluation.Action;

            Assert.Equal(address, action.TargetAddress);
            Assert.Equal("item", action.Item);
            Assert.Equal(address, evaluation.InputContext.Signer);
            Assert.Equal(txid, evaluation.InputContext.TxId);
            Assert.Equal(address, evaluation.InputContext.Miner);
            Assert.Equal(1, evaluation.InputContext.BlockIndex);
            Assert.Null(
                evaluation.InputContext.PreviousState.GetAccount(
                    ReservedAddresses.LegacyAccount).GetState(address)
            );
            Assert.Equal(
                (Text)"item",
                evaluation.OutputState.GetAccount(ReservedAddresses.LegacyAccount).GetState(address)
            );
        }
    }
}