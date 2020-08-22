using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Blockchain.Renderers;
using Libplanet.Blocks;

namespace Libplanet.Tests.Common
{
    public sealed class DumbRenderer<T> : IRenderer<T>
        where T : IAction, new()
    {
        public DumbRenderer()
        {
            ResetRecords();
        }

        public EventHandler<IAction> RenderEventHandler { get; set; }

        public ImmutableList<RenderRecord> ActionRecords { get; private set; }

        public ImmutableList<(Block<T> Old, Block<T> New)> BlockRecords { get; private set; }

        public ImmutableList<(Block<T> Old, Block<T> New, Block<T> Branchpoint)> ReorgRecords
        {
            get;
            private set;
        }

        public void ResetRecords()
        {
            ActionRecords = ImmutableList<RenderRecord>.Empty;
            BlockRecords = ImmutableList<(Block<T> Old, Block<T> New)>.Empty;
            ReorgRecords = ImmutableList<(Block<T> Old, Block<T> New, Block<T> Branchpoint)>.Empty;
        }

        public void RenderAction(
            IAction action,
            IActionContext context,
            IAccountStateDelta nextStates
        )
        {
            ActionRecords = ActionRecords.Add(new RenderRecord
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
        ) =>
            ActionRecords = ActionRecords.Add(new RenderRecord
            {
                Unrender = true,
                Action = action,
                Context = context,
                NextStates = nextStates,
            });

        public void UnrenderActionError(
            IAction action,
            IActionContext context,
            Exception exception
        )
        {
        }

        public void RenderBlock(Block<T> oldTip, Block<T> newTip) =>
            BlockRecords = BlockRecords.Add((oldTip, newTip));

        public void RenderReorg(Block<T> oldTip, Block<T> newTip, Block<T> branchpoint)
        {
            ReorgRecords = ReorgRecords.Add((oldTip, newTip, branchpoint));
        }
    }
}
