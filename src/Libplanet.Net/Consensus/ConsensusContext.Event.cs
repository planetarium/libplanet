using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class ConsensusContext
    {
        /// <summary>
        /// An event that is invoked when a <see cref="ConsensusMsg"/> is published.
        /// </summary>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessagePublished;

        /// <inheritdoc cref="Context.ExceptionOccurred"/>
        internal event EventHandler<(long Height, Exception)>? ExceptionOccurred;

        /// <inheritdoc cref="Context.TimeoutProcessed"/>
        internal event EventHandler<(long Height, int Round, ConsensusStep Step)>? TimeoutProcessed;

        /// <inheritdoc cref="Context.StateChanged"/>
        internal event EventHandler<Context.ContextState>? StateChanged;

        /// <inheritdoc cref="Context.MessageConsumed"/>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessageConsumed;

        /// <inheritdoc cref="Context.MutationConsumed"/>
        internal event EventHandler<(long Height, System.Action)>? MutationConsumed;

        private void AttachEventHandlers(Context context)
        {
            // NOTE: Events for testing and debugging.
            context.ExceptionOccurred += (sender, exception) =>
                ExceptionOccurred?.Invoke(this, (context.Height, exception));
            context.TimeoutProcessed += (sender, eventArgs) =>
                TimeoutProcessed?.Invoke(this, (context.Height, eventArgs.Round, eventArgs.Step));
            context.StateChanged += (sender, eventArgs) =>
                StateChanged?.Invoke(this, eventArgs);
            context.MessageConsumed += (sender, message) =>
                MessageConsumed?.Invoke(this, (context.Height, message));
            context.MutationConsumed += (sender, action) =>
                MutationConsumed?.Invoke(this, (context.Height, action));

            // NOTE: Events for consensus logic.
            context.HeightStarted += (sender, height) =>
                _consensusMessageCommunicator.OnStartHeight(height);
            context.RoundStarted += (sender, round) =>
                _consensusMessageCommunicator.OnStartRound(round);
            context.MessageToPublish += (sender, message) =>
            {
                _consensusMessageCommunicator.PublishMessage(message);
                MessagePublished?.Invoke(this, (context.Height, message));
            };
        }
    }
}
