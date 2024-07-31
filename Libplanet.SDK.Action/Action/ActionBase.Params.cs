using System.Reflection;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        public abstract Address StorageAddress { get; }

        private MethodInfo[] CallableMethods => GetType()
            .GetMethods()
            .Where(methodInfo => methodInfo.IsPublic)
            .ToArray();

        private IActionContext ActionContext => _actionContext ??
            throw new InvalidOperationException("ActionContext is not set.");

        private IWorld World => _world ??
            throw new InvalidOperationException("State is not set.");

        private bool Loaded => _args is null || _call is null || _name is null;
    }
}
