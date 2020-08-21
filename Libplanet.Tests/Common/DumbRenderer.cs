using System;
using System.Collections.Immutable;
using System.Threading;
using Libplanet.Action;
using Libplanet.Blockchain;

namespace Libplanet.Tests.Common
{
    public sealed class DumbRenderer : IRenderer
    {
        public DumbRenderer()
        {
            ResetRecords();
        }

        public EventHandler<IAction> RenderEventHandler { get; set; }

        public AsyncLocal<ImmutableList<RenderRecord>> Records { get; private set; } =
            new AsyncLocal<ImmutableList<RenderRecord>>();

        public void ResetRecords()
        {
            Records.Value = ImmutableList<RenderRecord>.Empty;
        }

        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            Records.Value = Records.Value.Add(new RenderRecord
            {
                Render = true,
                Action = action,
                Context = context,
                NextStates = nextStates,
            });

            RenderEventHandler?.Invoke(action, action);
        }

        public void RenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        )
        {
        }

        public void UnrenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            Records.Value = Records.Value.Add(new RenderRecord
            {
                Unrender = true,
                Action = action,
                Context = context,
                NextStates = nextStates,
            });
        }

        public void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        )
        {
        }
    }
}
