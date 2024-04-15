using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when tried to compete <see cref="PreProposal"/>, but
    /// <see cref="ConsensusInformation"/> is not prepared.
    /// </summary>
    [Serializable]
    public class ConsensusInformationNotPreparedException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="ConsensusInformationNotPreparedException"/>
        /// class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        public ConsensusInformationNotPreparedException(string message)
            : base(message)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusInformationNotPreparedException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo" />
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext" />
        /// that contains contextual information about the source or destination.
        /// </param>
        protected ConsensusInformationNotPreparedException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
