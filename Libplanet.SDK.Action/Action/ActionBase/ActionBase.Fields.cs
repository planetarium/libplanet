using System.Security;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action.ActionBase
{
    public partial class ActionBase
    {
        private static readonly Address MetadataAddress
            = new Address("999999cf1046e68e36E1aA2E0E07105eDDD1f08E");


        private IValue? _args = null;
        private string? _call = null;

        [SecurityCritical]
        private IActionContext? _actionContext = null;

        [SecurityCritical]
        private IWorld? _world = null;
    }
}

