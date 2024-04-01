using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Common;
using Libplanet.Crypto;
using Libplanet.Mocks;
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
            var txid = new System.Random().NextTxId();
            Address address = new PrivateKey().Address;
            IWorld world = new World(MockWorldState.CreateModern());
            world = world.SetAccount(
                ReservedAddresses.LegacyAccount,
                world.GetAccount(ReservedAddresses.LegacyAccount).SetState(address, (Text)"item"));
            var evaluation = new ActionEvaluation(
                new DumbAction((address, "item")),
                new ActionContext(
                    address,
                    txid,
                    address,
                    1,
                    Block.CurrentProtocolVersion,
                    new World(MockWorldState.CreateModern()),
                    123,
                    0),
                world);
            var action = (DumbAction)evaluation.Action;

            Assert.Equal(address, action.Set?.At);
            Assert.Equal("item", action.Set?.Item);
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
