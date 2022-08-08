using System.Collections.Immutable;
using System.Numerics;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.Sys;
using Libplanet.Assets;
using Libplanet.Crypto;

namespace Libplanet.Tests.PoS
{
    public class PoSTest
    {
        protected static IAccountStateDelta InitializeStates()
        {
            IImmutableDictionary<Address, IValue> states
                = ImmutableDictionary<Address, IValue>.Empty;
            IImmutableDictionary<(Address, Currency), BigInteger> balances
                = ImmutableDictionary<(Address, Currency), BigInteger>.Empty;
            return new SystemAction.AccountStateDelta(states, balances);
        }

        protected static Address CreateAddress()
        {
            PrivateKey privateKey = new PrivateKey();
            return privateKey.ToAddress();
        }
    }
}
