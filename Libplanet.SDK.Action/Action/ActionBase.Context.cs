using Libplanet.Action;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        protected Address Signer => ActionContext.Signer;

        protected Address Miner => ActionContext.Miner;
    }
}
