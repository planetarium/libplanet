using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context
    {
        /// <summary>
        /// An event that is invoked when an <see cref="Exception"/> is thrown.
        /// </summary>
        internal event EventHandler<Exception>? ExceptionOccurred;

        /// <summary>
        /// An event that invoked when any timeout triggered mutation is processed.
        /// This is conditionally triggered when internal countdown timer has reached zero,
        /// i.e. when certain conditions are met.
        /// </summary>
        internal event EventHandler<(int Round, ConsensusStep Step)>? TimeoutProcessed;

        /// <summary>
        /// An event that is invoked when the message log size, <see cref="Round"/>,
        /// and/or <see cref="ConsensusStep"/> is changed.
        /// </summary>
        internal event EventHandler<ContextState>? StateChanged;

        /// <summary>
        /// An event that is invoked when a <see cref="ConsensusMsg"/> is published.
        /// </summary>
        internal event EventHandler<ConsensusMsg>? MessageBroadcasted;

        /// <summary>
        /// An event that is invoked when a queued <see cref="ConsensusMsg"/> is consumed.
        /// </summary>
        /// <remarks>
        /// This only indicates that a <see cref="ConsensusMsg"/> has been dequeued from
        /// internal queue.  This only creates an <see cref="System.Action"/> to be consumed
        /// by a <see cref="MutationConsumerTask"/> and may or may not result in a state change
        /// further down the line.
        /// </remarks>
        internal event EventHandler<ConsensusMsg>? MessageConsumed;

        /// <summary>
        /// An event that is invoked when a queued <see cref="System.Action"/> is consumed.
        /// </summary>
        internal event EventHandler<System.Action>? MutationConsumed;
    }
}
