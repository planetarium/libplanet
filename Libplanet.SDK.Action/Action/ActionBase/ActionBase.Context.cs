using Libplanet.Action;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action.ActionBase
{
    public partial class ActionBase
    {
        protected Address Signer => ActionContext.Signer;

        protected Address Miner => ActionContext.Miner;

        protected IRandom Random => ActionContext.GetRandom();
    }
}

