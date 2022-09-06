using System.Linq;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Assets;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
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
                    null,
                    address,
                    txid,
                    address,
                    1,
                    new AccountStateDeltaImpl(
                        addrs => new IValue[addrs.Count],
                        (_, c) => new FungibleAssetValue(c),
                        c => c * 0,
                        address
                    ),
                    123,
                    null,
                    false
                ),
                new AccountStateDeltaImpl(
                    addrs => addrs
                        .Select(a => a.Equals(address) ? (Text)"item" : (IValue)null)
                        .ToArray(),
                    (_, c) => new FungibleAssetValue(c),
                    c => c * 0,
                    address
                )
            );
            var action = (DumbAction)evaluation.Action;

            Assert.Equal(address, action.TargetAddress);
            Assert.Equal("item", action.Item);
            Assert.Equal(address, evaluation.InputContext.Signer);
            Assert.Equal(txid, evaluation.InputContext.TxId);
            Assert.Equal(address, evaluation.InputContext.Miner);
            Assert.Equal(1, evaluation.InputContext.BlockIndex);
            Assert.Null(
                evaluation.InputContext.PreviousStates.GetState(address)
            );
            Assert.Equal(
                (Text)"item",
                evaluation.OutputStates.GetState(address)
            );
        }
    }
}
