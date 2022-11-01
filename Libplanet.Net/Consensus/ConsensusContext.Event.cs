using System;
using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class ConsensusContext<T>
        where T : IAction, new()
    {
        /// <inheritdoc cref="Context{T}.ExceptionOccurred"/>
        internal event EventHandler<(long Height, Exception)>? ExceptionOccurred;

        /// <inheritdoc cref="Context{T}.TimeoutProcessed"/>
        internal event EventHandler<(long Height, int Round, Step Step)>? TimeoutProcessed;

        /// <inheritdoc cref="Context{T}.StateChanged"/>
        internal event EventHandler<(long Height, int MessageLogSize, int Round, Step Step)>?
            StateChanged;

        /// <inheritdoc cref="Context{T}.MessageBroadcasted"/>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessageBroadcasted;

        /// <inheritdoc cref="Context{T}.MessageConsumed"/>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessageConsumed;

        /// <inheritdoc cref="Context{T}.MutationConsumed"/>
        internal event EventHandler<(long Height, System.Action)>? MutationConsumed;

        private void AttachEventHandlers(Context<T> context)
        {
            context.ExceptionOccurred += (sender, exception) =>
                ExceptionOccurred?.Invoke(this, (context.Height, exception));
            context.TimeoutProcessed += (sender, eventArgs) =>
                TimeoutProcessed?.Invoke(this, (context.Height, eventArgs.Round, eventArgs.Step));
            context.StateChanged += (sender, eventArgs) =>
                StateChanged?.Invoke(
                    this,
                    (context.Height, eventArgs.MessageLogSize, eventArgs.Round, eventArgs.Step));
            context.MessageBroadcasted += (sender, message) =>
                MessageBroadcasted?.Invoke(this, (context.Height, message));
            context.MessageConsumed += (sender, message) =>
                MessageConsumed?.Invoke(this, (context.Height, message));
            context.MutationConsumed += (sender, action) =>
                MutationConsumed?.Invoke(this, (context.Height, action));
        }
    }
}
