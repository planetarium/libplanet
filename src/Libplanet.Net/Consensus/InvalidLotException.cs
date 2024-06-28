using System;
using System.Runtime.Serialization;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// An exception thrown when a received <see cref="Lot"/> is invalid.  In particular,
    /// this is thrown pre-emptively before a <see cref="Lot"/> is processed, i.e.
    /// does not change the state of a <see cref="Context"/> in a meaningful way.
    /// </summary>
    [Serializable]
    public class InvalidLotException : Exception
    {
        /// <summary>
        /// Initializes a new instance of <see cref="InvalidLotException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="lot">The <see cref="Lot"/> that caused this exception.
        /// </param>
        /// <param name="innerException">The exception that is the cause of the current exception.
        /// </param>
        public InvalidLotException(
            string message,
            Lot lot,
            Exception innerException)
            : base(message, innerException)
        {
            Lot = lot;
        }

        /// <summary>
        /// Initializes a new instance of <see cref="InvalidLotException"/> class.
        /// </summary>
        /// <param name="message">The error message that explains the reason for the exception.
        /// </param>
        /// <param name="lot">The <see cref="Lot"/> that caused this exception.
        /// </param>
        public InvalidLotException(string message, Lot lot)
            : base(message)
        {
            Lot = lot;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidLotException"/>
        /// class with serialized data.
        /// </summary>
        /// <param name="info">The <see cref="SerializationInfo"/>
        /// that holds the serialized object data about the exception being thrown.
        /// </param>
        /// <param name="context">The <see cref="StreamingContext"/>
        /// that contains contextual information about the source or destination.
        /// </param>
        protected InvalidLotException(SerializationInfo info, StreamingContext context)
        {
            Lot = info.GetValue(nameof(Lot), typeof(Lot)) as Lot? ??
                throw new SerializationException(
                    $"{nameof(Lot)} is expected to be a non-null {nameof(Lot)}.");
        }

        public Lot Lot { get; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Lot), Lot);
        }
    }
}
