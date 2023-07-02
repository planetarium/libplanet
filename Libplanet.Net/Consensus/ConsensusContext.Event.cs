using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class ConsensusContext
    {
        /// <inheritdoc cref="Context.ExceptionOccurred"/>
        internal event EventHandler<(long Height, Exception)>? ExceptionOccurred;

        /// <inheritdoc cref="Context.TimeoutProcessed"/>
        internal event EventHandler<(long Height, int Round, ConsensusStep Step)>? TimeoutProcessed;

        /// <inheritdoc cref="Context.StateChanged"/>
        internal event EventHandler<Context.ContextState>? StateChanged;

        /// <inheritdoc cref="Context.MessagePublished"/>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessagePublished;

        /// <inheritdoc cref="Context.MessageConsumed"/>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessageConsumed;

        /// <inheritdoc cref="Context.MutationConsumed"/>
        internal event EventHandler<(long Height, System.Action)>? MutationConsumed;

        private void AttachEventHandlers(Context context)
        {
            context.ExceptionOccurred += (sender, exception) =>
                ExceptionOccurred?.Invoke(this, (context.Height, exception));
            context.TimeoutProcessed += (sender, eventArgs) =>
                TimeoutProcessed?.Invoke(this, (context.Height, eventArgs.Round, eventArgs.Step));
            context.StateChanged += (sender, eventArgs) =>
                StateChanged?.Invoke(this, eventArgs);
            context.MessagePublished += (sender, message) =>
                MessagePublished?.Invoke(this, (context.Height, message));
            context.MessageConsumed += (sender, message) =>
                MessageConsumed?.Invoke(this, (context.Height, message));
            context.MutationConsumed += (sender, action) =>
                MutationConsumed?.Invoke(this, (context.Height, action));
        }
    }
}
