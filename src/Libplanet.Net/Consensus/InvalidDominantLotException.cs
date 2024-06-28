using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="DominantLot"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="DominantLot"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidDominantLotException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidDominantLotException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="dominantLot">The <see cref="DominantLot"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidDominantLotException(
            string message,
            DominantLot dominantLot,
            Exception innerException)
            : base(message, innerException)
        {
            DominantLot = dominantLot;
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidDominantLotException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="dominantLot">The <see cref="Lot"/> that caused this exception.
        /// </param>
        public InvalidDominantLotException(string message, DominantLot dominantLot)
            : base(message)
        {
            DominantLot = dominantLot;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidDominantLotException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo"/>
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext"/>
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidDominantLotException(SerializationInfo info, StreamingContext context)
        {
            DominantLot =
                info.GetValue(nameof(DominantLot), typeof(DominantLot)) as DominantLot ??
                throw new SerializationException(
                    $"{nameof(DominantLot)} is expected to be a non-null {nameof(DominantLot)}.");
        }

        public DominantLot DominantLot { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(DominantLot), DominantLot);
        }
    }
}
