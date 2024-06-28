using System;
using System.Collections.Generic;
using Libplanet.Consensus;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for <see cref="ConsensusStep.PrePropose"/>.
    /// </summary>
    public class ConsensusLotMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusLotMsg"/> class.
        /// </summary>
        /// <param name="lot">A <see cref="Lot"/>
        /// of given height and round.</param>
        public ConsensusLotMsg(Lot lot)
            : base(lot.PublicKey, lot.ConsensusInformation.Height, lot.ConsensusInformation.Round)
        {
            Lot = lot;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusLotMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusLotMsg(byte[][] dataframes)
            : this(lot: new Lot(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Lot"/> of the message.
        /// </summary>
        public Lot Lot { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { Lot.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusLot;

        /// <inheritdoc/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusLotMsg message && message.Lot.Equals(Lot);
        }

        /// <inheritdoc/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, Lot);
        }
    }
}
