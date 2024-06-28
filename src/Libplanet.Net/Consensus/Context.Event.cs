using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Types.Consensus;

namespace Libplanet.Net.Consensus
{
    public partial class Context
    {
        /// <summary>
        /// An event that is invoked when <see cref="Context"/> starts via <see cref="Start"/>.
        /// </summary>
        internal event EventHandler<long>? HeightStarted;

        /// <summary>
        /// An event that is invoked when <see cref="Context"/> starts a new round
        /// via <see cref="StartRound"/>.
        /// </summary>
        internal event EventHandler<int>? RoundStarted;

        /// <summary>
        /// An event that is invoked when a <see cref="ConsensusMsg"/> needs to be published.
        /// </summary>
        internal event EventHandler<ConsensusMsg>? MessageToPublish;

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

        /// <summary>
        /// An event that is invoked when the <see cref="HeightVoteSet"/> is modified.
        /// </summary>
        internal event EventHandler<(int Round, VoteFlag Flag, IEnumerable<Vote> Votes)>?
            VoteSetModified;

        internal event EventHandler<(
            ImmutableDictionary<PublicKey, Lot> Lots,
            ImmutableDictionary<PublicKey, DominantLot> DominantLots)>?
            LotSetModified;
    }
}
