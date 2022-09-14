using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;

namespace Libplanet.Tests.PoS
{
    public class PoSTest
    {
        protected static IAccountStateDelta InitializeStates()
        {
            return new AccountStateDeltaImpl(
                        ActionEvaluator<DumbAction>.NullAccountStateGetter,
                        ActionEvaluator<DumbAction>.NullAccountBalanceGetter,
                        ActionEvaluator<DumbAction>.NullTotalSupplyGetter,
                        CreateAddress());
        }

        protected static Address CreateAddress()
        {
            PrivateKey privateKey = new PrivateKey();
            return privateKey.ToAddress();
        }
    }
}
