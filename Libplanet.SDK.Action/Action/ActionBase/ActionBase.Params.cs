using System.Reflection;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action.ActionBase
{
    public partial class ActionBase
    {
        public bool IsLoaded { get; private set; } = false;

        public abstract Address StorageAddress { get; }

        private MethodInfo[] CallableMethods =>
            GetType()
                .GetMethods()
                .Where(IsCallableMethod)
                .ToArray();

        private IActionContext ActionContext
        {
            get
            {
                if (_actionContext == null)
                {
                    throw new InvalidOperationException("ActionContext is not set.");
                }

                return _actionContext;
            }
        }

        private IWorld World
        {
            get
            {
                if (_world == null)
                {
                    throw new InvalidOperationException("State is not set.");
                }

                return _world;
            }
        }
    }
}
