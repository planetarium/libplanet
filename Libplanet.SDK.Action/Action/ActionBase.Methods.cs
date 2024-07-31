using Libplanet.Action;
using Libplanet.Action.State;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        private void LoadContext(IActionContext context, IWorld world)
        {
            _actionContext = context;
            _world = world;
        }
    }
}
