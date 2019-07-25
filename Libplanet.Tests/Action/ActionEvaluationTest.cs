using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class ActionEvaluationTest
    {
        [Fact]
        public void Constructor()
        {
            Address address = new PrivateKey().PublicKey.ToAddress();
            var evaluation = new ActionEvaluation(
                new DumbAction(address, "item"),
                new ActionContext(
                    address,
                    address,
                    1,
                    new AccountStateDeltaImpl(_ => null),
                    123,
                    false
                ),
                new AccountStateDeltaImpl(
                    a => a.Equals(address) ? "item" : null
                )
            );
            var action = (DumbAction)evaluation.Action;

            Assert.Equal(address, action.TargetAddress);
            Assert.Equal("item", action.Item);
            Assert.Equal(address, evaluation.InputContext.Signer);
            Assert.Equal(address, evaluation.InputContext.Miner);
            Assert.Equal(1, evaluation.InputContext.BlockIndex);
            Assert.Null(
                evaluation.InputContext.PreviousStates.GetState(address)
            );
            Assert.Equal(
                "item",
                evaluation.OutputStates.GetState(address)
            );
        }
    }
}
