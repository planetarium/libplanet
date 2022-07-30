using System;
using Libplanet.Blocks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    public partial class Context<T>
    {
        /// <summary>
        /// An event that invoked when any timeout occurs.
        /// </summary>
        internal event EventHandler<(Step, TimeSpan)>? TimeoutOccurred;

        /// <summary>
        /// An event that invoked when any timeout triggered event is processed.
        /// </summary>
        internal event EventHandler<(long, int)>? TimeoutProcessed;

        /// <summary>
        /// An event that invoked when block is proposed.
        /// </summary>
        internal event EventHandler<Block<T>>? BlockProposed;

        /// <summary>
        /// An event that is invoked when <see cref="Round"/> is changed.
        /// </summary>
        internal event EventHandler<int>? RoundChanged;

        /// <summary>
        /// An event that is invoked when <see cref="Step"/> is changed.
        /// </summary>
        internal event EventHandler<Step>? StepChanged;

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
