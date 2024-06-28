using System;
using System.Collections.Generic;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="ConsensusStep.Sortition"/>.
    /// </summary>
    public class ConsensusDominantLotMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusDominantLotMsg"/> class.
        /// </summary>
        /// <param name="dominantLot">A <see cref="Libplanet.Consensus.DominantLot"/>
        /// that represents dominant <see cref="Lot"/> of given height and round.</param>
        public ConsensusDominantLotMsg(DominantLot dominantLot)
            : base(dominantLot.ValidatorPublicKey, dominantLot.Height, dominantLot.Round)
        {
            DominantLot = dominantLot;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusDominantLotMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusDominantLotMsg(byte[][] dataframes)
            : this(dominantLot: new DominantLot(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="DominantLot"/> of the message.
        /// </summary>
        public DominantLot DominantLot { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { DominantLot.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusDominantLot;

        /// <inheritdoc/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusDominantLotMsg message
                && message.DominantLot.Equals(DominantLot);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, DominantLot);
        }
    }
}
