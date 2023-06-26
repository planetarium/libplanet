using System;
using System.Collections.Generic;
using Libplanet.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A message class for informing that peer is on bootstrapping.
    /// </summary>
    public class ConsensusBootstrapMsg : ConsensusMsg
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusBootstrapMsg"/> class.
        /// </summary>
        /// <param name="bootstrap">A <see cref="Bootstrap"/> information
        /// of <see cref="Validator"/>.</param>
        public ConsensusBootstrapMsg(Bootstrap bootstrap)
            : base(bootstrap.ValidatorPublicKey, bootstrap.Height, bootstrap.Round)
        {
            Bootstrap = bootstrap;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusBootstrapMsg"/> class
        /// with marshalled message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        public ConsensusBootstrapMsg(byte[][] dataframes)
            : this(bootstrap: new Bootstrap(dataframes[0]))
        {
        }

        /// <summary>
        /// A <see cref="Bootstrap"/> of the message.
        /// </summary>
        public Bootstrap Bootstrap { get; }

        /// <inheritdoc cref="MessageContent.DataFrames"/>
        public override IEnumerable<byte[]> DataFrames =>
            new List<byte[]> { Bootstrap.ToByteArray() };

        /// <inheritdoc cref="MessageContent.MessageType"/>
        public override MessageType Type => MessageType.BootstrapMsg;

        /// <inheritdoc cref="ConsensusMsg.Equals(ConsensusMsg?)"/>
        public override bool Equals(ConsensusMsg? other)
        {
            return other is ConsensusBootstrapMsg message &&
                message.Bootstrap.Equals(Bootstrap);
        }

        /// <inheritdoc cref="ConsensusMsg.Equals(object?)"/>
        public override bool Equals(object? obj)
        {
            return obj is ConsensusMsg other && Equals(other);
        }

        /// <inheritdoc cref="ConsensusMsg.GetHashCode"/>
        public override int GetHashCode()
        {
            return HashCode.Combine(Type, Bootstrap);
        }
    }
}
