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
        private readonly ISystemAccounts _systemAccounts = new SystemAccounts(
            new SystemAccountsGetter(_ => ReservedAddresses.DefaultAccount), null);

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
            IWorld world = new World(new MockWorldState());
            world = world.SetAccount(
                ReservedAddresses.DefaultAccount,
                world.GetAccount(ReservedAddresses.DefaultAccount).SetState(address, (Text)"item"));
            var evaluation = new ActionEvaluation(
                new DumbAction(address, "item"),
                new ActionContext(
                    address,
                    txid,
                    address,
                    _systemAccounts,
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
                    ReservedAddresses.DefaultAccount).GetState(address)
            );
            Assert.Equal(
                (Text)"item",
                evaluation.OutputState
                    .GetAccount(ReservedAddresses.DefaultAccount).GetState(address)
            );
        }
    }
}
