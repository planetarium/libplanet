using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// An event that is invoked when an exception is thrown.
        /// </summary>
        internal event EventHandler<(long Height, Exception Exception)>? ExceptionOccurred;

        /// <summary>
        /// An event that invoked when any timeout triggered mutation is processed.
        /// This is conditionally triggered when internal countdown timer has reached zero,
        /// i.e. when certain conditions are met.
        /// </summary>
        internal event EventHandler<(long Height, int Round)>? TimeoutProcessed;

        /// <summary>
        /// An event that is invoked when the message log size, <see cref="Round"/>,
        /// and/or <see cref="Step"/> is changed.
        /// </summary>
        internal event EventHandler<(long Height, int MessageLogSize, int Round, Step Step)>?
            StateChanged;

        /// <summary>
        /// An event that is invoked when a <see cref="ConsensusMsg"/> is broadcasted.
        /// </summary>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessageBroadcasted;

        /// <summary>
        /// An event that is invoked when a queued <see cref="ConsensusMsg"/> is consumed.
        /// </summary>
        internal event EventHandler<(long Height, ConsensusMsg Message)>? MessageConsumed;

        /// <summary>
        /// An event that is invoked when a queued <see cref="System.Action"/> is consumed.
        /// </summary>
        internal event EventHandler<(long Height, System.Action Action)>? MutationConsumed;
    }
}
