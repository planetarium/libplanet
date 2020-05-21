using System;
using Bencodex.Types;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public abstract class BaseAction : IAction
    {
        public abstract IValue PlainValue { get; }

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

        public abstract void LoadPlainValue(IValue plainValue);

        public virtual void RenderError(IActionContext context, Exception exception)
        {
        }

        public virtual void UnrenderError(IActionContext context, Exception exception)
        {
        }
    }
}
