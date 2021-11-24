#nullable enable
using System;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    [Serializable]
    public class InvalidTimestampException : Exception
    {
        internal InvalidTimestampException(
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

        internal InvalidTimestampException(
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

        protected InvalidTimestampException(
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
