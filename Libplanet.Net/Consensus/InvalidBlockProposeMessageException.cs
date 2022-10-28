using System;
using System.Runtime.Serialization;
using Libplanet.Blocks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a <see cref="ConsensusProposalMsg"/> has invalid
    /// <see cref="BlockHash"/> (i.e., NIL).
    /// </summary>
    [Serializable]
    public class InvalidBlockProposeMessageException : InvalidMessageException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockProposeMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">A message that has invalid <see cref="BlockHash"/>.
        /// </param>
        /// <param name="innerException">An <see cref="Exception"/> that occurs this exception.
        /// </param>
        public InvalidBlockProposeMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidBlockProposeMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">A message that has invalid <see cref="BlockHash"/>.
        /// </param>
        public InvalidBlockProposeMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidBlockProposeMessageException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo" />
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext" />
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidBlockProposeMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
