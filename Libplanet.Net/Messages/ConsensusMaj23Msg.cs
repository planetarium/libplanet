using System;
using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for claiming that the peer has +2/3 votes.
    /// </summary>
    public class ConsensusMaj23Msg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMaj23Msg"/> class.
        /// </summary>
        /// <param name="maj23">A <see cref="Maj23"/> of given height and round.</param>
        public ConsensusMaj23Msg(Maj23 maj23)
            : base(maj23.ValidatorPublicKey, maj23.Height, maj23.Round)
        {
            Maj23 = maj23;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMaj23Msg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusMaj23Msg(byte[][] dataframes)
            : this(maj23: new Maj23(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Maj23"/> of the message.
        /// </summary>
        public Maj23 Maj23 { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { Maj23.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.ConsensusMaj23Msg;

        /// <inheritdoc cref="ConsensusMsg.Equals(ConsensusMsg?)"/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusMaj23Msg message &&
                   message.Maj23.Equals(Maj23);
        }

        /// <inheritdoc cref="ConsensusMsg.Equals(object?)"/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMaj23Msg other && Equals(other);
        }

        /// <inheritdoc cref="ConsensusMsg.GetHashCode"/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, Maj23);
        }
    }
}
