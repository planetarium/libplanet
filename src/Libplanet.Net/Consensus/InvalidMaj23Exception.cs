using System;
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
        /// Initializes a new instance of the <see cref="InvalidMaj23Exception"/> class.
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
        /// Initializes a new instance of the <see cref="InvalidMaj23Exception"/> class.
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

        public Maj23 Maj23 { get; }
    }
}
