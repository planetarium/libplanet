using System;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// An event that invoked when any timeout occurs.
        /// </summary>
        internal event EventHandler<(Step Step, TimeSpan TimeSpan)>? TimeoutOccurred;

        /// <summary>
        /// An event that invoked when any timeout triggered mutation is processed.
        /// This is conditionally triggered, i.e. when certain conditions are met
        /// after <see cref="TimeoutOccurred"/> is triggered.
        /// </summary>
        internal event EventHandler<int>? TimeoutProcessed;

        /// <summary>
        /// An event that is invoked when the message log size, <see cref="Round"/>,
        /// and/or <see cref="Step"/> is changed.
        /// </summary>
        internal event EventHandler<(int MessageLogSize, int Round, Step Step)>? StateChanged;

        /// <summary>
        /// An event that is invoked when a queued <see cref="ConsensusMessage"/> is consumed.
        /// </summary>
        internal event EventHandler<ConsensusMessage>? MessageConsumed;

        /// <summary>
        /// An event that is invoked when a queued <see cref="System.Action"/> is consumed.
        /// </summary>
        internal event EventHandler<System.Action>? MutationConsumed;
    }
}
