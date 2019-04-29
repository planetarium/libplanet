using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public abstract class BaseAction : IAction
    {
        public abstract IImmutableDictionary<string, object> PlainValue { get; }

        public abstract IAccountStateDelta Execute(IActionContext context);

        public virtual void Render(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
        }

        public virtual void Unrender(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
        }

        public abstract void LoadPlainValue(IImmutableDictionary<string, object> plainValue);
    }
}
