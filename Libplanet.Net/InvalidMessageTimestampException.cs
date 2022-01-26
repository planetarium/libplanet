using System;
using System.Runtime.Serialization;
using Libplanet.Net.Messages;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    /// <summary>
    /// An exception that is thrown when the timestamp of an encoded <see cref="Message"/> is
    /// invalid.
    /// </summary>
    [Serializable]
    public class InvalidMessageTimestampException : Exception
    {
        internal InvalidMessageTimestampException(
            string message,
            DateTimeOffset createdOffset,
            TimeSpan? lifespan,
            DateTimeOffset currentOffset,
            Exception innerException
        )
            : base(message, innerException)
        {
            CreatedOffset = createdOffset;
            Lifespan = lifespan;
            CurrentOffset = currentOffset;
        }

        internal InvalidMessageTimestampException(
            string message,
            DateTimeOffset createdOffset,
            TimeSpan? lifespan,
            DateTimeOffset currentOffset)
            : base(message)
        {
            CreatedOffset = createdOffset;
            Lifespan = lifespan;
            CurrentOffset = currentOffset;
        }

        protected InvalidMessageTimestampException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            CreatedOffset = info.GetValue<DateTimeOffset>(nameof(CreatedOffset));
            Lifespan = info.GetValue<TimeSpan?>(nameof(Lifespan));
            CurrentOffset = info.GetValue<DateTimeOffset>(nameof(CurrentOffset));
        }

        internal DateTimeOffset CreatedOffset { get; private set; }

        internal TimeSpan? Lifespan { get; private set; }

        internal DateTimeOffset CurrentOffset { get; private set; }

        public override void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(CreatedOffset), CreatedOffset);
            info.AddValue(nameof(Lifespan), Lifespan);
            info.AddValue(nameof(CurrentOffset), CurrentOffset);
        }
    }
}
