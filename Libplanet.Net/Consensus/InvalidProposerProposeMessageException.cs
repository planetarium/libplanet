using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="ConsensusPropose"/> has invalid proposer for
    /// <see cref="Context{T}.Round"/>.
    /// </summary>
    [Serializable]
    public class InvalidProposerProposeMessageException : InvalidMessageException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidProposerProposeMessageException"/>
        /// class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">A message that has invalid proposer for
        /// <see cref="Context{T}.Round"/>.
        /// </param>
        /// <param name="innerException">An <see cref="Exception"/> that occurs this exception.
        /// </param>
        public InvalidProposerProposeMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidProposerProposeMessageException"/>
        /// class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">A message that has invalid proposer for
        /// <see cref="Context{T}.Round"/>.
        /// </param>
        public InvalidProposerProposeMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidProposerProposeMessageException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo" />
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext" />
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidProposerProposeMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
