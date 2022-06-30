using System;
using System.Runtime.Serialization;
using Libplanet.Blockchain;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a <see cref="ConsensusContext{T}.NewHeight"/> has called with
    /// height is not the index of <see cref="BlockChain{T}.Tip"/> + 1.
    /// </summary>
    [Serializable]
    public class InvalidHeightIncreasingException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidHeightIncreasingException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        public InvalidHeightIncreasingException(string message)
            : base(message)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidHeightIncreasingException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo" />
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext" />
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidHeightIncreasingException(
            SerializationInfo info,
            StreamingContext context)
            : base(info, context)
        {
        }
    }
}
