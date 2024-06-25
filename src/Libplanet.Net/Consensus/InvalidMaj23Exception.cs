using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="Maj23"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="Maj23"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidMaj23Exception : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="maj23">The <see cref="Maj23"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidMaj23Exception(
            string message,
            Maj23 maj23,
            Exception innerException)
            : base(message, innerException)
        {
            Maj23 = maj23;
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidConsensusMessageException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="maj23">The <see cref="Maj23"/> that caused this exception.
        /// </param>
        public InvalidMaj23Exception(string message, Maj23 maj23)
            : base(message)
        {
            Maj23 = maj23;
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
        protected InvalidMaj23Exception(SerializationInfo info, StreamingContext context)
        {
            Maj23 =
                info.GetValue(nameof(Maj23), typeof(Maj23)) as Maj23 ??
                throw new SerializationException(
                    $"{nameof(Maj23)} is expected to be a non-null {nameof(Maj23)}.");
        }

        public Maj23 Maj23 { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Maj23), Maj23);
        }
    }
}
