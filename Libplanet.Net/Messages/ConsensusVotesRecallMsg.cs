using System;
using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for informing that peer is on bootstrapping.
    /// </summary>
    public class ConsensusVotesRecallMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusVotesRecallMsg"/> class.
        /// </summary>
        /// <param name="votesRecall">A <see cref="VotesRecall"/> information
        /// of <see cref="Validator"/>.</param>
        public ConsensusVotesRecallMsg(VotesRecall votesRecall)
            : base(votesRecall.ValidatorPublicKey, votesRecall.Height, votesRecall.Round)
        {
            VotesRecall = votesRecall;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusBootstrapMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusVotesRecallMsg(byte[][] dataframes)
            : this(votesRecall: new VotesRecall(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="VotesRecall"/> of the message.
        /// </summary>
        public VotesRecall VotesRecall { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { VotesRecall.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.VotesRecallMsg;

        /// <inheritdoc cref="ConsensusMsg.Equals(ConsensusMsg?)"/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusVotesRecallMsg message &&
                message.VotesRecall.Equals(VotesRecall);
        }

        /// <inheritdoc cref="ConsensusMsg.Equals(object?)"/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc cref="ConsensusMsg.GetHashCode"/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, VotesRecall);
        }
    }
}
