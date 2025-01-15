using System.Reflection;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Crypto;
using Libplanet.SDK.Action.Attributes;

namespace Libplanet.SDK.Action
{
    public partial class ActionBase
    {
        public abstract Address StorageAddress { get; }

        private MethodInfo[] ExecutableMethods => GetType()
            .GetMethods()
            .Where(methodInfo => methodInfo.IsPublic)
            .Where(methodInfo => methodInfo.GetCustomAttribute<ExecutableAttribute>() is { })
            .ToArray();

        private IActionContext ActionContext => _actionContext ??
            throw new InvalidOperationException("ActionContext is not set.");

        private IWorld World => _world ??
            throw new InvalidOperationException("State is not set.");

        private bool Loaded => _args is { } && _exec is { } && _name is { };
    }
}
