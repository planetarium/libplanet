using System.Security;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        private string? _name = null;
        private IValue? _args = null;
        private string? _call = null;

        [SecurityCritical]
        private IActionContext? _actionContext = null;

        [SecurityCritical]
        private IWorld? _world = null;
    }
}
