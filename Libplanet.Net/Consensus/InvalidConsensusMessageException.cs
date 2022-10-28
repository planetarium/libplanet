using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="ConsensusMsg"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="ConsensusMsg"/> is processed, i.e.
    /// does not change the state of a <see cref="Context{T}"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidConsensusMessageException : InvalidMessageException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">The <see cref="ConsensusMsg"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidConsensusMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">The <see cref="ConsensusMsg"/> that caused this exception.
        /// </param>
        public InvalidConsensusMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidConsensusMessageException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo"/>
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext"/>
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidConsensusMessageException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
