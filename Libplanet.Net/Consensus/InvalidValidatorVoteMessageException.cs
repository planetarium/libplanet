using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="ConsensusPreVoteMsg"/> or
    /// <see cref="ConsensusPreCommitMsg"/> has invalid or unknown validator signature.
    /// </summary>
    public class InvalidValidatorVoteMessageException : InvalidMessageException
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidValidatorVoteMessageException"/>
        /// class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">A message that has invalid or unknown validator signature.
        /// </param>
        /// <param name="innerException">An <see cref="Exception"/> that occurs this exception.
        /// </param>
        internal InvalidValidatorVoteMessageException(
            string message,
            Message receivedMessage,
            Exception innerException)
            : base(message, receivedMessage, innerException)
        {
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidValidatorVoteMessageException"/>
        /// class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="receivedMessage">A message that has invalid or unknown validator signature.
        /// </param>
        internal InvalidValidatorVoteMessageException(string message, Message receivedMessage)
            : base(message, receivedMessage)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidValidatorVoteMessageException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo" />
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext" />
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidValidatorVoteMessageException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
